"use client";

import { motion } from "framer-motion";
import { UsersRound, Network, TrendingUp } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: UsersRound,
    title: "People & Capability",
    description:
      "The leadership, workforce capability, and talent systems required to achieve organizational goals.",
  },
  {
    number: "02",
    icon: Network,
    title: "Systems & Structure",
    description:
      "The governance, processes, structures, and operating mechanisms that enable effective execution.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Performance & Sustainability",
    description:
      "The performance, accountability, adaptability, and continuous improvement practices that support long-term organizational effectiveness.",
  },
];

export default function Pillars() {
  return (
    <section className="bg-primary py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
            Our Framework
          </span>
          <h2 className="mt-4 font-heading-bold text-3xl italic text-background md:text-4xl lg:text-[2.75rem]">
            Afresource Organizational Readiness Framework
          </h2>
          <p className="mt-6 font-body-normal text-base text-background/70 md:text-lg">
            The Afresource Organizational Readiness Framework is built on three
            interconnected pillars that support sustainable organizational
            performance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="group flex h-full flex-col border border-white/10 bg-white/2 p-10 transition-all duration-300 hover:border-accent/30 hover:bg-white/4 md:p-10">
                <div className="mb-8 flex items-center justify-between border-b border-foreground/10 pb-6">
                  <span className="font-heading-medium text-xl text-primary transition-colors duration-300 group-hover:text-accent">
                    {pillar.number}
                  </span>
                  <pillar.icon
                    className="h-6 w-6 text-secondary"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-heading-medium text-xl text-background md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-4 font-body-normal text-sm leading-relaxed text-background/65 md:text-base">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
