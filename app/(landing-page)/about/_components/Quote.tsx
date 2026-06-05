"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          className="font-heading-bold text-3xl italic text-primary md:text-4xl lg:text-[2.75rem] lg:leading-[1.2]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          &ldquo;Organizations perform best when people and systems work
          together in alignment.&rdquo;
        </motion.h2>

        <motion.div
          className="mx-auto mt-12 h-[2px] w-16 bg-secondary"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
