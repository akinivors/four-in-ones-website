// Debug the specific failing query
const query = "So, when the package includes a hotel, what kind of hotels are they? And do I get any choice in where I stay?"
const lowerQuery = query.toLowerCase()

console.log('Query:', query)
console.log('Lower query:', lowerQuery)

// Test hotel accommodation patterns specifically
const hotelPatterns = ['choose hotel', 'hotel options', 'what kind of hotels', 'kind of hotels', 'choice in where', 'get any choice']

console.log('\nTesting hotel pattern matching:')

// Check if any hotel patterns are triggered
const hotelWords = ['hotel', 'hotels', 'accommodation', 'stay', 'room', 'lodging']
const choiceWords = ['choose', 'select', 'pick', 'options', 'choice', 'assigned', 'pre-assigned', 'which', 'where', 'what kind', 'kind of', 'type of']
const questionWords = ['what kind', 'kind of', 'type of', 'are they', 'get any', 'get to', 'do i']

const hasHotelWord = hotelWords.some(word => lowerQuery.includes(word))
const hasChoiceWord = choiceWords.some(word => lowerQuery.includes(word))
const hasQuestionContext = questionWords.some(word => lowerQuery.includes(word))

console.log('Has hotel word:', hasHotelWord, hotelWords.filter(word => lowerQuery.includes(word)))
console.log('Has choice word:', hasChoiceWord, choiceWords.filter(word => lowerQuery.includes(word)))
console.log('Has question context:', hasQuestionContext, questionWords.filter(word => lowerQuery.includes(word)))
console.log('Should match hotel:', hasHotelWord && (hasChoiceWord || hasQuestionContext))

console.log('\nDirect pattern matches:')
hotelPatterns.forEach(pattern => {
  if (lowerQuery.includes(pattern.toLowerCase())) {
    console.log('✅ Direct match:', pattern)
  }
})

// Test package patterns
console.log('\nPackage patterns that interfere:')
const packagePatterns = ['what includes', 'package include', 'all-inclusive']
packagePatterns.forEach(pattern => {
  if (lowerQuery.includes(pattern.toLowerCase())) {
    console.log('⚠️  Package match:', pattern)
  }
})
