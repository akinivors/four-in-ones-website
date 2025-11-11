// In src/app/components/about/TeamSection.tsx
import React from 'react';
import Image from 'next/image';

// --- UPDATED: Real team members with correct roles ---
const teamMembers = [
  {
    name: "Yasemin Demirtaş",
    title: "Founder",
    imageUrl: "/images/team-member-2.jpg", // (Placeholder image)
  },
  {
    name: "Dr. Ayşin Akdoğan",
    title: "Expert IVF Doctor",
    imageUrl: "/images/cta-doctor-image.webp", // (Real photo)
  },
  {
    name: "Özlem Morgan",
    title: "UK Coordinator",
    imageUrl: "/images/team-member-3.jpg", // (Placeholder image)
  },
];

// --- UPDATED: Person Schema with correct roles & expertise ---
const TeamSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: teamMembers.map((member, index) => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.title,
      image: `https://getbeautyandhealth.com${member.imageUrl}`,
      worksFor: {
        '@type': 'Organization',
        name: 'Get Beauty and Health',
      },
      // --- THIS IS THE KEY SEO UPDATE ---
      // We are telling Google that Dr. Akdoğan is an expert in IVF.
      ...(member.name.includes('Dr.') && {
        knowsAbout: 'IVF, Fertility, Reproductive Medicine'
      })
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
// --- END SCHEMA UPDATE ---


const TeamSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <TeamSchema />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">Meet Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">The dedicated professionals ensuring your journey is seamless and successful.</p>
        </div>
        {/* The md:grid-cols-3 layout is perfect for 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative h-40 w-40 md:h-48 md:w-48 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.imageUrl}
                  alt={`Headshot of ${member.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-lora text-xl font-bold text-brand-dark">{member.name}</h3>
              <p className="mt-1 text-brand-text">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;