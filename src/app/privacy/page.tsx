"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-cream py-20 px-4">
      <div className="container max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-navy max-w-none"
        >
          <h1 className="text-4xl font-heading font-bold text-navy mb-8">Privacy Policy</h1>
          <p className="text-sm text-navy/50 mb-8">Last Updated: March 19, 2026</p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">1. Introduction</h2>
            <p className="text-navy/70 leading-relaxed">
              Maseno Girl Child Empowerment (MGCE) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">2. Information We Collect</h2>
            <p className="text-navy/70 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 text-navy/70 space-y-2">
              <li>Name and contact details (email address, phone number).</li>
              <li>Donation information and history.</li>
              <li>Community account details (username, profile information).</li>
              <li>Messages sent through our contact forms.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">3. How We Use Your Information</h2>
            <p className="text-navy/70 leading-relaxed mb-4">
              We use the collected information for:
            </p>
            <ul className="list-disc pl-6 text-navy/70 space-y-2">
              <li>Processing donations and providing receipts.</li>
              <li>Communicating about our programs, news, and impact.</li>
              <li>Managing community memberships and accounts.</li>
              <li>Improving our website and services.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">4. Data Security</h2>
            <p className="text-navy/70 leading-relaxed">
              We implement industry-standard security measures to protect your data. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">5. Third-Party Services</h2>
            <p className="text-navy/70 leading-relaxed">
              We use trusted third-party services such as Supabase for data management and Stripe for secure payment processing. These providers have their own privacy policies governing how they handle your information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">6. Your Rights</h2>
            <p className="text-navy/70 leading-relaxed">
              You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at info@mgce.org.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">7. Contact Us</h2>
            <p className="text-navy/70 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:<br />
              <strong>Email:</strong> info@mgce.org<br />
              <strong>Location:</strong> Maseno Town, Kisumu-Busia Highway, Kenya
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
