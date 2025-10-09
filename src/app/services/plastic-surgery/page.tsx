// In app/services/plastic-surgery/page.tsx
import React from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import ProcedureCard from '@/app/components/services/ProcedureCard';
import ServiceCTA from '@/app/components/services/ServiceCTA';

const procedures = [
  { title: "Rhinoplasty", href: "/services/rhinoplasty" },
  { title: "Breast Augmentation", href: "/services/breast-augmentation" },
  { title: "Breast Lift", href: "/services/breast-lift" },
  { title: "Breast Reduction", description: "Alleviates discomfort by creating a more proportionate breast size.", href: "/services/breast-reduction" },
  { title: "Tummy Tuck (Abdominoplasty)", href: "/services/tummy-tuck" },
  { title: "BBL (Brazilian Butt Lift)", href: "/services/bbl" },
  { title: "Vaser Liposuction", href: "/services/vaser-liposuction" },
  { title: "Mummy Makeover", href: "/services/mummy-makeover" },
  { title: "Facelift", href: "/services/facelift" },
  { title: "Gynecomastia", href: "/services/gynecomastia" },
  { title: "Otoplasty (Ear Surgery)", href: "/services/otoplasty" },
  { title: "Arm Lift", href: "/services/arm-lift" },
  { title: "Thigh Lift", href: "/services/thigh-lift" },
  { title: "Genital Rejuvenation", href: "/services/genital-rejuvenation" },
  { title: "Penis Enlargement", href: "/services/penis-enlargement" },
  { title: "Scar Removal", href: "/services/scar-removal" },
  { title: "Mole Removal", href: "/services/mole-removal" },
];

const PlasticSurgeryCategoryPage = () => {
  return (
    <div>
      <ServiceHero
        title="Plastic & Aesthetic Surgery"
        subtitle="Discover a new you with our world-class cosmetic procedures in Turkey."
        backgroundImageUrl="/images/plastic-surgery-hero.jpg" // AI: Find a suitable, elegant image for aesthetic surgery
      />

      <section className="bg-brand-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-lora text-3xl font-bold text-brand-dark">Mastering the Art of Aesthetics</h2>
            <p className="mt-4 text-brand-text">
              Our team of board-certified plastic surgeons combines artistic vision with surgical precision to deliver natural-looking, beautiful results. Whether you&apos;re seeking to enhance your features, contour your body, or restore a youthful appearance, we offer a comprehensive suite of procedures tailored to your unique goals.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {procedures.map((proc) => (
              <ProcedureCard
                key={proc.title}
                title={proc.title}
                href={proc.href}
                imageUrl="/images/placeholder-procedure.jpg"
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA />
    </div>
  );
};

export default PlasticSurgeryCategoryPage;
