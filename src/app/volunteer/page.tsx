"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Calendar, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-3xl shadow-xl text-center border border-laurel/20"
        >
          <div className="w-20 h-20 bg-laurel/10 text-laurel rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-navy mb-4">Application Sent!</h2>
          <p className="text-navy/60 mb-8">
            Thank you for your interest in joining MGCE. Our team will review your application and get back to you within 3-5 business days.
          </p>
          <Button variant="outline" className="rounded-full" onClick={() => setSubmitted(false)}>
            Back to Form
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-brand text-cream py-20 px-4 text-center">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Join the Movement</h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
            Your time and skills can change the trajectory of a young girl&apos;s life. Become an MGCE volunteer today.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Left side: Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-6">Why Volunteer?</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                      <Heart className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-lg mb-1">Make a Real Difference</h4>
                      <p className="text-navy/60">Directly impact the lives of girls through mentorship, education, and support.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-lg mb-1">Grow Your Network</h4>
                      <p className="text-navy/60">Connect with local and international leaders in gender equality and advocacy.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-lg mb-1">Flexible Opportunities</h4>
                      <p className="text-navy/60">From one-day events to long-term mentorship, we have roles that fit your schedule.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy rounded-3xl p-8 text-cream">
                <h3 className="text-xl font-bold mb-4">Current High-Priority Roles:</h3>
                <ul className="space-y-3 text-cream/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full" /> Digital Literacy Trainers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full" /> Career Mentors (Professional Women)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full" /> Event Coordinators
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full" /> Content Creators & Photographers
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border">
              <h3 className="text-2xl font-bold font-heading text-navy mb-8">Volunteer Application</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy/60 ml-1">First Name</label>
                    <input required className="w-full px-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy/60 ml-1">Last Name</label>
                    <input required className="w-full px-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy/60 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30" />
                    <input type="email" required className="w-full pl-12 pr-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy/60 ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30" />
                    <input type="tel" required className="w-full pl-12 pr-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy/60 ml-1">Current Location (Town/City)</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30" />
                    <input required className="w-full pl-12 pr-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy/60 ml-1">Area of Interest</label>
                  <select required className="w-full px-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand appearance-none">
                    <option value="">Select an area</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="education">Education & Tutoring</option>
                    <option value="events">Events & Logistics</option>
                    <option value="media">Media & Communications</option>
                    <option value="admin">Administrative Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy/60 ml-1">Why do you want to volunteer with MGCE?</label>
                  <textarea required rows={4} className="w-full px-4 py-3 bg-cream/30 border border-border rounded-xl focus:outline-none focus:border-brand resize-none" />
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full h-14 bg-brand hover:bg-brand-dark text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
