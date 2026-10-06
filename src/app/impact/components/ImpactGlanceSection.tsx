"use client";

import React from "react";
import Image from "next/image";
import { Users, GraduationCap, HeartHandshake } from "lucide-react";

const impactStats = [
  {
    id: "mainstreamed",
    value: "500+",
    label: "Children",
    description: "Children mainstreamed into formal schooling",
    icon: (
      <Users className="h-5 w-5 text-brand-700 sm:h-6 sm:w-6" strokeWidth={2} />
    ),
    tag: "Mainstreamed",
  },
  {
    id: "studying",
    value: "370",
    label: "Students",
    description: "Students studying across school and college",
    icon: (
      <GraduationCap
        className="h-5 w-5 text-amber-600 sm:h-6 sm:w-6"
        strokeWidth={2}
      />
    ),
    tag: "Active Scholars",
  },
  {
    id: "adopted",
    value: "136",
    label: "Children",
    description: "Children with education completely adopted",
    icon: (
      <HeartHandshake
        className="h-5 w-5 text-emerald-600 sm:h-6 sm:w-6"
        strokeWidth={2}
      />
    ),
    tag: "Full Adoption",
  },
];

export default function ImpactGlanceSection() {
  return (
    <section
      style={{ backgroundColor: "#F9F7F2" }}
      className="relative w-full overflow-hidden border-y border-[#EDE5DA] bg-[#F9F7F2] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left Column: Heading with Brush Underline, Handwritten Note, Hand Doodles, and Metrics */}
          <div className="space-y-6 sm:space-y-7 lg:col-span-6 xl:col-span-6">
            <div className="space-y-3.5">
              {/* Eyebrow & Handwritten tag */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="shadow-xs inline-flex items-center gap-1.5 rounded-full border border-brand-200/80 bg-brand-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-brand-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-700" />
                  4.1 IMPACT AT A GLANCE
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-serif text-3xl font-extrabold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] xl:text-[48px]">
                Together, We{" "}
                <span className="font-serif text-brand-700">Create Impact</span>
              </h2>

              {/* Exact Google Doc Subtitle */}
              <p className="max-w-lg pt-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
                Behind every number is a child whose educational journey has
                been supported through consistent assistance, opportunities, and
                care.
              </p>
            </div>

            {/* Vertical Stack of Metrics with Hand-Drawn Sparkles & Circular Badges */}
            {/* Vertical Stack of Metrics matching reference layout directly on the background */}
            <div className="space-y-6 pt-3 sm:space-y-7">
              {impactStats.map((stat) => (
                <div
                  key={stat.id}
                  className="gap-4.5 group flex items-center sm:gap-5"
                >
                  {/* Circular Icon Container */}
                  <div className="h-13 w-13 shadow-xs flex shrink-0 items-center justify-center rounded-full border border-neutral-300/90 bg-white transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                    {stat.icon}
                  </div>

                  {/* Value on Top, Label/Description underneath */}
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-serif text-2xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-3xl">
                        {stat.value}
                      </span>
                      <span className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                        {stat.tag}
                      </span>
                    </div>
                    <div className="text-xs font-medium leading-snug text-neutral-500 sm:text-sm">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Compact, Proportionate 3 Stacked Images with Playful Doodles */}
          <div className="relative flex justify-center lg:col-span-6 xl:col-span-6">
            {/* Playful Hand-Drawn Doodle Star (Top-Right Corner) */}
            <div className="pointer-events-none absolute -top-5 right-2 z-20 text-[#E24A4A] opacity-90 sm:-top-7 sm:right-6">
              <svg
                width="38"
                height="38"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2L26.5 15.5L40 16.5L29.5 25.5L33.5 39L22 30.5L10.5 39L14.5 25.5L4 16.5L17.5 15.5L22 2Z"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Playful Curving Yellow Ribbon / Swirl Doodle (Bottom-Left Corner) */}
            <div className="pointer-events-none absolute -bottom-5 -left-4 z-20 text-[#E5A84B] opacity-90 sm:-bottom-6 sm:-left-6">
              <svg
                width="72"
                height="72"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 65C25 45 40 40 55 55C70 70 85 65 90 45C95 25 80 15 65 20C50 25 45 45 55 60C65 75 80 80 95 85"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* 3 Compact Stacked Photo Banners (Sized Proportionately to Left Column) */}
            <div className="flex w-full max-w-lg flex-col gap-3 sm:gap-3.5">
              {/* Photo 1: Children learning enthusiastically in classroom */}
              <div className="shadow-xs relative h-24 w-full overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-100 sm:h-28 sm:rounded-2xl lg:h-32">
                <Image
                  src="/images/cta_learning_children.jpg"
                  alt="Children learning in classroom"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>

              {/* Photo 2: Students with founder Chandni Di */}
              <div className="shadow-xs relative h-24 w-full overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-100 sm:h-28 sm:rounded-2xl lg:h-32">
                <Image
                  src="/images/founder.jpg"
                  alt="Chandni Di mentoring young students"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>

              {/* Photo 3: Higher education and youth career opportunities */}
              <div className="shadow-xs relative h-24 w-full overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-100 sm:h-28 sm:rounded-2xl lg:h-32">
                <Image
                  src="/images/college_to_career.jpg"
                  alt="Higher education and skill building"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
