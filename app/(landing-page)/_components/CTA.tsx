"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32 lg:py-40">
      {/* Subtle radial glow center */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <svg
          width="380"
          height="380"
          viewBox="0 0 100 100"
          fill="none"
          className="opacity-[0.03]"
        >
          <path d="M50 8L88 88H12L50 8Z" fill="white" />
          <path d="M50 28L72 88H28L50 28Z" fill="white" opacity="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          className="font-heading-bold text-3xl italic md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-background">Ready to Strengthen </span>
          <span className="text-accent">Organizational Readiness</span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-lg font-body-normal text-base leading-relaxed text-background/70 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          If your organization is preparing for growth, navigating change, or
          strengthening its foundations, let&apos;s start the conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="inline-block bg-accent px-14 py-4 font-body-semibold text-sm uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/20 md:px-20 md:py-5"
          >
            Start A conversation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
