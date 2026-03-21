"use client";

import { motion } from "framer-motion";
import EventsCalendar from "@/components/EventsCalendar";
import { Sparkles, Calendar as CalendarIcon } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-cream pb-24">
      {/* Header */}
      <section className="bg-navy text-cream py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl -z-0" />
        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-gold text-sm font-bold mb-6 border border-white/20">
              <Sparkles className="w-4 h-4" />
              <span>UPCOMING EVENTS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Mark Your <span className="text-gold">Calendar</span></h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto">
              Join us for our upcoming mentorship camps, workshops, and community advocacy events. 
              Every event is a step towards a brighter future for the girl child.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-navy flex items-center justify-center gap-2">
              <CalendarIcon className="w-6 h-6 text-brand" /> 2026 Engagement Series
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-4" />
          </div>
          
          <EventsCalendar />
          
          <div className="mt-20 bg-white p-8 md:p-12 rounded-3xl border border-border text-center max-w-4xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-navy mb-4">Want to host an MGCE event in your school?</h3>
            <p className="text-navy/60 mb-8">
              We are always looking to expand our reach. If you are a student leader or administrator, reach out to us for a partnership.
            </p>
            <Button size="lg" className="rounded-full bg-brand hover:bg-brand-dark px-10">
              <Link href="/contact">Propose an Event</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";
