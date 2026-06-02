"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f1f15]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-16 lg:py-32">
          {/* Left Column — Content */}
          <div className="flex flex-col items-start space-y-8">
            <motion.span
              className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Architectural Intelligence
            </motion.span>

            <motion.h1
              className="font-heading-bold text-4xl text-background md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] lg:leading-[1.15]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Systems Thinking for African Institutions.
            </motion.h1>

            <motion.p
              className="max-w-lg font-body-normal text-base leading-relaxed text-background/70 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              We architect institutional resilience through deep partnership.
              Afresource Network provides the structural blueprint for
              organizations that require more than just solutions—they require
              intelligence.
            </motion.p>
          </div>

          {/* Right Column — Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden">
              <Image
                src="/about/about-hero.png"
                alt="Architectural blueprint overlay representing institutional systems"
                width={1536}
                height={1024}
                className="h-auto w-full object-cover"
                priority
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0f1f15]/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
