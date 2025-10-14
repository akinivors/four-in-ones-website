"use client";
import React from 'react';
import { DollarSign, Award, Hospital, Plane } from 'lucide-react';
import WhyTurkeySection from '../services/WhyTurkeySection';

const WhyTurkeyHome = () => {
  const reasons = [
    {
      icon: DollarSign,
      title: "Significant Cost Savings",
      description: "Access premium procedures at a fraction of the cost in the US, UK, or EU, without compromising on quality or safety.",
      stat: "Up to 70%",
      statLabel: "Average Savings",
      color: "from-brand-teal to-brand-dark"
    },
    {
      icon: Award,
      title: "Board-Certified Experts",
      description: "Our partner surgeons are internationally trained and certified, combining expertise with precision for world-class results.",
      stat: "20+",
      statLabel: "Years Experience",
      color: "from-brand-dark to-brand-teal"
    },
    {
      icon: Hospital,
      title: "JCI-Accredited Facilities",
      description: "Receive treatment in state-of-the-art hospitals that meet the highest global standards for patient safety and quality of care.",
      stat: "JCI",
      statLabel: "Accredited",
      color: "from-brand-orange to-orange-400"
    },
    {
      icon: Plane,
      title: "Medical + Leisure",
      description: "Recover and relax in one of the world's top travel destinations, combining your treatment with an unforgettable journey.",
      stat: "5-Star",
      statLabel: "Experience",
      color: "from-orange-400 to-brand-orange"
    }
  ];

  return (
    <WhyTurkeySection
      badge="Why Choose Us"
      title="Why Choose Turkey for Your Medical Journey?"
      subtitle="Turkey has become a world-renowned destination for medical excellence, combining expert specialists, modern facilities, and exceptional value in a beautiful setting."
      ctaTitle="Ready to Begin Your Transformation?"
      ctaDescription="Join thousands of satisfied patients from around the world who have chosen Turkey for their medical journey. Expert care, stunning results, unforgettable experience."
      reasons={reasons}
      stats={{
        patients: "5000+",
        countries: "60+",
        rating: "4.9/5"
      }}
    />
  );
};

export default WhyTurkeyHome;
