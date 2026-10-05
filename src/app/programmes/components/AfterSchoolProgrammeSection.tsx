"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  Smile,
  Sparkles,
  Receipt,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function AfterSchoolProgrammeSection() {
  return (
    <div
      id="after-school"
      className="scroll-mt-28 relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-xl sm:p-10 lg:p-12"
    >
      {/* Subtle Warm Gradient Accent */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-amber-100/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-100/25 blur-3xl" />

      <div className="relative space-y-12 sm:space-y-14">
        {/* Top Hero Grid: Left Real Photography + Right Content (Alternating Layout) */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column (5 cols): Authentic Tutoring Photography */}
          <div className="relative order-2 lg:order-1 lg:col-span-5">
            <div className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <Image
                src="/images/after_school_programme.jpg"
                alt="Indian school students gathered around a study desk with their mentor in an after-school coaching library"
                width={800}
                height={600}
                className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[420px]"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

              {/* Floating Top Badge */}
              <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-amber-900 shadow-md backdrop-blur-md border border-white/50">
                50%–100% Fee Grant
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/40 p-3.5 backdrop-blur-md border border-white/20 text-white">
                <div className="text-xs font-bold tracking-wide uppercase text-amber-300">
                  After-School Centers
                </div>
                <div className="text-xs text-white/90 mt-0.5">
                  Daily subject coaching, emotional counselling &amp; holistic personality growth.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Badges, Title, Story & CTA */}
          <div className="order-1 space-y-6 lg:order-2 lg:col-span-7">
            {/* Stage Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900 border border-amber-200/80 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse" />
                Stage 02 • Continuity &amp; Support
              </span>
              <span className="rounded-full bg-neutral-100 px-3.5 py-1 text-xs font-semibold text-neutral-700 border border-neutral-200/80">
                Classes 1 to 12
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                After-School Programme
              </h2>
              <p className="font-serif text-lg italic text-[#B45309] sm:text-xl">
                Helping Children Continue Learning, Growing, and Believing in Themselves
              </p>
            </div>

            {/* Key Focus Banner */}
            <div className="flex items-start gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs sm:text-sm text-neutral-800">
              <TrendingUp className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-neutral-900 uppercase tracking-wide text-[11px] block text-amber-900">
                  Programme Mandate
                </span>
                <span className="font-medium text-neutral-800 leading-snug">
                  Comprehensive academic tutoring, mental counselling, and 50–100% school fee sponsorships to stop dropouts.
                </span>
              </div>
            </div>

            {/* Introductory Context from Doc */}
            <div className="space-y-3.5 text-base leading-relaxed text-neutral-700 sm:text-lg">
              <p>
                Entering school is only one part of a child&apos;s educational
                journey. Continued support can help children strengthen their
                learning, manage challenges, and develop the confidence to progress.
              </p>
              <p className="text-sm text-neutral-600 sm:text-base">
                The After-School Programme provides academic and developmental
                assistance to children enrolled in school.
              </p>
            </div>

            {/* CTA Button Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/get-involved#donate"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-800 hover:shadow-lg"
              >
                <Heart className="h-4 w-4 fill-white" />
                <span>Help a Child Continue School</span>
              </Link>
              <a
                href="#after-school-pillars"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-700 hover:text-brand-700 transition-colors"
              >
                <span>Explore What We Provide</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* What We Provide: 4 Structured Pillars Grid */}
        <div id="after-school-pillars" className="scroll-mt-28 space-y-6 pt-4 border-t border-neutral-100">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Core Support Framework
              </div>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                What We Provide
              </h3>
            </div>
            <p className="max-w-md text-xs text-neutral-500 sm:text-sm">
              Four comprehensive pillars ensuring children stay enrolled, excel academically, and thrive emotionally.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Pillar 1: Academic Support */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-md">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 shadow-2xs">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-neutral-900">
                  Academic Support
                </h4>
                <ul className="space-y-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Tuition and subject-based assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Strengthening foundational concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Support for school learning and academic progress</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-amber-800">
                Pillar 1 • Tuition
              </div>
            </div>

            {/* Pillar 2: Counselling and Well-Being */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-md">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 shadow-2xs">
                  <Smile className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-neutral-900">
                  Counselling &amp; Well-Being
                </h4>
                <ul className="space-y-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Mental and emotional support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Counselling for children</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Engagement with parents and relevant stakeholders</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-amber-800">
                Pillar 2 • Well-Being
              </div>
            </div>

            {/* Pillar 3: Skill and Personality Development */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-md">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 shadow-2xs">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-neutral-900">
                  Skill &amp; Personality
                </h4>
                <ul className="space-y-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Opportunities to develop skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Confidence-building support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                    <span>Activities that encourage personal growth</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-amber-800">
                Pillar 3 • Growth
              </div>
            </div>

            {/* Pillar 4: Educational Financial Support */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-md">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 shadow-2xs">
                  <Receipt className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-neutral-900">
                  Fee Scholarships
                </h4>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  We sponsor approximately <strong>50–100%</strong> of school fees for eligible children, depending on their family circumstances and support requirements.
                </p>
                <div className="rounded-xl bg-amber-50 p-3 border border-amber-200/60 text-xs font-bold text-amber-900">
                  Ensuring financial hardship never ends a child&apos;s schooling.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-amber-800">
                Pillar 4 • Financial Aid
              </div>
            </div>
          </div>
        </div>

        {/* Programme Goal Banner Card */}
        <div className="relative overflow-hidden rounded-2xl border border-amber-200/90 bg-gradient-to-r from-amber-50/90 via-[#FFFDF7] to-brand-50/70 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                <Sparkles className="h-4 w-4 text-amber-700" />
                <span>Our Goal</span>
              </div>
              <p className="font-serif text-base italic leading-relaxed text-neutral-900 sm:text-lg">
                &ldquo;To help children remain engaged in education, strengthen their capabilities, and develop the confidence needed to move forward.&rdquo;
              </p>
            </div>
            <Link
              href="/get-involved#donate"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-brand-800 sm:text-sm"
            >
              <Heart className="h-4 w-4 fill-white" />
              <span>Sponsor School Fees</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
