"use client";

import { motion } from "framer-motion";

export default function InsightBehind() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-heading-bold text-3xl italic text-secondary md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Performance challenges rarely begin with people alone.
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
            className="space-y-6 lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
              Organizations frequently attempt to solve systemic issues through
              localized interventions—replacing leadership, retraining staff, or
              altering incentives. Yet, without addressing the underlying
              architecture, the same challenges inevitably resurface.
            </p>
            <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
              Afresource&apos;s advisory practice emerged from observing these
              patterns across both corporate and public sectors. We recognize
              that friction, inefficiency, and misalignment are often symptoms
              of a structural deficit rather than individual failing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
