// In app/components/services/BenefitsSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Smile, Eye, Users, ShieldCheck, HeartHandshake, Sparkles, Clock, Award } from 'lucide-react';

// --- FIX: Updated import path ---
import { Benefit } from '@/lib/servicesData';

const iconMap: { [key: string]: React.ElementType } = {
  CheckCircle2, Smile, Eye, Users, ShieldCheck, HeartHandshake, Clock, Award
};

// Gradient color schemes for variety
const gradients = [
  'from-brand-teal/20 via-brand-teal/10 to-transparent',
  'from-brand-orange/20 via-brand-orange/10 to-transparent',
  'from-brand-dark/20 via-brand-dark/10 to-transparent',
];

interface BenefitsSectionProps {
  benefits: Benefit[];
  gridCols?: 2 | 3;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const
    }
  }
};

const BenefitsSection = ({ benefits, gridCols = 3 }: BenefitsSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-white via-brand-background/30 to-brand-dark/5 py-20 lg:py-32 overflow-hidden">
      {/* ... (Animated Background Elements) ... */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-brand-dark/20 to-transparent rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute top-1/4 right-1/4"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-6 h-6 text-brand-dark/40" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/4"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <Sparkles className="w-5 h-5 text-brand-orange/40" />
      </motion.div>

      <div className="relative container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-brand-teal" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="font-lora text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            The Transformative Benefits
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text">
            Discover the positive, life-changing outcomes our patients experience
          </p>
        </motion.div>

        <motion.div 
          className={`grid grid-cols-1 md:grid-cols-2 ${gridCols === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-8 max-w-7xl mx-auto`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* --- FIX: Added 'Benefit' and 'number' types to map parameters --- */}
          {benefits.map((benefit: Benefit, index: number) => {
            const Icon = iconMap[benefit.icon];
            const gradientClass = gradients[index % gradients.length];
            
            return (
              <motion.div 
                key={index} 
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Card Content */}
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-2 border-white/60 transition-all duration-300 group-hover:shadow-2xl group-hover:border-brand-teal/50 group-hover:shadow-brand-teal/20 h-full">
                  {/* Icon with animated background */}
                  {Icon && (
                    <motion.div 
                      className="relative mb-6 flex justify-center"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <div className="absolute inset-0 bg-brand-teal/20 rounded-2xl blur-xl group-hover:bg-brand-teal/30 transition-colors" />
                      <div className="relative bg-gradient-to-br from-brand-teal to-brand-dark rounded-2xl p-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-brand-teal/0 group-hover:border-brand-teal/50"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )}
                  
                  <h3 className="font-lora text-xl lg:text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-dark transition-colors text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-text leading-relaxed text-center">
                    {benefit.description}
                  </p>
                  
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-brand-teal/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;