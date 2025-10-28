// In app/journey/page.tsx
import React from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import PatientJourney from '@/app/components/services/PatientJourney'; // The timeline component
import FlightTrackerSection from '@/app/components/journey/FlightTrackerSection'; // Flight tracker
import EnhancedDestinationsSection from '@/app/components/journey/EnhancedDestinationsSection'; // Enhanced destinations with weather & attractions
import PersonalCareSection from '@/app/components/journey/PersonalCareSection'; // The personal care team component
import PackageInclusions from '@/app/components/journey/PackageInclusions'; // The new component
import JourneyTestimonials from '@/app/components/journey/JourneyTestimonials'; // Patient testimonials
import ServiceCTA from '@/app/components/services/ServiceCTA';

const PatientJourneyPage = () => {
  return (
    <div>
      <ServiceHero
        title="Your All-Inclusive Journey"
        subtitle="From your doorstep to our clinic and back, we manage every detail with precision and care."
        backgroundImageUrl="/images/doctor-patient-consultation.jpg"
      />
      <PatientJourney />
      <FlightTrackerSection />
      <EnhancedDestinationsSection />
      <PersonalCareSection />
      <PackageInclusions />
      <JourneyTestimonials />
      <ServiceCTA />
    </div>
  );
};

export default PatientJourneyPage;
