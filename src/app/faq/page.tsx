// In app/faq/page.tsx
"use client";

import React, { useState, useMemo } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUp, Search } from 'lucide-react';
import FAQ_CTA from '@/app/components/faq/FAQ_CTA';

const faqData = [
  // General Questions
  { category: "General", question: "Why is Turkey a top destination for medical tourism?", answer: "Turkey combines JCI-accredited, technologically advanced hospitals with world-class, board-certified surgeons at a fraction of the cost in the UK, EU, or US. Plus, it offers the opportunity to recover in a beautiful destination with rich history and culture." },
  { category: "General", question: "What cities do you operate in?", answer: "We offer our premier medical tourism services in three beautiful destinations: İstanbul, the historic crossroads of culture; İzmir, a gem on the Aegean coast; and Cyprus, for a serene recovery by the sea." },
  { category: "General", question: "What makes your partner hospitals special?", answer: "All our partner hospitals are JCI-accredited with the newest medical technology. They feature state-of-the-art operating rooms, modern patient recovery facilities, and ISO 9001 certification for quality management systems." },
  { category: "General", question: "Do you offer complex medical procedures beyond cosmetic surgery?", answer: "Yes. Beyond aesthetic and bariatric services, our network provides advanced procedures including Brain and Nerve Surgery (Neurosurgery), Urology, complex Oncology, Transplantation surgeries, and da Vinci Robotic Surgery." },

  // Process & Packages
  { category: "Process", question: "What is the first step to getting started?", answer: "Your journey begins with a free, no-obligation online consultation. Simply fill out our smart health form, and a patient coordinator will schedule a call to discuss your goals and provide a personalized treatment plan." },
  { category: "Process", question: "What is included in your all-inclusive packages?", answer: "Our packages cover: All medical fees, JCI-accredited hospital stays, 5-star hotel accommodations, pre- and post-op diagnostics, after-care services, all medications, compression garments when needed, VIP transfers, and flight tickets." },
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
  { category: "Aftercare", question: "What happens if I need emergency care during my stay?", answer: "All our partner hospitals provide 24/7 emergency services. Your personal assistant coordinates any urgent care needed, and our comprehensive insurance covers emergency medical situations during your stay." },
  { category: "Aftercare", question: "How do you handle medical emergencies after I return home?", answer: "We provide 24/7 emergency consultation hotline, coordinate with your local healthcare providers, and can arrange emergency return to Turkey if needed. Comprehensive travel insurance covers additional medical costs." },

  // Specific Recovery Questions
  { category: "Aftercare", question: "When can I shower after surgery?", answer: "This varies by procedure. Generally, you can shower 24-48 hours after surgery with surgeon approval. Waterproof dressings protect incisions. Your surgical team provides specific bathing instructions." },
  { category: "Aftercare", question: "When can I drive after my procedure?", answer: "Driving depends on your procedure and pain medication use. Typically 3-7 days for minor procedures, 1-2 weeks for major surgery. You must be pain-medication free and have full mobility before driving." },
  { category: "Aftercare", question: "Can I drink alcohol during recovery?", answer: "Alcohol should be avoided during initial recovery as it can interfere with healing, interact with medications, and increase bleeding risk. Your surgeon will provide specific guidelines for your procedure." },

  // Financial & Insurance Details
  { category: "Payments", question: "Do you offer payment plans or financing?", answer: "Yes, we offer flexible payment plans for qualifying procedures. Options include installment plans and medical financing. Discuss financing options with your patient coordinator during consultation." },
  { category: "Payments", question: "What currencies do you accept?", answer: "We accept major international currencies including USD, EUR, GBP, and others. Current exchange rates are applied at time of payment. Bank transfer fees may apply for international transactions." },
  { category: "Payments", question: "Is my treatment tax-deductible?", answer: "Medical tourism expenses may be tax-deductible in some countries as medical expenses. Consult your tax advisor about deductibility rules in your home country. We provide detailed receipts for all services." },

  // Quality & Accreditation
  { category: "General", question: "What certifications do your hospitals have?", answer: "All partner hospitals have JCI (Joint Commission International) accreditation, the gold standard in global healthcare. Many also have ISO 9001 quality management certification and Turkish Ministry of Health approvals." },
  { category: "General", question: "How do you select your surgeons?", answer: "All surgeons are board-certified specialists with extensive training and experience. Many have international certifications and training from prestigious institutions in the US, Europe, or other leading medical centers." },
  { category: "General", question: "What happens if I'm not satisfied with my results?", answer: "Patient satisfaction is our priority. We offer revision policies for qualifying procedures and work with you to address any concerns. Specific revision terms are outlined in your treatment contract." },
];

const categories = ["All", "General", "Process", "Payments", "Aftercare", "Procedures"];

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqData.filter(faq => {
      const inCategory = selectedCategory === "All" || faq.category === selectedCategory;
      const inSearch = searchTerm === "" || 
                       faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return inCategory && inSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <section className="bg-brand-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-lora text-4xl md:text-5xl font-bold text-brand-dark">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">Find answers to common questions about our services, the process, and travel to Turkey.</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-brand-teal focus:ring-brand-teal"
              />
            </div>
            <div className="flex-shrink-0 grid grid-cols-3 sm:flex sm:space-x-2 bg-gray-100 p-1 rounded-md">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors w-full sm:w-auto ${
                    selectedCategory === cat ? 'bg-white text-brand-dark shadow' : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion */}
          <div className="w-full space-y-4">
            {filteredFaqs.length > 0 ? filteredFaqs.map((item) => (
              <Disclosure key={item.question} as="div" className="border-b">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center py-4 text-left text-lg font-medium text-brand-dark">
                      <span>{item.question}</span>
                      <ChevronUp className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-brand-teal transition-transform`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-4 pr-8 text-brand-text">
                      {item.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )) : (
              <p className="text-center text-gray-500 py-8">No questions found matching your search.</p>
            )}
          </div>
        </div>
      </section>

      <FAQ_CTA />
    </>
  );
}
