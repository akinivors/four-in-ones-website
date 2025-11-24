// In src/app/components/about/FacilitiesSection.tsx
import React from 'react';
import Image from 'next/image';

// --- UPDATED: All 6 Real Facility Photos ---
const facilities = [
  { 
    src: '/images/facilities/medicalpoint.webp', 
    alt: 'Medical Point Hospital - State-of-the-art Exterior' 
  },
  { 
    src: '/images/facilities/medicalpointhall.webp', 
    alt: 'Modern and Welcoming Hospital Reception' 
  },
  { 
    src: '/images/facilities/medicalpointroom.webp', 
    alt: 'Private, Luxury Patient Recovery Suite' 
  },
  { 
    src: '/images/facilities/bolgehastanesi.jpg', 
    alt: 'Partner Regional Hospital Facility' 
  },
  // --- NEW PHOTOS ADDED HERE ---
  { 
    src: '/images/facilities/medicalpointroom2.webp', 
    alt: 'Premium Patient Room Interior' 
  },
  { 
    src: '/images/facilities/bolgehastanesihall.jpg', 
    alt: 'Regional Hospital Main Hall' 
  },
];

const FacilitiesSection = () => {
  return (
    <section className="bg-brand-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">State-of-the-Art Facilities</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">
            We partner exclusively with internationally accredited, modern hospitals. 
            These real photos show the actual environment where you will receive your world-class care.
          </p>
        </div>
        
        {/* --- UPDATED: Grid is now 3 columns wide for a perfect 2x3 layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="relative h-72 w-full rounded-xl overflow-hidden shadow-lg group">
              <Image 
                src={facility.src} 
                alt={facility.alt} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Optional: Overlay text on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;