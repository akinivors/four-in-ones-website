// In app/components/services/ServiceOverview.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { Clock, UserCheck, Hospital, Smile, Scissors, Minimize2, Cookie, BedDouble, Combine, Activity, RotateCcw, Pill, Camera, Calendar, TrendingDown, Target, Syringe } from 'lucide-react';
import { ServiceFact } from '../../../../lib/servicesData';

// Icon mapping
const iconMap: { [key: string]: React.ElementType } = {
  Clock, UserCheck, Hospital, Smile, Scissors, Minimize2, Cookie, BedDouble, Combine, Activity, RotateCcw, Pill, Camera, Calendar, TrendingDown, Target, Injection: Syringe
};

interface ServiceOverviewProps {
  overviewImageUrl: string;
  facts: ServiceFact[];
}

const ServiceOverview = ({ overviewImageUrl, facts }: ServiceOverviewProps) => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Single Image */}
        <div>
          <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6">The Procedure at a Glance</h2>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={overviewImageUrl}
              alt="Medical procedure"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Column: Quick Facts */}
        <div className="bg-brand-background p-8 rounded-lg">
          <h2 className="font-lora text-3xl font-bold text-brand-dark mb-6">Quick Facts</h2>
          <ul className="space-y-4">
            {facts.map((fact) => {
              const IconComponent = iconMap[fact.icon];
              return (
                <li key={fact.label} className="flex items-start">
                  {IconComponent && <IconComponent className="h-6 w-6 text-brand-teal mr-4 mt-1 flex-shrink-0" />}
                  <div>
                    <p className="font-bold text-brand-dark">{fact.label}</p>
                    <p className="text-brand-text">{fact.value}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
