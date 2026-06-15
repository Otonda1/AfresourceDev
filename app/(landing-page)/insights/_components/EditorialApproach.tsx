"use client";

import { motion } from "framer-motion";
import { Compass, Grid3X3, Target } from "lucide-react";

const principles = [
  {
    icon: Compass,
    title: "Practical",
    description:
      "Insights derived from active advisory engagements, not theoretical models.",
  },
  {
    icon: Grid3X3,
    title: "Structured",
    description:
      "Applying a systems-lens to untangle complex organizational challenges.",
  },
  {
    icon: Target,
    title: "Relevant",
    description:
      "Focused on the realities of scaling, governance, and operational excellence.",
  },
];

export default function EditorialApproach() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-heading-bold text-3xl italic text-primary md:text-4xl">
            Editorial Approach
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body-normal text-base text-foreground/70 md:text-lg">
            Grounded in the realities of organizational growth, readiness, and
            performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center border border-foreground/10 transition-colors duration-300 hover:border-accent">
                <principle.icon
                  className="h-6 w-6 text-secondary"
                  strokeWidth={1.5}
                />
              </div>
              <h4 className="mt-6 font-body-semibold text-xs uppercase tracking-[0.2em] text-primary">
                {principle.title}
              </h4>
              <p className="mx-auto mt-3 max-w-xs font-body-normal text-sm leading-relaxed text-foreground/70 md:text-base">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
