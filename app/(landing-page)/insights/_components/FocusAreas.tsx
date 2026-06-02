"use client";

import { motion } from "framer-motion";
import { Users, BarChart3, Landmark, TrendingUp } from "lucide-react";

const focusCards = [
  {
    icon: Users,
    title: "People Systems",
    description:
      "The soul of the enterprise. We analyze how talent clusters form, how leadership intent translates into frontline action, and the invisible threads that hold high-performance teams together in volatile markets.",
    variant: "white" as const,
    span: "tall" as const,
  },
  {
    icon: BarChart3,
    title: "Organizational Structure",
    description:
      "Designing for resilience. We move beyond the org chart to map the actual flow of value and information, ensuring structure serves strategy rather than obstructing it.",
    variant: "dark" as const,
    span: "wide" as const,
    code: "02 // Architecture",
  },
  {
    icon: Landmark,
    title: "Governance",
    description:
      "Transcending compliance to achieve stewardship. We define decision-making rights that empower speed while maintaining rigorous integrity.",
    variant: "white" as const,
    span: "normal" as const,
  },
  {
    icon: TrendingUp,
    title: "Transitions",
    description:
      'Managing the "messy middle" of growth. From family-led firms to institutional maturity, we guide the cultural and structural evolution.',
    variant: "light" as const,
    span: "normal" as const,
  },
];

export default function FocusAreas() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 flex items-center gap-6 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="h-px w-12 bg-secondary" />
          <span className="font-body-semibold text-xs uppercase tracking-[0.25em] text-accent">
            Focus Areas
          </span>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* People Systems — Tall left card */}
          <motion.div
            className="md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <FocusCard card={focusCards[0]} />
          </motion.div>

          {/* Organizational Structure — Wide top-right card */}
          <motion.div
            className="md:col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <FocusCard card={focusCards[1]} />
          </motion.div>

          {/* Governance — Bottom middle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <FocusCard card={focusCards[2]} />
          </motion.div>

          {/* Transitions — Bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <FocusCard card={focusCards[3]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FocusCard({ card }: { card: (typeof focusCards)[0] }) {
  const isDark = card.variant === "dark";
  const isLight = card.variant === "light";
  const isTall = card.span === "tall";
  const isWide = card.span === "wide";

  return (
    <div
      className={`group flex h-full flex-col p-8 transition-all duration-300 md:p-10 ${
        isDark
          ? "relative overflow-hidden bg-primary"
          : isLight
            ? "border border-foreground/10 bg-primaryAccent/30 hover:border-primary/20"
            : "border border-foreground/10 bg-background hover:border-primary/20"
      } ${isTall ? "min-h-120 md:min-h-full" : "min-h-70"}`}
    >
      {/* Dark card background accent */}
      {isDark && (
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rotate-12 bg-accent/10 blur-3xl" />
      )}

      {/* Icon */}
      <card.icon
        className={`h-6 w-6 ${isDark ? "text-accent" : "text-secondary"}`}
        strokeWidth={1.5}
      />

      {/* Content */}
      <div className={`mt-8 ${isWide ? "max-w-lg" : ""}`}>
        <h3
          className={`font-heading-medium text-xl md:text-2xl ${
            isDark ? "text-background" : "text-primary"
          }`}
        >
          {card.title}
        </h3>
        <p
          className={`mt-4 font-body-normal text-sm leading-relaxed md:text-base ${
            isDark ? "text-background/70" : "text-foreground/70"
          }`}
        >
          {card.description}
        </p>
      </div>

      {/* Code label (dark card only) */}
      {card.code && (
        <span className="mt-8 font-body-semibold text-xs uppercase tracking-[0.15em] text-accent">
          {card.code}
        </span>
      )}
    </div>
  );
}
