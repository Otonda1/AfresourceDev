"use client";

import { motion } from "framer-motion";
import { Building2, Compass, Globe } from "lucide-react";

const experiences = [
  {
    icon: Building2,
    title: "Corporate Experience",
    description:
      "Experience supporting people systems, mobility, performance, and organizational effectiveness within complex operating environments.",
  },
  {
    icon: Compass,
    title: "Consulting Experience",
    description:
      "Experience advising organizations on readiness, transitions, workforce challenges, and capability development.",
  },
  {
    icon: Globe,
    title: "Development Experience",
    description:
      "Exposure to regional and mission-driven organizations operating across diverse organizational contexts.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as readonly [number, number, number, number],
    },
  },
};

export default function WhatShapesOurPerspective() {
  return (
    <section className="relative overflow-hidden border-y border-foreground/10 bg-primaryAccent/20 py-24 md:py-32 lg:py-40">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Quote & Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:sticky lg:top-32"
          >
            <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
              What Shapes Our Perspective
            </span>

            <h2 className="mt-4 font-heading-bold text-3xl italic text-primary md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Built on practical organizational experience.
            </h2>

            <div className="relative mt-10">
              {/* Decorative quote mark */}
              <span className="absolute -left-2 -top-6 font-serif text-8xl leading-none text-accent/20 select-none md:-left-4 md:-top-8 md:text-9xl">
                &ldquo;
              </span>

              <p className="relative max-w-lg font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                The perspective behind Afresource has been shaped by practical
                experience across corporate, consulting, and development
                environments. This experience has provided insight into the
                organizational challenges that emerge as institutions grow,
                evolve, and navigate change.
              </p>
            </div>
          </motion.div>

          {/* Right: Experience Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  variants={cardVariants}
                  className="group relative overflow-hidden border border-foreground/10 bg-background/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-background/80 md:p-10"
                >
                  {/* Hover accent line */}
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-accent/0 transition-all duration-500 group-hover:bg-accent/60" />

                  {/* Index number */}
                  <span className="absolute right-6 top-6 font-heading-bold text-5xl text-foreground/[0.04] transition-colors duration-500 group-hover:text-accent/10 md:text-6xl">
                    0{index + 1}
                  </span>

                  <div className="relative flex items-start gap-5">
                    {/* Icon container */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-foreground/10 bg-primaryAccent/30 transition-all duration-500 group-hover:border-accent/30 group-hover:bg-accent/10">
                      <Icon className="h-5 w-5 text-accent transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-heading-medium text-lg text-foreground transition-colors duration-300 group-hover:text-primary md:text-xl">
                        {exp.title}
                      </h3>
                      <p className="mt-3 font-body-normal text-sm leading-relaxed text-foreground/60 md:text-base">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle corner accent on hover */}
                  <div className="absolute -bottom-8 -right-8 h-16 w-16 rotate-45 bg-accent/0 transition-all duration-500 group-hover:bg-accent/[0.04]" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
