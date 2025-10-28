// In app/components/journey/DestinationsSection.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const destinations = [
  { 
    city: "İstanbul", 
    title: "Crossroads of History & Health", 
    imageUrl: "/images/dest-istanbul.jpg",
    description: "World-class healthcare in a city spanning two continents"
  },
  { 
    city: "İzmir", 
    title: "Aegean Charm & Modern Care", 
    imageUrl: "/images/dest-izmir.jpg",
    description: "Mediterranean beauty meets cutting-edge medical facilities"
  },
  { 
    city: "Cyprus", 
    title: "Serene Recovery by the Sea", 
    imageUrl: "/images/dest-cyprus.jpg",
    description: "Peaceful island paradise for your healing journey"
  },
];

const DestinationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % destinations.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl md:text-4xl font-bold text-brand-dark">
            Our Premier Destinations
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">
            Combine your treatment with an unforgettable stay in world-class locations
          </p>
        </div>

        <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image
                src={destinations[currentIndex].imageUrl}
                alt={destinations[currentIndex].city}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
              
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 max-w-lg text-white"
              >
                <h3 className="font-lora text-4xl md:text-7xl font-bold mb-3 md:mb-4">
                  {destinations[currentIndex].city}
                </h3>
                <p className="text-xl md:text-3xl text-gray-200 mb-2 md:mb-4">
                  {destinations[currentIndex].title}
                </p>
                <p className="text-base md:text-lg text-gray-300">
                  {destinations[currentIndex].description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex gap-3 md:gap-4 z-10">
            <button
              onClick={prev}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all hover:scale-110"
              aria-label="Previous destination"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-all hover:scale-110"
              aria-label="Next destination"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-16 flex gap-2 z-10">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white w-8 md:w-12' 
                    : 'bg-white/50 w-8 hover:bg-white/70'
                }`}
                aria-label={`Go to destination ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
