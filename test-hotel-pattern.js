// Test hotel pattern matching for specific user query
const query = "So, when the package includes a hotel, what kind of hotels are they? And do I get any choice in where I stay?"
const lowerQuery = query.toLowerCase()

console.log('Original query:', query)
console.log('Lower query:', lowerQuery)

// Test hotel accommodation patterns
const hotelPatterns = [
  'choose hotel',
  'hotel options', 
  'which hotel',
  'hotel stay',
  'accommodation',
  'where stay',
  'pre-assigned',
  'hotel selection',
  'pick hotel',
  'select hotel',
  'hotel choice',
  'what kind of hotels',
  'kind of hotels',
  'type of hotels',
  'choice in where i stay',
  'choice in where',
  'get any choice'
]

console.log('Testing hotel patterns:')
hotelPatterns.forEach(pattern => {
  if (lowerQuery.includes(pattern.toLowerCase())) {
    console.log('✅ MATCH:', pattern)
  }
})

// Test backup detection logic
const hotelWords = ['hotel', 'hotels', 'accommodation', 'stay', 'room', 'lodging']
const choiceWords = ['choose', 'select', 'pick', 'options', 'choice', 'assigned', 'pre-assigned', 'which', 'where', 'what kind', 'kind of', 'type of']
const questionWords = ['can i', 'do i', 'will i', 'am i able', 'is it possible', 'get any', 'get to']

const hasHotelWord = hotelWords.some(word => lowerQuery.includes(word))
const hasChoiceWord = choiceWords.some(word => lowerQuery.includes(word))
const hasQuestionContext = questionWords.some(word => lowerQuery.includes(word)) || 
                          lowerQuery.includes('curious') || 
                          lowerQuery.includes('question') ||
                          lowerQuery.includes('what kind') ||
                          lowerQuery.includes('are they')

console.log('\nBackup detection:')
console.log('Has hotel word:', hasHotelWord, hotelWords.filter(word => lowerQuery.includes(word)))
console.log('Has choice word:', hasChoiceWord, choiceWords.filter(word => lowerQuery.includes(word)))
console.log('Has question context:', hasQuestionContext)
console.log('Should match hotel accommodation:', hasHotelWord && (hasChoiceWord || hasQuestionContext))

// Test package patterns that might interfere
const packagePatterns = [
  'what includes',
  'package include',
  'all-inclusive',
  'what covers',
  'comprehensive package'
]

console.log('\nTesting package patterns:')
packagePatterns.forEach(pattern => {
  if (lowerQuery.includes(pattern.toLowerCase())) {
    console.log('⚠️  MATCH:', pattern)
  }
})
