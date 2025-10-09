// In app/components/about/AccreditationsSection.tsx
import React from 'react';
import Image from 'next/image';

const accreditations = [
  { 
    src: '/images/Jci_logo.png', 
    alt: 'Joint Commission International Accreditation',
    width: 250,
    height: 250
  },
  { 
    src: '/images/ISO 9001 Logo.jpeg', 
    alt: 'ISO 9001 Certification',
    width: 2047,
    height: 2048
  },
  { 
    src: '/images/Logo_of_Ministry_of_Health_(Turkey).png', 
    alt: 'Turkish Ministry of Health Approval',
    width: 5150,
    height: 5150
  },
];

const AccreditationsSection = () => {
  // Fixed height for all logos - width will adjust automatically
  const fixedHeight = 100;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">Our Commitment to Quality & Safety</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">Your safety is our highest priority. We are proud to work with facilities that hold the highest international standards of medical care and patient safety.</p>
        </div>

        {/* Simple flexbox - same height, auto width based on aspect ratio */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 max-w-5xl mx-auto">
          {accreditations.map((acc) => {
            // Calculate proportional width based on fixed height
            const calculatedWidth = (acc.width / acc.height) * fixedHeight;
            
            return (
              <div 
                key={acc.alt} 
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={acc.src}
                  alt={acc.alt}
                  width={calculatedWidth}
                  height={fixedHeight}
                  style={{ 
                    height: `${fixedHeight}px`,
                    width: 'auto'
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccreditationsSection;
