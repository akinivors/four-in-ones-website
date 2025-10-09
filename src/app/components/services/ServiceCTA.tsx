// In app/components/services/ServiceCTA.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionDivider from '../ui/SectionDivider';

interface ServiceCTAProps {
  imageUrl?: string; // Image URL is now an optional prop
}

const ServiceCTA = ({ imageUrl = "/images/default-cta.jpg" }: ServiceCTAProps) => {
  // Use the provided image or fallback to default CTA image
  return (
    <section className="relative bg-white pt-16 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-80 relative rounded-lg overflow-hidden">
            <Image
              src={imageUrl} // Use the imageUrl from props
              alt="Free Consultation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-lora text-3xl font-bold text-brand-dark">Book Your Free Consultation</h2>
            <p className="mt-4 text-brand-text">
              Take the next step towards achieving your aesthetic goals. Contact us today for a no-obligation quote and a personalized treatment plan.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-brand-orange text-white font-bold py-4 px-10 rounded-lg transition-transform hover:scale-105"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider color="#1A4D64" />
    </section>
  );
};

export default ServiceCTA;
