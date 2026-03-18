"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { EMPOWERING_QUOTES, getDailyQuote } from "@/lib/quotes";

export default function QuotesPage() {
  const dailyQuote = getDailyQuote();
  
  // Create a display list (mocking past 30 days)
  const pastQuotes = [...EMPOWERING_QUOTES].sort(() => 0.5 - Math.random()).slice(0, 30);

  return (
    <div className="flex flex-col w-full pb-24 bg-cream min-h-screen">
      <section className="bg-[linear-gradient(to_bottom_right,var(--tw-gradient-stops))] from-navy via-navy-dark to-brand text-cream py-24 px-4 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute -top-20 -right-20 text-brand/20">
          <QuoteIcon className="w-96 h-96" />
        </div>
        
        <div className="container relative z-10 max-w-4xl mx-auto">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-6 block">Quote of the Day</span>
          <motion.blockquote 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-medium text-white leading-tight mb-8 text-balance"
          >
            &quot;{dailyQuote.text}&quot;
          </motion.blockquote>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-bold text-gold-light font-heading"
          >
            — {dailyQuote.author}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Daily Inspiration Archive</h2>
            <div className="w-16 h-1 bg-brand mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastQuotes.map((quote, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all relative flex flex-col"
              >
                <QuoteIcon className="absolute top-6 right-6 w-8 h-8 text-brand/5" />
                <blockquote className="text-lg md:text-xl text-navy/80 font-heading font-medium leading-relaxed mb-6 pt-4 flex-1">
                  &quot;{quote.text}&quot;
                </blockquote>
                <div className="flex items-center gap-4 mt-auto border-t border-border pt-6">
                  <div className="w-10 h-10 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center font-bold">
                    {quote.author.charAt(0)}
                  </div>
                  <p className="font-bold text-laurel">{quote.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
