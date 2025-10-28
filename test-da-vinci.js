// Test the user's da Vinci robotic surgery question
const query = 'I was reading one of your brochures and saw something about "da Vinci Robotic Surgery." Can you tell me what that is and which procedures you use it for?'
const lowerQuery = query.toLowerCase()

console.log('Query:', query)
console.log('Lower query:', lowerQuery)

// Test medical technology detection
const technologyWords = ['da vinci', 'robotic', 'robot', 'minimally invasive', 'laparoscopic', 'advanced technology', 'surgical technology', 'robotic surgery', 'robotic system']
const questionWords = ['what is', 'what that is', 'tell me what', 'can you tell me', 'explain', 'about']
const procedureContext = ['surgery', 'surgical', 'procedure', 'procedures', 'operation', 'use it for', 'which procedures']

const hasTechnologyWord = technologyWords.some(phrase => lowerQuery.includes(phrase))
const hasQuestionWord = questionWords.some(phrase => lowerQuery.includes(phrase))
const hasProcedureContext = procedureContext.some(word => lowerQuery.includes(word))

console.log('\nMedical Technology detection:')
console.log('Has technology word:', hasTechnologyWord, technologyWords.filter(phrase => lowerQuery.includes(phrase)))
console.log('Has question word:', hasQuestionWord, questionWords.filter(phrase => lowerQuery.includes(phrase)))
console.log('Has procedure context:', hasProcedureContext, procedureContext.filter(word => lowerQuery.includes(word)))
console.log('Should match medical_technology:', hasTechnologyWord && (hasQuestionWord || hasProcedureContext))

// Test direct pattern matches
const technologyPatterns = [
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
  'latest technology'
]

console.log('\nDirect pattern matches:')
technologyPatterns.forEach(pattern => {
  if (lowerQuery.includes(pattern.toLowerCase())) {
    console.log('✅ Pattern match:', pattern)
  }
})

// Check if it would match the generic procedure fallback
console.log('\nGeneric procedure check:')
console.log('Contains "procedure":', lowerQuery.includes('procedure'))
console.log('Contains "procedures":', lowerQuery.includes('procedures'))
