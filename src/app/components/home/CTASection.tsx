import Image from 'next/image';
import SectionDivider from '../ui/SectionDivider';

export default function CTASection() {
  return (
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl font-lora font-bold text-brand-dark mb-6">
              Ready to Start Your Journey?
            </h2>
            
            {/* Paragraph */}
            <p className="text-lg font-inter text-brand-text leading-relaxed mb-8">
              Contact us today for a free, no-obligation quote and a personalized treatment 
              plan designed just for you.
            </p>
            
            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-brand-orange text-white font-inter font-bold px-10 py-4 rounded-lg text-lg hover:brightness-110 hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Get Your Free Quote
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <Image
              src="/images/doctor-patient-consultation.jpg"
              alt="Doctor consulting with patient in modern medical facility"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <SectionDivider color="#1A4D64" />
    </section>
  );
}
