"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Award,
  FileCheck,
  Lock,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

export default function TransparencyCommitment() {
  const commitments = [
    {
      title: "Public Charitable Exclusivity",
      desc: "All foundation funds, assets, and donations are dedicated exclusively to non-profit child educational advancement under Indian trust law.",
      icon: Award,
    },
    {
      title: "Strict Minor Safeguarding",
      desc: "Beneficiary case studies and visuals are published solely with verified legal guardian consent and adherence to child rights frameworks.",
      icon: ShieldAlert,
    },
    {
      title: "Zero Data Commercialization",
      desc: "We will never sell, rent, trade, or monetize donor details, phone numbers, or volunteer records to commercial brokers or advertisers.",
      icon: Lock,
    },
    {
      title: "Open Financial Verification",
      desc: "Audited balance sheets, registration renewals, and statutory returns are open for inspection by verified donors and CSR committees.",
      icon: FileCheck,
    },
  ];

  return (
    <section
      id="our-commitment"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-3xl border border-[#EDE5DA] bg-[#FAF7F2] p-8 shadow-card sm:p-12 lg:p-16">
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/80">
            <HeartHandshake className="h-3.5 w-3.5 text-brand-700" />
            Governance Charter
          </span>

          {/* Heading from Google Doc */}
          <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl lg:text-[42px]">
            Our Commitment
          </h2>

          {/* Verbatim Supporting Copy from Google Doc */}
          <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
            We strive to maintain responsible processes and provide appropriate
            information about our programmes, operations, and impact.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="relative z-10 mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="shadow-2xs backdrop-blur-xs flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white/95 p-6"
              >
                <div className="space-y-3">
                  <div className="shadow-2xs flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Contact Bar verbatim CTA */}
        <div className="relative z-10 mt-10 flex flex-col items-center justify-between gap-6 border-t border-neutral-200/80 pt-8 sm:flex-row">
          <div>
            <h4 className="font-serif text-base font-bold text-neutral-900">
              Have Questions or Need Additional Verification?
            </h4>
            <p className="text-xs text-neutral-600">
              Our administration and governance desk is at your service.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-800"
            >
              <span>Contact Us for More Information</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:bg-neutral-50"
            >
              <span>Privacy Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
