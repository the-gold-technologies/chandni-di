import React from "react";
import { Metadata } from "next";
import {
  TransparencyHero,
  TransparencyStats,
  TransparencyRegistrations,
  TransparencyFundAllocation,
  TransparencyFAQ,
  TransparencyCommitment,
  TransparencyCta,
} from "./components";
import TransparencyMediaSection from "@/components/TransparencyMediaSection";

export const metadata: Metadata = {
  title:
    "Trust & Transparency | Chandni Di Foundation — Audited & Certified Non-Profit",
  description:
    "Explore Chandni Di Foundation's statutory registrations, Section 80G & 12A certificates, audited financial statements, fund allocation breakdown, and national media recognition.",
};

export default function TransparencyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="space-y-20 pb-20 sm:space-y-28 sm:pb-28">
        {/* 1. Hero with Trust Pillars & Compliance Seal */}
        <TransparencyHero />

        {/* 2. Key Governance & Efficiency Metrics */}
        <TransparencyStats />

        {/* 3. Statutory Registrations & Certifications with Document Inspection Modal */}
        <TransparencyRegistrations />

        {/* 4. Ethical Fund Allocation Breakdown & Audited Statements */}
        <TransparencyFundAllocation />

        {/* 5. Public Credibility: National Media Recognition & Third-Party Citations */}
        <TransparencyMediaSection />

        {/* 6. Transparency, Audit & 80G Frequently Asked Questions */}
        <TransparencyFAQ />

        {/* 7. Institutional Governance Charter & Commitment */}
        <TransparencyCommitment />

        {/* 8. High-Impact Closing CTA with Instant 80G Tax Exemption */}
        <TransparencyCta />
      </div>
    </main>
  );
}
