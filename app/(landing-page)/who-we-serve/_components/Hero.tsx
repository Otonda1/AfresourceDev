"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeServeHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/modern-office-glass.jpg"
          alt="Modern institutional office interior with high ceilings and structural columns"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      <div className="relative z-10 flex min-h-[85vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              className="inline-block border-l-2 border-accent pl-4 font-body-semibold text-xs uppercase tracking-[0.2em] text-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Who We Serve
            </motion.span>

            <motion.h1
              className="mt-8 font-heading-bold text-4xl italic text-background md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              For organizations growing beyond informal systems.
            </motion.h1>

            <motion.p
              className="mt-8 max-w-xl font-body-normal text-base leading-relaxed text-background/70 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              Afresource works with organizations navigating growth, transition,
              and increasing complexity by strengthening the foundations
              required for organizational readiness and sustainable performance.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
