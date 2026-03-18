"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { NEWS_ARTICLES, getNewsCategories } from "@/lib/news";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = getNewsCategories();

  const filteredNews = activeCategory === "All" 
    ? NEWS_ARTICLES 
    : NEWS_ARTICLES.filter(article => article.category === activeCategory);

  return (
    <div className="flex flex-col w-full pb-24 bg-cream min-h-screen">
      <section className="bg-navy text-cream py-20 px-4 text-center">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gold">Latest News & Stories</h1>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Stay updated with our latest programs, community stories, and advocacy efforts.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-border bg-white sticky top-20 z-40 shadow-sm overflow-x-auto">
        <div className="container px-4">
          <div className="flex gap-2 mx-auto sm:justify-center w-max min-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-brand text-white shadow-md"
                    : "bg-cream text-navy hover:bg-brand/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredNews.map((article) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={article.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border flex flex-col group"
                >
                  <Link href={`/news/${article.slug}`} className="relative h-48 sm:h-60 overflow-hidden block">
                    <div className="absolute top-4 left-4 z-10 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {article.category}
                    </div>
                    <Image 
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center text-xs text-navy/60 font-medium tracking-wide mb-4 gap-4">
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-1"/> {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year:"numeric"})}</span>
                      <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {article.readTime}</span>
                    </div>
                    <Link href={`/news/${article.slug}`}>
                      <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-brand transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-navy/70 mb-6 line-clamp-3 flex-1">{article.excerpt}</p>
                    <Link href={`/news/${article.slug}`} className="text-brand font-bold inline-flex items-center text-sm hover:text-brand-light transition-colors mt-auto">
                      Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
