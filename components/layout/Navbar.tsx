"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setAtTop(currentScrollY < 10);
          setScrolled(currentScrollY > 60);

          // Hide navbar when scrolling down fast, reveal when scrolling up
          if (
            currentScrollY > lastScrollY.current + 8 &&
            currentScrollY > 120
          ) {
            setHidden(true);
          } else if (currentScrollY < lastScrollY.current - 4) {
            setHidden(false);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const closeMobileMenu = () => setMobileMenuOpen(false);
    closeMobileMenu();
  }, [pathname]);

  return (
    <>
      {/* Sticky container */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          hidden ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
        style={{ willChange: "transform" }}
      >
        {/* Floating pill wrapper — appears after scroll */}
        <div
          className={[
            "mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled ? "max-w-5xl mt-3 px-2" : "max-w-7xl mt-0 px-0",
          ].join(" ")}
        >
          <div
            className={[
              "relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              scrolled
                ? "rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.10),0_1.5px_4px_rgba(0,0,0,0.06)] border border-white/60 backdrop-blur-xl bg-white/85"
                : "rounded-none shadow-none border-transparent bg-background",
            ].join(" ")}
          >
            <div
              className={[
                "mx-auto transition-all duration-500",
                scrolled ? "max-w-full px-5" : "max-w-7xl px-4 sm:px-6 lg:px-8",
              ].join(" ")}
            >
              <nav
                className={[
                  "flex items-center justify-between transition-all duration-500",
                  scrolled ? "h-15" : "h-20",
                ].join(" ")}
              >
                {/* Logo */}
                <Link href="/" className="flex items-center shrink-0 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/logo/Afresource_Primary_Green.png"
                      alt="Afresource logo"
                      width={1280}
                      height={315}
                      className={[
                        "w-auto transition-all duration-500",
                        scrolled ? "h-7" : "h-9",
                      ].join(" ")}
                      priority
                    />
                    {/* Subtle shimmer on hover */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                  </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={[
                          "relative px-3.5 py-2 rounded-lg text-[0.9rem]  font-body-medium transition-all duration-200",
                          "hover:bg-black/4",
                          isActive
                            ? "text-secondary"
                            : "text-primary hover:text-secondary",
                        ].join(" ")}
                      >
                        {link.label}
                        {/* Animated active dot */}
                        {isActive && (
                          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary animate-[appear_0.3s_ease_forwards]" />
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:flex items-center shrink-0">
                  <Link
                    href="/contact"
                    className={[
                      "relative inline-flex items-center gap-2 overflow-hidden",
                      "rounded-xl px-5 py-2.5 text-sm font-semibold font-body-normal text-white",
                      "bg-primary transition-all duration-300",
                      "hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:scale-[1.02]",
                      "active:translate-y-0 active:scale-100",
                      "group",
                    ].join(" ")}
                  >
                    {/* Background sweep on hover */}
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-transparent via-white/10 to-transparent" />
                    <span className="relative">Partner with Us</span>
                    <ArrowIcon />
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  className="lg:hidden flex items-center justify-center p-2 rounded-lg text-primary hover:bg-black/5 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                  aria-expanded={mobileMenuOpen}
                >
                  <span
                    className={[
                      "block transition-all duration-300",
                      mobileMenuOpen
                        ? "rotate-90 opacity-0 absolute"
                        : "rotate-0 opacity-100",
                    ].join(" ")}
                  >
                    <MenuIcon />
                  </span>
                  <span
                    className={[
                      "block transition-all duration-300",
                      mobileMenuOpen
                        ? "rotate-0 opacity-100"
                        : "-rotate-90 opacity-0 absolute",
                    ].join(" ")}
                  >
                    <CloseIcon />
                  </span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation — rendered outside the sticky header so it doesn't clip */}
      <div
        className={[
          "fixed inset-x-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{ top: scrolled ? "calc(60px + 0.75rem + 0.5rem)" : "80px" }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div
            className={[
              "rounded-2xl border border-white/60 backdrop-blur-xl bg-white/90",
              "shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-3 space-y-1",
              "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              mobileMenuOpen ? "translate-y-0" : "-translate-y-4",
            ].join(" ")}
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "flex items-center gap-3 rounded-xl px-4 py-3",
                    "text-[0.95rem] font-body-medium transition-all duration-200",
                    "hover:bg-black/4",
                    isActive
                      ? "text-secondary bg-(--secondary)/40"
                      : "text-primary",
                  ].join(" ")}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${i * 40}ms` : "0ms",
                    transform: mobileMenuOpen
                      ? "translateX(0)"
                      : "translateX(-8px)",
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                  )}
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-2 pb-1 px-1">
              <Link
                href="/partner"
                className={[
                  "flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3",
                  "text-sm font-semibold text-white bg-primary",
                  "transition-all duration-300 hover:shadow-md hover:-translate-y-0.5",
                  "active:translate-y-0",
                ].join(" ")}
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${navLinks.length * 40}ms`
                    : "0ms",
                  transform: mobileMenuOpen
                    ? "translateX(0)"
                    : "translateX(-8px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner with Us
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Top spacer — prevents content from hiding behind the fixed navbar */}
      <div className="h-20" aria-hidden="true" />
    </>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="relative transition-transform duration-200 group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M2 7h10M7 2l5 5-5 5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
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
      width="22"
      height="22"
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
