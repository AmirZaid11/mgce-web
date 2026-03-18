"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream pt-16 pb-8 border-t border-brand/20">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden p-1">
              <Image src="/mgce.jpeg" alt="MGCE Logo" fill className="object-cover rounded-full" />
            </div>
            <span className="font-heading font-bold text-xl text-gold">MGCE</span>
          </Link>
          <p className="text-sm text-cream/80 max-w-xs">
            Empowering the Girl Child, One Future at a Time. Dedicated to transforming lives across Kenya through education, mentorship, and support.
          </p>
          <div className="flex space-x-4 pt-2">
            <Link href="#" className="text-cream/80 hover:text-gold transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="text-cream/80 hover:text-gold transition-colors"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-cream/80 hover:text-gold transition-colors"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-cream/80 hover:text-gold transition-colors"><Linkedin className="h-5 w-5" /></Link>
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
              className="px-3 py-2 bg-navy-dark border border-cream/20 rounded-md text-sm text-white focus:outline-none focus:border-gold w-full"
            />
            <Button type="submit" variant="gold" size="sm">Subscribe</Button>
          </form>
        </div>
      </div>
      
      <div className="container pt-8 border-t border-cream/10 text-center text-xs text-cream/60">
        <p>&copy; {new Date().getFullYear()} Maseno Girl Child Empowerment (MGCE). Founded 2022. All rights reserved.</p>
      </div>
    </footer>
  );
}
