"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Newspaper, Sparkles, Tv } from "lucide-react";

export default function MediaHero() {
  return (
    <section className="relative flex items-center overflow-hidden border-b border-neutral-200/60 bg-[#FAF7F2]">
      {/* Subtle background ambient blurs (Exact match to Contact & About Us pages) */}
      <div className="pointer-events-none absolute -left-32 -top-32 z-0 h-[400px] w-[400px] rounded-full bg-brand-100/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 z-0 h-[350px] w-[350px] rounded-full bg-amber-100/30 blur-3xl" />

      {/* Full-width SVG line vectors & ambient dots — matching Contact page */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="120" cy="80" r="3" fill="#D96B27" opacity="0.18" />
        <circle cx="145" cy="100" r="2" fill="#D96B27" opacity="0.14" />
        <circle cx="96" cy="108" r="1.5" fill="#D96B27" opacity="0.12" />
        <circle cx="850" cy="120" r="2.5" fill="#D96B27" opacity="0.15" />
      </svg>

      {/* Right Side Realistic Photographic Scene with Soft Horizontal Ambient Blend — Matching Contact Hero */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-0 h-full w-full lg:w-[60%] xl:w-[58%]">
        <Image
          src="/images/media_gnt_exclusive.png"
          alt="Good News Today national television feature covering Chandni Di Foundation"
          fill
          priority
          className="object-cover object-center lg:object-right"
        />
        {/* Soft horizontal gradient overlay in matching #FAF7F2 tone to blend seamlessly into the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/95 via-35% to-transparent lg:via-[#FAF7F2]/85" />
        {/* Subtle top and bottom blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/30 via-transparent to-[#FAF7F2]/40" />
      </div>

      {/* Main Content Container (Reduced Height: compact padding) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 lg:px-8 lg:pb-12 lg:pt-36">
        <div className="max-w-xl space-y-5 sm:space-y-6 lg:max-w-2xl">
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

          {/* Eyebrow Tag matching Contact page style */}
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-200">
              <Sparkles className="h-3.5 w-3.5 text-brand-700" />
              National &amp; Global Spotlight
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl font-extrabold leading-[1.14] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-[46px]">
            In the Media:{" "}
            <span className="font-serif italic text-brand-700">
              Stories of Hope &amp; Change
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-xl text-sm font-normal leading-relaxed text-neutral-700 sm:text-base">
            Explore national television broadcasts, investigative print reports,
            Wikipedia biographies, and documentary features highlighting Chandni
            Di Foundation&apos;s transformative mission to break poverty cycles
            through education for street children.
          </p>

          {/* Action Button */}
          <div className="pt-1">
            <a
              href="#media-coverage"
              className="inline-flex transform items-center justify-center gap-2.5 rounded-full bg-brand-700 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-xl hover:shadow-brand-700/25 sm:text-sm"
            >
              <Newspaper className="h-4 w-4" />
              <span>Browse All Coverage</span>
            </a>
          </div>

          {/* 4 Smaller Logo Boxes (Reduced Height, Compact Cards with Company Logos) */}
          <div className="pt-2">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {/* Box 1: 10+ Features */}
              <div className="shadow-2xs flex items-center gap-2.5 rounded-xl border border-neutral-200/80 bg-white/90 px-3 py-2 backdrop-blur-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-200">
                  <Tv className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <span className="block truncate text-xs font-bold text-neutral-900">
                    10+ Features
                  </span>
                  <span className="block truncate text-[10px] text-neutral-500">
                    TV &amp; Print
                  </span>
                </div>
              </div>

              {/* Box 2: Wikipedia */}
              <a
                href="https://en.wikipedia.org/wiki/Chandni_Khan"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-2xs group flex items-center gap-2.5 rounded-xl border border-neutral-200/80 bg-white/90 px-3 py-2 backdrop-blur-sm transition-all hover:border-brand-300 hover:bg-white"
              >
                <div className="shadow-xs flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-white">
                  <span className="font-serif text-sm font-black leading-none">
                    W
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="block truncate text-xs font-bold text-neutral-900 group-hover:text-brand-700">
                    Wikipedia
                  </span>
                  <span className="block truncate text-[10px] text-neutral-500">
                    Official Record
                  </span>
                </div>
              </a>

              {/* Box 3: India Today */}
              <a
                href="https://twitter.com/IndiaToday/status/1479126001904865281?t=8UQ0TK8-FCAJhh3LK8LuyQ&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-2xs group flex items-center gap-2.5 rounded-xl border border-neutral-200/80 bg-white/90 px-3 py-2 backdrop-blur-sm transition-all hover:border-brand-300 hover:bg-white"
              >
                <div className="shadow-xs flex h-8 w-8 shrink-0 flex-col items-center justify-center rounded-lg bg-[#E51B24] p-0.5 text-white">
                  <span className="text-[7px] font-black uppercase leading-tight tracking-tight">
                    INDIA
                  </span>
                  <span className="text-[7px] font-black uppercase leading-tight tracking-tight">
                    TODAY
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="block truncate text-xs font-bold text-neutral-900 group-hover:text-brand-700">
                    India Today
                  </span>
                  <span className="block truncate text-[10px] text-neutral-500">
                    Broadcast
                  </span>
                </div>
              </a>

              {/* Box 4: Dainik Jagran */}
              <a
                href="https://dainik-b.in/ZZBYy4srBnb"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-2xs group flex items-center gap-2.5 rounded-xl border border-neutral-200/80 bg-white/90 px-3 py-2 backdrop-blur-sm transition-all hover:border-brand-300 hover:bg-white"
              >
                <div className="shadow-xs flex h-8 w-8 shrink-0 flex-col items-center justify-center rounded-lg bg-[#E0292B] p-0.5 text-white">
                  <span className="text-[7px] font-black leading-tight">
                    दैनिक
                  </span>
                  <span className="text-[7px] font-black leading-tight">
                    जागरण
                  </span>
                </div>
                <div className="min-w-0">
                  <span className="block truncate text-xs font-bold text-neutral-900 group-hover:text-brand-700">
                    Dainik Jagran
                  </span>
                  <span className="block truncate text-[10px] text-neutral-500">
                    Ground Report
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
