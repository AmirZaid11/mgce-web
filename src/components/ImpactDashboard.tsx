"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Users, GraduationCap, Package, Heart } from "lucide-react";

interface CounterProps {
  end: number;
  label: string;
  icon: any;
  suffix?: string;
}

const Counter = ({ end, label, icon: Icon, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
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
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-brand/5">
      <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-brand" />
      </div>
      <span className="text-3xl md:text-4xl font-bold text-navy mb-2">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-navy/60 text-sm font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
};

export default function ImpactDashboard() {
  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy mb-4">Our Real-Time Impact</h2>
          <p className="text-navy/60 max-w-2xl mx-auto">Providing transparency and measurable results for every contribution.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Counter icon={Users} end={1250} label="Girls Reached" suffix="+" />
          <Counter icon={GraduationCap} end={85} label="Scholarships" />
          <Counter icon={Package} end={5000} label="Health Kits" suffix="+" />
          <Counter icon={Heart} end={24} label="Community Partners" />
        </div>

        {/* Placeholder for Interactive Map & Transparency Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-navy rounded-3xl p-8 text-cream relative overflow-hidden h-[400px] flex flex-col justify-between">
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold text-gold mb-2">Regional Reach</h3>
              <p className="text-cream/70 text-sm">Empowering girls across Kenya, focusing on rural Maseno.</p>
            </div>
            {/* Simple SVG Map Placeholder */}
            <div className="flex-1 flex items-center justify-center opacity-40">
              <svg viewBox="0 0 200 200" className="w-64 h-64 fill-gold">
                <path d="M100,20 L120,50 L150,60 L130,90 L140,130 L100,110 L60,130 L70,90 L50,60 L80,50 Z" />
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-4 relative z-10">
              <div className="text-center">
                <div className="text-xl font-bold">65%</div>
                <div className="text-[10px] uppercase tracking-wider text-cream/50">Kisumu County</div>
              </div>
              <div className="text-center border-x border-cream/10">
                <div className="text-xl font-bold">20%</div>
                <div className="text-[10px] uppercase tracking-wider text-cream/50">Siaya County</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">15%</div>
                <div className="text-[10px] uppercase tracking-wider text-cream/50">Others</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-border flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-2">Fund Allocation</h3>
              <p className="text-navy/60 text-sm">100% of public donations go directly to programs.</p>
            </div>
            
            <div className="space-y-6 my-8">
              {[
                { label: "Education & Fees", value: 45, color: "bg-brand" },
                { label: "Health & Hygiene", value: 30, color: "bg-gold" },
                { label: "Mentorship & Camps", value: 25, color: "bg-navy" }
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="w-full h-3 bg-cream rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
