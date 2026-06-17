"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const provocations = [
  {
    question: "Why onboarding still gets underestimated",
    context:
      "The first 90 days determine whether talent stays or leaves. Most organizations treat it as paperwork.",
  },
  {
    question: "What organizations often miss during periods of transition",
    context:
      "Leadership changes create invisible vacuums. Structure, not charisma, fills the gap.",
  },
  {
    question: "Growth without structure eventually creates friction",
    context:
      "Scaling revenue is celebrated. Scaling systems is ignored — until the friction becomes visible.",
  },
  {
    question: "Performance systems rarely fail overnight",
    context:
      "They erode slowly, through inconsistent standards, unclear metrics, and forgotten feedback loops.",
  },
  {
    question: "Why recognition must align with performance",
    context:
      "Misaligned recognition breeds cynicism. When praise and contribution diverge, culture suffers.",
  },
];

export default function Provocations() {
  return (
    <section className="border-y border-foreground/10 bg-primaryAccent/20 py-16 md:py-24 lg:py-32">
      {/* spacing standardized */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left — Sticky intro */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="lg:sticky lg:top-32">
              <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
                Viewpoints
              </span>
              <h2 className="mt-4 font-heading-bold text-3xl italic text-primary md:text-4xl">
                Questions that reveal what most organizations overlook.
              </h2>
              <p className="mt-6 font-body-normal text-base leading-relaxed text-foreground/70 md:text-lg">
                These are not articles to read and forget. They are structural
                questions we encounter in advisory work — reframed for leaders
                who are willing to look closer.
              </p>
            </div>
          </motion.div>

          {/* Right — Questions list */}
          <div className="lg:col-span-8">
            {provocations.map((item, index) => (
              <motion.div
                key={item.question}
                className="group border-b border-foreground/10 py-8 first:pt-0 md:py-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grow">
                    <h3 className="font-heading-medium text-xl text-primary transition-colors duration-200 group-hover:text-secondary md:text-2xl">
                      {item.question}
                    </h3>
                    <p className="mt-3 max-w-lg font-body-normal text-sm leading-relaxed text-foreground/60 md:text-base">
                      {item.context}
                    </p>
                  </div>
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-foreground/10 transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
                    <ArrowRight className="h-4 w-4 text-foreground/30 transition-colors duration-300 group-hover:text-foreground" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
