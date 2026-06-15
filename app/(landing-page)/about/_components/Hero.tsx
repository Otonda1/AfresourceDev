"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about/about-hero-m.png"
          alt="Abstract architectural detail showing intersecting lines and planes, representing structured systems and clarity"
          fill
          className="object-cover"
          priority
        />
        {/* Green overlay for text contrast */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              className="inline-block border-l-2 border-accent pl-4 font-body-semibold text-xs uppercase tracking-[0.2em] text-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Institutional Advisory
            </motion.span>

            <motion.h1
              className="mt-8 font-heading-bold text-4xl italic text-background md:text-5xl lg:text-[3.75rem] lg:leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Organizations perform best when people, systems, and structures
              work together in alignment.
            </motion.h1>

            <motion.p
              className="mt-8 max-w-xl font-body-normal text-base leading-relaxed text-background/70 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              Organizational Readiness is the ability of an organization to
              align its people, systems, and structures to consistently achieve
              its goals. Afresource helps organizations strengthen this
              readiness through practical advisory, assessment, and
              implementation support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="mt-10"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 text-background transition-colors duration-200 hover:text-accent"
              >
                <span className="font-body-semibold text-sm uppercase tracking-[0.15em]">
                  Explore Our Services
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-12 right-12 hidden h-px w-64 bg-accent/50 lg:block" />
    </section>
  );
}
