"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, BookOpen, MapPin, Heart } from "lucide-react";

const stats = [
  { label: "Girls Empowered", value: 2500, icon: Users, suffix: "+" },
  { label: "Active Programs", value: 18, icon: BookOpen, suffix: "" },
  { label: "Counties Reached", value: 7, icon: MapPin, suffix: "" },
  { label: "Mentors", value: 120, icon: Heart, suffix: "+" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function ImpactStats() {
  return (
    <section className="py-20 bg-navy text-cream">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-gold mb-4"
          >
            Our Impact So Far
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-cream/80 max-w-2xl mx-auto"
          >
            Every number represents a life changed, a community uplifted, and a future secured.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cream/10 flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors border border-cream/5 group-hover:border-brand/30">
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-gold group-hover:text-gold-light transition-colors" />
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-2 text-white">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm md:text-base font-medium text-gold-light uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
