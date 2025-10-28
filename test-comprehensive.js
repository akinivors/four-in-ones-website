// Comprehensive intent detection test
const testQueries = [
  {
    query: "Hello, I have a question about your packages. Is the cost of the flight from my home country included in the final price?",
    expectedIntent: "flight_cost_inclusion"
  },
  {
    query: "So, when the package includes a hotel, what kind of hotels are they? And do I get any choice in where I stay?",
    expectedIntent: "hotel_accommodation"
  },
  {
    query: "Do I get to choose which hotel I stay at, or is it pre-assigned by your team?",
    expectedIntent: "hotel_accommodation"
  },
  {
    query: "What does your all-inclusive package include?",
    expectedIntent: "package_inclusions"
  }
]

// Simulate the pattern matching logic
function matchesPatterns(query, patterns) {
  const lowerQuery = query.toLowerCase()
  
  // Hotel-specific context check first
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
  
  // Exact pattern matches
  return patterns.some(pattern => lowerQuery.includes(pattern.toLowerCase()))
}

// Define intents (simplified)
const intents = [
  {
    name: 'flight_cost_inclusion',
    patterns: ['cost of the flight', 'cost of flight', 'flight cost', 'flight included'],
    priority: 1
  },
  {
    name: 'package_inclusions', 
    patterns: ['what includes', 'package include', 'all-inclusive'],
    priority: 2
  },
  {
    name: 'hotel_accommodation',
    patterns: ['choose hotel', 'hotel options', 'which hotel', 'what kind of hotels', 'kind of hotels', 'choice in where', 'get any choice'],
    priority: 3
  }
]

console.log('Testing intent detection:\n')

testQueries.forEach(test => {
  console.log(`Query: "${test.query}"`)
  console.log(`Expected: ${test.expectedIntent}`)
  
  // Find matching intents
  const matches = []
  for (const intent of intents) {
    if (matchesPatterns(test.query, intent.patterns)) {
      matches.push({ name: intent.name, priority: intent.priority })
    }
  }
  
  // Sort by priority
  matches.sort((a, b) => a.priority - b.priority)
  
  if (matches.length > 0) {
    const winner = matches[0]
    console.log(`Detected: ${winner.name} (priority ${winner.priority})`)
    console.log(`✅ ${winner.name === test.expectedIntent ? 'CORRECT' : 'WRONG'}`)
  } else {
    console.log('❌ NO MATCH DETECTED')
  }
  
  console.log('---')
})
