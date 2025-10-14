// In app/components/services/SmileGallery.tsx
"use client";
import React from 'react';
import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

interface SmileGalleryProps {
  beforeImage: string;
  afterImage: string;
}

const SmileGallery = ({ beforeImage, afterImage }: SmileGalleryProps) => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-lora text-4xl font-bold text-brand-dark mb-12">See the Transformation</h2>
          <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-white">
            <BeforeAfterSlider
              firstImage={{ imageUrl: beforeImage, alt: "Before treatment" }}
              secondImage={{ imageUrl: afterImage, alt: "After treatment" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmileGallery;
