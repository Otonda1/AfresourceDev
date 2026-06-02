"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column — Content */}
          <div className="space-y-6">
            <motion.span
              className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Established Presence
            </motion.span>

            <motion.h2
              className="font-heading-bold text-4xl italic text-primary md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Who We Are
            </motion.h2>

            <motion.p
              className="max-w-md font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              Afresource Network Ltd is a premium pan-African advisory firm
              dedicated to bridging the gap between high-level strategy and
              ground-level implementation. We operate at the intersection of
              governance, economic development, and institutional
              transformation.
            </motion.p>
          </div>

          {/* Right Column — Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden">
              <Image
                src="/about/who-we-are-illustration.png"
                alt="Abstract geometric composition representing institutional architecture"
                width={600}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
