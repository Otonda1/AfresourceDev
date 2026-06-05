"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function InsightsHero() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column — Content */}
          <div className="space-y-6">
            <motion.span
              className="inline-block border-l-2 border-accent pl-4 font-body-semibold text-xs uppercase tracking-[0.2em] text-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Perspectives
            </motion.span>

            <motion.h1
              className="mt-8 font-heading-bold text-4xl italic text-primary md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Practical reflections on people systems, structure, and
              performance.
            </motion.h1>

            <motion.p
              className="mt-8 max-w-xl font-body-normal leading-relaxed text-foreground md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              Afresource shares perspectives drawn from real organizational
              experience — exploring how people systems, governance,
              transitions, and organizational clarity shape performance over
              time.
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
                src="/boardroom.jpg"
                alt="Executive boardroom overlooking a Pan-African city skyline"
                width={5184}
                height={3456}
                className="h-auto w-full object-cover grayscale"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
