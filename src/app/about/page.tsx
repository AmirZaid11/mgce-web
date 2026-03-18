"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Heart, Linkedin } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower Kenyan girls through education, mentorship, and advocacy, enabling them to realize their full potential and become leaders in their communities."
  },
  {
    icon: Eye,
    title: "Vision",
    description: "A world where every girl child has equal opportunities to thrive, lead, and shape a sustainable future free from discrimination and poverty."
  },
  {
    icon: Heart,
    title: "Core Values",
    description: "Integrity, Empowerment, Equality, Resilience, and Community. We believe in lifting each other up and leading by example."
  }
];

const founders = [
  {
    name: "Dr. Grace Achieng",
    role: "Co-Founder & Executive Director",
    bio: "With over 15 years in education policy, Grace founded MGCE to bridge the gap in girls&apos; education in rural Kenya.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Joyce Wanjiku",
    role: "Co-Founder & Head of Programs",
    bio: "A passionate advocate for youth empowerment and mental health, Joyce designs our core mentorship frameworks.",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const leadership = [
  { name: "Sarah Mumbi", title: "Director of Education", image: "https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Lilian Omondi", title: "Community Outreach Lead", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Mercy Kiprotich", title: "Mentorship Coordinator", image: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Faith Ndung&apos;u", title: "Finance Officer", image: "https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Diana Mutua", title: "Digital Skills Trainer", image: "https://images.unsplash.com/photo-1505389657731-0dfeb99b9195?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header Section */}
      <section className="bg-brand text-cream py-20 px-4 text-center mt-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center relative bg-blend-multiply">
        <div className="absolute inset-0 bg-brand/90" />
        <div className="container relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About MGCE</h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
            Founded in 2024 the Maseno Girl Child Empowerment initiative is a registered NGO committed to breaking down barriers and creating pathways to success for girls in Kenya.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cream">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-brand/5 hover:border-brand/20 transition-colors text-center"
              >
                <div className="w-16 h-16 mx-auto bg-brand/10 rounded-full flex items-center justify-center mb-6">
                  <v.icon className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">{v.title}</h3>
                <p className="text-navy/70 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy mb-4">Meet Our Founders</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gold/20 mb-4 shadow-xl">
                  <Image src={founder.image} alt={founder.name} fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-navy">{founder.name}</h3>
                <p className="text-brand font-medium uppercase tracking-wider text-sm">{founder.role}</p>
                <p className="text-navy/70">{founder.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-cream border-t border-border">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Leadership Team</h2>
            <p className="text-navy/60 max-w-2xl mx-auto">The dedicated professionals driving our programs on the ground.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {leadership.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow border-2 border-transparent group-hover:border-gold">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover transition-transform group-hover:scale-110" />
                </div>
                <h4 className="font-bold text-navy mb-1">{leader.name}</h4>
                <p className="text-xs font-medium text-brand text-center mb-3">{leader.title}</p>
                <a href="#" className="text-navy/40 hover:text-brand transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
