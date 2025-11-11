// In src/app/components/common/StructuredData.tsx
import React from 'react';
// We'll need to import the types from your lib files
import { Service } from '@/lib/servicesData';
import { FAQItem } from '@/lib/faqData';

/**
 * This component generates the JSON-LD schema for a single service page.
 * It includes schema for the MedicalProcedure AND the page's specific FAQs.
 */
export const ServicePageSchema = ({ service }: { service: Service }) => {
  // 1. Create the FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((faq) => {
      return {
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      };
    }),
  };

  // 2. Create the MedicalProcedure schema
  let procedureType = 'MedicalProcedure';
  if (service.slug.includes('surgery') || service.slug.includes('rhinoplasty') || service.slug.includes('lift')) {
    procedureType = 'SurgicalProcedure';
  } else if (service.slug.includes('dental') || service.slug.includes('veneers')) {
    procedureType = 'Dental';
  }

  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': procedureType,
    name: service.hero.title,
    description: service.hero.subtitle,
    url: `https://getbeautyandhealth.com/services/${service.slug}`,
    // Simple logic to add body location based on keywords
    bodyLocation: service.slug.includes('rhinoplasty') ? 'Nose' :
                  service.slug.includes('breast') ? 'Breast' :
                  service.slug.includes('hair') ? 'Hair' :
                  service.slug.includes('tummy') ? 'Abdomen' :
                  service.slug.includes('bbl') ? 'Buttocks' :
                  service.slug.includes('dental') ? 'Mouth' :
                  service.slug.includes('eye') ? 'Eye' : 'Varies',
    // We tell Google about your organization
    provider: {
      '@type': 'Organization',
      name: 'Get Beauty and Health',
      url: 'https://getbeautyandhealth.com'
    }
  };

  // We can combine multiple schemas in an array
  const allSchemas = [faqSchema, procedureSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
    />
  );
};

/**
 * This component generates the JSON-LD schema for your main FAQ page.
 */
export const FaqPageSchema = ({ faqs }: { faqs: FAQItem[] }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => {
      return {
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

/**
 * This component generates the JSON-LD schema for your entire organization.
 * It should be placed in the root layout to appear on every page.
 */
export const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Get Beauty and Health',
    url: 'https://getbeautyandhealth.com',
    logo: 'https://getbeautyandhealth.com/logo-main.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+447359104606',
        contactType: 'Customer Service',
        areaServed: 'GB', // Great Britain
        availableLanguage: ['en', 'tr'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+16302013340',
        contactType: 'Customer Service',
        areaServed: 'US', // United States
        availableLanguage: ['en', 'tr'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida Acapulco 17, Local 7',
      addressLocality: 'Fuengirola',
      addressRegion: 'Málaga',
      addressCountry: 'ES', // Spain
      postalCode: '29640',
    },
    email: 'info@getbeautyandhealth.com',
    sameAs: [
      // "https://www.facebook.com/yourprofile",
      // "https://www.instagram.com/yourprofile",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

