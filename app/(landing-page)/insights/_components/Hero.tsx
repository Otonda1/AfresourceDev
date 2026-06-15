"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function InsightsHero() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.22em] text-accent">
            Perspectives
          </span>
          <div className="h-px w-16 bg-accent/40" />
        </motion.div>

        {/* Asymmetric grid: 7/5 split */}
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[7fr_5fr] lg:gap-0">
          {/* Left — text */}
          <div className="flex flex-col justify-between gap-12 lg:pr-20">
            <motion.h1
              className="font-heading-bold text-4xl italic text-primary md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Practical reflections on people systems, structure, and
              performance.
            </motion.h1>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            >
              <p className="max-w-lg border-l-2 border-accent pl-6 font-body-normal text-base leading-relaxed text-foreground/70 md:text-lg">
                Perspectives drawn from practical organizational experience —
                exploring how Organizational Readiness influences performance,
                growth, change, and long-term sustainability.
              </p>
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative h-full min-h-72 overflow-hidden lg:min-h-0">
              <Image
                src="/boardroom.jpg"
                alt="Executive boardroom"
                fill
                className="object-cover grayscale"
                priority
              />
              {/* Subtle overlay that ties image to brand */}
              <div className="absolute inset-0 bg-primary/10" />
              {/* Caption strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary/80 px-6 py-4">
                <p className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-background/60">
                  Organizational Readiness
                </p>
                <p className="mt-0.5 font-body-normal text-sm text-background/90">
                  Perspectives from the field
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
