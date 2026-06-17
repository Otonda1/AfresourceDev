"use client";

import { motion } from "framer-motion";

export default function IntroStatement() {
  return (
    <section className="bg-background py-12 md:py-16">
      {/* spacing standardized */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          className="max-w-3xl border-l-2 border-accent pl-8 font-body-normal text-base leading-relaxed text-foreground/70 md:text-lg md:pl-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          These are examples of organizations that often benefit from
          Organizational Readiness support as they grow, evolve, and navigate
          change.
        </motion.p>
      </div>
    </section>
  );
}
