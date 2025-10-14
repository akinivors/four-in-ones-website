# Service Page Image Naming Convention

## Standard Image Pattern for All Service Pages

For each service page, we use a consistent naming pattern for images:

### Required Images per Service:

1. **Hero Image** (`[service-slug]-hero.jpg`)
   - Used in: **3 INSTANCES**
     1. Hero section at the top of the page
     2. CTA section (via `ctaImage` field)
     3. Hover preview on category pages (plastic surgery, etc.)
   - Location: `/public/images/[service-slug]-hero.jpg`
   - Example: `/public/images/rhinoplasty-hero.jpg`

2. **Overview Image** (`[service-slug]-overview.jpg` or `.webp`)
   - Used in: **1 INSTANCE**
     - "The Procedure at a Glance" section
   - Location: `/public/images/[service-slug]-overview.jpg`
   - Example: `/public/images/rhinoplasty-overview.jpg`

### Implementation Pattern:

**Image 1 (Hero)**: Used 3 times
- `hero.backgroundImageUrl` → Hero section
- `ctaImage` → CTA section  
- Category page hover preview

**Image 2 (Overview)**: Used 1 time
- `overview.overviewImageUrl` → Overview/Glance section

### Implementation in servicesData.ts:

```typescript
{
  slug: "service-name",
  hero: {
    title: "Service Title",
    subtitle: "Service subtitle",
    backgroundImageUrl: "/images/service-name-hero.jpg", // IMAGE 1 - Instance 1
  },
  overview: {
    overviewImageUrl: "/images/service-name-overview.jpg", // IMAGE 2 - Instance 1
    facts: [...]
  },
  benefits: [...],
  ctaImage: "/images/service-name-hero.jpg", // IMAGE 1 - Instance 2 (reuses hero)
  details: {...},
  // ... rest of configuration
}
```

### Category Page Hover Preview:

In category pages (plastic-surgery/page.tsx, etc.), use Image 1 for hover:

```typescript
const procedureCategories = {
  featured: [
    { 
      title: "Service Name", 
      href: "/services/service-name",
      image: "/images/service-name-hero.jpg" // IMAGE 1 - Instance 3
    },
  ],
}
```

## Current Services Using This Pattern:

✅ **Rhinoplasty** (CONFIRMED STANDARD)
- Image 1 (Hero): `/images/rhinoplasty-hero.jpg` (rhinoplasty1.jpg)
  - Hero section ✓
  - CTA section ✓
  - Hover preview ✓
- Image 2 (Overview): `/images/rhinoplasty-overview.jpg` (rhinoplasty2.jpg)
  - Overview section ✓

✅ **Eye Surgery**
- Hero/CTA/Hover: `/images/eye-surgery-hero.jpg` (eyesurgery1.jpg)
- Overview: `/images/eye-surgery-overview.jpg` (eyesurgery2.webp)

✅ **Sleeve Gastrectomy**
- Hero/CTA/Hover: `/images/sleeve-gastrectomy-hero.webp`
- Overview: `/images/sleeve-gastrectomy-overview.jpg`

✅ **Gastric Bypass**
- Hero/CTA/Hover: `/images/gastric-bypass-hero.jpg`
- Overview: `/images/gastric-bypass-overview.jpg`

✅ **Gastric Balloon**
- Hero/CTA/Hover: `/images/gastric-balloon-hero.png`
- Overview: `/images/gastric-balloon-overview.jpg`

✅ **Gastric Botox**
- Hero/CTA/Hover: `/images/gastric-botox-hero.jpg`
- Overview: `/images/gastric-botox-overview.png`

✅ **Scalp Hair Transplant**
- Hero/CTA/Hover: `/images/hair-transplant-hero.jpg`
- Overview: `/images/hair-transplant-overview.jpg`

## TODO: Apply Pattern to Existing Services

The following services need to be updated to follow this convention:
- [ ] Hair Transplant
- [ ] Rhinoplasty
- [ ] Breast Augmentation
- [ ] Breast Lift
- [ ] Tummy Tuck
- [ ] Cosmetic Dentistry
- [ ] All obesity surgery procedures

## How to Add New Service Images:

1. **Prepare 2 images:**
   - Image 1: Hero/CTA image (high-quality, wide landscape)
   - Image 2: Overview/Glance image (procedural or facility shot)

2. **Name them according to pattern:**
   - `[service-slug]-hero.jpg` (or .webp)
   - `[service-slug]-overview.jpg` (or .webp)

3. **Place in `/public/images/` directory**

4. **Update servicesData.ts:**
   - Set `hero.backgroundImageUrl` to hero image
   - Set `overview.overviewImageUrl` to overview image
   - Set `ctaImage` to hero image (same as hero.backgroundImageUrl)

## Benefits of This Pattern:

- ✅ Consistent naming across all services
- ✅ Easy to locate images for any service
- ✅ Reuses hero image for CTA (reduces file bloat)
- ✅ Clear separation between hero and overview content
- ✅ Scalable for future services
