"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Target,
  Sparkles,
  Users,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  School,
  ArrowRight,
} from "lucide-react";

export default function BridgeProgrammeSection() {
  return (
    <div
      id="bridge"
      className="scroll-mt-28 relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-xl sm:p-10 lg:p-12"
    >
      {/* Subtle Warm Gradient Accent */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-amber-100/25 blur-3xl" />

      <div className="relative space-y-12 sm:space-y-14">
        {/* Top Hero Grid: Left Content + Right Real Photography */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column (7 cols): Badges, Title, Story, Objective & CTA */}
          <div className="space-y-6 lg:col-span-7">
            {/* Stage & Target Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-800 border border-brand-200/80 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600 animate-pulse" />
                Stage 01 • Foundational
              </span>
              <span className="rounded-full bg-neutral-100 px-3.5 py-1 text-xs font-semibold text-neutral-700 border border-neutral-200/80">
                Age Group: 5–12 Years
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                Bridge Programme
              </h2>
              <p className="font-serif text-lg italic text-brand-700 sm:text-xl">
                Helping Children Take Their First Step Towards Formal Education
              </p>
            </div>

            {/* Primary Objective Banner */}
            <div className="flex items-start gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs sm:text-sm text-neutral-800">
              <Target className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-neutral-900 uppercase tracking-wide text-[11px] block text-amber-900">
                  Primary Objective
                </span>
                <span className="font-medium text-neutral-800 leading-snug">
                  School readiness and mainstream school admission into government Hindi-medium and private English-medium schools.
                </span>
              </div>
            </div>

            {/* Descriptive Story Paragraphs from Document */}
            <div className="space-y-3.5 text-base leading-relaxed text-neutral-700 sm:text-lg">
              <p>
                Many children from underserved communities may not have had the
                opportunity to begin formal education or may require additional
                academic preparation before entering school.
              </p>
              <p className="text-sm text-neutral-600 sm:text-base">
                The Bridge Programme identifies children who want to study and
                supports them in developing the foundational knowledge and
                learning habits required for formal education.
              </p>
            </div>

            {/* CTA Button Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/get-involved#donate"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-800 hover:shadow-lg"
              >
                <Heart className="h-4 w-4 fill-white" />
                <span>Support a Child&apos;s Education</span>
              </Link>
              <a
                href="#bridge-steps"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-700 hover:text-brand-700 transition-colors"
              >
                <span>View How It Works</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Authentic Classroom Photography with Floating Badges */}
          <div className="relative lg:col-span-5">
            <div className="group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <Image
                src="/images/bridge_programme.jpg"
                alt="Young Indian children learning to read with their teacher in a bridge classroom"
                width={800}
                height={600}
                className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[420px]"
                priority
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

              {/* Floating Top Badge */}
              <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-brand-800 shadow-md backdrop-blur-md border border-white/50">
                100% Free Foundation
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/40 p-3.5 backdrop-blur-md border border-white/20 text-white">
                <div className="text-xs font-bold tracking-wide uppercase text-amber-300">
                  Community Classrooms
                </div>
                <div className="text-xs text-white/90 mt-0.5">
                  Building literacy, numeracy &amp; daily study habits for first-generation learners.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Process Grid: "How the Programme Works" */}
        <div id="bridge-steps" className="scroll-mt-28 space-y-6 pt-4 border-t border-neutral-100">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Operational Framework
              </div>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                How the Programme Works
              </h3>
            </div>
            <p className="max-w-md text-xs text-neutral-500 sm:text-sm">
              A structured 4-step pathway transitioning children from community outreach into formal schools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-300 hover:bg-white hover:shadow-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-sm font-extrabold text-brand-700">
                    01
                  </span>
                  <Users className="h-5 w-5 text-neutral-400 group-hover:text-brand-600 transition-colors" />
                </div>
                <h4 className="font-serif text-base font-bold text-neutral-900">
                  Community Identification
                </h4>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  We identify children and families who wish to pursue education through door-to-door community engagement.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-brand-700">
                Step 1 • Identification
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-sm font-extrabold text-amber-800">
                    02
                  </span>
                  <BookOpen className="h-5 w-5 text-neutral-400 group-hover:text-amber-600 transition-colors" />
                </div>
                <h4 className="font-serif text-base font-bold text-neutral-900">
                  Academic Preparation
                </h4>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  Children receive structured learning support through our programme, helping them build essential foundational skills.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-amber-800">
                Step 2 • Foundation
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#1B3828]/40 hover:bg-white hover:shadow-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-sm font-extrabold text-[#1B3828]">
                    03
                  </span>
                  <School className="h-5 w-5 text-neutral-400 group-hover:text-[#1B3828] transition-colors" />
                </div>
                <h4 className="font-serif text-base font-bold text-neutral-900">
                  School Readiness
                </h4>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  The programme prepares children for admission into mainstream schools (Govt Hindi-medium &amp; Pvt English-medium).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-[#1B3828]">
                Step 3 • Admission
              </div>
            </div>

            {/* Step 4 */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-400 hover:bg-white hover:shadow-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-sm font-extrabold text-brand-800">
                    04
                  </span>
                  <CheckCircle2 className="h-5 w-5 text-neutral-400 group-hover:text-brand-700 transition-colors" />
                </div>
                <h4 className="font-serif text-base font-bold text-neutral-900">
                  Continued Support
                </h4>
                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  After school admission, children receive further assistance through our After-School Programme to ensure ongoing success.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-brand-800">
                Step 4 • Retention
              </div>
            </div>
          </div>
        </div>

        {/* Programme Goal Banner Card */}
        <div className="relative overflow-hidden rounded-2xl border border-brand-200/90 bg-gradient-to-r from-brand-50/90 via-[#FFF8F3] to-amber-50/70 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-800">
                <Sparkles className="h-4 w-4 text-brand-600" />
                <span>Programme Goal</span>
              </div>
              <p className="font-serif text-base italic leading-relaxed text-neutral-900 sm:text-lg">
                &ldquo;To help children transition into formal education and begin their academic journey with greater confidence and preparation.&rdquo;
              </p>
            </div>
            <Link
              href="/get-involved#donate"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-brand-800 sm:text-sm"
            >
              <Heart className="h-4 w-4 fill-white" />
              <span>Sponsor Admission</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
