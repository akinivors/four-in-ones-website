// Modern AI Engine - Clean, Intelligent Response System
import { isValidElement, type ReactNode, type ReactElement } from 'react'
import { ChatbotResponse, ChatContext, KnowledgeSource, Intent } from './types'
import { PRIORITY_INTENTS, SUGGESTIONS, CTA_BUTTONS } from './config'
import { servicesData, Service, Benefit } from '@/lib/servicesData'
import { contentMap } from '@/lib/serviceContent'
import { knowledgeMap, PROCEDURE_SEARCH_KEYWORDS } from '@/lib/chatbotKnowledgeMap'
import { correctTypos, isLikelyNonEnglish, STOPWORDS } from './queryAnalysis'
import { faqData, FAQItem } from '@/lib/faqData'

// Extracts a markdown-ish plain-text version of a serviceContent.tsx JSX node
// (h3 -> **heading**, li -> * item, p -> paragraph) so the chatbot can surface the
// real procedure content through the same markdown rendering the chat UI already
// supports, instead of a generic "read our website" deflection.
function extractPlainTextFromContent(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return ''
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }
  if (Array.isArray(node)) {
    return node.map(extractPlainTextFromContent).join('')
  }
  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>
    const inner = extractPlainTextFromContent(element.props.children)
    switch (element.type) {
      case 'h3':
        return `**${inner.trim()}**\n\n`
      case 'p':
      case 'ul':
      case 'ol':
        return `${inner.trim()}\n\n`
      case 'li':
        return `* ${inner.trim()}\n`
      case 'strong':
      case 'b':
        return `**${inner}**`
      default:
        return inner
    }
  }
  return ''
}

// --- NEW HELPER FUNCTION FOR LOGGING ---
const logInteraction = (query: string, response: ChatbotResponse, context: ChatContext) => {
  // Fire-and-forget this async function. We don't await it.
  // This ensures that logging *never* slows down the user's response.
  (async () => {
    try {
      await fetch('/api/log-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: context.sessionId,
          query: query,
          response: response.content,
          intent: response.intent,
          source: response.source,
          confidence: response.confidence,
          procedureContext: context.lastProcedure?.slug || null
        })
      });
    } catch (error) {
      console.error('Chat logging failed:', error);
      // We log the error, but don't re-throw.
      // The user's experience is more important than the log.
    }
  })();
};
// --- END NEW HELPER FUNCTION ---

// How many queries after being set that context.lastProcedure still counts as
// "current topic" for routing purposes (follow-up reattachment, FAQ scoring
// boosts). Past this window it's treated as stale so an early mention of one
// procedure can't keep silently hijacking answers to later, unrelated questions.
const PROCEDURE_CONTEXT_FRESHNESS_WINDOW = 2

// One representative procedure from each major category, used to build
// clarifying-question suggestion chips (e.g. "Rhinoplasty cost") when a query
// names a category (cost/recovery/etc.) but no procedure. Each combination is
// verified to round-trip correctly through findProcedure + detectQuestionType:
// the procedure name resolves via its existing slug/keyword substring match,
// and the trailing category word resolves via that category's own keyword
// check - so one click lands on the specific answer, not a generic intro.
const REPRESENTATIVE_PROCEDURES = ['Rhinoplasty', 'Hair Transplant', 'Gastric Sleeve', 'Dental']

function clarifyingSuggestions(categoryWord: string): string[] {
  return REPRESENTATIVE_PROCEDURES.map(procedure => `${procedure} ${categoryWord}`)
}

export class ModernAIEngine {
  private knowledgeSources: KnowledgeSource[] = []
  private static instance: ModernAIEngine
  
  private knowledgeMap = knowledgeMap
  private contentMap = contentMap

  constructor() {
    if (ModernAIEngine.instance) {
      return ModernAIEngine.instance
    }
    ModernAIEngine.instance = this
  }

  public static getInstance(): ModernAIEngine {
    if (!ModernAIEngine.instance) {
      ModernAIEngine.instance = new ModernAIEngine()
    }
    return ModernAIEngine.instance
  }

  async generateResponse(query: string, context: ChatContext): Promise<ChatbotResponse> {
    // Typo correction runs once, here, on the string itself - every matcher
    // below (priority intents, findProcedure, detectQuestionType, the FAQ
    // scorer) operates on plain substrings of normalizedQuery, so a corrected
    // word (e.g. "rhinoplasy" -> "rhinoplasty") is picked up automatically by
    // all of them with no changes needed to the matchers themselves.
    const normalizedQuery = correctTypos(this.normalizeQuery(query))

    // --- THIS IS THE FINAL RESPONSE OBJECT ---
    let finalResponse: ChatbotResponse;

    if (process.env.NODE_ENV === 'development') {
      console.log('🚀 Processing query:', query)
      console.log('🔧 Normalized query:', normalizedQuery)
      console.log('📝 Context:', context)
    }
    
    context.queryCount = (context.queryCount || 0) + 1
    
    const recentQueries = context.conversationHistory
      .slice(-5)
      .filter(h => h.query.toLowerCase() === normalizedQuery.toLowerCase())
    
    if (recentQueries.length >= 2) {
      if (process.env.NODE_ENV === 'development') {
        console.log('🔁 Repeated query detected:', normalizedQuery)
      }
      finalResponse = {
        content: "I notice you've asked this question before. Would you like to speak with a specialist who can provide more detailed, personalized information? They can address your specific concerns in depth.",
        suggestions: ["Schedule consultation", "Ask different question", "Speak to coordinator", "View all FAQs"],
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.95,
        source: 'ai',
        intent: 'repeated_query_escalation'
      };
      
      // --- LOG AND RETURN ---
      logInteraction(normalizedQuery, finalResponse, context);
      return finalResponse;
    }

    if (this.isBareGreeting(normalizedQuery)) {
      finalResponse = {
        content: "Hi there! How can I help you today? Feel free to ask about procedures, costs, recovery times, or anything else about your medical journey.",
        suggestions: SUGGESTIONS.initial,
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.9,
        source: 'ai',
        intent: 'bare_greeting'
      };
      // --- LOG AND RETURN ---
      logInteraction(normalizedQuery, finalResponse, context);
      return finalResponse;
    }

    // Checked before priority intents specifically because 'robot'/'robotic'
    // are also bare patterns in the medical_technology intent below - without
    // this ordering, "I don't want to talk to a robot" was being swallowed
    // into a da Vinci robotic-surgery info-dump.
    if (this.isBotIdentityQuestion(normalizedQuery)) {
      finalResponse = {
        content: "I'm an AI-powered assistant, not a human - but I'm well-equipped to help with detailed questions about our procedures, packages, and the patient journey! If you'd rather speak with a real person on our team, I can connect you with a patient coordinator.",
        suggestions: ["What procedures do you offer?", "Tell me about packages", "Book a consultation"],
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.9,
        source: 'ai',
        intent: 'bot_identity'
      };
      logInteraction(normalizedQuery, finalResponse, context);
      return finalResponse;
    }

    const priorityResponse = this.checkPriorityIntents(normalizedQuery)
    if (priorityResponse) {
      context.conversationHistory.push({
        query: normalizedQuery,
        intent: priorityResponse.intent || 'priority',
        timestamp: new Date()
      })
      
      // --- LOG AND RETURN ---
      logInteraction(normalizedQuery, priorityResponse, context);
      return priorityResponse;
    }

    let procedure = this.findProcedure(normalizedQuery)

    if (!procedure && context.lastProcedure && this.isProcedureContextFresh(context)) {
      const hasFollowUpPattern = this.isFollowUpQuestion(normalizedQuery)
      if (hasFollowUpPattern) {
        procedure = servicesData.find((p: Service) => p.slug === context.lastProcedure!.slug) || null
        if (process.env.NODE_ENV === 'development') {
          console.log('🔗 Using context procedure:', context.lastProcedure.title)
        }
      }
    }

    const questionType = this.detectQuestionType(normalizedQuery)

    if (procedure) {
      context.lastProcedure = {
        slug: procedure.slug,
        title: procedure.hero.title,
        timestamp: new Date(),
        setAtQueryCount: context.queryCount
      }
      if (process.env.NODE_ENV === 'development') {
        console.log('💾 Stored procedure in context:', procedure.hero.title)
      }
    }

    if (questionType !== 'intro') {
      switch (questionType) {
        case 'cost':
          finalResponse = this.generateCostResponse(procedure)
          break
        case 'process':
          finalResponse = this.generateProcessResponse(procedure)
          break
        case 'candidates':
          finalResponse = this.generateCandidatesResponse(procedure)
          break
        case 'recovery':
          finalResponse = this.generateRecoveryResponse(procedure)
          break
        case 'benefits':
          finalResponse = this.generateBenefitsResponse(procedure)
          break
        case 'risks':
          finalResponse = this.generateRisksResponse(procedure)
          break
        default:
          finalResponse = this.generateIntelligentFallback(normalizedQuery, context)
      }
      
      context.conversationHistory.push({
        query: normalizedQuery,
        intent: finalResponse.intent || questionType,
        timestamp: new Date(),
        procedureSlug: procedure?.slug
      })
      
      // --- LOG AND RETURN ---
      logInteraction(normalizedQuery, finalResponse, context);
      return finalResponse;
    }
    
    if (procedure && questionType === 'intro') {
      finalResponse = this.generateProcedureIntro(procedure)
      
      context.conversationHistory.push({
        query: normalizedQuery,
        intent: 'procedure_intro',
        timestamp: new Date(),
        procedureSlug: procedure.slug
      })
      
      // --- LOG AND RETURN ---
      logInteraction(normalizedQuery, finalResponse, context);
      return finalResponse;
    }

    if (this.isEmotionalConcernQuestion(normalizedQuery)) {
      finalResponse = {
        content: "Your safety and peace of mind are our top priorities. We understand that medical tourism can feel overwhelming, especially when traveling alone. You'll have 24/7 support from our patient coordinators, VIP airport transfers, and a personal assistant throughout your stay. We work exclusively with JCI-accredited hospitals and internationally trained, board-certified surgeons. Thousands of international patients trust us each year, and we're here to support you every step of the way.",
        suggestions: ["24/7 support details", "See patient stories", "Hospital certifications", "Talk to coordinator"],
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.95,
        source: 'ai',
        intent: 'safety_quality'
      };
      // --- LOG AND RETURN ---
      logInteraction(normalizedQuery, finalResponse, context);
      return finalResponse;
    }

    if (this.isSafetyQualityQuestion(normalizedQuery)) {
      finalResponse = {
        content: "Your safety is our top priority. We work exclusively with JCI-accredited hospitals and internationally trained, board-certified surgeons. All facilities meet the highest international standards for safety and quality. Our partner hospitals have multiple certifications including JCI (Joint Commission International), ISO standards, and Turkish Ministry of Health accreditation, ensuring world-class medical care.",
        suggestions: ["What is JCI accreditation?", "Surgeon credentials", "See success rates", "Book consultation"],
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.9,
        source: 'ai',
        intent: 'safety_quality'
      };
      // --- LOG AND RETURN ---
      logInteraction(normalizedQuery, finalResponse, context);
      return finalResponse;
    }

    const faqResponse = this.checkFaqKnowledge(normalizedQuery, context)
    if (faqResponse) {
      context.conversationHistory.push({
        query: normalizedQuery,
        intent: faqResponse.intent || 'faq',
        timestamp: new Date(),
        procedureSlug: context.lastProcedure?.slug
      })
      
      // --- LOG AND RETURN ---
      logInteraction(normalizedQuery, faqResponse, context);
      return faqResponse;
    }

    if (this.isFlightCostQuestion(normalizedQuery)) {
      finalResponse = {
        content: "Yes, the cost of flight tickets is included in the total price of our all-inclusive packages. We handle everything from the medical fees and hotel to the transfers and your flights to ensure a completely transparent and stress-free journey.",
        suggestions: SUGGESTIONS.cost_inquiry,
        ctaButton: CTA_BUTTONS.packages,
        confidence: 0.95,
        source: 'ai',
        intent: 'flight_cost_inclusion'
      };
      // --- LOG AND RETURN ---
      logInteraction(normalizedQuery, finalResponse, context);
      return finalResponse;
    }

    if (this.isHotelAccommodationQuestion(normalizedQuery)) {
      finalResponse = {
        content: "Great question! You have options with our accommodation. We work with carefully selected 4-5 star hotels that are recovery-friendly and close to medical facilities. While we pre-select the best options based on your procedure and needs, we're happy to discuss preferences and can often accommodate specific requests. Our patient coordinators will work with you to ensure you're comfortable with your accommodation choice.",
        suggestions: ["What's included?", "Hotel amenities", "How long do I stay?", "Talk to coordinator"],
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.9,
        source: 'ai',
        intent: 'hotel_accommodation'
      };
      // --- LOG AND RETURN ---
      logInteraction(normalizedQuery, finalResponse, context);
      return finalResponse;
    }

    if (this.isMedicalTechnologyQuestion(normalizedQuery)) {
      finalResponse = {
        content: "Da Vinci Robotic Surgery represents the cutting edge of minimally invasive surgical technology. This advanced robotic system allows our surgeons to perform complex procedures with enhanced precision, smaller incisions, reduced scarring, and faster recovery times. We use da Vinci technology for various procedures including gynecological surgeries, urological procedures, and certain gastrointestinal operations. The system provides 3D high-definition vision and instruments that move like a human hand but with greater range of motion and tremor elimination.",
        suggestions: ["Which procedures use it?", "Benefits vs traditional?", "Recovery advantages", "Book consultation"],
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.9,
        source: 'ai',
        intent: 'medical_technology'
      };
      // --- LOG AND RETURN ---
      logInteraction(normalizedQuery, finalResponse, context);
      return finalResponse;
    }

    for (const source of this.knowledgeSources.sort((a, b) => b.priority - a.priority)) {
      const response = await source.search(normalizedQuery, context)
      if (response && response.confidence >= 0.7) {
        // --- LOG AND RETURN ---
        logInteraction(normalizedQuery, response, context);
        return response
      }
    }

    // --- Intelligent fallback ---
    finalResponse = this.generateIntelligentFallback(normalizedQuery, context);
    // --- LOG AND RETURN ---
    logInteraction(normalizedQuery, finalResponse, context);
    return finalResponse;
  }

  // --- (All other private helper functions like normalizeQuery, findProcedure, etc. remain unchanged) ---
  // [ ... all the functions from the previous file ... ]

  // --- 2. HELPER & DETECTION FUNCTIONS (Corrected Versions) ---

  private normalizeQuery(query: string): string {
    return query.toLowerCase().replace(/[?,!.]/g, '')
  }

  // Exact match only (not .includes()) - short words like 'hi' are substrings of
  // lots of unrelated words ("this", "hi-tech"), so a bare greeting is only
  // recognized when the *entire* message is just the greeting itself.
  private isBareGreeting(query: string): boolean {
    const bareGreetings = ['hi', 'hello', 'hey', 'hiya', 'yo', 'good morning', 'good afternoon', 'good evening']
    return bareGreetings.includes(query.trim())
  }

  private checkPriorityIntents(query: string): ChatbotResponse | null {
    // Find the best match across ALL intents rather than returning on the first
    // array match. Patterns are matched by plain substring, so a short, generic
    // pattern in an earlier intent (e.g. 'procedures') would otherwise always beat
    // a longer, more specific pattern in a later intent (e.g. 'robotic procedures'),
    // making the later one permanently unreachable. The longest matching pattern
    // wins; ties keep the original array order as the tiebreaker.
    let bestIntent: Intent | null = null
    let bestMatchLength = -1

    for (const intent of PRIORITY_INTENTS) {
      const matchedPattern = intent.patterns.find(pattern => query.includes(pattern))
      if (matchedPattern && matchedPattern.length > bestMatchLength) {
        bestIntent = intent
        bestMatchLength = matchedPattern.length
      }
    }

    if (!bestIntent) {
      return null
    }
    const intent = bestIntent

    // Handle both string and function responses
    if (typeof intent.response === 'function') {
      return intent.response(query)
    }

    // Map intent names to appropriate suggestions and CTA buttons
    let suggestions = SUGGESTIONS.initial
    let ctaButton: ChatbotResponse['ctaButton'] = CTA_BUTTONS.consultation

    switch (intent.name) {
      case 'flight_cost_inclusion':
      case 'package_inclusions':
        suggestions = SUGGESTIONS.cost_inquiry
        ctaButton = CTA_BUTTONS.packages
        break
      case 'cost_savings':
        suggestions = ["What's included?", "Tell me about packages", "Get free quote", "Browse procedures"]
        ctaButton = CTA_BUTTONS.consultation
        break
      case 'view_procedures':
        suggestions = ["Hair transplant details", "Gastric sleeve info", "Rhinoplasty details", "Get consultation"]
        ctaButton = CTA_BUTTONS.procedures
        break
      case 'hotel_accommodation':
        suggestions = ["What's included?", "Hotel amenities", "How long do I stay?", "Talk to coordinator"]
        ctaButton = CTA_BUTTONS.consultation
        break
      case 'safety_quality':
        suggestions = ["What is JCI accreditation?", "Surgeon credentials", "See success rates", "Book consultation"]
        ctaButton = CTA_BUTTONS.consultation
        break
      case 'medical_technology':
        suggestions = ["Which procedures use it?", "Benefits vs traditional?", "Recovery advantages", "Book consultation"]
        ctaButton = CTA_BUTTONS.consultation
        break
      default:
        suggestions = SUGGESTIONS.initial
        ctaButton = CTA_BUTTONS.consultation
    }

    return {
      content: intent.response,
      suggestions,
      ctaButton,
      confidence: 0.95,
      source: 'ai',
      intent: intent.name
    }
  }

  // CORRECTED: 'stay' removed, 'how i' queries added
  private isHotelAccommodationQuestion(query: string): boolean {
    const hotelWords = ['hotel', 'hotels', 'accommodation', 'room', 'lodging'] // 'stay' is removed
    const choiceWords = ['choose', 'select', 'pick', 'options', 'choice', 'assigned', 'pre-assigned', 'which', 'where', 'what kind', 'kind of', 'type of']
    const questionWords = ['can i', 'do i', 'how i', 'how will i', 'how do i', 'will i', 'am i able', 'is it possible', 'get any', 'get to'] // 'how' queries added
    const generalInquiry = ['about', 'know about', 'tell me about', 'wanna know', 'want to know', 'information about']
    
    const hasHotelWord = hotelWords.some(word => query.includes(word))
    const hasChoiceWord = choiceWords.some(word => query.includes(word))
    const hasQuestionContext = questionWords.some(word => query.includes(word)) || 
                              query.includes('curious') || 
                              query.includes('question') ||
                              query.includes('what kind') ||
                              query.includes('are they')
    const hasGeneralInquiry = generalInquiry.some(phrase => query.includes(phrase))
    
    return hasHotelWord && (hasChoiceWord || hasQuestionContext || hasGeneralInquiry)
  }

  // NEW: Catches emotional concerns and trust issues (high priority)
  private isEmotionalConcernQuestion(query: string): boolean {
    const concernWords = ['nervous', 'worried', 'worry', 'anxious', 'anxiety', 'scared', 'afraid', 'fear', 'fearful', 'concern', 'concerned', 'trust', 'trustworthy', 'reliable', 'skeptical', 'hesitant', 'unsure', 'doubt', 'doubts']
    const aloneWords = ['alone', 'by myself', 'solo']
    const trustPhrases = ['can i trust', 'how do i know', 'are you legitimate', 'are you real', 'is this real', 'is this legitimate']
    
    const hasConcernWord = concernWords.some(word => query.includes(word))
    const hasAloneWord = aloneWords.some(word => query.includes(word))
    const hasTrustPhrase = trustPhrases.some(phrase => query.includes(phrase))
    
    // Catch emotional concerns OR traveling alone concerns OR trust questions
    return hasConcernWord || (hasAloneWord && query.includes('travel')) || hasTrustPhrase
  }

  // Is context.lastProcedure recent enough to still be trusted for routing?
  private isProcedureContextFresh(context: ChatContext): boolean {
    if (!context.lastProcedure) return false
    return context.queryCount - context.lastProcedure.setAtQueryCount <= PROCEDURE_CONTEXT_FRESHNESS_WINDOW
  }

  // NEW: Check if query is a follow-up question (doesn't mention procedure but asks specific questions)
  private isFollowUpQuestion(query: string): boolean {
    // Follow-up question patterns (questions that don't name a procedure)
    const followUpPatterns = [
      // Question type indicators
      'how much', 'what is the cost', 'how does it work', 'what is the process',
      // NOTE: bare 'am i a' was removed here - it matched inside "am i **a**ble",
      // misrouting unrelated questions (e.g. "am I able to pick my own room") as
      // eligibility follow-ups about whatever procedure was last discussed.
      // 'am i a good' below already covers the intended "am I a good candidate" case.
      'am i suitable', 'can i get', 'am i good', 'am i a good',
      'what are the benefit', 'what are the advantage', 'why choose',
      'what are the risk', 'what are the danger', 'what are the side effect',
      'what is the recovery', 'how long to recover', 'recovery time', 
      "what's the recovery", 'recovery like', 'recovery period', 'healing time',  // NEW: More recovery patterns
      'how long does it take', 'what happens', 'when can i',
      
      // Generic question words. Bare 'more' included too - a lazy but very
      // common one-word continuation after an intro ("tell me about X" ->
      // "more"), gated safely since this whole check only ever fires when a
      // fresh procedure is already in context.
      'tell me more', 'more information', 'more details', 'more',
      'explain', 'describe',
      
      // Pronouns suggesting continuation
      'how does this', 'how does that', 'what about this', 'what about that',
      'is this', 'is that', 'will this', 'will that',
      'does this', 'does that', 'can this', 'can that'
    ]
    
    // Check if query matches any follow-up pattern
    const matchesFollowUp = followUpPatterns.some(pattern => query.includes(pattern))
    
    const hasProcedureName = servicesData.some((proc: Service) => 
      query.includes(proc.hero.title.toLowerCase()) || 
      query.includes(proc.slug)
    )
    
    // It's a follow-up if it matches patterns AND doesn't mention a specific procedure
    return matchesFollowUp && !hasProcedureName
  }

  // CORRECTED: Catches general safety CONCERNS, not informational questions
  private isSafetyQualityQuestion(query: string): boolean {
    // Informational questions should go to FAQ, not safety backup
    const informationalPhrases = ['what is', 'what are', 'tell me about', 'what kind', 'what type', 'explain', 'describe']
    const isInformationalQuestion = informationalPhrases.some(phrase => query.includes(phrase))
    
    if (isInformationalQuestion) {
      return false
    }
    
    const safetyWords = ['safe', 'safety']
    const riskWords = ['risk', 'risks', 'danger', 'dangers']
    const concernWords = ['nervous', 'worried', 'concern', 'concerned', 'trust', 'reliable', 'reputation', 'skeptical', 'hesitant']
    const hospitalWords = ['hospital', 'hospitals', 'facility', 'facilities', 'clinic', 'clinics']
    const surgeonWords = ['surgeon', 'surgeons', 'doctor', 'doctors']
    // 'good'/'great'/'best' are only ever checked *together with* a surgeon/
    // doctor word (hasSurgeonWord && hasExperienceWord below), so this stays
    // narrow - it won't fire on an unrelated "good" elsewhere in a message.
    const experienceWords = ['experienced', 'qualified', 'qualifications', 'expert', 'expertise', 'credentials', 'good', 'great', 'best']
    const generalContext = ['turkey', 'turkish', 'abroad', 'country', 'overseas']
    
    const hasSafetyWord = safetyWords.some(word => query.includes(word))
    const hasRiskWord = riskWords.some(word => query.includes(word))
    const hasConcernWord = concernWords.some(word => query.includes(word))
    const hasHospitalWord = hospitalWords.some(word => query.includes(word))
    const hasSurgeonWord = surgeonWords.some(word => query.includes(word))
    const hasExperienceWord = experienceWords.some(word => query.includes(word))
    const hasGeneralContext = generalContext.some(word => query.includes(word))
    
    return (hasSafetyWord) || 
           (hasConcernWord) || 
           (hasSafetyWord && hasHospitalWord) || 
           (hasSurgeonWord && hasExperienceWord) || 
           (hasRiskWord && hasGeneralContext) 
  }

  private isFlightCostQuestion(query: string): boolean {
    const flightWords = ['flight', 'flights', 'airfare', 'plane ticket', 'plane tickets']
    const costWords = ['cost', 'price', 'included', 'pay for', 'book', 'expense', 'additional']
    const hasFlightWord = flightWords.some(word => query.includes(word))
    const hasCostWord = costWords.some(word => query.includes(word))
    return hasFlightWord && hasCostWord
  }

  private isMedicalTechnologyQuestion(query: string): boolean {
    const techWords = ['da vinci', 'davinci', 'robot', 'robotic', 'technology', 'advanced tech', 'hi-tech']
    const questionWords = ['what is', 'tell me about', 'do you use', 'is it', 'how does']
    const hasTechWord = techWords.some(word => query.includes(word))
    const hasQuestionWord = questionWords.some(word => query.includes(word))
    return hasTechWord && hasQuestionWord
  }

  private checkFaqKnowledge(normalizedQuery: string, context?: ChatContext): ChatbotResponse | null {
    // Stopwords excluded here too, not just length>=3: common words like "when"/
    // "can"/"after" appear across many FAQs and were found (via broad testing)
    // to out-score the FAQ that's actually relevant, since they contribute
    // matches wherever they happen to appear rather than wherever the query's
    // real content is - e.g. "when i can go back my country after operation"
    // out-scored on "when"/"can"/"after" alone into the wrong FAQ ("When can I
    // shower after surgery?") over the actually-relevant stay-duration one.
    const queryWords = normalizedQuery.toLowerCase().split(' ').filter(w => w.length >= 3 && !STOPWORDS.has(w))
    
    if (normalizedQuery.includes('jci')) queryWords.push('jci')
    if (normalizedQuery.includes('ivf')) queryWords.push('ivf')
    if (normalizedQuery.includes('fue')) queryWords.push('fue')
    if (normalizedQuery.includes('dhi')) queryWords.push('dhi')
    
    if (queryWords.length === 0) {
    return null
  }

    let bestMatch: { faq: FAQItem, score: number } | null = null
  
    for (const faq of faqData as FAQItem[]) {
      const questionLower = faq.question.toLowerCase()
      const answerLower = faq.answer.toLowerCase() 
      let score = 0
  
      for (const word of queryWords) {
        if (questionLower.includes(word)) {
          score++
        }
        if (answerLower.includes(word)) {
          score += 0.5 
        }
      }
  
      if (normalizedQuery.includes("jci")) {
        if (questionLower.includes("jci") || answerLower.includes("jci-accredited")) score += 5
      }
      // NOTE: there used to be an unconditioned boost here - any query merely
      // *containing* "friend" as a substring (e.g. "girlfriend", "boyfriend")
      // got +5 toward this FAQ regardless of context. The guarded version
      // further down (bring/take + companion/family-relation word) covers the
      // legitimate case without that false-positive surface.
      if (normalizedQuery.includes("how long") && normalizedQuery.includes("stay")) {
        if (questionLower.includes("how long") && questionLower.includes("stay")) score += 5
      }
      if (normalizedQuery.includes("complication") && normalizedQuery.includes("home")) {
        if (questionLower.includes("complication") && questionLower.includes("home")) score += 5
      }
      if (normalizedQuery.includes("payment")) {
        if (questionLower.includes("payment")) score += 5
      }
      
      if (normalizedQuery.includes("follow-up") || normalizedQuery.includes("follow up")) {
        if (questionLower.includes("follow-up") || answerLower.includes("follow-up")) score += 5
      }
      
      if (normalizedQuery.includes("aftercare")) {
        if (questionLower.includes("aftercare") || answerLower.includes("aftercare")) {
          score += 5
        } else if (normalizedQuery.includes("how long") && questionLower.includes("stay")) {
          score += 3
        }
      }
      
      const isSurgeonAssignmentQuestion = (normalizedQuery.includes("who will") || 
                                           normalizedQuery.includes("which surgeon") || 
                                           normalizedQuery.includes("my surgeon") ||
                                           (normalizedQuery.includes("meet") && normalizedQuery.includes("surgeon")))
      if (isSurgeonAssignmentQuestion) {
        if (questionLower.includes("who will") || questionLower.includes("meet") || questionLower.includes("surgeon")) score += 5
      }
      
      if ((normalizedQuery.includes("meet") || normalizedQuery.includes("see")) && normalizedQuery.includes("before")) {
        if (questionLower.includes("meet") || questionLower.includes("consultation")) score += 5
      }
      
      if (normalizedQuery.includes("anesthesia") || normalizedQuery.includes("anesthetic") || normalizedQuery.includes("sedation")) {
        if (questionLower.includes("anesthesia") || answerLower.includes("anesthesia")) score += 5
      }
      
      // NOTE: bare 'what if' was removed as a trigger here - it's a generic hypothetical
      // prefix used in all sorts of unrelated questions ("what if I have diabetes", "what
      // if I change my mind"), not just emergency ones. It was boosting completely
      // unrelated queries into an emergency/complications answer. The more specific
      // phrases below ("goes wrong", "worst case") still catch the intended case.
      if ((normalizedQuery.includes("something goes wrong") || normalizedQuery.includes("goes wrong") ||
           normalizedQuery.includes("worst case"))) {
        if (questionLower.includes("emergency") || questionLower.includes("complication") ||
            answerLower.includes("emergency") || answerLower.includes("protocols")) score += 5
      }
      
      if ((normalizedQuery.includes("how long from") || normalizedQuery.includes("time from") || 
           normalizedQuery.includes("timeline")) && normalizedQuery.includes("consultation")) {
        if (questionLower.includes("consultation") && questionLower.includes("surgery")) score += 5
      }
      
      if (normalizedQuery.includes("speak english") || normalizedQuery.includes("do you speak") || 
          normalizedQuery.includes("language") || normalizedQuery.includes("translator") || 
          normalizedQuery.includes("translation") || normalizedQuery.includes("translate")) {
        if (questionLower.includes("english") || questionLower.includes("translator") || 
            questionLower.includes("language") || answerLower.includes("translation")) score += 5
      }
      
      if (normalizedQuery.includes("installment") || normalizedQuery.includes("installments") || 
          (normalizedQuery.includes("pay") && (normalizedQuery.includes("when") || normalizedQuery.includes("how"))) ||
          normalizedQuery.includes("payment plan") || normalizedQuery.includes("deposit") || 
          normalizedQuery.includes("refund") || normalizedQuery.includes("cancel")) {
        if (questionLower.includes("pay") || questionLower.includes("installment") || 
            questionLower.includes("payment") || questionLower.includes("deposit") ||
            questionLower.includes("refund") || questionLower.includes("cancel") ||
            answerLower.includes("payment") || answerLower.includes("deposit")) score += 5
      }
      
      if ((normalizedQuery.includes("international") || normalizedQuery.includes("foreign")) && 
          normalizedQuery.includes("patient")) {
        if (questionLower.includes("international") || answerLower.includes("international")) score += 5
      }
      
      if (normalizedQuery.includes("airport") || normalizedQuery.includes("pick me up") || 
          normalizedQuery.includes("pickup") || normalizedQuery.includes("transfer")) {
        if (questionLower.includes("airport") || questionLower.includes("pick") || 
            answerLower.includes("airport") || answerLower.includes("transfer")) score += 5
      }
      
      if ((normalizedQuery.includes("bring") || normalizedQuery.includes("take")) &&
          (normalizedQuery.includes("companion") || normalizedQuery.includes("partner") ||
           normalizedQuery.includes("friend") || normalizedQuery.includes("family") ||
           // Real visitors usually name a specific relation rather than the
           // generic word "companion" - "can I bring my husband with me".
           normalizedQuery.includes("husband") || normalizedQuery.includes("wife") ||
           normalizedQuery.includes("spouse") || normalizedQuery.includes("mother") ||
           normalizedQuery.includes("father") || normalizedQuery.includes("sister") ||
           normalizedQuery.includes("brother") || normalizedQuery.includes("mom") ||
           normalizedQuery.includes("dad"))) {
        // "companion" only, not bare "bring" - a separate FAQ ("What should I
        // bring with me?", a packing-list question) also has "bring" in its
        // question, and that bare check was boosting it over this one for
        // "can I bring my husband with me"-style questions.
        if (questionLower.includes("companion") || answerLower.includes("companion")) score += 6
      }
      
      // The procedure-context boost below is only ever allowed to *tip the balance*
      // between otherwise-plausible matches - never to manufacture a match out of
      // nothing. Without this guard, a content-free message ("ok thanks") scores 0
      // against every FAQ on its own merits, but the category boost alone (+5, e.g.
      // for any answer containing the generic word "cosmetic") was enough to clear
      // the match threshold and return a confidently wrong, unrelated answer.
      const hasGenuineContentMatch = score > 0

      if (hasGenuineContentMatch && context?.lastProcedure && this.isProcedureContextFresh(context)) {
        const procedureTitle = context.lastProcedure.title.toLowerCase()
        const procedureSlug = context.lastProcedure.slug

        if (answerLower.includes(procedureTitle) || answerLower.includes(procedureSlug)) {
          score += 3

          if (process.env.NODE_ENV === 'development') {
            console.log(`🎯 Context boost for "${faq.question}" - mentions ${procedureTitle}`)
          }
        }

        if (procedureSlug === 'ivf-treatment' &&
            (faq.category === 'Procedures' && (answerLower.includes('ivf') || answerLower.includes('fertility')))) {
          score += 5
        }

        if ((procedureSlug === 'scalp-hair-transplant' || procedureSlug === 'eyebrow-transplantation' || procedureSlug === 'beard-transplantation') &&
            (faq.category === 'Procedures' && (answerLower.includes('hair') || answerLower.includes('fue') || answerLower.includes('dhi')))) {
          score += 5
        }

        if ((procedureSlug === 'sleeve-gastrectomy' || procedureSlug === 'gastric-bypass' ||
             procedureSlug === 'gastric-balloon' || procedureSlug === 'gastric-botox') &&
            (faq.category === 'Procedures' && (answerLower.includes('weight loss') || answerLower.includes('bariatric') ||
             answerLower.includes('gastric') || answerLower.includes('sleeve') || answerLower.includes('bypass')))) {
          score += 5
        }

        // NOTE: 'implants' was removed here - it's not specific to dental (breast
        // implants FAQs also contain the word), so it could cross-boost an unrelated
        // FAQ. 'dental implants' is specific enough to keep.
        if (procedureSlug === 'cosmetic-dentistry' &&
            (faq.category === 'Procedures' && (answerLower.includes('dental') || answerLower.includes('veneers') ||
             answerLower.includes('dental implants') || answerLower.includes('crowns')))) {
          score += 5
        }

        // NOTE: bare 'cosmetic' and 'plastic' were removed here - both are generic
        // enough to appear in unrelated FAQs (e.g. a dental FAQ mentioning "cosmetic
        // treatment"), which was cross-boosting completely unrelated answers into a
        // false match. The specific procedure names below are unambiguous.
        if ((procedureSlug === 'rhinoplasty' || procedureSlug === 'breast-augmentation' ||
             procedureSlug === 'breast-lift' || procedureSlug === 'tummy-tuck' || procedureSlug === 'bbl' ||
             procedureSlug === 'vaser-liposuction' || procedureSlug === 'facelift') &&
            (faq.category === 'Procedures' && (answerLower.includes('rhinoplasty') || answerLower.includes('breast') ||
             answerLower.includes('facelift')))) {
          score += 5
        }
      }

      if (score > (bestMatch?.score || 0)) {
        bestMatch = { faq, score }
      }
    }
  
    // Was >= 3, tuned back when queryWords still included stopwords ("when",
    // "can", "after"...) padding scores across the board. Now that those are
    // filtered out (see queryWords above), genuine matches score lower but
    // more meaningfully - testing showed several good matches ("what support
    // do i get after i go home", "can i bring my husband with me") dropping
    // below the old bar once the stopword padding was removed.
    if (bestMatch && bestMatch.score >= 2) {
      const category = bestMatch.faq.category.toLowerCase()
      let contextualSuggestions: string[] = []
      
      if (category === 'payments') {
        contextualSuggestions = ["What's included?", "Get free quote", "Currency accepted?", "Book consultation"]
      } else if (category === 'travel preparation') {
        contextualSuggestions = ["Visa requirements?", "What to bring?", "Airport pickup?", "Book consultation"]
      } else if (category === 'process') {
        contextualSuggestions = ["Recovery timeline", "How long in Turkey?", "Surgeon qualifications", "Get started"]
      } else if (category === 'aftercare') {
        contextualSuggestions = ["Follow-up care", "Travel after surgery?", "Complication support", "Talk to doctor"]
      } else if (category === 'procedures') {
        contextualSuggestions = ["View all procedures", "Hair transplant", "Gastric sleeve", "Get evaluated"]
      } else {
        contextualSuggestions = ["Ask another question", "View procedures", "See packages", "Book consultation"]
      }
      
      return {
        content: bestMatch.faq.answer,
        suggestions: contextualSuggestions,
        ctaButton: CTA_BUTTONS.faq,
        confidence: 0.85,
        source: 'faq',
        intent: `faq_${bestMatch.faq.category.toLowerCase()}`
      }
    }
  
    return null 
  }

  private detectQuestionType(query: string): string {
    const lowerQuery = query.toLowerCase()
  
    const isConsultationTimelineQ = (lowerQuery.includes('consultation') && lowerQuery.includes('surgery')) &&
                                     (lowerQuery.includes('how long') || lowerQuery.includes('timeline') || 
                                      lowerQuery.includes('time from') || lowerQuery.includes('from'))
    if (isConsultationTimelineQ) return 'intro' 
  
    const isWeightLossQuestion = (lowerQuery.includes('how much') || lowerQuery.includes('how many')) && 
                                  (lowerQuery.includes('weight') || lowerQuery.includes('pounds') || 
                                   lowerQuery.includes('kilos') || lowerQuery.includes('lose'))
    
    if (isWeightLossQuestion) {
      return 'benefits'
    }
    
    const costKeywords = ['cost', 'price', 'expensive', 'cheap', 'cheaper', 'affordable', 'how much', 'bucks', 'dolla']
    if (costKeywords.some(keyword => lowerQuery.includes(keyword))) return 'cost'
  
    const candidateKeywords = ['candidate', 'eligible', 'suitable', 'good for', 'right for me', 'qualify', 'eligibility', 'requirements', 'too old', 'too young', 'minimum age', 'maximum age', 'age limit']
    const candidateConditions = ['diabetes', 'diabetic', 'pregnant', 'pregnancy', 'breastfeeding', 'heart condition', 'blood pressure', 'medication']
    
    const hasEligibilityPhrasing = lowerQuery.includes('can i') || lowerQuery.includes('can someone') ||
                                    lowerQuery.includes('am i able') || lowerQuery.includes('is someone')
    const hasMedicalCondition = candidateConditions.some(cond => lowerQuery.includes(cond)) ||
                                lowerQuery.includes('if i have') || lowerQuery.includes('if i\'m') ||
                                (lowerQuery.includes('with') && candidateConditions.some(cond => lowerQuery.includes(cond)))
    // A condition mentioned alongside "surgery"/"procedure"/"operation" also
    // counts even without exact "can i" phrasing - non-native English often
    // reverses the word order ("i can do this surgery or not, i have
    // diabetes" instead of "can i have this surgery if I have diabetes").
    const hasSurgeryMention = lowerQuery.includes('surgery') || lowerQuery.includes('procedure') || lowerQuery.includes('operation')
    const isConditionEligibilityQuestion = hasMedicalCondition && (hasEligibilityPhrasing || hasSurgeryMention)
    
    if (candidateKeywords.some(keyword => lowerQuery.includes(keyword)) || isConditionEligibilityQuestion) return 'candidates'
  
    const benefitKeywords = ['benefit', 'benefits', 'advantage', 'advantages', 'pros', 'why choose', 'why should i choose', 'why would i choose', 'natural', 'look natural']
    const isNaturalResultsQuestion = (lowerQuery.includes('natural') || lowerQuery.includes('look')) && 
                                      (lowerQuery.includes('will') || lowerQuery.includes('look') || lowerQuery.includes('appear'))
    if (benefitKeywords.some(keyword => lowerQuery.includes(keyword)) || isNaturalResultsQuestion) return 'benefits'
  
    // 'scar' is deliberately not in this list as a bare substring check: it would match
    // inside words like "scared", misrouting emotional statements ("I'm scared to travel
    // alone") to a surgical-risk disclaimer. \bscar\b below catches "a scar" / "scar" on
    // its own without that false positive.
    // NOTE: bare 'cons' (as in "pros and cons") used to be here as a bare
    // substring check - it matches inside "consultation", "consider",
    // "construction", "consequence", or literally any word starting with
    // "cons", which is exactly as dangerous as it sounds (a pasted Lorem
    // Ipsum block routed to the risks answer via "consectetur"). 'risk'/
    // 'risks'/'danger'/'side effect' already cover the intended meaning.
    const riskKeywords = ['risk', 'risks', 'danger', 'dangers', 'side effect', 'side effects', 'scars', 'scarring']
    const hasBareScarWord = /\bscar\b/.test(lowerQuery)
    const isPostReturnComplication = (lowerQuery.includes('complication') || lowerQuery.includes('complications')) &&
                                      (lowerQuery.includes('at home') || lowerQuery.includes('after i return') || 
                                       lowerQuery.includes('back home') || lowerQuery.includes('when i get home'))
    
    const hasGeneralSafetyContext = lowerQuery.includes('turkey') || lowerQuery.includes('turkish') || 
                                     lowerQuery.includes('hospital') || lowerQuery.includes('hospitals') ||
                                     lowerQuery.includes('country') || lowerQuery.includes('abroad')
    
    if (!isPostReturnComplication && !hasGeneralSafetyContext && (riskKeywords.some(keyword => lowerQuery.includes(keyword)) || hasBareScarWord)) return 'risks'
    if (!isPostReturnComplication && !hasGeneralSafetyContext && (lowerQuery.includes('complication') || lowerQuery.includes('complications'))) return 'risks'
    
    const hasSafe = lowerQuery.includes('safe') || lowerQuery.includes('safety')
    const isGeneralSafetyQuestion = lowerQuery.includes('how safe') || lowerQuery.includes('is it safe') || 
                                     lowerQuery.includes('is this safe') || lowerQuery.includes('is surgery safe') ||
                                     (lowerQuery.includes('turkey') || lowerQuery.includes('turkish') || 
                                      lowerQuery.includes('hospital') || lowerQuery.includes('hospitals') ||
                                      lowerQuery.includes('country') || lowerQuery.includes('abroad'))
    
    if (hasSafe && !isGeneralSafetyQuestion) {
      return 'risks'
    }
  
    const isStayDurationQuestion = (lowerQuery.includes('how long') && lowerQuery.includes('stay')) ||
                                    (lowerQuery.includes('how many days') && lowerQuery.includes('stay'))
    const isConsultationTimelineQuestion = (lowerQuery.includes('consultation') && lowerQuery.includes('surgery')) &&
                                           (lowerQuery.includes('how long') || lowerQuery.includes('timeline') || lowerQuery.includes('time from'))
    
    if (!isStayDurationQuestion && !isConsultationTimelineQuestion) {
      const recoveryKeywords = ['recovery', 'healing', 'aftercare']
      const hasTimingWord = lowerQuery.includes('when can i') || lowerQuery.includes('how soon') || 
                            lowerQuery.includes('how long before') || lowerQuery.includes('can i')
      const hasActivityWord = lowerQuery.includes('fly') || lowerQuery.includes('travel') || 
                              lowerQuery.includes('work') || lowerQuery.includes('exercise') || 
                              lowerQuery.includes('drive') || lowerQuery.includes('return to')
      const hasAfterSurgery = lowerQuery.includes('after surgery') || lowerQuery.includes('after the surgery') ||
                              lowerQuery.includes('after procedure') || lowerQuery.includes('after')
      
      const temporalRecovery = hasTimingWord && hasActivityWord && hasAfterSurgery
      
      const isResultsTimingQuestion = (lowerQuery.includes('when will') || lowerQuery.includes('when do') || 
                                       lowerQuery.includes('how long until') || lowerQuery.includes('how soon')) && 
                                      (lowerQuery.includes('see results') || lowerQuery.includes('see the results') || 
                                       lowerQuery.includes('notice results') || lowerQuery.includes('results'))
      
      const recoverySymptoms = ['swelling', 'bruising', 'pain', 'painful', 'hurt', 'discomfort', 'soreness', 'numbness']
      const symptomActions = ['go down', 'go away', 'subside', 'decrease', 'reduce', 'disappear', 'heal']
      // Timing ("when will the swelling go down") and severity ("how bad is
      // the pain", "is it very painful") are both common ways to ask about a
      // symptom - only checking for timing missed plain severity questions.
      const symptomSeverityWords = ['how much', 'how bad', 'how big', 'how severe', 'very painful', 'is it painful', 'will it hurt', 'will it be painful']
      const hasSymptom = recoverySymptoms.some(symptom => lowerQuery.includes(symptom))
      const hasSymptomAction = symptomActions.some(action => lowerQuery.includes(action))
      const hasSymptomSeverity = symptomSeverityWords.some(phrase => lowerQuery.includes(phrase))
      const isSymptomRecoveryQuestion = hasSymptom && (hasSymptomAction || hasSymptomSeverity || lowerQuery.includes('when will') || lowerQuery.includes('how long'))
      
      if (recoveryKeywords.some(keyword => lowerQuery.includes(keyword)) || temporalRecovery || isResultsTimingQuestion || isSymptomRecoveryQuestion) {
        return 'recovery'
      }
    }
  
    const isAskingAboutProcedures = (lowerQuery.includes('what procedures') || lowerQuery.includes('which procedures')) && 
                                     (lowerQuery.includes('offer') || lowerQuery.includes('have') || lowerQuery.includes('available') || lowerQuery.includes('do you do'))
    
    const isHowDoesItWork = (lowerQuery.includes('how does') || lowerQuery.includes('how do')) && 
                            (lowerQuery.includes('work') || lowerQuery.includes('happen'))
    const isWhatHappens = lowerQuery.includes('what happens') && 
                          (lowerQuery.includes('surgery') || lowerQuery.includes('procedure') || lowerQuery.includes('day'))
    
    if (!isAskingAboutProcedures && (lowerQuery.includes('process') || lowerQuery.includes('procedure') || lowerQuery.includes('steps') || isHowDoesItWork || isWhatHappens)) {
      return 'process'
    }
  
    if (lowerQuery.includes('what is') || lowerQuery.includes('tell me about') || lowerQuery.includes('explain')) return 'intro'
  
    return 'intro' 
  }

  private findProcedure(query: string): Service | null {
    const lowerQuery = query.toLowerCase()
    const procedures = servicesData as Service[] 

    for (const proc of procedures) {
      if (lowerQuery.includes(proc.hero.title.toLowerCase())) {
        return proc
      }
      if (lowerQuery.includes(proc.slug)) {
          return proc
      }
    }

    for (const slug in PROCEDURE_SEARCH_KEYWORDS) {
      const keywords = PROCEDURE_SEARCH_KEYWORDS[slug]
      if (keywords.some(keyword => lowerQuery.includes(keyword))) {
        const matchedProcedure = procedures.find((p: Service) => p.slug === slug)
        if (matchedProcedure) {
          return matchedProcedure
        }
      }
    }
  
    return null
  }

  // --- 3. GENERATOR FUNCTIONS (Knowledge-Map Aware) ---

  private generateProcedureIntro(procedure: Service): ChatbotResponse {
    const procedureKnowledge = this.knowledgeMap[procedure.slug]
    let introContent = `**${procedure.hero.title}** - ${procedure.hero.subtitle} Our experienced specialists use the latest techniques to ensure optimal outcomes with comprehensive care and support. What specific aspect would you like to know more about?`

    const contentKey = procedureKnowledge?.what
    if (contentKey && this.contentMap.hasOwnProperty(contentKey)) {
      const detail = extractPlainTextFromContent(this.contentMap[contentKey]).trim()
      introContent = `**${procedure.hero.title}**\n\n${detail}\n\nWhat specific aspect would you like to know more about?`
    }

    return {
      content: introContent,
      suggestions: [
        `How does ${procedure.hero.title} work?`,
        "What are the benefits?",
        "Am I a good candidate?",
        "Get cost estimate"
      ],
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.9,
      source: 'knowledge',
      intent: 'procedure_intro'
    }
  }

  private generateProcessResponse(procedure: Service | null): ChatbotResponse {
    if (!procedure) {
      return {
        content: "The treatment process generally involves an initial consultation, personalized planning, the procedure itself, and comprehensive aftercare — but it varies by procedure. Which one are you asking about?",
        suggestions: clarifyingSuggestions('process'),
        ctaButton: CTA_BUTTONS.procedures,
        confidence: 0.8,
        source: 'knowledge',
        intent: 'procedure_process_generic'
      }
    }
  
    const procedureKnowledge = this.knowledgeMap[procedure.slug]
    const contentKey = procedureKnowledge?.process
  
    let responseContent = ''
    if (contentKey && this.contentMap.hasOwnProperty(contentKey)) {
      const detail = extractPlainTextFromContent(this.contentMap[contentKey]).trim()
      responseContent = `**${procedure.hero.title} Process:**\n\n${detail}`
    } else {
      responseContent = `**${procedure.hero.title} Process:** The journey typically involves an initial consultation, personalized planning, travel arrangements (if needed), the procedure performed by expert surgeons, and comprehensive recovery support. We ensure a smooth process from start to finish.`
    }

    return {
      content: responseContent,
      suggestions: [
        `${procedure.hero.title} recovery time`,
        "What are the risks?",
        "How long in Turkey?",
        "Book consultation"
      ],
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.9,
      source: 'knowledge',
      intent: 'procedure_process'
    }
  }
  
  private generateCandidatesResponse(procedure: Service | null): ChatbotResponse {
    if (!procedure) {
      return {
        content: "Suitability depends on many factors, including your health, goals, and medical history — and it varies by procedure. Which one are you asking about?",
        suggestions: clarifyingSuggestions('candidates'),
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.8,
        source: 'knowledge',
        intent: 'procedure_candidates_generic'
      }
    }
  
    const procedureKnowledge = this.knowledgeMap[procedure.slug]
    const contentKey = procedureKnowledge?.candidates
  
    let responseContent = ''
    if (contentKey && this.contentMap.hasOwnProperty(contentKey)) {
      const detail = extractPlainTextFromContent(this.contentMap[contentKey]).trim()
      responseContent = `**${procedure.hero.title} Candidates:**\n\n${detail}`
    } else {
      responseContent = `**${procedure.hero.title} Candidates:** Suitability depends on various factors including your health, specific goals, and medical history. Ideal candidates generally have realistic expectations. A personalized evaluation during a free consultation is the best way to determine if this procedure is right for you.`
    }

    return {
      content: responseContent,
      suggestions: [
        `${procedure.hero.title} process`,
        "Success rates",
        "Recovery time",
        "Get evaluated now"
      ],
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.9,
      source: 'knowledge',
      intent: 'procedure_candidates'
    }
  }

  private generateRecoveryResponse(procedure: Service | null): ChatbotResponse {
    if (!procedure) {
      return {
        content: "Recovery times vary by procedure, but generally involve a period of rest, managing discomfort, and a gradual return to activities, with full aftercare support throughout. Which procedure are you asking about?",
        suggestions: clarifyingSuggestions('recovery'),
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.8,
        source: 'knowledge',
        intent: 'procedure_recovery_generic'
      }
    }
  
    const procedureKnowledge = this.knowledgeMap[procedure.slug]
    const contentKey = procedureKnowledge?.recovery
  
    let responseContent = ''
    if (contentKey && this.contentMap.hasOwnProperty(contentKey)) {
      const detail = extractPlainTextFromContent(this.contentMap[contentKey]).trim()
      responseContent = `**${procedure.hero.title} Recovery:**\n\n${detail}`
    } else {
      responseContent = `**${procedure.hero.title} Recovery:** After your procedure, our team provides comprehensive aftercare instructions and support. Recovery times vary, but typically involve a period of rest, managing discomfort, and gradual return to activities. A consultation will provide a more specific timeline for you.`
    }

    return {
      content: responseContent,
      suggestions: [
        "Aftercare support",
        "Travel & hotel details",
        `${procedure.hero.title} cost`,
        "Book consultation"
      ],
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.9,
      source: 'knowledge',
      intent: 'procedure_recovery'
    }
  }

  private generateCostResponse(procedure: Service | null): ChatbotResponse {
    if (!procedure) {
      return {
        content: "Pricing depends on the procedure and your specific needs — our packages are all-inclusive with no hidden costs. Which procedure would you like a cost estimate for?",
        suggestions: clarifyingSuggestions('cost'),
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.8,
        source: 'knowledge',
        intent: 'procedure_cost_generic'
      }
    }
    
    return {
      content: `For **${procedure.hero.title}**, pricing is tailored to your specific needs. Our all-inclusive packages offer excellent value. To get a personalized, detailed quote with no obligation, please schedule a free consultation with our medical advisors.`,
      suggestions: [
        "What's included?",
        "Payment options?",
        "Get free quote",
        "See success stories"
      ],
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.9,
      source: 'knowledge',
      intent: 'procedure_cost'
    }
  }

  private generateBenefitsResponse(procedure: Service | null): ChatbotResponse {
    let responseContent = ''
    let responseSuggestions: string[] = []
  
    if (!procedure) {
      responseContent = `Every procedure has its own specific benefits tailored to patient goals. Which one are you asking about?`
      responseSuggestions = clarifyingSuggestions('benefits')
    } else if (procedure.benefits && procedure.benefits.length > 0) {
      const benefitsList = procedure.benefits
        .map((b: Benefit) => `* **${b.title}:** ${b.description}`)
        .join('\n')
      responseContent = `**Benefits of ${procedure.hero.title}:**\n${benefitsList}`
      responseSuggestions = [
        "What are the risks?",
        "See before & after",
        `${procedure.hero.title} recovery`,
        "Book consultation"
      ]
    } else {
      responseContent = `**${procedure.hero.title}** offers significant advantages tailored to patient goals. For specific benefits relevant to your situation, please schedule a consultation with our specialists.`
      responseSuggestions = ["What are the risks?", "View procedures", "See before & after", "Get consultation"]
    }

    return {
      content: responseContent,
      suggestions: responseSuggestions,
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.9,
      source: 'knowledge',
      intent: 'procedure_benefits'
    }
  }

  private generateRisksResponse(procedure: Service | null): ChatbotResponse {
    let responseContent = ''
    let responseSuggestions: string[] = []
  
    if (!procedure) {
      responseContent = `Every medical procedure carries some level of risk, and the specifics depend on which one. Which procedure would you like to know the risks for?`
      responseSuggestions = clarifyingSuggestions('risks')
    } else if (procedure.risks && procedure.risks.length > 0) {
      const risksList = procedure.risks
        .map(risk => `* ${risk}`) 
        .join('\n')
      responseContent = `**Potential Risks of ${procedure.hero.title}:**\nLike any surgical procedure, there are potential risks. Common ones include:\n${risksList}\n\nPlease note this is not a complete list. It's crucial to discuss all potential risks thoroughly with your surgeon during a consultation.`
      responseSuggestions = [
        "How is safety ensured?",
        "Success rates",
        `${procedure.hero.title} benefits`,
        "Talk to a surgeon"
      ]
    } else {
      responseContent = `Every medical procedure carries some level of risk. For detailed information specific to **${procedure.hero.title}** and your health profile, please schedule a consultation with our medical team.`
      responseSuggestions = ["What are the benefits?", "Safety measures", "Success rates", "Talk to surgeon"]
    }

    return {
      content: responseContent,
      suggestions: responseSuggestions,
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.9,
      source: 'knowledge',
      intent: 'procedure_risks'
    }
  }

  // --- 4. FALLBACK ---

  // Visitor is asking about the bot itself, not about medical tourism -
  // "are you real", "talk to a human", "i don't want to talk to a robot", etc.
  // Checked *early* in generateResponse (right after bare-greeting), not just
  // in the fallback: "robot"/"robotic" are also bare patterns in the
  // medical_technology priority intent (da Vinci ROBOTIC surgery), so "I
  // don't want to talk to a robot, give me a real answer" was being swallowed
  // into a da Vinci info-dump before ever reaching a fallback-only check.
  private isBotIdentityQuestion(query: string): boolean {
    const patterns = [
      'are you a bot', 'are you a robot', 'are you human', 'are you real',
      'are you ai', 'are you a real person', 'are you a person',
      'is this a bot', 'is this a real person', 'is this automated',
      'talk to a human', 'talk to a person', 'talk to a real person',
      'talk to a robot', 'talk to a bot',
      'speak to a human', 'speak to a person', 'speak with a human',
      'connect me to a human', 'what is your name', "what's your name",
      'who are you', 'are you chatgpt',
      "don't want to talk to a robot", "dont want to talk to a robot",
      'not a robot', 'not a bot'
    ]
    return patterns.some(pattern => query.includes(pattern))
  }

  // Curated (not exhaustive - that's not achievable with substring rules)
  // patterns for clearly unrelated topics: weather, trivia, jokes, general
  // knowledge. Checked only inside the fallback (last resort), so it can't
  // preempt any real match.
  private isOffTopicQuestion(query: string): boolean {
    const patterns = [
      'weather', 'tell me a joke', 'know any jokes', 'sing a song', 'sing me a song',
      'capital of', 'president of', 'prime minister of', 'who won the',
      'football score', 'basketball score', 'stock market',
      // NOTE: 'bitcoin'/'cryptocurrency' used to be here, but "can I pay with
      // bitcoin" is a plausible genuine payment-method question, not an
      // off-topic one - dismissing it as "outside what I can help with" was
      // actively unhelpful. A crypto-investment question that's genuinely
      // unrelated just falls through to the ordinary fallback instead, which
      // is a perfectly fine, honest answer too.
      'recipe for', 'movie recommendation', 'what time is it', 'what day is it',
      "what's the date", 'meaning of life', 'are you sentient', 'do you love me',
      'tell me a story', 'what is 2+2', 'how old are you'
    ]
    return patterns.some(pattern => query.includes(pattern))
  }

  // Curated tone check for a visibly frustrated/rude visitor - "useless bot",
  // a threatened bad review, sarcastic dismissal. These deserve a calmer,
  // de-escalating reply and a fast path to a human, not the same neutral
  // fallback used for "I don't understand your question."
  private isFrustratedQuestion(query: string): boolean {
    const patterns = [
      'useless', 'this is bs', 'waste of time', 'not helpful', 'unhelpful',
      'star review', 'leaving a review', 'bad review', 'worst bot',
      'worst chatbot', 'stupid bot', 'dumb bot', 'this sucks', 'terrible service'
    ]
    return patterns.some(pattern => query.includes(pattern))
  }

  private generateIntelligentFallback(query: string, _context?: ChatContext): ChatbotResponse {
    if (isLikelyNonEnglish(query)) {
      return {
        content: "It looks like you might be writing in a different language. I understand English best, but our patient care team can help you in multiple languages! Feel free to reach out on WhatsApp, or continue chatting here in English.",
        suggestions: ["What procedures do you offer?", "Tell me about packages"],
        ctaButton: CTA_BUTTONS.whatsapp,
        confidence: 0.3,
        source: 'fallback',
        intent: 'non_english_redirect'
      }
    }

    if (this.isFrustratedQuestion(query)) {
      return {
        content: "I'm sorry this hasn't been helpful. Let me connect you directly with a member of our patient care team who can give you personal, one-on-one help.",
        suggestions: ["Book a consultation", "What procedures do you offer?"],
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.9,
        source: 'ai',
        intent: 'frustrated_visitor'
      }
    }

    if (this.isOffTopicQuestion(query)) {
      return {
        content: "That's a bit outside what I can help with! I'm specifically here for questions about our medical tourism services - procedures, costs, travel, and recovery. Is there something about your medical journey I can help you with?",
        suggestions: SUGGESTIONS.initial,
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.3,
        source: 'fallback',
        intent: 'off_topic'
      }
    }

    return {
      content: "I can help you with detailed information about our medical procedures, package inclusions, costs, recovery times, or any aspect of medical tourism in Turkey. What would you like to know?",
      suggestions: SUGGESTIONS.initial,
      ctaButton: CTA_BUTTONS.procedures,
      confidence: 0.1,
      source: 'fallback',
      intent: 'fallback_general'
    }
  }

  // --- 5. KNOWLEDGE SOURCE MANAGEMENT ---
  
  public addKnowledgeSource(source: KnowledgeSource): void {
    this.knowledgeSources.push(source)
  }

  public removeKnowledgeSource(sourceName: string): void {
    this.knowledgeSources = this.knowledgeSources.filter(s => s.name !== sourceName)
  }
}