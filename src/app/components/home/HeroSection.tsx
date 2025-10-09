"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-brand-dark bg-opacity-50"></div>
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl lg:text-7xl font-lora font-extrabold text-white leading-tight mb-6"
            variants={itemVariants}
          >
            World-Class Healthcare, Seamlessly Delivered in Turkey.
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl font-inter text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            From advanced medical treatments to premier real estate opportunities, 
            we manage every detail of your journey with care and precision.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center" 
            variants={itemVariants}
          >
            <Link href="/contact" className="bg-brand-orange text-white font-inter font-semibold px-8 py-4 rounded-lg text-lg hover:brightness-110 hover:shadow-lg transition-all duration-200 inline-block">
              Get a Free Quote
            </Link>
            <Link href="/services" className="border border-white text-white font-inter font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-brand-dark transition-all duration-200 inline-block">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
