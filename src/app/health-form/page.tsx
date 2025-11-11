// In app/health-form/page.tsx
import React from 'react';
import SmartHealthForm from '@/app/components/contact/SmartHealthForm';
import type { Metadata } from 'next';

// --- STATIC METADATA ---
export const metadata: Metadata = {
  title: 'Secure Health Form | Get Beauty and Health',
  description: 'Submit your health information securely for a personalized treatment plan. Our medical team will review your details and provide expert recommendations.',
  openGraph: {
    title: 'Secure Health Form | Get Beauty and Health',
    description: 'Submit your health information securely for a personalized treatment plan.',
  },
};

const HealthFormPage = () => {
  return (
    <>
      <section className="bg-brand-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-lora text-4xl md:text-5xl font-bold text-brand-dark">Secure Health Form</h1>
          <p className="mt-4 max-w-3xl mx-auto text-brand-text">Please fill out the information below as accurately as possible. This will allow our medical team to provide you with a comprehensive and personalized treatment plan.</p>
        </div>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SmartHealthForm />
        </div>
      </section>
    </>
  );
};

export default HealthFormPage;
