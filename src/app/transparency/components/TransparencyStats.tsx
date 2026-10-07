"use client";

import React from "react";
import {
  TrendingUp,
  Percent,
  FileCheck,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function TransparencyStats() {
  const metrics = [
    {
      value: "88%+",
      label: "Direct Program Allocation",
      desc: "Of all incoming donations directly deployed on tuition, school fees, learning materials, and nutrition.",
      icon: TrendingUp,
      status: "Audited Program Outlay",
    },
    {
      value: "50%",
      label: "Section 80G Tax Exemption",
      desc: "Immediate tax deduction for all Indian citizens and corporate contributors under Section 80G(5)(vi).",
      icon: Percent,
      status: "Income Tax Certified",
    },
    {
      value: "100%",
      label: "Form 10BD CBDT Filings",
      desc: "Every PAN-linked contribution is filed annually with the CBDT for seamless 26AS / AIS tax credit.",
      icon: FileCheck,
      status: "CBDT Verified Filing",
    },
    {
      value: "500+",
      label: "Mainstreamed Scholars",
      desc: "Slum and street children successfully enrolled in formal accredited schools and tracked year-on-year.",
      icon: Users,
      status: "Verified Child Transitions",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Expansive Unified Horizontal Ribbon — Replaces stiff isolated boxes with wide, cohesive architecture */}
      <div className="shadow-xs overflow-hidden rounded-3xl border border-[#EDE5DA] bg-[#FAF7F2]/75">
        {/* Subtle Header Banner */}
        <div className="flex flex-col items-start justify-between gap-2 border-b border-neutral-200/70 px-6 py-4 sm:flex-row sm:items-center sm:px-10 lg:px-12">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-700">
              Accountability at Scale • Key Governance Metrics
            </span>
          </div>
          <span className="text-[11px] font-semibold text-neutral-500">
            Updated for Financial Year 2025–26 • CA Audited
          </span>
        </div>

        {/* Expansive Wide Metrics Grid with Seamless Dividers */}
        <div className="grid grid-cols-1 divide-y divide-neutral-200/80 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between p-6 transition-colors hover:bg-white/80 sm:p-8 lg:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 transition-colors group-hover:text-brand-700 sm:text-4xl lg:text-[40px]">
                      {metric.value}
                    </span>
                    <div className="shadow-2xs flex h-9 w-9 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-neutral-200/80">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-3 font-serif text-base font-bold text-neutral-900">
                    {metric.label}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                    {metric.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 border-t border-neutral-200/60 pt-3 text-[11px] font-semibold text-emerald-700">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{metric.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
