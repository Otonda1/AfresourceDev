"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeServeHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      {/* Background Image with Green Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/modern-office-glass.jpg"
          alt="Modern African corporate office interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.span
              className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Strategic Partnerships
            </motion.span>

            <motion.h1
              className="mt-6 font-heading-bold text-4xl text-background md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Empowering the Engines of African Transformation
            </motion.h1>

            <motion.p
              className="mt-8 max-w-lg font-body-normal text-base leading-relaxed text-background/70 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            >
              We partner with visionary organizations navigating the complex
              journey from foundational growth to pan-African market leadership.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
