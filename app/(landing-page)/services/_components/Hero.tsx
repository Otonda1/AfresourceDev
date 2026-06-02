// app/services/sections/ServicesHero.tsx
"use client";

import { motion } from "framer-motion";

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
          Architecture for Growth and African Excellence.
        </motion.h1>

        <motion.div
          className="mt-12 max-w-2xl border-l-2 border-secondary pl-8 md:mt-16 md:pl-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
            We specialize in the structural alignment of pan-African
            enterprises. By integrating governance, people, and sustainable
            frameworks, we build the infrastructure required for high-stakes
            advisory and long-term institutional stability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
