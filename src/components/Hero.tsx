"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/pic8.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-navy/80 to-navy-dark/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-brand/20 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 pt-20 pb-20 md:pt-32 md:pb-32 px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold-light border border-gold/30 text-sm font-bold tracking-wider mb-6">
            MASENO GIRL CHILD EMPOWERMENT
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-cream mb-6 leading-tight">
            Empowering the Girl Child, <br className="hidden md:block" />
            <span className="text-gold">One Future at a Time</span>
          </h1>
          <p className="text-lg md:text-2xl text-cream/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            We are dedicated to nurturing leadership, confidence, and independence in young women across Kenya through education, mentorship, and advocacy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="gold" asChild className="rounded-full w-full sm:w-auto hover:scale-105 transition-transform">
              <Link href="/community">
                Join Community <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="default" asChild className="rounded-full w-full sm:w-auto bg-brand-light hover:bg-white hover:text-brand transition-colors">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto text-cream border-cream/50 hover:bg-cream/10 bg-transparent backdrop-blur-sm">
              <PlayCircle className="mr-2 w-5 h-5" /> Watch Impact Video
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative sun rays inspired by logo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10" />
    </section>
  );
}
