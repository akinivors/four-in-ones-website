// In app/components/services/WhyTurkeyDental.tsx
"use client";
import React from 'react';
import { DollarSign, Award, Clock, Plane } from 'lucide-react';
import WhyTurkeySection from './WhyTurkeySection';

const WhyTurkeyDental = () => {
  const reasons = [
    {
      icon: DollarSign,
      title: "Save Up to 70%",
      description: "High-quality dental treatments at a fraction of the cost compared to US, UK, or EU prices.",
      stat: "70%",
      statLabel: "Average Savings",
      color: "from-brand-teal to-brand-dark"
    },
    {
      icon: Award,
      title: "World-Class Quality",
      description: "JCI-accredited facilities with internationally certified dentists using premium materials.",
      stat: "15+",
      statLabel: "Years Experience",
      color: "from-brand-dark to-brand-teal"
    },
    {
      icon: Clock,
      title: "Fast Treatment",
      description: "Complete your smile transformation in just 5-7 days with our streamlined protocols.",
      stat: "5-7",
      statLabel: "Days Only",
      color: "from-brand-orange to-orange-400"
    },
    {
      icon: Plane,
      title: "Dental Holiday",
      description: "Combine your treatment with a memorable vacation in beautiful Istanbul, Turkey.",
      stat: "2-in-1",
      statLabel: "Treatment + Tourism",
      color: "from-orange-400 to-brand-orange"
    }
  ];

  return (
    <WhyTurkeySection
      badge="Dental Tourism Excellence"
      title="Why Choose Turkey for Your Smile?"
      subtitle="Turkey has become the leading destination for cosmetic dentistry, combining exceptional quality, affordability, and an unforgettable travel experience."
      ctaTitle="Ready to Transform Your Smile?"
      ctaDescription="Join thousands of satisfied patients from around the world who have chosen Turkey for their dental transformation. Quality care, stunning results, unforgettable experience."
      reasons={reasons}
      stats={{
        patients: "1000+",
        countries: "50+",
        rating: "4.9/5"
      }}
    />
  );
};

export default WhyTurkeyDental;
