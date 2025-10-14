// In app/components/services/MaterialsShowcase.tsx
import React from 'react';

const MaterialsShowcase = () => {
  return (
    <section className="bg-brand-background py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-lora text-3xl font-bold text-brand-dark mb-12">Only the Best Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-left">
            <h3 className="font-lora text-2xl font-bold text-brand-dark">E.max® Veneers</h3>
            <p className="mt-2 text-brand-text">Renowned for its exceptional durability and natural-looking translucency, E.max porcelain is the gold standard for veneers, allowing us to create beautiful, luminous smiles that blend seamlessly with your natural teeth.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left">
            <h3 className="font-lora text-2xl font-bold text-brand-dark">Zirconium Crowns</h3>
            <p className="mt-2 text-brand-text">For dental crowns, we use monolithic zirconia, a biocompatible material prized for its incredible strength and resistance to chipping. Zirconium crowns provide a durable, long-lasting, and aesthetically pleasing restoration.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsShowcase;
