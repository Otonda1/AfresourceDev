"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ClipboardCheck, RefreshCw, BarChart3 } from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Organizational Readiness Assessment",
    description:
      "Understand where your organization stands today and identify the people, structure, and capability priorities required to support future growth and performance.",
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Workforce Transition & Integration Solutions",
    description:
      "Support employees through onboarding, mobility, organizational change, and transition initiatives that strengthen alignment and continuity.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Organizational Performance & Capability Solutions",
    description:
      "Design practical systems that strengthen accountability, leadership capability, employee experience, and long-term organizational effectiveness.",
  },
];

export default function HowWeHelpOrganizations() {
  return (
    <section className="relative overflow-hidden bg-primary py-28 md:py-36 lg:py-48">
      {/* Subtle background texture — large ghost numerals */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 -top-16 select-none font-heading-bold text-[22rem] leading-none text-background/[0.025] lg:text-[30rem]"
      ></span>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
            Organizational Readiness
          </span>

          <h2 className="mt-5 font-heading-bold text-4xl italic text-background md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            How We Help Organizations
          </h2>

          {/* Accent rule centred under headline */}
          <div className="mx-auto mt-8 h-[2px] w-16 bg-accent/60" />

          <p className="mx-auto mt-8 max-w-2xl font-body-normal text-base leading-relaxed text-background/65 md:text-lg">
            Afresource helps organizations strengthen Organizational Readiness
            through practical advisory support designed to improve performance,
            support change, and build long-term capability.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: index * 0.15 }}
              className="flex"
            >
              <div className="group flex w-full flex-col border border-white/10 bg-white/[0.03] p-10 transition-all duration-500 hover:border-accent/40 hover:bg-white/[0.06] md:p-12 lg:p-14">
                {/* Top row — number + icon */}
                <div className="flex items-start justify-between">
                  <span className="font-body-semibold text-[0.65rem] uppercase tracking-[0.2em] text-accent/60">
                    {solution.number}
                  </span>
                  <solution.icon
                    className="h-7 w-7 text-accent transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Divider */}
                <div className="mt-10 h-px w-full bg-white/10" />

                {/* Content */}
                <div className="mt-10 flex flex-1 flex-col">
                  <h3 className="font-heading-medium text-2xl italic text-background md:text-[1.65rem] md:leading-snug">
                    {solution.title}
                  </h3>

                  <p className="mt-6 flex-1 font-body-normal text-base leading-relaxed text-background/60">
                    {solution.description}
                  </p>
                </div>

                {/* Bottom accent — grows in on hover */}
                <div className="mt-12 h-px w-full bg-white/10">
                  <div className="h-full w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mx-auto mt-20 max-w-3xl text-center md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body-normal text-sm leading-relaxed text-background/50 md:text-base">
            Learn how Afresource helps organizations strengthen readiness,
            navigate change, and build the foundations required for sustainable
            performance.
          </p>

          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-3 border border-accent px-8 py-4 font-body-semibold text-sm uppercase tracking-[0.15em] text-accent transition-all duration-300 hover:bg-accent hover:text-primary"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
