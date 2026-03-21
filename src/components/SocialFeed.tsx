"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, Heart, Share2 } from "lucide-react";

const socialPosts = [
  {
    id: 1,
    platform: "Instagram",
    content: "Building confidence through technology. Our latest cohort showcasing their web projects! #MGCE #GirlChildEmpowerment",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    likes: "245",
    comments: "18"
  },
  {
    id: 2,
    platform: "TikTok",
    content: "A day in the life of an MGCE volunteer. Join us! 💖 #Volunteering #ChangeMaker",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    likes: "1.2k",
    comments: "42"
  },
  {
    id: 3,
    platform: "Instagram",
    content: "Our mentorship camp is officially open! 🏕️ Empowering the next generation of leaders.",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    likes: "312",
    comments: "24"
  },
  {
    id: 4,
    platform: "Twitter",
    content: "Proud to announce our partnership with local schools to distribute 5,000+ dignity kits. #HealthForAll",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    likes: "89",
    comments: "5"
  }
];

export default function SocialFeed() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy mb-4">Follow Our Journey</h2>
          <p className="text-navy/60 max-w-2xl mx-auto">Get a glimpse of our daily impact through our social media channels.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-border bg-cream"
            >
              <img 
                src={post.image} 
                alt="Social Media Post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
                    {post.platform === "Instagram" ? <Instagram className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-brand px-2 py-1 rounded-md">Live feed</span>
                </div>
                
                <p className="text-sm font-medium line-clamp-3">
                  {post.content}
                </p>

                <div className="flex gap-4 items-center pt-4 border-t border-white/20">
                  <div className="flex items-center gap-1 text-xs">
                    <Heart className="w-4 h-4 text-gold fill-current" /> {post.likes}
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <MessageCircle className="w-4 h-4" /> {post.comments}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-full border-brand text-brand hover:bg-brand hover:text-white px-8">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
