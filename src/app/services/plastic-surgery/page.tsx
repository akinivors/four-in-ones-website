// In app/services/plastic-surgery/page.tsx
'use client';
import React, { useState } from 'react';
import ServiceHero from '@/app/components/services/ServiceHero';
import WhyTurkeyPlasticSurgery from '@/app/components/services/WhyTurkeyPlasticSurgery';
import ServiceCTA from '@/app/components/services/ServiceCTA';
import Link from 'next/link';
import { ChevronRight, Star } from 'lucide-react';

// Categorized procedures with featured flag and images
const procedureCategories = {
  featured: [
    { title: "Rhinoplasty", href: "/services/rhinoplasty", description: "Reshape your nose for perfect facial harmony", gradient: "from-brand-teal to-brand-dark", image: "/images/rhinoplasty-hero.jpg" },
    { title: "Breast Augmentation", href: "/services/breast-augmentation", description: "Enhance your natural curves with confidence", gradient: "from-brand-orange to-orange-500", image: "/images/breast-aug-hero.jpg" },
    { title: "Tummy Tuck", href: "/services/tummy-tuck", description: "Achieve a sculpted, toned abdomen", gradient: "from-brand-dark to-brand-teal", image: "/images/tummy-tuck-hero.jpg" },
    { title: "BBL (Brazilian Butt Lift)", href: "/services/bbl", description: "Natural curves, dramatic transformation", gradient: "from-orange-500 to-brand-orange", image: "/images/placeholder-procedure.jpg" },
  ],
  facial: [
    { title: "Facelift", href: "/services/facelift", description: "Turn back time with natural-looking results", image: "/images/placeholder-procedure.jpg" },
    { title: "Otoplasty (Ear Surgery)", href: "/services/otoplasty", description: "Reshape protruding ears", image: "/images/placeholder-procedure.jpg" },
  ],
  breast: [
    { title: "Breast Lift", href: "/services/breast-lift", description: "Restore youthful breast position", image: "/images/breast-lift-hero.jpg" },
    { title: "Breast Reduction", href: "/services/breast-reduction", description: "Relief from discomfort, balanced proportions", image: "/images/placeholder-procedure.jpg" },
  ],
  body: [
    { title: "Vaser Liposuction", href: "/services/vaser-liposuction", description: "Precision fat removal technology", image: "/images/placeholder-procedure.jpg" },
    { title: "Mummy Makeover", href: "/services/mummy-makeover", description: "Comprehensive post-pregnancy restoration", image: "/images/placeholder-procedure.jpg" },
    { title: "Arm Lift", href: "/services/arm-lift", description: "Tone and tighten upper arms", image: "/images/placeholder-procedure.jpg" },
    { title: "Thigh Lift", href: "/services/thigh-lift", description: "Sculpt smoother, firmer thighs", image: "/images/placeholder-procedure.jpg" },
  ],
  mens: [
    { title: "Gynecomastia", href: "/services/gynecomastia", description: "Male breast reduction for a masculine chest", image: "/images/placeholder-procedure.jpg" },
    { title: "Penis Enlargement", href: "/services/penis-enlargement", description: "Enhance size and confidence", image: "/images/placeholder-procedure.jpg" },
  ],
  intimate: [
    { title: "Genital Rejuvenation", href: "/services/genital-rejuvenation", description: "Restore comfort and confidence", image: "/images/placeholder-procedure.jpg" },
  ],
  skin: [
    { title: "Scar Removal", href: "/services/scar-removal", description: "Minimize visible scarring", image: "/images/placeholder-procedure.jpg" },
    { title: "Mole Removal", href: "/services/mole-removal", description: "Safe cosmetic mole removal", image: "/images/placeholder-procedure.jpg" },
  ],
};

const PlasticSurgeryCategoryPage = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <div>
      <ServiceHero
        title="Plastic & Aesthetic Surgery"
        subtitle="Discover a new you with our world-class cosmetic procedures in Turkey."
        backgroundImageUrl="/images/plastic-surgery-category.webp"
      />

      {/* Featured Procedures Section */}
      <section className="bg-gradient-to-b from-brand-background to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4 fill-current" />
              Most Popular
            </div>
            <h2 className="font-lora text-3xl md:text-4xl font-bold text-brand-dark">Featured Procedures</h2>
            <p className="mt-4 text-brand-text">
              Our most sought-after treatments, delivering transformative results with proven excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {procedureCategories.featured.map((proc) => (
              <Link
                key={proc.title}
                href={proc.href}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${proc.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-lora text-2xl font-bold text-brand-dark group-hover:text-brand-teal transition-colors">
                        {proc.title}
                      </h3>
                      <p className="mt-2 text-brand-text/80">{proc.description}</p>
                    </div>
                    <div className={`ml-4 w-12 h-12 rounded-full bg-gradient-to-br ${proc.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      <ChevronRight className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center text-brand-teal font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Procedures Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-lora text-3xl md:text-4xl font-bold text-brand-dark">Complete Procedure Guide</h2>
            <p className="mt-4 text-brand-text">
              Our team of board-certified plastic surgeons combines artistic vision with surgical precision to deliver natural-looking, beautiful results tailored to your unique goals.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'facial', 'breast', 'body', 'mens', 'intimate', 'skin'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-brand-teal text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-brand-text hover:bg-gray-200'
                }`}
              >
                {tab === 'all' ? 'All Procedures' : tab === 'mens' ? "Men's" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Procedures by Category */}
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Facial Procedures */}
            {(activeTab === 'all' || activeTab === 'facial') && (
              <div className="space-y-6">
                <h3 className="font-lora text-2xl font-bold text-brand-dark border-l-4 border-brand-teal pl-4">Facial Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {procedureCategories.facial.map((proc) => (
                    <Link
                      key={proc.title}
                      href={proc.href}
                      className="group flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-brand-teal hover:shadow-lg transition-all"
                    >
                      <div>
                        <h4 className="font-semibold text-lg text-brand-dark group-hover:text-brand-teal transition-colors">{proc.title}</h4>
                        <p className="text-sm text-brand-text/70 mt-1">{proc.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-brand-teal group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Breast Procedures */}
            {(activeTab === 'all' || activeTab === 'breast') && (
              <div className="space-y-6">
                <h3 className="font-lora text-2xl font-bold text-brand-dark border-l-4 border-brand-orange pl-4">Breast Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {procedureCategories.breast.map((proc) => (
                    <Link
                      key={proc.title}
                      href={proc.href}
                      className="group flex items-center justify-between p-6 bg-gradient-to-r from-orange-50/50 to-white rounded-xl border border-gray-200 hover:border-brand-orange hover:shadow-lg transition-all"
                    >
                      <div>
                        <h4 className="font-semibold text-lg text-brand-dark group-hover:text-brand-orange transition-colors">{proc.title}</h4>
                        <p className="text-sm text-brand-text/70 mt-1">{proc.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-brand-orange group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Body Contouring */}
            {(activeTab === 'all' || activeTab === 'body') && (
              <div className="space-y-6">
                <h3 className="font-lora text-2xl font-bold text-brand-dark border-l-4 border-brand-dark pl-4">Body Contouring</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {procedureCategories.body.map((proc) => (
                    <Link
                      key={proc.title}
                      href={proc.href}
                      className="group flex items-center justify-between p-6 bg-gradient-to-r from-blue-50/50 to-white rounded-xl border border-gray-200 hover:border-brand-dark hover:shadow-lg transition-all"
                    >
                      <div>
                        <h4 className="font-semibold text-lg text-brand-dark group-hover:text-brand-dark/80 transition-colors">{proc.title}</h4>
                        <p className="text-sm text-brand-text/70 mt-1">{proc.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-brand-dark group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Men's Procedures */}
            {(activeTab === 'all' || activeTab === 'mens') && (
              <div className="space-y-6">
                <h3 className="font-lora text-2xl font-bold text-brand-dark border-l-4 border-brand-teal pl-4">Men&apos;s Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {procedureCategories.mens.map((proc) => (
                    <Link
                      key={proc.title}
                      href={proc.href}
                      className="group flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-brand-teal hover:shadow-lg transition-all"
                    >
                      <div>
                        <h4 className="font-semibold text-lg text-brand-dark group-hover:text-brand-teal transition-colors">{proc.title}</h4>
                        <p className="text-sm text-brand-text/70 mt-1">{proc.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-brand-teal group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Intimate Procedures */}
            {(activeTab === 'all' || activeTab === 'intimate') && (
              <div className="space-y-6">
                <h3 className="font-lora text-2xl font-bold text-brand-dark border-l-4 border-orange-400 pl-4">Intimate Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {procedureCategories.intimate.map((proc) => (
                    <Link
                      key={proc.title}
                      href={proc.href}
                      className="group flex items-center justify-between p-6 bg-gradient-to-r from-orange-50/50 to-white rounded-xl border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all"
                    >
                      <div>
                        <h4 className="font-semibold text-lg text-brand-dark group-hover:text-orange-600 transition-colors">{proc.title}</h4>
                        <p className="text-sm text-brand-text/70 mt-1">{proc.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Skin Procedures */}
            {(activeTab === 'all' || activeTab === 'skin') && (
              <div className="space-y-6">
                <h3 className="font-lora text-2xl font-bold text-brand-dark border-l-4 border-brand-orange pl-4">Skin Treatments</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {procedureCategories.skin.map((proc) => (
                    <Link
                      key={proc.title}
                      href={proc.href}
                      className="group flex items-center justify-between p-6 bg-gradient-to-r from-orange-50/50 to-white rounded-xl border border-gray-200 hover:border-brand-orange hover:shadow-lg transition-all"
                    >
                      <div>
                        <h4 className="font-semibold text-lg text-brand-dark group-hover:text-brand-orange transition-colors">{proc.title}</h4>
                        <p className="text-sm text-brand-text/70 mt-1">{proc.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-brand-orange group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <WhyTurkeyPlasticSurgery />

      <ServiceCTA imageUrl="/images/plastic-surgery-category.webp" />
    </div>
  );
};

export default PlasticSurgeryCategoryPage;
