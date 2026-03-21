"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, FileText, CheckCircle2, AlertCircle, Loader2, Sparkles, User, School, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScholarshipPage() {
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
          <h2 className="text-3xl font-heading font-bold text-navy mb-4">Application Success!</h2>
          <p className="text-navy/60 mb-8 leading-relaxed">
            Your scholarship application has been received. Our review committee will evaluate your request and contact your school principal within 14 business days.
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
      <section className="bg-navy text-cream py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        </div>
        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-gold text-sm font-bold mb-6 border border-white/20">
              <GraduationCap className="w-4 h-4" />
              <span>SCHOLARSHIP PORTAL</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Education for <span className="text-gold">Every</span> Girl</h1>
            <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto">
              Are you a bright girl in need of financial support? MGCE is here to help you stay in school and achieve your dreams.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left: Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-border">
                <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold" /> Eligibility Criteria
                </h3>
                <ul className="space-y-4">
                  {[
                    "Female student in Primary or Secondary school",
                    "Demonstrated financial need",
                    "Consistently high academic performance",
                    "Active participation in school community"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-navy/70">
                      <div className="w-5 h-5 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand text-cream p-8 rounded-3xl shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-gold" />
                  <h3 className="text-xl font-bold">Required Documents:</h3>
                </div>
                <p className="text-sm text-cream/70 mb-6">You will need to scan and upload these during the application process.</p>
                <div className="space-y-3">
                  {["Latest School Report Card", "Headteacher's Recommendation", "Birth Certificate / ID"].map(doc => (
                    <div key={doc} className="flex items-center gap-3 text-sm font-bold">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" /> {doc}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-border">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-8">Application Form</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Info */}
                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-brand border-b border-brand/10 pb-2">1. Personal Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-navy/40 ml-1">Full Legal Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/20" />
                          <input required className="w-full pl-12 pr-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-navy/40 ml-1">Date of Birth</label>
                        <input type="date" required className="w-full px-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                      </div>
                    </div>
                  </div>

                  {/* Academic Info */}
                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-brand border-b border-brand/10 pb-2">2. Academic Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-navy/40 ml-1">Current School Name</label>
                        <div className="relative">
                          <School className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/20" />
                          <input required className="w-full pl-12 pr-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-navy/40 ml-1">Current Grade/Level</label>
                        <input required className="w-full px-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" placeholder="e.g. Form 3" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold text-navy/40 ml-1">School Location (Town/Sub-County)</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/20" />
                          <input required className="w-full pl-12 pr-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Motivation */}
                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-brand border-b border-brand/10 pb-2">3. Statement of Need</h4>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-navy/40 ml-1">Tell us about your dreams and why you need this scholarship.</label>
                      <textarea required rows={5} className="w-full px-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand resize-none" />
                    </div>
                  </div>

                  {/* Submission Notice */}
                  <div className="bg-gold/5 p-4 rounded-xl border border-gold/20 flex gap-4">
                    <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <p className="text-xs text-navy/60 leading-relaxed font-medium">
                      By submitting this form, you certify that all information provided is accurate. 
                      False information will lead to immediate disqualification and possible legal action.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full h-14 bg-brand hover:bg-brand-dark text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    {loading ? (
                      <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Processing...</>
                    ) : "Submit Scholarship Application"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
