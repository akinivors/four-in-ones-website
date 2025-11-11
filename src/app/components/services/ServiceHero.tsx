// In app/components/services/ServiceHero.tsx
import React from 'react';
import Image from 'next/image'; // Import Image

interface ServiceHeroProps {
  title: string;
  subtitle?: string; // Optional subtitle
  backgroundImageUrl: string;
}

const ServiceHero = ({ title, subtitle, backgroundImageUrl }: ServiceHeroProps) => {
  return (
    <section
      className="relative flex items-center justify-center text-center text-white bg-brand-dark py-24 md:py-32"
      // The style prop has been removed
    >
      {/* NEW: Next.js Image Component */}
      <Image
        src={backgroundImageUrl}
        alt={title} // Use the title as the alt text
        fill
        priority // <-- Tell Next.js to load this image first
        sizes="(max-width: 768px) 100vw, 80vw"
        className="object-cover opacity-50"
      />
      {/* The old overlay is no longer needed */}

      <div className="relative z-10 px-4">
        <h1 className="font-lora text-4xl md:text-6xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 text-lg md:text-xl font-inter">{subtitle}</p>}
      </div>
    </section>
  );
};

export default ServiceHero;