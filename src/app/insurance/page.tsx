import React from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import ServiceCTA from '@/app/components/services/ServiceCTA';
import TrustBadges from '@/app/components/home/TrustBadges';
import ServiceFAQ from '@/app/components/services/ServiceFAQ';
import { ShieldCheck, Plane, HeartHandshake, Users, Hospital, Award, AlertTriangle } from 'lucide-react';
import InsuranceProviders from '@/app/components/common/InsuranceProviders';
import type { Metadata } from 'next';

// --- STATIC METADATA ---
export const metadata: Metadata = {
  title: 'Patient Safety & Insurance | Get Beauty and Health',
  description: 'Your peace of mind is our highest priority. Learn about our safety standards, insurance options, and patient protection measures.',
  openGraph: {
    title: 'Patient Safety & Insurance | Get Beauty and Health',
    description: 'Your peace of mind is our highest priority.',
  },
};

// --- (Safety Commitments: No Change) ---
const safetyCommitments = [
  {
    icon: Hospital,
    title: "JCI-Accredited Hospitals",
    description: "We only partner with facilities that meet the highest global standards for safety, quality, and patient care."
  },
  {
    icon: Award,
    title: "Board-Certified Surgeons",
    description: "Your procedure is performed by internationally recognized and fully-credentialed medical experts."
  },
  {
    icon: Users,
    title: "24/7 Personal Host",
    description: "You are never alone. Your personal host and translator is available 24/7 to ensure your comfort and safety."
  },
  {
    icon: HeartHandshake,
    title: "Comprehensive Aftercare",
    description: "Our commitment to your health continues long after your procedure, with structured follow-up plans."
  }
];

// --- (Insurance FAQ: No Change) ---
const insuranceFaqData = [
  {
    question: "Is medical complication insurance mandatory?",
    answer: "While we strongly recommend it for your peace of mind, it is not mandatory. However, please be aware that per our terms, we are not responsible for the costs of complications if you choose not to purchase this specific insurance."
  },
  {
    question: "What happens if there is a complication after I return home?",
    answer: "This is precisely what medical complication insurance is for. It is designed to cover the costs of diagnosis and treatment for a complication that arises after you have returned to your home country. Our team will, of course, provide medical guidance remotely and coordinate with your provider."
  },
  {
    question: "Does the included 'Travel Insurance' cover surgical complications?",
    answer: "No. The included travel insurance is for travel-related incidents (e.g., lost baggage, flight cancellations, accidents unrelated to your procedure). It does *not* cover complications arising from your elective surgery. This is a standard exclusion in all travel insurance policies."
  },
  {
    question: "Why isn't complication insurance just included in the package?",
    answer: "Medical complication insurance policies are highly individualized. The cost is based on the patient's age, health history, and the specific procedure. To provide you with the most transparent pricing, we leave this specialized, personal policy to a dedicated provider and do not bundle it in."
  }
];

const InsurancePage = () => {
  return (
    <div>
      <ServiceHero
        title="Patient Safety & Insurance"
        subtitle="Your Peace of Mind is Our Highest Priority"
        backgroundImageUrl="/images/insurance_header.jpg"
      />

      {/* --- Commitment to Safety Section --- */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-lora text-3xl font-bold text-brand-dark mb-4">
              Your Safety is Our Foundation
            </h2>
            <p className="text-lg text-brand-text">
              Insurance is just one part of our 360° patient safety system. 
              Our entire process is built on a foundation of quality,
              accreditation, and personal support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {safetyCommitments.map((item) => (
              <div key={item.title} className="bg-brand-background/50 p-6 rounded-lg text-center shadow-sm">
                <div className="inline-block bg-brand-teal text-white p-4 rounded-full mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-lora text-xl font-bold text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-text text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Insurance Explained Section --- */}
      <section className="bg-brand-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-lora text-3xl font-bold text-brand-dark mb-4">
              A Clear Guide to Your Coverage
            </h2>
            <p className="text-lg text-brand-text">
              We believe in 100% transparency. Here is a simple breakdown 
              of what's included and what we recommend.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

            {/* 1. All-Inclusive Package */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-brand-teal">
              <div className="flex items-center gap-4 mb-4">
                <HeartHandshake className="w-10 h-10 text-brand-teal" />
                <h3 className="font-lora text-2xl font-bold text-brand-dark">
                  Your All-Inclusive Package
                </h3>
              </div>
              <p className="text-brand-text mb-4">
                This covers all the planned costs of your medical journey. 
                There are no hidden fees.
              </p>
              <ul className="space-y-2 text-brand-text">
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-brand-teal" />All Medical & Hospital Fees</li>
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-brand-teal" />Surgeon & Anesthesiologist Fees</li>
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-brand-teal" />Luxury Hotel Accommodation</li>
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-brand-teal" />VIP Airport & Clinic Transfers</li>
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-brand-teal" />24/7 Personal Host & Translator</li>
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-brand-teal" />Flight Tickets</li>
              </ul>
            </div>

            {/* 2. Travel Insurance (Included) */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-gray-400">
              <div className="flex items-center gap-4 mb-4">
                <Plane className="w-10 h-10 text-gray-600" />
                <h3 className="font-lora text-2xl font-bold text-brand-dark">
                  Travel Insurance (Included)
                </h3>
              </div>
              <p className="text-brand-text mb-4">
                We provide this basic insurance to cover unforeseen 
                *travel-related* issues.
              </p>
              <ul className="space-y-2 text-brand-text">
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-gray-500" />Covers travel accidents</li>
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-gray-500" />Covers lost baggage or documents</li>
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-gray-500" />Covers trip cancellations (non-medical)</li>
                <li className="flex items-center text-red-600 mt-4">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Does NOT cover surgical complications
                </li>
              </ul>
            </div>

            {/* 3. Complication Insurance (Recommended) */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-brand-orange">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="w-10 h-10 text-brand-orange" />
                <h3 className="font-lora text-2xl font-bold text-brand-dark">
                  Medical Complication Insurance
                </h3>
              </div>
              <p className="font-bold text-brand-dark">Strongly Recommended</p>
              <p className="text-brand-text mb-4">
                This is a specialized, optional policy you purchase from a third 
                party for complete peace of mind.
              </p>
              <ul className="space-y-2 text-brand-text">
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-brand-orange" />Covers costs of treating complications</li>
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-brand-orange" />Covers you in Turkey and back home</li>
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-brand-orange" />Provides for remedial treatment</li>
                <li className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-brand-orange" />Covers associated travel/hotel costs</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. The old section is replaced by this single line --- */}
      <InsuranceProviders />

      {/* --- Trust Badges Section --- */}
      <TrustBadges />

      {/* --- Insurance FAQ Section --- */}
      <ServiceFAQ faqData={insuranceFaqData} />

      {/* --- Standard CTA Section --- */}
      <ServiceCTA imageUrl="/images/insurance_header.jpg" />
    </div>
  );
};

export default InsurancePage;