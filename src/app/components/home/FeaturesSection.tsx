import { Stethoscope, PackageCheck, HeartHandshake } from 'lucide-react';
import SectionDivider from '../ui/SectionDivider';

export default function FeaturesSection() {
  const features = [
    {
      icon: Stethoscope,
      title: 'Expert Medical Teams',
      description: 'Access our network of internationally accredited surgeons and medical experts dedicated to delivering exceptional results.',
    },
    {
      icon: PackageCheck,
      title: 'All-Inclusive Packages',
      description: 'Our transparent packages cover your treatment, luxury accommodation, and VIP transfers for a seamless, stress-free experience.',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Patient Care',
      description: 'From your first consultation to your recovery, a dedicated care coordinator will be with you every step of the way.',
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-lora font-bold text-brand-dark">
            Your Trusted Partner in Health & Wellness
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <IconComponent className="h-12 w-12 text-brand-dark" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-lora font-bold text-brand-dark mb-4">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="font-inter text-brand-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
      <SectionDivider />
    </section>
  );
}
