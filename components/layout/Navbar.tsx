"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Who We Serve" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo/Afresource_Primary_Green.png"
              alt="Afresource logo"
              width={1280}
              height={315}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-1 text-base font-body-medium transition-colors duration-200"
                  style={{
                    color: isActive
                      ? "var(--secondary-accent)"
                      : "var(--primary)",
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-secondary" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/partner"
              className="inline-flex items-center rounded-md px-6 py-2.5 text-sm font-medium text-white font-body-normal bg-primary transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Partner with Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center p-2 text-primary hover:text-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden border-t overflow-hidden transition-all duration-300 ease-in-out border-secondary ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-3 text-base font-medium transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  color: isActive
                    ? "var(--secondary-accent)"
                    : "var(--primary)",
                  backgroundColor: isActive
                    ? "var(--secondary)"
                    : "transparent",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href="/partner"
              className="block w-full text-center rounded-md px-5 py-3 text-sm font-medium text-white"
              style={{
                fontFamily: "var(--font-body)",
                backgroundColor: "var(--primary)",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
