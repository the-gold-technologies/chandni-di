"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  Receipt,
  Download,
  X,
  Sparkles,
  BookOpen,
  Apple,
  GraduationCap,
  Users,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function DonateSection() {
  const [frequency, setFrequency] = useState<"monthly" | "one-time">("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState<string>("");
  const [donorEmail, setDonorEmail] = useState<string>("");
  const [donorPhone, setDonorPhone] = useState<string>("");
  const [donorPan, setDonorPan] = useState<string>("");
  const [showReceiptModal, setShowReceiptModal] = useState<boolean>(false);
  const [receiptNumber, setReceiptNumber] = useState<string>("");

  const activeAmount = customAmount
    ? parseInt(customAmount) || 0
    : selectedAmount;
  const taxDeduction = Math.round(activeAmount * 0.5);

  const presets = [
    {
      amount: 1000,
      label: "Nutrition & Books",
      impact:
        "Provides healthy midday meals, fruit, and school activity kits for 1 child.",
    },
    {
      amount: 2500,
      label: "Keep a Child in School",
      popular: true,
      impact:
        "Covers 50–100% school fees, evening tutoring, and protects a girl from dropouts.",
    },
    {
      amount: 5000,
      label: "College & Tech Lab",
      impact:
        "Funds higher education college tuition, laptop access, and career mentorship.",
    },
  ];

  const handlePresetClick = (amt: number) => {
    setSelectedAmount(amt);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(0);
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomReceipt =
      "CD-80G-" + Math.floor(100000 + Math.random() * 900000);
    setReceiptNumber(randomReceipt);
    setShowReceiptModal(true);
  };

  return (
    <section
      id="donate"
      className="scroll-mt-24 border-b border-neutral-200/60 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Deep Emotional Resonance */}
        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/90 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
            <Heart className="h-3.5 w-3.5 fill-brand-700 text-brand-700" />
            7.1 Direct Educational Giving
          </span>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px]">
            Support a Child’s Educational Journey
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Your contribution can help support educational fees, learning
            resources, academic assistance, skill development, and other needs
            identified through our programmes.
          </p>

          {/* Emotional quote in handwriting aesthetic */}
          <div className="pt-2">
            <p className="font-handwriting text-2xl font-semibold text-brand-700 sm:text-3xl">
              &ldquo;For a child in the slums, education is the only doorway out
              of poverty.&rdquo;
            </p>
          </div>
        </div>

        {/* 2-Column Emotional Donation Layout: Human Story (Left) + Giving Box (Right) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ── LEFT COLUMN: The Child's Reality & Impact Breakdown ── */}
          <div className="flex flex-col justify-between space-y-8 lg:col-span-6">
            {/* Real Emotional Student Story Card */}
            <div className="relative overflow-hidden rounded-3xl border border-[#EDE5DA] bg-[#FBF8F2] p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md sm:h-36 sm:w-36">
                  <Image
                    src="/images/hero_hug.jpg"
                    alt="A child being hugged and supported with dignity and love by Chandni"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <span className="rounded-full bg-brand-100/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-800">
                    A Child&apos;s Tomorrow
                  </span>
                  <h3 className="font-serif text-xl font-bold text-neutral-900">
                    Your Gift Changes a Destiny
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                    Children living in slum communities face hunger, forced
                    labor, and early dropouts every single day. When you donate,
                    you replace fear with notebooks, nutrition, and dignity.
                  </p>
                </div>
              </div>

              {/* Real Student Quote */}
              <div className="mt-6 border-t border-neutral-200/70 pt-4">
                <p className="text-xs italic text-neutral-600 sm:text-sm">
                  &ldquo;Without this support, I would be picking scrap or
                  begging at signals. Today I am studying in school with clean
                  clothes and a dream to become a doctor.&rdquo;
                </p>
                <p className="mt-1 text-right text-xs font-bold text-neutral-800">
                  — Aarti, Class 9 Scholar
                </p>
              </div>
            </div>

            {/* Tangible Impact Breakdown: Where Does Every Rupee Go? */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-neutral-900">
                What Your Love Makes Possible:
              </h4>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="shadow-xs rounded-2xl border border-neutral-200/80 bg-white p-4">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-[#C05621]">
                    <Apple className="h-5 w-5" />
                  </div>
                  <p className="font-serif text-base font-bold text-neutral-900">
                    ₹1,000
                  </p>
                  <p className="text-xs text-neutral-600">
                    Nutritious daily meals & full activity workbook kit for a
                    month.
                  </p>
                </div>

                <div className="shadow-xs rounded-2xl border border-brand-200 bg-brand-50/40 p-4">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <p className="font-serif text-base font-bold text-brand-900">
                    ₹2,500
                  </p>
                  <p className="text-xs text-brand-800">
                    Formal school tuition, evening tuition & uniforms for 1
                    scholar.
                  </p>
                </div>

                <div className="shadow-xs rounded-2xl border border-neutral-200/80 bg-white p-4">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <p className="font-serif text-base font-bold text-neutral-900">
                    ₹5,000
                  </p>
                  <p className="text-xs text-neutral-600">
                    College degree scholarship, laptop lab training & job
                    readiness.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust and Accountability Badges */}
            <div className="shadow-xs rounded-2xl border border-neutral-200/70 bg-white p-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 shrink-0 text-brand-700" />
                  <div>
                    <p className="text-xs font-bold text-neutral-900">
                      50% Tax Relief
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      Section 80G Certified
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Receipt className="h-6 w-6 shrink-0 text-brand-700" />
                  <div>
                    <p className="text-xs font-bold text-neutral-900">
                      Instant Receipt
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      Delivered via WhatsApp & Email
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 shrink-0 text-brand-700" />
                  <div>
                    <p className="text-xs font-bold text-neutral-900">
                      100% Educational
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      Zero wastage on bureaucracy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: The High-Conversion Emotion Donation Box ── */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border-2 border-brand-200/90 bg-white p-6 shadow-xl sm:p-8 lg:p-9">
              {/* Top Frequency Switcher */}
              <div className="mb-6 flex flex-col gap-3 border-b border-neutral-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900">
                    Make Your Contribution
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Choose sustained protection or a one-time blessing
                  </p>
                </div>

                <div className="inline-flex rounded-xl bg-neutral-100 p-1">
                  <button
                    type="button"
                    onClick={() => setFrequency("monthly")}
                    className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                      frequency === "monthly"
                        ? "bg-brand-700 text-white shadow-sm"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    <Heart className="h-3 w-3 fill-current" />
                    <span>Monthly Guardian</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency("one-time")}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                      frequency === "one-time"
                        ? "bg-brand-700 text-white shadow-sm"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    One-Time Gift
                  </button>
                </div>
              </div>

              <form onSubmit={handleDonateSubmit} className="space-y-6">
                {/* 3 Preset Amount Cards */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Select Contribution Amount:
                  </label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {presets.map((item) => {
                      const isSelected =
                        selectedAmount === item.amount && !customAmount;
                      return (
                        <div
                          key={item.amount}
                          onClick={() => handlePresetClick(item.amount)}
                          className={`relative cursor-pointer rounded-2xl border-2 p-4 text-center transition-all ${
                            isSelected
                              ? "border-brand-700 bg-brand-50/60 shadow-md ring-2 ring-brand-700/20"
                              : "border-neutral-200/90 bg-white hover:border-neutral-300 hover:bg-neutral-50/50"
                          }`}
                        >
                          {item.popular && (
                            <span className="shadow-xs absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-700 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                              Most Chosen
                            </span>
                          )}
                          <p className="font-serif text-2xl font-extrabold text-neutral-900">
                            ₹{item.amount.toLocaleString()}
                          </p>
                          <p className="mt-0.5 text-[11px] font-semibold text-brand-700">
                            {item.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Amount Field */}
                <div>
                  <label className="block text-xs font-medium text-neutral-600">
                    Or enter any custom amount (₹):
                  </label>
                  <div className="relative mt-1.5">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-serif text-lg font-bold text-neutral-400">
                      ₹
                    </span>
                    <input
                      type="number"
                      min="100"
                      value={customAmount}
                      onChange={handleCustomChange}
                      placeholder="e.g. 1500, 7500, 10000"
                      className="w-full rounded-xl border border-neutral-300 bg-neutral-50/50 py-3 pl-9 pr-4 text-sm font-semibold text-neutral-900 transition focus:border-brand-700 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-700"
                    />
                  </div>
                </div>

                {/* Dynamic Live Emotional Impact Statement */}
                <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#C05621]" />
                    <div className="space-y-1 text-xs">
                      <p className="font-bold text-neutral-900">
                        Your Direct Impact (
                        {frequency === "monthly" ? "Every Month" : "Today"}):
                      </p>
                      <p className="leading-relaxed text-neutral-700">
                        {activeAmount >= 5000
                          ? `With ₹${activeAmount.toLocaleString()}, you fund college degree tuition, digital laptop training, and placement mentorship for a senior scholar.`
                          : activeAmount >= 2500
                            ? `With ₹${activeAmount.toLocaleString()}, you keep an underprivileged child enrolled in formal school with evening tutoring, books, and daily nutrition.`
                            : activeAmount >= 1000
                              ? `With ₹${activeAmount.toLocaleString()}, you provide complete stationery kits, reading workbooks, and high-nutrition midday snacks for a student.`
                              : `Every rupee directly assists learning materials and classroom essentials for children at Voice of Slum.`}
                      </p>
                      <p className="pt-1 text-[11px] font-semibold text-emerald-800">
                        ✓ Eligible for ₹{taxDeduction.toLocaleString()} tax
                        deduction under Section 80G.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Donor Details for 80G Tax Receipt */}
                <div className="space-y-3 border-t border-neutral-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Donor Details (For 80G Tax Exemption Certificate)
                  </p>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        required
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="Full Legal Name *"
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-3.5 py-2.5 text-xs text-neutral-900 transition focus:border-brand-700 focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="Email for 80G Receipt *"
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-3.5 py-2.5 text-xs text-neutral-900 transition focus:border-brand-700 focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        placeholder="WhatsApp / Phone *"
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-3.5 py-2.5 text-xs text-neutral-900 transition focus:border-brand-700 focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={donorPan}
                        onChange={(e) =>
                          setDonorPan(e.target.value.toUpperCase())
                        }
                        maxLength={10}
                        placeholder="PAN Card (Optional for 80G)"
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-3.5 py-2.5 text-xs uppercase text-neutral-900 transition focus:border-brand-700 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Big Heartfelt Donate Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-700 py-4 text-sm font-bold text-white shadow-elevated transition-all duration-200 hover:scale-[1.01] hover:bg-brand-800 hover:shadow-lg sm:text-base"
                  >
                    <Heart className="h-4 w-4 fill-white transition-transform group-hover:scale-125" />
                    <span>
                      Donate ₹{activeAmount.toLocaleString()}{" "}
                      {frequency === "monthly" ? "Every Month" : "Now"} &
                      Protect a Child
                    </span>
                  </button>
                  <div className="mt-2.5 flex items-center justify-center gap-2 text-center text-[11px] text-neutral-500">
                    <Lock className="h-3 w-3 text-emerald-600" />
                    <span>
                      256-bit Bank Grade Security • UPI, Debit/Credit Card,
                      Netbanking • Instant 80G Receipt
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Instant 80G Tax Receipt Modal Simulation */}
      {showReceiptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setShowReceiptModal(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-neutral-900">
                  Thank You for Sponsoring Hope!
                </h3>
                <p className="text-xs text-neutral-500">
                  Receipt No:{" "}
                  <span className="font-mono font-semibold">
                    {receiptNumber}
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-neutral-100 bg-[#FBF8F2] p-4 text-xs text-neutral-700">
              <div className="flex justify-between border-b border-neutral-200/60 pb-2">
                <span>Donor Name:</span>
                <span className="font-bold">
                  {donorName || "Kind Supporter"}
                </span>
              </div>
              <div className="flex justify-between border-b border-neutral-200/60 pb-2">
                <span>Contribution Amount:</span>
                <span className="font-serif font-bold text-brand-700">
                  ₹{activeAmount.toLocaleString()} ({frequency})
                </span>
              </div>
              <div className="flex justify-between border-b border-neutral-200/60 pb-2">
                <span>Eligible 80G Tax Exemption:</span>
                <span className="font-bold text-emerald-700">
                  ₹{taxDeduction.toLocaleString()} (50%)
                </span>
              </div>
              <div className="flex justify-between">
                <span>Registration Status:</span>
                <span className="font-semibold text-neutral-800">
                  Voice of Slum Trust (80G Certified)
                </span>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-neutral-600">
              An official 80G tax certificate has been dispatched to{" "}
              <strong>{donorEmail || "your email"}</strong> and{" "}
              <strong>{donorPhone || "WhatsApp"}</strong>.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={() => setShowReceiptModal(false)}
                className="shadow-xs inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-800"
              >
                <Download className="h-4 w-4" />
                <span>Download 80G PDF Receipt</span>
              </button>
              <button
                type="button"
                onClick={() => setShowReceiptModal(false)}
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-xs font-semibold text-neutral-700 hover:bg-neutral-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
