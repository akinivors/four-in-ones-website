// In app/about/page.tsx
import React from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import StorySection from '@/app/components/about/StorySection';
import TeamSection from '@/app/components/about/TeamSection';
import FacilitiesSection from '@/app/components/about/FacilitiesSection';
import StatsSection from '@/app/components/about/StatsSection';
import TrustBadges from '@/app/components/home/TrustBadges';
import LogoCarousel from '@/app/components/about/LogoCarousel';
import ServiceCTA from '@/app/components/services/ServiceCTA';
import type { Metadata } from 'next';

// --- STATIC METADATA ---
export const metadata: Metadata = {
  title: 'About Us | Get Beauty and Health',
  description: 'Your trusted partner in world-class medical tourism. Learn about our mission, our team, and our accredited facilities.',
  openGraph: {
    title: 'About Us | Get Beauty and Health',
    description: 'Your trusted partner in world-class medical tourism.',
  },
};

const AboutUsPage = () => {
  return (
    <div>
      <ServiceHero
        title="About Get Beauty and Health"
        subtitle="Your Trusted Partner in World-Class Medical Tourism"
        backgroundImageUrl="/images/about-us-hero.jpg" // AI: Find a professional image of a modern, clean clinic interior
      />
      <StorySection />
      <TeamSection />
      <FacilitiesSection />
      <StatsSection />
      <LogoCarousel />
      <TrustBadges />
      <ServiceCTA />
    </div>
  );
};

export default AboutUsPage;
