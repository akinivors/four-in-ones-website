// In app/components/services/ServiceCTA.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionDivider from '../ui/SectionDivider';

interface ServiceCTAProps {
  imageUrl?: string; // Image URL is now an optional prop
}

const ServiceCTA = ({ imageUrl = "/images/default-cta.jpg" }: ServiceCTAProps) => {
  return (
    <section className="relative bg-white pt-16 lg:pt-24">
      <div className="container mx-auto px-4">
        
        {/* --- UPDATED: Swapped 'grid' for 'flex' with mobile-first reverse stacking --- */}
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">

          {/* COLUMN 1 (on mobile) / COLUMN 2 (on desktop)
            Text & CTA Content. This now comes FIRST in the code, so it
            appears on top on mobile screens.
          */}
          <div className="text-center md:text-left flex-1">
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
          
          {/* COLUMN 2 (on mobile) / COLUMN 1 (on desktop)
            The Image. This now comes SECOND, so it stacks below the text on mobile.
          */}
          <div className="w-full flex-1">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageUrl} // Use the imageUrl from props
                alt="Free Consultation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
        </div>
      </div>
      <SectionDivider color="#1A4D64" />
    </section>
  );
};

export default ServiceCTA;