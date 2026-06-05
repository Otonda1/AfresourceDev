"use client";

import { motion } from "framer-motion";

const outcomes = [
  {
    number: "01",
    label: "Onboarding",
    description:
      "From fragmented integration to automated, culturally aligned frameworks that ensure immediate productivity and belonging.",
  },
  {
    number: "02",
    label: "Accountability",
    description:
      "From overlapping responsibilities to crystalized ownership matrices that prevent tasks from falling through the cracks.",
  },
  {
    number: "03",
    label: "Performance",
    description:
      "From subjective, annual reviews to continuous, objective feedback loops tied directly to systemic goals.",
  },
  {
    number: "04",
    label: "Alignment",
    description:
      "From siloed departments competing for resources to an integrated architecture driving toward a unified strategic intent.",
  },
];

export default function Outcomes() {
  return (
    <section className="bg-primaryAccent/20 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
            Outcomes
          </span>
          <h2 className="mt-4 max-w-2xl font-heading-bold text-3xl italic text-primary md:text-4xl">
            Principles in Practice.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.number}
              className="border-l-2 border-foreground/10 pl-8 transition-colors duration-300 hover:border-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <h4 className="mb-4 font-body-semibold text-xs uppercase tracking-[0.15em] text-primary">
                {item.number} / {item.label}
              </h4>
              <p className="font-body-normal text-sm leading-relaxed text-foreground/70 md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
