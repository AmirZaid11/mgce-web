"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amina J.",
    role: "Program Graduate",
    quote: "MGCE gave me the confidence to pursue software engineering. The mentorship program completely changed the trajectory of my life.",
  },
  {
    name: "Sarah W.",
    role: "Community Leader",
    quote: "Seeing the transformation in the girls from our village is nothing short of miraculous. Thank you, MGCE, for believing in them.",
  },
  {
    name: "Faith K.",
    role: "Beneficiary",
    quote: "The digital skills camp opened my eyes to the world. I am now freelancing and supporting my education thanks to the skills I learned.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy mb-4">
            Voices of <span className="text-brand">Impact</span>
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Real stories from the young women and community members whose lives have been touched by our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg transition-shadow relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-navy/80 italic mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center font-bold text-brand">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy">{t.name}</h4>
                  <p className="text-sm text-laurel font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
