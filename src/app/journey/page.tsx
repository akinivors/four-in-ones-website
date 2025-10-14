// In app/journey/page.tsx
import React from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import PatientJourney from '@/app/components/services/PatientJourney'; // The timeline component
import PackageInclusions from '@/app/components/journey/PackageInclusions'; // The new component
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
      <PackageInclusions />
      <ServiceCTA />
    </div>
  );
};

export default PatientJourneyPage;
