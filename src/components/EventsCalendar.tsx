"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Maseno Mentorship Camp 2026",
    date: "2026-05-15",
    time: "08:00 AM - 05:00 PM",
    location: "Maseno University Hall",
    category: "Mentorship",
    description: "A 3-day intensive camp for high school girls focusing on leadership and career guidance.",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    title: "Digital Literacy Workshop",
    date: "2026-06-02",
    time: "10:00 AM - 02:00 PM",
    location: "MGCE Resource Center",
    category: "Technology",
    description: "Hands-on training session on web design and digital marketing for young women.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Menstrual Health Advocacy Walk",
    date: "2026-06-28",
    time: "07:00 AM - 12:00 PM",
    location: "Kisian Town Square",
    category: "Health",
    description: "Community walk to raise awareness and distribute dignity kits to rural schools.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export default function EventsCalendar() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, i) => (
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
