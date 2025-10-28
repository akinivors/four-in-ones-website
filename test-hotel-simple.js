// Test the user's exact query
const query = "I wanna know about hotels?"
const lowerQuery = query.toLowerCase()

console.log('Query:', query)
console.log('Lower query:', lowerQuery)

// Test hotel detection logic
const hotelWords = ['hotel', 'hotels', 'accommodation', 'stay', 'room', 'lodging']
const hotelQuestionWords = ['what kind', 'kind of', 'type of', 'choose', 'select', 'pick', 'choice', 'which', 'where', 'assigned', 'pre-assigned', 'about', 'know about', 'tell me about', 'wanna know']
const generalInquiry = ['about hotels', 'know about hotels', 'tell me about hotels', 'wanna know about hotels', 'hotel information']

const hasHotelWord = hotelWords.some(word => lowerQuery.includes(word))
const hasHotelQuestion = hotelQuestionWords.some(word => lowerQuery.includes(word))
const isGeneralHotelInquiry = generalInquiry.some(phrase => lowerQuery.includes(phrase))

console.log('\nHotel detection:')
console.log('Has hotel word:', hasHotelWord, hotelWords.filter(word => lowerQuery.includes(word)))
console.log('Has hotel question:', hasHotelQuestion, hotelQuestionWords.filter(word => lowerQuery.includes(word)))
console.log('Is general inquiry:', isGeneralHotelInquiry, generalInquiry.filter(phrase => lowerQuery.includes(phrase)))
console.log('Should trigger hotel response:', hasHotelWord && (hasHotelQuestion || isGeneralHotelInquiry))

// Test backup detection
const choiceWords = ['choose', 'select', 'pick', 'options', 'choice', 'assigned', 'pre-assigned', 'which', 'where', 'what kind', 'kind of', 'type of']
const questionWords = ['can i', 'do i', 'will i', 'am i able', 'is it possible', 'get any', 'get to']
const generalInquiryBackup = ['about', 'know about', 'tell me about', 'wanna know', 'want to know', 'information about']

const hasChoiceWord = choiceWords.some(word => lowerQuery.includes(word))
const hasQuestionContext = questionWords.some(word => lowerQuery.includes(word)) || 
                          lowerQuery.includes('curious') || 
                          lowerQuery.includes('question') ||
                          lowerQuery.includes('what kind') ||
                          lowerQuery.includes('are they')
const hasGeneralInquiryBackup = generalInquiryBackup.some(phrase => lowerQuery.includes(phrase))

console.log('\nBackup detection:')
console.log('Has choice word:', hasChoiceWord)
console.log('Has question context:', hasQuestionContext)
console.log('Has general inquiry backup:', hasGeneralInquiryBackup, generalInquiryBackup.filter(phrase => lowerQuery.includes(phrase)))
console.log('Backup should trigger:', hasHotelWord && (hasChoiceWord || hasQuestionContext || hasGeneralInquiryBackup))
