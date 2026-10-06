"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  Download,
  ExternalLink,
  HelpCircle,
  Heart,
} from "lucide-react";
import { TRANSPARENCY_DOCS } from "@/data/ngoData";
export default function TransparencyPage() {
  return (
    <div className="space-y-20 pb-20 sm:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="hero-radial-bg border-b border-neutral-200/60 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
              Trust & Accountability
            </span>
            <h1 className="font-serif text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Building Trust Through{" "}
              <span className="text-brand-700">Accountability</span>
            </h1>
            <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">
              We believe transparency and accountability are essential to
              responsible social impact. We aim to share relevant organisational
              information and documentation so supporters can better understand
              our work and governance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY REGISTRATIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            Documents &amp; Registrations
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Documents &amp; Registrations
          </h2>
          <p className="text-sm text-neutral-600 sm:text-base">
            The following can be included, subject to verification and
            availability:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TRANSPARENCY_DOCS.map((doc, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-soft transition-all hover:shadow-card sm:p-8"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800">
                    <FileText className="h-5 w-5 text-brand-700" />
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                    {doc.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-neutral-900">
                  {doc.title}
                </h3>

                <div className="text-xs font-semibold text-brand-700">
                  Authority: {doc.issuer}
                </div>

                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  {doc.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs">
                <span className="font-semibold text-neutral-700">
                  Status: {doc.status}
                </span>
                <span className="cursor-pointer font-bold text-brand-700 hover:underline">
                  Request Copy →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FUND UTILIZATION TRANSPARENCY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-card sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-700">
                Ethical Allocation
              </span>
              <h3 className="font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
                How Your Donation is Spent
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                We believe in extreme efficiency. Over 88% of all incoming donor
                and CSR funds are directly deployed on educational fees, books,
                tutoring faculty, classroom space, and child nutritional
                support.
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="mb-1 flex justify-between text-xs font-bold">
                    <span>
                      Direct Educational Sponsorships (School & College Fees)
                    </span>
                    <span className="text-brand-700">65%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[65%] rounded-full bg-brand-700" />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-xs font-bold">
                    <span>Remedial Centres, Tutoring & Mental Health Care</span>
                    <span className="text-brand-700">23%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[23%] rounded-full bg-gold-600" />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-xs font-bold">
                    <span>Field Surveys & Community Identification</span>
                    <span className="text-brand-700">7%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[7%] rounded-full bg-emerald-600" />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-xs font-bold">
                    <span>Administration, Audit & Statutory Reporting</span>
                    <span className="text-brand-700">5%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[5%] rounded-full bg-neutral-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 lg:col-span-6">
              <h4 className="font-serif text-base font-bold text-neutral-900">
                Audited Statements & Filings
              </h4>
              <p className="text-xs text-neutral-600">
                In compliance with Indian NGO regulations, our accounts are
                audited annually by certified Chartered Accountants.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-3 text-xs">
                  <div>
                    <div className="font-bold text-neutral-900">
                      FY 2025-26 Financial Audit Statement
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      Audited balance sheet & income expenditure
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      alert(
                        "Audited report is made available upon formal request."
                      )
                    }
                    className="rounded-lg bg-neutral-100 px-3 py-1.5 font-semibold text-neutral-800 hover:bg-neutral-200"
                  >
                    View
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-3 text-xs">
                  <div>
                    <div className="font-bold text-neutral-900">
                      Form 10BD Annual Donor Statement
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      Filed with Income Tax Department for 80G credit
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      alert(
                        "Form 10BD is filed annually for all PAN registered donors."
                      )
                    }
                    className="rounded-lg bg-neutral-100 px-3 py-1.5 font-semibold text-neutral-800 hover:bg-neutral-200"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRANSPARENCY FAQ */}
      <section className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-center">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            Common Inquiries
          </span>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
            Transparency & 80G Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-2 rounded-2xl border border-neutral-200 bg-white p-5">
            <h4 className="text-sm font-bold text-neutral-900">
              How does the Section 80G tax benefit work?
            </h4>
            <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
              Donations to Chandni Di NGO qualify for a 50% tax deduction under
              Section 80G of the Indian Income Tax Act. For instance, if you
              donate ₹10,000, your taxable income is reduced by ₹5,000. An
              official 80G receipt and Form 10BD acknowledgment are provided
              with every donation.
            </p>
          </div>

          <div className="space-y-2 rounded-2xl border border-neutral-200 bg-white p-5">
            <h4 className="text-sm font-bold text-neutral-900">
              Can I visit the learning centre to meet the children?
            </h4>
            <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
              Yes, absolutely! We encourage donors, sponsors, and prospective
              volunteers to visit our community learning centres across
              Delhi-NCR. For child safety and undisturbed study hours, visits
              are scheduled on predetermined days by appointment.
            </p>
          </div>

          <div className="space-y-2 rounded-2xl border border-neutral-200 bg-white p-5">
            <h4 className="text-sm font-bold text-neutral-900">
              Do you accept international donations?
            </h4>
            <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
              Currently, we accept donations through all Indian payment modes
              (UPI, Net Banking, Credit/Debit Cards, NEFT/RTGS). For
              international inquiries or CSR funding, please contact us at
              contact@chandnidi.org.
            </p>
          </div>
        </div>
      </section>

      {/* 5. OUR COMMITMENT (Google Doc Requirement) */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#EDE5DA] bg-[#FAF7F2] p-8 text-center shadow-soft sm:p-12">
          <div className="mx-auto max-w-2xl space-y-4">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
              Responsible Governance
            </span>
            <h3 className="font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              Our Commitment
            </h3>
            <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
              We strive to maintain responsible processes and provide
              appropriate information about our programmes, operations, and
              impact.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-800"
              >
                <span>Contact Us for More Information</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="mx-auto max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-neutral-900">
          Ready to Make a Direct Impact?
        </h2>
        <p className="mx-auto max-w-xl text-sm text-neutral-600">
          Support a child’s educational journey today. Receive your verified 80G
          tax exemption receipt instantly.
        </p>
        <Link
          href="/get-involved#donate"
          className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-800"
        >
          <Heart className="h-4 w-4 fill-white" />
          <span>Donate with 80G Tax Exemption</span>
        </Link>
      </section>
    </div>
  );
}
