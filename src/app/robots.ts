// In src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = 'https://getbeautyandhealth.com/sitemap.xml';

  return {
    rules: {
      userAgent: '*', // Applies to all crawlers (e.g., Googlebot, Bingbot)
      allow: '/',      // Allow crawlers to visit all pages
      disallow: [      // Disallow crawlers from these specific routes
        '/api/',       // Don't crawl our API routes
      ],
    },
    sitemap: sitemapUrl, // Tell crawlers where to find the sitemap
  };
}

