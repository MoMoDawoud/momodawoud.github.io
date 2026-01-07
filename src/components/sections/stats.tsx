"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Quote, Users, Award } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

const stats = [
  {
    icon: FileText,
    value: 5,
    suffix: "+",
    label: "Publications",
    description: "Peer-reviewed papers",
  },
  {
    icon: Quote,
    value: 50,
    suffix: "+",
    label: "Citations",
    description: "Academic citations",
  },
  {
    icon: Users,
    value: 3,
    suffix: "",
    label: "Institutions",
    description: "Research collaborations",
  },
  {
    icon: Award,
    value: 18,
    suffix: "th",
    label: "National Rank",
    description: "Out of 600K+ students",
  },
];

function AnimatedCounter({
  value,
  suffix,
  duration = 2,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-2xl bg-card border border-border text-center group"
              >
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <stat.icon className="h-6 w-6" />
                </div>

                {/* Value */}
                <div className="text-4xl font-bold mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-lg font-medium mb-1">{stat.label}</div>

                {/* Description */}
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
