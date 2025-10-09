// In app/components/services/ProcedureCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProcedureCardProps {
  title: string;
  href: string;
  imageUrl: string;
}

const ProcedureCard = ({ title, href, imageUrl }: ProcedureCardProps) => {
  return (
    <Link href={href} className="group block relative min-h-[300px] rounded-lg overflow-hidden shadow-lg">
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="font-lora text-2xl font-bold text-white">{title}</h3>
        <p className="text-white font-semibold mt-2 inline-block transition-transform group-hover:translate-x-1">
          Learn More →
        </p>
      </div>
    </Link>
  );
};

export default ProcedureCard;
