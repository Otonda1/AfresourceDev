"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0f1f15] py-24 md:py-32 lg:py-40">
      {/* Subtle radial glow center */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          className="font-heading-bold text-3xl italic text-background md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Let&apos;s Discuss Your Organization
        </motion.h2>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="inline-block bg-accent px-10 py-4 font-body-semibold text-sm uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start a Conversation
          </Link>

          <Link
            href="/services"
            className="inline-block border border-white/30 px-10 py-4 font-body-semibold text-sm uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-white/10"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
