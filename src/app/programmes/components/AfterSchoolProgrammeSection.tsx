"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  Smile,
  Sparkles,
  Receipt,
  CheckCircle2,
} from "lucide-react";

export default function AfterSchoolProgrammeSection() {
  return (
    <div
      id="after-school"
      className="scroll-mt-28 space-y-10 rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-card sm:p-12 lg:p-16"
    >
      {/* Header Row */}
      <div className="flex flex-col justify-between gap-6 border-b border-neutral-100 pb-8 lg:flex-row lg:items-start">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-serif text-4xl font-extrabold text-[#D97706]">
              3.2
            </span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              Classes 1 to 12
            </span>
            <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-semibold text-neutral-600">
              Academic Retention &amp; Holistic Well-Being
            </span>
          </div>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            After-School Programme
          </h2>
          <p className="text-lg font-medium text-[#B45309]">
            Helping Children Continue Learning, Growing, and Believing in
            Themselves
          </p>
        </div>

        {/* CTA Button from Doc: Help a Child Continue School */}
        <Link
          href="/get-involved#donate"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-800 hover:shadow-lg sm:text-sm"
        >
          <Heart className="h-4 w-4 fill-white" />
          <span>Help a Child Continue School</span>
        </Link>
      </div>

      {/* Intro Paragraphs from Doc */}
      <div className="max-w-4xl space-y-3 text-base leading-relaxed text-neutral-700 sm:text-lg">
        <p>
          Entering school is only one part of a child&apos;s educational
          journey. Continued support can help children strengthen their
          learning, manage challenges, and develop the confidence to progress.
        </p>
        <p className="text-sm font-medium text-neutral-600 sm:text-base">
          The After-School Programme provides academic and developmental
          assistance to children enrolled in school.
        </p>
      </div>

      {/* What We Provide: 4 Structured Pillars from Doc */}
      <div className="space-y-6">
        <h3 className="font-serif text-xl font-bold text-neutral-900 sm:text-2xl">
          What We Provide
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Pillar 1: Academic Support */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-[#FBF9F5] p-6 shadow-sm transition-all hover:border-amber-300">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
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
          </div>

          {/* Pillar 2: Counselling and Well-Being */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-[#FBF9F5] p-6 shadow-sm transition-all hover:border-amber-300">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
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
          </div>

          {/* Pillar 3: Skill and Personality Development */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-[#FBF9F5] p-6 shadow-sm transition-all hover:border-amber-300">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
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
          </div>

          {/* Pillar 4: Educational Financial Support */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-[#FBF9F5] p-6 shadow-sm transition-all hover:border-amber-300">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                <Receipt className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-neutral-900">
                Financial Support
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                We sponsor approximately <strong>50–100%</strong> of school fees
                for eligible children, depending on their circumstances and
                support requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programme Goal Box */}
      <div className="rounded-2xl border-l-4 border-[#D97706] bg-amber-50/70 p-5 sm:p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
          Our Goal
        </div>
        <p className="mt-1.5 font-serif text-base italic leading-relaxed text-neutral-800 sm:text-lg">
          &ldquo;To help children remain engaged in education, strengthen their
          capabilities, and develop the confidence needed to move
          forward.&rdquo;
        </p>
      </div>
    </div>
  );
}
