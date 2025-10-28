// Modern Chatbot Types - Clean Type Definitions
export interface ChatMessage {
  id: string
  type: 'user' | 'bot' | 'system'
  content: string
  timestamp: Date
  suggestions?: string[]
  ctaButton?: {
    text: string
    action: 'contact' | 'booking' | 'external' | 'faq'
    url?: string
  }
  isTyping?: boolean
  metadata?: {
    confidence: number
    source: 'ai' | 'faq' | 'knowledge' | 'fallback'
    intent?: string
    procedure?: string
  }
}

export interface ChatbotResponse {
  content: string
  suggestions: string[]
  ctaButton?: ChatMessage['ctaButton']
  confidence: number
  source: 'ai' | 'faq' | 'knowledge' | 'fallback'
  intent?: string
  requiresHuman?: boolean
}

export interface ChatbotConfig {
  appearance: {
    primaryColor: string
    accentColor: string
    position: 'bottom-right' | 'bottom-left'
    size: 'compact' | 'standard' | 'large'
  }
  behavior: {
    greetingDelay: number
    typingDelay: number
    confidenceThreshold: number
    enableAnalytics: boolean
  }
  messages: {
    greeting: string
    fallback: string
    error: string
    offline: string
  }
}

export interface Intent {
  name: string
  patterns: string[]
  response: string | ((query: string, context?: ChatContext) => ChatbotResponse)
  confidence: number
  priority: number
}

export interface ChatContext {
  sessionId: string
  userId?: string
  previousMessages: ChatMessage[]
  currentTopic?: string
  userPreferences?: Record<string, string | number | boolean>
  metadata: Record<string, string | number | boolean>
}

export interface KnowledgeSource {
  search(query: string, context?: ChatContext): Promise<ChatbotResponse | null>
  priority: number
  name: string
}
