// In app/services/obesity-surgery/page.tsx
import React from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import ProcedureCard from '@/app/components/services/ProcedureCard';
import ServiceCTA from '@/app/components/services/ServiceCTA';

const procedures = [
  {
    title: "Sleeve Gastrectomy",
    href: "/services/sleeve-gastrectomy",
  },
  {
    title: "Gastric Bypass",
    href: "/services/gastric-bypass",
  },
  {
    title: "Gastric Balloon",
    href: "/services/gastric-balloon",
  },
  {
    title: "Gastric Botox",
    href: "/services/gastric-botox",
  }
];

const ObesitySurgeryCategoryPage = () => {
  return (
    <div>
      <ServiceHero
        title="Obesity Surgery (Bariatric)"
        subtitle="Life-changing solutions for long-term weight management and improved health."
        backgroundImageUrl="/images/obesity-surgery-2.jpg"
      />

      <section className="bg-brand-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-lora text-3xl font-bold text-brand-dark">Comprehensive Bariatric Care</h2>
            <p className="mt-4 text-brand-text">
              Bariatric surgery is a powerful tool for individuals who have struggled with severe obesity. These procedures are designed to help you achieve significant, long-term weight loss by altering your digestive system, which helps limit food intake and promotes a feeling of fullness. Our team is dedicated to guiding you toward the solution that best fits your health profile and goals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      <ServiceCTA imageUrl="/images/obesity-surgery-2.jpg" />
    </div>
  );
};

export default ObesitySurgeryCategoryPage;
