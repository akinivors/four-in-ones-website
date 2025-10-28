// In lib/servicesData.ts

// --- INTERFACES (Defines the shape of our data) ---
export interface ServiceFact {
  label: string;
  value: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Define the Benefit type
export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

// Define the new Question type
export interface ServiceQuestion {
  id: string;
  label: string;
  type: 'radio' | 'text' | 'textarea';
  options?: string[];
}

export interface Service {
  slug: string;
  hero: {
    title: string;
    subtitle?: string;
    backgroundImageUrl: string;
  };
  overview: {
    overviewImageUrl: string;
    facts: ServiceFact[];
  };
  details: {
    tabs: Record<string, string>;
  };
  benefits?: Benefit[];
  risks?: string[];
  faq: FAQ[];
  ctaImage?: string;
  ctaImageUrl?: string;
  photoRequirements?: string[];
  specificQuestions?: ServiceQuestion[];
  requiredMedicalQuestions?: string[];
}

// --- THE ACTUAL DATA ---
export const servicesData: Service[] = [
  {
    slug: "rhinoplasty",
    hero: {
      title: "Rhinoplasty (Nose Job)",
      subtitle: "Transform your appearance with precision nose reshaping surgery in Turkey",
      backgroundImageUrl: "/images/rhinoplasty-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/rhinoplasty-overview.jpg",
      facts: [
        { label: 'Procedure Time', value: '2-3 Hours', icon: 'Clock' },
        { label: 'Ideal Candidate', value: 'Over 18, Good Health', icon: 'UserCheck' },
        { label: 'Hospital Stay', value: '1 Night', icon: 'Hospital' },
        { label: 'Results', value: 'Permanent', icon: 'Smile' },
      ],
    },
    benefits: [
      { icon: "Smile", title: "Enhanced Facial Harmony", description: "Improves the proportions of your nose to create a more balanced and harmonious facial appearance." },
      { icon: "CheckCircle2", title: "Corrected Breathing Issues", description: "Can repair a deviated septum and other structural issues to improve airflow and breathing." },
      { icon: "Users", title: "Boosted Self-Confidence", description: "Feeling better about your appearance can lead to a significant increase in self-esteem and confidence." }
    ],
    ctaImage: "/images/rhinoplasty-hero.jpg",
    details: {
      tabs: {
        "What is Rhinoplasty?": "rhinoplasty-what",
        "The Procedure": "rhinoplasty-procedure",
        "Preparation & Candidates": "rhinoplasty-preparation",
        "Recovery & Aftercare": "rhinoplasty-recovery",
        "Risks & Safety": "rhinoplasty-risks",
      },
    },
    risks: [
      "Adverse reaction to anesthesia",
      "Infection or bleeding",
      "Difficulty breathing through the nose",
      "Numbness in or around the nose",
      "Pain, discoloration or persistent swelling",
      "Noticeable scarring (if an open technique is used)",
      "A perforated nasal septum (a rare hole in the tissue between nostrils)",
      "An unsatisfactory aesthetic result leading to the possibility of revision surgery",
    ],
    faq: [
      {
        question: "Will the rhinoplasty procedure be painful?",
        answer: "The procedure itself is performed under general anesthesia, so you will not feel any pain. Post-surgery discomfort is normal and can be managed effectively with prescribed pain medication."
      },
      {
        question: "How long until I can see the final results?",
        answer: "You will notice a significant change once the splint is removed after the first week. However, it can take up to a full year for the swelling to completely subside and for the final, refined shape of your nose to become apparent."
      },
      {
        question: "Will there be visible scarring?",
        answer: "For a closed rhinoplasty, all incisions are hidden inside the nose. For an open rhinoplasty, there is a small incision on the columella, which typically heals exceptionally well and becomes nearly invisible over time."
      },
      {
        question: "When can I travel back home after the surgery?",
        answer: "We generally recommend patients plan to stay in Turkey for at least 7-10 days post-surgery. This allows for the removal of splints and initial follow-up appointments before you are cleared for air travel."
      },
    ],
    photoRequirements: [
      "Front view of face, neutral expression",
      "Left and right profile views of face",
      "View from below, looking up at nostrils"
    ],
    specificQuestions: [
      {
        id: "previousNoseSurgery",
        label: "Have you had previous nose surgery?",
        type: "radio",
        options: ["Yes", "No"]
      },
      {
        id: "breathingIssues",
        label: "Do you have any breathing difficulties through your nose?",
        type: "textarea",
      }
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'anesthesia_details',
      'herpes',
      'hiv',
      'hepatitis_b',
      'hepatitis_c',
      'drug_allergies',
      'recreational_drugs',
      'notes',
    ],
  },
  {
    slug: "scalp-hair-transplant",
    hero: {
      title: "Scalp Hair Transplant (FUE & DHI)",
      subtitle: "Restore your confidence with advanced FUE hair transplantation techniques",
      backgroundImageUrl: "/images/hair-transplant-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/hair-transplant-overview.jpg",
      facts: [
        { label: 'Techniques', value: 'FUE, DHI', icon: 'Scissors' },
        { label: 'Procedure Time', value: '6-8 Hours', icon: 'Clock' },
        { label: 'Hospital Stay', value: 'Outpatient', icon: 'Hotel' },
        { label: 'Results', value: 'Natural & Permanent', icon: 'Smile' },
      ],
    },
    details: {
      tabs: {
        "What is it?": "hair-transplant-what",
        "The Techniques": "hair-transplant-procedure",
        "Grafts & Planning": "hair-transplant-preparation",
        "Aftercare & Recovery": "hair-transplant-recovery",
        "Risks & Safety": "risks-general-surgery",
      },
    },
    benefits: [
      { icon: "ShieldCheck", title: "Permanent Solution", description: "Transplanted hair follicles are resistant to the balding process, providing a long-lasting and permanent result." },
      { icon: "Eye", title: "Natural Appearance", description: "Using advanced FUE & DHI techniques, hairs are implanted to mimic your natural growth pattern, direction, and density." },
      { icon: "Smile", title: "Boosted Confidence", description: "Restoring your hairline can dramatically improve self-esteem and provide a more youthful appearance." },
    ],
    risks: [
      "Adverse reaction to anesthesia",
      "Infection or bleeding",
      "Numbness or lack of sensation on the scalp",
      "Inflammation of hair follicles",
      "Shock loss (temporary hair shedding)",
      "Unnatural-looking results if poorly executed"
    ],
    faq: [
      {
        question: "How many grafts will I need?",
        answer: "The number of grafts depends on your degree of hair loss and desired density. Our surgeons will assess your needs during consultation and recommend the optimal number of grafts."
      },
      {
        question: "When will I see results?",
        answer: "New hair growth typically begins 3-4 months after the procedure. You'll see significant improvement at 6-9 months, with full results visible after 12-18 months."
      },
      {
        question: "Is the procedure permanent?",
        answer: "Yes, transplanted hair is permanent as it comes from areas genetically resistant to balding. However, existing non-transplanted hair may continue to thin over time."
      },
      {
        question: "Will there be visible scarring?",
        answer: "FUE technique leaves minimal scarring - only tiny dots that are virtually undetectable, even with short haircuts."
      },
    ],
    photoRequirements: [
      "Front view of forehead and hairline",
      "Left side of head",
      "Right side of head",
      "Back of head",
      "Top of head (overhead view)",
    ],
    ctaImage: "/images/hair-transplant-hero.jpg",
    specificQuestions: [
      { id: 'hair_loss_pattern', label: 'How would you describe your hair loss pattern (e.g., receding hairline, thinning crown)?', type: 'text' },
      { id: 'hair_loss_treatments', label: 'Have you used hair loss treatments like Minoxidil or Finasteride?', type: 'radio', options: ['Yes', 'No'] },
    ],
    requiredMedicalQuestions: [
      'drug_allergies',
      'anesthesia_problems',
      'anesthesia_details',
    ],
  },
  {
    slug: "sleeve-gastrectomy",
    hero: {
      title: "Sleeve Gastrectomy",
      subtitle: "The most effective surgical solution for long-term weight loss.",
      backgroundImageUrl: "/images/sleeve-gastrectomy-hero.webp",
    },
    overview: {
      overviewImageUrl: "/images/sleeve-gastrectomy-overview.jpg",
      facts: [
        { label: 'Procedure', value: 'Stomach Reduction (~80%)', icon: 'Scissors' },
        { label: 'Method', value: 'Laparoscopic (Minimally Invasive)', icon: 'Minimize2' },
        { label: 'Appetite Change', value: 'Ghrelin Hormone Reduction', icon: 'Cookie' },
        { label: 'Hospital Stay', value: '2-3 Nights', icon: 'BedDouble' },
      ],
    },
    details: {
      tabs: {
        "What is it?": "sleeve-gastrectomy-what",
        "Candidates": "sleeve-gastrectomy-candidates",
        "Preparation": "sleeve-gastrectomy-preparation",
        "Recovery & Nutrition": "sleeve-gastrectomy-recovery",
        "Risks & Safety": "bariatric-surgery-risks",
      },
    },
    benefits: [
      { icon: "CheckCircle2", title: "Significant Weight Loss", description: "Achieve substantial and durable long-term weight loss, often 60-80% of excess body weight." },
      { icon: "HeartHandshake", title: "Improved Health", description: "Drastically improves or resolves obesity-related conditions like type 2 diabetes, hypertension, and sleep apnea." },
      { icon: "Smile", title: "Enhanced Quality of Life", description: "Boosts mobility, self-esteem, and the ability to participate in activities you love." },
    ],
    risks: [
      "Adverse reaction to anesthesia",
      "Excessive bleeding",
      "Infection",
      "Blood clots (Deep Vein Thrombosis or Pulmonary Embolus)",
      "Staple line leaks from the stomach or intestine",
      "Bowel obstruction",
      "Hernias",
      "Gallstones due to rapid weight loss",
      "Malnutrition and vitamin deficiencies requiring lifelong supplementation",
      "Dumping syndrome (for Gastric Bypass)",
      "Acid reflux",
      "Failure to achieve desired weight loss",
      "Need for revision surgery",
    ],
    faq: [
      {
        question: "How much weight can I expect to lose?",
        answer: "On average, patients lose about 60-70% of their excess body weight within the first 12 to 18 months."
      },
      {
        question: "Is the procedure reversible?",
        answer: "No, Sleeve Gastrectomy is an irreversible procedure as a portion of the stomach is permanently removed."
      },
      {
        question: "What are the risks?",
        answer: "As with any major surgery, risks include infection, bleeding, and complications from anesthesia. Specific risks like staple line leaks are rare but serious. Our expert surgical team takes every precaution to minimize risks."
      },
      {
        question: "When can I return to work?",
        answer: "Most patients with desk jobs can return to work within 1-2 weeks. If your job is more physically demanding, you may need 3-4 weeks off."
      }
    ],
    ctaImage: "/images/sleeve-gastrectomy-hero.webp",
    photoRequirements: [
      "Front view of body (from knees to neck)",
      "Back view of body (from knees to neck)",
      "Left side profile of body",
      "Right side profile of body",
    ],
    specificQuestions: [
      { id: 'bmi', label: 'What is your current height and weight (or BMI, if you know it)?', type: 'text' },
      { id: 'tried_weight_loss', label: 'What other weight loss programs or diets have you tried in the past?', type: 'textarea' },
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'anesthesia_details',
      'sleep_apnea',
      'cpap',
      'blood_clot_calf',
      'blood_clot_lungs',
      'drug_allergies',
      'insulin',
      'antidiabetic_pills',
    ],
  },
  {
    slug: "gastric-bypass",
    hero: {
      title: "Gastric Bypass",
      subtitle: "The gold standard in weight loss surgery for profound, lasting results.",
      backgroundImageUrl: "/images/gastric-bypass-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/gastric-bypass-overview.jpg",
      facts: [
        { label: 'Method', value: 'Restrictive & Malabsorptive', icon: 'Combine' },
        { label: 'Diabetes Resolution', value: 'Extremely High', icon: 'Activity' },
        { label: 'Reversibility', value: 'Technically, but difficult', icon: 'RotateCcw' },
        { label: 'Supplementation', value: 'Lifelong & Critical', icon: 'Pill' },
      ],
    },
    details: {
      tabs: {
        "What is it?": "gastric-bypass-what",
        "The Procedure": "gastric-bypass-procedure",
        "Candidates": "gastric-bypass-preparation",
        "Recovery": "gastric-bypass-recovery",
        "Risks & Safety": "bariatric-surgery-risks",
      },
    },
    benefits: [
      { icon: "CheckCircle2", title: "Significant Weight Loss", description: "Achieve substantial and durable long-term weight loss, often 60-80% of excess body weight." },
      { icon: "HeartHandshake", title: "Improved Health", description: "Drastically improves or resolves obesity-related conditions like type 2 diabetes, hypertension, and sleep apnea." },
      { icon: "Smile", title: "Enhanced Quality of Life", description: "Boosts mobility, self-esteem, and the ability to participate in activities you love." },
    ],
    risks: [
      "Adverse reaction to anesthesia",
      "Excessive bleeding",
      "Infection",
      "Blood clots (Deep Vein Thrombosis or Pulmonary Embolus)",
      "Staple line leaks from the stomach or intestine",
      "Bowel obstruction",
      "Hernias",
      "Gallstones due to rapid weight loss",
      "Malnutrition and vitamin deficiencies requiring lifelong supplementation",
      "Dumping syndrome (for Gastric Bypass)",
      "Acid reflux",
      "Failure to achieve desired weight loss",
      "Need for revision surgery",
    ],
    faq: [
      {
        question: "What is 'dumping syndrome'?",
        answer: "It's a condition that can occur after bypass surgery if you eat high-sugar or high-fat foods, causing nausea and diarrhea. It serves as a strong deterrent to unhealthy eating."
      },
      {
        question: "How is this different from a gastric sleeve?",
        answer: "A bypass reroutes the intestines, while a sleeve only reduces stomach size. Bypass often leads to slightly more weight loss and is more effective for diabetes, but requires more stringent nutritional monitoring."
      },
    ],
    ctaImage: "/images/gastric-bypass-hero.jpg",
    photoRequirements: [
      "Front view of body (from knees to neck)",
      "Back view of body (from knees to neck)",
      "Left side profile of body",
      "Right side profile of body",
    ],
    specificQuestions: [
      { id: 'bmi', label: 'What is your current height and weight (or BMI, if you know it)?', type: 'text' },
      { id: 'tried_weight_loss', label: 'What other weight loss programs or diets have you tried in the past?', type: 'textarea' },
      { id: 'has_gerd', label: 'Do you suffer from GERD or significant acid reflux?', type: 'radio', options: ['Yes', 'No'] },
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'anesthesia_details',
      'sleep_apnea',
      'cpap',
      'blood_clot_calf',
      'blood_clot_lungs',
      'drug_allergies',
      'insulin',
      'antidiabetic_pills',
      'rectal_bleeding',
      'constipation_diarrhea',
    ],
  },
  {
    slug: "gastric-balloon",
    hero: {
      title: "Gastric Balloon",
      subtitle: "A non-surgical, temporary tool to kickstart your weight loss journey.",
      backgroundImageUrl: "/images/gastric-balloon-hero.png",
    },
    overview: {
      overviewImageUrl: "/images/gastric-balloon-overview.jpg",
      facts: [
        { label: 'Method', value: 'Non-Surgical, Endoscopic', icon: 'Camera' },
        { label: 'Duration', value: 'Temporary (6-12 Months)', icon: 'Calendar' },
        { label: 'Invasiveness', value: 'Minimally Invasive', icon: 'Minimize2' },
        { label: 'Avg. Weight Loss', value: '10-15% of total body weight', icon: 'TrendingDown' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Non-Surgical", description: "A minimally invasive endoscopic procedure with no incisions or permanent changes to your anatomy." },
      { icon: "Users", title: "Behavioral Training", description: "Serves as a tool to learn portion control and develop healthier eating habits for long-term success." },
      { icon: "Smile", title: "Kickstart Weight Loss", description: "Provides a significant initial weight loss, motivating you to continue your health journey after removal." },
    ],
    risks: [
      'Nausea and vomiting (especially in the first few days)',
      'Acid reflux or stomach discomfort',
      'Balloon deflation or rupture (rare, indicated by blue-green urine)',
      'Stomach ulcers or erosion',
      'Bowel obstruction (extremely rare)',
      'Intolerance requiring early removal',
    ],
    details: {
      tabs: {
        "What is it?": "gastric-balloon-what",
        "The Procedure": "gastric-balloon-procedure",
        "Candidates": "gastric-balloon-candidates",
        "Removal & After": "gastric-balloon-removal",
      },
    },
    faq: [
      {
        question: "Can the balloon burst?",
        answer: "While extremely rare, it is a possibility. The balloons are filled with a blue-colored saline solution, so if it were to leak, your urine would turn blue/green, providing a clear signal to contact your doctor immediately."
      },
      {
        question: "What happens after the balloon is removed?",
        answer: "The period with the balloon is a training period. After removal, your success depends on your ability to maintain the healthy diet and lifestyle habits you've learned."
      },
    ],
    ctaImage: "/images/gastric-balloon-hero.png",
    photoRequirements: [
      "Front view of body (from knees to neck)",
      "Back view of body (from knees to neck)",
      "Left side profile of body",
      "Right side profile of body",
    ],
    specificQuestions: [
      { id: 'bmi', label: 'What is your current height and weight (or BMI, if you know it)?', type: 'text' },
      { id: 'tried_weight_loss', label: 'What other weight loss programs or diets have you tried in the past?', type: 'textarea' },
    ],
    requiredMedicalQuestions: [
      'drug_allergies',
      'has_gerd',
    ],
  },
  {
    slug: "gastric-botox",
    hero: {
      title: "Gastric Botox",
      subtitle: "A modern, non-surgical approach to aid in modest weight loss.",
      backgroundImageUrl: "/images/gastric-botox-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/gastric-botox-overview.png",
      facts: [
        { label: 'Method', value: 'Non-Surgical, Injection', icon: 'Injection' },
        { label: 'Duration', value: 'Temporary (~6 Months)', icon: 'Calendar' },
        { label: 'Procedure Time', value: '~20 Minutes', icon: 'Clock' },
        { label: 'Best For', value: 'Modest Weight Loss', icon: 'Target' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Minimally Invasive", description: "A quick, outpatient endoscopic procedure with virtually no downtime or recovery period." },
      { icon: "Eye", title: "Appetite Control", description: "Slows stomach emptying, leading to a prolonged feeling of fullness that helps reduce overall calorie intake." },
      { icon: "Smile", title: "Safe & Repeatable", description: "A low-risk procedure whose effects are temporary, allowing it to be repeated if necessary." },
    ],
    risks: [
      'Temporary nausea or stomach upset',
      'Rare allergic reaction to Botox',
      'Minimal effectiveness if not combined with diet and exercise',
      'Effects wear off after approximately 6 months',
      'Possible need for repeat treatments',
    ],
    details: {
      tabs: {
        "What is it?": "gastric-botox-what",
        "The Procedure": "gastric-botox-procedure",
        "Candidates": "gastric-botox-candidates",
        "Recovery & Results": "gastric-botox-recovery",
      },
    },
    faq: [
      {
        question: "Is Gastric Botox safe?",
        answer: "Yes, it is considered a very safe procedure with minimal risks, which are generally related to the endoscopic procedure itself, not the Botox."
      },
      {
        question: "How much weight can I lose?",
        answer: "Weight loss is more modest than with surgical options. Patients can typically expect to lose 10-15% of their total body weight over 6 months, provided they follow diet and exercise recommendations."
      },
    ],
    ctaImage: "/images/gastric-botox-hero.jpg",
    photoRequirements: [
      "Front view of body (from knees to neck)",
      "Back view of body (from knees to neck)",
      "Left side profile of body",
      "Right side profile of body",
    ],
    specificQuestions: [
      { id: 'bmi', label: 'What is your current height and weight (or BMI, if you know it)?', type: 'text' },
      { id: 'tried_weight_loss', label: 'What other weight loss programs or diets have you tried in the past?', type: 'textarea' },
    ],
    requiredMedicalQuestions: [
      'drug_allergies',
    ],
  },
  {
    slug: "breast-augmentation",
    hero: {
      title: "Breast Augmentation",
      subtitle: "Enhance your silhouette and confidence with our expert surgeons.",
      backgroundImageUrl: "/images/breast-aug-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/breast-aug-overview.jpg",
      facts: [
        { label: 'Procedure Time', value: '1-2 Hours', icon: 'Clock' },
        { label: 'Anesthesia', value: 'General Anesthesia', icon: 'UserCheck' },
        { label: 'Implant Types', value: 'Silicone, Saline', icon: 'Layers' },
        { label: 'Recovery', value: '1-2 Weeks', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Enhanced Volume & Shape", description: "Increases fullness and projection of the breasts for a more desired silhouette." },
      { icon: "Eye", title: "Improved Body Proportions", description: "Creates a more balanced and symmetrical figure, making clothes fit better." },
      { icon: "Smile", title: "Restored Confidence", description: "Helps restore breast volume lost due to pregnancy or weight loss, boosting self-esteem." },
    ],
    risks: [
      "Adverse reaction to anesthesia",
      "Infection or bleeding",
      "Changes in nipple or breast sensation, which may be temporary or permanent",
      "Scarring that may be thick, red, or painful",
      "Asymmetry in breast shape, size, or position",
      "Difficulty or inability to breastfeed",
      "For implants: Capsular contracture (scar tissue that squeezes the implant)",
      "For implants: Implant leakage or rupture",
      "Possibility of requiring additional surgery",
    ],
    details: {
      tabs: {
        "What is it?": "breast-augmentation-what",
        "The Procedure": "breast-augmentation-procedure",
        "Candidates": "breast-augmentation-candidates",
        "Recovery": "breast-augmentation-recovery",
        "Risks & Safety": "breast-surgery-risks",
      },
    },
    faq: [
      { 
        question: "How long do breast implants last?", 
        answer: "Breast implants are not considered lifetime devices. The average lifespan is 10 to 20 years, after which they may need to be replaced or removed." 
      },
      { 
        question: "Will I be able to breastfeed after augmentation?", 
        answer: "Most women can breastfeed successfully after breast augmentation, but it's not guaranteed. The ability to breastfeed depends on the incision type and implant placement, which you should discuss with your surgeon." 
      },
      { 
        question: "What will the scars look like?", 
        answer: "Our surgeons are experts in minimizing scarring by placing incisions in hidden areas. Scars will fade significantly over time but will not disappear completely." 
      }
    ],
    photoRequirements: [
      "Front view of neck, shoulders, breasts and navel",
      "Front view of both arms raised above your head",
      "Left side view (both arms down the side)",
      "Right side view (both arms down the side)"
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'anesthesia_details',
      'smoking_status',
      'alcohol_status',
      'drug_allergies',
      'recreational_drugs',
    ],
  },
  {
    slug: "breast-lift",
    hero: {
      title: "Breast Lift (Mastopexy)",
      subtitle: "Restore a youthful, elevated shape and position to your breasts.",
      backgroundImageUrl: "/images/breast-lift-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/breast-lift-overview.jpg",
      facts: [
        { label: 'Procedure Time', value: '2-3 Hours', icon: 'Clock' },
        { label: 'Anesthesia', value: 'General Anesthesia', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Reshape & Reposition', icon: 'Award' },
        { label: 'Recovery', value: '1-2 Weeks', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Restores Youthful Position", description: "Raises and firms the breasts, correcting sagging and creating a perkier, more youthful contour." },
      { icon: "Eye", title: "Improves Breast Shape", description: "Reshapes breast tissue to be rounder and firmer, and repositions the nipples to a higher location." },
      { icon: "Smile", title: "Better Clothing Fit", description: "Clothing and swimwear often fit more comfortably and attractively after a breast lift." },
    ],
    risks: [
      "Adverse reaction to anesthesia",
      "Infection or bleeding",
      "Changes in nipple or breast sensation, which may be temporary or permanent",
      "Scarring that may be thick, red, or painful",
      "Asymmetry in breast shape, size, or position",
      "Difficulty or inability to breastfeed",
      "For implants: Capsular contracture (scar tissue that squeezes the implant)",
      "For implants: Implant leakage or rupture",
      "Possibility of requiring additional surgery",
    ],
    details: {
      tabs: {
        "What is it?": "breast-lift-what",
        "The Procedure": "breast-lift-procedure",
        "Candidates": "breast-lift-candidates",
        "Recovery": "breast-lift-recovery",
        "Risks & Safety": "breast-surgery-risks",
      },
    },
    faq: [
      { 
        question: "Will a breast lift change my breast size?", 
        answer: "A breast lift alone does not significantly change the size of your breasts, but it makes them appear perkier and rounder. If you desire more volume, a lift can be combined with a breast augmentation procedure." 
      },
      { 
        question: "How long will the results of a breast lift last?", 
        answer: "The results are long-lasting; however, gravity, aging, and weight fluctuations will continue to have an effect over time. Maintaining a stable weight and healthy lifestyle can help preserve your results." 
      },
      { 
        question: "Will I have scars after a breast lift?", 
        answer: "Yes, any surgical breast lift will leave permanent scars. However, our surgeons are skilled at placing incisions where they are least conspicuous, and the scars will fade significantly over time." 
      }
    ],
    photoRequirements: [
      "Front view of neck, shoulders, breasts and navel",
      "Front view of both arms raised above your head",
      "Left side view (both arms down the side)",
      "Right side view (both arms down the side)"
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'anesthesia_details',
      'smoking_status',
      'alcohol_status',
      'drug_allergies',
    ],
  },
  {
    slug: "tummy-tuck",
    hero: {
      title: "Tummy Tuck (Abdominoplasty)",
      subtitle: "Achieve a firmer, flatter abdomen by removing excess skin and fat.",
      backgroundImageUrl: "/images/tummy-tuck-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/tummy-tuck-overview.jpg",
      facts: [
        { label: 'Procedure Time', value: '2-4 Hours', icon: 'Clock' },
        { label: 'Anesthesia', value: 'General Anesthesia', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Remove Loose Skin, Tighten Muscle', icon: 'Award' },
        { label: 'Recovery', value: '2-4 Weeks', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Flatter, Firmer Abdomen", description: "Removes excess, loose skin and fat to create a smoother and tighter abdominal profile." },
      { icon: "ShieldCheck", title: "Repairs Abdominal Muscles", description: "Tightens weakened or separated abdominal muscles (diastasis recti), restoring the strength of the abdominal wall." },
      { icon: "Smile", title: "Improved Body Contour", description: "Creates a more defined waistline and allows clothing to fit more comfortably and attractively." },
    ],
    risks: [
      "Adverse reaction to anesthesia",
      "Excessive bleeding during or after the surgery",
      "Infection in the incision sites",
      "Seroma or fluid accumulation",
      "Skin loss or discolored skin",
      "Delayed wound healing",
      "Numbness or other changes in skin sensation",
      "Fatty tissue necrosis (death of fat tissue located deep in the skin)",
      "Conspicuous or poor quality scarring",
      "Asymmetrical results",
      "Persistent pain after the surgery",
      "Pulmonary complications, such as blood clots (DVT)",
      "Possibility of revisionary surgery",
    ],
    details: {
      tabs: {
        "What is it?": "tummy-tuck-what",
        "The Procedure": "tummy-tuck-procedure",
        "Candidates": "tummy-tuck-candidates",
        "Recovery": "tummy-tuck-recovery",
        "Risks & Safety": "tummy-tuck-risks",
      },
    },
    faq: [
      { 
        question: "Is a Tummy Tuck the same as Liposuction?", 
        answer: "No. Liposuction removes fat deposits, while a tummy tuck removes excess skin and tightens abdominal muscles. They are often performed together for a more comprehensive result." 
      },
      { 
        question: "Will I have a large scar?", 
        answer: "Yes, a tummy tuck results in a permanent scar located low on the abdomen. Our surgeons are experts at placing the incision so it can be easily hidden by underwear or bikini bottoms. The scar will fade significantly over time." 
      },
      { 
        question: "Can I get pregnant after a tummy tuck?", 
        answer: "Yes, but it is highly recommended to wait until you are finished having children before undergoing a tummy tuck, as a future pregnancy will stretch the abdominal skin and muscles again, potentially compromising your surgical results." 
      }
    ],
    photoRequirements: [
      "Left body profile",
      "Right body profile",
      "Front on profile from knees upward",
      "Back on profile from knees upward"
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'anesthesia_details',
      'smoking_status',
      'alcohol_status',
      'blood_clot_calf',
      'blood_clot_lungs',
      'drug_allergies',
    ],
  },
  {
    slug: "bbl",
    hero: {
      title: "BBL (Brazilian Butt Lift)",
      subtitle: "Enhance your curves using your own natural fat for a fuller, shapelier buttocks.",
      backgroundImageUrl: "/images/bbl-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/bbl-overview.jpg",
      facts: [
        { label: 'Procedure Time', value: '3-5 Hours', icon: 'Clock' },
        { label: 'Anesthesia', value: 'General Anesthesia', icon: 'UserCheck' },
        { label: 'Key Feature', value: 'Autologous Fat Transfer', icon: 'Recycle' },
        { label: 'Recovery Note', value: 'No direct sitting for 2-3 weeks', icon: 'AlertTriangle' },
      ],
    },
    benefits: [
      { icon: "Smile", title: "Natural Look & Feel", description: "Uses your own body fat, ensuring the results look and feel completely natural." },
      { icon: "CheckCircle2", title: "Dual Body Contouring", description: "Slims down donor areas (like the abdomen or thighs) while simultaneously enhancing the buttocks." },
      { icon: "Eye", title: "Improved Proportions", description: "Creates a more curvaceous, hourglass figure and improves the overall balance of your silhouette." },
    ],
    risks: [
      "Adverse reaction to anesthesia",
      "Infection, bleeding, or hematoma",
      "Deep Vein Thrombosis (DVT) and other blood clot complications",
      "Fat embolism (a rare but serious risk if fat is injected into the muscle)",
      "Asymmetry or contour irregularities",
      "Fat necrosis (death of fat cells) or oil cysts",
      "Poor scarring at liposuction sites",
      "A portion of the transferred fat (20-40%) will not survive and will be naturally absorbed by the body",
      "Need for revision surgery",
    ],
    details: {
      tabs: {
        "What is it?": "bbl-what",
        "The Procedure": "bbl-procedure",
        "Candidates": "bbl-candidates",
        "Recovery": "bbl-recovery",
      },
    },
    faq: [
      { 
        question: "Why can't I sit down after a BBL?", 
        answer: "Sitting directly on your buttocks puts pressure on the newly transferred fat cells, which can damage them and compromise your final results. You will need to use a special BBL pillow and avoid direct pressure for several weeks." 
      },
      { 
        question: "How much fat is needed for a BBL?", 
        answer: "This depends entirely on your anatomy and desired outcome. A surgeon needs to be able to harvest enough fat from donor areas to achieve a noticeable and proportionate result." 
      },
      { 
        question: "How long do BBL results last?", 
        answer: "The results are considered permanent. The fat cells that successfully survive the transfer process will remain for a lifetime. However, significant weight fluctuations can affect the size and shape of the results." 
      }
    ],
    photoRequirements: [
      "Left body profile",
      "Right body profile",
      "Front on profile from knees upward",
      "Back on profile from knees upward"
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'blood_clot_calf',
      'blood_clot_lungs',
      'drug_allergies',
    ],
  },
  {
    slug: "vaser-liposuction",
    hero: {
      title: "Vaser Liposuction",
      subtitle: "High-definition body sculpting using advanced ultrasound technology.",
      backgroundImageUrl: "/images/lipo-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/lipo-overview.jpg",
      facts: [
        { label: 'Technology', value: 'Ultrasonic Lipolysis', icon: 'Waves' },
        { label: 'Anesthesia', value: 'General or Local', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Fat Removal & Contouring', icon: 'Target' },
        { label: 'Recovery', value: '1-2 Weeks', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "High-Definition Sculpting", description: "Allows for precise contouring and the ability to create athletic-looking definition, such as 'six-pack' abs." },
      { icon: "ShieldCheck", title: "Minimally Invasive", description: "Less traumatic than traditional liposuction, resulting in less bleeding, bruising, and a faster recovery period." },
      { icon: "Eye", title: "Effective on Stubborn Fat", description: "Specifically targets and emulsifies fat cells in areas that are resistant to diet and exercise." },
    ],
    risks: [
      "Adverse reaction to anesthesia",
      "Infection, bleeding, or seroma (fluid accumulation)",
      "Burns or skin injury from the ultrasound probe",
      "Contour irregularities, lumpiness, or uneven results",
      "Changes in skin sensation or numbness",
      "Scarring at incision points",
      "Blood clots (DVT)",
      "Damage to underlying structures",
    ],
    details: {
      tabs: {
        "What is it?": "vaser-lipo-what",
        "The Procedure": "vaser-lipo-procedure",
        "Candidates": "vaser-lipo-candidates",
        "Recovery": "vaser-lipo-recovery",
      },
    },
    faq: [
      { 
        question: "How is Vaser different from traditional liposuction?", 
        answer: "Vaser uses ultrasound energy to liquefy fat before it is removed, which is gentler on the body's tissues. This allows for more precise sculpting and a quicker recovery compared to the purely manual method of traditional liposuction." 
      },
      { 
        question: "Are the results of Vaser Lipo permanent?", 
        answer: "Yes, the fat cells that are removed are gone permanently. However, it is crucial to maintain a stable weight and healthy lifestyle, as the remaining fat cells in your body can still expand." 
      },
      { 
        question: "How much fat can be removed in one session?", 
        answer: "There is a limit to how much fat can be safely removed in a single procedure, typically around 5 liters. Vaser Lipo is a contouring tool, not a weight-loss surgery." 
      }
    ],
    photoRequirements: [
      "Left body profile",
      "Right body profile",
      "Front on profile from knees upward",
      "Back on profile from knees upward"
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'alcohol_status',
      'blood_clot_calf',
      'drug_allergies',
    ],
  },
  {
    slug: "mummy-makeover",
    hero: {
      title: "Mummy Makeover",
      subtitle: "A personalized combination of procedures to restore your pre-pregnancy body.",
      backgroundImageUrl: "/images/mummy-makeover-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/mummy-makeover-overview.jpg",
      facts: [
        { label: 'Procedures', value: 'Customized Combination', icon: 'ClipboardList' },
        { label: 'Common Areas', value: 'Abdomen, Breasts, Body', icon: 'Target' },
        { label: 'Anesthesia', value: 'General Anesthesia', icon: 'UserCheck' },
        { label: 'Recovery', value: '4-6 Weeks+', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Comprehensive Restoration", description: "Addresses multiple areas affected by pregnancy and childbirth in a single surgical session." },
      { icon: "Users", title: "Fully Customized", description: "Each Mummy Makeover is tailored to your specific goals, combining procedures like a tummy tuck, breast lift, and liposuction." },
      { icon: "Smile", title: "Restored Confidence", description: "Helps you regain your pre-pregnancy body shape, improving self-esteem and comfort in clothing." },
    ],
    risks: [
      "Increased risks associated with multiple, longer procedures under anesthesia.",
      "Adverse reaction to anesthesia",
      "Infection, bleeding, or seroma (fluid accumulation)",
      "Blood clots (Deep Vein Thrombosis)",
      "Poor wound healing and conspicuous scarring",
      "Contour irregularities",
      "Risks specific to each individual procedure performed (e.g., implant complications, changes in sensation).",
      "Possibility of revisionary surgery",
    ],
    details: {
      tabs: {
        "What is it?": "mummy-makeover-what",
        "Common Procedures": "mummy-makeover-procedures",
        "Candidates": "mummy-makeover-candidates",
        "Recovery": "mummy-makeover-recovery",
      },
    },
    faq: [
      { 
        question: "What procedures are typically included in a Mummy Makeover?", 
        answer: "A Mummy Makeover is fully customized, but commonly includes a Tummy Tuck to tighten the abdomen, a Breast Lift or Augmentation to restore breast volume and shape, and Liposuction to remove stubborn fat." 
      },
      { 
        question: "How long after childbirth should I wait?", 
        answer: "It is generally recommended to wait at least 6-12 months after giving birth. You should be at a stable weight you can maintain and have finished breastfeeding before considering the surgery." 
      },
      { 
        question: "Can I have more children after a Mummy Makeover?", 
        answer: "While it is physically possible, it is highly recommended to wait until you are finished having children. A future pregnancy will re-stretch the skin and muscles, which can significantly compromise the results of your surgery." 
      }
    ],
    photoRequirements: [
      "Front view of neck, shoulders, breasts and navel",
      "Front view of both arms raised above your head",
      "Left side view (both arms down the side)",
      "Right side view (both arms down the side)",
      "Back on profile from knees upward"
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'alcohol_status',
      'blood_clot_calf',
      'blood_clot_lungs',
      'drug_allergies',
    ],
  },
  {
    slug: "facelift",
    hero: {
      title: "Facelift (Rhytidectomy)",
      subtitle: "A comprehensive surgical procedure to reverse the visible signs of aging in the face and neck.",
      backgroundImageUrl: "/images/facelift-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/facelift-overview.jpg",
      facts: [
        { label: 'Procedure Time', value: '3-5 Hours', icon: 'Clock' },
        { label: 'Anesthesia', value: 'General Anesthesia', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Reduce Sagging & Wrinkles', icon: 'Award' },
        { label: 'Social Recovery', value: '2-3 Weeks', icon: 'Users' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Reduces Sagging Skin", description: "Tightens and removes loose skin to eliminate jowls and restore a more defined jawline." },
      { icon: "Smile", title: "Smooths Deep Wrinkles", description: "Softens deep creases around the nose and mouth (nasolabial folds) and tightens the neck." },
      { icon: "Eye", title: "Long-Lasting Youthful Contour", description: "Restores a more youthful and rested appearance with results that can last for a decade or more." },
    ],
    risks: [
      "Adverse reaction to anesthesia",
      "Infection, bleeding, or hematoma (a collection of blood under the skin)",
      "Unfavorable scarring, particularly around the ears",
      "Temporary or permanent facial nerve injury, leading to muscle weakness or asymmetry",
      "Hair loss at the incision sites",
      "Changes in skin sensation or numbness",
      "Skin irregularities and discoloration",
      "Possibility of an unsatisfactory result requiring revision surgery",
    ],
    details: {
      tabs: {
        "What is it?": "facelift-what",
        "The Procedure": "facelift-procedure",
        "Candidates": "facelift-candidates",
        "Recovery": "facelift-recovery",
        "Risks & Safety": "facelift-risks",
      },
    },
    faq: [
      { 
        question: "What is the best age to get a facelift?", 
        answer: "There is no 'best' age. The procedure is most effective when a person shows clear signs of facial aging, such as significant sagging in the mid-face and jowls. This typically occurs for people in their late 40s to 60s." 
      },
      { 
        question: "Will I look 'unnatural' or 'pulled'?", 
        answer: "Modern facelift techniques focus on repositioning the underlying muscle (SMAS layer), not just pulling the skin tight. This approach, performed by our expert surgeons, creates a natural, refreshed, and youthful result, not an 'operated-on' look." 
      },
      { 
        question: "How long do the results of a facelift last?", 
        answer: "While a facelift turns back the clock, it does not stop the aging process. The results are very long-lasting, often making a person appear 10-15 years younger for many years. A healthy lifestyle can help prolong the results." 
      }
    ],
    photoRequirements: [
      "1 left and 1 right facial profile",
      "1 front on of face",
      "1 head tilted back with shot taken from the side",
      "1 head tilted down with shot taken from the side"
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'alcohol_status',
      'blood_clot_calf',
      'herpes',
      'drug_allergies',
    ],
  },
  {
    slug: "gynecomastia",
    hero: {
      title: "Gynecomastia (Male Breast Reduction)",
      subtitle: "A surgical solution to create a flatter, firmer, and more masculine chest contour.",
      backgroundImageUrl: "/images/gynecomastia-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/gynecomastia-overview.jpg",
      facts: [
        { label: 'Procedure', value: 'Male Breast Reduction', icon: 'User' },
        { label: 'Anesthesia', value: 'General Anesthesia', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Masculine Chest Contour', icon: 'Award' },
        { label: 'Recovery', value: '1-2 Weeks', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Flatter, Masculine Chest", description: "Removes excess glandular tissue and fat to create a more traditionally masculine chest appearance." },
      { icon: "Eye", title: "Improved Body Proportions", description: "Enhances the overall contour of the upper body, allowing clothes to fit better." },
      { icon: "Smile", title: "Increased Self-Confidence", description: "Alleviates the self-consciousness and emotional discomfort often associated with gynecomastia." },
    ],
    risks: [
      "Adverse reaction to anesthesia",
      "Infection, bleeding, or hematoma",
      "Asymmetry in the chest or nipples",
      "Changes in nipple or breast sensation",
      "Unfavorable scarring",
      "Contour irregularities or depressions",
      "Persistent swelling (seroma)",
      "Possibility of revision surgery",
    ],
    details: {
      tabs: {
        "What is it?": "gynecomastia-what",
        "The Procedure": "gynecomastia-procedure",
        "Candidates": "gynecomastia-candidates",
        "Recovery": "gynecomastia-recovery",
        "Risks & Safety": "gynecomastia-risks",
      },
    },
    faq: [
      { 
        question: "What causes gynecomastia?", 
        answer: "Gynecomastia is caused by an imbalance of the hormones estrogen and testosterone. It can be a result of natural hormonal changes, certain medications, or other underlying health conditions. A proper medical evaluation is necessary." 
      },
      { 
        question: "Will the results be permanent?", 
        answer: "Yes, the results are permanent as the glandular tissue is removed. However, significant weight gain or the use of certain substances (like anabolic steroids) can cause a recurrence of fatty tissue in the chest." 
      },
      { 
        question: "What is recovery like?", 
        answer: "You will need to wear a compression vest for several weeks to minimize swelling and support the new chest contour. Most patients can return to work within a week, but strenuous exercise and heavy lifting should be avoided for at least a month." 
      }
    ],
    photoRequirements: [
      "Front view of chest (arms down)",
      "Left side profile of chest (arms down)",
      "Right side profile of chest (arms down)",
      "Front view of chest (arms raised)"
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'alcohol_status',
      'recreational_drugs',
      'drug_allergies',
    ],
  },
  {
    slug: "otoplasty",
    hero: {
      title: "Otoplasty (Ear Surgery)",
      subtitle: "A procedure to improve the shape, position, or proportion of the ear.",
      backgroundImageUrl: "/images/otoplasty-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/otoplasty-overview.jpg",
      facts: [
        { label: 'Procedure', value: 'Ear Pinning / Reshaping', icon: 'Ear' },
        { label: 'Anesthesia', value: 'General or Local with Sedation', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Correct Protruding Ears', icon: 'Award' },
        { label: 'Recovery', value: 'Approx. 1 Week', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Corrects Protruding Ears", description: "Brings prominent ears closer to the head for a more balanced and conventional appearance." },
      { icon: "Eye", title: "Improves Facial Symmetry", description: "Enhances the overall balance of facial features by correcting ear shape and position." },
      { icon: "Smile", title: "Boosts Self-Confidence", description: "Alleviates self-consciousness, particularly for children and teenagers who may be teased about their ears." },
    ],
    details: {
      tabs: {
        "What is it?": "otoplasty-what",
        "The Procedure": "otoplasty-procedure",
        "Candidates": "otoplasty-candidates",
        "Recovery": "otoplasty-recovery",
      },
    },
    risks: [
      "Adverse reaction to anesthesia",
      "Infection of the cartilage (chondritis)",
      "Bleeding or hematoma",
      "Asymmetry in ear placement",
      "Unsatisfactory aesthetic result or 'overcorrection'",
      "Unfavorable scarring",
      "Changes in skin sensation",
      "Possibility of revision surgery",
    ],
    faq: [
      { 
        question: "Will Otoplasty affect my hearing?", 
        answer: "No. The procedure is performed on the outer ear and does not affect the inner ear structures that are responsible for hearing." 
      },
      { 
        question: "Will the scars be visible?", 
        answer: "Our surgeons are experts at placing incisions in the natural, hidden crease behind the ear. Once healed, the scars are typically very difficult to see." 
      },
      { 
        question: "Is the procedure painful?", 
        answer: "The surgery is performed under anesthesia, so you will not feel anything. Post-operative pain is usually mild and can be easily managed with prescribed pain medication for a few days." 
      }
    ],
    photoRequirements: [
      "Left and right full facial profile",
      "Front on of face",
      "View of back of head showing both ears",
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'drug_allergies',
    ],
  },
  {
    slug: "arm-lift",
    hero: {
      title: "Arm Lift (Brachioplasty)",
      subtitle: "Reshape and tone your upper arms by removing loose, sagging skin.",
      backgroundImageUrl: "/images/arm-lift-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/arm-lift-overview.jpg",
      facts: [
        { label: 'Procedure', value: 'Upper Arm Skin Removal', icon: 'Scissors' },
        { label: 'Anesthesia', value: 'General Anesthesia', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Address "Bat Wings"', icon: 'Award' },
        { label: 'Recovery', value: '1-2 Weeks', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Toned Arm Contour", description: "Removes sagging skin and fat to create a smoother, firmer, and more youthful arm appearance." },
      { icon: "Eye", title: "Improved Clothing Fit", description: "Feel more comfortable and confident wearing sleeveless or short-sleeved tops." },
      { icon: "Smile", title: "Increased Self-Confidence", description: "Alleviates the self-consciousness associated with loose skin on the arms." },
    ],
    details: {
      tabs: {
        "What is it?": "arm-lift-what",
        "The Procedure": "arm-lift-procedure",
        "Candidates": "arm-lift-candidates",
        "Recovery": "arm-lift-recovery",
      },
    },
    risks: [
      "Adverse reaction to anesthesia",
      "Infection, bleeding, or hematoma",
      "Poor or conspicuous scarring (keloid scars)",
      "Numbness or changes in skin sensation in the arms",
      "Asymmetry in the shape or contour of the arms",
      "Damage to underlying structures such as nerves or muscles",
      "Persistent swelling (lymphedema)",
      "Possibility of revision surgery",
    ],
    faq: [
      { 
        question: "Will I have a long scar?", 
        answer: "Yes, an arm lift requires a significant incision, resulting in a permanent scar on the inside or back of your upper arm. Our surgeons are meticulous about incision placement to make it as inconspicuous as possible, and it will fade over time." 
      },
      { 
        question: "Can liposuction alone fix my arms?", 
        answer: "Liposuction is effective for removing fat but cannot correct loose, sagging skin. An arm lift is necessary to remove the excess skin. The two procedures are often combined for the best result." 
      },
      { 
        question: "How long until I can lift my arms or exercise?", 
        answer: "You will need to limit arm movement and avoid heavy lifting for at least 4-6 weeks to ensure the incisions heal properly and to minimize swelling and scarring." 
      }
    ],
    photoRequirements: [
      "Front view of both arms held out to the sides",
      "Back view of both arms held out to the sides",
      "Left and right side views of the arms and torso",
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'blood_clot_calf',
      'drug_allergies',
    ],
  },
  {
    slug: "thigh-lift",
    hero: {
      title: "Thigh Lift",
      subtitle: "Reshape and tighten your thighs for a smoother, more toned appearance.",
      backgroundImageUrl: "/images/thigh-lift-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/thigh-lift-overview.jpg",
      facts: [
        { label: 'Procedure', value: 'Thigh Skin & Fat Removal', icon: 'Scissors' },
        { label: 'Anesthesia', value: 'General Anesthesia', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Smoother, Tighter Thighs', icon: 'Award' },
        { label: 'Recovery', value: '2-3 Weeks', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Removes Sagging Skin", description: "Effectively eliminates the loose, excess skin that diet and exercise cannot address." },
      { icon: "Eye", title: "Improved Body Contour", description: "Creates a firmer, more youthful, and proportionate appearance for the lower body." },
      { icon: "Smile", title: "Increased Comfort", description: "Reduces chafing and irritation caused by excess skin, making physical activity more comfortable." },
    ],
    details: {
      tabs: {
        "What is it?": "thigh-lift-what",
        "The Procedure": "thigh-lift-procedure",
        "Candidates": "thigh-lift-candidates",
        "Recovery": "thigh-lift-recovery",
      },
    },
    risks: [
      "Adverse reaction to anesthesia",
      "Infection, bleeding, or seroma (fluid accumulation)",
      "Poor or conspicuous scarring in the groin and thigh area",
      "Asymmetry in the appearance of the legs",
      "Changes in skin sensation or numbness",
      "Blood clots (Deep Vein Thrombosis)",
      "Persistent swelling (lymphedema)",
      "Possibility of revision surgery",
    ],
    faq: [
      { question: "Where will the scars be located?", answer: "For an inner thigh lift, the scar is typically placed in the groin crease, where it can be hidden by underwear or a swimsuit. In cases with more significant skin excess, the scar may extend down the inner thigh." },
      { question: "Is a thigh lift a weight loss procedure?", answer: "No. A thigh lift is a body contouring procedure designed to address loose skin. It is recommended for patients who are at or near their ideal, stable weight." },
      { question: "Can a thigh lift get rid of cellulite?", answer: "While the skin tightening effect may slightly improve the appearance of cellulite in the treated area, a thigh lift is not a procedure specifically designed to treat cellulite." }
    ],
    photoRequirements: [
      "Left body profile",
      "Right body profile",
      "Front on profile from knees upward",
      "Back on profile from knees upward"
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'blood_clot_calf',
      'blood_clot_lungs',
      'drug_allergies',
    ],
  },
  {
    slug: "genital-rejuvenation",
    hero: {
      title: "Genital Rejuvenation",
      subtitle: "Procedures designed to enhance aesthetic appearance and personal comfort.",
      backgroundImageUrl: "/images/genital-rejuvenation-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/genital-rejuvenation-overview.jpg",
      facts: [
        { label: 'Procedure', value: 'Aesthetic Genital Surgery', icon: 'Scissors' },
        { label: 'Anesthesia', value: 'Local or General', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Improve Appearance & Comfort', icon: 'Award' },
        { label: 'Recovery', value: '4-6 Weeks', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Improved Aesthetic Appearance", description: "Creates a more symmetrical and aesthetically pleasing appearance, tailored to your preference." },
      { icon: "Smile", title: "Increased Comfort", description: "Alleviates physical discomfort or chafing experienced during exercise, intercourse, or while wearing certain clothing." },
      { icon: "Users", title: "Enhanced Self-Confidence", description: "Boosts body confidence and reduces self-consciousness." },
    ],
    details: {
      tabs: {
        "What is it?": "genital-rejuvenation-what",
        "The Procedure": "genital-rejuvenation-procedure",
        "Candidates": "genital-rejuvenation-candidates",
        "Recovery": "genital-rejuvenation-recovery",
      },
    },
    risks: [
      "Adverse reaction to anesthesia",
      "Infection, bleeding, or hematoma",
      "Unsatisfactory aesthetic result, such as under- or over-resection",
      "Changes in or loss of sensation",
      "Painful intercourse (dyspareunia)",
      "Noticeable scarring",
      "Possibility of revision surgery",
    ],
    faq: [
      { question: "Is labiaplasty purely cosmetic?", answer: "While often performed for aesthetic reasons, it can also have functional benefits, such as reducing twisting, pulling, or discomfort that some women experience with enlarged labia during physical activities." },
      { question: "Will the procedure affect sensation?", answer: "When performed by a skilled surgeon, the risk of significant or permanent loss of sensation is very low. Temporary changes in sensation are a normal part of the healing process." },
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'drug_allergies',
    ],
  },
  {
    slug: "scar-removal",
    hero: {
      title: "Scar Removal",
      subtitle: "Advanced treatments to minimize the appearance of scars and improve skin texture.",
      backgroundImageUrl: "/images/scar-removal-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/scar-removal-overview.jpg",
      facts: [
        { label: 'Treatments', value: 'Laser, Surgical, Microneedling', icon: 'Layers' },
        { label: 'Anesthesia', value: 'Varies (Topical to Local)', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Improve Scar Appearance', icon: 'Award' },
        { label: 'Sessions', value: '1 to Multiple', icon: 'Repeat' },
      ],
    },
    benefits: [
      { icon: "Eye", title: "Reduced Scar Visibility", description: "Significantly fades the color and flattens the texture of scars, making them less noticeable." },
      { icon: "CheckCircle2", title: "Improved Skin Texture", description: "Promotes new collagen growth, resulting in smoother and more even-toned skin in the treated area." },
      { icon: "Smile", title: "Increased Self-Confidence", description: "Helps you feel more comfortable and confident in your skin by reducing the appearance of unwanted scars." },
    ],
    details: {
      tabs: {
        "What is it?": "scar-removal-what",
        "Treatment Options": "scar-removal-procedure",
        "Candidates": "scar-removal-candidates",
        "Recovery": "scar-removal-recovery",
      },
    },
    risks: [
      "Hyperpigmentation (darkening of the skin) or Hypopigmentation (lightening of the skin)",
      "Redness, swelling, and discomfort post-treatment",
      "Infection",
      "For lasers: burns, blistering, or changes in skin texture",
      "For surgical revision: risks of anesthesia, bleeding, and keloid (overgrown) scarring",
      "Unsatisfactory results or the need for multiple treatments",
    ],
    faq: [
      { question: "Can a scar be removed completely?", answer: "No scar can be completely erased, but its appearance can be dramatically improved. The goal of treatment is to make the scar as unnoticeable as possible." },
      { question: "What is the best treatment for my type of scar?", answer: "The best treatment depends on your scar's type, age, and location. For example, laser resurfacing is great for acne scars, while surgical revision may be needed for a wide surgical scar. A consultation with our specialist is required." },
      { question: "How many sessions will I need?", answer: "Surgical revision is a single procedure. Non-surgical treatments like laser or microneedling typically require a series of sessions (usually 3-6) spaced several weeks apart to achieve the best results." }
    ],
    photoRequirements: [
      "A clear, well-lit photo of the scar(s) you wish to have treated.",
      "A photo from a distance to show the location of the scar on the body."
    ],
    requiredMedicalQuestions: [
      'herpes',
      'smoking_status',
      'drug_allergies',
    ],
  },
  {
    slug: "mole-removal",
    hero: {
      title: "Mole Removal",
      subtitle: "Safe and effective removal of unwanted moles for cosmetic and medical peace of mind.",
      backgroundImageUrl: "/images/mole-removal-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/mole-removal-overview.jpg",
      facts: [
        { label: 'Treatments', value: 'Excision, Shave, Laser', icon: 'Scissors' },
        { label: 'Anesthesia', value: 'Local Anesthesia', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Clearer Skin, Biopsy', icon: 'Award' },
        { label: 'Downtime', value: 'Minimal (1-2 weeks)', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Removes Unwanted Moles", description: "Effectively removes moles that you find cosmetically unappealing." },
      { icon: "Eye", title: "Improved Appearance", description: "Creates smoother, clearer skin in the treated area." },
      { icon: "ShieldCheck", title: "Medical Peace of Mind", description: "Surgically excised moles can be sent for a biopsy to rule out skin cancer, providing crucial health information." },
    ],
    details: {
      tabs: {
        "What is it?": "mole-removal-what",
        "Removal Methods": "mole-removal-procedure",
        "Candidates": "mole-removal-candidates",
        "Recovery": "mole-removal-recovery",
      },
    },
    risks: [
      "Infection at the removal site",
      "Scarring (though typically minimal, some scarring is inevitable with excisions)",
      "Changes in skin color (hyperpigmentation or hypopigmentation)",
      "Incomplete removal, which can lead to the mole recurring",
      "Nerve damage (rare)",
    ],
    faq: [
      { question: "Will mole removal leave a scar?", answer: "All methods that cut the skin will leave a small scar, though our specialists are experts at minimizing their appearance. Laser removal typically has the least risk of scarring. The final appearance depends on the size of the mole and your skin's healing properties." },
      { question: "Is the procedure painful?", answer: "No. The area is completely numbed with a local anesthetic before the procedure begins, so you will not feel any pain during the removal." },
      { question: "Can the mole grow back?", answer: "If any mole cells are left behind, there is a small chance the mole can recur. Surgical excision has the lowest rate of recurrence because the entire mole is removed." }
    ],
    photoRequirements: [
      "A clear, close-up, well-lit photo of the mole you wish to have removed.",
      "A photo from a slight distance to show the location of the mole on the body."
    ],
    requiredMedicalQuestions: [
      'herpes',
      'smoking_status',
      'drug_allergies',
    ],
  },
  {
    slug: "penis-enlargement",
    hero: {
      title: "Penis Enlargement",
      subtitle: "Surgical options for enhancing penile length and girth.",
      backgroundImageUrl: "/images/penis-enlargement-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/penis-enlargement-overview.jpg",
      facts: [
        { label: 'Procedures', value: 'Ligamentolysis, Fat Transfer', icon: 'Scissors' },
        { label: 'Anesthesia', value: 'General or Local with Sedation', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Increase Flaccid Length & Girth', icon: 'Award' },
        { label: 'Abstinence Period', value: '4-6 Weeks', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Increased Flaccid Length", description: "Surgical release of the suspensory ligament can increase the visible length of the flaccid penis." },
      { icon: "Eye", title: "Enhanced Girth", description: "Fat transfer can significantly increase the circumference of the penile shaft, both when flaccid and erect." },
      { icon: "Smile", title: "Improved Self-Confidence", description: "For many men, achieving a desired aesthetic can lead to a significant boost in body image and self-esteem." },
    ],
    details: {
      tabs: {
        "What is it?": "penis-enlargement-what",
        "The Procedures": "penis-enlargement-procedure",
        "Candidates": "penis-enlargement-candidates",
        "Recovery": "penis-enlargement-recovery",
      },
    },
    risks: [
      "Adverse reaction to anesthesia",
      "Infection, bleeding, or hematoma",
      "Unsatisfactory aesthetic results, such as lumpiness, asymmetry, or irregularities from fat transfer",
      "A portion of the transferred fat being reabsorbed by the body, potentially requiring touch-up procedures",
      "Changes in the angle of erection after ligament release surgery",
      "Reduced penile sensation",
      "Noticeable scarring",
      "Possibility of revision surgery",
    ],
    faq: [
      { question: "Does this surgery increase erect length?", answer: "No. The most common procedure for length (suspensory ligament release) only increases the visible length of the flaccid penis. It does not change the actual size of the erectile tissue." },
      { question: "Are the results from fat transfer permanent?", answer: "A certain percentage of the transferred fat (typically 20-40%) will be naturally absorbed by the body. The fat cells that survive after the initial months are considered permanent. However, significant weight changes can affect the result." },
      { question: "Is the procedure safe?", answer: "When performed by a qualified and experienced urologist or plastic surgeon, the procedures are generally safe. However, like any surgery, they carry risks which must be thoroughly discussed during your consultation." }
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'drug_allergies',
    ],
  },
  {
    slug: "cosmetic-dentistry",
    hero: {
      title: "Cosmetic Dentistry",
      subtitle: "Transform your smile with world-class dental aesthetics.",
      backgroundImageUrl: "/images/cosmetic-dentistry.jpg",
    },
    overview: {
      overviewImageUrl: "/images/dentistry-overview.jpg",
      facts: [
        { label: 'Materials', value: 'E.max® & Zirconium', icon: 'Award' },
        { label: 'Treatment Time', value: '5-7 Days', icon: 'Clock' },
        { label: 'Procedures', value: 'Veneers, Crowns, Implants, Whitening', icon: 'Scissors' },
        { label: 'Warranty', value: 'Lifetime Guarantee on Implants', icon: 'Shield' },
      ],
    },
    benefits: [
      { icon: "Smile", title: "Hollywood Smile Transformation", description: "Achieve a stunning, natural-looking smile with custom-designed veneers and crowns that perfectly complement your facial features." },
      { icon: "ShieldCheck", title: "Premium Materials", description: "We use only the highest quality materials including E.max porcelain veneers and monolithic zirconia crowns for superior durability and aesthetics." },
      { icon: "Clock", title: "Fast Treatment Times", description: "Get your dream smile in just 5-7 days with our efficient treatment protocols and state-of-the-art in-house dental laboratory." },
      { icon: "Award", title: "Lifetime Implant Warranty", description: "We stand behind our work with a lifetime guarantee on dental implants, giving you peace of mind for years to come." },
    ],
    details: {
      tabs: {
        "Dental Veneers": "dentistry-veneers",
        "Dental Crowns": "dentistry-crowns",
        "Dental Implants": "dentistry-implants",
        "Teeth Whitening": "dentistry-whitening",
      },
    },
    risks: [
      "Tooth sensitivity to hot and cold temperatures (usually temporary)",
      "Potential need for root canal treatment if decay is extensive",
      "Risk of veneer or crown damage from excessive force (grinding, biting hard objects)",
      "Possible allergic reaction to dental materials (rare)",
      "Implant failure or rejection (occurs in less than 5% of cases)",
      "Infection at the surgical site (for implants)",
      "Gum irritation or recession around restorations",
      "Color mismatch if teeth are not whitened before veneer/crown placement",
    ],
    faq: [
      { question: "How long do veneers last?", answer: "With proper care and maintenance, high-quality E.max porcelain veneers can last 10-15 years or even longer. Factors that affect longevity include oral hygiene habits, diet, teeth grinding, and avoiding trauma to the teeth." },
      { question: "Are dental implants painful?", answer: "The implant placement procedure is performed under local anesthesia, so you will not feel pain during the surgery. Post-operative discomfort is typically mild and can be managed with over-the-counter pain medication. Most patients report that the procedure is much easier than they anticipated." },
      { question: "Can I get veneers if I have cavities?", answer: "Any existing cavities or dental decay must be treated before veneers can be placed. During your initial consultation, we will perform a comprehensive examination and address any underlying dental health issues first to ensure the best foundation for your cosmetic treatment." },
      { question: "Will teeth whitening damage my enamel?", answer: "When performed by a qualified dentist using professional-grade products, teeth whitening is safe and does not damage tooth enamel. You may experience temporary sensitivity, but this typically resolves within a few days after treatment." },
      { question: "How much do cosmetic dentistry procedures cost?", answer: "Costs vary depending on the specific procedures you need and the complexity of your case. We offer competitive pricing that is significantly lower than in the US or Europe, without compromising on quality. A detailed quote will be provided after your initial consultation and examination." },
    ],
    photoRequirements: [
      "A close-up photo of your smile showing your teeth (front view with lips retracted if possible).",
      "A photo of your smile from a slight angle (side view).",
      "A photo showing your teeth from the side (to assess bite alignment).",
      "Any X-rays or dental records you may have from previous treatments.",
    ],
    requiredMedicalQuestions: [
      'drug_allergies',
      'smoking_status',
      'chronic_diseases',
    ],
    ctaImageUrl: "/images/dentistry-cta.jpg",
  },
  {
    slug: "eye-surgery",
    hero: {
      title: "Eye Surgery",
      subtitle: "Achieve crystal-clear vision and a refreshed, youthful appearance.",
      backgroundImageUrl: "/images/eye-surgery-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/eye-surgery-overview.jpg",
      facts: [
        { label: 'Procedures', value: 'LASIK, Blepharoplasty, Cataract, & More', icon: 'Eye' },
        { label: 'Anesthesia', value: 'Local or General', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Restore Vision & Appearance', icon: 'Award' },
        { label: 'Recovery', value: 'Varies by Procedure', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Freedom from Glasses & Contacts", description: "Enjoy clear, natural vision for activities like swimming and sports without the hassle of corrective lenses." },
      { icon: "Eye", title: "Rejuvenated, Youthful Appearance", description: "Eyelid surgery removes drooping skin and under-eye bags, making you look more rested and alert." },
      { icon: "Smile", title: "Quick & Effective Procedures", description: "Most eye surgeries are fast, minimally invasive outpatient procedures with a rapid recovery time." },
    ],
    ctaImage: "/images/eye-surgery-hero.jpg",
    details: {
      tabs: {
        "Vision Correction (LASIK)": "eye-surgery-refractive",
        "Eyelid Surgery (Blepharoplasty)": "eye-surgery-blepharoplasty",
        "Cataract Surgery": "eye-surgery-cataract",
        "Corneal Transplant": "eye-surgery-corneal",
        "Glaucoma Surgeries": "eye-surgery-glaucoma",
      },
    },
    risks: [
      "Infection, bleeding, or adverse reaction to anesthesia",
      "Dry eyes, glare, or halos (especially post-LASIK)",
      "Under-correction or over-correction of vision",
      "Asymmetry or unsatisfactory cosmetic result (Blepharoplasty)",
      "Increased intraocular pressure",
      "Graft rejection (for Corneal Transplant)",
      "Damage to other eye structures",
      "Vision loss (rare)",
    ],
    faq: [
      { question: "Am I a good candidate for LASIK?", answer: "Ideal candidates are over 18 with a stable glasses/contact lens prescription for at least one year. You must have healthy eyes and sufficient corneal thickness. A comprehensive eye exam is required to determine your candidacy." },
      { question: "Is LASIK painful?", answer: "The procedure itself is painless. Your eyes are numbed with anesthetic drops. You may feel some pressure, but no pain. Some mild discomfort or irritation is common for a few hours after the procedure." },
      { question: "How long is recovery for eyelid surgery?", answer: "Initial healing involves swelling and bruising, which can last for 1-2 weeks. You can typically return to work within a week, but should avoid strenuous activity for at least two weeks. Final results are visible after a few months." }
    ],
    photoRequirements: [
      "For Eyelid Surgery: A clear, well-lit photo of your full face, looking straight ahead.",
      "For Eyelid Surgery: Left and right profile views of your face.",
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'drug_allergies',
      'dry_eyes',
      'lens_implants',
    ],
  },
  {
    slug: "transplantation",
    hero: {
      title: "Transplantation Procedures",
      subtitle: "Life-saving organ and tissue transplantation from world-class surgical teams.",
      backgroundImageUrl: "/images/transplant-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/transplant-overview.jpg",
      facts: [
        { label: 'Procedures', value: 'Kidney, Liver, Bone Marrow', icon: 'HeartPulse' },
        { label: 'Anesthesia', value: 'General Anesthesia', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Life-Saving Treatment', icon: 'Award' },
        { label: 'Care', value: 'Comprehensive & Lifelong', icon: 'Users' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Life-Saving & Life-Extending", description: "Organ transplantation is a definitive treatment for end-stage organ failure, offering a chance at a longer, healthier life." },
      { icon: "Smile", title: "Dramatically Improved Quality of Life", description: "Frees patients from the limitations of conditions like dialysis and allows a return to normal daily activities." },
      { icon: "ShieldCheck", title: "Expert Multidisciplinary Teams", description: "Our transplant programs are run by highly experienced surgeons, physicians, and coordinators dedicated to patient care." },
    ],
    ctaImage: "/images/transplant-hero.jpg",
    details: {
      tabs: {
        "Kidney Transplant": "transplant-kidney",
        "Liver Transplant": "transplant-liver",
        "Bone Marrow Transplant": "transplant-bone-marrow",
      },
    },
    risks: [
      "Surgical complications such as bleeding, infection, and blood clots",
      "Adverse reaction to anesthesia",
      "Organ rejection (acute or chronic), where the body's immune system attacks the new organ",
      "Side effects of long-term immunosuppressant (anti-rejection) medications, such as increased risk of infection and kidney problems",
      "Failure of the transplanted organ or graft",
      "Post-transplant lymphoproliferative disorder (a type of cancer)",
    ],
    faq: [
      { question: "What is organ rejection?", answer: "Rejection is the body's natural immune response to a foreign object. To prevent this, transplant patients must take lifelong immunosuppressant medications that weaken the immune system so it does not attack the new organ." },
      { question: "What is recovery like?", answer: "Recovery is a long and intensive process. It involves an initial hospital stay of several weeks for close monitoring, followed by months of regular check-ups. A full return to normal life can take six months to a year." }
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'alcohol_status',
      'blood_clot_calf',
      'drug_allergies',
      'hiv',
      'hepatitis_b',
      'hepatitis_c',
    ],
  },
  {
    slug: "eyebrow-transplantation",
    hero: {
      title: "Eyebrow Transplantation",
      subtitle: "Create perfectly shaped, natural-looking eyebrows with precision FUE & DHI techniques.",
      backgroundImageUrl: "/images/eyebrow-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/eyebrow-overview.jpg",
      facts: [
        { label: 'Technique', value: 'FUE / DHI', icon: 'Scissors' },
        { label: 'Anesthesia', value: 'Local Anesthesia', icon: 'UserCheck' },
        { label: 'Procedure Time', value: '3-4 Hours', icon: 'Clock' },
        { label: 'Results', value: 'Permanent', icon: 'Smile' },
      ],
    },
    benefits: [
      { icon: "Eye", title: "Natural Shape & Fullness", description: "Achieve the eyebrow density and shape you desire with results that look completely natural." },
      { icon: "CheckCircle2", title: "Permanent Solution", description: "Unlike microblading or makeup, transplanted eyebrow hair is a permanent solution that grows naturally." },
      { icon: "Smile", title: "Boosted Confidence", description: "Frame your face beautifully and enhance your features, boosting your self-esteem." },
    ],
    ctaImage: "/images/eyebrow-hero.jpg",
    details: {
      tabs: {
        "What is it?": "eyebrow-transplant-what",
        "The Procedure": "eyebrow-transplant-procedure",
      },
    },
    risks: [
      "Infection or swelling",
      "Unnatural appearance if hairs are implanted at the wrong angle",
      "Noticeable scarring in the donor area",
      "Asymmetry between eyebrows",
      "Ingrown hairs (folliculitis)",
    ],
    faq: [
      { question: "Will the transplanted eyebrow hair need to be trimmed?", answer: "Yes. Because the hair is taken from your scalp, it will continue to grow as scalp hair does. You will need to trim your new eyebrow hairs regularly to maintain the desired length." },
      { question: "How long is the recovery?", answer: "Recovery is quick. You will experience some small scabs and redness for about 5-7 days. Most patients can return to normal activities within a day or two, avoiding strenuous exercise for a week." },
    ],
    photoRequirements: [
      "Clear, well-lit photos of your full face and close-ups of your eyebrow area.",
    ],
    requiredMedicalQuestions: [
      'smoking_status',
      'drug_allergies',
    ],
  },
  {
    slug: "beard-transplantation",
    hero: {
      title: "Beard Transplantation",
      subtitle: "Achieve a full, dense, and natural-looking beard with advanced hair restoration.",
      backgroundImageUrl: "/images/beard-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/beard-overview.jpg",
      facts: [
        { label: 'Technique', value: 'FUE / DHI', icon: 'Scissors' },
        { label: 'Anesthesia', value: 'Local Anesthesia', icon: 'UserCheck' },
        { label: 'Procedure Time', value: '4-8 Hours', icon: 'Clock' },
        { label: 'Results', value: 'Permanent & Natural', icon: 'Smile' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Full, Dense Beard", description: "Permanently fill in patchy spots or create the full beard you've always wanted." },
      { icon: "Eye", title: "Masculine Contouring", description: "A well-defined beard can enhance your jawline and provide a more masculine facial structure." },
      { icon: "Smile", title: "Natural & Permanent", description: "The transplanted hair is your own, and it grows, shaves, and behaves just like a natural beard." },
    ],
    ctaImage: "/images/beard-hero.jpg",
    details: {
      tabs: {
        "What is it?": "beard-transplant-what",
        "The Procedure": "beard-transplant-procedure",
      },
    },
    risks: [
      "Infection or swelling",
      "Noticeable scarring in the donor area (minimal with FUE)",
      "Asymmetry or uneven density",
      "Ingrown hairs (folliculitis)",
      "The need for a second session to achieve higher density",
    ],
    faq: [
      { question: "How many grafts will I need for a full beard?", answer: "A full beard can require anywhere from 2,000 to 5,000 grafts, depending on the desired density and the size of the area. Filling in smaller patches requires significantly fewer." },
      { question: "When will I see the final results?", answer: "You will see the initial shape immediately after. The transplanted hairs will shed after 2-3 weeks, and then permanent growth will start in 3-4 months. Full, dense results are typically seen after about one year." },
    ],
    photoRequirements: [
      "Clear, well-lit photos of your full face and close-ups of your beard and mustache area from the front and sides.",
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'drug_allergies',
    ],
  },
  {
    slug: "mesotherapy",
    hero: {
      title: "Mesotherapy",
      subtitle: "A minimally invasive treatment for fat reduction, cellulite, and skin rejuvenation.",
      backgroundImageUrl: "/images/mesotherapy-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/mesotherapy-overview.jpg",
      facts: [
        { label: 'Treatment', value: 'Micro-injections', icon: 'Syringe' },
        { label: 'Primary Goal', value: 'Fat Reduction & Rejuvenation', icon: 'Award' },
        { label: 'Sessions', value: 'Multiple (Course of 6-10)', icon: 'Repeat' },
        { label: 'Downtime', value: 'Minimal', icon: 'Smile' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Targets Localized Fat", description: "Effectively reduces stubborn pockets of fat that are resistant to diet and exercise." },
      { icon: "Eye", title: "Improves Skin Appearance", description: "Reduces the appearance of cellulite and rejuvenates the skin by stimulating collagen for a firmer, more youthful look." },
      { icon: "ShieldCheck", title: "Non-Surgical Solution", description: "A minimally invasive alternative to procedures like liposuction, with no general anesthesia and minimal downtime." },
    ],
    ctaImage: "/images/mesotherapy-hero.jpg",
    details: {
      tabs: {
        "What is it?": "mesotherapy-what",
        "Applications": "mesotherapy-applications",
        "The Procedure": "mesotherapy-procedure",
        "Sessions & Recovery": "mesotherapy-recovery",
      },
    },
    risks: [
      "Bruising, swelling, or soreness at the injection sites",
      "Redness or a burning sensation",
      "Infection (rare)",
      "Changes in skin pigmentation",
      "Allergic reaction to the injected solution",
      "Nausea",
    ],
    faq: [
      { question: "Is mesotherapy painful?", answer: "Patients typically experience minimal discomfort. A topical numbing cream is often applied before the procedure to make the micro-injections more comfortable." },
      { question: "How many sessions will I need?", answer: "The number of sessions varies depending on the condition being treated. For fat and cellulite reduction, a course of 6 to 10 treatments is common, spaced 1-2 weeks apart. Your specialist will create a personalized treatment plan for you." },
      { question: "Are the results of mesotherapy permanent?", answer: "The results can be long-lasting, especially when combined with a healthy diet and exercise. For fat reduction, the results are permanent as long as you maintain a stable weight. For skin rejuvenation, maintenance sessions are typically recommended." }
    ],
    photoRequirements: [
      "A clear, well-lit photo of the area you wish to have treated (e.g., abdomen, thighs, face).",
    ],
    requiredMedicalQuestions: [
      'smoking_status',
      'alcohol_status',
      'blood_clot_calf',
      'drug_allergies',
    ],
  },
  {
    slug: "micro-scalp-pigmentation",
    hero: {
      title: "Micro Scalp Pigmentation",
      subtitle: "A non-surgical solution to create the appearance of fuller, denser hair.",
      backgroundImageUrl: "/images/smp-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/smp-overview.jpg",
      facts: [
        { label: 'Treatment', value: 'Cosmetic Scalp Tattoo', icon: 'Brush' },
        { label: 'Primary Goal', value: 'Create Illusion of Hair Density', icon: 'Award' },
        { label: 'Sessions', value: '2-4 Sessions Required', icon: 'Repeat' },
        { label: 'Downtime', value: 'Minimal to None', icon: 'Smile' },
      ],
    },
    benefits: [
      { icon: "Eye", title: "Illusion of Fullness", description: "Creates the appearance of a dense, full head of hair or a sharp 'buzz cut' hairline." },
      { icon: "CheckCircle2", title: "Non-Surgical Solution", description: "An excellent alternative for those who are not candidates for or do not want hair transplant surgery." },
      { icon: "ShieldCheck", title: "Camouflages Imperfections", description: "Effectively conceals thinning areas, receding hairlines, and scars from previous surgeries or injuries." },
    ],
    ctaImage: "/images/smp-hero.jpg",
    details: {
      tabs: {
        "What is SMP?": "smp-what",
        "The Procedure": "smp-procedure",
        "Candidates": "smp-candidates",
        "Recovery": "smp-recovery",
      },
    },
    risks: [
      "Allergic reaction to the pigment (a patch test is recommended)",
      "Infection if aftercare instructions are not followed",
      "Unnatural appearance if performed by an inexperienced practitioner",
      "The pigment may fade or change color over time, requiring touch-ups",
      "Dissatisfaction with the hairline design",
    ],
    faq: [
      { question: "Is Scalp Micropigmentation the same as a regular tattoo?", answer: "While both involve depositing pigment into the skin, SMP is a highly specialized technique. It uses different pigments, needles, and a much shallower needle depth to create the appearance of tiny hair follicles, not solid lines or shading." },
      { question: "Does it look fake?", answer: "When performed by a skilled and experienced artist, the results are incredibly realistic and blend seamlessly with your existing hair to be virtually undetectable." },
      { question: "How long does SMP last?", answer: "The results are considered semi-permanent. They can last for many years (typically 4-6 years) before a touch-up session may be needed to refresh the color and sharpness." }
    ],
    photoRequirements: [
      "A clear photo of the front of your hairline.",
      "A clear photo of the top/crown of your head.",
      "A clear photo of the back of your head (donor area).",
    ],
    requiredMedicalQuestions: [
      'smoking_status',
      'drug_allergies',
    ],
  },
  {
    slug: "general-surgery",
    hero: {
      title: "General Surgery",
      subtitle: "Expert, minimally invasive surgical solutions for a range of common health conditions.",
      backgroundImageUrl: "/images/general-surgery-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/general-surgery-overview.jpg",
      facts: [
        { label: 'Primary Method', value: 'Laparoscopic (Minimally Invasive)', icon: 'Minimize2' },
        { label: 'Anesthesia', value: 'General Anesthesia', icon: 'UserCheck' },
        { label: 'Goal', value: 'Treat Common Ailments', icon: 'Award' },
        { label: 'Recovery', value: 'Varies by Procedure', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Minimally Invasive Techniques", description: "We prioritize laparoscopic (keyhole) surgery, which means smaller incisions, less pain, and a much faster recovery time." },
      { icon: "ShieldCheck", title: "Effective, Long-Term Solutions", description: "Surgical intervention provides a definitive and lasting solution for conditions like hernias and gallstones." },
      { icon: "Users", title: "Expert Surgical Care", description: "Our board-certified general surgeons have extensive experience in a wide range of essential procedures." },
    ],
    details: {
      tabs: {
        "Gallbladder Surgery": "general-surgery-gallbladder",
        "Hernia Repair": "general-surgery-hernia",
        "Hemorrhoid Surgery": "general-surgery-hemorrhoid",
        "Pilonidal Sinus": "general-surgery-pilonidal",
      },
    },
    risks: [
      "Adverse reaction to anesthesia",
      "Infection, bleeding, or hematoma",
      "Blood clots (Deep Vein Thrombosis)",
      "Damage to surrounding tissues or organs",
      "Poor wound healing or scarring",
      "Recurrence of the condition (e.g., hernia)",
    ],
    faq: [
      { question: "What is laparoscopic surgery?", answer: "Laparoscopic, or 'keyhole,' surgery is a minimally invasive technique where a surgeon operates through several small incisions using a tiny camera (laparoscope) and specialized instruments. It results in less pain, shorter hospital stays, and faster recovery." },
      { question: "How long will I need to stay in the hospital?", answer: "This depends on the procedure. A laparoscopic gallbladder removal is often a day-case or requires a single overnight stay, while more complex hernia repairs might require 1-2 days." }
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'alcohol_status',
      'blood_clot_calf',
      'drug_allergies',
    ],
  },
  {
    slug: "orthopedic-surgery",
    hero: {
      title: "Orthopedic Surgery",
      subtitle: "Advanced surgical solutions to relieve joint pain and restore mobility.",
      backgroundImageUrl: "/images/ortho-hero.jpg",
    },
    overview: {
      overviewImageUrl: "/images/ortho-overview.jpg",
      facts: [
        { label: 'Procedures', value: 'Joint Replacement, Arthroscopy', icon: 'Bone' },
        { label: 'Anesthesia', value: 'General or Spinal', icon: 'UserCheck' },
        { label: 'Primary Goal', value: 'Relieve Pain, Restore Function', icon: 'Award' },
        { label: 'Recovery', value: 'Varies (Weeks to Months)', icon: 'BedDouble' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Significant Pain Relief", description: "Dramatically reduces or eliminates chronic joint pain caused by arthritis or injury." },
      { icon: "Users", title: "Restored Mobility & Function", description: "Regain the ability to walk, climb stairs, and participate in daily activities without pain." },
      { icon: "Smile", title: "Improved Quality of Life", description: "A return to an active, independent lifestyle and a significant boost in overall well-being." },
    ],
    details: {
      tabs: {
        "Knee Replacement": "orthopedic-knee-replacement",
        "Hip Replacement": "orthopedic-hip-replacement",
        "Arthroscopic Surgery": "orthopedic-arthroscopy",
      },
    },
    risks: [
      "Adverse reaction to anesthesia",
      "Infection of the surgical site or joint prosthesis",
      "Blood clots (Deep Vein Thrombosis)",
      "Nerve or blood vessel injury",
      "Dislocation or loosening of the artificial joint over time",
      "Stiffness or limited range of motion in the joint",
      "Unequal leg length (for hip replacement)",
      "Possibility of revision surgery in the future",
    ],
    faq: [
      { question: "How long does a new knee or hip joint last?", answer: "Modern artificial joints are very durable. With normal use, you can typically expect a new knee or hip to last for 15-20 years or even longer." },
      { question: "What is recovery like after a joint replacement?", answer: "Recovery is intensive and requires a commitment to physical therapy. You will be encouraged to walk soon after surgery. Full recovery and a return to all activities can take several months to a year." },
      { question: "When can I travel after surgery?", answer: "You will typically need to stay in Turkey for 2-3 weeks for initial recovery and physical therapy before being cleared to fly home. This is crucial to reduce the risk of blood clots during travel." }
    ],
    requiredMedicalQuestions: [
      'anesthesia_problems',
      'smoking_status',
      'blood_clot_calf',
      'blood_clot_lungs',
      'drug_allergies',
    ],
  },
  {
    slug: "ivf-treatment",
    hero: {
      title: "IVF Treatment",
      subtitle: "Advanced and compassionate fertility solutions to help you build your family.",
      backgroundImageUrl: "/images/ivf-baby.jpg",
    },
    overview: {
      overviewImageUrl: "/images/ivf-process.jpg",
      facts: [
        { label: 'Procedure', value: 'Assisted Reproductive Technology', icon: 'FlaskConical' },
        { label: 'Cycle Duration', value: 'Approx. 3-4 Weeks', icon: 'Calendar' },
        { label: 'Primary Goal', value: 'Achieve a Successful Pregnancy', icon: 'Award' },
        { label: 'Key Technique', value: 'IVF with ICSI', icon: 'Microscope' },
      ],
    },
    benefits: [
      { icon: "CheckCircle2", title: "Overcomes Infertility Barriers", description: "Provides a powerful solution for a wide range of infertility causes, from blocked tubes to male factor issues." },
      { icon: "ShieldCheck", title: "High Success Rates", description: "Utilizes advanced lab techniques like ICSI and state-of-the-art technology to maximize the chances of a successful pregnancy." },
      { icon: "Users", title: "Personalized & Compassionate Care", description: "Our dedicated fertility specialists provide tailored treatment protocols and emotional support throughout your entire journey." },
    ],
    details: {
      tabs: {
        "What is IVF?": "ivf-what",
        "The 6 Stages of IVF": "ivf-stages",
        "Who is a Candidate?": "ivf-candidates",
      },
    },
    risks: [
      "Ovarian Hyperstimulation Syndrome (OHSS), a reaction to fertility medication",
      "Multiple pregnancies (twins, triplets), which carry higher health risks",
      "Complications from the egg retrieval procedure, such as bleeding or infection",
      "Increased risk of ectopic pregnancy (embryo implanting outside the uterus)",
      "The emotional, physical, and psychological stress of the treatment process",
      "The possibility of the treatment cycle being unsuccessful",
    ],
    faq: [
      { question: "Is the IVF process painful?", answer: "Most parts of the IVF process involve minimal discomfort. The hormone injections use very fine needles. The egg retrieval is a short procedure performed under light sedation, so you will not feel pain during the process. The embryo transfer is similar to a Pap smear and is generally painless." },
      { question: "What are the success rates for IVF?", answer: "Success rates depend on many factors, especially the woman's age and the cause of infertility. Our specialists will provide you with a realistic assessment of your personal chances of success during your consultation." },
      { question: "What is ICSI and why is it used?", answer: "ICSI stands for Intracytoplasmic Sperm Injection. It's an advanced laboratory technique where a single, healthy sperm is selected and injected directly into an egg. We use it in most cases to dramatically increase the rate of fertilization, especially in cases of male-factor infertility." }
    ],
    ctaImage: "/images/ivf-baby.jpg",
    // NOTE: photoRequirements is intentionally omitted for this sensitive procedure.
    requiredMedicalQuestions: [
      'smoking_status',
      'alcohol_status',
      'previous_ivf',
      'previous_ivf_details',
      'gynecological_history',
      'previous_pregnancies',
      'drug_allergies',
    ],
  },
];

// Helper function to get service data by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find(service => service.slug === slug);
}
