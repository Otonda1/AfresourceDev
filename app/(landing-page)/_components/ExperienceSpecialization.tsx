"use client";

import { motion } from "framer-motion";

export default function ExperienceSpecialization() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + Text Row */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column — Heading */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
              Our Track Record
            </span>
            <h2 className="mt-3 font-heading-bold text-3xl italic text-primary md:text-4xl lg:text-[2.5rem]">
              Experience & Specialization
            </h2>
            <motion.div
              className="mt-5 h-0.5 w-16 bg-secondary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
          </motion.div>

          {/* Right Column — Content */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                Afresource&apos;s perspective is shaped by practical experience
                across corporate and development environments. This includes
                exposure to organizational transitions, onboarding, staff
                mobility, employee lifecycle processes, performance management
                systems, and people systems design
              </p>
              <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                That grounding informs an approach that balances structure,
                clarity, and operational reality — helping organizations build
                systems that work in practice, not just on paper.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
