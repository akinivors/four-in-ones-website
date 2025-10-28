// Quick Test of Flight Cost Detection
const testQuery = "Hello, I have a question about your packages. Is the cost of the flight from my home country included in the final price?"

// Simulate the normalization process
const normalizedQuery = testQuery.toLowerCase().trim().replace(/[?!.]/g, '')
console.log('Normalized query:', normalizedQuery)

// Test the flight cost detection logic
const flightWords = ['flight', 'flights', 'airfare', 'ticket', 'tickets', 'plane']
const costWords = ['cost', 'price', 'included', 'include', 'cover', 'covered', 'pay', 'expense', 'final']
const packageWords = ['package', 'packages', 'all-inclusive', 'total', 'final price']

const hasFlightWord = flightWords.some(word => normalizedQuery.includes(word))
const hasCostWord = costWords.some(word => normalizedQuery.includes(word))
const hasRelevantContext = packageWords.some(word => normalizedQuery.includes(word)) || 
                          normalizedQuery.includes('home country') || 
                          normalizedQuery.includes('included') ||
                          normalizedQuery.includes('final')

console.log('Has flight word:', hasFlightWord, flightWords.filter(word => normalizedQuery.includes(word)))
console.log('Has cost word:', hasCostWord, costWords.filter(word => normalizedQuery.includes(word)))
console.log('Has relevant context:', hasRelevantContext)
console.log('Should detect as flight cost question:', hasFlightWord && hasCostWord && hasRelevantContext)

// Test the pattern matching from config
const patterns = [
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
  'cost of airfare'
]

const exactMatch = patterns.some(pattern => normalizedQuery.includes(pattern.toLowerCase()))
console.log('Exact pattern match:', exactMatch, patterns.filter(pattern => normalizedQuery.includes(pattern.toLowerCase())))
