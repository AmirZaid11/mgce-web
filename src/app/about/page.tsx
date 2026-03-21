"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Heart, MessageCircle, Instagram } from "lucide-react";

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
    name: "Pollette",
    role: "Co-Founder & Executive Director",
    bio: "With over 5 years in education policy, Pollette founded MGCE to bridge the gap in girls&apos; education in rural Kenya.",
    image: "/ceo1.jpeg"
  },
  {
    name: "Liz Achieng",
    role: "Co-Founder",
    bio: "A passionate advocate for youth empowerment and mental health, Liz designs our core mentorship frameworks.",
    image: "/images/ceo2.jpeg"
  }
];

const leadership = [
  { name: "Anonymous User", title: "Chair", image: "/images/mgce.jpeg" },
  { name: "Shalon Kimani", title: "Vice Chair", image: "/images/pic9.jpeg" },
  { name: "Pauline Melvine", title: "Programmes Co-ordinator", image: "/images/pic1.jpeg" },
  { name: "Marian Loki", title: "Secretary", image: "/images/pic2.jpeg" },
  { name: "Desma Annah", title: "Vice Secretary", image: "/images/pic3.jpeg" },
  { name: "Sheila Akinyi", title: "Communication Lead", image: "/images/pic4.jpeg" },
  { name: "Nicole Harriet", title: "Mental Health Lead", image: "/images/pic5.jpeg" },
  { name: "Mudeizi Sharon", title: "Creative and Media Lead", image: "/images/pic6.jpeg" },
  { name: "Elizabeth Omolo", title: "Treasurer", image: "/images/pic7.jpeg" },
  { name: "Laura Onyango", title: "Welfare and Support Coordinator", image: "/images/pic8.jpeg" },
  { name: "MARTHA ANYANGO", title: "PUBLIC RELATIONS", image: "/images/pi10.jpeg" }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Header Section */}
      <section className="bg-brand text-cream py-20 px-4 text-center mt-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center relative bg-blend-multiply">
        <div className="absolute inset-0 bg-brand/90" />
        <div className="container relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About MGCE</h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mb-4">
            Pride & Power | Educate Her. Empower Her. Elevate Her
          </p>
          <p className="text-base text-cream/80 max-w-2xl mx-auto">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
                <div className="flex gap-3">
                  <a href="https://wa.me/" target="_blank" className="text-navy/40 hover:text-brand transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" className="text-navy/40 hover:text-brand transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Alumni Success Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy mb-4">Alumni Network</h2>
            <p className="text-navy/60 max-w-2xl mx-auto">Our impact continues long after graduation. Meet some of the trailblazers who started here.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Amina Juma",
                year: "Class of 2024",
                quote: "MGCE gave me the technical skills to launch my startup. I now employ three other women from my village.",
                role: "Tech Entrepreneur"
              },
              {
                name: "Mercy Adhiambo",
                year: "Class of 2024",
                quote: "The mentorship program helped me navigate my university applications. I am now pursuing my Degree in Nursing.",
                role: "Nursing Student"
              }
            ].map((alumni, i) => (
              <motion.div
                key={alumni.name}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-cream p-8 rounded-3xl border border-brand/10 relative group"
              >
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-gold text-navy text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-md">
                  Alumna
                </div>
                <p className="text-navy/80 italic mb-6 leading-relaxed">&quot;{alumni.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center font-bold">
                    {alumni.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{alumni.name}</h4>
                    <p className="text-xs text-brand/60">{alumni.role} • {alumni.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
