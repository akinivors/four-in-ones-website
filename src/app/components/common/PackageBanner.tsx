// In app/components/common/PackageBanner.tsx
import React from 'react';
import Link from 'next/link';
import { Stethoscope, BedDouble, Car, Users, Plane, HeartHandshake, ArrowRight } from 'lucide-react';

const highlights = [
  { icon: Plane, label: "Flights" },
  { icon: Car, label: "VIP Transfers" },
  { icon: BedDouble, label: "5-Star Hotel" },
  { icon: Stethoscope, label: "All Medical Fees" },
  { icon: Users, label: "Personal Host" },
  { icon: HeartHandshake, label: "Aftercare" },
];

const PackageBanner = () => {
  return (
    <section className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-lora text-2xl font-bold">An All-Inclusive Experience</h3>
            <p className="text-gray-300">We manage every detail of your journey.</p>
          </div>
          <div className="hidden lg:flex flex-wrap justify-center gap-x-6 gap-y-2">
            {highlights.map(item => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="h-5 w-5 text-brand-teal" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <div>
            <Link href="/journey" className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageBanner;
