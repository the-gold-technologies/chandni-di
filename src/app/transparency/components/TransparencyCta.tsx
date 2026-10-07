"use client";

import React from "react";
import Link from "next/link";
import { Heart, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export default function TransparencyCta() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border-2 border-brand-200/90 bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#F5EFE6] p-8 text-center shadow-card sm:p-12 lg:p-16">
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-amber-100/50 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-2xl space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/80">
            <Sparkles className="h-3.5 w-3.5 text-brand-700" />
            Verified Non-Profit Impact
          </span>

          <h2 className="font-serif text-3xl font-extrabold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Ready to Transform a Child&apos;s Life?
          </h2>

          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            Every donation directly funds classroom instruction, uniform kits,
            and nutritional meals. Receive an instant{" "}
            <strong>Section 80G digital receipt</strong> with automatic CBDT
            Form 10BD filing.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <Link
              href="/get-involved#donate"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-brand-800 hover:shadow-lg sm:w-auto"
            >
              <Heart className="h-4 w-4 fill-white" />
              <span>Donate with 80G Tax Exemption</span>
            </Link>

            <Link
              href="/stories-of-change"
              className="shadow-2xs inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-neutral-700 hover:bg-neutral-50 sm:w-auto"
            >
              <span>See Real Student Journeys</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="pt-2 text-[11px] font-medium text-neutral-500">
            Certified Section 80G &amp; 12A • NGO Darpan Registered • 100% Tax
            Deductible Receipts Issued Automatically
          </p>
        </div>
      </div>
    </section>
  );
}
