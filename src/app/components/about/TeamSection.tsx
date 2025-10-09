// In app/components/about/TeamSection.tsx
import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Dr. Elif Yilmaz",
    title: "Founder & Lead Surgeon",
    imageUrl: "/images/team-member-1.jpg",
  },
  {
    name: "Ahmet Kaya",
    title: "Head of Patient Coordination",
    imageUrl: "/images/team-member-2.jpg",
  },
  {
    name: "Zeynep Ozcan",
    title: "Real Estate Advisor",
    imageUrl: "/images/team-member-3.jpg",
  },
  {
    name: "Murat Demir",
    title: "Logistics Manager",
    imageUrl: "/images/team-member-4.jpg",
  },
];
// AI: Please find 4 diverse, professional, royalty-free headshot photos for the team members.

const TeamSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">Meet Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">The dedicated professionals ensuring your journey is seamless and successful.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
