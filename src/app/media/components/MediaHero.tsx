"use client";

import React from "react";
import Link from "next/link";
import { Newspaper, Sparkles, Tv, Award, ExternalLink } from "lucide-react";

export default function MediaHero() {
  return (
    <section className="hero-radial-bg relative overflow-hidden border-b border-neutral-200/70 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-40">
      {/* Decorative ambient elements */}
      <div className="pointer-events-none absolute -left-28 -top-20 h-96 w-96 rounded-full bg-brand-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
          <Link href="/" className="transition-colors hover:text-brand-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Impact</span>
          <span>/</span>
          <span className="font-bold text-brand-700">Media &amp; Press</span>
        </div>

        {/* Hero Headline & Intro */}
        <div className="mt-8 max-w-3xl space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/80">
            <Sparkles className="h-3.5 w-3.5 text-brand-700" />
            National &amp; Global Spotlight
          </span>

          <h1 className="font-serif text-3xl font-extrabold leading-[1.15] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            In the Media:{" "}
            <span className="text-brand-700">Stories of Hope &amp; Change</span>
          </h1>

          <p className="text-base leading-relaxed text-neutral-600 sm:text-lg lg:text-xl">
            Explore national news coverage, televised broadcasts, print
            features, and documentary films highlighting Chandni Di&apos;s
            transformative mission to educate street children across India.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#media-coverage"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md sm:text-sm"
            >
              <Newspaper className="h-4 w-4" />
              <span>Browse All Coverage</span>
            </a>

            <a
              href="mailto:contact@chandnidi.org?subject=Press%20or%20Media%20Inquiry%20-%20Chandni%20Di%20Foundation"
              className="shadow-2xs inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-700 transition-all hover:bg-neutral-50 hover:text-neutral-900 sm:text-sm"
            >
              <span>Press Inquiries</span>
              <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Quick Media Stats Row */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-neutral-200/70 pt-8 sm:grid-cols-4 lg:gap-6">
          <div className="shadow-2xs rounded-2xl border border-neutral-200/80 bg-white/80 p-4 backdrop-blur-sm sm:p-5">
            <span className="font-serif text-2xl font-black text-brand-700 sm:text-3xl">
              10+
            </span>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-neutral-800">
              National Features
            </p>
            <p className="mt-0.5 text-[11px] text-neutral-500">
              TV broadcasts &amp; print news
            </p>
          </div>

          <div className="shadow-2xs rounded-2xl border border-neutral-200/80 bg-white/80 p-4 backdrop-blur-sm sm:p-5">
            <span className="font-serif text-2xl font-black text-brand-700 sm:text-3xl">
              Wikipedia
            </span>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-neutral-800">
              Documented Entry
            </p>
            <p className="mt-0.5 text-[11px] text-neutral-500">
              Official biographical page
            </p>
          </div>

          <div className="shadow-2xs rounded-2xl border border-neutral-200/80 bg-white/80 p-4 backdrop-blur-sm sm:p-5">
            <span className="font-serif text-2xl font-black text-brand-700 sm:text-3xl">
              India Today
            </span>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-neutral-800">
              Prime-Time Spotlight
            </p>
            <p className="mt-0.5 text-[11px] text-neutral-500">
              GNT TV special interview
            </p>
          </div>

          <div className="shadow-2xs rounded-2xl border border-neutral-200/80 bg-white/80 p-4 backdrop-blur-sm sm:p-5">
            <span className="font-serif text-2xl font-black text-brand-700 sm:text-3xl">
              Dainik Jagran
            </span>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-neutral-800">
              Frontline Report
            </p>
            <p className="mt-0.5 text-[11px] text-neutral-500">
              Hindi national daily report
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
