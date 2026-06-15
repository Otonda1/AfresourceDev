"use client";
import { motion } from "framer-motion";

const readinessSignals = [
  {
    title: "People & Capability",
    description:
      "Whether people have the clarity, capability, and support required to contribute effectively.",
  },
  {
    title: "Systems & Structure",
    description:
      "Whether roles, processes, governance, and operating mechanisms enable effective execution.",
  },
  {
    title: "Performance & Sustainability",
    description:
      "Whether accountability, adaptability, and continuous improvement practices support long-term effectiveness.",
  },
];

export default function InsightBehind() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: Section Heading */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
              Our Perspective
            </span>

            <h2 className="mt-4 font-heading-bold text-3xl italic text-primary md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Organizational challenges are often symptoms of deeper readiness
              gaps.
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

          {/* Right: Narrative + Readiness Lens */}
          <motion.div
            className="space-y-8 lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                Organizations often respond to performance issues through
                isolated interventions — new policies, additional training,
                leadership changes, or revised incentives. These actions may be
                useful, but they rarely address the full picture on their own.
              </p>

              <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                Afresource looks beneath the visible challenge to understand
                whether the organization has the people structures, systems,
                capabilities, and operating clarity required to achieve its
                goals consistently.
              </p>

              <p className="font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                This is the basis of Organizational Readiness: aligning people,
                systems, and structures so that performance can be sustained
                beyond individual effort or short-term fixes.
              </p>
            </div>

            {/* Readiness Lens Card */}
            <div className="border-l-2 border-accent bg-primaryAccent px-6 py-7 md:px-8 md:py-8">
              <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
                The Readiness Lens
              </span>

              <div className="mt-6 space-y-5">
                {readinessSignals.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.15 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="grid grid-cols-[auto_1fr] gap-4"
                  >
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 font-body-semibold text-[0.65rem] text-primary">
                      {index + 1}
                    </span>

                    <div>
                      <h3 className="font-body-semibold text-base text-primary md:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1 font-body-normal text-sm leading-relaxed text-foreground/70 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
