"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .8.11V9.42a7.27 7.27 0 0 0-3.47-.64 7.27 7.27 0 0 0-2.31 14.22 7.27 7.27 0 0 0 9.47-7V8.6a8.27 8.27 0 0 0 5.62 2.12V7.28a8.19 8.19 0 0 1-5-.59z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-navy text-cream pt-16 pb-8 border-t border-brand/20">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 px-4">
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden p-1 border-2 border-brand">
              <Image src="/images/mgce.jpeg" alt="MGCE Logo" fill className="object-cover rounded-full" />
            </div>
            <span className="font-heading font-bold text-xl text-gold">MGCE</span>
          </Link>
          <p className="text-sm text-cream/80 max-w-xs">
            Empowering the Girl Child, One Future at a Time. Dedicated to transforming lives across Kenya through education, mentorship, and support.
          </p>
          <div className="flex space-x-4 pt-2">
            <Link href="https://whatsapp.com/channel/0029ValCH7y8vd1K0vQ7901A" className="text-cream/80 hover:text-gold transition-colors" title="WhatsApp Channel" target="_blank">
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link href="https://www.tiktok.com/@mgce_kenya" className="text-cream/80 hover:text-gold transition-colors" title="TikTok" target="_blank">
              <TikTokIcon className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/mgce_kenya" className="text-cream/80 hover:text-gold transition-colors" title="Instagram" target="_blank">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.facebook.com/mgcekenya" className="text-cream/80 hover:text-gold transition-colors" title="Facebook" target="_blank">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-gold transition-colors">Our Programs</Link></li>
            <li><Link href="/impact" className="hover:text-gold transition-colors">Impact & Stories</Link></li>
            <li><Link href="/news" className="hover:text-gold transition-colors">Latest News</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg text-gold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
            <li><Link href="/donate" className="hover:text-gold transition-colors">Donation Terms</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg text-gold mb-4">Newsletter</h4>
          <p className="text-sm text-cream/80 mb-4">Subscribe to get the latest updates on our impact.</p>
          <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="px-3 py-2 bg-navy-dark border border-cream/20 rounded-md text-sm text-white focus:outline-none focus:border-gold w-full shadow-inner"
            />
            <Button type="submit" variant="gold" size="sm" className="shadow-md hover:shadow-lg transition-all">Subscribe</Button>
          </form>
        </div>
      </div>
      
      <div className="container pt-8 border-t border-cream/10 text-center text-xs text-cream/60">
        <p>&copy; {new Date().getFullYear()} Maseno Girl Child Empowerment (MGCE). Founded 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
