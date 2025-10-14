// In app/services/hair-transplant/page.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import ServiceHero from '@/app/components/services/ServiceHero';
import ServiceCTA from '@/app/components/services/ServiceCTA';

// --- Page Specific Data ---
const procedures = [
  { 
    slug: 'scalp-hair-transplant', 
    title: 'Scalp Hair Transplant', 
    description: 'Restore your hairline and density with FUE & DHI methods.', 
    category: 'Scalp', 
    image: '/images/hair-transplant-hero.jpg' 
  },
  { 
    slug: 'eyebrow-transplantation', 
    title: 'Eyebrow Transplantation', 
    description: 'Create full, natural-looking eyebrows with precise follicle placement.', 
    category: 'Facial', 
    image: '/images/placeholder-procedure.jpg' 
  },
  { 
    slug: 'beard-transplantation', 
    title: 'Beard Transplantation', 
    description: 'Achieve a fuller, more defined beard and mustache.', 
    category: 'Facial', 
    image: '/images/placeholder-procedure.jpg' 
  },
];

const HairTransplantCategoryPage = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div>
      <ServiceHero
        title="Hair Transplant & Restoration"
        subtitle="Comprehensive solutions for restoring hair on the scalp, face, and brows."
        backgroundImageUrl="/images/hair-transplant-category.jpg"
      />

      <section className="bg-brand-background py-16 lg:py-24" onMouseMove={handleMouseMove}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-lora text-3xl font-bold text-brand-dark">Complete Hair Restoration Guide</h2>
            <p className="mt-4 text-brand-text">
              Explore our advanced hair restoration procedures using the latest FUE and DHI techniques. 
              Our expert surgeons deliver natural-looking, permanent results tailored to your unique needs.
            </p>
          </div>

          {/* Floating Image Preview */}
          <AnimatePresence>
            {hoveredImage && (
              <div 
                className="fixed z-50 hidden xl:block pointer-events-none"
                style={{
                  left: `${mousePosition.x + 20}px`,
                  top: `${mousePosition.y - 144}px`,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-64 h-72 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={hoveredImage}
                    alt="Procedure preview"
                    fill
                    className="object-cover"
                    sizes="256px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="w-12 h-1 bg-brand-teal rounded-full mb-2"></div>
                    <p className="text-white text-sm font-semibold">Preview</p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {procedures.map((proc) => (
              <Link
                key={proc.slug}
                href={`/services/${proc.slug}`}
                onMouseEnter={() => setHoveredImage(proc.image)}
                onMouseLeave={() => setHoveredImage(null)}
                className="group flex flex-col p-6 bg-white rounded-xl border border-gray-200 hover:border-brand-teal hover:shadow-lg transition-all"
              >
                <div className="flex-1">
                  <h3 className="font-lora text-xl font-semibold text-brand-dark group-hover:text-brand-teal transition-colors">
                    {proc.title}
                  </h3>
                  <p className="mt-2 text-brand-text/70 text-sm">{proc.description}</p>
                </div>
                <div className="mt-4 flex items-center text-brand-teal font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA imageUrl="/images/hair-transplant-category.jpg" />
    </div>
  );
};

export default HairTransplantCategoryPage;
