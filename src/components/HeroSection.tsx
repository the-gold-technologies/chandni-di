"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF5F5] via-[#FFF8F8] to-[#FFF1F1] min-h-[580px] lg:min-h-[640px] xl:min-h-[700px] flex items-center border-b border-brand-100/80">
      {/* Ambient Reddish Glow (Matching the Red & Black Brand Logo Palette) */}
      <div className="absolute -top-24 -left-20 w-[550px] h-[550px] bg-brand-700/[0.07] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-brand-700/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] bg-brand-700/[0.05] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Right Side Realistic Photographic Scene with Soft Reddish Ambient Blend */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[60%] h-full z-0 pointer-events-none">
        <Image
          src="/images/hero_classroom_banner.jpg"
          alt="Chandni Di mentoring students in a sunlit classroom"
          fill
          priority
          className="object-cover object-right"
        />
        {/* Soft horizontal gradient overlay in dim reddish tone to blend seamlessly into the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8F8] via-[#FFF8F8]/95 via-35% lg:via-[#FFF8F8]/85 lg:via-42% to-transparent" />
        {/* Subtle top and bottom blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5F5]/30 via-transparent to-[#FFF5F5]/40" />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
        <div className="max-w-xl lg:max-w-3xl space-y-6 sm:space-y-7">
          {/* Eyebrow Tag: Exactly "YOUR FUTURE. OUR PRIORITY." (Redundant text removed) */}
          <div className="inline-flex items-center">
            <span className="text-brand-700 font-extrabold uppercase tracking-widest text-xs sm:text-sm">
              YOUR FUTURE. OUR PRIORITY.
            </span>
          </div>

          {/* Main Headline: Exactly 3 Lines */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold text-neutral-900 tracking-tight leading-[1.14]">
            <span className="block sm:inline whitespace-normal sm:whitespace-nowrap">
              A Child&apos;s Circumstances
            </span>{" "}
            <br />
            <span className="text-brand-700 whitespace-nowrap">
              Should Never
            </span>{" "}
            <br />
            <span className="text-brand-700 whitespace-nowrap">
              Define Their Future.
            </span>
          </h1>

          {/* Supporting Copy */}
          <div className="space-y-3 max-w-xl">
            <p className="text-base sm:text-lg lg:text-xl text-neutral-700 font-normal leading-relaxed">
              We work with children from slum and street communities, providing
              education, academic support, counselling, skill development, and
              career guidance—from their first steps into learning to their
              journey towards independence.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Through sustained support, we help children access opportunities,
              build confidence, and become part of mainstream society.
            </p>
          </div>

          {/* Single / Primary Prominent Action Button (Pill button with arrow matching reference) */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-md hover:shadow-xl hover:shadow-brand-700/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>SUPPORT A CHILD</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 px-6 py-4 text-neutral-900 hover:text-brand-700 font-bold text-sm sm:text-base transition-colors"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Presidential Honours Callout */}
          <div className="pt-6 border-t border-brand-200/50 flex items-center gap-3 text-xs sm:text-sm text-neutral-600">
            <div className="w-7 h-7 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 shrink-0">
              <Award className="w-4 h-4" />
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
