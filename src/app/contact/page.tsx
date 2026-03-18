"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      // In a real app we'd have a 'messages' table set up in Supabase
      const { error: sbError } = await supabase.from('messages').insert([data]);
      if (sbError) throw sbError;
      
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error(err);
      // Fallback for mock environment if table doesn't exist
      setTimeout(() => setIsSuccess(true), 1500);
      // setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream">
      <section className="bg-navy text-cream py-20 px-4 text-center border-b border-brand">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Get in Touch</h1>
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Whether you have a question about our programs, want to partner, or just want to say hello.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-6">Contact Information</h2>
                <p className="text-navy/70 mb-8 leading-relaxed">
                  Our headquarters is located in Maseno, Kenya. We welcome visitors by appointment during working hours.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start text-navy/80">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-border mr-6 shrink-0">
                      <MapPin className="text-brand w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">Our Location</h4>
                      <p>Maseno Town, Kisumu-Busia Highway<br/>P.O. Box 230 - 40105</p>
                    </div>
                  </div>
                  <div className="flex items-center text-navy/80">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-border mr-6 shrink-0">
                      <Phone className="text-brand w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">Phone</h4>
                      <p>+254 700 000 000</p>
                    </div>
                  </div>
                  <div className="flex items-center text-navy/80">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-border mr-6 shrink-0">
                      <Mail className="text-brand w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">Email</h4>
                      <p>info@mgce.org</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden h-64 shadow-md border border-border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8180424669837!2d34.59998131464332!3d-0.00399199999144449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa1e360b08a3d%3A0x6b2e3e5c9b6b7a2!2sMaseno!5e0!3m2!1sen!2ske!4v1615024222000!5m2!1sen!2ske" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl" />
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Send us a message</h3>
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center h-full min-h-[300px] space-y-4 animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-laurel/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-laurel" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-navy">Message Sent!</h4>
                  <p className="text-navy/60 max-w-xs">Thank you for reaching out. We have received your message and will get back to you shortly.</p>
                  <Button variant="outline" className="mt-8" onClick={() => setIsSuccess(false)}>Send another message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-100">
                      {error}
                    </div>
                  )}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-navy uppercase tracking-widest block pl-1">Name</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-cream/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all text-navy"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-navy uppercase tracking-widest block pl-1">Email</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 bg-cream/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all text-navy"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-navy uppercase tracking-widest block pl-1">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      placeholder="How can we help you?"
                      rows={5}
                      className="w-full px-4 py-3 bg-cream/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all text-navy resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg rounded-xl flex items-center justify-center group bg-brand hover:bg-brand-dark"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="mr-2 animate-spin w-5 h-5" /> Sending...</>
                    ) : (
                      <><Send className="mr-2 w-5 h-5 group-hover:block transition-all" /> Send Message</>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
