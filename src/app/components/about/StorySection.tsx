// In app/components/about/StorySection.tsx
import React from 'react';
import Image from 'next/image';

const StorySection = () => {
  // AI: Please find a high-quality, professional image of a warm, caring doctor-patient consultation.
  const storyImageUrl = "/images/about-us-story.jpg";

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={storyImageUrl}
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div>
            <h2 className="font-lora text-3xl font-bold text-brand-dark">Our Story: Health, Home, and Harmony</h2>
            <p className="mt-4 font-semibold text-brand-text text-lg">
              FOUR IN ONE&apos;S was founded on a simple yet powerful belief: world-class healthcare and life-changing opportunities should be accessible to everyone, without compromise.
            </p>
            <p className="mt-4 text-brand-text">
              We saw firsthand the challenges patients faced when seeking medical care abroad—navigating complex systems, language barriers, and uncertain quality. We also saw the immense potential of Turkey as a global hub for both medical excellence and strategic real estate investment.
            </p>
            <p className="mt-4 text-brand-text">
              We created FOUR IN ONE&apos;S to bridge that gap. Our mission is to provide a seamless, stress-free journey where every detail, from your surgical procedure to your accommodation, is managed with precision, empathy, and an unwavering commitment to your well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
