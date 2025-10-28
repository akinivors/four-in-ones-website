// Test Hotel Question Detection
const testQuery = "My other question was, do I get to choose which hotel I stay at, or is it pre-assigned by your team? I'm just curious about the options."

// Simulate the normalization process
const normalizedQuery = testQuery.toLowerCase().trim().replace(/[?!.]/g, '')
console.log('Normalized query:', normalizedQuery)

// Test hotel patterns
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
  'hotel choice'
]

const exactMatch = hotelPatterns.some(pattern => normalizedQuery.includes(pattern.toLowerCase()))
console.log('Exact pattern match:', exactMatch)
console.log('Matching patterns:', hotelPatterns.filter(pattern => normalizedQuery.includes(pattern.toLowerCase())))

// Test individual words
const hotelWords = ['hotel', 'accommodation', 'stay']
const choiceWords = ['choose', 'select', 'pick', 'options', 'choice', 'assigned']

const hasHotelWord = hotelWords.some(word => normalizedQuery.includes(word))
const hasChoiceWord = choiceWords.some(word => normalizedQuery.includes(word))

console.log('Has hotel word:', hasHotelWord, hotelWords.filter(word => normalizedQuery.includes(word)))
console.log('Has choice word:', hasChoiceWord, choiceWords.filter(word => normalizedQuery.includes(word)))
console.log('Should detect as hotel question:', hasHotelWord && hasChoiceWord)
