"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Utensils,
  HeartPulse,
  Laptop,
  Sparkles,
} from "lucide-react";

export default function CharityWithDifferenceSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Content strictly derived from Google Doc Section 7: "Get Involved Page" (7.1, 7.5, 7.7)
  const initiatives = [
    {
      id: "education",
      title: "Child Education",
      desc: "Supports school fees, learning resources, academic assistance, and books identified through our programmes.",
      icon: GraduationCap,
      // Website Theme: Brand Warm Gold / Amber
      strokeColor: "#D97706",
      fillBg: "#FFFBEB",
      innerBorder: "#FEF3C7",
      iconBg: "bg-[#F59E0B]",
      iconColor: "text-white",
      href: "/get-involved#donate",
    },
    {
      id: "food",
      title: "Food & Nutrition",
      desc: "Provides nutritious daily meals and community food drives so children have the nourishment to learn and thrive.",
      icon: Utensils,
      // Website Theme: Forest Green
      strokeColor: "#047857",
      fillBg: "#F0FDF4",
      innerBorder: "#DCFCE7",
      iconBg: "bg-[#047857]",
      iconColor: "text-white",
      href: "/get-involved#donate",
    },
    {
      id: "medical",
      title: "Medical Care",
      desc: "Covers essential pediatric health check-ups, medicines, and emergency care so illness never stops education.",
      icon: HeartPulse,
      // Website Theme: Core Brand Red
      strokeColor: "#C62828",
      fillBg: "#FEF2F2",
      innerBorder: "#FEE2E2",
      iconBg: "bg-[#C62828]",
      iconColor: "text-white",
      href: "/get-involved#donate",
    },
    {
      id: "skills",
      title: "Skill Development",
      desc: "Funds practical digital literacy, computer labs, and career guidance to prepare youth for future opportunities.",
      icon: Laptop,
      // Website Theme: Deep Burgundy / Brand Charcoal
      strokeColor: "#7F1D1D",
      fillBg: "#FAF5FF",
      innerBorder: "#F3E8FF",
      iconBg: "bg-[#7F1D1D]",
      iconColor: "text-white",
      href: "/get-involved#donate",
    },
  ];

  // Auto-scroll logic: rotates every 3.5 seconds, pauses when user hovers
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % initiatives.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, initiatives.length]);

  const visibleCards = [
    initiatives[startIndex],
    initiatives[(startIndex + 1) % initiatives.length],
    initiatives[(startIndex + 2) % initiatives.length],
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (Standard Site Badge & Consistent Typography) ── */}
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/90 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
            <Sparkles className="h-3.5 w-3.5 text-brand-700" />
            Every Contribution Can Matter
          </span>

          {/* Main Title directly from Google Doc 7.1 */}
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px]">
            Support a Child&apos;s Educational Journey
          </h2>

          {/* Subtitle directly from Google Doc 7.1 */}
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Your contribution can help support educational fees, learning
            resources, academic assistance, skill development, and other needs
            identified through our programmes.
          </p>
        </div>

        {/* ── Auto-Scrolling Cards Container (Pauses on Hover) ── */}
        <div
          className="relative mx-auto max-w-6xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* ── 3 Wider Gourd/Bell Shaped Cards with Exact 10px Stroke Gap ── */}
          <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {visibleCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={`${item.id}-${idx}`}
                  href={item.href}
                  className="focus:outline-hidden group relative flex aspect-[350/390] w-full max-w-[365px] flex-col items-center justify-between transition-all duration-500 hover:-translate-y-1.5"
                >
                  {/* ── SVG Exact Gourd Contour with 10px Gap from Stroke ── */}
                  <svg
                    viewBox="0 0 350 390"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-sm transition-all duration-300 group-hover:drop-shadow-md"
                  >
                    {/* ── Inner Solid Gourd BG (Inset by ~10px from outer border) ── */}
                    <path
                      d="M 175 26 C 214 26, 250 34, 264 58 C 273 76, 271 102, 266 124 C 262 136, 264 145, 274 156 C 289 171, 308 194, 310 232 C 312 274, 308 308, 288 338 C 272 358, 242 365, 212 367 C 192 368, 158 368, 138 367 C 108 365, 78 358, 62 338 C 42 308, 38 274, 40 232 C 42 194, 61 171, 76 156 C 86 145, 88 136, 84 124 C 79 102, 77 76, 86 58 C 100 34, 136 26, 175 26 Z"
                      fill={item.fillBg}
                      stroke="#FFFFFF"
                      strokeWidth="3.5"
                    />

                    {/* Subtle inner accent border */}
                    <path
                      d="M 175 26 C 214 26, 250 34, 264 58 C 273 76, 271 102, 266 124 C 262 136, 264 145, 274 156 C 289 171, 308 194, 310 232 C 312 274, 308 308, 288 338 C 272 358, 242 365, 212 367 C 192 368, 158 368, 138 367 C 108 365, 78 358, 62 338 C 42 308, 38 274, 40 232 C 42 194, 61 171, 76 156 C 86 145, 88 136, 84 124 C 79 102, 77 76, 86 58 C 100 34, 136 26, 175 26 Z"
                      fill="none"
                      stroke={item.innerBorder}
                      strokeWidth="1.2"
                    />

                    {/* ── Outer Broken Strokes & Accents (10px outside the inner BG) ── */}
                    {/* Top center stroke */}
                    <path
                      d="M 135 15 C 158 13, 192 13, 215 15"
                      stroke={item.strokeColor}
                      strokeWidth="3.8"
                      strokeLinecap="round"
                    />

                    {/* Top right hook & accent dot */}
                    <path
                      d="M 238 18 C 265 26, 278 48, 274 78"
                      stroke={item.strokeColor}
                      strokeWidth="4.2"
                      strokeLinecap="round"
                    />
                    <circle cx="282" cy="40" r="3.8" fill={item.strokeColor} />

                    {/* Right waist hook */}
                    <path
                      d="M 270 138 C 278 152, 288 164, 305 178"
                      stroke={item.strokeColor}
                      strokeWidth="3.8"
                      strokeLinecap="round"
                    />

                    {/* Right body stroke */}
                    <path
                      d="M 320 202 C 328 238, 326 278, 318 314"
                      stroke={item.strokeColor}
                      strokeWidth="4.2"
                      strokeLinecap="round"
                    />

                    {/* Bottom right hook */}
                    <path
                      d="M 314 322 C 320 354, 292 372, 256 375"
                      stroke={item.strokeColor}
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />

                    {/* Bottom center stroke */}
                    <path
                      d="M 232 378 C 196 381, 154 381, 118 378"
                      stroke={item.strokeColor}
                      strokeWidth="3.8"
                      strokeLinecap="round"
                    />

                    {/* Bottom left hook */}
                    <path
                      d="M 94 375 C 58 372, 30 354, 36 322"
                      stroke={item.strokeColor}
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />

                    {/* Left body stroke */}
                    <path
                      d="M 32 314 C 24 278, 22 238, 30 202"
                      stroke={item.strokeColor}
                      strokeWidth="4.2"
                      strokeLinecap="round"
                    />

                    {/* Left waist hook & accent dot */}
                    <path
                      d="M 45 178 C 62 164, 72 152, 80 138"
                      stroke={item.strokeColor}
                      strokeWidth="3.8"
                      strokeLinecap="round"
                    />
                    <circle cx="40" cy="184" r="3.8" fill={item.strokeColor} />

                    {/* Top left hook & accent dot */}
                    <path
                      d="M 76 78 C 72 48, 85 26, 112 18"
                      stroke={item.strokeColor}
                      strokeWidth="4.2"
                      strokeLinecap="round"
                    />
                    <circle cx="68" cy="40" r="3.8" fill={item.strokeColor} />
                  </svg>

                  {/* ── Content Layer: Centered Icon Circle in Upper Dome ── */}
                  <div className="relative z-10 flex h-[142px] w-full items-center justify-center pt-6">
                    <div
                      className={`flex h-[66px] w-[66px] items-center justify-center rounded-full ${item.iconBg} ${item.iconColor} shadow-md transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon className="h-7 w-7 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* ── Content Layer: Title & Description in Lower Body ── */}
                  <div className="relative z-10 flex flex-1 flex-col items-center justify-start space-y-2.5 px-8 pb-8 pt-1 text-center">
                    <h3 className="font-sans text-xl font-bold tracking-tight text-neutral-900 sm:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="max-w-[230px] text-xs leading-relaxed text-neutral-500 sm:text-[13px]">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
