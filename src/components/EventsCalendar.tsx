"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const events: any[] = [];

export default function EventsCalendar() {
  const upcomingEvents = events.filter(e => new Date(e.date) >= new Date());

  if (upcomingEvents.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2.5rem] p-12 text-center border border-border shadow-sm max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 bg-brand/5 rounded-full flex items-center justify-center mx-auto mb-8">
          <CalendarIcon className="w-10 h-10 text-brand/30" />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-4">No Upcoming Events</h3>
        <p className="text-navy/60 mb-8 leading-relaxed">
          The event updating system is currently undergoing maintenance. 
          Please check back later or subscribe to our newsletter for major announcements.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold text-xs font-bold uppercase tracking-widest border border-gold/20">
          <Bell className="w-3 h-3" />
          <span>Status: System Maintenance</span>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {upcomingEvents.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border flex flex-col"
          >
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <div className="absolute top-4 right-4 z-10 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {event.category}
              </div>
              <img 
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex gap-4 mb-4">
                <div className="bg-brand/5 rounded-xl p-2 text-center min-w-[60px] flex flex-col justify-center border border-brand/10">
                  <span className="text-sm font-bold text-brand uppercase">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                  <span className="text-2xl font-bold text-navy">{new Date(event.date).toLocaleDateString('en-US', { day: '2-digit' })}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-navy group-hover:text-brand transition-colors line-clamp-1">{event.title}</h4>
                  <div className="flex items-center text-xs text-navy/50 mt-1">
                    <Clock className="w-3 h-3 mr-1" /> {event.time}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-xs text-navy/60 mb-4">
                <MapPin className="w-3 h-3 mr-1 text-brand" /> {event.location}
              </div>

              <p className="text-sm text-navy/70 line-clamp-2 mb-6 flex-1">
                {event.description}
              </p>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 rounded-xl text-xs">
                  <Bell className="w-3 h-3 mr-2" /> Remind Me
                </Button>
                <Button size="sm" className="bg-navy hover:bg-brand text-white rounded-xl">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
