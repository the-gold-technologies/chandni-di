"use client";

import React from "react";

export default function ImpactHeroSection() {
  return (
    <section className="hero-radial-bg border-b border-neutral-200/60 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          {/* Eyebrow */}
          <div>
            <span className="shadow-xs inline-flex items-center gap-1.5 rounded-full border border-brand-200/60 bg-brand-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-700" />
              Our Impact
            </span>
          </div>

          {/* Headline verbatim from Google Doc */}
          <h1 className="font-serif text-4xl font-extrabold leading-[1.18] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Measuring Our Work Through the{" "}
            <span className="relative inline-block text-brand-700">
              Journeys We Help Build
              {/* Hand-Drawn Brush Underline */}
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-brand-700/80"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9C55 3 150 3 197 8"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle verbatim from Google Doc */}
          <p className="pt-2 text-base leading-relaxed text-neutral-600 sm:text-lg lg:text-xl">
            Our impact is reflected not only in the number of children we
            support, but also in their continued education, personal growth, and
            access to new opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
