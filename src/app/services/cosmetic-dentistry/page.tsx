// In app/services/cosmetic-dentistry/page.tsx
import { getServiceBySlug } from '../../../../lib/servicesData';
import { notFound } from 'next/navigation';
import ServiceHero from '@/app/components/services/ServiceHero';
import ServiceOverview from '@/app/components/services/ServiceOverview';
import BenefitsSection from '@/app/components/services/BenefitsSection';
import SmileGallery from '@/app/components/services/SmileGallery';
import InteractiveDentalGrid from '@/app/components/services/InteractiveDentalGrid';
import MaterialsShowcase from '@/app/components/services/MaterialsShowcase';
import RisksSection from '@/app/components/services/RisksSection';
import PatientJourney from '@/app/components/services/PatientJourney';
import ServiceFAQ from '@/app/components/services/ServiceFAQ';
import ServiceCTA from '@/app/components/services/ServiceCTA';

const CosmeticDentistryPage = () => {
  const service = getServiceBySlug('cosmetic-dentistry');
  
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
      
      {service.overview && (
        <ServiceOverview
          overviewImageUrl={service.overview.overviewImageUrl}
          facts={service.overview.facts}
        />
      )}
      
      {service.benefits && <BenefitsSection benefits={service.benefits} gridCols={2} />}
      
      <SmileGallery 
        beforeImage="/images/smile-before.jpg" 
        afterImage="/images/smile-after.jpg" 
      />
      
      <InteractiveDentalGrid />
      
      <MaterialsShowcase />
      
      {service.risks && <RisksSection risks={service.risks} />}
      
      <PatientJourney />
      
      {service.faq && service.faq.length > 0 && (
        <ServiceFAQ faqData={service.faq} />
      )}
      
      <ServiceCTA imageUrl={service.ctaImageUrl} />
    </div>
  );
};

export default CosmeticDentistryPage;
