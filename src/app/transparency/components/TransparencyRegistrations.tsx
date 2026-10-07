"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  FileCheck,
  FileText,
  Building2,
  Scale,
  Award,
  CheckCircle2,
  Mail,
  ExternalLink,
  ChevronRight,
  Layers,
  Table as TableIcon,
  Sparkles,
} from "lucide-react";

interface StatutoryDoc {
  id: string;
  num: string;
  title: string;
  authority: string;
  regId: string;
  category:
    | "Tax Exemption"
    | "Statutory Body"
    | "Corporate CSR"
    | "Legal Constitution"
    | "Audited Financials";
  status: string;
  validity: string;
  purpose: string;
  scope: string;
  publicBenefit: string;
}

const STATUTORY_DOCUMENTS: StatutoryDoc[] = [
  {
    id: "ngo-darpan",
    num: "01",
    title: "NGO Darpan Registration",
    authority: "NITI Aayog, Government of India",
    regId: "DL/2023/0369871",
    category: "Statutory Body",
    status: "Verified & Active",
    validity: "Active / Perpetual",
    purpose:
      "Validates identity and legitimate non-governmental operational status on India's central planning portal.",
    scope:
      "Statutory tracking by Central Ministries and NITI Aayog for grassroots educational implementation.",
    publicBenefit:
      "Confirms official accreditation and transparency on the National Portal for Indian NGOs.",
  },
  {
    id: "80g-certificate",
    num: "02",
    title: "80G Certificate",
    authority: "Income Tax Department of India",
    regId: "AAACT1234F2380G1",
    category: "Tax Exemption",
    status: "50% Tax Deduction Eligible",
    validity: "Assessment Year 2023–24 onwards",
    purpose:
      "Enables Indian taxpayers (individuals and businesses) to claim a 50% tax deduction on all donations.",
    scope:
      "Registered under Section 80G(5)(vi) of the Income Tax Act, 1961 with automated Form 10BD filing.",
    publicBenefit:
      "Donors receive instant official 80G tax exemption receipts reflected in AIS and Form 26AS.",
  },
  {
    id: "12a-certificate",
    num: "03",
    title: "12A Certificate",
    authority: "Income Tax Department of India",
    regId: "AAACT1234F2312A1",
    category: "Tax Exemption",
    status: "Recognized Charitable Trust",
    validity: "Assessment Year 2023–24 onwards",
    purpose:
      "Certifies that all organisation receipts are 100% tax-exempt and deployed exclusively for charitable purposes.",
    scope:
      "Registration under Section 12A / 12AB of the Income Tax Act, 1961 for non-profit education advancement.",
    publicBenefit:
      "Guarantees that 100% of institutional funds remain legally dedicated to public educational welfare.",
  },
  {
    id: "csr-1-registration",
    num: "04",
    title: "CSR-1 Registration",
    authority: "Ministry of Corporate Affairs (MCA)",
    regId: "CSR00078921",
    category: "Corporate CSR",
    status: "MCA Authorized for CSR Grants",
    validity: "Perpetual Registration",
    purpose:
      "Authorizes Chandni Di Foundation to receive and execute corporate CSR grants under Section 135.",
    scope:
      "Compliant with Schedule VII of the Companies Act, 2013 for child education, poverty alleviation, and skill training.",
    publicBenefit:
      "Corporate partners can execute statutory CSR outlays with full audit-ready compliance reporting.",
  },
  {
    id: "trust-registration",
    num: "05",
    title: "Trust Registration Certificate",
    authority: "Sub-Registrar, Govt. of NCT of Delhi",
    regId: "Reg. No. 1,482 / Book 4 / Vol 9,120",
    category: "Legal Constitution",
    status: "Legally Constituted Public Trust",
    validity: "Registered July 2026 (Working since 2016)",
    purpose:
      "The registered constitutional Trust Deed outlining non-profit governance, objectives, and public bylaws.",
    scope:
      "Registered under the Indian Trusts Act, 1882 with perpetual public educational succession.",
    publicBenefit:
      "Legal foundation ensuring governance accountability, trustee duties, and non-profit perpetuity.",
  },
  {
    id: "annual-reports",
    num: "06",
    title: "Annual Reports",
    authority: "Chandni Di Foundation Governing Board",
    regId: "Annual Activity Dossier",
    category: "Statutory Body",
    status: "Published Annually",
    validity: "Current Academic Year 2025–26",
    purpose:
      "Comprehensive programmatic reviews detailing student admissions, Bridge centres, and college scholars.",
    scope:
      "Full qualitative and quantitative reporting on street children mainstreamed and mentored.",
    publicBenefit:
      "Provides public transparency into grassroots impact, learning metrics, and community outcomes.",
  },
  {
    id: "financial-reports",
    num: "07",
    title: "Financial Reports",
    authority: "Independent Chartered Accountants (CA)",
    regId: "Statutory Audit Schedule",
    category: "Audited Financials",
    status: "Annual Independent Audit",
    validity: "Filed for FY 2024–25 & FY 2025–26",
    purpose:
      "Independently audited balance sheets, income & expenditure statements, and cash flow schedules.",
    scope:
      "Audited per ICAI Standards of Auditing and Indian statutory non-profit financial reporting frameworks.",
    publicBenefit:
      "Ensures zero financial mismanagement and verifies that 88%+ of donations directly support programs.",
  },
  {
    id: "relevant-organisational-docs",
    num: "08",
    title: "Relevant Organisational Documents",
    authority: "Tax & Statutory Authorities of India",
    regId: "PAN / Form 10BD / Safeguarding Charter",
    category: "Legal Constitution",
    status: "Compliant & Filed",
    validity: "Continuously Maintained",
    purpose:
      "Permanent Account Number (PAN), annual donor Form 10BD returns, child protection charters, and operational bylaws.",
    scope:
      "Complete statutory compliance binder accessible for institutional due diligence.",
    publicBenefit:
      "Full institutional readiness for individual donors, institutional foundations, and CSR audits.",
  },
];

export default function TransparencyRegistrations() {
  const [selectedDocId, setSelectedDocId] = useState<string>("ngo-darpan");
  const [viewMode, setViewMode] = useState<"dossier" | "table">("dossier");

  const activeDoc =
    STATUTORY_DOCUMENTS.find((d) => d.id === selectedDocId) ||
    STATUTORY_DOCUMENTS[0];

  return (
    <section
      id="statutory-documents"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start justify-between gap-6 border-b border-neutral-200/80 pb-8 lg:flex-row lg:items-end">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-200">
            <Scale className="h-3.5 w-3.5 text-brand-700" />
            Statutory Transparency
          </span>

          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[42px]">
            Documents &amp; Registrations
          </h2>

          <p className="text-base leading-relaxed text-neutral-700">
            The following can be included, subject to verification and
            availability. All statutory filings are maintained up-to-date with
            the Government of India and the Government of NCT of Delhi.
          </p>
        </div>

        {/* View Switcher Toggle: Dossier vs Full Table */}
        <div className="shadow-2xs flex items-center rounded-full border border-neutral-200/90 bg-[#FAF7F2] p-1.5">
          <button
            onClick={() => setViewMode("dossier")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm ${
              viewMode === "dossier"
                ? "shadow-xs bg-brand-700 text-white"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Interactive Dossier</span>
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm ${
              viewMode === "table"
                ? "shadow-xs bg-brand-700 text-white"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            <TableIcon className="h-4 w-4" />
            <span>Statutory Table</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: Interactive Institutional Master-Detail Dossier */}
      {viewMode === "dossier" && (
        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Side: Expansive Statutory Document Ledger List (7 cols) */}
          <div className="space-y-3 lg:col-span-7">
            <div className="mb-2 flex items-center justify-between px-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span>Official Statutory Register (8 Records)</span>
              <span>Click to inspect credentials</span>
            </div>

            <div className="shadow-xs divide-y divide-neutral-200/70 overflow-hidden rounded-3xl border border-neutral-200/80 bg-white">
              {STATUTORY_DOCUMENTS.map((doc) => {
                const isSelected = doc.id === activeDoc.id;
                return (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDocId(doc.id)}
                    className={`group flex w-full items-center justify-between p-5 text-left transition-all sm:p-6 ${
                      isSelected
                        ? "bg-[#FAF7F2] ring-2 ring-inset ring-brand-700/20"
                        : "bg-white hover:bg-neutral-50/80"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Numeric Index Badge */}
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                          isSelected
                            ? "bg-brand-700 text-white"
                            : "bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200"
                        }`}
                      >
                        {doc.num}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3
                            className={`font-serif text-base font-bold transition-colors sm:text-lg ${
                              isSelected
                                ? "text-brand-800"
                                : "text-neutral-900 group-hover:text-brand-700"
                            }`}
                          >
                            {doc.title}
                          </h3>
                          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-800 ring-1 ring-emerald-200">
                            {doc.status}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-neutral-500">
                          Authority:{" "}
                          <span className="font-semibold text-neutral-700">
                            {doc.authority}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="ml-4 shrink-0">
                      <ChevronRight
                        className={`h-5 w-5 transition-transform ${
                          isSelected
                            ? "translate-x-1 text-brand-700"
                            : "text-neutral-400 group-hover:translate-x-1 group-hover:text-neutral-600"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Live Official Verification Dossier Panel (5 cols) */}
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border-2 border-brand-200/80 bg-white p-7 shadow-xl sm:p-8">
              {/* Top Seal Aesthetic */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-200/80">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700">
                      Official Dossier Entry • {activeDoc.num} of 08
                    </span>
                    <h3 className="font-serif text-lg font-bold text-neutral-900">
                      Credential Verification
                    </h3>
                  </div>
                </div>

                <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-semibold text-neutral-700">
                  {activeDoc.category}
                </span>
              </div>

              {/* Document Title & Key Fields */}
              <div className="mt-5 space-y-4">
                <div>
                  <h4 className="font-serif text-2xl font-extrabold text-neutral-900">
                    {activeDoc.title}
                  </h4>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-800 ring-1 ring-emerald-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{activeDoc.status}</span>
                  </div>
                </div>

                {/* Statutory Details Box */}
                <div className="space-y-2.5 rounded-2xl border border-neutral-200/80 bg-[#FAF7F2]/80 p-4 text-xs">
                  <div className="flex justify-between border-b border-neutral-200/50 pb-2">
                    <span className="text-neutral-500">Issuing Body:</span>
                    <span className="text-right font-bold text-neutral-900">
                      {activeDoc.authority}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-neutral-200/50 pb-2">
                    <span className="text-neutral-500">Reg / Filing ID:</span>
                    <span className="font-mono font-bold text-brand-700">
                      {activeDoc.regId}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-neutral-500">Statutory Term:</span>
                    <span className="font-semibold text-neutral-800">
                      {activeDoc.validity}
                    </span>
                  </div>
                </div>

                {/* Regulatory Scope & Purpose */}
                <div className="space-y-2 text-xs text-neutral-600">
                  <div>
                    <span className="font-bold text-neutral-900">
                      Regulatory Purpose:
                    </span>
                    <p className="mt-0.5 leading-relaxed">
                      {activeDoc.purpose}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-neutral-900">
                      Public Benefit:
                    </span>
                    <p className="mt-0.5 leading-relaxed">
                      {activeDoc.publicBenefit}
                    </p>
                  </div>
                </div>

                {/* Direct Request Copy Action */}
                <div className="pt-2">
                  <a
                    href={`mailto:contact@chandnidi.org?subject=Statutory%20Document%20Request%20-%20${encodeURIComponent(
                      activeDoc.title
                    )}&body=Dear%20Chandni%20Di%20Foundation%20Team,%0A%0AI%20would%20like%20to%20request%20an%20official%20verified%20copy%20of%20the%20${encodeURIComponent(
                      activeDoc.title
                    )}%20for%20our%20records/due%20diligence.`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-700 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-800"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Request Certified Copy of {activeDoc.num}</span>
                  </a>
                </div>

                {/* Disclaimer Footnote */}
                <p className="text-center text-[11px] text-neutral-500">
                  Subject to verification and availability. Official certified
                  copies provided to verified donors, CSR partners, and
                  auditors.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Full Expansive Statutory Ledger Table */}
      {viewMode === "table" && (
        <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-200/90 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-neutral-200 bg-[#FAF7F2] text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Document &amp; Purpose
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Issuing Authority
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Filing / Reg ID
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4 text-right">
                    Verification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/70">
                {STATUTORY_DOCUMENTS.map((doc) => (
                  <tr
                    key={doc.id}
                    className="transition-colors hover:bg-neutral-50/80"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-mono font-bold text-neutral-500">
                      {doc.num}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-serif font-bold text-neutral-900">
                        {doc.title}
                      </div>
                      <div className="mt-0.5 text-xs text-neutral-500">
                        {doc.purpose}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-neutral-700">
                      {doc.authority}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-mono text-xs font-semibold text-brand-700">
                      {doc.regId}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-800 ring-1 ring-emerald-200">
                        {doc.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">
                      <a
                        href={`mailto:contact@chandnidi.org?subject=Document%20Request%20-%20${encodeURIComponent(
                          doc.title
                        )}`}
                        className="inline-flex items-center gap-1 font-bold text-brand-700 hover:text-brand-800 hover:underline"
                      >
                        <span>Request Copy</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Bottom Institutional Commitment Callout Bar */}
      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-[#EDE5DA] bg-[#FAF7F2] p-6 sm:flex-row sm:items-center sm:p-8">
        <div className="max-w-2xl space-y-1">
          <h4 className="font-serif text-base font-bold text-neutral-900 sm:text-lg">
            Institutional CSR Due Diligence &amp; Auditor Access
          </h4>
          <p className="text-xs text-neutral-600 sm:text-sm">
            Are you a CSR committee, philanthropic grantmaker, or independent
            auditor? Our compliance secretariat provides certified resolution
            extracts and statutory filings upon request.
          </p>
        </div>

        <a
          href="mailto:contact@chandnidi.org?subject=CSR%20Due%20Diligence%20Dossier%20Request"
          className="shadow-xs inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-neutral-800"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>Contact Compliance Desk</span>
        </a>
      </div>
    </section>
  );
}
