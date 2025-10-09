// In app/components/services/ServiceHero.tsx
import React from 'react';

interface ServiceHeroProps {
  title: string;
  subtitle?: string; // Optional subtitle
  backgroundImageUrl: string;
}

const ServiceHero = ({ title, subtitle, backgroundImageUrl }: ServiceHeroProps) => {
  return (
    <section
      className="relative flex items-center justify-center text-center text-white bg-cover bg-center py-24 md:py-32"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-brand-dark bg-opacity-50"></div>
      <div className="relative z-10 px-4">
        <h1 className="font-lora text-4xl md:text-6xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 text-lg md:text-xl font-inter">{subtitle}</p>}
      </div>
    </section>
  );
};

export default ServiceHero;
