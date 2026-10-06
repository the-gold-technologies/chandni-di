"use client";

import React from "react";
import {
  School,
  CalendarCheck2,
  TrendingUp,
  GraduationCap,
  Sparkles,
  Compass,
  FileCheck2,
} from "lucide-react";

const developmentalStages = [
  {
    step: "1",
    stage: "STAGE 01",
    title: "Entry into formal education",
    description:
      "Foundational bridge learning, school readiness, and formal admission into mainstream schools.",
    icon: School,
    curveType: "down", // smile curve to step 2
  },
  {
    step: "2",
    stage: "STAGE 02",
    title: "Continued school participation",
    description:
      "Daily attendance tracking, after-school tutoring support, and dropout prevention counseling.",
    icon: CalendarCheck2,
    curveType: "up", // hill curve to step 3
  },
  {
    step: "3",
    stage: "STAGE 03",
    title: "Academic progress",
    description:
      "Curriculum mastery, holistic quarterly assessments, and grade-level conceptual competencies.",
    icon: TrendingUp,
    curveType: "none", // end of row 1
  },
  {
    step: "4",
    stage: "STAGE 04",
    title: "Higher education access",
    description:
      "Guidance through university admissions, entrance coaching, and 100% financial sponsorships.",
    icon: GraduationCap,
    curveType: "down", // smile curve to step 5
  },
  {
    step: "5",
    stage: "STAGE 05",
    title: "Skill development",
    description:
      "Digital computer literacy, communication skills, leadership, and mental health workshops.",
    icon: Sparkles,
    curveType: "up", // hill curve to step 6
  },
  {
    step: "6",
    stage: "STAGE 06",
    title: "Career preparation",
    description:
      "Career counselling, corporate internship placements, and transitions into dignified employment.",
    icon: Compass,
    curveType: "none", // end of row 2
  },
];

export default function ImpactMeasureProgressSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="space-y-12 sm:space-y-16">
        {/* Header with Playful Birds Doodle (Matching Reference) */}
        <div className="mx-auto max-w-3xl space-y-3.5 text-center">
          {/* Flying Birds Flock Illustration */}
          <div className="flex justify-center text-[#27272A] opacity-80">
            <svg
              width="54"
              height="44"
              viewBox="0 0 60 50"
              fill="currentColor"
              className="transition-transform hover:scale-105"
            >
              <path d="M28 8C26 5 24 5 22 7C20 5 18 5 16 8C19 9 21 8 22 11C23 8 25 9 28 8Z" />
              <path d="M38 14C36 11 34 11 32 13C30 11 28 11 26 14C29 15 31 14 32 17C33 14 35 15 38 14Z" />
              <path d="M20 20C18 17 16 17 14 19C12 17 10 17 8 20C11 21 13 20 14 23C15 20 17 21 20 20Z" />
              <path d="M48 22C46 19 44 19 42 21C40 19 38 19 36 22C39 23 41 22 42 25C43 22 45 23 48 22Z" />
              <path d="M30 26C28 23 26 23 24 25C22 23 20 23 18 26C21 27 23 26 24 29C25 26 27 27 30 26Z" />
              <path d="M36 34C34 31 32 31 30 33C28 31 26 31 24 34C27 35 29 34 30 37C31 34 33 35 36 34Z" />
            </svg>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-brand-700">
            4.2 How We Measure Progress
          </span>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-[42px]">
            How We Measure Progress
          </h2>

          <p className="mx-auto max-w-xl text-base text-neutral-600 sm:text-lg">
            Our work focuses on the different stages of a child&apos;s
            development:
          </p>
        </div>

        {/* Process Flow Grid: 2 Rows of 3 Stages with Connected Dashed Curves */}
        <div className="space-y-12 sm:space-y-16">
          {/* Row 1: Stages 01 to 03 */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {developmentalStages.slice(0, 3).map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Curved Dashed Connector to Next Step on Desktop */}
                  {stage.curveType === "down" && (
                    <div className="pointer-events-none absolute left-[58%] top-11 hidden w-[84%] -translate-y-1/2 md:block">
                      <svg
                        viewBox="0 0 100 40"
                        fill="none"
                        className="h-10 w-full overflow-visible"
                      >
                        <path
                          d="M 5 8 Q 50 36 95 8"
                          stroke="#27272A"
                          strokeWidth="2.2"
                          strokeDasharray="5 5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}

                  {stage.curveType === "up" && (
                    <div className="pointer-events-none absolute left-[58%] top-11 hidden w-[84%] -translate-y-1/2 md:block">
                      <svg
                        viewBox="0 0 100 40"
                        fill="none"
                        className="h-10 w-full overflow-visible"
                      >
                        <path
                          d="M 5 32 Q 50 4 95 32"
                          stroke="#27272A"
                          strokeWidth="2.2"
                          strokeDasharray="5 5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Circular Step Badge with Outer Dashed Ring & Number Indicator */}
                  <div className="relative mb-5 flex justify-center">
                    {/* Floating Step Number */}
                    <span className="absolute -top-1 left-1 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-extrabold text-neutral-800 shadow-sm transition-transform group-hover:scale-110">
                      {stage.step}
                    </span>

                    {/* Outer Dashed Ring */}
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[#D6CCC2] p-2 transition-all duration-300 group-hover:border-brand-400 sm:h-28 sm:w-28">
                      {/* Inner Circular Card */}
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:bg-brand-50 group-hover:shadow-md">
                        <Icon className="h-7 w-7 text-brand-700 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8" />
                      </div>
                    </div>
                  </div>

                  {/* Step Info: Stage pill, Title & Description */}
                  <div className="space-y-1.5 px-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-700">
                      {stage.stage}
                    </span>
                    <h3 className="font-serif text-lg font-bold leading-snug text-neutral-900 transition-colors group-hover:text-brand-700">
                      {stage.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-600 sm:text-[13px]">
                      {stage.description}
                    </p>
                  </div>

                  {/* Mobile Vertical Connector */}
                  {idx !== 2 && (
                    <div className="pointer-events-none my-3 flex justify-center md:hidden">
                      <div className="h-6 w-0.5 border-l-2 border-dashed border-neutral-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Row 2: Stages 04 to 06 */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {developmentalStages.slice(3, 6).map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Curved Dashed Connector to Next Step on Desktop */}
                  {stage.curveType === "down" && (
                    <div className="pointer-events-none absolute left-[58%] top-11 hidden w-[84%] -translate-y-1/2 md:block">
                      <svg
                        viewBox="0 0 100 40"
                        fill="none"
                        className="h-10 w-full overflow-visible"
                      >
                        <path
                          d="M 5 8 Q 50 36 95 8"
                          stroke="#27272A"
                          strokeWidth="2.2"
                          strokeDasharray="5 5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}

                  {stage.curveType === "up" && (
                    <div className="pointer-events-none absolute left-[58%] top-11 hidden w-[84%] -translate-y-1/2 md:block">
                      <svg
                        viewBox="0 0 100 40"
                        fill="none"
                        className="h-10 w-full overflow-visible"
                      >
                        <path
                          d="M 5 32 Q 50 4 95 32"
                          stroke="#27272A"
                          strokeWidth="2.2"
                          strokeDasharray="5 5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Circular Step Badge with Outer Dashed Ring & Number Indicator */}
                  <div className="relative mb-5 flex justify-center">
                    {/* Floating Step Number */}
                    <span className="absolute -top-1 left-1 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-extrabold text-neutral-800 shadow-sm transition-transform group-hover:scale-110">
                      {stage.step}
                    </span>

                    {/* Outer Dashed Ring */}
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[#D6CCC2] p-2 transition-all duration-300 group-hover:border-brand-400 sm:h-28 sm:w-28">
                      {/* Inner Circular Card */}
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:bg-brand-50 group-hover:shadow-md">
                        <Icon className="h-7 w-7 text-brand-700 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8" />
                      </div>
                    </div>
                  </div>

                  {/* Step Info: Stage pill, Title & Description */}
                  <div className="space-y-1.5 px-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-700">
                      {stage.stage}
                    </span>
                    <h3 className="font-serif text-lg font-bold leading-snug text-neutral-900 transition-colors group-hover:text-brand-700">
                      {stage.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-600 sm:text-[13px]">
                      {stage.description}
                    </p>
                  </div>

                  {/* Mobile Vertical Connector */}
                  {idx !== 2 && (
                    <div className="pointer-events-none my-3 flex justify-center md:hidden">
                      <div className="h-6 w-0.5 border-l-2 border-dashed border-neutral-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Concluding Note from Google Doc */}
        <div className="border-t border-neutral-200/80 pt-6">
          <div className="mx-auto flex max-w-2xl items-center justify-center gap-2.5 text-center text-sm text-neutral-600 sm:text-base">
            <p className="text-center italic">
              As our programmes expand, we aim to strengthen the way we document
              and report these outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
