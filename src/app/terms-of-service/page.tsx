// In src/app/terms-of-service/page.tsx
import React from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import type { Metadata } from 'next';
import LegalTextWrapper from '@/app/components/common/LegalTextWrapper';

export const metadata: Metadata = {
  title: 'Terms of Service | Get Beauty and Health',
  description: 'Please read our terms of service before using our website or booking our medical tourism packages.',
};

const TermsOfServicePage = () => {
  const lastUpdated = "November 11, 2025";

  return (
    <div>
      <ServiceHero
        title="Terms of Service"
        subtitle={`Last updated: ${lastUpdated}`}
        backgroundImageUrl="/images/about-us-hero.jpg"
      />

      <LegalTextWrapper>
        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6">1. Agreement to Terms</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement
          made between you (&quot;you,&quot; &quot;the patient&quot;) and Get Beauty and Health
          (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing our website and using our
          services, you agree that you have read, understood, and agree to be
          bound by all of these Terms.
        </p>

        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">2. Our Role and Services</h2>
        
        <h3 className="font-lora text-2xl font-semibold text-brand-dark mb-4">A. Medical Facilitator</h3>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          Get Beauty and Health is a <strong>medical tourism facilitator</strong>. We are
          not a hospital, clinic, or medical provider. Our service is to
          coordinate and facilitate your access to medical treatments,
          accommodations, and travel logistics in Turkey.
        </p>
        
        <h3 className="font-lora text-2xl font-semibold text-brand-dark mb-4">B. No Medical Advice</h3>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          All information provided on this website or by our chatbot is for
          informational purposes only. It is <strong>not</strong> a substitute for professional
          medical advice, diagnosis, or treatment. All medical decisions,
          diagnoses, and treatments will be provided to you <em>only</em> by the
          licensed, independent surgeons and medical professionals in Turkey.
        </p>
        
        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">3. Patient Responsibilities</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          You agree to provide complete, accurate, and truthful information
          on your Smart Health Form and in all communications with our team
          and the medical providers. Hiding or misrepresenting your medical
          history can lead to severe health complications or cancellation of
          your procedure, for which we hold no liability.
        </p>
        
        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">4. Packages, Payments, and Cancellations</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          Our all-inclusive packages (which may include flights, hotel, and
          transfers) are services we coordinate. The specific items included
          in your package will be detailed in your personal quote and service
          agreement.
        </p>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          Payment, deposit, and cancellation policies will be provided to you
          in your service agreement. By booking a package, you agree to these
          specific terms.
        </p>
        
        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">5. Insurance and Complications</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          This is a critical component of our terms. Please read it carefully.
        </p>
        <ul className="list-disc list-outside space-y-3 pl-5 text-brand-text text-lg leading-relaxed mb-6">
          <li>
            <strong>Travel Insurance:</strong> We may provide basic travel
            insurance to cover travel-related incidents (e.g., lost baggage).
            This policy <strong>does not</strong> cover medical complications from elective surgery.
          </li>
          <li>
            <strong>Medical Complication Insurance:</strong> We are not liable for
            any costs associated with medical complications that may arise
            during or after your procedure. You are <strong>strongly advised</strong> to
            purchase separate, specialized medical tourism complication
            insurance.
          </li>
          <li>
            <strong>Your Responsibility:</strong> By agreeing to these Terms, you
            acknowledge that all surgery carries inherent risks. You agree
            that we are not liable for the medical services provided by the
            surgeons or for any complications that may occur.
          </li>
        </ul>

        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">6. Disclaimers and Limitation of Liability</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          We facilitate your connection to highly-accredited hospitals and
          surgeons, but we do not guarantee the results or outcomes of any
          medical procedure. The medical consent forms you sign with the
          hospital and surgeon constitute your primary agreement for your
          medical care.
        </p>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          To the fullest extent permitted by law, Get Beauty and Health shall
          not be liable for any indirect, incidental, special, or consequential
          damages, including personal injury, resulting from your use of our
          facilitation services or the medical care you receive.
        </p>

        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">7. Governing Law</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          These Terms shall be governed by and construed in accordance with
          the laws of the <strong>Republic of Turkey</strong>, without regard to its
          conflict of law principles.
        </p>

        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">8. Contact Us</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          If you have any questions about these Terms, please contact us at
          <strong> info@getbeautyandhealth.com</strong>.
        </p>
      </LegalTextWrapper>
    </div>
  );
};

export default TermsOfServicePage;
