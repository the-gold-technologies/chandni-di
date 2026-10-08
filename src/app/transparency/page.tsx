import React from "react";
import { Metadata } from "next";
import {
  TransparencyHero,
  TransparencyStats,
  TransparencyRegistrations,
  TransparencyCommitment,
} from "./components";

export const metadata: Metadata = {
  title:
    "Trust & Transparency | Chandni Di Foundation — Audited & Certified Non-Profit",
  description:
    "Explore Chandni Di Foundation's statutory registrations, Section 80G & 12A certificates, audited financial statements, and institutional governance.",
};

export default function TransparencyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="space-y-16 pb-20 sm:space-y-24 sm:pb-28">
        {/* 1. Hero Section (Google Doc) */}
        <TransparencyHero />

        {/* 2. Accountability in Action (Connected Steps Layout) */}
        <TransparencyStats />

        {/* 3. Documents & Registrations (Google Doc 8 Statutory Items) */}
        <TransparencyRegistrations />

        {/* 4. Our Commitment & CTA (Google Doc) */}
        <TransparencyCommitment />
      </div>
    </main>
  );
}
