"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Leadership() {
  return (
    <section className="bg-primary py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="text-center font-heading-bold text-3xl italic text-secondary md:text-4xl lg:text-[2.75rem]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Leadership & Expertise
        </motion.h2>

        {/* Founder Card */}
        <motion.div
          className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10 md:mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Portrait */}
          <div className="relative h-72 w-56 shrink-0 overflow-hidden bg-background/10 sm:h-80 sm:w-64">
            <Image
              src="/images/annette-otonda.jpg"
              alt="Annette Otonda — Founder & CEO"
              fill
              className="object-cover"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col items-start text-center sm:text-left">
            <h3 className="font-heading-medium text-2xl text-background md:text-3xl">
              Annette Otonda
            </h3>
            <span className="mt-1 font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
              Founder & CEO
            </span>

            <p className="mt-5 max-w-sm font-body-normal text-sm leading-relaxed text-background/70 md:text-base">
              Afresource is led by a practitioner with experience across
              corporate and development environments, focusing on systems,
              mobility, onboarding, and organizational effectiveness.
            </p>

            <Link
              href="/about/annette-otonda"
              className="group mt-6 inline-flex items-center gap-1.5 border-b border-accent pb-1 font-body-semibold text-xs uppercase tracking-[0.15em] text-accent transition-all duration-200 hover:gap-2.5"
            >
              Full Bio
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
