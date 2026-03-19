"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight, X } from "lucide-react";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: "url('/images/gallery/gal2.jpeg')" }}
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
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setIsVideoOpen(true)}
              className="rounded-full w-full sm:w-auto text-cream border-cream/50 hover:bg-cream/10 bg-transparent backdrop-blur-sm"
            >
              <PlayCircle className="mr-2 w-5 h-5" /> Watch Impact Video
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-navy/50 text-white hover:bg-brand transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <video 
                src="/images/gallery/vid1.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative sun rays inspired by logo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10" />
    </section>
  );
}
