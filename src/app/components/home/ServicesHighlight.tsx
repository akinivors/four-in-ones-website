import ServiceCard from './ServiceCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesHighlight() {
  const services = [
    {
      title: 'Plastic Surgery',
      imageUrl: '/images/plastic-surgery.jpg',
      href: '/services/plastic-surgery'
    },
    {
      title: 'Obesity Surgery',
      imageUrl: '/images/obesity-surgery.jpg',
      href: '/services/obesity-surgery'
    },
    {
      title: 'Hair Transplant',
      imageUrl: '/images/hair-transplant.jpg',
      href: '/services/hair-transplant'
    },
    {
      title: 'IVF Treatment',
      imageUrl: '/images/ivf-baby.jpg',
      href: '/services/ivf-treatment'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-lora font-bold text-brand-dark mb-6">
            Explore Our Premier Services
          </h2>
          <p className="text-lg font-inter text-brand-text max-w-3xl mx-auto leading-relaxed">
            Discover world-class medical treatments and procedures delivered by internationally 
            accredited specialists in state-of-the-art facilities across Turkey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageUrl={service.imageUrl}
              href={service.href}
            />
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-orange px-8 py-3 font-semibold text-brand-orange transition-colors hover:bg-brand-orange hover:text-white"
          >
            <span>View All Services</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
