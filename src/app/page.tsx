import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import ServicesHighlight from './components/home/ServicesHighlight';
import TestimonialsSection from './components/home/TestimonialsSection';
import CTASection from './components/home/CTASection';
import AnimatedSection from './components/ui/AnimatedSection';
import WhyTurkeyHome from './components/home/WhyTurkeyHome';

export default function Home() {
  return (
    <main>
      <HeroSection />

      <AnimatedSection>
        <FeaturesSection />
      </AnimatedSection>

      <AnimatedSection>
        <WhyTurkeyHome />
      </AnimatedSection>

      <AnimatedSection>
        <ServicesHighlight />
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection>
        <CTASection />
      </AnimatedSection>
    </main>
  );
}
