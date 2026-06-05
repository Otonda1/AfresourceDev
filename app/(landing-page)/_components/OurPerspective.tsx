"use client";

import { motion } from "framer-motion";

export default function OurPerspective() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column — Heading */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-heading-bold text-3xl italic text-secondary md:text-4xl lg:text-[2.5rem]">
              Our Perspective
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
          <div className="lg:col-span-6 space-y-8">
            <motion.p
              className="font-body-normal text-lg leading-relaxed text-foreground/90 md:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Organizations perform best when people are supported by systems
              that are clear, practical, and aligned to how work actually
              happens. As organizations grow, transition, or become more
              complex, informal ways of working often begin to create gaps — in
              onboarding, performance, decision-making, mobility, recognition,
              and accountability.
            </motion.p>

            <motion.p
              className="font-body-normal text-lg leading-relaxed text-foreground/90 md:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              Afresource helps organizations strengthen these underlying systems
              so people can operate with greater clarity, consistency, and
              effectiveness.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="/about"
                className="inline-flex items-center gap-2 font-body-semibold text-primary hover:text-secondary transition-colors duration-200 group"
              >
                Discover our methodology
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
