"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Globe,
  Landmark,
  GitPullRequest,
  CheckCircle,
} from "lucide-react";

const focusAreas = [
  {
    number: "01",
    icon: Rocket,
    title: "Growth-Stage Organizations",
    description:
      "For enterprises at the precipice of significant scale. We help formalize leadership structures and operationalize core strategies to ensure rapid growth doesn't compromise quality.",
    features: ["Leadership Team Alignment", "Scalable SOP Development"],
  },
  {
    number: "02",
    icon: Globe,
    title: "Development & Mission-Driven",
    description:
      "Assisting NGOs and social enterprises in balancing impact with institutional rigor. We refine governance and financial stewardship to meet global compliance standards.",
    features: ["ESG Transformation", "Impact Reporting Frameworks"],
  },
  {
    number: "03",
    icon: Landmark,
    title: "Regional Institutions",
    description:
      'Managing the complexity of multi-country operations. We provide the "glue" that synchronizes disparate regional offices into a cohesive pan-African entity.',
    features: ["Cross-Border Compliance", "Cultural Leadership Integration"],
  },
  {
    number: "04",
    icon: GitPullRequest,
    title: "Transition & Restructuring",
    description:
      "Guiding legacy organizations through pivotal shifts—whether digital transformation, leadership succession, or fundamental market repositioning.",
    features: ["Change Management Advisory", "Post-Merger Integration"],
  },
];

export default function FocusAreas() {
  return (
    <section className="bg-primary py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.25em] text-accent">
            Our Focus Areas
          </span>
          <h2 className="mt-4 font-heading-bold text-3xl italic text-background md:text-4xl lg:text-[2.75rem]">
            Strategic Organizational Contexts
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="group relative flex h-full flex-col bg-background p-8 transition-all duration-300 hover:shadow-xl md:p-10">
                {/* Top Row — Icon + Number */}
                <div className="flex items-start justify-between">
                  <area.icon
                    className="h-6 w-6 text-primary"
                    strokeWidth={1.5}
                  />
                  <span className="font-heading-bold text-5xl text-foreground/4 transition-colors duration-300 group-hover:text-foreground/8">
                    {area.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-8 grow">
                  <h3 className="font-heading-medium text-xl text-primary md:text-2xl">
                    {area.title}
                  </h3>
                  <p className="mt-4 font-body-normal text-sm leading-relaxed text-foreground/70 md:text-base">
                    {area.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mt-8 space-y-3">
                  {area.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle
                        className="h-4 w-4 shrink-0 text-accent"
                        strokeWidth={2}
                      />
                      <span className="font-body-normal text-sm text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
