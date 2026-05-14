"use client";

import { motion } from "framer-motion";
import { TrendingUp, Landmark, ChevronDown } from "lucide-react";

export default function EvolutionOfExcellence() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Column — Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="font-heading-bold text-4xl italic text-primary md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                The Evolution of Excellence
              </h2>

              <motion.div
                className="mt-6 h-0.5 w-16 bg-secondary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </motion.div>

            <motion.div
              className="max-w-md space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                As organizations expand across the continent, the informal
                systems that sparked their initial success often become barriers
                to sustainable scale.
              </p>
              <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                Afresource Network bridges this gap. We provide the structural
                discipline, governance frameworks, and strategic advisory
                required to transition from organic growth to institutionalized
                excellence.
              </p>
            </motion.div>
          </div>

          {/* Right Column — Phase Cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Decorative background block */}
            <div className="absolute -bottom-4 -right-4 h-54 w-54 bg-foreground/5 lg:-bottom-6 lg:-right-6" />

            <div className="relative border border-foreground/10 bg-primaryAccent/20 p-6 md:p-8">
              {/* Phase I */}
              <div className="flex items-start gap-4 border-l-2 border-primary bg-background/60 p-5 md:p-6">
                <TrendingUp
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  strokeWidth={2}
                />
                <div>
                  <h3 className="font-body-semibold text-sm uppercase tracking-widest text-primary">
                    Phase I: Informal Agility
                  </h3>
                  <p className="mt-1 font-body-normal text-sm leading-relaxed text-foreground/70">
                    Rapid response, relationship-based growth, and flexible
                    workflows.
                  </p>
                </div>
              </div>

              {/* Transition Arrow */}
              <div className="flex justify-center py-4">
                <ChevronDown
                  className="h-5 w-5 text-secondary"
                  strokeWidth={2}
                />
              </div>

              {/* Phase II */}
              <div className="flex items-start gap-4 bg-primary p-5 md:p-6">
                <Landmark
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={2}
                />
                <div>
                  <h3 className="font-body-semibold text-sm uppercase tracking-widest text-accent">
                    Phase II: Structured Impact
                  </h3>
                  <p className="mt-1 font-body-normal text-sm leading-relaxed text-background/70">
                    Robust governance, data-driven decisions, and scalable
                    operations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
