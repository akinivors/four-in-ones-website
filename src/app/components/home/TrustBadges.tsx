// In app/components/home/TrustBadges.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const badges = [
  { name: 'JCI Accreditation', image: '/images/Jci_logo.png', description: 'Joint Commission International' },
  { name: 'ISO 9001', image: '/images/ISO 9001 Logo.jpeg', description: 'Quality Management System' },
  { name: 'Ministry of Health', image: '/images/Logo_of_Ministry_of_Health_(Turkey).png', description: 'Turkish Ministry of Health Approved' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

const TrustBadges = () => {
  return (
    <section className="bg-white py-12 lg:py-16 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-brand-dark mb-2">
            Internationally Accredited & Certified
          </h3>
          <p className="text-brand-text text-sm">
            Your safety and quality of care are backed by global standards
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-12 lg:gap-20"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group flex flex-col items-center"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={badge.image}
                  alt={badge.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs md:text-sm font-semibold text-brand-dark text-center">
                {badge.name}
              </p>
              <p className="text-xs text-brand-text/70 text-center mt-1">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent"
        />
      </div>
    </section>
  );
};

export default TrustBadges;
