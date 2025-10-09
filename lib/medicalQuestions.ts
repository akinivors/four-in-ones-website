// In lib/medicalQuestions.ts

export interface MedicalQuestion {
  id: string;
  label: string;
  type: 'radio' | 'text' | 'textarea';
  options?: ['Yes', 'No'];
}

export const allMedicalQuestions: MedicalQuestion[] = [
  { id: 'herpes', label: 'Have you had herpes in the past?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'hiv', label: 'Are you HIV positive?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'hepatitis_b', label: 'Are you Hepatitis B positive?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'hepatitis_c', label: 'Are you Hepatitis C positive?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'mrsa', label: 'Have you ever had MRSA?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'anesthesia_problems', label: 'Have you had any problems with anesthesia in the past?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'anesthesia_details', label: 'If yes, what happened and with what anesthesia agent?', type: 'text' },
  { id: 'morphine', label: 'Can you take morphine?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'demerol', label: 'Can you take demerol?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'epinephrine', label: 'Can you take epinephrine?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'dry_eyes', label: 'Do you have dry eyes?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'lens_implants', label: 'Do you have lens implants in your eyes?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'adhesive_allergy', label: 'Have you ever been told you had an adhesive allergy?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'medical_tape_allergy', label: 'Are you allergic to medical tape?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'latex_allergy', label: 'Latex allergy?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'sleep_apnea', label: 'Do you have sleep apnea?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'cpap', label: 'If yes, do you wear CPAP at night?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'blood_clot_calf', label: 'Have you ever had a blood clot in your calf?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'blood_clot_lungs', label: 'Have you ever had a blood clot(s) traveling to your lungs (pulmonary embolus)?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'anemia', label: 'Anemia?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'rectal_bleeding', label: 'Rectal Bleeding?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'constipation_diarrhea', label: 'Constipation or Diarrhea?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'antidiabetic_pills', label: 'Oral antidiabetic pills?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'insulin', label: 'Insulin?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'smoking_status', label: 'Do you smoke or have you smoked in the past?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'alcohol_status', label: 'Do you consume alcohol regularly?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'drug_allergies', label: 'Any drug allergies / adverse drug reactions?', type: 'text' },
  { id: 'recreational_drugs', label: 'Have you ever used any drugs such as marijuana, cocaine, stimulants, sedatives, narcotics?', type: 'text' },
  { id: 'notes', label: 'Notes', type: 'textarea' },
  { id: 'hair_loss_pattern', label: 'How would you describe your hair loss pattern (e.g., receding hairline, thinning crown)?', type: 'text' },
  { id: 'hair_loss_treatments', label: 'Have you used hair loss treatments like Minoxidil or Finasteride?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'bmi', label: 'What is your current height and weight (or BMI, if you know it)?', type: 'text' },
  { id: 'tried_weight_loss', label: 'What other weight loss programs or diets have you tried in the past?', type: 'textarea' },
  { id: 'has_gerd', label: 'Do you suffer from GERD or significant acid reflux?', type: 'radio', options: ['Yes', 'No'] },
];
