"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[580px] items-center overflow-hidden border-b border-neutral-200/60 bg-[#FAF7F2] lg:min-h-[640px] xl:min-h-[700px]">
      {/* Ambient Warm Glow (matching About page tone) */}
      <div className="pointer-events-none absolute -left-20 -top-24 -z-10 h-[500px] w-[500px] rounded-full bg-brand-100/30 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-[450px] w-[450px] rounded-full bg-amber-100/35 blur-3xl" />

      {/* Right Side Realistic Photographic Scene with Soft Ambient Blend */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-0 h-full w-full lg:w-[62%] xl:w-[60%]">
        <Image
          src="/images/hero_classroom_banner.jpg"
          alt="Chandni Di mentoring students in a sunlit classroom"
          fill
          priority
          className="object-cover object-right"
        />
        {/* Soft horizontal gradient overlay in matching #FAF7F2 tone to blend seamlessly into the left */}
        <div className="lg:via-42% absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/95 via-35% to-transparent lg:via-[#FAF7F2]/85" />
        {/* Subtle top and bottom blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/30 via-transparent to-[#FAF7F2]/40" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-xl space-y-6 sm:space-y-7 lg:max-w-3xl">
          {/* Eyebrow Tag: Exactly "YOUR FUTURE. OUR PRIORITY." (Redundant text removed) */}
          <div className="inline-flex items-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 sm:text-sm">
              YOUR FUTURE. OUR PRIORITY.
            </span>
          </div>

          {/* Main Headline: Exactly 3 Lines */}
          <h1 className="text-3xl font-extrabold leading-[1.14] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px]">
            <span className="block whitespace-normal sm:inline sm:whitespace-nowrap">
              A Child&apos;s Circumstances
            </span>{" "}
            <br />
            <span className="whitespace-nowrap text-brand-700">
              Should Never
            </span>{" "}
            <br />
            <span className="whitespace-nowrap text-brand-700">
              Define Their Future.
            </span>
          </h1>

          {/* Supporting Copy */}
          <div className="max-w-xl space-y-3">
            <p className="text-base font-normal leading-relaxed text-neutral-700 sm:text-lg lg:text-xl">
              We work with children from slum and street communities, providing
              education, academic support, counselling, skill development, and
              career guidance—from their first steps into learning to their
              journey towards independence.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
              Through sustained support, we help children access opportunities,
              build confidence, and become part of mainstream society.
            </p>
          </div>

          {/* Single / Primary Prominent Action Button (Pill button with arrow matching reference) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/get-involved#donate"
              className="inline-flex transform items-center justify-center gap-3 rounded-full bg-brand-700 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-xl hover:shadow-brand-700/25 sm:text-base"
            >
              <span>SUPPORT A CHILD</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm font-bold text-neutral-900 transition-colors hover:text-brand-700 sm:text-base"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Presidential Honours Callout */}
          <div className="flex items-center gap-3 border-t border-neutral-200/70 pt-6 text-xs text-neutral-600 sm:text-sm">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-neutral-900">
                Founder Chandni Di
              </span>{" "}
              honoured by two former Presidents of India:{" "}
              <span className="font-medium text-neutral-700">
                Shri Pranab Mukherjee & Shri Ram Nath Kovind
              </span>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
