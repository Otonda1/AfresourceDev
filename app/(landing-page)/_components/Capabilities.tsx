"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ClipboardCheck, RefreshCw, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: ClipboardCheck,
    title: "Organizational Readiness Assessment",
    description:
      "Understand where your organization stands today and identify the people, structure, and capability priorities required to support future growth and performance.",
  },
  {
    icon: RefreshCw,
    title: "Workforce Transition & Integration Solutions",
    description:
      "Support employees through onboarding, mobility, organizational change, and transition initiatives that strengthen alignment and continuity.",
  },
  {
    icon: BarChart3,
    title: "Organizational Performance & Capability Solutions",
    description:
      "Design practical systems that strengthen accountability, leadership capability, employee experience, and long-term organizational effectiveness.",
  },
];

export default function HowWeHelpOrganizations() {
  return (
    <section className="bg-primary py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
            Organizational Readiness
          </span>

          <h2 className="mt-4 font-heading-bold text-4xl italic text-background md:text-5xl lg:text-6xl">
            How We Help Organizations
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-body-normal text-base leading-relaxed text-background/70 md:text-lg">
            Afresource helps organizations strengthen Organizational Readiness
            through practical advisory support designed to improve performance,
            support change, and build long-term capability.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="group flex h-full min-h-90 flex-col border border-white/10 bg-white/[0.02] p-10 transition-all duration-300 hover:border-accent/30 hover:bg-white/4">
                <solution.icon
                  className="h-8 w-8 text-accent"
                  strokeWidth={1.5}
                />

                <div className="mt-12">
                  <h3 className="font-heading-medium text-2xl italic text-background">
                    {solution.title}
                  </h3>

                  <p className="mt-5 font-body-normal text-base leading-relaxed text-background/65">
                    {solution.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mx-auto mt-16 max-w-3xl text-center md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body-normal text-sm leading-relaxed text-background/60 md:text-base">
            Learn how Afresource helps organizations strengthen readiness,
            navigate change, and build the foundations required for sustainable
            performance.
          </p>

          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 border border-accent px-6 py-3 font-body-semibold text-sm uppercase tracking-[0.15em] text-accent transition-all duration-300 hover:bg-accent hover:text-primary"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
