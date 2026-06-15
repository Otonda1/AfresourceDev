"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32 lg:py-40">
      {/* Concentric circle decorations */}
      <div className="pointer-events-none absolute -right-20 -top-40 h-125 w-125 rounded-full border border-background/6" />
      <div className="pointer-events-none absolute -right-4 -top-20 h-80 w-[320px] rounded-full border border-background/4" />

      {/* Accent bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-secondary" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row — eyebrow + page indicator */}
        <motion.div
          className="flex items-start justify-between"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.22em] text-secondary">
            Structural Interventions
          </span>
          <span className="font-body-normal text-xs uppercase tracking-[0.12em] text-background/30">
            Services / Overview
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-8 max-w-3xl font-heading-bold text-4xl italic text-background md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          Services designed around how organizations actually work.
        </motion.h1>

        {/* Bottom row — body copy + CTAs */}
        <motion.div
          className="mt-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          <p className="max-w-md border-l-2 border-secondary/40 pl-6 font-body-normal text-base leading-relaxed text-background/70 md:text-lg">
            Afresource helps organizations design and strengthen people systems,
            organizational structures, and governance frameworks that support
            clarity, consistency, and sustainable performance.
          </p>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              href="/contact"
              className="inline-block bg-secondary px-8 py-4 font-body-semibold text-sm uppercase tracking-[0.15em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start a Conversation
            </Link>
            <Link
              href="/insights"
              className="inline-block border border-background/20 px-8 py-4 font-body-semibold text-sm uppercase tracking-[0.15em] text-background/80 transition-all duration-300 hover:border-background/50 hover:text-background"
            >
              Explore Our Approach
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
