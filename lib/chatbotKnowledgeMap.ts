// In lib/chatbotKnowledgeMap.ts

/**
 * Defines the mapping for a procedure's specific content.
 * Each property (e.g., 'process') maps an intent to the
 * exact content key in `lib/serviceContent.tsx`.
 */
export interface ProcedureKnowledge {
  what?: string;
  process?: string;
  candidates?: string;
  preparation?: string;
  recovery?: string;
  risks?: string;
  // Add other common keys as needed
}

/**
 * Central Knowledge Map for the Chatbot.
 * This map connects a procedure's 'slug' (from servicesData.ts)
 * to its corresponding content keys (from serviceContent.tsx).
 * This avoids brittle, hard-coded key guessing in the AI engine.
 */
export const knowledgeMap: Record<string, ProcedureKnowledge> = {
  // Plastic Surgery Procedures
  'rhinoplasty': {
    what: 'rhinoplasty-what',
    process: 'rhinoplasty-procedure',
    preparation: 'rhinoplasty-preparation',
    candidates: 'rhinoplasty-preparation',
    recovery: 'rhinoplasty-recovery',
    risks: 'rhinoplasty-risks',
  },
  'breast-augmentation': {
    what: 'breast-augmentation-what',
    process: 'breast-augmentation-procedure',
    candidates: 'breast-augmentation-candidates',
    recovery: 'breast-augmentation-recovery',
    risks: 'breast-surgery-risks',
  },
  'breast-lift': {
    what: 'breast-lift-what',
    process: 'breast-lift-procedure',
    candidates: 'breast-lift-candidates',
    recovery: 'breast-lift-recovery',
    risks: 'breast-surgery-risks',
  },
  'tummy-tuck': {
    what: 'tummy-tuck-what',
    process: 'tummy-tuck-procedure',
    candidates: 'tummy-tuck-candidates',
    recovery: 'tummy-tuck-recovery',
    risks: 'tummy-tuck-risks',
  },
  'bbl': {
    what: 'bbl-what',
    process: 'bbl-procedure',
    candidates: 'bbl-candidates',
    recovery: 'bbl-recovery',
    risks: 'risks-general-surgery',
  },
  'vaser-liposuction': {
    what: 'vaser-lipo-what',
    process: 'vaser-lipo-procedure',
    candidates: 'vaser-lipo-candidates',
    recovery: 'vaser-lipo-recovery',
    risks: 'risks-general-surgery',
  },
  'mummy-makeover': {
    what: 'mummy-makeover-what',
    process: 'mummy-makeover-procedures',
    candidates: 'mummy-makeover-candidates',
    recovery: 'mummy-makeover-recovery',
    risks: 'risks-general-surgery',
  },
  'facelift': {
    what: 'facelift-what',
    process: 'facelift-procedure',
    candidates: 'facelift-candidates',
    recovery: 'facelift-recovery',
    risks: 'facelift-risks',
  },
  'gynecomastia': {
    what: 'gynecomastia-what',
    process: 'gynecomastia-procedure',
    candidates: 'gynecomastia-candidates',
    recovery: 'gynecomastia-recovery',
    risks: 'gynecomastia-risks',
  },
  'otoplasty': {
    what: 'otoplasty-what',
    process: 'otoplasty-procedure',
    candidates: 'otoplasty-candidates',
    recovery: 'otoplasty-recovery',
    risks: 'risks-general-surgery',
  },
  'arm-lift': {
    what: 'arm-lift-what',
    process: 'arm-lift-procedure',
    candidates: 'arm-lift-candidates',
    recovery: 'arm-lift-recovery',
    risks: 'risks-general-surgery',
  },
  'thigh-lift': {
    what: 'thigh-lift-what',
    process: 'thigh-lift-procedure',
    candidates: 'thigh-lift-candidates',
    recovery: 'thigh-lift-recovery',
    risks: 'risks-general-surgery',
  },
  'genital-rejuvenation': {
    what: 'genital-rejuvenation-what',
    process: 'genital-rejuvenation-procedure',
    candidates: 'genital-rejuvenation-candidates',
    recovery: 'genital-rejuvenation-recovery',
    risks: 'risks-general-surgery',
  },
  'scar-removal': {
    what: 'scar-removal-what',
    process: 'scar-removal-procedure',
    candidates: 'scar-removal-candidates',
    recovery: 'scar-removal-recovery',
    risks: 'risks-general-surgery',
  },
  'mole-removal': {
    what: 'mole-removal-what',
    process: 'mole-removal-procedure',
    candidates: 'mole-removal-candidates',
    recovery: 'mole-removal-recovery',
    risks: 'risks-general-surgery',
  },
  'penis-enlargement': {
    what: 'penis-enlargement-what',
    process: 'penis-enlargement-procedure',
    candidates: 'penis-enlargement-candidates',
    recovery: 'penis-enlargement-recovery',
    risks: 'risks-general-surgery',
  },

  // Hair Transplant Procedures
  'scalp-hair-transplant': {
    what: 'hair-transplant-what',
    process: 'hair-transplant-procedure',
    preparation: 'hair-transplant-preparation',
    candidates: 'hair-transplant-preparation',
    recovery: 'hair-transplant-recovery',
    risks: 'risks-general-surgery',
  },
  'eyebrow-transplantation': {
    what: 'eyebrow-transplant-what',
    process: 'eyebrow-transplant-procedure',
    risks: 'risks-general-surgery',
  },
  'beard-transplantation': {
    what: 'beard-transplant-what',
    process: 'beard-transplant-procedure',
    risks: 'risks-general-surgery',
  },

  // Bariatric Surgery Procedures
  'sleeve-gastrectomy': {
    what: 'sleeve-gastrectomy-what',
    candidates: 'sleeve-gastrectomy-candidates',
    preparation: 'sleeve-gastrectomy-preparation',
    recovery: 'sleeve-gastrectomy-recovery',
    risks: 'bariatric-surgery-risks',
  },
  'gastric-bypass': {
    what: 'gastric-bypass-what',
    process: 'gastric-bypass-procedure',
    preparation: 'gastric-bypass-preparation',
    candidates: 'gastric-bypass-preparation',
    recovery: 'gastric-bypass-recovery',
    risks: 'bariatric-surgery-risks',
  },
  'gastric-balloon': {
    what: 'gastric-balloon-what',
    process: 'gastric-balloon-procedure',
    candidates: 'gastric-balloon-candidates',
    recovery: 'gastric-balloon-removal',
    risks: 'bariatric-surgery-risks',
  },
  'gastric-botox': {
    what: 'gastric-botox-what',
    process: 'gastric-botox-procedure',
    candidates: 'gastric-botox-candidates',
    recovery: 'gastric-botox-recovery',
    risks: 'bariatric-surgery-risks',
  },

  // Dental Procedures
  'cosmetic-dentistry': {
    what: 'dentistry-veneers',
    process: 'dentistry-veneers',
    candidates: 'dentistry-veneers',
    recovery: 'dentistry-veneers',
  },

  // Eye Surgery Procedures
  'eye-surgery': {
    what: 'eye-surgery-refractive',
    process: 'eye-surgery-refractive',
  },

  // Transplantation Procedures
  'transplantation': {
    what: 'transplant-kidney',
    process: 'transplant-kidney',
  },

  // IVF Procedures
  'ivf-treatment': {
    what: 'ivf-what',
    process: 'ivf-stages',
    candidates: 'ivf-candidates',
  },
  
  // Other Aesthetic & Medical Services
  'mesotherapy': {
    what: 'mesotherapy-what',
    process: 'mesotherapy-procedure',
    candidates: 'mesotherapy-procedure',
    recovery: 'mesotherapy-recovery',
    risks: 'risks-general-surgery',
  },
  'micro-scalp-pigmentation': {
    what: 'smp-what',
    process: 'smp-procedure',
    candidates: 'smp-candidates',
    recovery: 'smp-recovery',
    risks: 'risks-general-surgery',
  },
  'general-surgery': {
    what: 'general-surgery-gallbladder',
    process: 'general-surgery-gallbladder',
  },
  'orthopedic-surgery': {
    what: 'orthopedic-knee-replacement',
    process: 'orthopedic-knee-replacement',
  },
};

