// app/services/sections/SignatureArea.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const supportingPoints = [
  "Cross-border coordination",
  "Staff mobility frameworks",
  "Transition planning",
  "Continuity during change",
  "Compliance-aligned system design",
  "Clarity across roles, locations, and teams",
];

export default function SignatureArea() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
      {/* spacing standardized */}
      {/* Subtle geometric watermark */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 opacity-[0.03]">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M100 20L180 180H20L100 20Z" stroke="white" strokeWidth="1" />
          <path
            d="M100 60L140 140H60L100 60Z"
            stroke="white"
            strokeWidth="0.5"
          />
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
              Signature Expertise
            </span>

            <h2 className="mt-4 font-heading-bold text-3xl text-background md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Mobility and Transitions:
              <br />
              Cross-Border Coordination.
            </h2>

            <p className="mt-6 max-w-lg font-body-normal text-base leading-relaxed text-background/70 md:text-lg">
              Afresource provides specialized advisory support around mobility
              and transitions, including cross-border coordination and
              compliance-aligned system design.
            </p>
            <p className="mt-4 max-w-lg font-body-normal text-base leading-relaxed text-background/70 md:text-lg">
              This work helps organizations manage movement, continuity,
              onboarding, role changes, and transition processes with greater
              clarity and consistency.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {supportingPoints.map((point, index) => (
                <motion.div
                  key={point}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <span className="h-px w-4 bg-accent" />
                  <span className="font-body-normal text-sm text-background/80">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/services/signature-mobility.jpg"
                alt="Abstract architectural lines representing cross-border coordination"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
