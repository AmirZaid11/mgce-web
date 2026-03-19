"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/news", label: "News" },
  { href: "/quotes", label: "Quotes" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const WHATSAPP_LINK = "https://whatsapp.com/channel/0029Vac4qi7I7BeEmwRCGT2n";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand">
            <Image src="/images/mgce.jpeg" alt="MGCE Logo" fill className="object-cover" />
          </div>
          <span className="hidden md:inline-block font-heading font-bold text-xl text-brand">
            MGCE
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-brand",
                pathname === link.href ? "text-brand font-bold" : "text-navy/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="gold" className="rounded-full shadow-sm hover:shadow-md transition-all">
            <Link href="/donate">Donate Now</Link>
          </Button>
          <Button asChild variant="default" className="rounded-full shadow-sm hover:shadow-md transition-all">
            <Link href={WHATSAPP_LINK} target="_blank">Join Community</Link>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-cream border-b border-border p-4 space-y-4">
          <nav className="flex flex-col space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg transition-colors hover:text-brand",
                  pathname === link.href ? "text-brand font-bold" : "text-navy/70"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            <Button asChild variant="gold" className="w-full justify-start" onClick={() => setIsOpen(false)}>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button asChild variant="default" className="w-full justify-start" onClick={() => setIsOpen(false)}>
              <Link href={WHATSAPP_LINK} target="_blank">Join Community</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
