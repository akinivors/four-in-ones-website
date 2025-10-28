'use client'

// Modern Chatbot Component - Clean, Responsive, Accessible
import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { ChatMessage, ChatContext } from './types'
import { ModernAIEngine } from './aiEngine'
import { CHATBOT_CONFIG, SUGGESTIONS } from './config'

interface ModernChatbotProps {
  className?: string
  position?: 'bottom-right' | 'bottom-left'
  size?: 'compact' | 'standard' | 'large'
}

export default function ModernChatbot({ 
  className = '', 
  position = 'bottom-right',
  size = 'standard' 
}: ModernChatbotProps) {
  // State management
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [context, setContext] = useState<ChatContext>({
    sessionId: `session_${Date.now()}`,
    previousMessages: [],
    metadata: {}
  })

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const aiEngine = useRef(ModernAIEngine.getInstance())

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize chat with greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const greetingMessage: ChatMessage = {
          id: `msg_${Date.now()}`,
          type: 'bot',
          content: CHATBOT_CONFIG.messages.greeting,
          timestamp: new Date(),
          suggestions: SUGGESTIONS.initial,
          metadata: {
            confidence: 1.0,
            source: 'ai'
          }
        }
        setMessages([greetingMessage])
      }, CHATBOT_CONFIG.behavior.greetingDelay)
    }
  }, [isOpen, messages.length])

  // Handle message sending
  const handleSendMessage = async (message: string = inputValue.trim()) => {
    if (!message) return

    // Add user message
    const userMessage: ChatMessage = {
      id: `msg_${Date.now()}`,
      type: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    try {
      // Update context
      const updatedContext = {
        ...context,
        previousMessages: [...context.previousMessages, userMessage]
      }
      setContext(updatedContext)

      // Generate AI response
      const response = await aiEngine.current.generateResponse(message, updatedContext)

      // Simulate typing delay
      setTimeout(() => {
        const botMessage: ChatMessage = {
          id: `msg_${Date.now() + 1}`,
          type: 'bot',
          content: response.content,
          timestamp: new Date(),
          suggestions: response.suggestions,
          ctaButton: response.ctaButton,
          metadata: {
            confidence: response.confidence,
            source: response.source,
            intent: response.intent
          }
        }

        setMessages(prev => [...prev, botMessage])
        setIsTyping(false)

        // Update context with bot response
        setContext(prev => ({
          ...prev,
          previousMessages: [...prev.previousMessages, botMessage]
        }))
      }, CHATBOT_CONFIG.behavior.typingDelay)

    } catch (error) {
      console.error('Chatbot error:', error)
      setIsTyping(false)
      
      const errorMessage: ChatMessage = {
        id: `msg_${Date.now() + 2}`,
        type: 'bot',
        content: CHATBOT_CONFIG.messages.error,
        timestamp: new Date(),
        metadata: {
          confidence: 0,
          source: 'fallback'
        }
      }
      setMessages(prev => [...prev, errorMessage])
    }
  }

  // Handle suggestion clicks
  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  // Handle CTA clicks
  const handleCTAClick = (cta: ChatMessage['ctaButton']) => {
    if (cta?.action === 'external' && cta.url) {
      window.open(cta.url, '_blank')
    } else if (cta?.url) {
      window.location.href = cta.url
    }
  }

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Size configurations
  const sizeConfig = {
    compact: { width: 'w-72', height: 'h-80' },
    standard: { width: 'w-80', height: 'h-96' },
    large: { width: 'w-96', height: 'h-[28rem]' }
  }

  const positionClasses = position === 'bottom-right' 
    ? 'bottom-24 right-6' 
    : 'bottom-24 left-6'

  return (
    <div className={`fixed z-50 ${className}`}>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${position === 'bottom-right' ? 'bottom-6 right-6' : 'bottom-6 left-6'} 
                   z-50 p-4 rounded-full shadow-2xl transition-all duration-300 
                   ${isOpen 
                     ? 'bg-red-500 hover:bg-red-600' 
                     : 'bg-blue-600 hover:bg-blue-700 animate-pulse'
                   } text-white border-4 border-white`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        style={{ width: '60px', height: '60px' }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed ${positionClasses} z-40 ${sizeConfig[size].width} ${sizeConfig[size].height} 
                        bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col
                        animate-in slide-in-from-bottom-2 duration-300`}>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Medical Assistant</h3>
                <p className="text-xs opacity-90">AI-powered support</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-2 max-w-[85%] ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    
                    {/* Message bubble */}
                    <div className={`px-4 py-2 rounded-2xl max-w-full ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-white text-gray-800 shadow-sm border rounded-bl-md'
                    }`}>
                      <div className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Suggestions */}
                {message.suggestions && message.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-10">
                    {message.suggestions.slice(0, 3).map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full 
                                 hover:bg-blue-100 transition-colors border border-blue-200"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                {message.ctaButton && (
                  <div className="mt-3 ml-10">
                    <button
                      onClick={() => handleCTAClick(message.ctaButton)}
                      className="px-4 py-2 bg-orange-500 text-white text-sm rounded-lg 
                               hover:bg-orange-600 transition-colors shadow-sm"
                    >
                      {message.ctaButton.text}
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Bot size={16} className="text-gray-600" />
                  </div>
                  <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-md shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-2xl">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about procedures, costs, packages..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         text-sm placeholder-gray-500"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 
                         disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
