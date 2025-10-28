// In app/components/journey/PackageInclusions.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, BedDouble, Car, Users, Plane, HeartHandshake, ChevronDown } from 'lucide-react';

const inclusions = [
  { 
    icon: Stethoscope, 
    title: "Medical Procedure", 
    description: "All costs related to your surgery, including surgeon fees, hospital fees, and anesthesia.",
    details: [
      "Board-certified surgeon consultation",
      "All surgical and hospital fees",
      "Anesthesia and operating room costs",
      "Medical supplies and equipment",
      "Pre-operative tests and evaluations"
    ]
  },
  { 
    icon: BedDouble, 
    title: "Luxury Accommodation", 
    description: "Your stay in a premium 4 or 5-star hotel, ensuring a comfortable and relaxing recovery.",
    details: [
      "4 or 5-star hotel accommodations",
      "Breakfast included daily",
      "Room service available",
      "Spa and wellness facilities",
      "Extended stay options available"
    ]
  },
  { 
    icon: Car, 
    title: "VIP Transfers", 
    description: "All ground transportation between the airport, your hotel, and the clinic in a private, comfortable vehicle.",
    details: [
      "Airport pickup and drop-off",
      "Private comfortable vehicles",
      "Hotel to clinic transfers",
      "24/7 availability",
      "English-speaking drivers"
    ]
  },
  { 
    icon: Users, 
    title: "Personal Host & Translator", 
    description: "A dedicated host will be available 24/7 to assist you with all your needs and provide translation services.",
    details: [
      "24/7 personal support",
      "Professional translation services",
      "Appointment coordination",
      "Emergency assistance",
      "Cultural guidance and tips"
    ]
  },
  { 
    icon: Plane, 
    title: "Flight Coordination", 
    description: "We assist in finding and coordinating the best flight options for your travel dates.",
    details: [
      "Flight booking assistance",
      "Best route recommendations",
      "Timing coordination with procedures",
      "Travel insurance guidance",
      "Visa support if needed"
    ]
  },
  { 
    icon: HeartHandshake, 
    title: "Comprehensive Aftercare", 
    description: "Includes all post-operative medications, check-ups, and ongoing support from our medical team.",
    details: [
      "Post-operative medications",
      "Follow-up consultations",
      "24/7 medical support hotline",
      "Recovery progress monitoring",
      "Long-term care coordination"
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
};

const PackageInclusions = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-white via-brand-background/30 to-white py-20 lg:py-28 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-brand-teal/5 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-brand-orange/5 rounded-full filter blur-3xl opacity-50"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">What&apos;s Included in Your Package?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">We believe in complete transparency. Our all-inclusive packages are designed to cover every aspect of your journey.</p>
          <p className="mt-2 text-sm text-brand-teal font-semibold">💡 Click any card to see full details</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {inclusions.map((item, index) => (
            <motion.div 
              key={item.title} 
              className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg shadow-brand-dark/5 border border-white/50 border-t-4 border-t-brand-orange text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-orange/10 cursor-pointer overflow-hidden"
              variants={itemVariants}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              layout
            >
              <div className="p-8">
                <div className="bg-brand-orange/10 rounded-full p-3 w-fit mx-auto mb-5">
                  <item.icon className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="font-lora text-xl font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-2 text-brand-text text-sm">{item.description}</p>
                
                <motion.div
                  animate={{ rotate: expandedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/10"
                >
                  <ChevronDown className="w-5 h-5 text-brand-orange" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedCard === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-brand-orange/5 border-t border-brand-orange/20"
                  >
                    <div className="p-6 text-left">
                      <h4 className="font-semibold text-brand-dark mb-3 text-sm">What&apos;s Included:</h4>
                      <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-2 text-sm text-brand-text"
                          >
                            <span className="text-brand-orange mt-1">✓</span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PackageInclusions;
