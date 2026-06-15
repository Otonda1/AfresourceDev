"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      id="approach"
      className="border-t border-foreground/10 bg-background py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="font-heading-bold text-3xl italic text-secondary md:text-4xl lg:text-[2.5rem]">
              Our Services
            </span>
            <motion.div
              className="mt-5 h-0.5 w-16 bg-secondary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
          </motion.div>

          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
              Afresource supports organizations in strengthening the systems
              that shape how people are onboarded, supported, managed,
              recognized, and aligned to organizational goals.
            </p>
            <p className="mt-6 font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
              Our services focus on practical people systems, organizational
              clarity, governance, and long-term organizational effectiveness.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
