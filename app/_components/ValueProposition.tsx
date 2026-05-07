"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AlertCircle, Users, Globe } from "lucide-react";

const valuePoints = [
  {
    icon: AlertCircle,
    title: "Eliminating Decision Bottlenecks",
    description:
      "We resolve structural friction that slows down strategic execution and market entry.",
  },
  {
    icon: Users,
    title: "High-Trust Ecosystems",
    description:
      "Building internal cultures defined by accountability and intellectual rigor.",
  },
  {
    icon: Globe,
    title: "Pan-African Contextual Intelligence",
    description:
      "Leveraging local nuance with global advisory standards for unmatched excellence.",
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Column — Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
                The Value Proposition
              </span>

              <h2 className="font-heading-bold text-3xl italic text-primary md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Why Organizations Partner With Us
              </h2>

              <p className="max-w-lg font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                Rapidly scaling organizations often outgrow their internal
                systems. We provide the diagnostic clarity and implementation
                support to bridge these critical performance gaps.
              </p>
            </motion.div>

            {/* Feature List */}
            <div className="space-y-8">
              {valuePoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="flex gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primaryAccent">
                    <point.icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="font-body-semibold text-base text-foreground md:text-lg">
                      {point.title}
                    </h3>
                    <p className="mt-1 font-body-normal text-sm leading-relaxed text-foreground/70 md:text-base">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column — Image + Overlapping Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:mt-12"
          >
            <div className="relative overflow-hidden">
              <Image
                src="/home/office.png"
                alt="Executive team collaborating in a modern boardroom"
                width={1408}
                height={768}
                className="md:h-90 w-full object-cover"
              />
            </div>

            {/* Floating Insight Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="relative mt-6 bg-primary p-8 md:p-10 lg:absolute lg:-bottom-12 lg:-right-8 lg:mt-0 lg:max-w-xs lg:p-8"
            >
              <h3 className="font-heading-medium text-xl italic text-accent md:text-2xl">
                Epistemic Rigor
              </h3>
              <p className="mt-4 font-body-normal text-sm leading-relaxed text-background/80 md:text-base">
                Decisions driven by data-integrity and deep system analysis, not
                market trends.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
