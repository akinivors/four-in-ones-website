// In app/components/about/StatsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { useInView, motion, animate } from "framer-motion";

type AnimatedStatProps = {
  to: number;
  suffix: string;
  label: string;
};

function AnimatedStat({ to, suffix, label }: AnimatedStatProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return (
    <div className="text-center">
      <p className="font-lora text-4xl md:text-5xl font-bold text-brand-dark">
        <motion.span ref={ref}>0</motion.span>
        {suffix}
      </p>
      <p className="mt-2 text-brand-text">{label}</p>
    </div>
  );
}

const stats = [
    { to: 500, suffix: "+", label: "Happy Patients" },
    { to: 20, suffix: "+", label: "Partner Hospitals" },
    { to: 50, suffix: "+", label: "Procedures Offered" },
    { to: 10, suffix: "+", label: "Years of Experience" },
];

const StatsSection = () => {
  return (
    <section className="bg-brand-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} to={stat.to} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
