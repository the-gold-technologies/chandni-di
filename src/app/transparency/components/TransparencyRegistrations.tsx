"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  FileText,
  Award,
  FileCheck,
  Scale,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function TransparencyRegistrations() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleCards, setVisibleCards] = useState<number>(4);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // The 8 official documents verbatim from Google Doc
  const documents = [
    {
      id: "darpan",
      title: "NGO Darpan Registration",
      description:
        "Official national portal registration validating legitimate operational status and NITI Aayog accreditation.",
      icon: Users,
    },
    {
      id: "80g",
      title: "80G Certificate",
      description:
        "Enables 50% tax deduction on taxable income for all individual and corporate contributors across India.",
      icon: FileText,
    },
    {
      id: "12a",
      title: "12A Certificate",
      description:
        "Income Tax Department recognition affirming perpetual non-profit charitable status and tax exemption.",
      icon: Award,
    },
    {
      id: "csr1",
      title: "CSR-1 Registration",
      description:
        "Ministry of Corporate Affairs approval authorized to partner with corporations for Section 135 CSR grants.",
      icon: FileCheck,
    },
    {
      id: "trust",
      title: "Trust Registration Certificate",
      description:
        "Registered constitutional public trust deed validating legal governance, board trustees, and bylaws.",
      icon: Scale,
    },
    {
      id: "annual",
      title: "Annual Reports",
      description:
        "Comprehensive year-on-year reviews documenting student admissions, learning centres, and outcomes.",
      icon: TrendingUp,
    },
    {
      id: "financial",
      title: "Financial Reports",
      description:
        "Independently audited balance sheets and financial statements verifying ethical fund deployment.",
      icon: BarChart3,
    },
    {
      id: "bylaws",
      title: "Relevant Organisational Documents",
      description:
        "Official PAN card, Form 10BD donor tax returns, child safeguarding charter, and institutional policies.",
      icon: ShieldCheck,
    },
  ];

  // Dynamic responsive cards calculation
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        // Mobile: 1 card visible
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        // Tablet / mid-screen: 2 cards visible
        setVisibleCards(2);
      } else {
        // Desktop: 4 cards visible
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, documents.length - visibleCards);

  // Keep currentIndex bounded when window resizes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, currentIndex]);

  // Auto-slide interval (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="statutory-documents"
      className="relative overflow-hidden bg-[#FAF6F0] py-16 sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── HEADER (Matched Content from Document, Red Accent, No Underline) ── */}
        <div className="relative mx-auto text-center">
          <div className="relative inline-block text-center">
            {/* Hand-Drawn Leaf Twig Doodle (Left) */}
            <div className="pointer-events-none absolute -left-12 -top-7 select-none sm:-left-16 sm:-top-9 md:-left-20 md:-top-11">
              <svg
                width="78"
                height="78"
                viewBox="0 0 85 85"
                fill="none"
                className="opacity-95"
              >
                <path
                  d="M14 74 C24 54, 40 36, 68 18"
                  stroke="#3D5638"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M28 54 C12 47, 10 30, 20 19 C32 17, 40 33, 28 54 Z"
                  fill="#D5E8D2"
                  stroke="#3D5638"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 19 Q 25 36 28 54"
                  stroke="#3D5638"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M48 37 C40 21, 48 7, 62 9 C70 19, 62 35, 48 37 Z"
                  fill="#D5E8D2"
                  stroke="#3D5638"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M62 9 Q 54 23 48 37"
                  stroke="#3D5638"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M65 23 C67 13, 79 9, 85 17 C87 27, 77 31, 65 23 Z"
                  fill="#E2EEE0"
                  stroke="#3D5638"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Hand-Drawn Star Doodle (Right) */}
            <div className="pointer-events-none absolute -right-8 -top-5 select-none sm:-right-10 sm:-top-6 md:-right-12 md:-top-8">
              <svg
                width="48"
                height="48"
                viewBox="0 0 55 55"
                fill="none"
                className="opacity-85"
              >
                <path
                  d="M22 5 L25 17 L37 19 L28 26 L31 38 L20 30 L9 36 L14 24 L5 18 L18 16 Z"
                  stroke="#2B241E"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <line
                  x1="42"
                  y1="11"
                  x2="48"
                  y2="5"
                  stroke="#2B241E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="46"
                  y1="21"
                  x2="52"
                  y2="19"
                  stroke="#2B241E"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Headline matching Google Doc exactly with Red color, NO underline */}
            <h2 className="font-serif text-3xl font-bold leading-[1.2] tracking-tight text-[#1E2530] sm:text-4xl md:text-5xl lg:text-[46px]">
              Documents &amp;{" "}
              <span className="text-brand-700">Registrations</span>
            </h2>
          </div>

          {/* Subtitle verbatim from Google Doc */}
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-[#64748B] sm:text-base">
            The following can be included, subject to verification and
            availability:
          </p>
        </div>

        {/* ── RESPONSIVE AUTO-SLIDER (1 on mobile, 2 on tablet, 4 on desktop) ── */}
        <div
          className="relative mt-12 sm:mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Documents"
            className="absolute -left-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-neutral-700 shadow-md ring-1 ring-neutral-200 transition-all hover:scale-110 hover:text-brand-700 hover:shadow-lg lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Slider Overflow Mask */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {documents.map((doc) => {
                const Icon = doc.icon;
                return (
                  <div
                    key={doc.id}
                    className="flex-shrink-0 px-3"
                    style={{
                      width: `${100 / visibleCards}%`,
                    }}
                  >
                    <div className="flex h-full flex-col justify-start rounded-[26px] border border-[#ECE5DC] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] sm:p-8">
                      {/* Circular Icon Disc in Brand Red Hue */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                        <Icon
                          className="h-6 w-6 text-brand-700"
                          strokeWidth={2}
                        />
                      </div>

                      {/* Bold Title */}
                      <h3 className="mt-6 text-lg font-bold text-[#1E2530]">
                        {doc.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2.5 text-sm leading-relaxed text-[#64748B]">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Documents"
            className="absolute -right-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-neutral-700 shadow-md ring-1 ring-neutral-200 transition-all hover:scale-110 hover:text-brand-700 hover:shadow-lg lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* ── Slide Navigation Controls (Mobile Arrows + Dynamic Pagination Dots) ── */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {/* Mobile Arrow Left */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide Mobile"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm ring-1 ring-neutral-200 transition-all hover:text-brand-700 lg:hidden"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Dynamic Pagination Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-7 bg-brand-700"
                    : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

          {/* Mobile Arrow Right */}
          <button
            onClick={handleNext}
            aria-label="Next Slide Mobile"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm ring-1 ring-neutral-200 transition-all hover:text-brand-700 lg:hidden"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
