"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, ArrowRight } from "lucide-react";

const inquiryTypes = [
  "Organizational Readiness Assessment",
  "Workforce Transition & Integration Solutions",
  "Organizational Performance & Capability Solutions",
  "General Inquiry",
];

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
            Whether your organization is preparing for growth, navigating
            change, or strengthening organizational readiness, we&apos;d be
            happy to start a conversation.
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
                {/* Full Name — required */}
                <div className="space-y-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full border border-foreground/15 bg-transparent px-4 py-3 font-body-normal text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Email Address — required */}
                <div className="space-y-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@organization.com"
                    className="w-full border border-foreground/15 bg-transparent px-4 py-3 font-body-normal text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Organization — required */}
                <div className="space-y-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    Organization <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company or institution name"
                    className="w-full border border-foreground/15 bg-transparent px-4 py-3 font-body-normal text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Job Title / Role — required */}
                <div className="space-y-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    Job Title / Role <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Head of People & Culture"
                    className="w-full border border-foreground/15 bg-transparent px-4 py-3 font-body-normal text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Telephone Number — required */}
                <div className="space-y-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    Telephone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 700 000 000"
                    className="w-full border border-foreground/15 bg-transparent px-4 py-3 font-body-normal text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Location — optional */}
                <div className="space-y-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    Location{" "}
                    <span className="normal-case tracking-normal text-foreground/30">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="City, Country"
                    className="w-full border border-foreground/15 bg-transparent px-4 py-3 font-body-normal text-sm text-foreground placeholder:text-foreground/40 transition-colors duration-200 focus:border-primary focus:outline-none"
                  />
                </div>

                {/* How Can We Help — dropdown, full width */}
                <div className="space-y-2 md:col-span-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    How Can We Help? <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      defaultValue=""
                      className="w-full appearance-none border border-foreground/15 bg-transparent px-4 py-3 font-body-normal text-sm text-foreground transition-colors duration-200 focus:border-primary focus:outline-none"
                    >
                      <option value="" disabled className="text-foreground/40">
                        Select an inquiry type
                      </option>
                      {inquiryTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-background text-foreground"
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                    {/* Custom chevron */}
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="text-foreground/40"
                      >
                        <path
                          d="M2 4l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message — full width */}
                <div className="space-y-2 md:col-span-2">
                  <label className="font-body-semibold text-[0.65rem] uppercase tracking-[0.15em] text-foreground/50">
                    Message{" "}
                    <span className="normal-case tracking-normal text-foreground/30">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Briefly describe your inquiry or the challenge your organization is facing..."
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
                <span className="text-accent">*</span> Required fields. All
                inquiries reviewed with care and discretion.
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

            {/* Regional Hub Card */}
            <motion.div
              className="relative overflow-hidden bg-[#3d3a35]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/nairobi-skyline-themed.png"
                  alt="Nairobi city skyline illustration"
                  fill
                  className="object-cover object-bottom"
                />
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
