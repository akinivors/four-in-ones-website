// In app/components/services/CategoryCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  isHighlighted?: boolean;
}

const CategoryCard = ({ title, description, imageUrl, href, isHighlighted }: CategoryCardProps) => {
  return (
    <Link 
      href={href} 
      className={`group block relative h-80 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
        isHighlighted ? 'ring-4 ring-brand-orange scale-105 shadow-2xl' : ''
      }`}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="font-lora text-3xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-gray-200">{description}</p>
        <div className="mt-4 text-white font-semibold flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Category <ArrowRight className="ml-2 h-5 w-5" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
