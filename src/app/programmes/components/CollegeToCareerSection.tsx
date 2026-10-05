"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Compass,
  GraduationCap,
  Sparkles,
  Briefcase,
  TrendingUp,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function CollegeToCareerSection() {
  return (
    <div
      id="college-to-career"
      className="scroll-mt-28 relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-xl sm:p-10 lg:p-12"
    >
      {/* Subtle Warm Gradient Accent */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-100/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-100/25 blur-3xl" />

      <div className="relative space-y-12 sm:space-y-14">
        {/* Top Hero Grid: Left Content + Right Real Campus Photography */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column (7 cols): Badges, Title, Story, Objective & CTA */}
          <div className="space-y-6 lg:col-span-7">
            {/* Stage Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-900 border border-emerald-200/80 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Stage 03 • Higher Education &amp; Careers
              </span>
              <span className="rounded-full bg-neutral-100 px-3.5 py-1 text-xs font-semibold text-neutral-700 border border-neutral-200/80">
                Undergraduate &amp; Vocational
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                College to Career Programme
              </h2>
              <p className="font-serif text-lg italic text-[#1B3828] sm:text-xl">
                Connecting Higher Education With Future Opportunities
              </p>
            </div>

            {/* Mandate Banner */}
            <div className="flex items-start gap-3 rounded-2xl border border-emerald-200/80 bg-emerald-50/70 p-4 text-xs sm:text-sm text-neutral-800">
              <GraduationCap className="h-5 w-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-neutral-900 uppercase tracking-wide text-[11px] block text-emerald-950">
                  Higher Education Mandate
                </span>
                <span className="font-medium text-neutral-800 leading-snug">
                  100% college fee sponsorships, mentorship, career pathway identification, and corporate internship linkages.
                </span>
              </div>
            </div>

            {/* Narrative Paragraphs from Doc */}
            <div className="space-y-3.5 text-base leading-relaxed text-neutral-700 sm:text-lg">
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

            {/* CTA Button Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/get-involved#donate"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-800 hover:shadow-lg"
              >
                <Heart className="h-4 w-4 fill-white" />
                <span>Support Higher Education</span>
              </Link>
              <a
                href="#college-pillars"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-700 hover:text-brand-700 transition-colors"
              >
                <span>View What We Do</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Authentic Campus & Graduate Photography */}
          <div className="relative lg:col-span-5">
            <div className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <Image
                src="/images/college_to_career.jpg"
                alt="Confident Indian college students and fresh graduates on university campus with laptops and books"
                width={800}
                height={600}
                className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[420px]"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

              {/* Floating Top Badge */}
              <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-emerald-950 shadow-md backdrop-blur-md border border-white/50">
                100% Scholarships
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/40 p-3.5 backdrop-blur-md border border-white/20 text-white">
                <div className="text-xs font-bold tracking-wide uppercase text-emerald-300">
                  University &amp; Professional Life
                </div>
                <div className="text-xs text-white/90 mt-0.5">
                  Full degrees, vocational skill training &amp; practical corporate internships.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do: 4 Key Pillars Grid */}
        <div id="college-pillars" className="scroll-mt-28 space-y-6 pt-4 border-t border-neutral-100">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1B3828]">
                Programme Pillars
              </div>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                What We Do
              </h3>
            </div>
            <p className="max-w-md text-xs text-neutral-500 sm:text-sm">
              Empowering students from admission to degrees and employment readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Pillar 1: College Guidance */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:bg-white hover:shadow-md">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 shadow-2xs">
                  <Compass className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-neutral-900">
                  College Guidance
                </h4>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  We help identify suitable colleges and educational pathways based on each student&apos;s interests, abilities, and academic journey.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-emerald-800">
                Pillar 1 • Admissions
              </div>
            </div>

            {/* Pillar 2: Financial Support */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:bg-white hover:shadow-md">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 shadow-2xs">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-neutral-900">
                  Financial Support
                </h4>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Eligible students receive assistance towards their educational fees, including <strong>sponsorship of the full 100% fee</strong> where applicable.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-emerald-800">
                Pillar 2 • Scholarships
              </div>
            </div>

            {/* Pillar 3: Skill Development */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:bg-white hover:shadow-md">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 shadow-2xs">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-neutral-900">
                  Skill Development
                </h4>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Students receive opportunities to develop technical, soft, and modern digital skills aligned with their interests and career paths.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-emerald-800">
                Pillar 3 • Modern Skills
              </div>
            </div>

            {/* Pillar 4: Career Preparation */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:bg-white hover:shadow-md">
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 shadow-2xs">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-neutral-900">
                  Career Preparation
                </h4>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  We work towards helping students make informed career choices, prepare resume/interview skills, and build capabilities for sustainable employment.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-emerald-800">
                Pillar 4 • Placement
              </div>
            </div>
          </div>
        </div>

        {/* Our Future Direction Callout */}
        <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/60 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
            <Building2 className="h-4 w-4 text-emerald-700" />
            <span>Our Future Direction</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base">
            Employment support and corporate internships are part of our planned expansion, with the aim of helping students gain practical exposure and prepare for professional opportunities.
          </p>
        </div>

        {/* Programme Goal Banner Card */}
        <div className="relative overflow-hidden rounded-2xl border border-emerald-200/90 bg-gradient-to-r from-emerald-50/90 via-[#F7FAF8] to-brand-50/70 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B3828]">
                <Sparkles className="h-4 w-4 text-emerald-700" />
                <span>Our Goal</span>
              </div>
              <p className="font-serif text-base italic leading-relaxed text-neutral-900 sm:text-lg">
                &ldquo;To help students move from higher education towards meaningful career pathways with greater confidence and preparation.&rdquo;
              </p>
            </div>
            <Link
              href="/get-involved#donate"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-brand-800 sm:text-sm"
            >
              <Heart className="h-4 w-4 fill-white" />
              <span>Support Scholarships</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
