// In app/components/services/InteractiveDentalGrid.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

// Dental procedure categories with their respective treatments
const dentalData = [
  { 
    id: 'implants', 
    title: 'IMPLANTS', 
    imageUrl: '/images/dental-grid/dentistry_implants.png', 
    procedures: [
      'Implant including Abutment', 
      'Implant straumann including Abutment', 
      'All On 4 implant with Temporary Denture (ONE JAW)'
    ] 
  },
  { 
    id: 'bleaching', 
    title: 'TEETH BLEACHING', 
    imageUrl: '/images/dental-grid/dentistry_teethbleaching.jpeg', 
    procedures: [
      'Home Bleaching', 
      'Office Bleaching', 
      'Office Bleaching with Philips Zoom'
    ] 
  },
  { 
    id: 'prosthetic', 
    title: 'PROSTHETIC DENTISTRY', 
    imageUrl: '/images/dental-grid/dentistry_prostheticdentistry.jpg', 
    procedures: [
      'Smile Designing', 
      'Fixed Prosthodontics', 
      'Metal supported ceramic crowns', 
      'Full Ceramic crowns (Zirconia)', 
      'Laminate veneer', 
      'E-max'
    ] 
  },
  { 
    id: 'removable', 
    title: 'REMOVABLE DENTURE', 
    imageUrl: '/images/dental-grid/dentistry_removeabledenture.jpg', 
    procedures: [
      'Implant supported Complete Denture', 
      'Implant supported Hybrid Denture', 
      'Complete Denture (with ceramic teeth)', 
      'Partial Denture', 
      'Partial Denture with Precision attachment'
    ] 
  },
  { 
    id: 'surgeries', 
    title: 'SURGERIES', 
    imageUrl: '/images/dental-grid/dentistry_surgeries.jpg', 
    procedures: [
      'Sinus lift (lateral window technic)', 
      'Bone graft and membrane', 
      'Cyst Operation', 
      'Tooth extraction', 
      'Extraction of impacted teeth'
    ] 
  },
  { 
    id: 'orthodontics', 
    title: 'ORTHODONTICS', 
    imageUrl: '/images/dental-grid/dentistry_orthodontics.jpg', 
    procedures: [
      'Fixed orthodontic treatment (metallic braces)', 
      'Fixed orthodontic treatment (ceramic braces)', 
      'Invisible treatment (invisible, clear aligners)', 
      'Removable and Functional Treatment', 
      'Mini-screw treatment', 
      'Incognito treatment (lingual orthodontics)'
    ] 
  },
  { 
    id: 'pediatric', 
    title: 'PEDIATRIC DENTISTRY', 
    imageUrl: '/images/dental-grid/dentistry_pediatric.jpg', 
    procedures: [
      'Filling', 
      'Stainless Steel Crown', 
      'Space Maintainer'
    ] 
  },
  { 
    id: 'periodontology', 
    title: 'PERIODONTOLOGY', 
    imageUrl: '/images/dental-grid/dentistry_periodontology.jpg', 
    procedures: [
      'Closed Curettage (dental scaling and polishing)', 
      'Root Planing'
    ] 
  },
  { 
    id: 'restorative', 
    title: 'RESTORATIVE DENTISTRY', 
    imageUrl: '/images/dental-grid/dentistry_restorative.jpg', 
    procedures: [
      'Composite Filling (anterior/posterior)', 
      'Composite/filling (laminate)'
    ] 
  },
  { 
    id: 'endodontics', 
    title: 'ENDODONTICS', 
    imageUrl: '/images/dental-grid/dentistry_endodontics.jpg', 
    procedures: [
      'Root canal treatment (anterior)', 
      'Root canal treatment (posterior)', 
      'Root canal treatment of deciduous teeth & permanent'
    ] 
  },
];

const InteractiveDentalGrid = () => {
  const [activeId, setActiveId] = useState(dentalData[0].id);
  const activeCategory = dentalData.find(d => d.id === activeId);

  return (
    <section className="bg-brand-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">Our Dental Procedures</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">Explore our comprehensive range of dental treatments. Click on any category to see the details.</p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {dentalData.map(item => (
            <button 
              key={item.id} 
              onClick={() => setActiveId(item.id)}
              className={`relative h-32 rounded-lg overflow-hidden group focus:outline-none transition-all duration-300 ${
                activeId === item.id 
                  ? 'ring-4 ring-brand-teal ring-offset-4' 
                  : 'hover:scale-105'
              }`}
            >
              <Image 
                src={item.imageUrl} 
                alt={item.title} 
                fill 
                className="object-cover" 
              />
              <div className={`absolute inset-0 transition-colors ${
                activeId === item.id 
                  ? 'bg-brand-dark/30' 
                  : 'bg-brand-dark/60 group-hover:bg-brand-dark/40'
              }`}></div>
              <h3 className="absolute bottom-2 left-2 text-white font-lora font-bold text-sm">
                {item.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Animated Details Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-12 bg-white p-8 rounded-lg shadow-lg"
          >
            {activeCategory && (
              <div>
                <h3 className="font-lora text-2xl font-bold text-brand-dark mb-4">
                  {activeCategory.title}
                </h3>
                <ul className="space-y-2">
                  {activeCategory.procedures.map(proc => (
                    <li key={proc} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                      <span className="text-brand-text">{proc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default InteractiveDentalGrid;
