"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  href: string;
}

const ServiceCard = ({ title, imageUrl, href }: ServiceCardProps) => {
  return (
    <Link href={href}>
      <motion.div
        className="group relative min-h-[400px] rounded-lg overflow-hidden shadow-lg cursor-pointer"
        whileHover={{ y: -10, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="font-lora text-2xl font-bold text-white">{title}</h3>
          <span className="text-white font-semibold mt-2 inline-block transition-transform group-hover:translate-x-1">
            Learn More →
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
