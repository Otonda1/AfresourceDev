"use client";

import { motion } from "framer-motion";
import { BarChart2, RefreshCw, Building2, Check } from "lucide-react";

const solutions = [
  {
    code: "01",
    icon: Building2,
    title: "Organizational Readiness Assessment",
    description:
      "Understand where your organization stands today and what needs to be strengthened to support future growth, performance, and sustainability.",
    outcomes: [
      "Organizational Readiness Score",
      "Diagnostic Assessment Report",
      "Priority Improvement Areas",
      "Executive Briefing",
      "Implementation Roadmap",
    ],
    visual: (
      <svg
        viewBox="0 0 220 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        {/* Grid lines */}
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="20"
            y1={20 + i * 26}
            x2="210"
            y2={20 + i * 26}
            stroke="#1a2e1e"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        ))}
        {/* Bars */}
        {[
          { x: 32, h: 52, label: "Culture" },
          { x: 68, h: 72, label: "Structure" },
          { x: 104, h: 38, label: "Systems" },
          { x: 140, h: 86, label: "People" },
          { x: 176, h: 60, label: "Governance" },
        ].map((bar, i) => (
          <g key={i}>
            <rect
              x={bar.x}
              y={98 - bar.h}
              width="28"
              height={bar.h}
              fill="#1a2e1e"
              fillOpacity={0.06 + i * 0.02}
              rx="1"
            />
            {/* Accent top cap */}
            <rect
              x={bar.x}
              y={98 - bar.h}
              width="28"
              height="3"
              fill="#8ab897"
              fillOpacity="0.7"
              rx="1"
            />
          </g>
        ))}
        {/* Baseline */}
        <line
          x1="20"
          y1="98"
          x2="210"
          y2="98"
          stroke="#1a2e1e"
          strokeOpacity="0.1"
          strokeWidth="1"
        />
        {/* Score badge */}
        <rect
          x="148"
          y="8"
          width="56"
          height="24"
          rx="12"
          fill="#1a2e1e"
          fillOpacity="0.07"
        />
        <text
          x="176"
          y="24"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          fill="#1a2e1e"
          fillOpacity="0.5"
          letterSpacing="0.05em"
        >
          SCORE
        </text>
      </svg>
    ),
  },
  {
    code: "02",
    icon: RefreshCw,
    title: "Workforce Transition & Integration Solutions",
    description:
      "Help employees succeed through periods of change, movement, onboarding, and organizational transition.",
    outcomes: [
      "Structured Onboarding Frameworks",
      "Workforce Transition Plans",
      "Internal Mobility Processes",
      "Employee Integration Support",
      "Reduced Disruption During Change",
    ],
    visual: (
      <svg
        viewBox="0 0 220 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        {/* Journey path */}
        <path
          d="M 20 90 C 60 90 60 30 110 30 C 160 30 160 70 200 50"
          stroke="#1a2e1e"
          strokeOpacity="0.08"
          strokeWidth="2"
          strokeDasharray="4 3"
          fill="none"
        />
        <path
          d="M 20 90 C 60 90 60 30 110 30 C 160 30 160 70 200 50"
          stroke="#8ab897"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Nodes */}
        {[
          { cx: 20, cy: 90, label: "Entry" },
          { cx: 75, cy: 55, label: "Onboard" },
          { cx: 110, cy: 30, label: "Integrate" },
          { cx: 155, cy: 58, label: "Align" },
          { cx: 200, cy: 50, label: "Perform" },
        ].map((node, i) => (
          <g key={i}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r="7"
              fill="white"
              stroke="#1a2e1e"
              strokeOpacity="0.12"
              strokeWidth="1.5"
            />
            <circle
              cx={node.cx}
              cy={node.cy}
              r="3"
              fill="#8ab897"
              fillOpacity={0.5 + i * 0.1}
            />
          </g>
        ))}
        {/* Arrow at end */}
        <path
          d="M 194 46 L 202 50 L 194 54"
          stroke="#8ab897"
          strokeOpacity="0.7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    code: "03",
    icon: BarChart2,
    title: "Organizational Performance & Capability Solutions",
    description:
      "Build the systems that strengthen accountability, performance, leadership capability, employee experience, and long-term organizational success.",
    outcomes: [
      "Performance Management Frameworks",
      "Leadership & Capability Development",
      "Recognition & Accountability Structures",
      "Employee Experience Improvements",
      "Stronger Performance Culture",
    ],
    visual: (
      <svg
        viewBox="0 0 220 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        {/* Concentric rings — capability radar */}
        {[44, 33, 22, 11].map((r, i) => (
          <circle
            key={i}
            cx="110"
            cy="60"
            r={r}
            stroke="#1a2e1e"
            strokeOpacity={0.05 + i * 0.02}
            strokeWidth="1"
            fill="none"
          />
        ))}
        {/* Spokes */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={110}
              y1={60}
              x2={110 + Math.cos(rad) * 44}
              y2={60 + Math.sin(rad) * 44}
              stroke="#1a2e1e"
              strokeOpacity="0.07"
              strokeWidth="1"
            />
          );
        })}
        {/* Filled polygon — performance shape */}
        <polygon
          points="110,22 148,39 148,81 110,98 72,81 72,39"
          fill="#8ab897"
          fillOpacity="0.12"
          stroke="#8ab897"
          strokeOpacity="0.4"
          strokeWidth="1.5"
        />
        {/* Inner polygon */}
        <polygon
          points="110,38 133,49 133,71 110,82 87,71 87,49"
          fill="#1a2e1e"
          fillOpacity="0.05"
          stroke="#1a2e1e"
          strokeOpacity="0.1"
          strokeWidth="1"
        />
        {/* Centre dot */}
        <circle cx="110" cy="60" r="4" fill="#8ab897" fillOpacity="0.7" />
        {/* Outer labels */}
        {[
          { deg: 270, label: "Accountability" },
          { deg: 30, label: "Leadership" },
          { deg: 150, label: "Experience" },
        ].map(({ deg, label }, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <text
              key={i}
              x={110 + Math.cos(rad) * 56}
              y={60 + Math.sin(rad) * 56 + 3}
              textAnchor="middle"
              fontSize="7"
              fill="#1a2e1e"
              fillOpacity="0.3"
              letterSpacing="0.04em"
            >
              {label}
            </text>
          );
        })}
      </svg>
    ),
  },
];

export default function HowWeHelp() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-body-semibold text-xs uppercase tracking-[0.2em] text-secondary">
            How We Help
          </p>
          <h2 className="mt-3 font-heading-medium text-3xl text-primary md:text-4xl">
            How We Help Organizations
          </h2>
          <p className="mt-4 font-body-normal text-base leading-relaxed text-foreground/70 md:text-lg">
            Afresource helps organizations strengthen Organizational Readiness
            through three core solutions designed to improve performance,
            support change, and build long-term capability.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-foreground/10" />

        {/* Solution cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
          {solutions.map((solution, index) => {
            const isDark = index === 1;
            return (
              <motion.div
                key={solution.code}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className={`flex flex-col ${
                  isDark
                    ? "bg-primary"
                    : "border border-foreground/10 bg-background"
                } ${index === 1 ? "md:-mx-px md:z-10" : ""}`}
              >
                {/* Visual panel */}
                <div
                  className={`px-8 pb-0 pt-8 md:px-10 md:pt-10 ${
                    isDark ? "opacity-60" : "opacity-100"
                  }`}
                >
                  <div
                    className={`rounded-sm px-2 py-4 ${
                      isDark ? "bg-background/5" : "bg-primaryAccent/20"
                    }`}
                  >
                    {solution.visual}
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <solution.icon
                      className={`h-5 w-5 ${isDark ? "text-background/70" : "text-primary"}`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`font-body-semibold text-xs tracking-[0.15em] ${
                        isDark ? "text-accent" : "text-secondary"
                      }`}
                    >
                      {solution.code}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="mt-6 grow">
                    <h3
                      className={`font-heading-medium text-xl md:text-2xl ${
                        isDark ? "text-background" : "text-primary"
                      }`}
                    >
                      {solution.title}
                    </h3>
                    <p
                      className={`mt-3 font-body-normal text-sm leading-relaxed md:text-base ${
                        isDark ? "text-background/65" : "text-foreground/65"
                      }`}
                    >
                      {solution.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className={`my-8 h-px w-full ${
                      isDark ? "bg-background/10" : "bg-foreground/10"
                    }`}
                  />

                  {/* Typical Outcomes */}
                  <div>
                    <span
                      className={`font-body-semibold text-[0.6rem] uppercase tracking-[0.18em] ${
                        isDark ? "text-background/35" : "text-foreground/35"
                      }`}
                    >
                      Typical Outcomes
                    </span>
                    <ul className="mt-4 space-y-2.5">
                      {solution.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3">
                          <Check
                            className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                              isDark ? "text-accent" : "text-secondary"
                            }`}
                            strokeWidth={2.5}
                          />
                          <span
                            className={`font-body-normal text-xs leading-relaxed md:text-sm ${
                              isDark
                                ? "text-background/60"
                                : "text-foreground/65"
                            }`}
                          >
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-10">
                    <div
                      className={`h-px w-full ${
                        isDark ? "bg-background/10" : "bg-foreground/10"
                      }`}
                    >
                      <div
                        className={`h-full w-1/2 ${
                          isDark ? "bg-accent" : "bg-secondary"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
