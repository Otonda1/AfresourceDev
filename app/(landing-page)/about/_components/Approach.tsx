"use client";

import { motion } from "framer-motion";

export default function Approach() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          {/* Content Block — spans wider now */}
          <motion.div
            className="relative lg:col-span-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Floating badge */}
            <div className="absolute -top-5 left-0 z-10 bg-accent px-5 py-2.5">
              <span className="font-body-semibold text-xs uppercase tracking-[0.15em] text-foreground">
                Approach
              </span>
            </div>

            {/* Bordered content area */}
            <div className="border border-secondary/40 p-8 pt-14 md:p-12 md:pt-16 lg:p-16 lg:pt-20">
              <h2 className="font-heading-bold text-3xl italic text-primary md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Practicality Over Theory
              </h2>

              <div className="mt-8 max-w-2xl space-y-6">
                <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                  We eschew generic reports for actionable implementation. Our
                  advisory is tailored to the specificities of the African
                  business environment, ensuring that solutions are not just
                  world-class but locally viable.
                </p>
                <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                  We partner with our clients through every stage of
                  transformation, from the initial diagnostic to the final
                  institutionalization of new protocols.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
