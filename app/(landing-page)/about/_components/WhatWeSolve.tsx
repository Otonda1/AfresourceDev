"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Network,
  CheckCircle,
  TrendingUp,
  Users,
} from "lucide-react";

const impactAreas = [
  {
    icon: Landmark,
    title: "Governance Gaps",
    description:
      "Bridging the divide between policy intent and institutional reality through robust framework design.",
    variant: "light" as const,
    size: "large",
  },
  {
    icon: Network,
    title: "Market Access",
    description:
      "Navigating complex regulatory landscapes for seamless pan-African market entry and expansion.",
    variant: "light" as const,
    size: "large",
  },
  {
    icon: CheckCircle,
    title: "ESG Alignment",
    description:
      "Integrating global environmental and social standards into local operational models.",
    variant: "white" as const,
    size: "small",
  },
  {
    icon: TrendingUp,
    title: "Operational Fragility",
    description:
      "Fortifying internal systems against volatility and ensuring long-term institutional resilience.",
    variant: "dark" as const,
    size: "small",
  },
  {
    icon: Users,
    title: "Stakeholder Trust",
    description:
      "Building transparent communication channels between private entities and public regulators.",
    variant: "light" as const,
    size: "small",
  },
];

export default function WhatWeSolve() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.24em] text-accent">
            Impact Areas
          </span>

          <h2 className="mt-4 font-heading-bold text-4xl text-primary md:text-5xl">
            What We Help Solve
          </h2>
        </motion.div>

        {/* Top Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {impactAreas.slice(0, 2).map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <ImpactCard area={area} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {impactAreas.slice(2).map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <ImpactCard area={area} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactCard({ area }: { area: (typeof impactAreas)[0] }) {
  const isDark = area.variant === "dark";
  const isWhite = area.variant === "white";

  return (
    <div
      className={`
        group relative flex h-full flex-col justify-between overflow-hidden
        border transition-all duration-300
        ${
          isDark
            ? "border-primary bg-primary"
            : isWhite
              ? "border-[#E7E1D8] bg-background"
              : "border-[#D8E5D8] bg-[#E5F0E4]"
        }
        ${
          area.size === "large"
            ? "min-h-80 p-10 md:p-12"
            : "min-h-72.5 p-8 md:p-10"
        }
      `}
    >
      {/* Subtle Hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
      </div>

      {/* Icon */}
      <div className="relative z-10">
        <area.icon
          className={`h-7 w-7 ${isDark ? "text-accent" : "text-[#C9A24D]"}`}
          strokeWidth={1.7}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto pt-16">
        <h3
          className={`font-heading-medium text-[2rem] leading-tight ${
            isDark ? "text-background" : "text-primary"
          }`}
        >
          {area.title}
        </h3>

        <p
          className={`mt-5 max-w-[34ch] font-body-normal text-base leading-relaxed ${
            isDark ? "text-white/75" : "text-foreground/70"
          }`}
        >
          {area.description}
        </p>
      </div>
    </div>
  );
}
