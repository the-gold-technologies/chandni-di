"use client";

import React, { useState } from "react";
import {
  PieChart,
  ShieldCheck,
  FileCheck,
  TrendingUp,
  Download,
  Lock,
  CheckCircle2,
  ExternalLink,
  Mail,
  X,
} from "lucide-react";

export default function TransparencyFundAllocation() {
  const [activeFilingModal, setActiveFilingModal] = useState<string | null>(
    null
  );

  const allocations = [
    {
      category: "Direct Educational Sponsorships (School & College Fees)",
      percentage: 65,
      color: "bg-brand-700",
      textColor: "text-brand-700",
      desc: "Formal private school admissions, government school bridge enrollments, university degree semesters, textbooks, and exam registrations.",
    },
    {
      category: "Community Remedial Centers, Tutoring & Nutrition",
      percentage: 23,
      color: "bg-amber-600",
      textColor: "text-amber-700",
      desc: "Daily remedial teaching faculty, teaching learning materials, clean classroom spaces, psychological counseling, and mid-day nutritional snacks.",
    },
    {
      category: "Field Surveys, Street Identification & Family Outreach",
      percentage: 7,
      color: "bg-emerald-600",
      textColor: "text-emerald-700",
      desc: "Mobilization teams visiting railway stations, traffic intersections, and slums to counsel parents and rescue children from street labour.",
    },
    {
      category: "Administration, Audit & Statutory Compliance",
      percentage: 5,
      color: "bg-neutral-500",
      textColor: "text-neutral-700",
      desc: "Independent Chartered Accountant audits, legal filings, Form 10BD processing, website security, and institutional governance.",
    },
  ];

  return (
    <section
      id="fund-utilization"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-card sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Fund Utilization Breakdown (7 Cols) */}
          <div className="space-y-6 lg:col-span-7">
            <div>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-200/70">
                Ethical Fund Deployment
              </span>
              <h2 className="mt-2 font-serif text-2xl font-extrabold text-neutral-900 sm:text-3xl lg:text-4xl">
                How Your Donation is Spent
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                We believe in extreme financial efficiency. Over{" "}
                <strong>88%</strong> of all incoming funds are directly deployed
                on classrooms, school fees, tutoring faculty, books, and child
                nutrition.
              </p>
            </div>

            {/* Allocation Bars */}
            <div className="space-y-5 pt-2">
              {allocations.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold sm:text-sm">
                    <span className="text-neutral-900">{item.category}</span>
                    <span className={`text-base font-black ${item.textColor}`}>
                      {item.percentage}%
                    </span>
                  </div>

                  <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>

                  <p className="text-[11px] leading-relaxed text-neutral-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs text-emerald-950">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" />
              <span>
                <strong>Zero Commercial Intermediaries:</strong> 100% of online
                donations are routed directly into the Chandni Di Foundation
                statutory bank account.
              </span>
            </div>
          </div>

          {/* Right Column: Audited Statements & CA Filings (5 Cols) */}
          <div className="space-y-6 rounded-3xl border border-neutral-200/80 bg-[#FAF7F2] p-6 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                  Statutory Accounting
                </span>
                <span className="shadow-2xs rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold text-neutral-700">
                  CA Certified
                </span>
              </div>
              <h3 className="mt-1 font-serif text-xl font-bold text-neutral-900">
                Audited Statements &amp; Returns
              </h3>
              <p className="mt-1 text-xs text-neutral-600">
                Accounts are audited annually by certified Chartered Accountants
                in compliance with the Indian Income Tax Act.
              </p>
            </div>

            <div className="space-y-3">
              {/* Item 1: FY 2025-26 Financial Audit */}
              <div className="shadow-2xs flex items-center justify-between gap-3 rounded-2xl border border-neutral-200/90 bg-white p-4">
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">
                    FY 2025–26 Financial Audit Report
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    Audited balance sheet &amp; income-expenditure statement
                  </p>
                </div>
                <button
                  onClick={() => setActiveFilingModal("audit-report")}
                  className="shrink-0 cursor-pointer rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-800 hover:bg-neutral-100"
                >
                  Verify
                </button>
              </div>

              {/* Item 2: Form 10BD Statement */}
              <div className="shadow-2xs flex items-center justify-between gap-3 rounded-2xl border border-neutral-200/90 bg-white p-4">
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">
                    Form 10BD Annual Donor Statement
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    Statutory filing with CBDT for Section 80G credits
                  </p>
                </div>
                <button
                  onClick={() => setActiveFilingModal("form-10bd")}
                  className="shrink-0 cursor-pointer rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-800 hover:bg-neutral-100"
                >
                  Verify
                </button>
              </div>

              {/* Item 3: Banking & Payment Security */}
              <div className="shadow-2xs flex items-center justify-between gap-3 rounded-2xl border border-neutral-200/90 bg-white p-4">
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">
                    PCI-DSS Level 1 Payment Gateway
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    Encrypted UPI / Net Banking with zero credential storage
                  </p>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Lock className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>

            <div className="border-t border-neutral-200/70 pt-4">
              <a
                href="mailto:contact@chandnidi.org?subject=Financial%20Audit%20Report%20Request"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-800"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Request Financial Audit Package</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Audit & Filing Verification Modal */}
      {activeFilingModal && (
        <div className="backdrop-blur-xs fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="animate-in fade-in zoom-in-95 relative w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl duration-200 sm:p-8">
            <button
              onClick={() => setActiveFilingModal(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                    Statutory Verification
                  </span>
                  <h3 className="font-serif text-lg font-bold text-neutral-900">
                    {activeFilingModal === "audit-report"
                      ? "Financial Audit Statements"
                      : "Form 10BD Statement Filing"}
                  </h3>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                {activeFilingModal === "audit-report"
                  ? "Our financial books are independently audited by qualified Chartered Accountants in accordance with the Standards on Auditing issued by ICAI. Full schedules are accessible to verified institutional donors and CSR audit committees."
                  : "Form 10BD is filed annually by May 31 with the Income Tax Department for every donor who provides a valid PAN. Once filed, donations automatically reflect in your Annual Information Statement (AIS) and Form 26AS for effortless tax filing."}
              </p>

              <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:justify-end">
                <a
                  href={`mailto:contact@chandnidi.org?subject=Verification%20Inquiry%20-%20${activeFilingModal}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-800"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Contact Audit Desk</span>
                </a>
                <button
                  onClick={() => setActiveFilingModal(null)}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
