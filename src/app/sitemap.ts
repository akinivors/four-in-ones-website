// In src/app/sitemap.ts
import { MetadataRoute } from 'next';
// Import your services data, just like your pages do
import { servicesData, Service } from '@/lib/servicesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://getbeautyandhealth.com';

  // 1. Get all your dynamic service pages
  const serviceUrls = (servicesData as Service[]).map((service) => {
    return {
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const, // How often this page might change
      priority: 0.8, // Give it a high priority (max is 1.0)
    };
  });

  // 2. Define all your static pages
  const staticPageSlugs = [
    '', // Homepage
    '/about',
    '/contact',
    '/faq',
    '/health-form',
    '/insurance',
    '/journey',
    '/services',
    '/services/cosmetic-dentistry',
    '/services/hair-transplant',
    '/services/obesity-surgery',
    '/services/plastic-surgery',
  ];

  const staticUrls = staticPageSlugs.map((slug) => {
    return {
      url: `${baseUrl}${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: slug === '' ? 1.0 : 0.7, // Homepage gets top priority
    };
  });

  // 3. Combine them all
  return [
    ...staticUrls,
    ...serviceUrls,
  ];
}

