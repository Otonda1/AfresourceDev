"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const detailedServices = [
  {
    number: "01",
    title: "People Infrastructure",
    description:
      "Afresource designs and strengthens the people systems that support employees across the full lifecycle — from onboarding and mobility to performance, recognition, progression, and transition. The focus is on creating systems that are practical, consistent, and aligned to how the organization operates.",
    focusAreas: [
      "Onboarding design",
      "Employee lifecycle systems",
      "Staff mobility frameworks",
      "Performance management systems",
      "Recognition frameworks",
      "Payroll alignment within broader people systems",
      "Progression and transition processes",
    ],
    image: "/services/people.jpg",
  },
  {
    number: "02",
    title: "Organizational Structure",
    description:
      "Afresource helps organizations clarify how work is organized, how roles relate to one another, and how accountability is structured. This work supports clearer reporting lines, stronger role definition, and better alignment between organizational strategy and day-to-day execution.",
    focusAreas: [
      "Role clarity",
      "Reporting structures",
      "Organizational design",
      "Accountability frameworks",
      "Alignment between roles and strategy",
      "Structures for growing or changing teams",
    ],
    image: "/services/detail-structure.jpg",
  },
  {
    number: "03",
    title: "Governance Systems",
    description:
      "Afresource supports organizations in developing governance systems that make decision-making clearer, more consistent, and more transparent. The focus is on practical frameworks that guide how decisions are made, who is responsible, and how policies translate into everyday practice.",
    focusAreas: [
      "Policy design and review",
      "Decision-making frameworks",
      "Governance guidelines",
      "Consistency structures",
      "Alignment between policy and practice",
      "Accountability mechanisms",
    ],
    image: "/boardroom.jpg",
  },
  {
    number: "04",
    title: "Sustainable Growth Advisory",
    description:
      "Afresource advises organizations seeking to scale people systems, strengthen organizational effectiveness, and prepare for growth or transition. This work is especially relevant for organizations whose teams, operations, or geographic footprint are expanding and whose existing systems need to become more structured and consistent.",
    focusAreas: [
      "Scaling people systems",
      "Strengthening organizational effectiveness",
      "Aligning people systems with growth",
      "Supporting transitions and restructuring",
      "Improving consistency across teams or locations",
      "Preparing systems for long-term sustainability",
    ],
    image: "/services/detail-growth.jpg",
  },
];

export default function DetailedServices() {
  return (
    <section className="bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {detailedServices.map((service, index) => (
          <motion.div
            key={service.number}
            className={`grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 ${
              index !== 0
                ? "mt-24 border-t border-foreground/10 pt-24 md:mt-32 md:pt-32"
                : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Image Column — alternates left/right */}
            <div
              className={`lg:col-span-5 ${index % 2 === 1 ? "lg:col-start-8" : ""}`}
            >
              <motion.div
                className="relative aspect-4/3 overflow-hidden bg-foreground/5"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover grayscale"
                />
              </motion.div>
            </div>

            {/* Content Column */}
            <div
              className={`lg:col-span-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-7"}`}
            >
              <span className="font-body-semibold text-xs uppercase tracking-[0.15em] text-accent">
                {service.number}
              </span>

              <h2 className="mt-4 font-heading-bold text-3xl italic text-primary md:text-4xl">
                {service.title}
              </h2>

              <p className="mt-6 font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
                {service.description}
              </p>

              <div className="mt-8 border border-foreground/10 p-6 md:p-8">
                <h4 className="font-body-semibold text-xs uppercase tracking-[0.15em] text-foreground/50">
                  Areas of Focus
                </h4>
                <ul className="mt-4 space-y-3">
                  {service.focusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="font-body-normal text-sm text-foreground/70 md:text-base">
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
