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
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gold">Invest in a Girl's Future</h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
            Your generous donation directly funds school fees, mentorship programs, and essential health supplies for girls in rural Kenya.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Payment Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-border">
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
                <div className="w-12 h-12 bg-laurel/10 text-laurel rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-heading text-navy">Make a Donation</h2>
                  <p className="text-navy/60 text-sm">Secure payment powered by Stripe (Test Mode)</p>
                </div>
              </div>

              <form onSubmit={handleDonate} className="space-y-8">
                {/* Amount Selection */}
                <div>
                  <h3 className="text-lg font-bold text-navy mb-4">Select Amount</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    {presetAmounts.map((preset) => (
                      <button
                        key={preset.value}
                        type="button"
                        onClick={() => { setAmount(preset.value); setCustomAmount(""); }}
                        className={`py-4 rounded-xl border-2 transition-all font-bold text-lg ${
                          amount === preset.value
                            ? "border-brand bg-brand/5 text-brand"
                            : "border-border bg-transparent text-navy hover:border-brand/30 hover:bg-cream"
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setAmount("custom")}
                      className={`py-4 px-4 rounded-xl border-2 transition-all font-bold text-lg ${
                        amount === "custom"
                          ? "border-brand bg-brand/5 text-brand"
                          : "border-border bg-transparent text-navy hover:border-brand/30 hover:bg-cream"
                      }`}
                    >
                      Custom
                    </button>
                  </div>

                  {amount === "custom" && (
                    <div className="relative mt-4">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-navy/50">KES</span>
                      <input 
                        type="number"
                        min="100"
                        step="100"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full text-lg font-bold text-navy pl-16 pr-4 py-4 rounded-xl border-2 border-brand bg-brand/5 focus:outline-none focus:ring-4 focus:ring-brand/10 transition-all"
                        required
                      />
                    </div>
                  )}
                </div>

                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-navy">Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      required
                      className="w-full px-4 py-3 bg-cream/50 border border-border rounded-xl focus:outline-none focus:border-brand text-navy"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      required
                      className="w-full px-4 py-3 bg-cream/50 border border-border rounded-xl focus:outline-none focus:border-brand text-navy"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    className="w-full px-4 py-3 bg-cream/50 border border-border rounded-xl focus:outline-none focus:border-brand text-navy"
                  />
                </div>

                {/* Submit button */}
                <Button 
                  type="submit" 
                  disabled={isProcessing || currentAmount < 100}
                  className="w-full h-16 text-xl rounded-xl bg-brand hover:bg-brand-dark transition-colors flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" /> 
                  {isProcessing ? "Processing via Stripe..." : `Donate KES ${currentAmount.toLocaleString()}`}
                </Button>
                
                <p className="text-center text-xs text-navy/50 flex items-center justify-center gap-1">
                  <CreditCard className="w-4 h-4" /> Payments are secure and encrypted.
                </p>
              </form>
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
                      <p className="text-cream/80 text-sm">Fully sponsors a girl's high school tuition, uniform, and books for an entire academic year.</p>
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
