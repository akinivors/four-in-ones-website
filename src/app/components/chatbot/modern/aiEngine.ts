// Modern AI Engine - Clean, Intelligent Response System
import { ChatbotResponse, ChatContext, KnowledgeSource } from './types'
import { PRIORITY_INTENTS, SUGGESTIONS, CTA_BUTTONS } from './config'
import { servicesData, Service } from '../../../../../lib/servicesData'

export class ModernAIEngine {
  private knowledgeSources: KnowledgeSource[] = []
  private static instance: ModernAIEngine

  constructor() {
    this.initializeKnowledgeSources()
  }

  static getInstance(): ModernAIEngine {
    if (!ModernAIEngine.instance) {
      ModernAIEngine.instance = new ModernAIEngine()
    }
    return ModernAIEngine.instance
  }

  // Main response generation method
  async generateResponse(query: string, context?: ChatContext): Promise<ChatbotResponse> {
    const normalizedQuery = this.normalizeQuery(query)
    
    // Debug logging
    if (process.env.NODE_ENV === 'development') {
      console.log('🚀 Processing query:', query)
      console.log('🔧 Normalized query:', normalizedQuery)
    }
    
    // 1. Check high-priority intents first (business critical)
    const priorityResponse = this.checkPriorityIntents(normalizedQuery)
    if (priorityResponse) {
      return priorityResponse
    }

    // 2. Additional flight cost check (backup safety net)
    if (this.isFlightCostQuestion(normalizedQuery)) {
      return {
        content: "Yes, the cost of flight tickets is included in the total price of our all-inclusive packages. We handle everything from the medical fees and hotel to the transfers and your flights to ensure a completely transparent and stress-free journey.",
        suggestions: SUGGESTIONS.cost_inquiry,
        ctaButton: CTA_BUTTONS.packages,
        confidence: 0.95,
        source: 'ai',
        intent: 'flight_cost_inclusion'
      }
    }

    // 2.1. Additional hotel/accommodation check (backup safety net)
    if (this.isHotelAccommodationQuestion(normalizedQuery)) {
      return {
        content: "Great question! You have options with our accommodation. We work with carefully selected 4-5 star hotels that are recovery-friendly and close to medical facilities. While we pre-select the best options based on your procedure and needs, we're happy to discuss preferences and can often accommodate specific requests. Our patient coordinators will work with you to ensure you're comfortable with your accommodation choice.",
        suggestions: ["What's included in packages?", "Hotel amenities", "Recovery support", "Schedule consultation"],
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.9,
        source: 'ai',
        intent: 'hotel_accommodation'
      }
    }

    // 2.2. Additional safety/quality check for hospital standards and certifications
    if (this.isSafetyQualityQuestion(normalizedQuery)) {
      return {
        content: "Your safety is our top priority. We work exclusively with JCI-accredited hospitals and internationally trained, board-certified surgeons. All facilities meet the highest international standards for safety and quality. Our partner hospitals have multiple certifications including JCI (Joint Commission International), ISO standards, and Turkish Ministry of Health accreditation, ensuring world-class medical care.",
        suggestions: ["JCI accreditation details", "Surgeon qualifications", "Safety protocols", "Schedule consultation"],
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.9,
        source: 'ai',
        intent: 'safety_quality'
      }
    }

    // 2.3. Additional medical technology check for da Vinci and robotic surgery
    if (this.isMedicalTechnologyQuestion(normalizedQuery)) {
      return {
        content: "Da Vinci Robotic Surgery represents the cutting edge of minimally invasive surgical technology. This advanced robotic system allows our surgeons to perform complex procedures with enhanced precision, smaller incisions, reduced scarring, and faster recovery times. We use da Vinci technology for various procedures including gynecological surgeries, urological procedures, and certain gastrointestinal operations. The system provides 3D high-definition vision and instruments that move like a human hand but with greater range of motion and tremor elimination.",
        suggestions: ["Which procedures use da Vinci?", "Benefits of robotic surgery", "Minimally invasive options", "Schedule consultation"],
        ctaButton: CTA_BUTTONS.consultation,
        confidence: 0.9,
        source: 'ai',
        intent: 'medical_technology'
      }
    }

    // 3. Check procedure-specific knowledge
    const procedureResponse = this.checkProcedureKnowledge(normalizedQuery)
    if (procedureResponse) {
      return procedureResponse
    }

    // 4. Search knowledge sources in priority order
    for (const source of this.knowledgeSources.sort((a, b) => b.priority - a.priority)) {
      const response = await source.search(normalizedQuery, context)
      if (response && response.confidence >= 0.7) {
        return response
      }
    }

    // 5. Intelligent fallback
    return this.generateIntelligentFallback(normalizedQuery, context)
  }

  // Priority intents checker (business critical responses)
  private checkPriorityIntents(query: string): ChatbotResponse | null {
    // Debug logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 Checking priority intents for query:', query)
    }
    
    // SPECIAL CASE: Check hotel accommodation first regardless of priority
    // This prevents generic package responses from overriding specific hotel questions
    const lowerQuery = query.toLowerCase()
    const hotelWords = ['hotel', 'hotels', 'accommodation', 'stay', 'room', 'lodging']
    const hotelQuestionWords = ['what kind', 'kind of', 'type of', 'choose', 'select', 'pick', 'choice', 'which', 'where', 'assigned', 'pre-assigned', 'about', 'know about', 'tell me about', 'wanna know']
    const generalInquiry = ['about hotels', 'know about hotels', 'tell me about hotels', 'wanna know about hotels', 'hotel information']
    
    const hasHotelWord = hotelWords.some(word => lowerQuery.includes(word))
    const hasHotelQuestion = hotelQuestionWords.some(word => lowerQuery.includes(word))
    const isGeneralHotelInquiry = generalInquiry.some(phrase => lowerQuery.includes(phrase))
    
    if (hasHotelWord && (hasHotelQuestion || isGeneralHotelInquiry)) {
      const hotelIntent = PRIORITY_INTENTS.find(intent => intent.name === 'hotel_accommodation')
      if (hotelIntent) {
        if (process.env.NODE_ENV === 'development') {
          console.log('🏨 Special hotel detection triggered!')
        }
        return {
          content: hotelIntent.response as string,
          suggestions: this.getSuggestionsForIntent(hotelIntent.name),
          ctaButton: this.getCTAForIntent(hotelIntent.name),
          confidence: hotelIntent.confidence,
          source: 'ai',
          intent: hotelIntent.name
        }
      }
    }
    
    for (const intent of PRIORITY_INTENTS.sort((a, b) => a.priority - b.priority)) {
      const matches = this.matchesPatterns(query, intent.patterns)
      
      // Debug logging
      if (process.env.NODE_ENV === 'development') {
        console.log(`📋 Intent: ${intent.name}, Matches: ${matches}, Patterns:`, intent.patterns)
      }
      
      if (matches) {
        if (typeof intent.response === 'string') {
          return {
            content: intent.response,
            suggestions: this.getSuggestionsForIntent(intent.name),
            ctaButton: this.getCTAForIntent(intent.name),
            confidence: intent.confidence,
            source: 'ai',
            intent: intent.name
          }
        } else {
          return intent.response(query)
        }
      }
    }
    return null
  }

  // Procedure-specific knowledge checker
  private checkProcedureKnowledge(query: string): ChatbotResponse | null {
    const procedure = this.findProcedure(query)
    if (!procedure) return null

    const questionType = this.detectQuestionType(query)
    
    switch (questionType) {
      case 'cost':
        return this.generateCostResponse(procedure)
      case 'process':
        return this.generateProcessResponse(procedure)
      case 'candidates':
        return this.generateCandidatesResponse(procedure)
      case 'recovery':
        return this.generateRecoveryResponse(procedure)
      case 'intro':
      default:
        return this.generateProcedureIntro(procedure)
    }
  }

  // Utility methods
  private normalizeQuery(query: string): string {
    return query.toLowerCase().trim().replace(/[?!.]/g, '')
  }

  private matchesPatterns(query: string, patterns: string[]): boolean {
    const lowerQuery = query.toLowerCase()
    
    // IMPORTANT: Check hotel-specific context first to avoid generic package matching
    if (patterns.includes('choose hotel') || patterns.includes('hotel options') || patterns.includes('what kind of hotels')) {
      const hotelWords = ['hotel', 'hotels', 'accommodation', 'stay', 'room', 'lodging']
      const choiceWords = ['choose', 'select', 'pick', 'options', 'choice', 'assigned', 'pre-assigned', 'which', 'where', 'what kind', 'kind of', 'type of']
      const questionWords = ['what kind', 'kind of', 'type of', 'are they', 'get any', 'get to', 'do i']
      
      const hasHotelWord = hotelWords.some(word => lowerQuery.includes(word))
      const hasChoiceWord = choiceWords.some(word => lowerQuery.includes(word))
      const hasQuestionContext = questionWords.some(word => lowerQuery.includes(word))
      
      if (hasHotelWord && (hasChoiceWord || hasQuestionContext)) {
        return true
      }
    }
    
    // Check for exact pattern matches
    const exactMatch = patterns.some(pattern => lowerQuery.includes(pattern.toLowerCase()))
    if (exactMatch) return true
    
    // For flight cost questions, do additional comprehensive checking
    if (patterns.includes('cost of the flight')) {
      const flightWords = ['flight', 'flights', 'airfare', 'ticket', 'tickets']
      const costWords = ['cost', 'price', 'included', 'cover', 'pay', 'expense']
      const packageWords = ['package', 'final price', 'total price', 'all-inclusive']
      
      const hasFlightWord = flightWords.some(word => lowerQuery.includes(word))
      const hasCostWord = costWords.some(word => lowerQuery.includes(word))
      const hasPackageContext = packageWords.some(word => lowerQuery.includes(word)) || 
                               lowerQuery.includes('included') || 
                               lowerQuery.includes('final')
      
      if (hasFlightWord && hasCostWord && hasPackageContext) {
        return true
      }
    }
    
    return false
  }

  private isFlightCostQuestion(query: string): boolean {
    const flightWords = ['flight', 'flights', 'airfare', 'ticket', 'tickets', 'plane']
    const costWords = ['cost', 'price', 'included', 'include', 'cover', 'covered', 'pay', 'expense', 'final']
    const packageWords = ['package', 'packages', 'all-inclusive', 'total', 'final price']
    
    const hasFlightWord = flightWords.some(word => query.includes(word))
    const hasCostWord = costWords.some(word => query.includes(word))
    const hasRelevantContext = packageWords.some(word => query.includes(word)) || 
                              query.includes('home country') || 
                              query.includes('included') ||
                              query.includes('final')
    
    return hasFlightWord && hasCostWord && hasRelevantContext
  }

  private isHotelAccommodationQuestion(query: string): boolean {
    const hotelWords = ['hotel', 'hotels', 'accommodation', 'stay', 'room', 'lodging']
    const choiceWords = ['choose', 'select', 'pick', 'options', 'choice', 'assigned', 'pre-assigned', 'which', 'where', 'what kind', 'kind of', 'type of']
    const questionWords = ['can i', 'do i', 'will i', 'am i able', 'is it possible', 'get any', 'get to']
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

  private isSafetyQualityQuestion(query: string): boolean {
    const qualityWords = ['quality', 'safe', 'safety', 'standard', 'standards', 'accreditation', 'accreditations', 'certified', 'certification', 'certifications', 'accredited']
    const hospitalWords = ['hospital', 'hospitals', 'facility', 'facilities', 'clinic', 'clinics', 'medical center']
    const concernWords = ['nervous', 'worried', 'concern', 'concerned', 'trust', 'reliable', 'reputation']
    const questionWords = ['what kind', 'tell me', 'can you tell me', 'do you have', 'are they']
    
    const hasQualityWord = qualityWords.some(word => query.includes(word))
    const hasHospitalWord = hospitalWords.some(word => query.includes(word))
    const hasConcernWord = concernWords.some(word => query.includes(word))
    const hasQuestionContext = questionWords.some(phrase => query.includes(phrase))
    
    // Match if they're asking about quality/safety/accreditation of hospitals OR if they express concerns about quality
    return (hasQualityWord && (hasHospitalWord || hasQuestionContext)) || 
           (hasConcernWord && hasQualityWord) ||
           (hasHospitalWord && (hasQualityWord || hasConcernWord))
  }

  private isMedicalTechnologyQuestion(query: string): boolean {
    const technologyWords = ['da vinci', 'robotic', 'robot', 'minimally invasive', 'laparoscopic', 'advanced technology', 'surgical technology', 'robotic surgery', 'robotic system']
    const questionWords = ['what is', 'what that is', 'tell me what', 'can you tell me', 'explain', 'about']
    const procedureContext = ['surgery', 'surgical', 'procedure', 'procedures', 'operation', 'use it for', 'which procedures']
    
    const hasTechnologyWord = technologyWords.some(phrase => query.includes(phrase))
    const hasQuestionWord = questionWords.some(phrase => query.includes(phrase))
    const hasProcedureContext = procedureContext.some(word => query.includes(word))
    
    // Match if they're asking about medical technology, especially da Vinci or robotic surgery
    return hasTechnologyWord && (hasQuestionWord || hasProcedureContext)
  }

  private findProcedure(query: string) {
    const procedures = servicesData
    
    // Direct title match
    for (const proc of procedures) {
      if (query.includes(proc.hero.title.toLowerCase())) {
        return proc
      }
    }

    // Keyword matching
    const procedureKeywords = {
      'ivf': ['ivf', 'fertility', 'infertility'],
      'hair': ['hair', 'transplant', 'fue', 'dhi', 'balding'],
      'rhinoplasty': ['nose', 'rhinoplasty', 'nasal'],
      'breast': ['breast', 'augmentation', 'implants'],
      'gastric': ['gastric', 'weight', 'bariatric', 'sleeve', 'bypass'],
      'tummy': ['tummy', 'abdomen', 'abdominoplasty']
    }

    for (const [type, keywords] of Object.entries(procedureKeywords)) {
      if (keywords.some(keyword => query.includes(keyword))) {
        return procedures.find(p => p.slug.includes(type) || p.hero.title.toLowerCase().includes(type))
      }
    }

    return null
  }

  private detectQuestionType(query: string): string {
    if (query.includes('cost') || query.includes('price')) return 'cost'
    if (query.includes('process') || query.includes('treatment') || query.includes('procedure')) return 'process'
    if (query.includes('candidate') || query.includes('eligible')) return 'candidates'
    if (query.includes('recovery') || query.includes('healing')) return 'recovery'
    if (query.includes('what is') || query.includes('tell me about')) return 'intro'
    return 'intro'
  }

  private getSuggestionsForIntent(intentName: string): string[] {
    switch (intentName) {
      case 'flight_cost_inclusion':
        return SUGGESTIONS.cost_inquiry
      case 'package_inclusions':
        return SUGGESTIONS.cost_inquiry
      case 'hotel_accommodation':
        return ["What's included in packages?", "Hotel amenities", "Recovery support", "Schedule consultation"]
      case 'safety_quality':
        return ["JCI accreditation details", "Surgeon qualifications", "Safety protocols", "Schedule consultation"]
      case 'medical_technology':
        return ["Which procedures use da Vinci?", "Benefits of robotic surgery", "Minimally invasive options", "Schedule consultation"]
      case 'cost_savings':
        return SUGGESTIONS.booking_ready
      case 'booking_consultation':
        return SUGGESTIONS.booking_ready
      default:
        return SUGGESTIONS.initial
    }
  }

  private getCTAForIntent(intentName: string) {
    switch (intentName) {
      case 'flight_cost_inclusion':
      case 'package_inclusions':
        return CTA_BUTTONS.packages
      case 'hotel_accommodation':
        return CTA_BUTTONS.consultation
      case 'safety_quality':
        return CTA_BUTTONS.consultation
      case 'medical_technology':
        return CTA_BUTTONS.consultation
      case 'cost_savings':
        return CTA_BUTTONS.consultation
      case 'booking_consultation':
        return CTA_BUTTONS.consultation
      default:
        return CTA_BUTTONS.consultation
    }
  }

  // Procedure response generators
  private generateCostResponse(procedure: Service): ChatbotResponse {
    return {
      content: `**${procedure.hero.title} Cost:** Our all-inclusive packages provide excellent value with transparent pricing. You'll save 60-80% compared to US/Europe while receiving world-class care. The package includes surgery, luxury accommodation, transfers, flight tickets, and comprehensive aftercare.`,
      suggestions: ["Get detailed quote", "Package inclusions", "Payment options", "Schedule consultation"],
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.9,
      source: 'knowledge',
      intent: 'procedure_cost'
    }
  }

  private generateProcessResponse(procedure: Service): ChatbotResponse {
    return {
      content: `**${procedure.hero.title} Process:** Our comprehensive treatment follows a structured approach: consultation and assessment, pre-procedure preparation, the procedure itself, and dedicated recovery support. Our medical team guides you through each step with personalized care.`,
      suggestions: ["Treatment timeline", "Preparation requirements", "Recovery support", "Schedule consultation"],
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.9,
      source: 'knowledge',
      intent: 'procedure_process'
    }
  }

  private generateCandidatesResponse(procedure: Service): ChatbotResponse {
    return {
      content: `**${procedure.hero.title} Candidates:** Ideal candidates are individuals in good health with realistic expectations who meet specific criteria for this procedure. Our specialists conduct thorough evaluations to determine suitability and create personalized treatment plans.`,
      suggestions: ["Am I suitable?", "Consultation process", "Medical requirements", "Schedule evaluation"],
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.9,
      source: 'knowledge',
      intent: 'procedure_candidates'
    }
  }

  private generateRecoveryResponse(procedure: Service): ChatbotResponse {
    return {
      content: `**${procedure.hero.title} Recovery:** We provide comprehensive aftercare support, detailed recovery instructions, and 24/7 medical assistance throughout your healing process. Recovery times vary, but our team ensures optimal healing with ongoing support.`,
      suggestions: ["Recovery timeline", "Aftercare support", "When can I travel?", "Post-op guidance"],
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.9,
      source: 'knowledge',
      intent: 'procedure_recovery'
    }
  }

  private generateProcedureIntro(procedure: Service): ChatbotResponse {
    const subtitle = procedure.hero.subtitle || "Professional medical treatment with excellent results."
    return {
      content: `**${procedure.hero.title}** - ${subtitle} Our experienced specialists use the latest techniques to ensure optimal outcomes with comprehensive care and support. What specific aspect would you like to know more about?`,
      suggestions: [`${procedure.hero.title} process`, `${procedure.hero.title} cost`, "Am I a candidate?", "Schedule consultation"],
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.9,
      source: 'knowledge',
      intent: 'procedure_intro'
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private generateIntelligentFallback(query: string, _context?: ChatContext): ChatbotResponse {
    // Analyze query for better fallback
    if (query.includes('procedure') || query.includes('treatment')) {
      return {
        content: "We offer comprehensive medical procedures including hair transplant, plastic surgery, weight loss surgery, IVF, and cosmetic dentistry. Each procedure is performed by expert surgeons in internationally accredited facilities. Which area interests you most?",
        suggestions: SUGGESTIONS.initial,
        ctaButton: CTA_BUTTONS.procedures,
        confidence: 0.6,
        source: 'fallback'
      }
    }

    // Generic but helpful fallback
    return {
      content: "I can help you with detailed information about our medical procedures, package inclusions, costs, recovery times, or any aspect of medical tourism in Turkey. What would you like to know?",
      suggestions: SUGGESTIONS.initial,
      ctaButton: CTA_BUTTONS.consultation,
      confidence: 0.5,
      source: 'fallback'
    }
  }

  private initializeKnowledgeSources(): void {
    // Knowledge sources would be initialized here
    // This is where we'd add FAQ, medical KB, company info sources
  }
}
