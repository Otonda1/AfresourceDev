"use client";

import { motion } from "framer-motion";

export default function AboutPerspective() {
  return (
    <section className="bg-primary py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          className="font-body-semibold text-xs uppercase tracking-[0.25em] text-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Perspective
        </motion.span>

        <motion.h2
          className="mt-6 font-heading-bold text-3xl italic text-background md:text-4xl lg:text-5xl lg:leading-[1.15]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          Better systems create better conditions for lasting transformation.
        </motion.h2>

        <motion.p
          className="mx-auto mt-12 max-w-3xl font-body-normal text-base leading-relaxed text-background/60 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          We believe that growth is not just about financial infusion, but about
          the structural integrity of the systems that govern and sustain it.
          Our philosophy is rooted in the structural improvement of institutions
          to ensure pan-African excellence.
        </motion.p>

        <motion.div
          className="mx-auto mt-10 h-0.5 w-16 bg-accent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
