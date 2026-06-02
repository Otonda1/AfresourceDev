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
              className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Perspectives
            </motion.span>

            <motion.h1
              className="font-heading-bold text-4xl italic text-primary md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Insights forged in operation.
            </motion.h1>

            <motion.p
              className="max-w-lg font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              At Afresource Network Ltd, we do not believe in theoretical
              frameworks divorced from reality. Our perspectives are drawn from
              the intricate ways Pan-African organizations actually operate—the
              unspoken hierarchies, the cultural nuances of governance, and the
              friction points of rapid transition.
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
