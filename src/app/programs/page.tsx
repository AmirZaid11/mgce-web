"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Tent, Laptop, Droplet, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const programs = [
  {
    id: "education-sponsorship",
    title: "Education Sponsorship",
    icon: GraduationCap,
    description: "We provide full scholarships, school uniforms, and learning materials to gifted girls from marginalized backgrounds, ensuring uninterrupted learning.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-brand"
  },
  {
    id: "leadership-camps",
    title: "Leadership Camps",
    icon: Tent,
    description: "Annual immersive bootcamps focused on building self-esteem, public speaking, and community leadership skills for high school girls.",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-gold-dark"
  },
  {
    id: "digital-skills",
    title: "Digital Skills",
    icon: Laptop,
    description: "Equipping young women with essential modern skills including coding, digital marketing, and computer literacy to bridge the gender tech gap.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-navy"
  },
  {
    id: "menstrual-health",
    title: "Menstrual Health & Hygiene",
    icon: Droplet,
    description: "Distributing dignified sanitary kits and providing reproductive health education to eradicate period poverty and keep girls in school.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-[#E11D48]" // distinct rose red
  },
  {
    id: "mentorship",
    title: "1-on-1 Mentorship",
    icon: Users,
    description: "Pairing girls with professional female mentors from various industries to provide academic and career guidance and emotional support.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-laurel"
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship Funding",
    icon: Lightbulb,
    description: "Providing micro-grants and intensive business training for young women launching community-based startups and small enterprises.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-brand-light"
  }
];

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-cream py-20 px-4 text-center border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <span className="text-brand font-bold tracking-wider uppercase text-sm mb-4 block">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">Empowerment Programs</h1>
          <p className="text-lg text-navy/70 leading-relaxed max-w-2xl mx-auto">
            Our holistic approach is divided into 6 core pillars, each intentionally designed to address the specific intersectional challenges facing the Kenyan girl child today.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute top-4 left-4 z-10 w-12 h-12 rounded-full ${program.color} text-white flex items-center justify-center shadow-lg`}>
                    <program.icon className="w-6 h-6" />
                  </div>
                  <Image 
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-heading font-bold text-white leading-tight">
                    {program.title}
                  </h3>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-navy/80 mb-6 flex-1">{program.description}</p>
                  
                  <Button variant="outline" className="w-full group-hover:bg-brand group-hover:text-white transition-colors" asChild>
                    <Link href={`/donate?program=${program.id}`}>
                      Support this Program <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="bg-navy rounded-3xl p-8 md:p-16 text-center text-cream relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gold rounded-full blur-3xl opacity-20" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white text-balance">
                Your contribution directly powers these initiatives.
              </h2>
              <p className="text-lg text-cream/80 mb-8">
                Every sum, big or small, plays a crucial role in shaping a better tomorrow for a girl.
              </p>
              <Button variant="gold" size="lg" className="rounded-full px-8 text-lg" asChild>
                <Link href="/donate">Sponsor a Girl Child</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
