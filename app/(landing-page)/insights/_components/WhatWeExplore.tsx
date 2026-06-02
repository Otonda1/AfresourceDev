"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const explorations = [
  {
    number: "01",
    question: "What happens when growth outpaces structure?",
    answer:
      'Rapid scaling often creates "organizational debt." We explore the indicators of structural failure and how to pivot without losing momentum.',
  },
  {
    number: "02",
    question: "How do decision-making gaps affect execution?",
    answer:
      "Ambiguity in authority is the primary killer of strategy. We map the friction points between executive vision and operational delivery.",
  },
  {
    number: "03",
    question: "Can legacy values survive institutionalization?",
    answer:
      "Exploring the bridge between the charismatic founder era and the sustainable corporate future without losing the firm's unique DNA.",
  },
  {
    number: "04",
    question: "Where does ESG transformation meet actual profit?",
    answer:
      "Moving beyond the checkbox. We look at the tangible ROI of governance and environmental stewardship in emerging markets.",
  },
];

export default function WhatWeExplore() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-40">
          {/* Left Column — Sticky intro */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="lg:sticky lg:top-32">
              <h2 className="font-heading-bold text-4xl italic text-primary md:text-5xl">
                What We Explore.
              </h2>

              <p className="mt-6 max-w-sm font-body-normal text-base leading-relaxed text-foreground/70 md:text-lg">
                The critical questions that determine the long-term viability of
                African enterprises in a globalized economy.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 font-body-semibold text-sm uppercase tracking-[0.15em] text-accent transition-all duration-200 hover:gap-3"
              >
                Request Advisory
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column — Questions list */}
          <div className="lg:col-span-8">
            {explorations.map((item, index) => (
              <motion.div
                key={item.number}
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
                    <span className="font-body-semibold text-sm text-accent">
                      {item.number}
                    </span>
                    <h3 className="mt-2 font-heading-medium text-xl text-primary md:text-2xl lg:text-[1.75rem] transition-colors duration-200 group-hover:text-secondary">
                      {item.question}
                    </h3>
                    <p className="mt-4 max-w-xl font-body-normal text-sm leading-relaxed text-foreground/70 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                  <span className="shrink-0 font-heading-bold text-3xl text-foreground/8 transition-colors duration-300 group-hover:text-foreground/15 md:text-4xl">
                    ?
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
