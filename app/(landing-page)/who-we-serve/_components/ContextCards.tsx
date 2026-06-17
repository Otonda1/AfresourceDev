"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const contexts = [
  {
    title: "Growth-Stage Organizations",
    description:
      "Scaling rapidly but lacking the foundational HR architecture to support an expanding team.",
    needs: [
      "Workforce capability growth",
      "Clear organizational structures",
      "Scalable performance practices",
    ],
  },
  {
    title: "Organizations in Transition",
    description:
      "Undergoing leadership changes, mergers, or significant strategic shifts requiring realignment.",
    needs: [
      "Change readiness",
      "Workforce transition support",
      "Organizational alignment",
    ],
  },
  {
    title: "Development & Mission-Driven",
    description:
      "NGOs and impact organizations seeking to balance programmatic urgency with institutional stability.",
    needs: [
      "Governance effectiveness",
      "Organizational sustainability",
      "Mission alignment",
    ],
  },
  {
    title: "Regional & Multi-Country",
    description:
      "Operating across borders and struggling to maintain unified standards while respecting local contexts.",
    needs: [
      "Cross-border workforce coordination",
      "Consistent operating practices",
      "Multi-country organizational alignment",
    ],
  },
];

export default function ContextCards() {
  return (
    <section className="border-y border-foreground/10 bg-primaryAccent/20 py-16 md:py-24 lg:py-32">
      {/* spacing standardized */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-16 text-center font-heading-bold text-3xl italic text-primary md:mb-20 md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Contexts we support
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {contexts.map((context, index) => (
            <motion.div
              key={context.title}
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
                <h3 className="font-heading-medium text-xl text-primary md:text-2xl">
                  {context.title}
                </h3>

                <p className="mt-4 font-body-normal text-sm leading-relaxed text-foreground/70 md:text-base">
                  {context.description}
                </p>

                <div className="mt-8">
                  <span className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/40">
                    Key Needs
                  </span>
                  <ul className="mt-4 space-y-3">
                    {context.needs.map((need) => (
                      <li key={need} className="flex items-center gap-3">
                        <Check
                          className="h-4 w-4 shrink-0 text-accent"
                          strokeWidth={2}
                        />
                        <span className="font-body-normal text-sm text-foreground/80">
                          {need}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
