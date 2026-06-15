"use client";

import { Compass, BriefcaseBusiness, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const valuePoints = [
  {
    icon: Compass,
    title: "Organizational Readiness Expertise",
    description:
      "We help organizations assess, strengthen, and sustain the people structures, systems, and capabilities required to achieve their goals.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Practical Organizational Experience",
    description:
      "Our perspective is shaped by experience across corporate and development environments, including transitions, onboarding, mobility, performance processes, and people systems design.",
  },
  {
    icon: Globe2,
    title: "Pan-African Perspective",
    description:
      "We support organizations operating in dynamic African contexts, balancing structured advisory thinking with practical realities across growth, change, and implementation.",
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
                Why Organizations Partner With Us
              </span>

              <h2 className="mt-4 font-heading-bold text-4xl italic text-primary md:text-5xl">
                Readiness is built through people, systems, and structure
                working in alignment.
              </h2>

              <p className="mt-6 max-w-xl font-body-normal text-base leading-relaxed text-foreground/75 md:text-lg">
                Afresource helps organizations assess, strengthen, and sustain
                the foundations required to achieve their goals — supporting
                readiness, performance, and long-term organizational
                effectiveness.
              </p>
            </motion.div>

            <div className="mt-8 space-y-8">
              {valuePoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="flex gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primaryAccent">
                    <point.icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={1.75}
                    />
                  </div>

                  <div>
                    <h3 className="font-body-semibold text-lg text-primary">
                      {point.title}
                    </h3>

                    <p className="mt-2 font-body-normal text-sm leading-relaxed text-foreground/70 md:text-base">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden">
              <Image
                src="/home/office.png"
                alt="Organizational advisory discussion in a professional office setting"
                width={1408}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Insight Panel */}
            <div className="bg-primary p-8 md:p-10 lg:absolute lg:-bottom-10 lg:left-10 lg:max-w-sm">
              <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
                Readiness is built intentionally.
              </span>

              <p className="mt-4 font-heading-medium text-xl italic leading-relaxed text-background md:text-2xl">
                Strong organizations are ready organizations.
              </p>

              <p className="mt-4 font-body-normal text-sm leading-relaxed text-background/70 md:text-base">
                Sustainable performance depends on the readiness of the people,
                systems, structures, and capabilities that support
                organizational goals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
