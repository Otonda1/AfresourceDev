// app/services/sections/ServicesHero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.span
          className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Structural Interventions
        </motion.span>

        <motion.h1
          className="mt-6 max-w-3xl font-heading-bold text-4xl italic text-primary md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          Services designed around how organizations actually work.
        </motion.h1>

        <motion.div
          className="mt-12 max-w-2xl border-l-2 border-secondary pl-8 md:mt-16 md:pl-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
            Afresource helps organizations design and strengthen people systems,
            organizational structures, and governance frameworks that support
            clarity, consistency, and sustainable performance.
          </p>
        </motion.div>
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="inline-block bg-accent px-8 py-4 font-body-semibold text-sm uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start a Conversation
          </Link>
          <Link
            href="/insights"
            className="inline-block border border-foreground/20 px-8 py-4 font-body-semibold text-sm uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
          >
            Explore Our Approach
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

//  className="mt-12 max-w-2xl border-l-2 border-secondary pl-8 md:mt-16 md:pl-10"
