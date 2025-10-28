// In app/components/services/PatientJourney.tsx
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageSquareText, FileText, Plane, Stethoscope, HeartHandshake } from 'lucide-react';

const journeySteps = [
  { step: "01", title: "Initial Consultation", description: "Your journey begins with a free, confidential online consultation with our experts to discuss your goals and options.", icon: MessageSquareText },
  { step: "02", title: "Custom Treatment Plan", description: "Based on your consultation, we design a personalized treatment plan and provide a transparent, all-inclusive price quote.", icon: FileText },
  { step: "03", title: "Travel & Accommodation", description: "Once you approve the plan, we handle everything—from booking your flights to arranging your stay in a luxury hotel.", icon: Plane },
  { step: "04", title: "Your Procedure", description: "You'll receive world-class medical care from top-tier surgeons in our state-of-the-art, accredited facilities.", icon: Stethoscope },
  { step: "05", title: "Recovery & Aftercare", description: "We provide comprehensive post-operative support and follow-up care to ensure a smooth and comfortable recovery.", icon: HeartHandshake },
];

const PatientJourney = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.7", "end 0.3"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-lora text-3xl font-bold text-brand-dark">Your Journey to a New You</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text">We manage every detail of your medical journey with precision and care, ensuring a seamless experience from start to finish.</p>
        </div>

        <div ref={targetRef} className="relative">
          {/* Background line (full, faded) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-brand-teal/20" />
          
          {/* Animated line that draws as you scroll */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-brand-teal origin-top"
            style={{ 
              scaleY,
              height: '100%'
            }}
          />

          <div className="space-y-12 lg:space-y-24">
            {journeySteps.map((item, index) => (
              <div key={item.title} className="flex items-center relative">
                {/* The animated content card */}
                <div className={`w-full flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-5/12 p-6 bg-brand-background rounded-lg shadow-md"
                  >
                    <p className="text-brand-teal font-bold mb-1">Step {item.step}</p>
                    <h3 className="font-lora text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-brand-text text-sm">{item.description}</p>
                  </motion.div>
                </div>

                {/* The animated icon on the timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="bg-brand-teal text-white rounded-full p-3 flex items-center justify-center ring-8 ring-white">
                    <item.icon className="w-6 h-6" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
