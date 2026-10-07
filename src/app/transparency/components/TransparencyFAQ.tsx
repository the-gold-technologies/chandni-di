"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export default function TransparencyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does the Section 80G tax exemption benefit work?",
      answer:
        "Donations to Chandni Di Foundation qualify for a 50% tax deduction under Section 80G of the Indian Income Tax Act, 1961. For example, if an Indian taxpayer donates ₹10,000, their taxable income is directly reduced by ₹5,000. An official 80G digital receipt and tax acknowledgement certificate are issued immediately upon donation completion.",
      category: "Tax Exemption",
    },
    {
      question:
        "What is Form 10BD and how does it appear in my AIS / Form 26AS?",
      answer:
        "Under CBDT regulations, all registered NGOs must file Form 10BD annually containing donor PAN numbers. Once Chandni Di Foundation files Form 10BD, your donation automatically reflects in your Annual Information Statement (AIS) and Form 26AS under the Income Tax portal, ensuring seamless pre-filled tax returns.",
      category: "Statutory Reporting",
    },
    {
      question: "Can donors visit the learning centres to meet the children?",
      answer:
        "Yes, absolutely. We actively encourage donors, corporate partners, and volunteers to visit our community learning centres across Delhi-NCR. To preserve quiet classroom learning hours and enforce child protection protocols, visits are scheduled on dedicated open days by prior appointment via contact@chandnidi.org.",
      category: "Centre Visits",
    },
    {
      question:
        "How do you protect children's privacy while maintaining financial transparency?",
      answer:
        "We maintain full statutory financial transparency without ever compromising child safety. In compliance with the POCSO Act and Juvenile Justice rules, student case studies and photographs are published strictly with verified guardian consent. We never disclose residential slum addresses or sensitive personal contact details of minors.",
      category: "Child Protection",
    },
    {
      question:
        "Is Chandni Di Foundation eligible for Corporate CSR under Schedule VII?",
      answer:
        "Yes. Chandni Di Foundation is registered with the Ministry of Corporate Affairs under Form CSR-1. Corporate donations qualify under Section 135, Schedule VII of the Companies Act, 2013 for promoting education, vocational skills, and child welfare.",
      category: "Corporate CSR",
    },
    {
      question: "Do you accept international donations?",
      answer:
        "Currently, our online payment gateway accepts donations through Indian payment instruments (UPI, Net Banking, Indian Credit/Debit Cards). For international wire transfers, CSR partnerships, or FCRA inquiries, please write directly to our administrative desk at contact@chandnidi.org.",
      category: "Payment Methods",
    },
  ];

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="space-y-3 text-center">
        <span className="rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-200/70">
          Clarifications &amp; Guidance
        </span>
        <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
          Transparency &amp; 80G Frequently Asked Questions
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          Find clear, verified answers regarding donor tax deductions, audit
          verification, learning centre visits, and child safeguarding.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5 pt-2">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                isOpen
                  ? "border-brand-300 bg-white shadow-soft"
                  : "border-neutral-200/90 bg-white hover:border-neutral-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left sm:p-6"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isOpen
                        ? "bg-brand-50 text-brand-700"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <span className="font-serif text-base font-bold text-neutral-900 sm:text-lg">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 bg-brand-50 text-brand-700"
                      : "bg-neutral-100 text-neutral-400"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-neutral-100 px-6 pb-6 pt-2 sm:px-7 sm:pb-7">
                  <p className="text-xs leading-relaxed text-neutral-700 sm:text-sm">
                    {faq.answer}
                  </p>
                  {faq.category && (
                    <span className="mt-3 inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                      Topic: {faq.category}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
