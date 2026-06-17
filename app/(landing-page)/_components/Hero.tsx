"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  data: {
    headline: string;
    subheadline: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
          {/* Left Column — Content */}
          <div className="flex flex-col items-start space-y-8">
            {/* Badge */}
            <motion.span
              className="inline-block rounded-full bg-primaryAccent px-5 py-2 text-xs font-body-semibold uppercase tracking-[0.2em] text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Advisory Excellence
            </motion.span>

            {/* Heading */}
            <motion.h1
              className="font-heading-bold text-4xl italic leading-[1.1] text-primary md:text-4xl lg:text-[3rem] xl:text-[4rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Strengthening the people, systems, and structures that enable
              organizational readiness.
            </motion.h1>

            {/* Description */}
            <motion.p
              className="max-w-md border-l-2 border-secondary pl-6 font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              Afresource specializes in Organizational Readiness. We help
              organizations assess, strengthen, and sustain the people
              structures, systems, and capabilities required to achieve their
              goals.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center bg-accent px-8 py-3.5 text-sm font-body-semibold uppercase tracking-[0.15em] text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                START A CONVERSATION
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center border border-secondary px-8 py-3.5 text-sm font-body-semibold uppercase tracking-[0.15em] text-secondary transition-all duration-200 hover:bg-secondary hover:text-background"
              >
                Explore Approach
              </Link>
            </motion.div>
          </div>

          {/* Right Column — Image with decorative block */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            {/* Decorative background block */}
            <motion.div
              className="absolute -bottom-6 -left-6 h-full w-full bg-primaryAccent lg:-bottom-8 lg:-left-8"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />

            {/* Hero Image */}
            <div className="relative overflow-hidden">
              <Image
                src="/home/hero.png"
                alt="Executive team meeting in a modern glass office"
                width={640}
                height={760}
                className="h-auto w-full object-cover grayscale"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
