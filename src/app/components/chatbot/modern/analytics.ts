// Modern Analytics System - Clean tracking and insights
export interface ChatAnalyticsEvent {
  type: 'message' | 'suggestion_click' | 'cta_click' | 'session_start' | 'session_end'
  sessionId: string
  timestamp: Date
  data?: {
    query?: string
    response?: string
    intent?: string
    confidence?: number
    source?: string
    ctaAction?: string
    suggestion?: string
  }
}

export class ModernAnalytics {
  private static events: ChatAnalyticsEvent[] = []
  private static sessionStart: Date | null = null

  // Track user message and bot response
  static trackMessage(sessionId: string, query: string, response: string, metadata?: {
    intent?: string
    confidence?: number
    source?: string
  }) {
    this.events.push({
      type: 'message',
      sessionId,
      timestamp: new Date(),
      data: {
        query,
        response,
        ...metadata
      }
    })

    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('💬 Chat Message:', { query, response, metadata })
    }
  }

  // Track suggestion clicks
  static trackSuggestion(sessionId: string, suggestion: string) {
    this.events.push({
      type: 'suggestion_click',
      sessionId,
      timestamp: new Date(),
      data: { suggestion }
    })

    console.log('🎯 Suggestion Clicked:', suggestion)
  }

  // Track CTA clicks
  static trackCTA(sessionId: string, ctaAction: string, ctaText: string) {
    this.events.push({
      type: 'cta_click',
      sessionId,
      timestamp: new Date(),
      data: { ctaAction, suggestion: ctaText }
    })

    console.log('🚀 CTA Clicked:', { ctaAction, ctaText })
  }

  // Track session lifecycle
  static trackSessionStart(sessionId: string) {
    this.sessionStart = new Date()
    this.events.push({
      type: 'session_start',
      sessionId,
      timestamp: this.sessionStart
    })

    console.log('📈 Chat Session Started:', sessionId)
  }

  static trackSessionEnd(sessionId: string) {
    const sessionEnd = new Date()
    const duration = this.sessionStart 
      ? sessionEnd.getTime() - this.sessionStart.getTime()
      : 0

    this.events.push({
      type: 'session_end',
      sessionId,
      timestamp: sessionEnd,
      data: {
        query: duration.toString() // Store duration as query for simplicity
      }
    })

    console.log('📊 Chat Session Ended:', { sessionId, duration: `${duration}ms` })
  }

  // Get analytics insights
  static getInsights() {
    const totalSessions = new Set(this.events.map(e => e.sessionId)).size
    const totalMessages = this.events.filter(e => e.type === 'message').length
    const totalSuggestions = this.events.filter(e => e.type === 'suggestion_click').length
    const totalCTAs = this.events.filter(e => e.type === 'cta_click').length

    // Intent analysis
    const intents = this.events
      .filter(e => e.type === 'message' && e.data?.intent)
      .map(e => e.data!.intent!)
    
    const intentCounts = intents.reduce((acc, intent) => {
      acc[intent] = (acc[intent] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    // Popular suggestions
    const suggestions = this.events
      .filter(e => e.type === 'suggestion_click')
      .map(e => e.data!.suggestion!)
    
    const suggestionCounts = suggestions.reduce((acc, suggestion) => {
      acc[suggestion] = (acc[suggestion] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return {
      overview: {
        totalSessions,
        totalMessages,
        totalSuggestions,
        totalCTAs,
        avgMessagesPerSession: totalSessions > 0 ? (totalMessages / totalSessions).toFixed(1) : '0'
      },
      intents: Object.entries(intentCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10),
      popularSuggestions: Object.entries(suggestionCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5),
      recentEvents: this.events.slice(-10)
    }
  }

  // Export data for external analytics
  static exportData() {
    return {
      events: this.events,
      insights: this.getInsights(),
      exportedAt: new Date()
    }
  }
}
