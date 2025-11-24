// In src/app/components/about/LogoCarousel.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { Plane, Hotel } from 'lucide-react';

// --- Airlines ---
const airlines = [
  { src: '/images/partners/turkishairlines.png', alt: 'Turkish Airlines' },
  { src: '/images/partners/qatarairways.png', alt: 'Qatar Airways' },
  { src: '/images/partners/lufthansa.png', alt: 'Lufthansa' },
  { src: '/images/partners/emirates.png', alt: 'Emirates' },
  { src: '/images/partners/pegasus.png', alt: 'Pegasus Airlines' },
  { src: '/images/partners/jet2com.png', alt: 'Jet2.com' },
  { src: '/images/partners/tui.png', alt: 'TUI' },
];

// --- Hotels ---
const hotels = [
  { src: '/images/partners/hiltongardeninn.png', alt: 'Hilton Garden Inn' },
  { src: '/images/partners/ramada.png', alt: 'Ramada' },
  { src: '/images/partners/parkinn.png', alt: 'Park Inn by Radisson' },
];

const LogoCarousel = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Our Trusted Travel Partners
          </h2>
          <p className="text-brand-text text-lg max-w-3xl mx-auto leading-relaxed">
            We collaborate with world-renowned airlines and premium hotels to ensure your journey 
            is as exceptional as your treatment
          </p>
        </div>

        {/* Airlines Section */}
        <div className="mb-16">
          {/* Category Label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <Plane size={20} className="text-blue-600" />
              <span className="font-semibold text-blue-900">Premium Airlines</span>
            </div>
          </div>

          {/* Airlines Carousel Container */}
          <div className="relative py-6 overflow-visible">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none" />
            
            <Marquee 
              gradient={false}
              speed={40}
              pauseOnHover={true}
            >
              {[...airlines, ...airlines].map((logo, index) => (
                <div 
                  key={`airline-${index}`}
                  className="mx-6 my-4"
                >
                  {/* Larger Logo Card - hover states directly on this element */}
                  <div className="relative h-32 w-56 bg-white rounded-2xl border-2 border-gray-200 
                                p-6 shadow-md hover:shadow-2xl hover:border-blue-400 
                                transition-all duration-500 ease-out
                                transform hover:scale-105 hover:-translate-y-2
                                group isolate">
                    {/* Logo Image */}
                    <div className="relative h-full w-full flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="224px"
                        style={{ objectFit: 'contain' }}
                        className="filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>
                    
                    {/* Animated gradient glow on hover */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none
                                    bg-gradient-to-br from-blue-500/0 to-blue-600/0 
                                    group-hover:from-blue-500/10 group-hover:to-blue-600/5 
                                    transition-all duration-500" />
                    
                    {/* Subtle shimmer effect */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none
                                    opacity-0 group-hover:opacity-100 
                                    bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                    translate-x-[-200%] group-hover:translate-x-[200%] 
                                    transition-all duration-1000" />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Hotels Section */}
        <div>
          {/* Category Label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
              <Hotel size={20} className="text-orange-600" />
              <span className="font-semibold text-orange-900">Premium Accommodations</span>
            </div>
          </div>

          {/* Hotels Carousel Container */}
          <div className="relative py-6 overflow-visible">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none" />
            
            <Marquee 
              gradient={false}
              speed={35}
              pauseOnHover={true}
              direction="right"
            >
              {[...hotels, ...hotels, ...hotels].map((logo, index) => (
                <div 
                  key={`hotel-${index}`}
                  className="mx-6 my-4"
                >
                  {/* Larger Logo Card - hover states directly on this element */}
                  <div className="relative h-32 w-56 bg-white rounded-2xl border-2 border-gray-200 
                                p-6 shadow-md hover:shadow-2xl hover:border-orange-400 
                                transition-all duration-500 ease-out
                                transform hover:scale-105 hover:-translate-y-2
                                group isolate">
                    {/* Logo Image */}
                    <div className="relative h-full w-full flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="224px"
                        style={{ objectFit: 'contain' }}
                        className="filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      />
                    </div>
                    
                    {/* Animated gradient glow on hover */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none
                                    bg-gradient-to-br from-orange-500/0 to-orange-600/0 
                                    group-hover:from-orange-500/10 group-hover:to-orange-600/5 
                                    transition-all duration-500" />
                    
                    {/* Subtle shimmer effect */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none
                                    opacity-0 group-hover:opacity-100 
                                    bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                    translate-x-[-200%] group-hover:translate-x-[200%] 
                                    transition-all duration-1000" />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-brand-teal">10,000+</p>
              <p className="text-sm text-brand-text">International Patients</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-brand-teal">50+</p>
              <p className="text-sm text-brand-text">Flight Routes Covered</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-brand-teal">100%</p>
              <p className="text-sm text-brand-text">Travel Coordination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
