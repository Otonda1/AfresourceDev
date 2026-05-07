// app/sections/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

const serviceLinks = [
  { label: "People Infrastructure", href: "/services/people-infrastructure" },
  {
    label: "Organizational Structure",
    href: "/services/organizational-structure",
  },
  { label: "Governance Systems", href: "/services/governance-systems" },
  { label: "Sustainable Growth", href: "/services/sustainable-growth" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Main Footer Grid */}
        <motion.div
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo/Afresource_Primary_Green.png"
                alt="Afresource"
                width={160}
                height={40}
              />
            </Link>
            <p className="mt-5 max-w-xs font-body-normal text-sm leading-relaxed text-foreground/60">
              Advisory for structured, effective organizations across
              Pan-African markets.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground/40 transition-all duration-200 hover:border-primary hover:text-primary"
                aria-label="LinkedIn"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-body-semibold text-xs uppercase tracking-[0.2em] text-foreground/40">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 font-body-normal text-sm text-foreground/70 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="font-body-semibold text-xs uppercase tracking-[0.2em] text-foreground/40">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 font-body-normal text-sm text-foreground/70 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="font-body-semibold text-xs uppercase tracking-[0.2em] text-foreground/40">
              Contact
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40"
                  strokeWidth={1.5}
                />
                <a
                  href="mailto:hello@afresource.com"
                  className="font-body-normal text-sm text-foreground/70 transition-colors duration-200 hover:text-primary"
                >
                  hello@afresource.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40"
                  strokeWidth={1.5}
                />
                <a
                  href="tel:+2341234567890"
                  className="font-body-normal text-sm text-foreground/70 transition-colors duration-200 hover:text-primary"
                >
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40"
                  strokeWidth={1.5}
                />
                <span className="font-body-normal text-sm text-foreground/70">
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <p className="font-body-normal text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} Afresource Network Ltd. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-body-normal text-xs text-foreground/40 transition-colors duration-200 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body-normal text-xs text-foreground/40 transition-colors duration-200 hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
