"use client";

import React from "react";
import Link from "next/link";
import { Building2, GraduationCap, ArrowRight, ShieldCheck } from "lucide-react";

export default function PartnerSection() {
  const csrBadges = [
    { label: "MCA Registered", desc: "Govt of India" },
    { label: "80G Tax Exemption", desc: "50% Tax Relief" },
    { label: "12A Certified", desc: "Income Tax Act" },
    { label: "CSR-1 Registered", desc: "Eligible for CSR" },
  ];

  return (
    <section id="partner" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl space-y-3 text-center sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200/80 bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-700" />
            7.3 & 7.4 Partnerships
          </span>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[40px]">
            Partner With Us & Create Lasting Impact
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            We welcome collaborations with companies, schools, universities, and
            community leaders who share our commitment to children’s education.
          </p>
        </div>

        {/* 2 Showcase Cards: CSR & Institutional Collaborations */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* 7.4 Corporate CSR Box */}
          <div className="shadow-xs flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-white p-7 sm:p-8">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
                  7.4 Corporate CSR
                </span>
                <Building2 className="h-6 w-6 text-brand-700" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900">
                Create Meaningful Impact Through CSR
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Businesses can support educational infrastructure, digital labs,
                and scholarship funds through structured CSR partnerships with
                complete statutory reporting.
              </p>

              {/* Compliance Pills */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {csrBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="rounded-xl border border-neutral-200/90 bg-[#FAF7F2] p-2.5 text-center"
                  >
                    <p className="text-xs font-bold text-neutral-900">
                      {badge.label}
                    </p>
                    <p className="text-[10px] text-neutral-500">{badge.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-neutral-100 pt-5">
              <Link
                href="/contact?type=CSR+Partnership+(Corporate)"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-brand-800"
              >
                <span>Request CSR Proposal & Presentation</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 7.3 Institutional Partnerships Box */}
          <div className="shadow-xs flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-white p-7 sm:p-8">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#C05621]">
                  7.3 Institutional Partners
                </span>
                <GraduationCap className="h-6 w-6 text-[#C05621]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900">
                Build Opportunities Through Collaboration
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                We partner with schools for admissions, universities for student
                interns, and vocational institutions for skill training to build
                sustainable pathways for our children.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C05621]" />
                  <span>School Admission Alliances & Concession Quotas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C05621]" />
                  <span>University Social Internship & NSS Programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C05621]" />
                  <span>Vocational Institutes & Digital Academy Tie-ups</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-neutral-100 pt-5">
              <Link
                href="/contact?type=General+Enquiry"
                className="group inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#C05621] transition-all hover:bg-[#C05621] hover:text-white"
              >
                <span>Connect for Institutional Alliance</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
