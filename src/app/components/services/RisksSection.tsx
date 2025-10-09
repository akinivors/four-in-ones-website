// In app/components/services/RisksSection.tsx
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface RisksSectionProps {
  risks: string[];
}

const RisksSection = ({ risks }: RisksSectionProps) => {
  return (
    <section className="bg-brand-background py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">Informed Consent: Risks & Safety</h2>
          <p className="mt-4 text-brand-text">Transparency is a core part of our commitment to patient care. It is important to understand the potential risks associated with any surgical procedure. Please discuss these thoroughly with your surgeon.</p>
        </div>
        <div className="columns-1 md:columns-2 gap-x-8">
          {risks.map((risk, index) => (
            <div key={index} className="flex items-start mb-4 break-inside-avoid">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-brand-text">{risk}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RisksSection;
