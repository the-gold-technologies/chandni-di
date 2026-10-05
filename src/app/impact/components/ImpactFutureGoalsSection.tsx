"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Users, Briefcase, ArrowRight } from "lucide-react";

const goals = [
  {
    target: "10",
    goal: "Centres across Delhi-NCR",
    icon: <MapPin className="h-6 w-6 text-brand-700" />,
  },
  {
    target: "3,000",
    goal: "Children connected through our work",
    icon: <Users className="h-6 w-6 text-brand-700" />,
  },
  {
    target: "1,000",
    goal: "Students skilled and employed",
    icon: <Briefcase className="h-6 w-6 text-brand-700" />,
  },
];

export default function ImpactFutureGoalsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EDE5DA] bg-[#FAF8F5] p-8 shadow-sm sm:p-12 lg:p-16">
        {/* Left decorative edge accent tab */}
        <div
          className="absolute -left-1 top-1/2 h-20 w-3.5 -translate-y-1/2 rounded-r-lg bg-[#EBDDC8]"
          aria-hidden="true"
        />

        <div className="relative z-10 space-y-10">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="shadow-xs inline-flex items-center gap-1.5 rounded-full border border-brand-200/60 bg-brand-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-700" />
              4.3 Our Future Goals
            </span>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Building a Larger Network of Opportunity
            </h2>
            <p className="text-base text-neutral-600 sm:text-lg">
              Over the next three years, we aim to:
            </p>
          </div>

          {/* 3 Target Metric Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {goals.map((item, idx) => (
              <div
                key={idx}
                className="shadow-xs group relative flex flex-col justify-between rounded-2xl border border-[#EDE5DA] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-100 bg-brand-50">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                    Target
                  </span>
                </div>

                <div className="mt-8 space-y-1.5">
                  <div className="font-serif text-4xl font-black text-brand-700 sm:text-5xl">
                    {item.target}
                  </div>
                  <div className="text-sm font-bold leading-snug text-neutral-800 sm:text-base">
                    {item.goal}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vision Statement & CTA */}
          <div className="flex flex-col gap-6 border-t border-[#E5DDD0] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
              Our vision is to expand our reach, support more children through
              education, and create stronger pathways from learning to
              professional opportunities.
            </p>

            <Link
              href="/get-involved"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg"
            >
              <span>Support Our Vision</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
