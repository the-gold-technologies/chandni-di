'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText, CheckCircle2, Download, ExternalLink, HelpCircle, Heart } from 'lucide-react';
import { TRANSPARENCY_DOCS } from '@/data/ngoData';
export default function TransparencyPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="hero-radial-bg pt-12 pb-16 sm:py-20 border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
              Trust & Accountability
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 font-serif leading-tight">
              Building Trust Through <span className="text-brand-700">Accountability.</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
              We believe transparency and ethical governance are fundamental to meaningful social change. Every rupee invested in Chandni Di is documented, audited, and channeled directly toward a child’s education.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY REGISTRATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
            Government Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-serif">
            Official Registrations & Certifications
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Verified statutory compliance ensuring your donations are legally protected and 50% tax exempt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRANSPARENCY_DOCS.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-neutral-200/90 shadow-soft hover:shadow-card p-6 sm:p-8 flex flex-col justify-between transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800">
                    <FileText className="w-5 h-5 text-brand-700" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {doc.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 font-serif">
                  {doc.title}
                </h3>

                <div className="text-xs font-semibold text-brand-700">
                  Authority: {doc.issuer}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {doc.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-neutral-700">Status: {doc.status}</span>
                <span className="text-brand-700 font-bold hover:underline cursor-pointer">
                  Request Copy →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FUND UTILIZATION TRANSPARENCY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-700">
                Ethical Allocation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-serif">
                How Your Donation is Spent
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We believe in extreme efficiency. Over 88% of all incoming donor and CSR funds are directly deployed on educational fees, books, tutoring faculty, classroom space, and child nutritional support.
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Direct Educational Sponsorships (School & College Fees)</span>
                    <span className="text-brand-700">65%</span>
                  </div>
                  <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-700 rounded-full w-[65%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Remedial Centres, Tutoring & Mental Health Care</span>
                    <span className="text-brand-700">23%</span>
                  </div>
                  <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gold-600 rounded-full w-[23%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Field Surveys & Community Identification</span>
                    <span className="text-brand-700">7%</span>
                  </div>
                  <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full w-[7%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Administration, Audit & Statutory Reporting</span>
                    <span className="text-brand-700">5%</span>
                  </div>
                  <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-neutral-400 rounded-full w-[5%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-neutral-50 p-6 sm:p-8 rounded-2xl border border-neutral-200 space-y-4">
              <h4 className="text-base font-bold text-neutral-900 font-serif">
                Audited Statements & Filings
              </h4>
              <p className="text-xs text-neutral-600">
                In compliance with Indian NGO regulations, our accounts are audited annually by certified Chartered Accountants.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-white rounded-xl border border-neutral-200 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-neutral-900">FY 2025-26 Financial Audit Statement</div>
                    <div className="text-neutral-500 text-[11px]">Audited balance sheet & income expenditure</div>
                  </div>
                  <button
                    onClick={() => alert('Audited report is made available upon formal request.')}
                    className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 font-semibold text-neutral-800"
                  >
                    View
                  </button>
                </div>

                <div className="p-3 bg-white rounded-xl border border-neutral-200 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-neutral-900">Form 10BD Annual Donor Statement</div>
                    <div className="text-neutral-500 text-[11px]">Filed with Income Tax Department for 80G credit</div>
                  </div>
                  <button
                    onClick={() => alert('Form 10BD is filed annually for all PAN registered donors.')}
                    className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 font-semibold text-neutral-800"
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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
            Common Inquiries
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-serif">
            Transparency & 80G Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          <div className="p-5 bg-white rounded-2xl border border-neutral-200 space-y-2">
            <h4 className="font-bold text-neutral-900 text-sm">
              How does the Section 80G tax benefit work?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Donations to Chandni Di NGO qualify for a 50% tax deduction under Section 80G of the Indian Income Tax Act. For instance, if you donate ₹10,000, your taxable income is reduced by ₹5,000. An official 80G receipt and Form 10BD acknowledgment are provided with every donation.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-neutral-200 space-y-2">
            <h4 className="font-bold text-neutral-900 text-sm">
              Can I visit the learning centre to meet the children?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Yes, absolutely! We encourage donors, sponsors, and prospective volunteers to visit our community learning centres across Delhi-NCR. For child safety and undisturbed study hours, visits are scheduled on predetermined days by appointment.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-neutral-200 space-y-2">
            <h4 className="font-bold text-neutral-900 text-sm">
              Do you accept international donations?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Currently, we accept donations through all Indian payment modes (UPI, Net Banking, Credit/Debit Cards, NEFT/RTGS). For international inquiries or CSR funding, please contact us at contact@chandnidi.org.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-bold text-neutral-900 font-serif">
          Ready to Make a Direct Impact?
        </h2>
        <p className="text-sm text-neutral-600 max-w-xl mx-auto">
          Support a child’s educational journey today. Receive your verified 80G tax exemption receipt instantly.
        </p>
        <Link
          href="/get-involved#donate"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md transition-all"
        >
          <Heart className="w-4 h-4 fill-white" />
          <span>Donate with 80G Tax Exemption</span>
        </Link>
      </section>

    </div>
  );
}
