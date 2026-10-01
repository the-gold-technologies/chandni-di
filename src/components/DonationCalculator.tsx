"use client";

import React, { useState } from "react";
import {
  Heart,
  ShieldCheck,
  Check,
  Sparkles,
  Receipt,
  Download,
  X,
} from "lucide-react";
import { SPONSORSHIP_TIERS } from "@/data/ngoData";

export default function DonationCalculator() {
  const [frequency, setFrequency] = useState<"monthly" | "one-time">("monthly");
  const [selectedTier, setSelectedTier] = useState<string>("school");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState<string>("");
  const [donorPan, setDonorPan] = useState<string>("");
  const [showReceiptModal, setShowReceiptModal] = useState<boolean>(false);
  const [receiptNumber, setReceiptNumber] = useState<string>("");

  const currentTier = SPONSORSHIP_TIERS.find((t) => t.id === selectedTier);

  const activeAmount = customAmount
    ? parseInt(customAmount) || 0
    : currentTier?.amount || 2500;

  // 80G gives 50% eligible tax exemption
  const taxDeduction = Math.round(activeAmount * 0.5);

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomReceipt =
      "CD-80G-" + Math.floor(100000 + Math.random() * 900000);
    setReceiptNumber(randomReceipt);
    setShowReceiptModal(true);
  };

  return (
    <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-card sm:p-8 lg:p-10">
      {/* Frequency Toggle */}
      <div className="flex flex-col justify-between gap-4 border-b border-neutral-100 pb-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-serif text-xl font-bold text-neutral-900">
            Choose Your Contribution
          </h3>
          <p className="text-xs text-neutral-500 sm:text-sm">
            100% of educational donations go directly toward school & college
            fees
          </p>
        </div>

        <div className="inline-flex self-start rounded-xl bg-neutral-100 p-1 sm:self-auto">
          <button
            type="button"
            onClick={() => setFrequency("monthly")}
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
              frequency === "monthly"
                ? "bg-brand-700 text-white shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Monthly Support
          </button>
          <button
            type="button"
            onClick={() => setFrequency("one-time")}
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
              frequency === "one-time"
                ? "bg-brand-700 text-white shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            One-Time Gift
          </button>
        </div>
      </div>

      {/* Preset Sponsorship Tiers */}
      <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {SPONSORSHIP_TIERS.map((tier) => {
          const isSelected = selectedTier === tier.id && !customAmount;
          return (
            <div
              key={tier.id}
              onClick={() => {
                setSelectedTier(tier.id);
                setCustomAmount("");
              }}
              className={`relative cursor-pointer rounded-2xl border-2 p-5 transition-all duration-200 ${
                isSelected
                  ? "border-brand-700 bg-brand-50/50 shadow-md ring-2 ring-brand-700/20"
                  : "border-neutral-200 bg-white hover:border-neutral-300"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 right-4 rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                  Most Impactful
                </span>
              )}
              <div className="mb-1 text-sm font-bold text-neutral-800">
                {tier.name}
              </div>
              <div className="my-2 flex items-baseline gap-1">
                <span className="font-serif text-3xl font-extrabold text-neutral-900">
                  ₹{tier.amount.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-neutral-500">
                  /{frequency === "monthly" ? "mo" : "once"}
                </span>
              </div>
              <p className="mb-3 text-xs leading-relaxed text-neutral-600">
                {tier.impact}
              </p>
              <div className="inline-block rounded bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700">
                ✓ 80G Tax Benefit: ₹
                {Math.round(tier.amount * 0.5).toLocaleString("en-IN")}
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Amount Field */}
      <div className="mb-6 flex flex-col items-center gap-4 rounded-xl border border-neutral-200/80 bg-neutral-50 p-4 sm:flex-row">
        <label
          htmlFor="custom-amount-input"
          className="shrink-0 text-xs font-semibold uppercase tracking-wider text-neutral-700"
        >
          Or Enter Custom Amount:
        </label>
        <div className="relative w-full sm:w-64">
          <span className="absolute left-3 top-2.5 font-bold text-neutral-500">
            ₹
          </span>
          <input
            id="custom-amount-input"
            type="number"
            min="100"
            step="100"
            placeholder="e.g. 10000"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedTier("");
            }}
            className="w-full rounded-lg border border-neutral-300 bg-white py-2 pl-8 pr-4 text-sm font-bold text-neutral-900 focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700"
          />
        </div>
        <div className="text-xs text-neutral-500">
          Every contribution transforms a child’s future.
        </div>
      </div>

      {/* 80G Tax Exemption Highlights Callout */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-emerald-200/80 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 sm:flex-row sm:items-center sm:p-5">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 shrink-0 rounded-xl bg-emerald-600 p-2 text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900">
              Tax Exemption Certificate under Section 80G
            </h4>
            <p className="mt-0.5 text-xs text-neutral-600">
              Indian donors qualify for a 50% deduction. For a donation of{" "}
              <strong className="text-emerald-900">
                ₹{activeAmount.toLocaleString("en-IN")}
              </strong>
              , your net taxable income is reduced by{" "}
              <strong className="text-emerald-900">
                ₹{taxDeduction.toLocaleString("en-IN")}
              </strong>
              .
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-emerald-300 bg-white/80 px-3 py-1.5 text-xs font-bold text-emerald-800">
          Instant 80G Receipt
        </span>
      </div>

      {/* Donation Form */}
      <form onSubmit={handleDonateSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-700">
              Full Name (for 80G Certificate) *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Sharma"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-700">
              PAN Number (Mandatory for 80G Claim) *
            </label>
            <input
              type="text"
              required
              maxLength={10}
              placeholder="ABCDE1234F"
              value={donorPan}
              onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
              className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm uppercase tracking-wider focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full transform items-center justify-center gap-2 rounded-2xl bg-brand-700 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-xl hover:shadow-brand-700/30"
        >
          <Heart className="h-5 w-5 fill-white" />
          <span>
            Complete Donation of ₹{activeAmount.toLocaleString("en-IN")}{" "}
            {frequency === "monthly" ? "/ Month" : "Now"}
          </span>
        </button>

        <p className="text-center text-[11px] text-neutral-400">
          🔒 Secure 256-bit encrypted checkout • Instant downloadable 80G tax
          receipt issued • NGO Darpan Verified
        </p>
      </form>

      {/* Interactive Simulation Receipt Modal */}
      {showReceiptModal && (
        <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setShowReceiptModal(false)}
              className="absolute right-5 top-5 rounded-full p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 space-y-2 text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Receipt className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900">
                Thank You for Sponsoring a Child!
              </h3>
              <p className="text-sm text-neutral-600">
                Your donation of{" "}
                <strong>₹{activeAmount.toLocaleString("en-IN")}</strong> creates
                an irreversible path to dignity and education.
              </p>
            </div>

            {/* Mock Tax Receipt Card */}
            <div className="space-y-3 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-5 text-left text-xs text-neutral-700">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-2 font-bold">
                <span className="text-brand-800">
                  Chandni Di Social Welfare Trust
                </span>
                <span className="text-emerald-700">
                  80G RECEIPT: {receiptNumber}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  Donor Name: <strong>{donorName || "Generous Donor"}</strong>
                </div>
                <div>
                  PAN: <strong>{donorPan || "ABCDE1234F"}</strong>
                </div>
                <div>
                  Amount Contributed:{" "}
                  <strong>₹{activeAmount.toLocaleString("en-IN")}</strong>
                </div>
                <div>
                  Frequency: <strong>{frequency.toUpperCase()}</strong>
                </div>
                <div>
                  Exemption Eligible:{" "}
                  <strong className="text-emerald-700">
                    ₹{taxDeduction.toLocaleString("en-IN")} (50%)
                  </strong>
                </div>
                <div>
                  Date:{" "}
                  <strong>{new Date().toLocaleDateString("en-IN")}</strong>
                </div>
              </div>
              <div className="border-t border-neutral-200 pt-2 text-[10px] text-neutral-500">
                Issued in compliance with Rule 11AA of Income Tax Rules. Valid
                for tax deduction for FY 2026-27.
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => {
                  alert("Tax receipt downloaded for " + (donorName || "Donor"));
                  setShowReceiptModal(false);
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 text-sm font-semibold text-white hover:bg-black"
              >
                <Download className="h-4 w-4" /> Download 80G Receipt
              </button>
              <button
                onClick={() => setShowReceiptModal(false)}
                className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
