// Modern Chatbot Configuration - Clean, Centralized Config
import { ChatbotConfig, Intent } from './types'

export const CHATBOT_CONFIG: ChatbotConfig = {
  appearance: {
    primaryColor: '#2563eb',
    accentColor: '#dc2626', 
    position: 'bottom-right',
    size: 'standard'
  },
  behavior: {
    greetingDelay: 2000,
    typingDelay: 1000,
    confidenceThreshold: 0.7,
    enableAnalytics: true
  },
  messages: {
    greeting: "Hello! I'm your medical tourism assistant. How can I help you today?",
    fallback: "I understand you're looking for specific information. Let me connect you with our medical consultants.",
    error: "I'm having trouble right now. Please try again or contact our support team.",
    offline: "Our chat system is temporarily offline. Please contact us directly."
  }
}

// High-Priority Intents - Sorted by business importance
export const PRIORITY_INTENTS: Intent[] = [
  {
    name: 'flight_cost_inclusion',
    patterns: [
      'cost of the flight',
      'cost of flight',
      'flight cost',
      'flight from my home country',
      'flight ticket',
      'flights included',
      'flight included',
      'included in the final price',
      'included in final price',
      'pay for flight',
      'flight in package',
      'airfare included',
      'ticket included',
      'flight expenses',
      'cost of airfare',
      // --- ENRICHED ---
      'plane?',
      'flight?',
      'about the flight',
      'is flight included',
      'is the flight included',
      'are flights included',
      'plane',
      'flight',
      'plane ticket',
      'plane tickets',
      'plane included',
      'planes included',
      'are plane tickets included'
    ],
    response: "Yes, the cost of flight tickets is included in the total price of our all-inclusive packages. We handle everything from the medical fees and hotel to the transfers and your flights to ensure a completely transparent and stress-free journey.",
    confidence: 0.95,
    priority: 1
  },
  {
    name: 'package_inclusions',
    patterns: [
      'what does the package include',
      "what's in the package",
      "what's included in",
      'what is included in',
      'tell me about the package',
      'tell me about packages',
      'about the package',
      'about packages',
      'package details',
      'all-inclusive',
      'comprehensive package',
      "what's included?",
      "what is included?",
      // --- ENRICHED ---
      'package',
      'packages',
      'inclusion',
      'inclusions',
      'what is in the package'
    ],
    response: "Our all-inclusive packages include: Complete medical care, luxury hotel accommodation, VIP transfers, round-trip flight tickets, 24/7 personal support, and comprehensive aftercare. Everything is covered with transparent pricing.",
    confidence: 0.9,
    priority: 2
  },
  {
    name: 'hotel_accommodation',
    patterns: [
      'choose hotel',
      'hotel options',
      'which hotel',
      'pre-assigned',
      'hotel selection',
      'pick hotel',
      'select hotel',
      'hotel choice',
      'what kind of hotels',
      'kind of hotels',
      'type of hotels',
      'get any choice',
      'about hotels',
      'know about hotels',
      'wanna know about hotels',
      'tell me about hotels',
      'hotel information',
      // --- ENRICHED ---
      'hotel',
      'hotels',
      'accommodation',
      'where do i stay',
      'stay',
      'where will i stay'
    ],
    response: "Great question! You have options with our accommodation. We work with carefully selected 4-5 star hotels that are recovery-friendly and close to medical facilities. While we pre-select the best options based on your procedure and needs, we're happy to discuss preferences and can often accommodate specific requests. Our patient coordinators will work with you to ensure you're comfortable with your accommodation choice.",
    confidence: 0.9,
    priority: 3
  },
  {
    name: 'cost_savings',
    patterns: [
      'how much save',
      'save money',
      'can i save',
      'cost comparison',
      'cheaper than',
      'savings',
      'affordable',
      // --- ENRICHED ---
      'save',
      'how much cheaper',
      'is it cheaper',
      'how affordable'
    ],
    response: "You'll save 60-80% compared to US/Europe prices while receiving the same quality care. Our transparent, all-inclusive packages have no hidden costs and include everything you need for a successful medical journey.",
    confidence: 0.9,
    priority: 4
  },
  {
    name: 'view_procedures',
    patterns: [
      'view all procedures',
      'show all procedures',
      'list all procedures',
      'show me procedures',
      'view procedures',
      'list procedures',
      'see all procedures',
      'browse procedures',
      'available procedures',
      // --- ENRICHED ---
      'procedures',
      'what procedures',
      'what services',
      'services',
      'what do you offer',
      'treatments'
    ],
    response: "We offer a comprehensive range of procedures across multiple specialties:\n\n**Bariatric Surgery:** Gastric Sleeve, Gastric Bypass, Gastric Balloon, Gastric Botox\n\n**Hair Transplant:** FUE, DHI, Eyebrow & Beard Transplantation\n\n**Plastic Surgery:** Rhinoplasty, BBL, Liposuction, Breast Augmentation, Tummy Tuck, Facelift, and more\n\n**Fertility:** IVF Treatment\n\n**Dental:** Veneers, Implants, Crowns, Smile Makeover\n\n**Eye Surgery:** LASIK, Blepharoplasty, Cataract\n\n**Plus:** Transplantation, Orthopedic, Neurosurgery, and da Vinci Robotic Surgery",
    confidence: 0.95,
    priority: 4.5
  },
  {
    name: 'safety_quality',
    patterns: [
      'safe surgery',
      'quality care',
      'qualified surgeons',
      'hospital standards',
      'quality of hospitals',
      'hospital quality',
      'nervous about quality',
      'worried about quality',
      'hospital certifications',
      'partner hospitals',
      'what kind of accreditations',
      'quality standards',
      'international standards',
      'hospital accreditation',
      // --- ENRICHED ---
      'safe',
      'safety',
      'is it safe',
      'how safe',
      'surgeon quality',
      'are surgeons good',
      'are hospitals good'
    ],
    response: "Your safety is our top priority. We work exclusively with JCI-accredited hospitals and internationally trained, board-certified surgeons. All facilities meet the highest international standards for safety and quality. Our partner hospitals have multiple certifications including JCI (Joint Commission International), ISO standards, and Turkish Ministry of Health accreditation, ensuring world-class medical care.",
    confidence: 0.9,
    priority: 5
  },
  {
    name: 'medical_technology',
    patterns: [
      'da vinci',
      'da vinci robotic',
      'robotic surgery',
      'da vinci surgery',
      'robotic procedures',
      'minimally invasive',
      'laparoscopic',
      'robotic system',
      'advanced technology',
      'surgical robot',
      'what that is',
      'tell me what that is',
      'advanced surgical',
      'latest technology',
      // --- ENRICHED ---
      'robot',
      'robotic',
      'technology',
      'davinci'
    ],
    response: "Da Vinci Robotic Surgery represents the cutting edge of minimally invasive surgical technology. This advanced robotic system allows our surgeons to perform complex procedures with enhanced precision, smaller incisions, reduced scarring, and faster recovery times. We use da Vinci technology for various procedures including gynecological surgeries, urological procedures, and certain gastrointestinal operations. The system provides 3D high-definition vision and instruments that move like a human hand but with greater range of motion and tremor elimination.",
    confidence: 0.9,
    priority: 7
  },
  {
    name: 'booking_consultation',
    patterns: [
      'book consultation',
      'schedule appointment',
      'contact doctor',
      'free consultation',
      // --- ENRICHED ---
      'book',
      'consultation',
      'how to book',
      'schedule',
      'make an appointment',
      'appointment',
      'talk to someone',
      'talk to a doctor'
    ],
    response: "I'd be happy to help you schedule a free consultation! Our medical team will provide personalized treatment plans, discuss your goals, and answer all your questions.",
    confidence: 0.9,
    priority: 8
  }
]

// Common Suggestions based on user journey stage
export const SUGGESTIONS = {
  initial: [
    "What procedures do you offer?",
    "Tell me about packages",
    "How much can I save?",
    "Is it safe in Turkey?"
  ],
  procedure_interest: [
    "How does the procedure work?",
    "Am I a good candidate?",
    "Recovery time",
    "Get cost estimate"
  ],
  cost_inquiry: [
    "What's included?",
    "Payment plans available?",
    "Schedule free consultation",
    "How much do I save?"
  ],
  booking_ready: [
    "Schedule free consultation",
    "Speak to coordinator",
    "Get personalized quote",
    "What happens next?"
  ],
  // New contextual suggestions
  afterIntro: [
    "How does it work?",
    "What are the benefits?",
    "Am I suitable?",
    "Recovery timeline"
  ],
  afterCost: [
    "What's included?",
    "Payment options?",
    "Book consultation",
    "See success stories"
  ],
  afterProcess: [
    "Recovery details",
    "What are the risks?",
    "How long in Turkey?",
    "Book consultation"
  ],
  afterCandidates: [
    "What's the process?",
    "Success rates",
    "Recovery time",
    "Get evaluated"
  ],
  afterBenefits: [
    "What are the risks?",
    "See before & after",
    "Recovery time",
    "Book consultation"
  ],
  afterRisks: [
    "Safety measures",
    "Success rates",
    "What are the benefits?",
    "Speak to a surgeon"
  ],
  afterRecovery: [
    "Travel arrangements",
    "Package details",
    "Aftercare support",
    "Get started"
  ]
}

// CTA Buttons
export const CTA_BUTTONS = {
  consultation: {
    text: "Get Free Consultation",
    action: 'contact' as const,
    url: "/contact"
  },
  packages: {
    text: "View Complete Packages",
    action: 'external' as const,
    url: "/journey"
  },
  procedures: {
    text: "Browse All Procedures", 
    action: 'external' as const,
    url: "/services"
  },
  faq: {
    text: "View Full FAQ",
    action: 'faq' as const,
    url: "/faq"
  }
}

// --- PROACTIVE GREETINGS (Page-Aware Chatbot) ---
export const PROACTIVE_GREETINGS: { [key: string]: string } = {
  // Service Category Pages
  'plastic-surgery': "I see you're looking at Plastic Surgery. I can answer questions about procedures like Rhinoplasty, BBL, or Tummy Tucks. What are you most curious about?",
  'obesity-surgery': "I see you're interested in Obesity Surgery. I can help with specific questions about Gastric Sleeve, recovery, or costs. What's on your mind?",
  'hair-transplant': "I see you're exploring Hair Transplants. I can provide details on FUE vs. DHI, recovery time, or provide a cost estimate. How can I help?",
  'cosmetic-dentistry': "I see you're looking at Cosmetic Dentistry. I can answer questions about Veneers, Implants, or Smile Makeovers. What would you like to know?",
  
  // Core Journey Pages
  'journey': "This is the all-inclusive journey! I can clarify what's included in our packages, from flights to hotels. Just ask!",
  'contact': "This is our main contact page. If you have a quick question before you fill out the form, feel free to ask me here!",
  'health-form': "I see you're on the health form. If you have any questions about the form or the process, I'm here to help!",

  // Default for all other service pages
  'default_service': "I see you're interested in {serviceName}! I can answer specific questions about this procedure, recovery time, or provide a cost estimate. What are you most curious about?"
}
