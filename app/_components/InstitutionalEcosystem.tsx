"use client";

import { motion } from "framer-motion";

const ecosystems = [
  {
    category: "Entities",
    title: "Startups & Scaleups",
    description:
      "Building the foundational systems required to transition from founder-led chaos to managed, institutional scaling.",
    focus: "Operational Maturity",
  },
  {
    category: "Legacy",
    title: "SMEs & Family Offices",
    description:
      "Institutionalizing governance and professionalizing people systems to ensure multi-generational success and liquidity.",
    focus: "Continuity & Governance",
  },
  {
    category: "Systems",
    title: "Regional Institutions",
    description:
      "High-level advisory for public-private partnerships and regional bodies requiring sophisticated systems intelligence.",
    focus: "Strategic Sovereignty",
  },
];

export default function InstitutionalEcosystem() {
  return (
    <section className="bg-[#0f1f15] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-heading-bold text-3xl italic text-background md:text-4xl lg:text-[2.75rem]">
            Institutional Ecosystem
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ecosystems.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <div className="group flex h-full flex-col border border-white/10 bg-white/2 p-8 transition-all duration-300 hover:border-accent/20 hover:bg-white/4 md:p-10">
                {/* Category */}
                <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="mt-5 font-heading-medium text-xl text-background md:text-2xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 grow font-body-normal text-sm leading-relaxed text-background/60 md:text-base">
                  {item.description}
                </p>

                {/* Focus Area */}
                <div className="mt-10 border-t border-white/10 pt-5">
                  <span className="font-body-semibold text-[0.65rem] uppercase tracking-[0.2em] text-background/40">
                    Focus: {item.focus}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
