"use client";

import { motion } from "framer-motion";

const models = [
  {
    number: "01",
    title: "Project-Based Advisory",
    description:
      "Focused support for a defined organizational challenge, system, or project.",
  },
  {
    number: "02",
    title: "Ongoing Advisory Support",
    description:
      "Continued advisory support for organizations strengthening people systems over time.",
  },
  {
    number: "03",
    title: "Strategic Partnership Support",
    description:
      "Longer-term collaboration for organizations undergoing growth, transition, or structural change.",
  },
];

export default function EngagementModels() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      {/* spacing standardized */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
            How We Work
          </span>
          <h2 className="mt-4 font-heading-bold text-3xl italic text-primary md:text-4xl">
            How We Work With Organizations
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body-normal text-base text-foreground/70 md:text-lg">
            Afresource offers flexible advisory support depending on the nature,
            depth, and continuity of the organizational need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {models.map((model, index) => (
            <motion.div
              key={model.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="group flex h-full flex-col border border-foreground/10 bg-background p-8 transition-all duration-300 hover:border-primary/20 md:p-10">
                <span className="font-heading-bold text-5xl text-foreground/4 transition-colors duration-300 group-hover:text-foreground/8">
                  {model.number}
                </span>
                <h3 className="mt-6 font-heading-medium text-xl text-primary md:text-2xl">
                  {model.title}
                </h3>
                <p className="mt-4 font-body-normal text-sm leading-relaxed text-foreground/70 md:text-base">
                  {model.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
