"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  Compass,
  GraduationCap,
  Sparkles,
  Briefcase,
  TrendingUp,
} from "lucide-react";

export default function CollegeToCareerSection() {
  return (
    <div
      id="college-to-career"
      className="scroll-mt-28 space-y-10 rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-card sm:p-12 lg:p-16"
    >
      {/* Header Row */}
      <div className="flex flex-col justify-between gap-6 border-b border-neutral-100 pb-8 lg:flex-row lg:items-start">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-serif text-4xl font-extrabold text-[#1B3828]">
              3.3
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              Higher Education &amp; Careers
            </span>
            <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-semibold text-neutral-600">
              Full Scholarships &amp; Employability
            </span>
          </div>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            College to Career Programme
          </h2>
          <p className="text-lg font-medium text-[#1B3828]">
            Connecting Higher Education With Future Opportunities
          </p>
        </div>

        {/* CTA Button from Doc: Support Higher Education */}
        <Link
          href="/get-involved#donate"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-800 hover:shadow-lg sm:text-sm"
        >
          <Heart className="h-4 w-4 fill-white" />
          <span>Support Higher Education</span>
        </Link>
      </div>

      {/* Intro Paragraphs from Doc */}
      <div className="max-w-4xl space-y-3 text-base leading-relaxed text-neutral-700 sm:text-lg">
        <p className="font-semibold text-neutral-900">
          Education should open doors to opportunities beyond graduation.
        </p>
        <p>
          The College to Career Programme supports students as they transition
          from school to higher education and prepare for professional life.
        </p>
        <p className="text-sm text-neutral-600 sm:text-base">
          We help students explore educational opportunities based on their
          interests, skills, and aspirations, while providing support to pursue
          suitable courses and colleges.
        </p>
      </div>

      {/* What We Do: 4 Key Pillars from Doc */}
      <div className="space-y-6">
        <h3 className="font-serif text-xl font-bold text-neutral-900 sm:text-2xl">
          What We Do
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Pillar 1: College Guidance */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-[#FBF9F5] p-6 shadow-sm transition-all hover:border-emerald-300">
            <div className="space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <Compass className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-neutral-900">
                College Guidance
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                We help identify suitable colleges and educational pathways
                based on a student&apos;s interests, abilities, and academic
                journey.
              </p>
            </div>
          </div>

          {/* Pillar 2: Financial Support */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-[#FBF9F5] p-6 shadow-sm transition-all hover:border-emerald-300">
            <div className="space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-neutral-900">
                Financial Support
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Eligible students receive assistance towards their educational
                fees, including sponsorship of the full fee where applicable.
              </p>
            </div>
          </div>

          {/* Pillar 3: Skill Development */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-[#FBF9F5] p-6 shadow-sm transition-all hover:border-emerald-300">
            <div className="space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <Sparkles className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-neutral-900">
                Skill Development
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Students receive opportunities to develop additional skills
                aligned with their interests and potential career paths.
              </p>
            </div>
          </div>

          {/* Pillar 4: Career Preparation */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-[#FBF9F5] p-6 shadow-sm transition-all hover:border-emerald-300">
            <div className="space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                <Briefcase className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-neutral-900">
                Career Preparation
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                We work towards helping students make informed career choices
                and build relevant capabilities for future employment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Future Direction Callout from Doc */}
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 sm:flex-row sm:items-center sm:p-7">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1B3828] text-white">
          <TrendingUp className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h4 className="font-serif text-base font-bold text-neutral-900 sm:text-lg">
            Our Future Direction
          </h4>
          <p className="text-sm leading-relaxed text-neutral-700">
            Employment support and corporate internships are part of our planned
            expansion, with the aim of helping students gain practical exposure
            and prepare for professional opportunities.
          </p>
        </div>
      </div>

      {/* Programme Goal Box */}
      <div className="rounded-2xl border-l-4 border-[#1B3828] bg-emerald-50/70 p-5 sm:p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-900">
          Our Goal
        </div>
        <p className="mt-1.5 font-serif text-base italic leading-relaxed text-neutral-800 sm:text-lg">
          &ldquo;To help students move from higher education towards meaningful
          career pathways with greater confidence and preparation.&rdquo;
        </p>
      </div>
    </div>
  );
}
