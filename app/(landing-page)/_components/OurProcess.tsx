"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We assess existing people systems, organizational structures, and governance practices to understand what is working, what is unclear, and where gaps exist.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We develop practical, context-specific systems and frameworks aligned to the organization's goals, operating model, and stage of growth.",
  },
  {
    number: "03",
    title: "Align",
    description:
      "We support clarity across stakeholders so that roles, expectations, processes, and decision-making responsibilities are understood and consistently applied.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We help organizations translate system design into practical use, ensuring that frameworks are not only well developed, but usable in real operating environments.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-primary py-16 md:py-24 lg:py-32">
      {/* spacing standardized */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 flex flex-col items-center text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.25em] text-accent">
            Our Process
          </span>

          <h2 className="mt-4 font-heading-bold text-2xl italic text-background md:text-3xl lg:text-4xl">
            How We Work{" "}
          </h2>

          <motion.div
            className="mt-6 h-0.5 w-16 bg-accent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className={`${index % 2 === 0 ? "lg:mt-10" : ""}`}
            >
              <div className="group relative overflow-hidden border border-white/10 bg-white/2 p-8 transition-all duration-300 hover:border-accent/20 hover:bg-white/4 md:p-10">
                {/* Large Background Number */}
                <span className="absolute -right-2 -top-4 font-heading-bold text-7xl text-background/4 transition-colors duration-300 group-hover:text-background/8 md:text-8xl">
                  {step.number}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <span className="font-body-semibold text-sm uppercase tracking-[0.2em] text-accent">
                    {step.title}
                  </span>

                  <p className="mt-6 font-body-normal text-sm leading-relaxed text-background/60 md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
