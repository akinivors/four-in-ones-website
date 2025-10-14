// In app/components/journey/PackageInclusions.tsx
import React from 'react';
import { Stethoscope, BedDouble, Car, Users, Plane, HeartHandshake } from 'lucide-react';

const inclusions = [
  { icon: Stethoscope, title: "Medical Procedure", description: "All costs related to your surgery, including surgeon fees, hospital fees, and anesthesia." },
  { icon: BedDouble, title: "Luxury Accommodation", description: "Your stay in a premium 4 or 5-star hotel, ensuring a comfortable and relaxing recovery." },
  { icon: Car, title: "VIP Transfers", description: "All ground transportation between the airport, your hotel, and the clinic in a private, comfortable vehicle." },
  { icon: Users, title: "Personal Host & Translator", description: "A dedicated host will be available 24/7 to assist you with all your needs and provide translation services." },
  { icon: Plane, title: "Flight Coordination", description: "We assist in finding and coordinating the best flight options for your travel dates." },
  { icon: HeartHandshake, title: "Comprehensive Aftercare", description: "Includes all post-operative medications, check-ups, and ongoing support from our medical team." },
];

const PackageInclusions = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">What&apos;s Included in Your Package?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">We believe in complete transparency. Our all-inclusive packages are designed to cover every aspect of your journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {inclusions.map((item) => (
            <div key={item.title} className="bg-brand-background p-6 rounded-lg text-center">
              <div className="bg-brand-teal/10 rounded-full p-3 w-fit mx-auto mb-4">
                <item.icon className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="font-lora text-xl font-bold text-brand-dark">{item.title}</h3>
              <p className="mt-2 text-brand-text text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageInclusions;
