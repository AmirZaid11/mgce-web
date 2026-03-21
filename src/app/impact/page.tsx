"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImpactDashboard from "@/components/ImpactDashboard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const photos = [
  "/images/gallery/gal1.jpeg",
  "/images/gallery/gal2.jpeg",
  "/images/gallery/gal3.jpeg",
  "/images/gallery/gal4.jpeg",
  "/images/gallery/gal5.jpeg"
];

export default function ImpactPage() {
  return (
    <div className="flex flex-col w-full pb-24 min-h-screen">
      <section className="bg-brand text-cream py-20 px-4 text-center">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Our Impact</h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
            Visualizing the change we are making in the lives of young women and their communities across Kenya.
          </p>
        </div>
      </section>

      <ImpactDashboard />

      <section className="py-24 bg-cream border-y border-border">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand/10 relative">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-gold rounded-full blur-2xl opacity-50" />
            <h2 className="text-3xl font-heading font-bold text-navy mb-6">Read Our Success Stories</h2>
            <p className="text-lg text-navy/80 mb-8 leading-relaxed">
              Dive deep into the personal journeys of the girls who have graduated from our programs. Their resilience and success are the true measure of our impact.
            </p>
            <Button size="lg" variant="default" asChild className="rounded-full shadow-md hover:scale-105 transition-transform bg-brand hover:bg-brand-light">
              <Link href="/news">
                Explore Success Stories <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy mb-4">Photo Gallery</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6" />
            <p className="text-navy/60 max-w-2xl mx-auto">Moments of joy, learning, and empowerment captured from our various programs and community outreach events.</p>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {photos.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="relative overflow-hidden rounded-2xl break-inside-avoid shadow-sm group border border-border"
              >
                <div className="relative w-full overflow-hidden" style={{ paddingTop: `${(Math.random() * (150 - 75) + 75)}%` }}>
                  <Image 
                    src={src}
                    alt={`Impact Photo ${i + 1}`}
                    fill
                    className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
