"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  ArrowRight,
  Award,
  MapPin,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { STORIES_OF_CHANGE } from "@/data/ngoData";

export default function StoriesListSection() {
  return (
    <>
      {/* ── 1. Upper Section: Stories of Change Cards (Warm Ivory BG) ── */}
      <section
        id="stories-list"
        className="scroll-mt-24 bg-[#FAF7F2]/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl space-y-3.5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/80">
              Lived Experiences &amp; Real Impact
            </span>

            <h2 className="font-serif text-3xl font-extrabold leading-[1.2] tracking-tight text-neutral-900 sm:text-4xl lg:text-[42px]">
              From Slum Classrooms to{" "}
              <span className="font-serif italic text-brand-700">
                University Degrees
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              These are not hypothetical statistics. Explore real journeys of
              determined scholars who overcame extreme adversity with persistent
              coaching, school sponsorship, and dedicated mentorship.
            </p>
          </div>

          {/* Tactile, Premium Story Card Grid */}
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {STORIES_OF_CHANGE.map((story) => (
              <Link
                key={story.id}
                href={`/stories-of-change/${story.id}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200/90 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-[0_20px_42px_rgba(217,107,39,0.14)]"
              >
                {/* Edge-to-Edge Image Header with subtle hover zoom */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={story.image}
                    alt={`Portrait of ${story.name}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Floating Category Pill */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-neutral-900 shadow-md backdrop-blur-md">
                      <GraduationCap className="h-3.5 w-3.5 text-brand-700" />
                      <span>{story.category || "Scholar"}</span>
                    </span>
                  </div>

                  {/* Student Name & University Overlaid on Image Bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="font-serif text-2xl font-bold tracking-tight drop-shadow-sm">
                      {story.name}
                    </h3>
                    <div className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-neutral-200">
                      <MapPin className="h-3 w-3 shrink-0 text-brand-300" />
                      <span className="truncate">{story.institution}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div className="space-y-3.5">
                    {/* Academic Feat & Course Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-900 ring-1 ring-brand-200/70">
                        <span>{story.course}</span>
                      </span>
                      {story.academicFeats?.[0] && (
                        <span className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-900 ring-1 ring-amber-200/70">
                          <Award className="h-3 w-3 text-amber-700" />
                          <span>{story.academicFeats[0]}</span>
                        </span>
                      )}
                    </div>

                    {/* Story Headline */}
                    <h4 className="font-serif text-lg font-bold leading-snug text-neutral-900 transition-colors group-hover:text-brand-700">
                      {story.title}
                    </h4>

                    {/* Concise Narrative Excerpt */}
                    <p className="line-clamp-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                      {story.excerpt || story.story}
                    </p>
                  </div>

                  {/* Bottom Row: Smaller Rounded Button + Repositioned Sponsored Tag */}
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-neutral-100 pt-4">
                    {/* Smaller Rounded Pill Button */}
                    <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-700 px-5 py-2 text-xs font-bold text-white shadow-xs transition-all duration-300 group-hover:bg-brand-800 group-hover:shadow-md whitespace-nowrap">
                      <span>Read Full Story</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>

                    {/* Clean Sponsored Tag (Moved from top image) */}
                    {story.fundingStatus && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-200/80">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        <span>Sponsored</span>
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Lower Section: Systemic Grassroots Impact Milestones (Pure White BG) ── */}
      <section className="border-t border-neutral-200/80 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Systemic Grassroots Impact
            </span>
            <h3 className="mt-1 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              The Ripple Effect Across Slum Communities
            </h3>
            <p className="mt-2 text-xs text-neutral-600 sm:text-sm">
              Each student who enters higher education becomes a living role
              model, inspiring dozens of younger siblings and neighbours to
              choose classrooms over child labour.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* 1. Bridge to Formal Schools */}
            <div className="rounded-2xl border border-neutral-200/90 bg-[#FAF7F2]/60 p-6 shadow-xs transition-all hover:border-brand-200 hover:bg-white hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h4 className="mt-4 font-serif text-lg font-bold text-neutral-900">
                500+ Mainstreamed
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Children who started without the ability to hold a pencil are
                now thriving in formal government and private schools across
                Delhi-NCR.
              </p>
            </div>

            {/* 2. First-Generation Scholars */}
            <div className="rounded-2xl border border-neutral-200/90 bg-[#FAF7F2]/60 p-6 shadow-xs transition-all hover:border-brand-200 hover:bg-white hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="mt-4 font-serif text-lg font-bold text-neutral-900">
                First-Generation Graduates
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Over 136 families have had their first member complete Class 12
                and enter formal degree courses, permanently altering family
                economic trajectories.
              </p>
            </div>

            {/* 3. Girl Child Protection */}
            <div className="rounded-2xl border border-neutral-200/90 bg-[#FAF7F2]/60 p-6 shadow-xs transition-all hover:border-brand-200 hover:bg-white hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="mt-4 font-serif text-lg font-bold text-neutral-900">
                Zero Girl Child Dropouts
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Dedicated counseling and 100% fee sponsorships ensure adolescent
                girls stay in classrooms, preventing early marriages and child
                labour.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
