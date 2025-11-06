import React from 'react';
import Image from 'next/image';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

// Updated array with provider website links
const insuranceProviders = [
  { 
    name: 'Medical Travel Shield', 
    src: '/images/logos/medicaltravelshieldinsurance.webp',
    href: 'https://www.medicaltravelshield.com/' 
  },
  { 
    name: 'Allianz', 
    src: '/images/logos/allianzinsurance.png',
    href: 'https://www.allianz.com/' 
  },
  { 
    name: 'AXA', 
    src: '/images/logos/axainsurance.png',
    href: 'https://www.axa.com/' 
  },
  { 
    name: 'Anadolu Sigorta', 
    src: '/images/logos/anadoluinsurance.png',
    href: 'https://www.anadolusigorta.com.tr/' 
  },
  { 
    name: 'AK Sigorta', 
    src: '/images/logos/aksigortainsurance.png',
    href: 'https://www.aksigorta.com.tr/' 
  },
];

const InsuranceProviders = () => {
  // We duplicate the array to create the seamless scrolling effect
  const logos = [...insuranceProviders, ...insuranceProviders];

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        
        {/* New 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Column 1: Text & CTA */}
          <div className="max-w-lg">
            <h2 className="font-lora text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              Your Peace of Mind, Assured.
            </h2>
            <p className="text-lg text-brand-text leading-relaxed mb-8">
              We recommend dedicated medical travel insurance for all patients. 
              Providers like these specialize in coverage for elective 
              procedures abroad, giving you 100% peace of mind.
            </p>
            <div className="bg-brand-background p-6 rounded-xl border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="bg-brand-teal text-white p-3 rounded-lg mt-1">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-lora text-xl font-bold text-brand-dark mb-2">
                    Get Your Quote
                  </h3>
                  <p className="text-brand-text mb-4 text-sm">
                    We recommend "Medical Travel Shield" for their specialized policies.
                  </p>
                  <a
                    href="https://www.medicaltravelshield.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold py-3 px-6 rounded-lg hover:brightness-110 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Get a Complication Insurance Quote
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Animated Logo Marquee */}
          <div className="relative w-full overflow-hidden">
            {/* Fading Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white z-10"></div>

            {/* Scrolling Track */}
            <div className="flex w-max animate-scroll">
              {logos.map((provider, index) => (
                <a
                  key={index}
                  href={provider.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${provider.name}`}
                  className="group flex-shrink-0"
                >
                  <div className="relative w-56 h-28 mx-8 flex items-center justify-center">
                    <Image
                      src={provider.src}
                      alt={`${provider.name} logo`}
                      fill
                      className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InsuranceProviders;