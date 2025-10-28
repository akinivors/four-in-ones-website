// In app/about/page.tsx
import React from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import StorySection from '@/app/components/about/StorySection';
import TeamSection from '@/app/components/about/TeamSection';           // <-- Import
import FacilitiesSection from '@/app/components/about/FacilitiesSection';
import StatsSection from '@/app/components/about/StatsSection';
import TrustBadges from '@/app/components/home/TrustBadges';
import LogoCarousel from '@/app/components/about/LogoCarousel';
import ServiceCTA from '@/app/components/services/ServiceCTA';

const AboutUsPage = () => {
  return (
    <div>
      <ServiceHero
        title="About FOUR IN ONE'S"
        subtitle="Your Trusted Partner in Health and Real Estate Beyond Borders"
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
