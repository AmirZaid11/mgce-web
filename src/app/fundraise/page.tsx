"use client";

import { motion } from "framer-motion";
import { Share2, Users, Trophy, Heart, ArrowRight, Camera, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FundraisePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-cream pb-24">
      {/* Hero */}
      <section className="bg-navy text-cream py-24 mb-12 relative overflow-hidden">
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-gold text-sm font-bold mb-8 border border-white/20">
              <Share2 className="w-4 h-4" />
              <span>PEER-TO-PEER FUNDRAISING</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Your Network, <span className="text-gold">Our Impact</span></h1>
            <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10">
              Turn your birthday, graduation, or a simple challenge into a life-changing opportunity for a girl in Kenya. 
              Start your own fundraising campaign today.
            </p>
            <Button size="lg" className="rounded-full bg-brand hover:bg-brand-dark px-10 h-14 text-lg">
              Start Your Campaign
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-navy">How It Works</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { 
                step: "01", 
                title: "Choose an Event", 
                desc: "Whether it's a marathon, a birthday, or a community dinner, any event can be a fundraiser.",
                icon: Heart,
                color: "bg-brand/10 text-brand"
              },
              { 
                step: "02", 
                title: "Set Your Goal", 
                desc: "Decide how much you want to raise. Every dollar counts toward a student's scholarship.",
                icon: Trophy,
                color: "bg-gold/10 text-gold"
              },
              { 
                step: "03", 
                title: "Share the Love", 
                desc: "Use our social media templates to share your page with friends, family, and colleagues.",
                icon: Share2,
                color: "bg-navy/10 text-navy"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 rounded-[2rem] ${item.color} mx-auto flex items-center justify-center mb-6 border border-white shadow-xl transition-all group-hover:scale-110`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <span className="text-xs font-black text-navy/20 uppercase tracking-[0.2em]">{item.step}</span>
                <h4 className="text-xl font-bold text-navy mt-2 mb-4">{item.title}</h4>
                <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Box */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-border">
            <div className="lg:w-1/2 p-12 md:p-16 space-y-8 bg-brand text-cream">
              <h3 className="text-3xl md:text-5xl font-heading font-bold leading-tight">Fundraising Toolkit</h3>
              <p className="text-cream/70 leading-relaxed">
                We provide all the assets you need to run a successful campaign. Download our media kit which includes:
              </p>
              <div className="space-y-4">
                {[
                  { icon: Camera, text: "High-resolution project photos" },
                  { icon: MessageCircle, text: "Pre-written social media posts" },
                  { icon: Mail, text: "Email templates for donors" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm font-bold">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="rounded-full border-cream/30 text-cream hover:bg-cream hover:text-brand mt-4 px-8">
                Download Kit (.ZIP)
              </Button>
            </div>
            <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-navy mb-4">Need help getting started?</h3>
              <p className="text-navy/60 mb-8">
                Our fundraising team is available to help you strategize and make the most impact. Reach out for a quick brainstorming session.
              </p>
              <Button asChild variant="gold" className="rounded-full shadow-lg h-12 px-10 self-start">
                <Link href="/contact">Contact Fundraising Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaign */}
      <section className="py-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto bg-cream-dark p-8 md:p-12 rounded-[2.5rem] border border-brand/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -z-0" />
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white border-8 border-white shadow-xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Supporter" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-brand font-bold uppercase tracking-widest text-[10px] mb-2 block">Campaign Spotlight</span>
                <h3 className="text-2xl font-bold text-navy mb-4">&quot;Mary raised $1,200 for her 25th birthday!&quot;</h3>
                <p className="text-navy/60 text-sm leading-relaxed italic mb-6">
                  &quot;I wanted to do something meaningful for my milestone birthday. Knowing that my friends helped put two girls through a whole year of school is the best gift I could imagine.&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-navy/40">— Mary W., Seattle</div>
                  <Link href="/impact" className="text-brand font-bold text-xs flex items-center gap-1">See Our Impact <ArrowRight className="w-3 h-3" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
