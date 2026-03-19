"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-cream py-20 px-4">
      <div className="container max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-navy max-w-none"
        >
          <h1 className="text-4xl font-heading font-bold text-navy mb-8">Terms of Service</h1>
          <p className="text-sm text-navy/50 mb-8">Last Updated: March 19, 2026</p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">1. Acceptance of Terms</h2>
            <p className="text-navy/70 leading-relaxed">
              By accessing and using the Maseno Girl Child Empowerment (MGCE) website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">2. Use of the Website</h2>
            <p className="text-navy/70 leading-relaxed mb-4">
              You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes:
            </p>
            <ul className="list-disc pl-6 text-navy/70 space-y-2">
              <li>Harassing or causing distress to any person.</li>
              <li>Transmitting obscene or offensive content.</li>
              <li>Disrupting the normal flow of dialogue within the community.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">3. Donations</h2>
            <p className="text-navy/70 leading-relaxed">
              All donations made through our website are final and non-refundable unless otherwise required by law. By making a donation, you represent that you have the legal right to use the payment method provided.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">4. Intellectual Property</h2>
            <p className="text-navy/70 leading-relaxed">
              The content on this website, including text, graphics, logos, and images, is the property of MGCE or its content suppliers and is protected by international copyright laws. Unauthorized use of this content is prohibited.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">5. Limitation of Liability</h2>
            <p className="text-navy/70 leading-relaxed">
              MGCE shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the website or services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">6. Changes to Terms</h2>
            <p className="text-navy/70 leading-relaxed">
              We reserve the right to modify these terms at any time. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-4">7. Governing Law</h2>
            <p className="text-navy/70 leading-relaxed">
              These terms are governed by and construed in accordance with the laws of Kenya.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
