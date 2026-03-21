"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Target, BookOpen, MessageCircle, CheckCircle2, Loader2, Sparkles, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MentorshipPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-cream">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border border-brand/10"
        >
          <div className="w-20 h-20 bg-laurel/10 text-laurel rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-navy mb-4">Application Received!</h2>
          <p className="text-navy/60 mb-8 leading-relaxed">
            Thank you for your commitment to empowering the girl child. Our mentorship coordinator will review your application and schedule a 15-minute introductory call.
          </p>
          <Button variant="outline" className="rounded-full h-12 px-8" onClick={() => setSubmitted(false)}>
            Close
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-brand text-cream py-20 px-4 text-center relative overflow-hidden">
        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-gold text-sm font-bold mb-6 border border-white/20">
              <Users className="w-4 h-4" />
              <span>MENTORSHIP CIRCLE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Shape a <span className="text-gold">Leader</span></h1>
            <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
              Your experience is the compass that can guide a young girl toward her highest potential. Join our structured mentorship program today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Content */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-6">The Mentorship Impact</h2>
                <div className="space-y-8">
                  {[
                    { title: "Career Guidance", desc: "Help students navigate academic choices and professional pathways.", icon: Target, color: "text-brand" },
                    { title: "Skill Building", desc: "Share technical or soft skills that are essential in today's workforce.", icon: BookOpen, color: "text-gold" },
                    { title: "Confidence & Advocacy", desc: "Empower girls to find their voice and advocate for their rights.", icon: MessageCircle, color: "text-navy" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-border">
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy text-lg mb-1">{item.title}</h4>
                        <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy p-10 rounded-[2.5rem] text-cream relative overflow-hidden">
                <Sparkles className="absolute top-6 right-6 w-12 h-12 text-gold/10" />
                <h3 className="text-xl font-bold mb-4">Mentor Commitment:</h3>
                <ul className="space-y-4 text-cream/70 text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" /> Minimum 1 hour per month
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" /> 6-month initial commitment
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" /> Monthly mentor check-in calls
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full" /> Access to MGCE curriculum
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-border">
              <h3 className="text-2xl font-bold font-heading text-navy mb-8">Mentor Application</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy/40 ml-1">Full Name</label>
                    <input required className="w-full px-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy/40 ml-1">Current Profession</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/20" />
                      <input required className="w-full pl-12 pr-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy/40 ml-1">Workplace / Industry</label>
                  <input required className="w-full px-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy/40 ml-1">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy/40 ml-1">Primary Area of Mentorship</label>
                  <select required className="w-full px-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand appearance-none font-bold text-navy/70">
                    <option value="">Select your specialty</option>
                    <option value="stem">STEM (Tech, Eng, Sci)</option>
                    <option value="health">Healthcare & Medicine</option>
                    <option value="arts">Arts & Humanities</option>
                    <option value="business">Business & Entreprenuership</option>
                    <option value="law">Law & Policy</option>
                    <option value="leadership">Soft Skills & Leadership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy/40 ml-1">Why do you want to be a mentor for MGCE?</label>
                  <textarea required rows={4} className="w-full px-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand resize-none" />
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full h-14 bg-brand hover:bg-brand-dark text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  {loading ? (
                    <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Processing...</>
                  ) : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
