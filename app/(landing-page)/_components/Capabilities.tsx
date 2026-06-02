"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const capabilities = [
  {
    title: "People Infrastructure",
    description:
      "Designing talent management systems that align individual performance with corporate objectives.",
    href: "/services/people-infrastructure",
  },
  {
    title: "Organizational Structure",
    description:
      "Developing lean, responsive hierarchies that facilitate rapid decision-making across borders.",
    href: "/services/organizational-structure",
  },
  {
    title: "Governance Systems",
    description:
      "Implementing ethical frameworks and compliance structures for institutional resilience.",
    href: "/services/governance-systems",
  },
  {
    title: "Sustainable Growth",
    description:
      "Advisory on long-term value creation and ESG transformation for African enterprises.",
    href: "/services/sustainable-growth",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-primary py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div>
            <h2 className="font-heading-bold text-3xl italic text-background md:text-4xl lg:text-[2.5rem]">
              Capabilities
            </h2>
            <p className="mt-3 font-body-normal text-base text-background/70">
              Core Advisory Areas
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 font-body-semibold text-sm uppercase tracking-[0.15em] text-accent transition-colors duration-200 hover:text-secondary"
          >
            View Services
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="group flex h-full min-h-80 flex-col justify-between border border-white/10 bg-white/2 p-8 transition-all duration-300 hover:border-accent/30 hover:bg-white/4 md:p-10">
                <div>
                  <h3 className="font-heading-medium text-xl italic text-background md:text-2xl">
                    {capability.title}
                  </h3>
                  <p className="mt-4 font-body-normal text-sm leading-relaxed text-background/60 md:text-base">
                    {capability.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
