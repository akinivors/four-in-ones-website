// In app/services/obesity-surgery/page.tsx
'use client';
import React from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import WhyTurkeyBariatric from '@/app/components/services/WhyTurkeyBariatric';
import ServiceCTA from '@/app/components/services/ServiceCTA';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const procedures = [
  {
    title: "Sleeve Gastrectomy",
    href: "/services/sleeve-gastrectomy",
    description: "Remove 80% of the stomach for lasting weight loss",
    image: "/images/sleeve-gastrectomy-hero.webp",
  },
  {
    title: "Gastric Bypass",
    href: "/services/gastric-bypass",
    description: "Reroute digestion for maximum results",
    image: "/images/gastric-bypass-hero.jpg",
  },
  {
    title: "Gastric Balloon",
    href: "/services/gastric-balloon",
    description: "Non-surgical temporary weight loss solution",
    image: "/images/gastric-balloon-hero.png",
  },
  {
    title: "Gastric Botox",
    href: "/services/gastric-botox",
    description: "Minimally invasive appetite control",
    image: "/images/gastric-botox-hero.jpg",
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {procedures.map((proc) => (
              <Link
                key={proc.title}
                href={proc.href}
                className="group flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover:border-brand-teal hover:shadow-lg transition-all"
              >
                <div>
                  <h4 className="font-lora text-xl font-semibold text-brand-dark group-hover:text-brand-teal transition-colors">{proc.title}</h4>
                  <p className="text-sm text-brand-text/70 mt-1">{proc.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-brand-teal group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyTurkeyBariatric />

      <ServiceCTA imageUrl="/images/obesity-surgery-2.jpg" />
    </div>
  );
};

export default ObesitySurgeryCategoryPage;
