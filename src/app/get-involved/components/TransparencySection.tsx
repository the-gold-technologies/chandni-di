"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  Lock,
  ArrowRight,
  ExternalLink,
  Award,
  Download,
} from "lucide-react";

export default function TransparencySection() {
  const documents = [
    {
      title: "NGO Darpan Registration",
      authority: "NITI Aayog, Government of India",
      tag: "Govt. Verified",
      desc: "Official national portal registration ensuring statutory validity and credibility across India.",
    },
    {
      title: "80G Certificate",
      authority: "Income Tax Department of India",
      tag: "50% Tax Exemption",
      desc: "All donations by Indian citizens and corporations qualify for 50% tax deductions.",
    },
    {
      title: "12A Certificate",
      authority: "Income Tax Department of India",
      tag: "Charitable Status",
      desc: "Confirms official non-profit status with 100% charitable allocation of incoming resources.",
    },
    {
      title: "CSR-1 Registration",
      authority: "Ministry of Corporate Affairs",
      tag: "CSR Eligible",
      desc: "Accredited to partner with corporate foundations under Section 135 Schedule VII of the Companies Act.",
    },
    {
      title: "Trust Registration Certificate",
      authority: "Government of NCT of Delhi",
      tag: "Public Trust",
      desc: "Legally constituted and registered public charitable trust governing all educational operations.",
    },
    {
      title: "Annual Reports",
      authority: "Chandni Di Foundation",
      tag: "Programme Outcomes",
      desc: "Comprehensive public reporting of academic milestones, mainstreaming figures, and community reach.",
    },
    {
      title: "Financial Reports",
      authority: "Chartered Accountants Audit",
      tag: "Annual Audit",
      desc: "Third-party audited balance sheets, income-expenditure statements, and compliance filings.",
    },
    {
      title: "Relevant Organisational Documents",
      authority: "Regulatory Authorities",
      tag: "Form 10BD & Policies",
      desc: "Transparent donor acknowledgments, child safeguarding framework, and bylaws available upon request.",
    },
  ];

  return (
    <section id="transparency" className="sm:py-18 lg:py-22 scroll-mt-24 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (Strictly from Google Doc) ── */}
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/90 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-700" />
            Trust &amp; Transparency
          </span>

          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px]">
            Building Trust Through Accountability
          </h2>

          <div className="mx-auto max-w-2xl space-y-2 text-base leading-relaxed text-neutral-600 sm:text-lg">
            <p>
              We believe transparency and accountability are essential to
              responsible social impact.
            </p>
            <p className="text-sm text-neutral-500 sm:text-base">
              We aim to share relevant organisational information and
              documentation so supporters can better understand our work and
              governance.
            </p>
          </div>
        </div>

        {/* ── Documents & Registrations Grid ── */}
        <div className="mb-12">
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
                Documents &amp; Registrations
              </h3>
              <p className="text-xs text-neutral-500 sm:text-sm">
                The following documents are maintained in active compliance:
              </p>
            </div>
            <Link
              href="/transparency"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 transition-colors hover:text-brand-800 hover:underline sm:text-sm"
            >
              <span>View full governance page</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[11px] font-bold text-neutral-700">
                      {doc.tag}
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                    {doc.title}
                  </h4>

                  <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    {doc.authority}
                  </p>

                  <p className="text-xs leading-relaxed text-neutral-600">
                    {doc.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3 text-[11px]">
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    Available on request
                  </span>
                  <Link
                    href="/contact"
                    className="font-bold text-brand-700 hover:underline"
                  >
                    Request →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Our Commitment Callout Box & CTA (Google Doc Specification) ── */}
        <div className="relative overflow-hidden rounded-3xl border border-[#EDE5DA] bg-[#FAF7F2] p-6 shadow-soft sm:p-10 lg:p-12">
          {/* Subtle Decorative Badge */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-4 lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
                <Award className="h-3.5 w-3.5 text-brand-700" />
                Ethical Governance
              </div>

              <h3 className="font-serif text-2xl font-extrabold text-neutral-900 sm:text-3xl lg:text-4xl">
                Our Commitment to Donors &amp; Communities
              </h3>

              <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
                We strive to maintain responsible processes and provide
                appropriate information about our programmes, operations, and
                impact. Every rupee invested in Chandni Di is directed towards
                giving children the education, safety, and skills they deserve.
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <span>Annual CA Audits</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <span>80G Tax Exemption Receipts</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                  <span>Child Protection Policies</span>
                </div>
              </div>
            </div>

            {/* Action Buttons Column */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-start lg:col-span-4 lg:flex-col lg:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition-all hover:bg-brand-800 hover:shadow-lg"
              >
                <span>Contact Us for More Information</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/transparency"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-center text-sm font-bold text-neutral-800 shadow-sm transition-all hover:border-brand-700 hover:text-brand-700"
              >
                <span>Detailed Audited Filings</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
