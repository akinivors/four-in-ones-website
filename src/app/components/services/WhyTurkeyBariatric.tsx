// In app/components/services/WhyTurkeyBariatric.tsx
"use client";
import React from 'react';
import { DollarSign, Award, Heart, Users } from 'lucide-react';
import WhyTurkeySection from './WhyTurkeySection';

const WhyTurkeyBariatric = () => {
  const reasons = [
    {
      icon: DollarSign,
      title: "Save Up to 70%",
      description: "World-class bariatric surgery at a fraction of the cost compared to US, UK, or EU prices, including all-inclusive packages.",
      stat: "70%",
      statLabel: "Average Savings",
      color: "from-brand-teal to-brand-dark"
    },
    {
      icon: Award,
      title: "Expert Bariatric Surgeons",
      description: "Our internationally certified surgeons have performed thousands of successful bariatric procedures with exceptional outcomes.",
      stat: "5000+",
      statLabel: "Surgeries Performed",
      color: "from-brand-dark to-brand-teal"
    },
    {
      icon: Heart,
      title: "Comprehensive Care",
      description: "Complete support including nutritionist consultations, psychological assessment, and lifelong follow-up care.",
      stat: "360°",
      statLabel: "Holistic Care",
      color: "from-brand-orange to-orange-400"
    },
    {
      icon: Users,
      title: "Personalized Journey",
      description: "Dedicated patient coordinator, VIP airport transfers, and luxury accommodation for your comfort and peace of mind.",
      stat: "24/7",
      statLabel: "Support Available",
      color: "from-orange-400 to-brand-orange"
    }
  ];

  return (
    <WhyTurkeySection
      badge="Bariatric Surgery Excellence"
      title="Why Choose Turkey for Weight Loss Surgery?"
      subtitle="Turkey is a global leader in bariatric surgery, offering cutting-edge procedures, experienced surgeons, and comprehensive care at unbeatable prices."
      ctaTitle="Ready to Start Your Weight Loss Journey?"
      ctaDescription="Join thousands of patients who have successfully transformed their lives with bariatric surgery in Turkey. Expert care, lasting results, life-changing experience."
      reasons={reasons}
      stats={{
        patients: "3000+",
        countries: "60+",
        rating: "4.9/5"
      }}
    />
  );
};

export default WhyTurkeyBariatric;
