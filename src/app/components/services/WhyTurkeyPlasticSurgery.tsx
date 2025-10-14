// In app/components/services/WhyTurkeyPlasticSurgery.tsx
"use client";
import React from 'react';
import { DollarSign, Award, Sparkles, Plane } from 'lucide-react';
import WhyTurkeySection from './WhyTurkeySection';

const WhyTurkeyPlasticSurgery = () => {
  const reasons = [
    {
      icon: DollarSign,
      title: "Save Up to 60%",
      description: "Premium plastic surgery procedures at significantly lower costs than US, UK, or EU, without compromising on quality or safety.",
      stat: "60%",
      statLabel: "Average Savings",
      color: "from-brand-teal to-brand-dark"
    },
    {
      icon: Award,
      title: "Board-Certified Surgeons",
      description: "Our plastic surgeons are internationally trained and certified, combining artistic vision with surgical precision for natural results.",
      stat: "20+",
      statLabel: "Years Experience",
      color: "from-brand-dark to-brand-teal"
    },
    {
      icon: Sparkles,
      title: "State-of-the-Art Facilities",
      description: "JCI-accredited hospitals with cutting-edge technology, luxurious recovery suites, and the highest safety standards.",
      stat: "JCI",
      statLabel: "Accredited",
      color: "from-brand-orange to-orange-400"
    },
    {
      icon: Plane,
      title: "Medical + Leisure",
      description: "Recover in beautiful Istanbul while exploring its rich culture, stunning architecture, and world-class hospitality.",
      stat: "5-Star",
      statLabel: "Experience",
      color: "from-orange-400 to-brand-orange"
    }
  ];

  return (
    <WhyTurkeySection
      badge="Plastic Surgery Destination"
      title="Why Choose Turkey for Plastic Surgery?"
      subtitle="Turkey has become a world-renowned destination for aesthetic procedures, combining expert surgeons, modern facilities, and exceptional value in a beautiful setting."
      ctaTitle="Ready to Enhance Your Beauty?"
      ctaDescription="Join thousands of satisfied patients from around the world who have chosen Turkey for their aesthetic transformation. Expert care, stunning results, unforgettable journey."
      reasons={reasons}
      stats={{
        patients: "2000+",
        countries: "55+",
        rating: "4.8/5"
      }}
    />
  );
};

export default WhyTurkeyPlasticSurgery;
