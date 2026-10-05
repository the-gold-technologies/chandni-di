"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Heart } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Image with Pastel Organic Layered Circles & Floating Pill Card */}
        <div className="relative flex justify-center lg:col-span-5 lg:justify-start">
          {/* Overlapping Pastel / Earth-Tone Decorative Organic Circles Behind Image */}
          <div className="pointer-events-none absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full bg-[#F5DFD5]/80 sm:-left-8 sm:-top-8 sm:h-36 sm:w-36" />
          <div className="pointer-events-none absolute -left-10 top-20 -z-10 h-24 w-24 rounded-full bg-[#E2EBE8]/90" />
          <div className="pointer-events-none absolute -bottom-8 -left-6 -z-10 h-36 w-36 rounded-full bg-[#EFE8DF]/80" />

          {/* Main Portrait Card with Smooth Big Rounded Corners */}
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.2rem] border border-neutral-200/60 bg-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.09)] sm:aspect-[4/4] lg:aspect-[4/5]">
            <Image
              src="/images/founder.jpg"
              alt="Founder Chandni Di mentoring young students"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Subtle Gradient at Bottom for Depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Floating Pill Card (Bottom Right - Matching Reference Image Exactly) */}
            <Link
              href="/about#founder"
              className="group absolute bottom-5 right-5 z-20 flex transform items-center gap-3.5 rounded-2xl border border-white/90 bg-white/95 p-3 px-4 shadow-xl backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-2xl sm:bottom-6 sm:right-6"
            >
              <div className="text-left">
                <span className="block text-[10px] font-extrabold uppercase leading-tight tracking-widest text-brand-700">
                  FOUNDER
                </span>
                <span className="block pt-0.5 text-sm font-bold leading-tight text-neutral-900">
                  Chandni Di
                </span>
              </div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white shadow-sm transition-colors group-hover:bg-brand-800">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column: Editorial Typography, Brush Underline, and Exact Doc Content */}
        <div className="space-y-6 lg:col-span-7">
          <div className="space-y-3">
            {/* Eyebrow */}
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 sm:text-sm">
                MEET THE FOUNDER
              </span>
            </div>

            {/* Main Headline with Brush Underline Accent (Matching Reference) */}
            <h2 className="font-serif text-3xl font-bold leading-[1.18] tracking-tight text-neutral-900 sm:text-4xl lg:text-[42px]">
              One Life Experience. <br />A Commitment to{" "}
              <span className="relative inline-block font-serif italic text-brand-700">
                Thousands of Children.
                {/* Hand-Drawn Underline Stroke Curve */}
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand-700"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M3 9C50 3 150 3 197 8"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* Lead Highlight Line */}
          <h3 className="pt-1 text-lg font-bold leading-snug text-neutral-800 sm:text-xl">
            Chandni Di&apos;s work is rooted in lived experience.
          </h3>

          {/* Verbatim Paragraphs from Google Doc Section 1.5 */}
          <div className="space-y-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            <p>
              Having grown up in a slum herself, she understands the barriers
              that children from underserved communities can face. Her journey
              from surviving difficult circumstances to working for
              children&apos;s rights and education has shaped her commitment to
              creating opportunities for others.
            </p>
            <p>
              What began as a personal understanding of hardship has grown into
              a continuing effort to help children access education, develop
              skills, and build independent futures.
            </p>
          </div>

          {/* Presidential Honours Note */}
          <div className="flex items-center gap-3 rounded-2xl border border-[#ECE5DC] bg-[#FAF7F2] p-4 text-xs text-neutral-700 sm:text-sm">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <span className="font-bold text-neutral-900">
                Honoured by two former Presidents of India:
              </span>{" "}
              <span className="font-medium text-neutral-600">
                Shri Pranab Mukherjee & Shri Ram Nath Kovind
              </span>
              .
            </div>
          </div>

          {/* Handwritten Style Sign-off (Matching Reference) */}
          <div className="space-y-1 pt-2">
            <p className="text-sm font-semibold text-brand-700">
              We invite you to walk with us on this journey.
            </p>
            <div className="flex items-center gap-2 text-base sm:text-lg">
              <span className="font-serif font-bold italic text-neutral-900">
                Chandni Di
              </span>
              <span className="text-neutral-400">—</span>
              <span className="flex items-center gap-1.5 font-serif italic text-brand-700">
                Founder, Chandni Di
                <Heart className="inline h-3.5 w-3.5 fill-brand-700 text-brand-700" />
              </span>
            </div>
          </div>

          {/* CTA Link */}
          <div className="pt-2">
            <Link
              href="/about#founder"
              className="inline-flex transform items-center gap-2 rounded-full bg-[#1C1814] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-black hover:shadow-lg"
            >
              <span>Meet Chandni Di</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
