// app/contact/sections/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 max-w-lg md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="font-body-semibold text-xs uppercase tracking-[0.2em] text-accent">
            Strategic Inquiry
          </span>
          <h1 className="mt-3 font-heading-bold text-4xl italic text-primary md:text-5xl">
            Get in Touch
          </h1>
          <motion.div
            className="mt-5 h-[2px] w-16 bg-secondary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            style={{ originX: 0 }}
          />
          <p className="mt-6 font-body-normal text-base leading-relaxed text-foreground/70 md:text-lg">
            Whether you are seeking market entry advisory or ESG transformation
            strategies, our specialists are prepared to facilitate your
            Pan-African ambitions.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left — Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <form className="border border-foreground/10 p-6 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-foreground/15 bg-transparent px-4 py-3 font-body-normal text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Organization */}
                <div className="space-y-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full border border-foreground/15 bg-transparent px-4 py-3 font-body-normal text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@organization.com"
                    className="w-full border border-foreground/15 bg-transparent px-4 py-3 font-body-normal text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Service Interest */}
                <div className="space-y-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    Service Interest
                  </label>
                  <input
                    type="text"
                    placeholder="Strategic Advisory"
                    className="w-full border border-foreground/15 bg-transparent px-4 py-3 font-body-normal text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Message — full width */}
                <div className="space-y-2 md:col-span-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Briefly describe your inquiry..."
                    className="w-full resize-none border border-foreground/15 bg-transparent px-4 py-3 font-body-normal text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-body-semibold text-sm uppercase tracking-[0.15em] text-background transition-all duration-300 hover:bg-[#0f1f15] hover:shadow-lg md:px-10"
                >
                  Submit Inquiry
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

              <p className="mt-6 font-body-normal text-xs text-foreground/40">
                * All inquiries reviewed with care and discretion.
              </p>
            </form>
          </motion.div>

          {/* Right — Contact Details */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Headquarters Card */}
            <motion.div
              className="relative overflow-hidden bg-primary p-8 md:p-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              {/* Subtle globe watermark */}
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-background/3" />

              <span className="font-body-semibold text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                Headquarters
              </span>
              <h3 className="mt-3 font-heading-medium text-2xl text-background md:text-3xl">
                Nairobi, Kenya
              </h3>
              <p className="mt-3 font-body-normal text-sm leading-relaxed text-background/60">
                Westlands Business District,
                <br />
                Delta Corner Tower,
                <br />
                Waiyaki Way.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:info@afresource.com"
                  className="flex items-center gap-3 font-body-normal text-sm text-background/70 transition-colors duration-200 hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  info@afresource.com
                </a>
                <a
                  href="tel:+254204400000"
                  className="flex items-center gap-3 font-body-normal text-sm text-background/70 transition-colors duration-200 hover:text-accent"
                >
                  <Phone className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  +254 20 440 0000
                </a>
              </div>
            </motion.div>

            {/* Regional Hub Card — with Nairobi skyline image */}
            <motion.div
              className="relative overflow-hidden bg-[#3d3a35]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              {/* Skyline Image */}
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/nairobi-skyline-themed.png"
                  alt="Nairobi city skyline illustration"
                  fill
                  className="object-cover object-bottom"
                />
                {/* Bottom fade into card background */}
                <div className="absolute left-6 top-6">
                  <span className="inline-block bg-background/90 px-4 py-2 font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-[#3d3a35]">
                    Regional Hub
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
