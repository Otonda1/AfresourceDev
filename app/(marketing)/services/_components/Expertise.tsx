"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const subServices = [
  {
    title: "Regulatory Mapping",
    description:
      "Navigating OHADA, COMESA, and EAC frameworks with surgical precision.",
  },
  {
    title: "Executive Relocation",
    description:
      "Strategic placement and logistical integrity for senior leadership transitions.",
  },
];

export default function SignatureExpertise() {
  return (
    <section className="bg-primary py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column — Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
                Signature Expertise
              </span>

              <h2 className="font-heading-bold text-3xl text-background md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Mobility and Transitions: Cross-Border Coordination.
              </h2>

              <p className="max-w-lg font-body-normal text-base leading-relaxed text-background/70 md:text-lg">
                Seamless operational continuity during jurisdictional shifts. We
                provide the strategic glue that binds multi-regional
                headquarters, ensuring executive mobility and organizational
                agility across Africa&apos;s diverse economic blocs.
              </p>
            </motion.div>

            {/* Sub-services */}
            <motion.div
              className="grid grid-cols-1 gap-8 pt-4 sm:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              {subServices.map((service) => (
                <div key={service.title}>
                  <h3 className="font-body-semibold text-sm uppercase tracking-[0.15em] text-accent">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-body-normal text-sm leading-relaxed text-background/60">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden">
              <Image
                src="/handshake.jpg"
                alt="Business professionals shaking hands in agreement"
                width={600}
                height={700}
                className="h-auto w-full object-cover grayscale"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
