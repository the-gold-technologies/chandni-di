"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  FileCheck2,
} from "lucide-react";

export default function PartnerSection() {
  const csrBadges = [
    { label: "MCA Registered", sub: "Govt. of India" },
    { label: "80G Tax Exemption", sub: "50% Tax Relief" },
    { label: "12A Certified", sub: "Income Tax Act" },
    { label: "CSR-1 Registered", sub: "Eligible for CSR" },
  ];

  return (
    <section id="partner" className="scroll-mt-24 py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (Google Doc 7.3 & 7.4) ── */}
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/90 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
            <Sparkles className="h-3.5 w-3.5 text-brand-700" />
            7.3 &amp; 7.4 Strategic Partnerships
          </span>

          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px]">
            Partner With Us &amp; Create Lasting Impact
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            We welcome partnerships with individuals, organisations, educational
            institutions, and businesses that share our commitment to
            children&apos;s education and development.
          </p>
        </div>

        {/* ── Main Layout: Visual Showcase (Left) + Partnership Pathways (Right) ── */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ── LEFT COLUMN: Rich Photo Showcase with Verified Compliance Overlay ── */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
            {/* Featured Partnership Photography Card */}
            <div className="group relative flex h-[340px] w-full flex-col justify-end overflow-hidden rounded-3xl border border-neutral-200/90 shadow-md sm:h-[400px] lg:h-full lg:min-h-[460px]">
              <Image
                src="/images/corporate_csr_partnership.jpg"
                alt="Corporate CSR partners and educators mentoring children in classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority={false}
              />

              {/* Gradient Backdrop for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

              {/* Top Floating Badge */}
              <div className="absolute left-5 top-5 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Verified NGO Partner
                </span>
              </div>

              {/* Bottom Overlay Content */}
              <div className="relative z-10 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                  Collaborative Impact
                </p>
                <h3 className="mt-1 font-serif text-xl font-bold text-white sm:text-2xl">
                  Turning Corporate Resources into Children&apos;s Futures
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-200 sm:text-sm">
                  From digital labs to classroom sponsorships, our institutional
                  alliances ensure direct, transparent, and sustainable change.
                </p>

                {/* Statutory Quick Tags */}
                <div className="mt-4 flex flex-wrap items-center gap-2 pt-2">
                  <span className="rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-xs">
                    ✓ 80G Tax Exemption
                  </span>
                  <span className="rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-xs">
                    ✓ CSR-1 Compliant
                  </span>
                  <span className="rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-xs">
                    ✓ Annual Audited Impact
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Structured CSR & Institutional Cards ── */}
          <div className="flex flex-col space-y-6 lg:col-span-7">
            {/* ── Card 1: 7.4 CSR Partnership ── */}
            <div className="group flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:border-brand-300 hover:shadow-md sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
                    7.4 CSR Partnership
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-bold text-neutral-900 sm:text-[26px]">
                  Create Meaningful Impact Through CSR
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                  Businesses can support educational and developmental
                  initiatives through structured CSR partnerships. We work with
                  organisations committed to sustainable educational
                  opportunities for children from underserved communities.
                </p>

                {/* Compliance Badges Grid */}
                <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {csrBadges.map((badge) => (
                    <div
                      key={badge.label}
                      className="rounded-xl border border-neutral-200/80 bg-[#FAF7F2] p-2.5 text-center transition-colors group-hover:border-neutral-300"
                    >
                      <p className="text-xs font-bold text-neutral-900">
                        {badge.label}
                      </p>
                      <p className="mt-0.5 text-[10px] text-neutral-500">
                        {badge.sub}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Deliverables */}
                <div className="mt-5 space-y-2 border-t border-neutral-100 pt-4 text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-700" />
                    <span>Quarterly audited utilization &amp; photographic impact reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-700" />
                    <span>Employee engagement days &amp; volunteer mentorship drives</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-7 pt-2">
                <Link
                  href="/contact?type=CSR+Partnership+(Corporate)"
                  className="group/btn inline-flex items-center gap-2.5 rounded-full bg-brand-700 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-brand-800 hover:shadow-md"
                >
                  <span>Contact us for CSR Partnership</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* ── Card 2: 7.3 Institutional Partnerships ── */}
            <div className="group flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-md sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#C05621]">
                    7.3 Partner With Us
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-50 text-[#C05621] transition-colors group-hover:bg-[#C05621] group-hover:text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-bold text-neutral-900 sm:text-[26px]">
                  Build Opportunities Through Collaboration
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                  We welcome partnerships with educational institutions,
                  universities, and vocational training centers. Partnerships
                  can support programme delivery, learning opportunities, skill
                  development, and long-term educational assistance.
                </p>

                {/* Key Alliance Streams */}
                <div className="mt-6 space-y-2.5 text-xs text-neutral-600">
                  <div className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#C05621]" />
                    <span className="font-medium text-neutral-900">School Admission Alliances:</span>
                    <span>Concession quotas &amp; mainstream enrollment pathways</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#C05621]" />
                    <span className="font-medium text-neutral-900">University Student Internships:</span>
                    <span>Academic tutoring &amp; NSS community programmes</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#C05621]" />
                    <span className="font-medium text-neutral-900">Vocational &amp; Tech Academies:</span>
                    <span>Practical coding labs, hardware training &amp; career guidance</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-7 pt-2">
                <Link
                  href="/contact?type=General+Enquiry"
                  className="group/btn inline-flex items-center gap-2.5 rounded-full border border-amber-300 bg-amber-50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#C05621] transition-all hover:bg-[#C05621] hover:text-white hover:shadow-md"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
