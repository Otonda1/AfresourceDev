"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const scenarios = [
  {
    title: "Growing Organizations",
    description:
      "Organizations expanding in size, scope, or complexity that require stronger structures, systems, and organizational clarity.",
  },
  {
    title: "Organizations in Transition",
    description:
      "Organizations navigating change, restructuring, workforce mobility, leadership shifts, or evolving operational requirements.",
  },
  {
    title: "Regional & Multi-Country Organizations",
    description:
      "Organizations operating across multiple locations that need consistent yet adaptable people systems, governance frameworks, mobility processes, and decision-making structures.",
  },
];

export default function WhoBenefits() {
  return (
    <section className="bg-[#0f1f15] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
            Who We Serve
          </span>

          <h2 className="mt-4 font-heading-bold text-4xl italic text-background md:text-5xl">
            Who Typically Benefits From Our Support
          </h2>

          <p className="mt-6 font-body-normal text-base leading-relaxed text-background/70 md:text-lg">
            Organizations often engage Afresource when growth, change, or
            complexity begins to place greater demands on their structures,
            systems, and organizational effectiveness.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="flex h-full flex-col border border-white/10 bg-white/2 p-8 md:p-10">
                <h3 className="font-heading-medium text-2xl italic text-background">
                  {scenario.title}
                </h3>

                <p className="mt-5 font-body-normal text-base leading-relaxed text-background/65">
                  {scenario.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/who-we-serve"
            className="inline-flex items-center gap-2 border border-accent px-6 py-3 font-body-semibold text-sm uppercase tracking-[0.15em] text-accent transition-all duration-300 hover:bg-accent hover:text-primary"
          >
            Explore Who We Serve
          </Link>
        </div>
      </div>
    </section>
  );
}
