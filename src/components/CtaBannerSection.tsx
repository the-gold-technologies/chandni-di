"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Send, Heart } from "lucide-react";

export default function CtaBannerSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="relative bg-[#F8F5EE] rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-[#EDE8DE] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
        {/* Decorative Muted Sage Foliage / Leaf in Bottom-Left Corner */}
        <div className="absolute -bottom-8 -left-6 pointer-events-none opacity-60">
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            className="text-[#9EABA2]"
          >
            <path
              d="M30 140C20 110 35 70 65 60C85 53 105 65 110 85C115 105 100 130 75 135C50 140 40 140 30 140Z"
              fill="currentColor"
              opacity="0.8"
            />
            <path
              d="M75 145C85 115 110 95 130 100C145 103 150 120 145 135C140 150 120 160 100 158C85 156 80 150 75 145Z"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M20 90C15 65 35 40 55 45C70 48 75 65 65 80C55 95 30 105 20 90Z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Column: Eyebrow, Headline, Paragraphs, Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3.5">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D96B27]">
                1.6 GET INVOLVED
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-serif text-[#1C1814] tracking-tight leading-[1.16]">
                You Can Be Part of <br />a Child&apos;s Journey.
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-[#5C534A] leading-relaxed max-w-lg">
              <p>
                Change can begin with a contribution, a few hours of your time,
                a partnership, or the decision to support a child&apos;s
                education.
              </p>
              <p className="text-xs sm:text-sm text-[#7D7368]">
                Whether you are an individual, organisation, volunteer, or CSR
                partner, there are meaningful ways to contribute.
              </p>
            </div>

            {/* Action Buttons (Matching Reference Design: Dark Pill + White Pill) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Primary Button (Dark Pill with Arrow) */}
              <Link
                href="/get-involved#donate"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1F3D36] hover:bg-[#162D28] text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span>Donate Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary Button (White Pill with Terracotta Icon) */}
              <Link
                href="/get-involved#volunteer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200/90 font-bold text-sm tracking-wide shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-[#D96B27]" />
                <span>Volunteer With Us</span>
              </Link>

              {/* Partner Link */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-700 hover:text-[#D96B27] underline decoration-neutral-300 underline-offset-4 transition-colors px-2 py-1"
              >
                <span>Partner With Us →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Arch Shape + Sunburst Rays + Floating Polaroid Card */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Sunburst Doodle Rays on Top-Left of Arch */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 pointer-events-none z-10">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M10 24H2M14 14L8 8M24 10V2M34 14L40 8"
                    stroke="#D96B27"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Large Arch / Oval Masked Photo */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-[4rem_4rem_2.5rem_2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 bg-neutral-200">
                <Image
                  src="/images/hero_hug.jpg"
                  alt="Chandni Di embracing smiling student"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Tilted Polaroid Card (Bottom Right - Matching Reference Image) */}
              <div className="absolute -bottom-4 right-2 sm:bottom-2 sm:right-4 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-neutral-100 rotate-6 transform transition-transform hover:rotate-2 z-20">
                <div className="text-center font-serif italic space-y-0.5 text-neutral-800 text-xs sm:text-sm font-semibold select-none">
                  <div>Every</div>
                  <div>Child</div>
                  <div>Deserves</div>
                  <div>A Future</div>
                  <div className="pt-1 flex justify-center">
                    <Heart className="w-3.5 h-3.5 text-[#D96B27] fill-[#D96B27]" />
                  </div>
                </div>
              </div>

              {/* Subtle Bottom-Right Subtitle (TRAVEL · PEOPLE · PURPOSE style) */}
              <div className="pt-5 text-right">
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-neutral-400">
                  EDUCATION · DIGNITY · FUTURE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
