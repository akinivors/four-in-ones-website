// In app/services/[slug]/page.tsx
import ServiceHero from '@/app/components/services/ServiceHero';
import ServiceOverview from '@/app/components/services/ServiceOverview';
import PackageBanner from '@/app/components/common/PackageBanner';
import ServiceDetails from '@/app/components/services/ServiceDetails';
import BenefitsSection from '@/app/components/services/BenefitsSection';
import PatientJourney from '@/app/components/services/PatientJourney';
import ServiceFAQ from '@/app/components/services/ServiceFAQ';
import ServiceCTA from '@/app/components/services/ServiceCTA';
import { getServiceBySlug } from '@/lib/servicesData';
import { notFound } from 'next/navigation';
import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { ServicePageSchema } from '@/app/components/common/StructuredData';

// --- DYNAMIC METADATA FUNCTION ---
type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Fetch service data
  const service = getServiceBySlug(params.slug);

  // Handle service not found
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service is not available.',
    };
  }

  // Get parent metadata (from layout.tsx)
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${service.hero.title} | Get Beauty and Health`,
    description: service.hero.subtitle,
    // Set OpenGraph (social media share) images
    openGraph: {
      title: `${service.hero.title} | Get Beauty and Health`,
      description: service.hero.subtitle,
      images: [service.hero.backgroundImageUrl, ...previousImages],
    },
  };
}
// --- END NEW FUNCTION ---


// --- Your Page Component (No Changes) ---
const ServiceDetailPage = ({ params }: { params: { slug: string } }) => {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    notFound();
  }

  return (
    <div>
      <ServicePageSchema service={service} />
      
      <ServiceHero
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        backgroundImageUrl={service.hero.backgroundImageUrl}
      />
      <ServiceOverview
        overviewImageUrl={service.overview.overviewImageUrl}
        facts={service.overview.facts}
      />
      <PackageBanner />
      {service.benefits && <BenefitsSection benefits={service.benefits} />}
      
      <ServiceDetails
        tabs={service.details.tabs}
        risks={service.risks} 
      />

      <PatientJourney />
      
      <ServiceFAQ
        faqData={service.faq}
      />
      <ServiceCTA imageUrl={service.ctaImageUrl || service.ctaImage} />
    </div>
  );
};

export default ServiceDetailPage;