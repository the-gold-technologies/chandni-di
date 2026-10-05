"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, Heart } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200/60 bg-[#FAF7F2]">
      {/* Subtle background ambient blurs */}
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

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── LEFT: Text ─────────────────────────────── */}
          <div className="space-y-6 sm:space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-200">
              <Heart className="h-3 w-3 fill-brand-700" />
              About Chandni Di
            </span>

            {/* Main Headline: Exactly 3 Lines with comfortable vertical gap */}
            <h1 className="space-y-2 font-serif text-3xl font-extrabold leading-[1.26] tracking-tight text-neutral-900 sm:space-y-2.5 sm:text-4xl md:text-[2.6rem] lg:text-[2.75rem] xl:text-[3.1rem]">
              <span className="block whitespace-normal sm:whitespace-nowrap">
                Creating Opportunities.
              </span>
              <span className="block whitespace-normal text-brand-700 sm:whitespace-nowrap">
                Supporting Dreams.
              </span>
              <span className="block whitespace-normal sm:whitespace-nowrap">
                Building Futures.
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              We work towards a future where children from slum and street
              communities can access education, develop their abilities, and
              pursue opportunities beyond the circumstances they were born into.
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
              <Link
                href="#story"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-800 transition-all hover:bg-neutral-50"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Single Image with Circling Line Vectors ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-[420px] w-[340px] items-center justify-center sm:h-[490px] sm:w-[440px] lg:h-[530px] lg:w-[480px]">
              {/* Soft warm ambient glow behind image */}
              <div className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-brand-500/15 blur-3xl sm:h-[380px] sm:w-[380px]" />

              {/* Circling type line vectors around the single focal image */}
              <svg
                viewBox="0 0 500 500"
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Outer concentric dashed circle */}
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

                {/* Main orbital circling dashed ellipse (angled) */}
                <ellipse
                  cx="250"
                  cy="250"
                  rx="215"
                  ry="198"
                  transform="rotate(-14 250 250)"
                  stroke="#D96B27"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.55"
                />

                {/* Secondary orbital ring (counter-angled) */}
                <ellipse
                  cx="250"
                  cy="250"
                  rx="230"
                  ry="210"
                  transform="rotate(22 250 250)"
                  stroke="#C62828"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                  fill="none"
                  opacity="0.38"
                />

                {/* Small orbiting accent beads/dots */}
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

                {/* Hand-drawn style curved arrow pointing to image */}
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

                {/* Hand-drawn cute outline heart vector (top-right) */}
                <g transform="translate(422, 195) rotate(14)">
                  <path
                    d="M 0 10 C -12 -5 -25 5 -12 18 L 0 30 L 12 18 C 25 5 12 -5 0 10 Z"
                    fill="none"
                    stroke="#D96B27"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.85"
                  />
                  <circle
                    cx="-16"
                    cy="22"
                    r="1.5"
                    fill="#D96B27"
                    opacity="0.75"
                  />
                </g>

                {/* Radiating sparkle/joy strokes (top-right) */}
                <line
                  x1="432"
                  y1="102"
                  x2="448"
                  y2="90"
                  stroke="#D96B27"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <line
                  x1="452"
                  y1="120"
                  x2="472"
                  y2="116"
                  stroke="#D96B27"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <line
                  x1="440"
                  y1="138"
                  x2="458"
                  y2="148"
                  stroke="#D96B27"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>

              {/* ── Single Focal Image ── */}
              <div className="relative z-10 h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] lg:h-[460px] lg:w-[460px] xl:h-[480px] xl:w-[480px]">
                <Image
                  src="/images/hero_chandni_red.png"
                  alt="Chandni Di with child"
                  fill
                  priority
                  className="select-none object-contain drop-shadow-2xl"
                />
              </div>

              {/* ── Presidential Honours Badge ── */}
              <div className="absolute -bottom-3 left-0 z-20 rounded-2xl border border-amber-200/90 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:-bottom-2 sm:left-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-200">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wide text-neutral-900">
                      Presidential Recognition
                    </p>
                    <p className="text-[11px] font-medium text-neutral-500">
                      Honoured by 2 Presidents of India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
