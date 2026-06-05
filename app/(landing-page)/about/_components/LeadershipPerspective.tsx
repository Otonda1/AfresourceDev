"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LeadershipPerspective() {
  return (
    <section className="border-y border-foreground/10 bg-primaryAccent/20 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
              Leadership Perspective
            </span>

            <h2 className="mt-4 font-heading-bold text-3xl italic text-primary md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Built on practical organizational experience.
            </h2>

            <div className="mt-8">
              <h3 className="font-heading-medium text-xl text-foreground">
                Annette Otonda
              </h3>
              <p className="mt-1 font-body-normal text-base italic text-foreground/60">
                Managing Partner & Chief Architect
              </p>
            </div>

            <p className="mt-8 max-w-md font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
              &ldquo;With over two decades of strategic advisory across
              sub-Saharan Africa, I founded Afresource to move beyond
              theoretical frameworks. We focus on the granular mechanics of how
              organizations actually function.&rdquo;
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 font-body-semibold text-sm uppercase tracking-[0.15em] text-primary transition-all duration-200 hover:text-secondary hover:gap-3"
            >
              View Full Profile
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative aspect-4/5 overflow-hidden bg-foreground/5">
              <Image
                src="/images/leadership-portrait.jpg"
                alt="Annette Otonda, Managing Partner & Chief Architect"
                fill
                className="object-cover mix-blend-luminosity"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
