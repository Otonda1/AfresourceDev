"use client";

import { motion } from "framer-motion";
import { BarChart2, RefreshCw, Building2 } from "lucide-react";

const solutions = [
  {
    code: "01",
    icon: Building2,
    title: "Organizational Readiness Assessment",
    description:
      "Understand where your organization stands today and what needs to be strengthened to support future growth, performance, and sustainability.",
  },
  {
    code: "02",
    icon: RefreshCw,
    title: "Workforce Transition & Integration Solutions",
    description:
      "Help employees succeed through periods of change, movement, onboarding, and organizational transition.",
  },
  {
    code: "03",
    icon: BarChart2,
    title: "Organizational Performance & Capability Solutions",
    description:
      "Build the systems that strengthen accountability, performance, leadership capability, employee experience, and long-term organizational success.",
  },
];

export default function HowWeHelp() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-body-semibold text-xs uppercase tracking-[0.2em] text-secondary">
            How We Help
          </p>
          <h2 className="mt-3 font-heading-medium text-3xl text-primary md:text-4xl">
            How We Help Organizations
          </h2>
          <p className="mt-4 font-body-normal text-base leading-relaxed text-foreground/70 md:text-lg">
            Afresource helps organizations strengthen Organizational Readiness
            through three core solutions designed to improve performance,
            support change, and build long-term capability.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-foreground/10" />

        {/* Solution cards */}
        <div className="mt-12 grid grid-cols-1 gap-0 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className={`flex flex-col p-8 md:p-10 ${
                index === 1
                  ? "bg-primary md:border-x md:border-x-background/10"
                  : "border border-foreground/10 bg-background"
              }`}
            >
              {/* Top row — icon + code */}
              <div className="flex items-center justify-between">
                <solution.icon
                  className={`h-6 w-6 ${
                    index === 1 ? "text-background/70" : "text-primary"
                  }`}
                  strokeWidth={1.5}
                />
                <span
                  className={`font-body-semibold text-xs tracking-[0.15em] ${
                    index === 1 ? "text-accent" : "text-secondary"
                  }`}
                >
                  {solution.code}
                </span>
              </div>

              {/* Content */}
              <div className="mt-8 grow">
                <h3
                  className={`font-heading-medium text-xl md:text-2xl ${
                    index === 1 ? "text-background" : "text-primary"
                  }`}
                >
                  {solution.title}
                </h3>
                <p
                  className={`mt-4 font-body-normal text-sm leading-relaxed md:text-base ${
                    index === 1 ? "text-background/70" : "text-foreground/70"
                  }`}
                >
                  {solution.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="mt-10">
                <div
                  className={`h-px w-full ${
                    index === 1 ? "bg-background/10" : "bg-foreground/10"
                  }`}
                >
                  <div
                    className={`h-full w-1/2 ${
                      index === 1 ? "bg-accent" : "bg-secondary"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
