"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, Heart } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200/60 bg-[#FAF7F2]">
      {/* Subtle background blurs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-100/40 blur-3xl" />

      {/* Full-width SVG line vectors — background layer */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Long gentle curve bottom-left */}
        <path
          d="M -60 420 Q 200 300 480 500"
          stroke="#D96B27"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          fill="none"
          opacity="0.25"
        />
        {/* Sweeping arc top-right */}
        <path
          d="M 800 -20 Q 1100 180 980 420"
          stroke="#D96B27"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          fill="none"
          opacity="0.2"
        />
        {/* Small accent dots scattered */}
        <circle cx="120" cy="80" r="3" fill="#D96B27" opacity="0.18" />
        <circle cx="145" cy="100" r="2" fill="#D96B27" opacity="0.14" />
        <circle cx="96" cy="108" r="1.5" fill="#D96B27" opacity="0.12" />
        <circle cx="940" cy="380" r="3" fill="#D96B27" opacity="0.15" />
        <circle cx="960" cy="400" r="2" fill="#D96B27" opacity="0.12" />
        {/* Horizontal ruled line */}
        <line
          x1="0"
          y1="75%"
          x2="18%"
          y2="75%"
          stroke="#C62828"
          strokeWidth="1"
          opacity="0.12"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── LEFT: Text ─────────────────────────────── */}
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-200">
              <Heart className="h-3 w-3 fill-brand-700" />
              About Chandni Di
            </span>

            <h1 className="font-serif text-4xl font-extrabold leading-[1.12] text-neutral-900 sm:text-5xl lg:text-[3.25rem]">
              Creating Opportunities.{" "}
              <span className="text-brand-700">Supporting Dreams.</span>{" "}
              Building Futures.
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

          {/* ── RIGHT: Photo collage ── */}
          <div className="flex justify-center lg:justify-end">
            {/* Fixed-size container */}
            <div className="relative h-[540px] w-[380px] sm:h-[580px] sm:w-[420px]">
              {/* SVG connector lines inside collage */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Curve from top-right photo down to bottom-right */}
                <path
                  d="M 355 220 Q 390 290 355 360"
                  stroke="#D96B27"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                  fill="none"
                  opacity="0.5"
                />
                {/* Small dot trail near main photo top edge */}
                <circle cx="218" cy="28" r="3.5" fill="#D96B27" opacity="0.3" />
                <circle
                  cx="235"
                  cy="18"
                  r="2.5"
                  fill="#D96B27"
                  opacity="0.22"
                />
                <circle
                  cx="250"
                  cy="12"
                  r="1.8"
                  fill="#D96B27"
                  opacity="0.16"
                />
                {/* Horizontal accent line above main photo */}
                <line
                  x1="10"
                  y1="6"
                  x2="200"
                  y2="6"
                  stroke="#C62828"
                  strokeWidth="1.5"
                  strokeDasharray="3 5"
                  opacity="0.3"
                />
              </svg>

              {/* ── Main tall photo (left column) ── */}
              <div className="absolute bottom-0 left-0 top-0 w-[54%] overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
                <Image
                  src="/images/founder.jpg"
                  alt="Chandni Di — Founder"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-5 left-4 right-4">
                  <p className="text-sm font-bold text-white">Chandni Di</p>
                  <p className="text-xs text-white/75">
                    Founder &amp; Advocate
                  </p>
                </div>
              </div>

              {/* ── Top-right photo ── */}
              <div className="absolute right-0 top-4 h-[44%] w-[43%] overflow-hidden rounded-[1.5rem] border-4 border-white shadow-xl">
                <Image
                  src="/images/hero_hug.jpg"
                  alt="Chandni Di with a child"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* ── Bottom-right photo ── */}
              <div className="absolute bottom-4 right-0 h-[44%] w-[43%] overflow-hidden rounded-[1.5rem] border-4 border-white shadow-xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Children learning"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* ── Fourth image — small floating badge-style (bottom-left of collage) ── */}
              <div className="absolute -bottom-5 left-[52%] z-20 h-[80px] w-[80px] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                <Image
                  src="/images/hero_chandni_red.jpg"
                  alt="Chandni Di at an event"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* ── Presidential badge in gap ── */}
              <div className="absolute right-[42%] top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-yellow-200 bg-white px-3 py-2.5 shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-yellow-600" />
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-wide text-neutral-800">
                      Presidential
                    </p>
                    <p className="text-[10px] text-neutral-500">
                      Recognition × 2
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Dotted decorative ring (top-right background) ── */}
              <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full border-2 border-dashed border-brand-300/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
