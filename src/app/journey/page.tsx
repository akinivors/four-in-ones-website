// In app/journey/page.tsx
import React from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import PatientJourney from '@/app/components/services/PatientJourney';
import FlightTrackerSection from '@/app/components/journey/FlightTrackerSection';
import EnhancedDestinationsSection from '@/app/components/journey/EnhancedDestinationsSection';
import PersonalCareSection from '@/app/components/journey/PersonalCareSection';
import PackageInclusions from '@/app/components/journey/PackageInclusions';
import JourneyTestimonials from '@/app/components/journey/JourneyTestimonials';
import ServiceCTA from '@/app/components/services/ServiceCTA';
import type { Metadata } from 'next';

// --- STATIC METADATA ---
export const metadata: Metadata = {
  title: 'Your All-Inclusive Journey | Get Beauty and Health',
  description: 'From your doorstep to our clinic and back, we manage every detail of your all-inclusive medical journey with precision and care.',
  openGraph: {
    title: 'Your All-Inclusive Journey | Get Beauty and Health',
    description: 'We manage every detail of your all-inclusive medical journey.',
  },
};

const PatientJourneyPage = () => {
  return (
    <div>
      <ServiceHero
        title="Your All-Inclusive Journey"
        subtitle="From your doorstep to our clinic and back, we manage every detail with precision and care."
        backgroundImageUrl="/images/dest-istanbul.jpg"
      />
      <PatientJourney />
      <FlightTrackerSection />
      <EnhancedDestinationsSection />
      <PersonalCareSection />
      <PackageInclusions />
      <JourneyTestimonials />
      <ServiceCTA imageUrl="/images/dest-istanbul.jpg" />
    </div>
  );
};

export default PatientJourneyPage;
