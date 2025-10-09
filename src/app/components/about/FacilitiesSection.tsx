// In app/components/about/FacilitiesSection.tsx
import React from 'react';
import Image from 'next/image';

const facilities = [
  { src: '/images/Modern hospital reception .jpeg', alt: 'Modern hospital reception' },
  { src: '/images/State-of-the-art operating room.jpeg', alt: 'State-of-the-art operating room' },
  { src: '/images/Comfortable patient recovery room.jpeg', alt: 'Comfortable patient recovery room' },
  { src: '/images/Advanced medical equipment.jpeg', alt: 'Advanced medical equipment' },
];
// AI: Please find 4 high-quality, royalty-free images that match the alt text descriptions.

const FacilitiesSection = () => {
  return (
    <section className="bg-brand-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">State-of-the-Art Facilities</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">We partner exclusively with internationally accredited, modern hospitals that are equipped with the latest medical technology to ensure your safety and comfort.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((facility, index) => (
            <div key={index} className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg group">
              <Image src={facility.src} alt={facility.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
