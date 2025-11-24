// In app/components/journey/PersonalCareSection.tsx
import React from 'react';
import Image from 'next/image';

const PersonalCareSection = () => {
  // Professional nurse photo for patient care section
  const imageUrl = "/images/nurse.jpg";

  return (
    <section className="bg-brand-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Image */}
          <div className="w-full h-96 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imageUrl}
              alt="Personal Patient Coordinator"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="text-left">
            <h2 className="font-lora text-3xl font-bold text-brand-dark">A Personal Host, Every Step of the Way</h2>
            <p className="mt-4 text-brand-text">
              You are never alone on your journey. From the moment you land, a dedicated personal host will be your guide, translator, and advocate, ensuring a seamless and stress-free experience.
            </p>
            <p className="mt-4 text-brand-text">
              Your host manages all your appointments and VIP transfers, provides 24/7 support for any questions or needs, and bridges any language barriers. Their only job is to ensure you feel comfortable, cared for, and completely at ease so you can focus on what matters most: your health and recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalCareSection;
