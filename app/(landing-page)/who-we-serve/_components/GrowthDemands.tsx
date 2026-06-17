// app/who-we-serve/sections/GrowthDemands.tsx
"use client";

import { motion } from "framer-motion";

const phases = [
  {
    title: "People & Capability",
    description:
      "Reliance on founder knowledge, ad-hoc processes, and reactive problem-solving.",
    active: false,
  },
  {
    title: "Sysyems & Structure",
    description:
      "Defining roles, formalizing governance, and aligning talent with strategic objectives.",
    active: false,
  },
  {
    title: "Perfomance & Sustainability",
    description:
      "Institutional resilience, scalable operations, and predictable, high-quality outcomes.",
    active: true,
  },
];

export default function GrowthDemands() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      {/* spacing standardized */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left — Content */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-heading-bold text-3xl italic text-primary md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              When growth creates new demands on structure
            </h2>

            <div className="mt-8 space-y-6">
              <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                As organizations expand their reach, impact, or workforce, the
                informal practices that once fueled their agility often become
                constraints. Decisions bottleneck, roles overlap, and
                performance becomes unpredictable.
              </p>
              <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                We partner with leadership to formalize the implicit,
                establishing clear organizational architectures that sustain
                long-term excellence without sacrificing the organization&apos;s
                foundational culture.
              </p>
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative space-y-10">
              {/* Vertical line */}
              <div className="absolute inset-y-0 left-1.75 w-px bg-foreground/10" />

              {phases.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  className="relative flex items-start gap-6"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.12,
                    ease: "easeOut",
                  }}
                >
                  {/* Dot */}
                  <div
                    className={`relative z-10 mt-2 h-3.5 w-3.5 shrink-0 rounded-full border-2 ${
                      phase.active
                        ? "border-accent bg-accent"
                        : "border-foreground/20 bg-background"
                    }`}
                  />

                  <div>
                    <h3
                      className={`font-heading-medium text-xl md:text-2xl ${
                        phase.active ? "text-primary" : "text-foreground/80"
                      }`}
                    >
                      {phase.title}
                    </h3>
                    <p className="mt-2 font-body-normal text-sm leading-relaxed text-foreground/60 md:text-base">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
