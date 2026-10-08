"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

export default function TransparencyCommitment() {
  return (
    <section
      id="our-commitment"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      {/* ── High-Impact Proper CTA Banner ── */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EDE5DA] bg-[#FAF7F2] p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.03)] sm:p-12 lg:p-16">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl space-y-6">
          {/* Eyebrow matching site pattern */}
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-200">
              <HeartHandshake className="h-3.5 w-3.5 text-brand-700" />
              Our Commitment
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-serif text-3xl font-extrabold leading-[1.18] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-[46px]">
            Dedicated to Responsible Governance &amp;{" "}
            <span className="font-serif italic text-brand-700">
              Lasting Impact
            </span>
          </h2>

          {/* Verbatim Supporting Copy from Google Doc */}
          <p className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-neutral-700 sm:text-lg lg:text-xl">
            We strive to maintain responsible processes and provide appropriate
            information about our programmes, operations, and impact.
          </p>

          {/* Primary CTA Button verbatim from Google Doc */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Link
              href="/contact"
              className="inline-flex transform items-center justify-center gap-3 rounded-full bg-brand-700 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-xl hover:shadow-brand-700/25 sm:text-sm"
            >
              <span>Contact Us for More Information</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust Reassurance Footnote */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 text-xs font-semibold text-neutral-600 sm:gap-6">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Section 80G &amp; 12A Certified</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Independent CA Audited</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>NITI Aayog NGO Darpan Verified</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
