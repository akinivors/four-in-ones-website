export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  // General Questions
  { category: "General", question: "Why is Turkey a top destination for medical tourism?", answer: "Turkey combines JCI-accredited, technologically advanced hospitals with world-class, board-certified surgeons at a fraction of the cost in the UK, EU, or US. Plus, it offers the opportunity to recover in a beautiful destination with rich history and culture." },
  { category: "General", question: "What cities do you operate in?", answer: "We offer our premier medical tourism services in three beautiful destinations: İstanbul, the historic crossroads of culture; İzmir, a gem on the Aegean coast; and Cyprus, for a serene recovery by the sea." },
  { category: "General", question: "What makes your partner hospitals special?", answer: "All our partner hospitals are JCI-accredited with the newest medical technology. They feature state-of-the-art operating rooms, modern patient recovery facilities, and ISO 9001 certification for quality management systems." },
  { category: "General", question: "Do you offer complex medical procedures beyond cosmetic surgery?", answer: "Yes. Beyond aesthetic and bariatric services, our network provides advanced procedures including Brain and Nerve Surgery (Neurosurgery), Urology, complex Oncology, Transplantation surgeries, and da Vinci Robotic Surgery." },

  // Process & Packages
  { category: "Process", question: "What is the first step to getting started?", answer: "Your journey begins with a free, no-obligation online consultation. Simply fill out our smart health form, and a patient coordinator will schedule a call to discuss your goals and provide a personalized treatment plan." },
  { category: "Process", question: "What is included in your all-inclusive packages?", answer: "Our packages cover: All medical fees, JCI-accredited hospital stays, 5-star hotel accommodations, pre- and post-op diagnostics, after-care services, all medications, compression garments when needed, VIP transfers, and flight tickets." },
  { category: "Process", question: "Will someone pick me up from the airport?", answer: "Yes! VIP airport transfers are included in all our packages. Our driver will meet you at arrivals with a name sign, help with your luggage, and transport you directly to your hotel in a comfortable, private vehicle. Your personal assistant will coordinate all pickup details and be available 24/7 throughout your stay." },
  { category: "Process", question: "Will I have a personal host throughout my stay?", answer: "Yes. A dedicated personal assistant and expert nurse staff are at your service 24/7 from the moment you land. They act as your guide, translator, and advocate, managing all appointments and ensuring your comfort." },
  { category: "Process", question: "How long do I need to stay in Turkey?", answer: "Stay duration varies by procedure: Hair transplant (3-4 days), cosmetic surgeries (7-10 days), bariatric surgery (5-7 days), complex procedures like joint replacement (2-3 weeks). We ensure you're cleared for travel before departure." },
  { category: "Process", question: "Can I bring a companion with me?", answer: "Absolutely. Many patients travel with family or friends. Our packages can be adjusted to include accommodation and transfers for your companion at competitive rates." },

  // Payments & Insurance
  { category: "Payments", question: "Are there any hidden costs in your packages?", answer: "No. We believe in complete transparency. A detailed contract outlines all covered costs. Any potential extras like additional nights or companion services are discussed upfront with clear pricing." },
  { category: "Payments", question: "What insurance do you provide?", answer: "We provide international travel health insurance covering accident-related health problems during travel. However, we strongly recommend purchasing comprehensive medical travel insurance to cover any potential surgical complications." },
  { category: "Payments", question: "What payment methods do you accept?", answer: "We accept international bank transfers and major credit cards. Typically, a deposit secures your booking, with the balance due upon arrival in Turkey. Payment plans may be available for certain procedures." },

  // Aftercare & Recovery
  { category: "Aftercare", question: "What support do I get after returning home?", answer: "Our aftercare includes comprehensive recovery instructions, 24/7 support hotline, follow-up consultations via video call, and coordination with local healthcare providers if needed. Your surgeon remains available for questions throughout recovery." },
  { category: "Aftercare", question: "Will my surgery leave visible scars?", answer: "Modern surgical techniques minimize scarring. For procedures like rhinoplasty, incisions are hidden inside the nose. For other surgeries, incisions are placed in natural creases or discreet locations. Scars fade significantly over 6-12 months." },
  { category: "Aftercare", question: "When can I return to normal activities after surgery?", answer: "Recovery varies by procedure: Light walking encouraged within 24-48 hours for most surgeries. Desk work typically 1-2 weeks, strenuous exercise 4-8 weeks. Your surgeon provides specific timelines based on your procedure and healing progress." },
  { category: "Aftercare", question: "What if I have complications after returning home?", answer: "While rare, we have protocols for managing complications. Your comprehensive aftercare package includes emergency consultation access and coordination with local medical care if needed. Travel insurance can cover additional medical costs." },

  // Hair Transplant Procedures
  { category: "Procedures", question: "What's the difference between FUE and DHI hair transplant techniques?", answer: "FUE creates channels first, then implants grafts. DHI uses a special 'Choi pen' to implant grafts directly without pre-made channels, offering superior control over angle and direction. Both techniques leave minimal scarring." },
  { category: "Procedures", question: "How many hair grafts will I need?", answer: "Graft numbers depend on your hair loss pattern and desired density. Typically 1,500-4,000 grafts are needed. Our surgeons assess during consultation and recommend the optimal number for natural-looking results." },
  { category: "Procedures", question: "When will I see my hair transplant results?", answer: "New growth begins at 3-4 months, with significant improvement at 6-9 months. Full results are visible after 12-18 months. The transplanted hair is permanent as it comes from areas genetically resistant to balding." },

  // Cosmetic Surgery
  { category: "Procedures", question: "Will rhinoplasty be painful?", answer: "The procedure is performed under general anesthesia. Post-surgery discomfort is normal and manageable with prescribed pain medication. Most patients find the recovery more comfortable than expected." },
  { category: "Procedures", question: "How long until I see my rhinoplasty final results?", answer: "Significant change is visible once the splint is removed after one week. However, final refined results appear after up to one year as swelling completely subsides and tissues settle." },
  { category: "Procedures", question: "Will a facelift make me look unnatural?", answer: "No. Modern techniques focus on repositioning the SMAS (underlying muscle layer), not just pulling skin. This creates a natural, refreshed appearance without the 'operated-on' look." },

  // Weight Loss Surgery
  { category: "Procedures", question: "How much weight can I expect to lose with bariatric surgery?", answer: "Sleeve Gastrectomy patients typically lose 60-70% of excess body weight within 12-18 months. Gastric Bypass can result in 70-80% excess weight loss. Individual results vary based on commitment to lifestyle changes." },
  { category: "Procedures", question: "Is weight loss surgery reversible?", answer: "Sleeve Gastrectomy is irreversible as stomach portion is permanently removed. Gastric Bypass can be revised but is considered permanent. Gastric Balloon is temporary (6-12 months). Your surgeon will discuss the best option for you." },
  { category: "Procedures", question: "When can I return to work after bariatric surgery?", answer: "Most patients with desk jobs return within 1-2 weeks. Physically demanding jobs may require 3-4 weeks off. Recovery depends on the specific procedure and individual healing." },

  // Dental Procedures  
  { category: "Procedures", question: "How long do dental veneers and crowns last?", answer: "High-quality E.max porcelain veneers last 10-15+ years with proper care. Zirconia crowns can last 15+ years. Longevity depends on oral hygiene, diet, teeth grinding habits, and avoiding trauma." },
  { category: "Procedures", question: "Are dental implants painful?", answer: "Implant placement uses local anesthesia, so you won't feel pain during surgery. Post-operative discomfort is typically mild and manageable with over-the-counter medication. Most patients report it's easier than expected." },
  { category: "Procedures", question: "Can I get veneers if I have dental problems?", answer: "Any cavities or dental issues must be treated first. During consultation, we perform comprehensive examination and address underlying problems to ensure the best foundation for cosmetic treatment." },

  // IVF & Fertility
  { category: "Procedures", question: "Is the IVF process painful?", answer: "Most IVF steps involve minimal discomfort. Hormone injections use fine needles. Egg retrieval is performed under light sedation. Embryo transfer is similar to a Pap smear and generally painless." },
  { category: "Procedures", question: "What are IVF success rates?", answer: "Success rates depend on factors like age and infertility cause. Our specialists provide realistic assessments during consultation. We use advanced techniques like ICSI to maximize fertilization rates." },
  { category: "Procedures", question: "What is ICSI and why is it used in IVF?", answer: "ICSI (Intracytoplasmic Sperm Injection) involves injecting a single healthy sperm directly into an egg. We use this technique in most cases to dramatically increase fertilization rates, especially for male-factor infertility." },

  // Breast Surgery Procedures
  { category: "Procedures", question: "How long do breast implants last?", answer: "Breast implants are not lifetime devices. They typically last 10-20 years before potentially needing replacement or removal. Modern implants are more durable than ever before." },
  { category: "Procedures", question: "Will I be able to breastfeed after breast augmentation?", answer: "Most women can breastfeed successfully after breast augmentation, but it's not guaranteed. The ability depends on incision type and implant placement, which should be discussed with your surgeon." },
  { category: "Procedures", question: "What will breast surgery scars look like?", answer: "Our surgeons expertly place incisions in hidden areas like the breast crease or around the areola. Scars fade significantly over 6-12 months but won't disappear completely." },

  // Gastric Balloon & Non-Surgical Weight Loss
  { category: "Procedures", question: "Can a gastric balloon burst inside me?", answer: "While extremely rare, it's possible. Balloons are filled with blue-colored saline, so if leakage occurs, your urine would turn blue/green, providing a clear signal to contact your doctor immediately." },
  { category: "Procedures", question: "What happens after the gastric balloon is removed?", answer: "The balloon period is training for healthy habits. After removal at 6-12 months, your success depends on maintaining the diet and lifestyle changes you've learned during the balloon period." },
  { category: "Procedures", question: "How much weight loss can I expect with Gastric Botox?", answer: "Gastric Botox provides modest weight loss, typically 10-15% of excess weight. It's a 20-minute endoscopic procedure with temporary effects lasting about 6 months, and can be repeated if necessary." },

  // Ear Surgery & Facial Procedures
  { category: "Procedures", question: "Will ear surgery (Otoplasty) affect my hearing?", answer: "No. Otoplasty is performed on the outer ear and doesn't affect inner ear structures responsible for hearing. It only reshapes the visible ear cartilage." },
  { category: "Procedures", question: "Are ear surgery scars visible?", answer: "No. Incisions are placed in the natural crease behind the ear where they're completely hidden. Once healed, scars are typically very difficult to see even upon close inspection." },

  // Eye Surgery & Vision Procedures
  { category: "Procedures", question: "How long does eye surgery recovery take?", answer: "Recovery varies by procedure. Blepharoplasty (eyelid surgery) typically requires 1-2 weeks for initial healing, with final results visible after 2-3 months once all swelling subsides." },
  { category: "Procedures", question: "Will I need reading glasses after eye surgery?", answer: "This depends on your age and the specific procedure. Your ophthalmologist will discuss realistic expectations about near and distance vision during your consultation." },

  // Additional Travel & Logistics
  { category: "General", question: "What documents do I need to travel to Turkey?", answer: "Most visitors need a valid passport and may require a tourist visa (available online or on arrival). EU citizens can enter with just an ID card. We provide guidance on entry requirements for your specific nationality." },
  { category: "General", question: "What language do medical staff speak?", answer: "All our partner hospitals have English-speaking medical staff. Additionally, your personal assistant provides 24/7 translation services to ensure clear communication throughout your treatment." },
  { category: "General", question: "What if I have special dietary requirements?", answer: "We accommodate all dietary needs including vegetarian, vegan, halal, kosher, gluten-free, and allergy-specific requirements. Hotels and hospitals are informed of your dietary needs in advance." },

  // Advanced Medical Technology
  { category: "Procedures", question: "What is da Vinci Robotic Surgery?", answer: "Da Vinci is advanced robotic technology allowing surgeons to perform complex procedures with enhanced precision, control, and flexibility. It offers minimally invasive approaches with reduced pain, less blood loss, smaller scars, and faster recovery." },
  { category: "Procedures", question: "Do you offer oncology treatments?", answer: "Yes. Our network includes specialist hospitals providing advanced oncology treatments, including surgical oncology, chemotherapy, radiation therapy, and immunotherapy, all with multidisciplinary care teams." },

  // Emergency & Complications
  { category: "Aftercare", question: "What if something goes wrong during or after surgery?", answer: "While complications are rare with our JCI-accredited hospitals and experienced surgeons, we have comprehensive safety protocols. During your stay, all hospitals provide 24/7 emergency services with your personal assistant coordinating care. After returning home, you have 24/7 emergency consultation access, coordination with local healthcare providers, and can arrange emergency return to Turkey if needed. Your comprehensive insurance and aftercare package covers emergency medical situations." },
  { category: "Aftercare", question: "What happens if I need emergency care during my stay?", answer: "All our partner hospitals provide 24/7 emergency services. Your personal assistant coordinates any urgent care needed, and our comprehensive insurance covers emergency medical situations during your stay." },
  { category: "Aftercare", question: "How do you handle medical emergencies after I return home?", answer: "We provide 24/7 emergency consultation hotline, coordinate with your local healthcare providers, and can arrange emergency return to Turkey if needed. Comprehensive travel insurance covers additional medical costs." },

  // Specific Recovery Questions
  { category: "Aftercare", question: "When can I shower after surgery?", answer: "This varies by procedure. Generally, you can shower 24-48 hours after surgery with surgeon approval. Waterproof dressings protect incisions. Your surgical team provides specific bathing instructions." },
  { category: "Aftercare", question: "When can I drive after my procedure?", answer: "Driving depends on your procedure and pain medication use. Typically 3-7 days for minor procedures, 1-2 weeks for major surgery. You must be pain-medication free and have full mobility before driving." },
  { category: "Aftercare", question: "Can I drink alcohol during recovery?", answer: "Alcohol should be avoided during initial recovery as it can interfere with healing, interact with medications, and increase bleeding risk. Your surgeon will provide specific guidelines for your procedure." },

  // Financial & Insurance Details
  { category: "Payments", question: "Can I pay in installments?", answer: "Yes, we offer flexible payment plans for qualifying procedures. Options include installment plans and medical financing to make your treatment more affordable. Discuss specific installment options with your patient coordinator during consultation." },
  { category: "Payments", question: "Do you offer payment plans or financing?", answer: "Yes, we offer flexible payment plans for qualifying procedures. Options include installment plans and medical financing. Discuss financing options with your patient coordinator during consultation." },
  { category: "Payments", question: "When do I need to pay?", answer: "Typically, a deposit (30-50%) secures your booking and surgery date. The remaining balance is due upon your arrival in Turkey, before the procedure. We accept international bank transfers and major credit cards. Your patient coordinator will provide exact payment schedule and amounts." },
  { category: "Payments", question: "What's the deposit amount?", answer: "The deposit is typically 30-50% of the total procedure cost and secures your booking and surgery date. The exact amount varies by procedure and will be clearly outlined in your personalized quote. Your patient coordinator will provide specific deposit details during consultation." },
  { category: "Payments", question: "Can I get a refund if I cancel?", answer: "Cancellation and refund policies vary depending on timing and circumstances. Generally, deposits are non-refundable if cancelled within 2 weeks of the scheduled date. For earlier cancellations or medical emergencies, partial refunds may be available. Full cancellation terms are outlined in your treatment contract and discussed during booking." },
  { category: "Payments", question: "What currencies do you accept?", answer: "We accept major international currencies including USD, EUR, GBP, and others. Current exchange rates are applied at time of payment. Bank transfer fees may apply for international transactions." },
  { category: "Payments", question: "Is my treatment tax-deductible?", answer: "Medical tourism expenses may be tax-deductible in some countries as medical expenses. Consult your tax advisor about deductibility rules in your home country. We provide detailed receipts for all services." },

  // Quality & Accreditation
  { category: "General", question: "What certifications do your hospitals have?", answer: "All partner hospitals have JCI (Joint Commission International) accreditation, the gold standard in global healthcare. Many also have ISO 9001 quality management certification and Turkish Ministry of Health approvals." },
  { category: "General", question: "How do you select your surgeons?", answer: "All surgeons are board-certified specialists with extensive training and experience. Many have international certifications and training from prestigious institutions in the US, Europe, or other leading medical centers." },
  { category: "General", question: "What happens if I'm not satisfied with my results?", answer: "Patient satisfaction is our priority. We offer revision policies for qualifying procedures and work with you to address any concerns. Specific revision terms are outlined in your treatment contract." },

  // Travel Preparation
  { category: "Travel", question: "What should I bring with me?", answer: "Please bring: Valid passport (with 6+ months validity), any relevant medical records or test results, list of current medications, comfortable loose-fitting clothing, prescribed compression garments if applicable, and personal toiletries. We'll provide a detailed pre-travel checklist specific to your procedure after booking." },
  { category: "Travel", question: "When should I stop taking medications before surgery?", answer: "Medication timing varies by type and procedure. Generally, blood thinners (aspirin, ibuprofen, warfarin) should be stopped 7-10 days before surgery. Herbal supplements should be discontinued 2 weeks prior. Never stop prescription medications without consulting your doctor. Your surgeon will provide specific medication instructions during pre-operative consultation based on your individual needs." },

  // Surgeon Assignment & Consultation
  { category: "Process", question: "Who will be my surgeon?", answer: "Your surgeon is assigned based on your specific procedure and needs. All our surgeons are board-certified specialists with extensive international training and experience. You'll receive your surgeon's profile and credentials during the booking process, and you'll meet them in person before your procedure for a detailed pre-operative consultation." },
  { category: "Process", question: "Can I meet my surgeon before the operation?", answer: "Yes! You'll have a comprehensive pre-operative consultation with your surgeon before the procedure. This meeting allows you to discuss your goals, ask questions, review the surgical plan, and ensure you're completely comfortable. For international patients, this typically happens on your arrival day or the day before surgery." },
  { category: "Process", question: "How long from consultation to surgery?", answer: "Timeline varies by procedure and your schedule. For international patients, surgery typically happens 1-2 days after your arrival consultation. From initial online consultation to travel, most patients can be scheduled within 2-4 weeks, though we can accommodate urgent cases faster or schedule months in advance based on your preference." },
  { category: "Procedures", question: "What type of anesthesia is used?", answer: "Anesthesia type depends on the procedure. Major surgeries (cosmetic, bariatric, transplants) use general anesthesia administered by board-certified anesthesiologists. Minor procedures may use local anesthesia or conscious sedation. Your anesthesiologist will meet with you before surgery to discuss the plan, answer questions, and review your medical history to ensure the safest approach for you." },

  // Language & Communication
  { category: "General", question: "Do you speak English?", answer: "Yes! All our partner hospitals have English-speaking medical staff, and your dedicated personal assistant provides 24/7 English translation services throughout your entire stay. From airport pickup to departure, you'll have clear communication at every step." },
  { category: "General", question: "Will I have a translator?", answer: "Absolutely. Your dedicated personal assistant serves as your translator and is available 24/7 throughout your stay. They accompany you to all appointments, consultations, and procedures to ensure clear communication with medical staff." },
  { category: "General", question: "Do you treat international patients?", answer: "Yes! We specialize in medical tourism and welcome patients from around the world. We've successfully treated thousands of international patients from the US, UK, Europe, Middle East, and beyond. Our comprehensive packages include everything international patients need: airport transfers, translator services, accommodation, and 24/7 support throughout your stay." },
];


