// Services Hub page
'use client';
import React, { useState } from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import InteractiveBodyMap from '@/app/components/services/InteractiveBodyMap';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Scissors,
  Scale,
  Sparkles,
  Smile,
  Eye,
  Bone,
  Stethoscope,
  Syringe,
  Brush,
  ChevronRight,
  Star,
  Heart
} from 'lucide-react';const featuredCategories = [
  {
    title: "Plastic & Aesthetic Surgery",
    description: "17+ procedures for face, breast, and body transformation",
    imageUrl: "/images/plastic-surgery-category.webp",
    href: "/services/plastic-surgery",
    icon: Scissors,
    procedures: "Rhinoplasty, BBL, Tummy Tuck & More"
  },
  {
    title: "Obesity Surgery",
    description: "Life-changing bariatric solutions for lasting weight loss",
    imageUrl: "/images/obesity-surgery-2.jpg",
    href: "/services/obesity-surgery",
    icon: Scale,
    procedures: "Sleeve, Bypass, Balloon & Botox"
  },
  {
    title: "Hair Transplantation",
    description: "Advanced FUE & DHI for scalp, beard & eyebrow restoration",
    imageUrl: "/images/hair-transplant-category.jpg",
    href: "/services/hair-transplant",
    icon: Sparkles,
    procedures: "Scalp, Beard & Eyebrow Solutions"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Complete smile makeovers with cutting-edge techniques",
    imageUrl: "/images/cosmeticdentistry_hero.png",
    href: "/services/cosmetic-dentistry",
    icon: Smile,
    procedures: "Veneers, Implants, Whitening & More"
  },
  {
    title: "IVF & Fertility Treatment",
    description: "Advanced reproductive technology to help you build your family",
    imageUrl: "/images/ivf-baby.jpg",
    href: "/services/ivf-treatment",
    icon: Heart,
    procedures: "IVF, ICSI, Egg Retrieval & Transfer"
  },
];

const additionalServices = [
  {
    title: "General Surgery",
    description: "Wide range of surgical procedures including hernia repair, appendectomy, and abdominal surgery",
    icon: Stethoscope,
    href: "/services/general-surgery"
  },
  {
    title: "Orthopedic Surgery",
    description: "Advanced treatments for bones, joints, and musculoskeletal conditions",
    icon: Bone,
    href: "/services/orthopedic-surgery"
  },
  {
    title: "Eye Surgery",
    description: "LASIK vision correction, eyelid surgery, cataract removal, and comprehensive eye care",
    icon: Eye,
    href: "/services/eye-surgery"
  },
  {
    title: "Mesotherapy",
    description: "Minimally invasive treatment for fat reduction, cellulite, and skin rejuvenation",
    icon: Syringe,
    href: "/services/mesotherapy"
  },
  {
    title: "Micro Scalp Pigmentation",
    description: "Non-surgical solution to create the appearance of fuller, denser hair",
    icon: Brush,
    href: "/services/micro-scalp-pigmentation"
  },
];

const ServicesPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(null);

  return (
    <div>
      <ServiceHero
        title="World-Class Medical Services"
        subtitle="Comprehensive healthcare solutions delivered by Turkey's finest specialists in state-of-the-art facilities."
        backgroundImageUrl="/images/services-hub-hero.jpg" // <-- UPDATED PATH
      />

      {/* Interactive Body Map Section */}
      <InteractiveBodyMap setHighlightedCategory={setHighlightedCategory} />

      {/* Featured Categories - Large Cards */}
      <section className="bg-gradient-to-b from-brand-background to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4 fill-current" />
              Most Popular Services
            </div>
            <h2 className="font-lora text-3xl md:text-4xl font-bold text-brand-dark">Our Featured Specialties</h2>
            <p className="mt-4 max-w-2xl mx-auto text-brand-text">
              From life-changing fertility treatments to transformative cosmetic procedures, explore our most sought-after medical services trusted by thousands of international patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {featuredCategories.map((category, index) => {
              const IconComponent = category.icon;
              // Extract slug from href (e.g., "/services/plastic-surgery" -> "plastic-surgery")
              const categorySlug = category.href.split('/').pop() || '';
              const isHighlighted = highlightedCategory === categorySlug;
              
              return (
                <Link
                  key={category.title}
                  href={category.href}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-80 ${
                    isHighlighted ? 'ring-4 ring-brand-orange scale-105' : ''
                  }`}
                >
                  {/* Background Image */}
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Sophisticated Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/70 to-brand-teal/60 group-hover:from-brand-dark/95 group-hover:to-brand-teal/70 transition-all duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-8">
                    <div>
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:scale-110 group-hover:bg-brand-teal/20 transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-lora text-3xl font-bold text-white mb-3">
                        {category.title}
                      </h3>
                      <p className="text-white/90 text-lg mb-2">{category.description}</p>
                      <p className="text-white/60 text-sm">{category.procedures}</p>
                    </div>
                    
                    <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                      Explore Services
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </div>
                  </div>

                  {/* Subtle Hover Effect Border */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ 
                      scale: hoveredCard === index ? 1 : 0.95,
                      opacity: hoveredCard === index ? 1 : 0 
                    }}
                    className="absolute inset-0 border-2 border-brand-teal/40 rounded-2xl pointer-events-none"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services - Compact Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-lora text-3xl md:text-4xl font-bold text-brand-dark">Additional Specialties</h2>
            <p className="mt-4 max-w-2xl mx-auto text-brand-text">
              Comprehensive medical solutions across multiple disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {additionalServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-brand-teal hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-teal/10 border border-brand-teal/20 mb-4 group-hover:bg-brand-teal group-hover:border-brand-teal transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-lora text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-text/70 mb-4">{service.description}</p>
                  <div className="flex items-center text-brand-teal text-sm font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Turkey Section */}
      <section className="bg-gradient-to-b from-brand-background to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-lora text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Why Choose Turkey for Medical Care?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div>
              <div className="text-4xl font-bold text-brand-teal mb-2">50-70%</div>
              <div className="text-brand-dark font-semibold">Cost Savings</div>
              <p className="text-sm text-brand-text/70 mt-2">Compared to US/EU prices</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-teal mb-2">JCI</div>
              <div className="text-brand-dark font-semibold">Accredited Hospitals</div>
              <p className="text-sm text-brand-text/70 mt-2">International quality standards</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-teal mb-2">500K+</div>
              <div className="text-brand-dark font-semibold">Patients Yearly</div>
              <p className="text-sm text-brand-text/70 mt-2">Medical tourists served</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
