"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Send, Heart } from "lucide-react";

export default function CtaBannerSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EDE8DE] bg-[#F8F5EE] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] sm:p-10 lg:p-12">
        {/* Decorative Muted Sage Foliage / Leaf in Bottom-Left Corner */}
        <div className="pointer-events-none absolute -bottom-8 -left-6 opacity-60">
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

        <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Eyebrow, Headline, Paragraphs, Action Buttons */}
          <div className="space-y-6 lg:col-span-6">
            <div className="space-y-3.5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 sm:text-sm">
                1.6 GET INVOLVED
              </span>

              <h2 className="font-serif text-3xl font-bold leading-[1.16] tracking-tight text-[#1C1814] sm:text-4xl lg:text-[44px]">
                You Can Be Part of <br />a Child&apos;s Journey.
              </h2>
            </div>

            <div className="max-w-lg space-y-3 text-sm leading-relaxed text-[#5C534A] sm:text-base">
              <p>
                Change can begin with a contribution, a few hours of your time,
                a partnership, or the decision to support a child&apos;s
                education.
              </p>
              <p className="text-xs text-[#7D7368] sm:text-sm">
                Whether you are an individual, organisation, volunteer, or CSR
                partner, there are meaningful ways to contribute.
              </p>
            </div>

            {/* Action Buttons (Following exact dark pill button pattern) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Red Pill Button */}
              <Link
                href="/get-involved#donate"
                className="inline-flex transform items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg"
              >
                <span>Donate Now</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {/* Secondary White Pill Button */}
              <Link
                href="/get-involved#volunteer"
                className="inline-flex transform items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-md"
              >
                <span>Volunteer With Us</span>
                <ArrowUpRight className="h-4 w-4 text-neutral-500" />
              </Link>

              {/* Partner Link */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-bold uppercase tracking-wider text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-brand-700"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Arch Shape + Sunburst Rays + Floating Polaroid Card */}
          <div className="relative flex justify-center lg:col-span-6 lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Sunburst Doodle Rays on Top-Left of Arch */}
              <div className="pointer-events-none absolute -left-4 -top-4 z-10 sm:-left-6 sm:-top-6">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M10 24H2M14 14L8 8M24 10V2M34 14L40 8"
                    stroke="#C62828"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Large Arch / Oval Masked Photo */}
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[4rem_4rem_2.5rem_2.5rem] border-4 border-white/80 bg-neutral-200 shadow-2xl sm:aspect-[16/10]">
                <Image
                  src="/images/hero_hug.jpg"
                  alt="Chandni Di embracing smiling student"
                  fill
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              {/* Floating Tilted Polaroid Card (Bottom Right - Matching Reference Image) */}
              <div className="absolute -bottom-4 right-2 z-20 rotate-6 transform rounded-2xl border border-neutral-100 bg-white p-4 shadow-2xl transition-transform hover:rotate-2 sm:bottom-2 sm:right-4 sm:p-5">
                <div className="select-none space-y-0.5 text-center font-serif text-xs font-semibold italic text-neutral-800 sm:text-sm">
                  <div>Every</div>
                  <div>Child</div>
                  <div>Deserves</div>
                  <div>A Future</div>
                  <div className="flex justify-center pt-1">
                    <Heart className="h-3.5 w-3.5 fill-brand-700 text-brand-700" />
                  </div>
                </div>
              </div>

              {/* Subtle Bottom-Right Subtitle (TRAVEL · PEOPLE · PURPOSE style) */}
              <div className="pt-5 text-right">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 sm:text-xs">
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
