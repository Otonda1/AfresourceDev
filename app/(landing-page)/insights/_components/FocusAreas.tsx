// app/insights/sections/FocusAreas.tsx
"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Landmark,
  GitPullRequest,
  BarChart3,
  Target,
} from "lucide-react";

const areas = [
  {
    icon: Brain,
    title: "People & Capability",
    description:
      "The architecture of talent, capability development, and human capital deployment.",
  },
  {
    icon: Landmark,
    title: "Organizational Structure",
    description:
      "Designing for clarity, agility, and sustainable operational delivery.",
  },
  {
    icon: GitPullRequest,
    title: "Governance & Decision-Making",
    description:
      "Frameworks that ensure accountability and strategic alignment at all levels.",
  },
  {
    icon: BarChart3,
    title: "Transitions & Mobility",
    description:
      "Managing the complexity of organizational change and executive movement.",
  },
  {
    icon: Target,
    title: "Performance & Sustainability",
    description:
      "Building the internal resilience and skill sets required to execute strategy effectively over the long term.",
    wide: true,
  },
];

export default function FocusAreas() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      {/* spacing standardized */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 flex items-center gap-6 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="h-px w-12 bg-secondary" />
          <span className="font-body-semibold text-xs uppercase tracking-[0.25em] text-accent">
            What We Explore
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              className={area.wide ? "md:col-span-2 lg:col-span-2" : ""}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="group flex h-full flex-col border border-foreground/10 bg-background p-8 transition-all duration-300 hover:border-primary/20 md:p-10">
                <div className="mb-6 h-0.5 w-8 bg-secondary transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />

                <area.icon
                  className="h-6 w-6 text-primary/40 transition-colors duration-300 group-hover:text-accent"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 font-heading-medium text-xl text-primary md:text-2xl">
                  {area.title}
                </h3>

                <p className="mt-4 font-body-normal text-sm leading-relaxed text-foreground/70 md:text-base">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
