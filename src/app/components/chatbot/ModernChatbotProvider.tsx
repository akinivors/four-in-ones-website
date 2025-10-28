// Modern Chatbot Integration - Replace the old chatbot system
'use client'

import React from 'react'
import ModernChatbot from './modern/ModernChatbot'

export default function ChatbotProvider() {
  return (
    <ModernChatbot 
      position="bottom-right"
      size="standard"
      className=""
    />
  )
}

// Export for easy integration
export { ModernChatbot }
