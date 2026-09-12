// Query analysis helpers: typo correction and language detection for the
// rule-based chatbot. The chatbot has no LLM and matches everything via plain
// substring checks, so these run as a pre-processing pass that cleans up the
// raw query *string* before it reaches any of those checks - every existing
// matcher benefits automatically, with zero changes to the matchers themselves.
import { servicesData } from '@/lib/servicesData'
import { PROCEDURE_SEARCH_KEYWORDS } from '@/lib/chatbotKnowledgeMap'

// Generic action/category words that aren't procedure names but are common
// enough (and important enough to get right) to include in the typo-correction
// vocabulary alongside the procedure-derived terms below.
const EXTRA_VOCABULARY_WORDS = [
  'cost', 'costs', 'price', 'prices', 'pricing', 'expensive', 'cheap', 'cheaper', 'affordable',
  'recovery', 'healing', 'aftercare',
  'safe', 'safety', 'risk', 'risks', 'danger', 'dangers',
  'candidate', 'candidates', 'eligible', 'eligibility', 'suitable',
  // NOTE: 'qualify' was here but is edit-distance 1 from 'quality' (a distinct,
  // important word - hospital/surgeon quality) and got "corrected" away from it
  // in testing. 'eligible'/'eligibility'/'candidate' already cover this meaning.
  'benefit', 'benefits', 'advantage', 'advantages',
  'process', 'procedure', 'procedures', 'treatment', 'treatments', 'consultation',
  'package', 'packages', 'hotel', 'hotels', 'accommodation',
  'flight', 'flights', 'airfare', 'insurance',
  'surgeon', 'surgeons', 'hospital', 'hospitals', 'doctor', 'doctors',
  'scar', 'scars', 'scarring', 'pain', 'painful', 'anesthesia',
  'save', 'savings', 'saving', 'money',
  'transplant', 'transplantation', 'augmentation', 'reduction',
]

function buildVocabulary(): Set<string> {
  const words = new Set<string>()
  const addPhrase = (phrase: string) => {
    phrase.toLowerCase().split(/[^a-z]+/).forEach(w => { if (w) words.add(w) })
  }
  servicesData.forEach(service => addPhrase(service.hero.title))
  Object.values(PROCEDURE_SEARCH_KEYWORDS).forEach(keywords => keywords.forEach(addPhrase))
  EXTRA_VOCABULARY_WORDS.forEach(w => words.add(w))
  return words
}

// The full set of words this bot "knows" - used to recognize a word is
// already correct (skip correction) and for language detection. Deliberately
// broader than CORRECTION_TARGETS below.
const VOCABULARY = buildVocabulary()

// Subset of VOCABULARY usable as a fuzzy-correction *target* - length >= 5
// only. Short words (4 letters and under) are excluded on purpose: at that
// length, edit-distance-1 is so easy to hit by coincidence that they turn
// into landmines for ordinary English words with no connection to the site
// ("book" -> "boob" via the "boob job" keyword, "make" -> "male" via "male
// breast reduction", "life" -> "lift" via "arm lift", all found in testing).
// The words excluded here stay in VOCABULARY, so typing them correctly is
// still always recognized - they just can't be what an unrelated typo gets
// "corrected" into.
const CORRECTION_TARGETS = new Set(Array.from(VOCABULARY).filter(w => w.length >= 5))

// Common English function/filler words. Exempt from typo "correction" - both
// to skip wasted work and, more importantly, to stop short common words
// (e.g. "most") from getting misread as a near-miss of a vocabulary word
// (e.g. "most" is edit-distance 1 from "cost").
export const STOPWORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'to', 'of', 'in', 'on', 'at', 'for', 'and', 'or', 'but', 'not', 'no', 'yes',
  'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them',
  'my', 'your', 'his', 'its', 'our', 'their',
  'this', 'that', 'these', 'those',
  'do', 'does', 'did', 'doing', 'done',
  'have', 'has', 'had', 'having',
  'will', 'would', 'shall', 'should', 'can', 'could', 'may', 'might', 'must',
  'what', 'when', 'where', 'why', 'who', 'whom', 'which', 'how',
  'with', 'without', 'about', 'from', 'into', 'through', 'during', 'before', 'after',
  'above', 'below', 'up', 'down', 'out', 'off', 'over', 'under', 'again', 'further',
  'then', 'once', 'here', 'there', 'all', 'any', 'both', 'each', 'few', 'more',
  'most', 'other', 'some', 'such', 'only', 'own', 'same', 'so', 'than', 'too', 'very',
  'just', 'also', 'like', 'get', 'got', 'need', 'want', 'know', 'think',
  'if', 'because', 'as', 'until', 'while',
  'am', 'ok', 'okay', 'sure', 'thanks', 'thank', 'please', 'hello', 'hi', 'hey',
])

// Known short, legitimate English words that sit dangerously close (by edit
// distance) to a vocabulary word - e.g. "cast" (as in a leg cast) is distance
// 1 from "cost", "sale" is distance 1 from "safe". Hand-tuned as these are
// found; not exhaustive by construction, but the words most likely to come up
// on a medical-tourism site are covered.
const PROTECTED_WORDS = new Set(['cast', 'sale'])

// Distance-2 is only allowed for long query words (10+ letters, where a
// legitimate two-typo word like "liposuciton" -> "liposuction" still needs
// it). Everything shorter requires a near-exact distance-1 match - testing
// found real medium-length collisions at distance 2 ("talking" -> "balding",
// "meaning" -> "healing") that a flat length<=6 cutoff didn't catch.
function maxAllowedDistance(length: number): number {
  return length >= 10 ? 2 : 1
}

export function levenshteinDistance(a: string, b: string): number {
  const m = a.length
  const n = b.length
  if (m === 0) return n
  if (n === 0) return m

  let prev = Array.from({ length: n + 1 }, (_, j) => j)
  let curr = new Array(n + 1).fill(0)

  for (let i = 1; i <= m; i++) {
    curr[0] = i
    for (let j = 1; j <= n; j++) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1
      curr[j] = Math.min(
        prev[j] + 1,
        curr[j - 1] + 1,
        prev[j - 1] + substitutionCost
      )
    }
    ;[prev, curr] = [curr, prev]
  }

  return prev[n]
}

// Corrects likely misspellings of important vocabulary words (procedure
// names/synonyms, cost/recovery/safety/etc.) by rewriting the query string
// itself, word by word, so every existing substring-based matcher downstream
// picks up the fix for free. Deliberately conservative: short words, stopwords,
// and already-recognized words are left untouched, and a word is only
// "corrected" when exactly one vocabulary word is the closest match.
export function correctTypos(query: string): string {
  const words = query.split(' ')

  const corrected = words.map(word => {
    if (word.length < 4) return word
    const lower = word.toLowerCase()
    if (VOCABULARY.has(lower) || STOPWORDS.has(lower) || PROTECTED_WORDS.has(lower)) {
      return word
    }

    let bestWord: string | null = null
    let bestDistance = Infinity
    let ambiguous = false

    for (const vocabWord of CORRECTION_TARGETS) {
      if (Math.abs(vocabWord.length - lower.length) > 2) continue
      const distance = levenshteinDistance(lower, vocabWord)
      if (distance < bestDistance) {
        bestDistance = distance
        bestWord = vocabWord
        ambiguous = false
      } else if (distance === bestDistance) {
        ambiguous = true
      }
    }

    const allowed = maxAllowedDistance(lower.length)
    if (bestWord && !ambiguous && bestDistance > 0 && bestDistance <= allowed) {
      return bestWord
    }
    return word
  })

  return corrected.join(' ')
}

// Non-Latin scripts commonly seen from international visitors: Arabic,
// Cyrillic, CJK, Hiragana/Katakana, Hangul, Hebrew.
const NON_LATIN_SCRIPT_REGEX = /[؀-ۿЀ-ӿ一-鿿぀-ヿ가-힯֐-׿]/
// Diacritics essentially unused in English but common in Turkish/German/French/
// Spanish/Portuguese/Italian - relevant here since this clinic's own visitor
// base skews Turkish/German. The full accented-vowel set matters, not just a
// couple of examples: testing found a Spanish sentence ("Cuánto cuesta la
// cirugía...") slip through with only é/è/ê/à/ñ covered, since á/í weren't in
// the set. Near-zero false-positive rate against genuine English input.
const NON_ENGLISH_LATIN_DIACRITICS_REGEX = /[çşğıüößáàâäãåéèêëíìîïóòôõúùûñ]/i

// "This probably isn't English" check for the chatbot's last-resort fallback.
// Deliberately restricted to the two high-confidence signals (non-Latin
// script, or Turkish/German/French/Spanish diacritics - relevant since this
// clinic's own visitor base skews Turkish/German). An earlier version also
// flagged any plain-Latin message with zero recognized stopword/vocabulary
// words, but broad testing found that misfires constantly on ordinary but
// off-topic or casual English that just doesn't happen to use this bot's
// narrow vocabulary or a common function word - a short grocery list, a
// pasted email signature, slangy phrasing ("yo dawg whats good"). Since
// genuinely non-English *plain-Latin, no-diacritic* text (e.g. Indonesian) is
// a rare case for this business's realistic visitor base, and such a message
// still degrades gracefully to the ordinary fallback rather than a wrong
// answer, the weak signal did more harm (confusing real English-speaking
// visitors) than good.
export function isLikelyNonEnglish(query: string): boolean {
  const trimmed = query.trim()
  if (!trimmed) return false

  if (NON_LATIN_SCRIPT_REGEX.test(trimmed)) return true
  if (NON_ENGLISH_LATIN_DIACRITICS_REGEX.test(trimmed)) return true

  return false
}
