"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Heart } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image with Pastel Organic Layered Circles & Floating Pill Card */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
          {/* Overlapping Pastel / Earth-Tone Decorative Organic Circles Behind Image */}
          <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#F5DFD5]/80 pointer-events-none -z-10" />
          <div className="absolute top-20 -left-10 w-24 h-24 rounded-full bg-[#E2EBE8]/90 pointer-events-none -z-10" />
          <div className="absolute -bottom-8 -left-6 w-36 h-36 rounded-full bg-[#EFE8DF]/80 pointer-events-none -z-10" />

          {/* Main Portrait Card with Smooth Big Rounded Corners */}
          <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] w-full max-w-md rounded-[2.2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.09)] border border-neutral-200/60 bg-neutral-100">
            <Image
              src="/images/founder.jpg"
              alt="Founder Chandni Di mentoring young students"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Subtle Gradient at Bottom for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

            {/* Floating Pill Card (Bottom Right - Matching Reference Image Exactly) */}
            <Link
              href="/about#founder"
              className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 px-4 shadow-xl border border-white/90 flex items-center gap-3.5 z-20 group hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              <div className="text-left">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D96B27] block leading-tight">
                  FOUNDER
                </span>
                <span className="text-sm font-bold text-neutral-900 block leading-tight pt-0.5">
                  Chandni Di
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#D96B27] text-white flex items-center justify-center shrink-0 group-hover:bg-[#C45E28] transition-colors shadow-sm">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column: Editorial Typography, Brush Underline, and Exact Doc Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            {/* Eyebrow */}
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D96B27]">
                MEET THE FOUNDER
              </span>
            </div>

            {/* Main Headline with Brush Underline Accent (Matching Reference) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 font-serif tracking-tight leading-[1.18]">
              One Life Experience. <br />A Commitment to{" "}
              <span className="relative inline-block italic font-serif text-[#D96B27]">
                Thousands of Children.
                {/* Hand-Drawn Underline Stroke Curve */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#D96B27]"
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
          <h3 className="text-lg sm:text-xl font-bold text-neutral-800 pt-1 leading-snug">
            Chandni Di&apos;s work is rooted in lived experience.
          </h3>

          {/* Verbatim Paragraphs from Google Doc Section 1.5 */}
          <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
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
          <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#ECE5DC] flex items-center gap-3 text-xs sm:text-sm text-neutral-700">
            <div className="w-8 h-8 rounded-full bg-[#FCECE3] text-[#D96B27] flex items-center justify-center shrink-0">
              <Award className="w-4 h-4" />
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
          <div className="pt-2 space-y-1">
            <p className="text-sm font-semibold text-[#D96B27]">
              We invite you to walk with us on this journey.
            </p>
            <div className="flex items-center gap-2 text-base sm:text-lg">
              <span className="font-serif italic font-bold text-neutral-900">
                Chandni Di
              </span>
              <span className="text-neutral-400">—</span>
              <span className="font-serif italic text-[#D96B27] flex items-center gap-1.5">
                Founder, Chandni Di
                <Heart className="w-3.5 h-3.5 fill-[#D96B27] text-[#D96B27] inline" />
              </span>
            </div>
          </div>

          {/* CTA Link */}
          <div className="pt-2">
            <Link
              href="/about#founder"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1C1814] hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>Meet Chandni Di</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
