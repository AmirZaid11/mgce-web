import Link from "next/link";
import { CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DonateSuccessPage() {
  return (
    <div className="flex flex-col w-full min-h-[80vh] items-center justify-center py-24 bg-cream px-4">
      <div className="max-w-xl mx-auto bg-white p-12 text-center rounded-3xl shadow-xl border border-brand/10">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 bg-laurel/20 rounded-full animate-ping" />
          <div className="relative flex items-center justify-center w-full h-full bg-laurel rounded-full text-white">
            <CheckCircle2 className="w-12 h-12" />
          </div>
        </div>
        
        <h1 className="text-4xl font-heading font-bold text-navy mb-4">Thank You!</h1>
        <p className="text-lg text-navy/70 mb-8 leading-relaxed text-balance">
          Your donation has been processed successfully. A receipt will be sent to your email shortly. You are now a vital part of a girl&apos;s journey to success.
        </p>

        <div className="p-6 bg-gold/10 rounded-2xl mb-8 flex items-center justify-center gap-3 text-gold-dark font-bold">
          <Heart className="w-5 h-5 fill-current" />
          Together, we are empowering the future.
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="gold" size="lg" className="rounded-full">
            <Link href="/impact">See Our Impact</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full border-brand text-brand hover:bg-brand/5">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
