"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Lock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const presetAmounts = [
  { value: 500, label: "KES 500" },
  { value: 1000, label: "KES 1,000" },
  { value: 5000, label: "KES 5,000" },
  { value: 10000, label: "KES 10,000" },
];

export default function DonatePage() {
  const [amount, setAmount] = useState<number | "custom">(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate Stripe Checkout process
    setTimeout(() => {
      setIsProcessing(false);
      router.push("/donate/success");
    }, 2000);
  };

  const currentAmount = amount === "custom" ? Number(customAmount) || 0 : amount;

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream">
      <section className="bg-brand text-cream py-20 px-4 text-center">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gold">Invest in a Girl&apos;s Future</h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
            Your generous donation directly funds school fees, mentorship programs, and essential health supplies for girls in rural Kenya.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Payment Form */}
            <div className="lg:col-span-7 bg-white p-12 md:p-16 rounded-[2.5rem] shadow-xl border border-border text-center flex flex-col justify-center min-h-[500px]">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-gold fill-current" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-4">Investment Portal Opening Soon</h2>
              <p className="text-navy/60 mb-10 text-lg leading-relaxed">
                We are currently finalizing our secure direct-donation infrastructure to ensure every Shilling is tracked with 100% transparency.
              </p>
              <div className="flex flex-col items-center gap-6">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand/5 rounded-full text-brand text-sm font-bold uppercase tracking-widest border border-brand/10">
                  <Lock className="w-4 h-4" />
                  <span>Stripe Integration Pending</span>
                </div>
                <p className="text-navy/40 text-sm font-medium">
                  Please check back next week to start your sponsorship journey.
                </p>
              </div>
            </div>

            {/* Impact Breakdown */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-navy rounded-3xl p-8 text-cream">
                <h3 className="text-2xl font-heading font-bold mb-6 text-gold">Where your money goes</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-2 h-16 bg-brand rounded-full shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">KES 1,000</h4>
                      <p className="text-cream/80 text-sm">Provides one girl with a complete Menstrual Health kit lasting an entire year, ensuring she never misses school during her period.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-2 h-16 bg-gold rounded-full shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">KES 5,000</h4>
                      <p className="text-cream/80 text-sm">Funds a full weekend Leadership and Digital Skills bootcamp for two girls, providing meals, transport, and training materials.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-2 h-16 bg-laurel rounded-full shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">KES 25,000</h4>
                      <p className="text-cream/80 text-sm">Fully sponsors a girl&apos;s high school tuition, uniform, and books for an entire academic year.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-brand/20 rounded-2xl bg-brand/5 text-center">
                <p className="text-sm font-bold text-brand uppercase tracking-widest mb-2">Transparency Promise</p>
                <p className="text-navy/70 text-sm leading-relaxed">
                  100% of all public donations go directly to programmatic costs. Operational and administrative overhead is fully covered by our private endowment partners.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
