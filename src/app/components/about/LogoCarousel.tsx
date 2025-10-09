// In app/components/about/LogoCarousel.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const logos = [
  // Accreditations
  { src: '/images/Jci_logo.png', alt: 'JCI Accreditation' },
  { src: '/images/ISO 9001 Logo.jpeg', alt: 'ISO 9001 Certification' },
  { src: '/images/Logo_of_Ministry_of_Health_(Turkey).png', alt: 'Turkish Ministry of Health' },
  // Partners (Placeholders)
  { src: '/images/logo-partner-1.png', alt: 'Acibadem Hospital Group' },
  { src: '/images/logo-partner-2.png', alt: 'Memorial Healthcare Group' },
];
// AI: Please find placeholder logos for the partner hospitals listed.

const LogoCarousel = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">Our Trusted Partners & Accreditations</h2>
        </div>
        <Marquee gradient={true} gradientColor="rgb(251, 245, 235)" speed={40}>
          {logos.map((logo) => (
            <div key={logo.alt} className="mx-12 h-16 w-36 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="144px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoCarousel;
