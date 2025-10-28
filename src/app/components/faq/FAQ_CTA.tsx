// In app/components/faq/FAQ_CTA.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FAQ_CTA = () => {
  return (
    <section className="bg-brand-background py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-lora text-3xl font-bold text-brand-dark">Still Have Questions?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-brand-text">
          If you can&apos;t find the answer you&apos;re looking for, our patient care team is here to help. Contact us directly for a personalized response.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold py-4 px-10 rounded-lg transition-transform hover:scale-105"
          >
            <span>Contact Us</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ_CTA;
