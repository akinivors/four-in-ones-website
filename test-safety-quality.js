// Test the user's safety/quality question
const query = "I'm a bit nervous about the quality of hospitals in another country. Can you tell me what kind of accreditations or certifications your partner hospitals have?"
const lowerQuery = query.toLowerCase()

console.log('Query:', query)
console.log('Lower query:', lowerQuery)

// Test safety/quality detection
const qualityWords = ['quality', 'safe', 'safety', 'standard', 'standards', 'accreditation', 'accreditations', 'certified', 'certification', 'certifications', 'accredited']
const hospitalWords = ['hospital', 'hospitals', 'facility', 'facilities', 'clinic', 'clinics', 'medical center']
const concernWords = ['nervous', 'worried', 'concern', 'concerned', 'trust', 'reliable', 'reputation']
const questionWords = ['what kind', 'tell me', 'can you tell me', 'do you have', 'are they']

const hasQualityWord = qualityWords.some(word => lowerQuery.includes(word))
const hasHospitalWord = hospitalWords.some(word => lowerQuery.includes(word))
const hasConcernWord = concernWords.some(word => lowerQuery.includes(word))
const hasQuestionContext = questionWords.some(phrase => lowerQuery.includes(phrase))

console.log('\nSafety/Quality detection:')
console.log('Has quality word:', hasQualityWord, qualityWords.filter(word => lowerQuery.includes(word)))
console.log('Has hospital word:', hasHospitalWord, hospitalWords.filter(word => lowerQuery.includes(word)))
console.log('Has concern word:', hasConcernWord, concernWords.filter(word => lowerQuery.includes(word)))
console.log('Has question context:', hasQuestionContext, questionWords.filter(phrase => lowerQuery.includes(phrase)))

const shouldMatch = (hasQualityWord && (hasHospitalWord || hasQuestionContext)) || 
                   (hasConcernWord && hasQualityWord) ||
                   (hasHospitalWord && (hasQualityWord || hasConcernWord))

console.log('Should match safety_quality:', shouldMatch)

// Test direct pattern matches
const safetyPatterns = [
  'safe surgery',
  'quality care',
  'jci accredited',
  'qualified surgeons',
  'hospital standards',
  'quality of hospitals',
  'hospital quality',
  'accreditations',
  'certifications',
  'accredited',
  'certified',
  'nervous about quality',
  'worried about quality',
  'hospital certifications',
  'partner hospitals',
  'what kind of accreditations',
  'quality standards',
  'international standards',
  'hospital accreditation'
]

console.log('\nDirect pattern matches:')
safetyPatterns.forEach(pattern => {
  if (lowerQuery.includes(pattern.toLowerCase())) {
    console.log('✅ Pattern match:', pattern)
  }
})
