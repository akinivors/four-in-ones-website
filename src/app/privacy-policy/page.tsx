// In src/app/privacy-policy/page.tsx
import React from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import type { Metadata } from 'next';
import LegalTextWrapper from '@/app/components/common/LegalTextWrapper';

export const metadata: Metadata = {
  title: 'Privacy Policy | Get Beauty and Health',
  description: 'Learn how Get Beauty and Health collects, uses, and protects your personal and medical information.',
};

const PrivacyPolicyPage = () => {
  const lastUpdated = "November 11, 2025";

  return (
    <div>
      <ServiceHero
        title="Privacy Policy"
        subtitle={`Last updated: ${lastUpdated}`}
        backgroundImageUrl="/images/about-us-hero.jpg"
      />

      <LegalTextWrapper>
        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6">1. Introduction</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          Welcome to Get Beauty and Health (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to
          protecting the privacy of your personal and medical information. This Privacy
          Policy explains how we collect, use, store, and share the information
          you provide through our website (getbeautyandhealth.com) and services.
        </p>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          By using our website and submitting your information, you agree to the
          collection and use of information in accordance with this policy.
        </p>

        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">2. Information We Collect</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          We collect several types of information for various purposes, primarily
          to provide and improve our service to you.
        </p>
        
        <h3 className="font-lora text-2xl font-semibold text-brand-dark mb-4">A. Information You Provide Directly</h3>
        <ul className="list-disc list-outside space-y-3 pl-5 text-brand-text text-lg leading-relaxed mb-6">
          <li>
            <strong>Contact Form:</strong> When you use our contact form, we collect
            your Name, Email Address, Phone Number (optional), Service of Interest,
            and your Message.
          </li>
          <li>
            <strong>Smart Health Form:</strong> To provide you with a medical quote,
            we collect detailed personal and sensitive health information. This
            includes your Name, Email, Phone, Date of Birth, Sex, Height, Weight,
            and specific answers to medical history questions (e.g., smoking/alcohol
            habits, allergies, past surgeries, current medications).
          </li>
          <li>
            <strong>Chatbot:</strong> We log queries, session IDs, and user interactions
            with our chatbot to improve its accuracy and understand user needs.
            We do not request or store sensitive personal data in our chatbot logs.
          </li>
        </ul>

        <h3 className="font-lora text-2xl font-semibold text-brand-dark mb-4">B. Information We Collect Automatically</h3>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          Like most websites, we may collect technical information automatically,
          such as your IP address, browser type, and how you interact with our site.
          This is used for analytics and to improve our website&apos;s performance.
        </p>

        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">3. How We Use Your Information</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          We use the collected data for the following purposes:
        </p>
        <ul className="list-disc list-outside space-y-3 pl-5 text-brand-text text-lg leading-relaxed mb-6">
          <li>
            <strong>To Provide Quotes:</strong> This is the primary purpose. We use your
            Contact Form and Smart Health Form data to create a personalized
            treatment plan and price quote.
          </li>
          <li>
            <strong>To Communicate With You:</strong> To respond to your inquiries, send
            you the quote, and provide follow-up information.
          </li>
          <li>
            <strong>To Improve Our Services:</strong> We analyze data from our chatbot logs
            and website usage to identify trends and improve our user
            experience.
          </li>
          <li>
            <strong>To Maintain Our Records:</strong> We securely store your submissions
            in our database to manage your case file.
          </li>
        </ul>

        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">4. Data Sharing and Disclosure</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          We take your privacy seriously and do not sell your personal data.
          We only share your information in the following limited circumstances:
        </p>
        <ul className="list-disc list-outside space-y-3 pl-5 text-brand-text text-lg leading-relaxed mb-6">
          <li>
            <strong>With Partner Hospitals and Surgeons:</strong> To generate your
            medical quote, we must share your health information.
            We only share the information necessary to
            assess your case.
          </li>
          <li>
            <strong>With Service Providers:</strong> We use third-party companies to
            facilitate our service, such as secure database storage and email
            communications. These companies are obligated to protect your data
            and are not permitted to use it for any other purpose.
          </li>
          <li>
            <strong>For Legal Requirements:</strong> We may disclose your information
            if required to do so by law or in response to valid requests by
            public authorities.
          </li>
        </ul>
        
        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">5. Your Data Rights (GDPR)</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          You have rights over your personal data. Depending on your location,
          these may include the right to:
        </p>
        <ul className="list-disc list-outside space-y-3 pl-5 text-brand-text text-lg leading-relaxed mb-6">
          <li>Access a copy of the personal data we hold about you.</li>
          <li>Request that we correct any inaccurate information.</li>
          <li>Request that we delete your personal data.</li>
        </ul>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          To exercise these rights, please contact us at <strong>info@getbeautyandhealth.com</strong>.
        </p>

        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">6. Security of Data</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          The security of your data, especially your health information, is our
          highest priority. We use secure, modern technologies and processes to
          protect your information. However, please remember that no method of
          transmission over the Internet is 100% secure.
        </p>

        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">7. Changes to This Privacy Policy</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the &quot;Last updated&quot; date at the top.
        </p>

        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6 mt-12">8. Contact Us</h2>
        <p className="text-brand-text text-lg leading-relaxed mb-6">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-disc list-outside space-y-3 pl-5 text-brand-text text-lg leading-relaxed mb-6">
          <li>By email: <strong>info@getbeautyandhealth.com</strong></li>
          <li>By phone: <strong>+90 555 123 4567</strong></li>
        </ul>
      </LegalTextWrapper>
    </div>
  );
};

export default PrivacyPolicyPage;
