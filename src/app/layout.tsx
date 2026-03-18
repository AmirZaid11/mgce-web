import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'MGCE | Maseno Girl Child Empowerment',
  description: 'Empowering the Girl Child, One Future at a Time.',
  icons: {
    icon: '/mgce.jpeg',
  },
  openGraph: {
    title: 'Maseno Girl Child Empowerment',
    description: 'Empowering the Girl Child, One Future at a Time in Kenya.',
    url: 'https://mgce.org',
    siteName: 'MGCE',
    images: [
      {
        url: '/mgce.jpeg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-navy bg-cream min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
