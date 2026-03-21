"use client";

import { motion } from "framer-motion";
import { Heart, GraduationCap, Star, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const students = [
  {
    id: 1,
    name: "Achieng",
    age: 14,
    grade: "Grade 8",
    dream: "Doctor",
    story: "Achieng is a brilliant student who loves science. She hopes to become a cardiologist to help her community.",
    needs: ["School Fees", "Uniforms", "Textbooks"],
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Mumbi",
    age: 12,
    grade: "Grade 6",
    dream: "Engineer",
    story: "Mumbi excels in mathematics and enjoys building things from recycled materials.",
    needs: ["School Fees", "Digital Tablet", "Mentorship"],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Zainabu",
    age: 15,
    grade: "Grade 9",
    dream: "Lawyer",
    story: "Zainabu is a passionate debater and wants to advocate for children's rights in the future.",
    needs: ["School Fees", "Boarding Necessities"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export default function SponsorPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-cream pb-24">
      {/* Header */}
      <section className="bg-brand text-cream py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-navy rounded-full blur-3xl" />
        </div>
        <div className="container max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-gold text-sm font-bold mb-6 border border-white/20">
              <Heart className="w-4 h-4 fill-current" />
              <span>SPONSOR A GIRL</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Invest in a <span className="text-gold">Future</span></h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto">
              Your sponsorship provides more than just education; it provides hope, security, and the power to break the cycle of poverty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Note */}
      <section className="py-8 bg-gold/10 border-b border-gold/20">
        <div className="container px-4">
          <div className="flex items-center justify-center gap-3 text-sm font-bold text-navy/70">
            <ShieldCheck className="w-5 h-5 text-brand" />
            <span>To protect our students, we use pseudonyms and anonymized profiles. Full details are shared only with verified sponsors.</span>
          </div>
        </div>
      </section>

      {/* Profiles Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((student, i) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-border group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={student.image} 
                    alt={student.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold font-heading">{student.name}, {student.age}</h3>
                    <p className="text-sm font-medium opacity-90">{student.grade}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-brand font-bold text-sm mb-4">
                    <GraduationCap className="w-4 h-4" /> Dream: {student.dream}
                  </div>
                  <p className="text-navy/60 text-sm leading-relaxed mb-6">
                    {student.story}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-black uppercase tracking-widest text-navy/30">Current Needs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {student.needs.map(need => (
                        <span key={need} className="px-3 py-1 bg-cream rounded-full text-[10px] font-bold text-navy/70 border border-brand/10">
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full h-14 rounded-2xl bg-brand hover:bg-brand-dark shadow-lg group-hover:shadow-brand/20">
                    <Link href={`/donate?sponsor=${student.id}`}>
                      Sponsor {student.name} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-24 bg-navy text-cream">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">What your <span className="text-gold">Sponsorship</span> covers:</h2>
              <div className="space-y-6">
                {[
                  { title: "Quality Education", desc: "Tuition fees, textbooks, and school supplies for the entire academic year.", icon: Star },
                  { title: "Health & Nutrition", desc: "Access to medical care, sanitary kits, and balanced meals provided at school.", icon: Heart },
                  { title: "Mentorship Circle", desc: "Personalized guidance from MGCE mentors to ensure psychological well-being.", icon: GraduationCap }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-cream/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-brand/20 p-8 md:p-12 rounded-[3rem] border border-white/10">
                <blockquote className="text-2xl font-heading italic text-cream/90 mb-8 leading-relaxed">
                  &quot;Sponsoring a girl through MGCE is like planting a seed. You don&apos;t just see a tree grow; you see an entire forest flourish as she empowers others in her community.&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gold rounded-full" />
                  <div>
                    <h5 className="font-bold">Liz Achieng</h5>
                    <p className="text-gold text-xs font-bold uppercase tracking-widest">Executive Director, MGCE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
