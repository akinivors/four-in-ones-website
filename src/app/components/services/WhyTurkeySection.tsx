// In app/components/services/WhyTurkeySection.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, Shield, Heart, Award, Sparkles, MapPin } from 'lucide-react';

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  color: string;
}

interface Stats {
  patients: string;
  countries: string;
  rating: string;
}

interface WhyTurkeySectionProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaTitle: string;
  ctaDescription: string;
  reasons: Reason[];
  stats: Stats;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

const WhyTurkeySection = ({ 
  badge, 
  title, 
  subtitle, 
  ctaTitle, 
  ctaDescription, 
  reasons, 
  stats 
}: WhyTurkeySectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-brand-background via-white to-brand-teal/5 py-20 lg:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-brand-teal" />
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-wide">{badge}</span>
          </div>
          <h2 className="font-lora text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
              >
                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-2 border-white/60 transition-all duration-300 hover:shadow-2xl hover:border-brand-teal/50 h-full">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="relative flex items-start gap-4 mb-4">
                    <div className={`bg-gradient-to-br ${reason.color} p-4 rounded-xl shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-lora text-2xl font-bold text-brand-dark mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-brand-text leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>

                  {/* Stat Badge */}
                  <div className="relative mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-3xl font-bold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                          {reason.stat}
                        </div>
                        <div className="text-sm text-brand-text/70 font-medium">
                          {reason.statLabel}
                        </div>
                      </div>
                      <Sparkles className={`w-6 h-6 text-brand-teal/40 group-hover:text-brand-teal transition-colors`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-brand-teal to-brand-dark rounded-2xl p-8 lg:p-12 shadow-2xl text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-white" />
            <Shield className="w-6 h-6 text-white" />
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-lora text-3xl font-bold text-white mb-4">
            {ctaTitle}
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
              <div className="text-2xl font-bold text-white">{stats.patients}</div>
              <div className="text-sm text-white/80">Happy Patients</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
              <div className="text-2xl font-bold text-white">{stats.countries}</div>
              <div className="text-sm text-white/80">Countries Served</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
              <div className="text-2xl font-bold text-white">{stats.rating}</div>
              <div className="text-sm text-white/80">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTurkeySection;
