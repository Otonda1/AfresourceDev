"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Organizational Clarity",
    description:
      "Eliminating role ambiguity and operational bottlenecks through precision-engineered reporting lines, accountability structures, and defined KPIs.",
  },
  {
    title: "People Systems",
    description:
      "Designing frameworks for talent acquisition, mobility, and retention that rely on merit, transparency, and clear development pathways rather than ad-hoc decision making.",
  },
  {
    title: "Operational Consistency",
    description:
      "Standardizing critical workflows to ensure that high performance is a reliable outcome of the system, not just the heroic effort of individual contributors.",
  },
  {
    title: "Sustainable Performance",
    description:
      "Building governance structures and feedback loops designed to withstand market volatility, scale efficiently, and adapt to institutional change.",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-primary py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 max-w-3xl md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
            Capabilities
          </span>
          <h2 className="mt-4 font-heading-bold text-3xl italic text-background md:text-4xl lg:text-[2.75rem]">
            What We Help Organizations Strengthen.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 border-t border-white/20 pt-12 md:grid-cols-2 md:gap-y-16 md:pt-16">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group"
            >
              <h3 className="mb-4 flex items-center gap-4 font-heading-medium text-xl text-background md:text-2xl">
                <span className="h-px w-8 bg-accent transition-all duration-300 group-hover:w-12" />
                {cap.title}
              </h3>
              <p className="pl-12 font-body-normal text-sm leading-relaxed text-background/70 md:text-base">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
