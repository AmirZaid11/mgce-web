"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, MessageCircle, Quote, History, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export default function SistersVoicePage() {
  const [content, setContent] = useState("");
  const [type, setType] = useState<"story" | "quote">("story");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const wordCount = content.trim() === "" ? 0 : content.trim().split(/\s+/).length;
  const isMinLength = wordCount >= 200;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // Fetch posts from the last 7 days
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      
      const { data, error } = await supabase
        .from("anonymous_posts")
        .select("*")
        .gte("created_at", oneWeekAgo.toISOString())
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMinLength) return;
    
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const { error } = await supabase
        .from("anonymous_posts")
        .insert([{ type, content, created_at: new Date().toISOString() }]);

      if (error) throw error;

      setMessage({ type: "success", text: "Your voice has been shared! It's now visible to the community." });
      setContent("");
      fetchPosts();
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="bg-brand text-cream py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/20 rounded-full blur-3xl -z-0" />
        
        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-gold text-sm font-bold mb-6 border border-white/20">
              <Sparkles className="w-4 h-4" />
              <span>SISTERS&apos; VOICE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">Share Your <span className="text-gold">Story</span>, Anonymously.</h1>
            <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mb-8">
              A safe space for MGCE students and alumni to share quotes and stories. Your identity remains hidden, but your impact is felt by all.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="gold" className="rounded-full shadow-lg h-12 px-8">
                <a href="#share-form">Share Now</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full h-12 px-8 border-cream/30 text-cream hover:bg-cream hover:text-brand">
                <a href="https://whatsapp.com/channel/0029Vac4qi7I7BeEmwRCGT2n" target="_blank">Join WhatsApp Discussion</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container py-20 px-4 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Column: Form */}
        <div className="lg:w-1/2" id="share-form">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border border-border sticky top-28 text-center"
          >
            <div className="w-20 h-20 bg-brand/5 rounded-full flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-10 h-10 text-brand/30" />
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4">Sharing Simplified</h2>
            <p className="text-navy/60 mb-8 leading-relaxed">
              We are currently upgrading our anonymous sharing platform to provide an even safer and more interactive experience for our sisters.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold text-xs font-bold uppercase tracking-widest border border-gold/20 mb-8">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>Coming Soon: New Sisters&apos; Hub</span>
            </div>
            <p className="text-sm font-medium text-navy/40 italic">
              Registration and story submission will reopen shortly.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Feed */}
        <div className="lg:w-1/2">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
              <History className="w-6 h-6 text-brand" /> Recent Voices
            </h2>
            <div className="text-[10px] uppercase font-bold text-navy/40 tracking-widest bg-navy/5 px-3 py-1 rounded-full border border-navy/5">
              Refreshed Daily
            </div>
          </div>

          <div className="space-y-8">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-border shadow-sm">
                <Loader2 className="w-10 h-10 text-brand animate-spin mb-4" />
                <p className="text-navy/40 font-bold text-sm">Gathering stories...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-border shadow-sm">
                <p className="text-navy/40 font-bold">No stories shared in the last week. Be the first!</p>
              </div>
            ) : (
              posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border relative group hover:shadow-md transition-all"
                >
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    {post.type === 'quote' ? <Quote className="w-12 h-12" /> : <MessageCircle className="w-12 h-12" />}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${post.type === 'quote' ? 'bg-gold/20 text-navy' : 'bg-brand/10 text-brand'}`}>
                      {post.type}
                    </span>
                    <span className="text-[10px] font-bold text-navy/40">
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <p className="text-navy/80 text-base leading-relaxed whitespace-pre-wrap">
                    {post.content}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-border flex justify-between items-center">
                    <span className="text-[11px] font-bold text-navy/30 italic">— Anonymous Sister</span>
                    <button className="text-brand/40 hover:text-brand transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
            
            <p className="text-center text-[10px] text-navy/30 font-bold uppercase tracking-widest mt-10">
              Posts are automatically archived after 7 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
