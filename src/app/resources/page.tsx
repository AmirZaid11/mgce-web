"use client";

import { motion } from "framer-motion";
import { Download, BookOpen, Heart, Lightbulb, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const resources = [
  {
    id: 1,
    title: "Guide to Menstrual Health",
    category: "Health",
    description: "A comprehensive guide on hygiene, reproductive health, and breaking social taboos.",
    type: "PDF Guide",
    icon: Heart,
    downloadUrl: "/pdfs/men guide.pdf"
  },
  {
    id: 2,
    title: "Digital Basics for Beginners",
    category: "Education",
    description: "Learn the fundamentals of internet safety, email, and basic computer use.",
    type: "E-book",
    icon: BookOpen,
    downloadUrl: "/pdfs/ds.pdf"
  },
  {
    id: 3,
    title: "Leadership & Advocacy 101",
    category: "Leadership",
    description: "Tools and techniques to help young girls find their voice and lead in their communities.",
    type: "Workshop Kit",
    icon: Lightbulb,
    downloadUrl: "/pdfs/advocacy.pdf"
  },
  {
    id: 4,
    title: "Scholarship Prep Checklist",
    category: "Education",
    description: "Everything you need to gather and prepare for secondary and university scholarship applications.",
    type: "Checklist",
    icon: Lightbulb,
    downloadUrl: "/pdfs/ds.pdf"
  }
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = activeCategory === "All" 
    ? resources 
    : resources.filter(r => r.category === activeCategory);

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream pb-24">
      {/* Header */}
      <section className="bg-brand text-cream py-20 px-4 text-center">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gold">Digital Resource Library</h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
            Free educational materials and guides designed specifically for the Kenyan girl child and her mentors.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-border bg-white sticky top-20 z-40">
        <div className="container px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {["All", "Health", "Education", "Leadership"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat ? "bg-brand text-white shadow-md" : "bg-cream text-navy/60 hover:bg-brand/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30" />
            <input placeholder="Search resources..." className="w-full pl-10 pr-4 py-2 bg-cream/50 border border-border rounded-full text-sm focus:outline-none focus:border-brand" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredResources.map((resource, i) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-border flex flex-col hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <resource.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">{resource.title}</h3>
                <p className="text-navy/60 text-sm mb-6 flex-1">{resource.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <span className="text-[10px] font-black uppercase tracking-widest text-navy/30">{resource.type}</span>
                  <a 
                    href={(resource as any).downloadUrl} 
                    download 
                    className="w-10 h-10 bg-cream text-brand rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
