"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { NEWS_ARTICLES } from "@/lib/news";

export default function FeaturedStory() {
  // Pick a success story as the featured one
  const featured = NEWS_ARTICLES.find(a => a.category === "Success Stories") || NEWS_ARTICLES[0];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-6 -left-6 z-10 bg-gold text-navy p-4 rounded-2xl shadow-xl flex items-center gap-2 font-bold rotate-3">
              <Star className="w-5 h-5 fill-current" /> Featured Story
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-cream">
              <Image 
                src={featured.image} 
                alt={featured.title} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <span className="text-brand font-bold uppercase tracking-widest text-sm">Empowerment in Action</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy leading-tight">
              {featured.title}
            </h2>
            <p className="text-lg text-navy/70 leading-relaxed italic">
              &quot;{featured.excerpt}&quot;
            </p>
            <div className="h-px bg-border w-full" />
            <div className="flex items-center gap-4 text-sm text-navy/50">
              <span className="font-bold text-brand uppercase">{featured.author}</span>
              <span>•</span>
              <span>{featured.readTime}</span>
            </div>
            <Button asChild size="lg" className="rounded-full bg-brand hover:bg-brand-dark px-8">
              <Link href={`/news/${featured.slug}`}>
                Read Her Full Story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
