"use client";

import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { getDailyQuote } from "@/lib/quotes";
import { useEffect, useState } from "react";

export default function DailyQuote() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  
  useEffect(() => {
    setQuote(getDailyQuote());
  }, []);

  if (!quote.text) return <div className="min-h-[200px]" />;

  return (
    <section className="py-16 md:py-24 bg-brand/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5">
        <QuoteIcon className="w-96 h-96 text-brand" />
      </div>
      
      <div className="container relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-brand/10"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gold/20 p-4 rounded-full">
              <QuoteIcon className="w-8 h-8 text-gold-dark" />
            </div>
          </div>
          <h2 className="text-sm font-bold tracking-wider text-brand uppercase mb-6">
            Daily Motivation
          </h2>
          <blockquote className="text-2xl md:text-3xl font-heading font-medium text-navy leading-tight mb-8">
            "{quote.text}"
          </blockquote>
          <p className="text-lg font-bold text-laurel font-heading">
            — {quote.author}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
