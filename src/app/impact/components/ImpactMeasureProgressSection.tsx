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
    step: "01",
    title: "Entry into formal education",
    icon: <School className="h-6 w-6 text-brand-700" />,
  },
  {
    step: "02",
    title: "Continued school participation",
    icon: <CalendarCheck2 className="h-6 w-6 text-brand-700" />,
  },
  {
    step: "03",
    title: "Academic progress",
    icon: <TrendingUp className="h-6 w-6 text-brand-700" />,
  },
  {
    step: "04",
    title: "Higher education access",
    icon: <GraduationCap className="h-6 w-6 text-brand-700" />,
  },
  {
    step: "05",
    title: "Skill development",
    icon: <Sparkles className="h-6 w-6 text-brand-700" />,
  },
  {
    step: "06",
    title: "Career preparation",
    icon: <Compass className="h-6 w-6 text-brand-700" />,
  },
];

export default function ImpactMeasureProgressSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-10 rounded-[2.5rem] border border-neutral-200/80 bg-white p-8 shadow-card sm:p-12 lg:p-14">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700">
            4.2 How We Measure Progress
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            How We Measure Progress
          </h2>
          <p className="text-base text-neutral-600 sm:text-lg">
            Our work focuses on the different stages of a child&apos;s
            development:
          </p>
        </div>

        {/* 6 Stages Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {developmentalStages.map((stage) => (
            <div
              key={stage.step}
              className="group relative flex items-start gap-4 rounded-2xl border border-neutral-200/80 bg-[#FAF8F5]/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:bg-white hover:shadow-md"
            >
              {/* Step number badge */}
              <div className="shadow-xs flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-200/80 bg-white transition-colors group-hover:border-brand-200 group-hover:bg-brand-50">
                {stage.icon}
              </div>

              <div className="space-y-1 pt-0.5">
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700">
                  Stage {stage.step}
                </span>
                <h3 className="font-serif text-lg font-bold leading-snug text-neutral-900">
                  {stage.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Concluding Note from Google Doc */}
        <div className="flex items-center gap-3 border-t border-neutral-200/80 pt-6 text-sm text-neutral-600 sm:text-base">
          <FileCheck2 className="h-5 w-5 shrink-0 text-brand-700" />
          <p className="italic">
            As our programmes expand, we aim to strengthen the way we document
            and report these outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
