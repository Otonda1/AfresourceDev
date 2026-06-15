"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhoWeServeCTA() {
  return (
    <section className="bg-primary py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          className="font-heading-bold text-3xl italic text-background md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Let&apos;s Discuss Your Organization
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-xl font-body-normal text-base leading-relaxed text-background/60 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          If your organization is preparing for growth, navigating change, or
          strengthening long-term performance, Afresource can help build the
          foundations required for sustainable success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="inline-block bg-accent px-14 py-4 font-body-semibold text-sm uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/20 md:px-20 md:py-5"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
