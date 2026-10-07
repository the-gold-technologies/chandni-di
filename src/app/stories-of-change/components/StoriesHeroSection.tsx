"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, Sparkles } from "lucide-react";

export default function StoriesHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200/60 bg-[#FAF7F2]">
      {/* Subtle background ambient blurs (Matching About page) */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-100/40 blur-3xl" />

      {/* Full-width SVG line vectors — background ambient layer */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Sweeping arc top-right */}
        <path
          d="M 800 -20 Q 1100 180 980 420"
          stroke="#D96B27"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          fill="none"
          opacity="0.18"
        />
        {/* Small accent dots scattered */}
        <circle cx="120" cy="80" r="3" fill="#D96B27" opacity="0.18" />
        <circle cx="145" cy="100" r="2" fill="#D96B27" opacity="0.14" />
        <circle cx="96" cy="108" r="1.5" fill="#D96B27" opacity="0.12" />
        <circle cx="940" cy="380" r="3" fill="#D96B27" opacity="0.15" />
        <circle cx="960" cy="400" r="2" fill="#D96B27" opacity="0.12" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-36 lg:px-8 lg:pb-20 lg:pt-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── LEFT: Text & Stats ─────────────────────────────── */}
          <div className="space-y-6 sm:space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-200">
              <Sparkles className="h-3 w-3 fill-brand-700 text-brand-700" />
              Stories of Change
            </span>

            {/* Main Headline: Exactly matching Google Doc */}
            <h1 className="space-y-2 font-serif text-3xl font-extrabold leading-[1.26] tracking-tight text-neutral-900 sm:space-y-2.5 sm:text-4xl md:text-[2.6rem] lg:text-[2.75rem] xl:text-[3.1rem]">
              <span className="block whitespace-normal sm:whitespace-nowrap">
                Every Child Has a Story.
              </span>
              <span className="block whitespace-normal text-brand-700 sm:whitespace-nowrap">
                Every Opportunity Can
              </span>
              <span className="block whitespace-normal sm:whitespace-nowrap">
                Change Its Direction.
              </span>
            </h1>

            {/* Supporting paragraph verbatim from Google Doc */}
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              The children we work with come from different circumstances, but
              their aspirations remind us of the importance of sustained support.
            </p>

            {/* Quick stats row */}
            <div className="flex flex-wrap gap-6 border-t border-neutral-200 pt-6">
              {[
                { number: "500+", label: "Children Mainstreamed" },
                { number: "370", label: "Students in School & College" },
                { number: "136", label: "Fully Sponsored" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-2xl font-extrabold text-brand-700">
                    {stat.number}
                  </div>
                  <div className="text-xs font-medium text-neutral-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/get-involved"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg"
              >
                <span>Support Our Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#stories-list"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-800 transition-all hover:bg-neutral-50"
              >
                Read Student Stories
              </a>
            </div>
          </div>

          {/* ── RIGHT: Authentic Student Portrait with Hand-Drawn Butterflies, Stars & Circling Lines ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-[420px] w-[340px] items-center justify-center sm:h-[490px] sm:w-[440px] lg:h-[530px] lg:w-[480px]">
              {/* Soft warm ambient glow behind image */}
              <div className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-brand-500/15 blur-3xl sm:h-[380px] sm:w-[380px]" />

              {/* Hand-drawn SVG layer: Butterflies, Stars, and Orbital Flight Lines */}
              <svg
                viewBox="0 0 500 500"
                className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* ── Outer concentric dashed circle ── */}
                <circle
                  cx="250"
                  cy="250"
                  r="238"
                  stroke="#D96B27"
                  strokeWidth="1.2"
                  strokeDasharray="4 10"
                  fill="none"
                  opacity="0.3"
                />

                {/* ── Main orbital circling dashed ellipse (angled) ── */}
                <ellipse
                  cx="250"
                  cy="250"
                  rx="218"
                  ry="200"
                  transform="rotate(-14 250 250)"
                  stroke="#D96B27"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.5"
                />

                {/* ── Secondary orbital ring (counter-angled) ── */}
                <ellipse
                  cx="250"
                  cy="250"
                  rx="232"
                  ry="212"
                  transform="rotate(22 250 250)"
                  stroke="#C62828"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                  fill="none"
                  opacity="0.35"
                />

                {/* ── Small orbiting accent beads/dots ── */}
                <circle cx="68" cy="185" r="4.5" fill="#D96B27" opacity="0.8" />
                <circle cx="432" cy="155" r="5" fill="#C62828" opacity="0.75" />
                <circle
                  cx="395"
                  cy="425"
                  r="3.5"
                  fill="#D96B27"
                  opacity="0.6"
                />
                <circle cx="110" cy="380" r="3" fill="#C62828" opacity="0.5" />
                <circle cx="250" cy="14" r="4" fill="#D96B27" opacity="0.65" />

                {/* ── BUTTERFLY 1: Fluttering on Top-Left with Dotted Flight Path ── */}
                <path
                  d="M 60 210 Q 25 140 70 110 T 108 75"
                  fill="none"
                  stroke="#D96B27"
                  strokeWidth="1.8"
                  strokeDasharray="4 6"
                  opacity="0.75"
                />
                <g transform="translate(108, 75) rotate(-18)">
                  {/* Body & Antennae */}
                  <path
                    d="M 0 -10 L 0 10"
                    stroke="#9A3412"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 -10 Q -5 -16 -8 -15"
                    fill="none"
                    stroke="#9A3412"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 -10 Q 5 -16 8 -15"
                    fill="none"
                    stroke="#9A3412"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  {/* Forewings (Warm Amber Gold) */}
                  <path
                    d="M 0 -7 C -15 -18 -26 -4 -7 3 Z"
                    fill="#F59E0B"
                    fillOpacity="0.9"
                    stroke="#D96B27"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 0 -7 C 15 -18 26 -4 7 3 Z"
                    fill="#F59E0B"
                    fillOpacity="0.9"
                    stroke="#D96B27"
                    strokeWidth="1.5"
                  />
                  {/* Hindwings (Brand Crimson) */}
                  <path
                    d="M 0 0 C -16 2 -16 14 -3 9 Z"
                    fill="#EF4444"
                    fillOpacity="0.8"
                    stroke="#C62828"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 0 0 C 16 2 16 14 3 9 Z"
                    fill="#EF4444"
                    fillOpacity="0.8"
                    stroke="#C62828"
                    strokeWidth="1.5"
                  />
                </g>

                {/* ── BUTTERFLY 2: Fluttering on Top-Right with Flight Trail ── */}
                <path
                  d="M 405 320 Q 460 250 425 190 T 428 135"
                  fill="none"
                  stroke="#D96B27"
                  strokeWidth="1.8"
                  strokeDasharray="4 6"
                  opacity="0.75"
                />
                <g transform="translate(428, 130) rotate(22)">
                  {/* Body & Antennae */}
                  <path
                    d="M 0 -9 L 0 9"
                    stroke="#9A3412"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 -9 Q -4 -15 -6 -14"
                    fill="none"
                    stroke="#9A3412"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0 -9 Q 4 -15 6 -14"
                    fill="none"
                    stroke="#9A3412"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  {/* Forewings */}
                  <path
                    d="M 0 -6 C -13 -16 -23 -3 -6 2 Z"
                    fill="#F59E0B"
                    fillOpacity="0.95"
                    stroke="#D96B27"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M 0 -6 C 13 -16 23 -3 6 2 Z"
                    fill="#F59E0B"
                    fillOpacity="0.95"
                    stroke="#D96B27"
                    strokeWidth="1.4"
                  />
                  {/* Hindwings */}
                  <path
                    d="M 0 0 C -14 2 -14 13 -3 8 Z"
                    fill="#EF4444"
                    fillOpacity="0.85"
                    stroke="#C62828"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M 0 0 C 14 2 14 13 3 8 Z"
                    fill="#EF4444"
                    fillOpacity="0.85"
                    stroke="#C62828"
                    strokeWidth="1.4"
                  />
                </g>

                {/* ── DOODLE STARS & SPARKLES ── */}
                {/* 1. Large 4-point Gold Sparkle Star (Top-right) */}
                <g transform="translate(345, 45)">
                  <path
                    d="M 0 -18 Q 0 0 18 0 Q 0 0 0 18 Q 0 0 -18 0 Q 0 0 0 -18 Z"
                    fill="#F59E0B"
                    opacity="0.9"
                  />
                  <circle cx="0" cy="0" r="2.5" fill="#FFFBEB" />
                </g>

                {/* 2. Terracotta Sparkle Star (Bottom-Left) */}
                <g transform="translate(55, 365)">
                  <path
                    d="M 0 -14 Q 0 0 14 0 Q 0 0 0 14 Q 0 0 -14 0 Q 0 0 0 -14 Z"
                    fill="#D96B27"
                    opacity="0.85"
                  />
                  <circle cx="0" cy="0" r="2" fill="#FFFBEB" />
                </g>

                {/* 3. Golden Star (Top-Left corner) */}
                <g transform="translate(42, 115)">
                  <path
                    d="M 0 -10 Q 0 0 10 0 Q 0 0 0 10 Q 0 0 -10 0 Q 0 0 0 -10 Z"
                    fill="#F59E0B"
                    opacity="0.85"
                  />
                </g>

                {/* 4. Small Crimson Sparkle Star (Bottom-Right) */}
                <g transform="translate(435, 400)">
                  <path
                    d="M 0 -11 Q 0 0 11 0 Q 0 0 0 11 Q 0 0 -11 0 Q 0 0 0 -11 Z"
                    fill="#C62828"
                    opacity="0.8"
                  />
                </g>

                {/* 5. Subtle Little Star (Top-Center) */}
                <g transform="translate(190, 28)">
                  <path
                    d="M 0 -8 Q 0 0 8 0 Q 0 0 0 8 Q 0 0 -8 0 Q 0 0 0 -8 Z"
                    fill="#F59E0B"
                    opacity="0.75"
                  />
                </g>

                {/* ── Radiating Joy / Twinkle Strokes (Top-Right) ── */}
                <line
                  x1="390"
                  y1="40"
                  x2="406"
                  y2="30"
                  stroke="#D96B27"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <line
                  x1="410"
                  y1="58"
                  x2="428"
                  y2="54"
                  stroke="#D96B27"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <line
                  x1="398"
                  y1="76"
                  x2="415"
                  y2="86"
                  stroke="#D96B27"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.85"
                />

                {/* ── Hand-Drawn Whimsical Loop Arrow (Bottom-Left) ── */}
                <path
                  d="M 38 410 Q 60 360 115 340"
                  fill="none"
                  stroke="#D96B27"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <path
                  d="M 102 334 L 118 340 L 110 354"
                  fill="none"
                  stroke="#D96B27"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.85"
                />

                {/* ── Hand-Drawn Cute Outline Heart (Top-Right) ── */}
                <g transform="translate(422, 215) rotate(14)">
                  <path
                    d="M 0 10 C -12 -5 -25 5 -12 18 L 0 30 L 12 18 C 25 5 12 -5 0 10 Z"
                    fill="none"
                    stroke="#D96B27"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.85"
                  />
                </g>

                {/* ── Playful Curved Squiggle Line (Bottom) ── */}
                <path
                  d="M 150 455 Q 210 480 270 460 T 360 468"
                  fill="none"
                  stroke="#D96B27"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  opacity="0.65"
                />
              </svg>

              {/* ── Transparent Cutout Image (Frameless, exact About & Program style) ── */}
              <div className="relative z-10 flex h-[340px] w-[340px] items-center justify-center sm:h-[420px] sm:w-[420px] lg:h-[460px] lg:w-[460px] xl:h-[480px] xl:w-[480px]">
                <Image
                  src="/images/stories_hero_kids_new.png"
                  alt="Young Indian students laughing and studying together - Chandni Di Stories of Change"
                  fill
                  priority
                  className="select-none object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 340px, (max-width: 1024px) 440px, 480px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
