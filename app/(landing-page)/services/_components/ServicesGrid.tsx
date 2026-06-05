"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Network, Landmark, TrendingUp } from "lucide-react";

const services = [
  {
    code: "PI-01",
    icon: Users,
    title: "People Infrastructure",
    description:
      "Designing and strengthening onboarding, mobility, performance, recognition, and employee lifecycle systems that support clarity, consistency, and organizational effectiveness.",
    tags: ["Talent Strategy", "Culture Mapping"],
    variant: "white" as const,
  },
  {
    code: "OS-02",
    icon: Network,
    title: "Organizational Structure",
    description:
      "Clarifying roles, responsibilities, reporting lines, and ways of working so teams can operate with stronger alignment and accountability.",
    variant: "dark" as const,
  },
  {
    code: "GS-03",
    icon: Landmark,
    title: "Governance Systems",
    description:
      "Developing practical frameworks that support consistent, transparent, and well-informed decision-making across the organization.",
    image: "/boardroom.jpg",
    variant: "image" as const,
  },
  {
    code: "SG-04",
    icon: TrendingUp,
    title: "Sustainable Growth Advisory",
    description:
      "Supporting organizations to scale people systems, strengthen organizational effectiveness, and build structures that can support long-term growth.",
    cta: { label: "View Frameworks", href: "/services/sustainable-growth" },
    variant: "light" as const,
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* People Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ServiceCard service={services[0]} />
          </motion.div>

          {/* Organizational Structure */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <ServiceCard service={services[1]} />
          </motion.div>

          {/* Governance Systems */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <ServiceCard service={services[2]} />
          </motion.div>

          {/* Sustainable Growth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <ServiceCard service={services[3]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const isDark = service.variant === "dark";
  const isLight = service.variant === "light";
  const isImage = service.variant === "image";

  if (isImage) {
    return (
      <div className="group relative flex h-full min-h-80 flex-col justify-end overflow-hidden p-8 md:p-10">
        <Image
          src={service.image!}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent" />

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <service.icon
              className="h-6 w-6 text-background/80"
              strokeWidth={1.5}
            />
            <span className="font-body-semibold text-xs tracking-[0.15em] text-accent">
              {service.code}
            </span>
          </div>
          <h3 className="mt-6 font-heading-medium text-2xl text-background md:text-3xl">
            {service.title}
          </h3>
          <p className="mt-3 max-w-sm font-body-normal text-sm leading-relaxed text-background/80 md:text-base">
            {service.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex h-full flex-col p-8 transition-all duration-300 md:p-10 ${
        isDark
          ? "bg-primary hover:bg-[#0f1f15]"
          : isLight
            ? "border border-foreground/10 bg-primaryAccent/30 hover:border-primary/20"
            : "border border-foreground/10 bg-background hover:border-primary/20"
      }`}
    >
      <div className="flex items-center justify-between">
        <service.icon
          className={`h-6 w-6 ${
            isDark ? "text-background/80" : "text-primary"
          }`}
          strokeWidth={1.5}
        />
        <span
          className={`font-body-semibold text-xs tracking-[0.15em] ${
            isDark ? "text-accent" : "text-secondary"
          }`}
        >
          {service.code}
        </span>
      </div>

      <div className="mt-6 grow">
        <h3
          className={`font-heading-medium text-2xl md:text-3xl ${
            isDark ? "text-background" : "text-primary"
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`mt-3 max-w-sm font-body-normal text-sm leading-relaxed md:text-base ${
            isDark ? "text-background/70" : "text-foreground/70"
          }`}
        >
          {service.description}
        </p>
      </div>

      {/* Tags (People Infrastructure only) */}
      {service.tags && (
        <div className="mt-8 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primaryAccent/50 px-3 py-1 font-body-semibold text-[0.65rem] uppercase tracking-widest text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA (Sustainable Growth only) */}
      {/* {service.cta && (
        <Link
          href={service.cta.href}
          className="group/cta mt-8 inline-flex items-center gap-2 font-body-semibold text-sm uppercase tracking-[0.15em] text-primary transition-all duration-200 hover:gap-3"
        >
          {service.cta.label}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
        </Link>
      )} */}

      {/* Progress bar (Organizational Structure only) */}
      {isDark && (
        <div className="mt-8">
          <div className="h-0.5 w-full bg-background/10">
            <div className="h-full w-1/3 bg-accent" />
          </div>
        </div>
      )}
    </div>
  );
}
