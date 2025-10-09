// In app/services/[slug]/page.tsx
import ServiceHero from '@/app/components/services/ServiceHero';
import ServiceOverview from '@/app/components/services/ServiceOverview';
import ServiceDetails from '@/app/components/services/ServiceDetails';
import BenefitsSection from '@/app/components/services/BenefitsSection';
import RisksSection from '@/app/components/services/RisksSection';
import PatientJourney from '@/app/components/services/PatientJourney';
import ServiceFAQ from '@/app/components/services/ServiceFAQ';
import ServiceCTA from '@/app/components/services/ServiceCTA';
import { getServiceBySlug } from '../../../../lib/servicesData';
import { notFound } from 'next/navigation';
import React from 'react';

const ServiceDetailPage = ({ params }: { params: { slug: string } }) => {
  // Get service data based on the slug
  const service = getServiceBySlug(params.slug);
  
  // If service not found, return 404
  if (!service) {
    notFound();
  }

  return (
    <div>
      <ServiceHero
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        backgroundImageUrl={service.hero.backgroundImageUrl}
      />
      <ServiceOverview
        overviewImageUrl={service.overview.overviewImageUrl}
        facts={service.overview.facts}
      />
      {service.benefits && <BenefitsSection benefits={service.benefits} />}
      <ServiceDetails
        tabs={service.details.tabs}
      />
      <PatientJourney />
      {service.risks && <RisksSection risks={service.risks} />}
      <ServiceFAQ
        faqData={service.faq}
      />
      <ServiceCTA imageUrl={service.ctaImageUrl || service.ctaImage} />
    </div>
  );
};

export default ServiceDetailPage;
