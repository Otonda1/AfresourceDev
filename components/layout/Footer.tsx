"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, MoveUpRight } from "lucide-react";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const contactItems = [
  {
    icon: Mail,
    label: "hello@afresource.com",
    href: "mailto:hello@afresource.com",
  },
  { icon: Phone, label: "+254 000 000 000", href: "tel:+254000000000" },
  { icon: MapPin, label: "Nairobi, Kenya", href: null },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      {/* ── Signature background element: large ghost letterform ── */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -bottom-12 select-none font-heading-bold text-[22rem] leading-none text-white/[0.035] lg:text-[28rem]"
      >
        A
      </span>

      {/* ── Thin top accent line ── */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-secondary/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-14 sm:flex-row sm:items-center"
        >
          <div>
            <p className="font-body-normal text-xs uppercase tracking-[0.22em] text-white/40">
              Ready to grow?
            </p>
            <h2 className="mt-2 font-heading-bold text-3xl text-white sm:text-4xl">
              Let&apos;s start a conversation.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group relative inline-flex shrink-0 items-center gap-2.5 overflow-hidden rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 font-body-semibold text-sm text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/17"
          >
            <span className="relative z-10">Partner with Us</span>
            <ArrowUpRight
              className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
            />
          </Link>
        </motion.div>

        {/* ── Main grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8"
        >
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block max-w-50">
              {/* Invert the green logo to show white on dark background */}
              <Image
                src="/logo/Afresource_Primary_Green.png"
                alt="Afresource Network Ltd"
                width={1280}
                height={315}
                className="h-auto w-full brightness-0 invert"
              />
            </Link>

            <p className="mt-6 max-w-xs font-body-normal text-sm leading-relaxed text-white/55">
              Organizational readiness advisory for organizations strengthening
              the people, structures, and capabilities required to achieve
              lasting goals.
            </p>

            <p className="mt-5 font-heading-medium text-base italic text-secondary/80">
              People. Structure. Sustainable Growth.
            </p>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-8 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/40 transition-all duration-200 hover:border-white/40 hover:text-white"
            >
              <MoveUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>

          {/* Company links */}
          <div className="lg:col-span-3">
            <h4 className="font-body-semibold text-[10px] uppercase tracking-[0.25em] text-white/35">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 font-body-normal text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-60"
                      strokeWidth={1.75}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-body-semibold text-[10px] uppercase tracking-[0.25em] text-white/35">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-4">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-white/30"
                    strokeWidth={1.5}
                  />
                  {href ? (
                    <a
                      href={href}
                      className="font-body-normal text-sm text-white/60 transition-colors duration-200 hover:text-white"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="font-body-normal text-sm text-white/60">
                      {label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 md:flex-row"
        >
          <p className="font-body-normal text-xs text-white/30">
            &copy; {new Date().getFullYear()} Afresource Network Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Use", href: "/terms" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body-normal text-xs text-white/30 transition-colors duration-200 hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
