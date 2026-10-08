"use client";

import React from "react";
import {
  TrendingUp,
  Percent,
  FileCheck,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function TransparencyStats() {
  const steps = [
    {
      num: 1,
      value: "88%+",
      title: "Direct Program Outlay",
      description:
        "Classroom tuition, textbooks, uniforms, and child nutrition deployed directly.",
      icon: TrendingUp,
    },
    {
      num: 2,
      value: "50%",
      title: "80G Tax Exemption",
      description:
        "Immediate 50% tax deduction on taxable income for Indian contributors.",
      icon: Percent,
    },
    {
      num: 3,
      value: "100%",
      title: "CBDT Form 10BD",
      description:
        "Official annual tax filing reflected seamlessly in your 26AS & AIS.",
      icon: FileCheck,
    },
    {
      num: 4,
      value: "500+",
      title: "Mainstreamed Scholars",
      description:
        "Children transitioned from street labour into accredited formal schools.",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* ── LEFT COLUMN: Eyebrow, Serif Title, Copy, Action Button ── */}
        <div className="space-y-5 lg:col-span-4 xl:col-span-4">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-200">
              Accountability in Action
            </span>
          </div>

          <h2 className="font-serif text-3xl font-extrabold leading-[1.18] tracking-tight text-neutral-900 sm:text-4xl lg:text-[38px]">
            Building Trust Through{" "}
            <span className="font-serif italic text-brand-700">
              Verified Impact
            </span>
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-neutral-700 sm:text-base">
            We believe transparency and accountability are essential to
            responsible social impact. Every rupee received is audited by
            independent CAs, statutorily filed, and deployed directly to street
            children&apos;s education.
          </p>

          <div className="pt-2">
            <a
              href="#statutory-documents"
              className="inline-flex transform items-center justify-center gap-2.5 rounded-full bg-brand-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-xl hover:shadow-brand-700/25 sm:text-sm"
            >
              <span>EXPLORE DOCUMENTS</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Connected 4-Step Horizontal Sequence (from Reference Layout) ── */}
        <div className="relative lg:col-span-8 xl:col-span-8">
          {/* Dotted Connecting Horizontal Line between Circles (Desktop) */}
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden border-t-2 border-dotted border-neutral-300 lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group relative z-10 flex flex-col items-center text-center"
                >
                  {/* Circular Icon Container */}
                  <div className="shadow-2xs sm:h-22 sm:w-22 relative flex h-20 w-20 items-center justify-center rounded-full border border-[#EAE2D5] bg-[#FAF5EE] text-brand-700 transition-transform duration-300 group-hover:scale-105">
                    <Icon
                      className="h-7 w-7 text-brand-700"
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Step Number */}
                  <span className="mt-3 font-serif text-sm font-bold text-neutral-900">
                    {step.num}
                  </span>

                  {/* Step Title */}
                  <h3 className="mt-2 font-serif text-base font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                    {step.title}
                  </h3>

                  {/* Stat Highlight Pill */}
                  <span className="mt-1 inline-block rounded-full bg-brand-50 px-2.5 py-0.5 font-mono text-[11px] font-bold text-brand-700 ring-1 ring-brand-200/60">
                    {step.value}
                  </span>

                  {/* Step Description */}
                  <p className="mt-2 max-w-[200px] text-xs leading-relaxed text-neutral-600 sm:text-[13px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
