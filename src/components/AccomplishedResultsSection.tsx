"use client";

import React from "react";
import Image from "next/image";
import { Users, GraduationCap, Heart, School } from "lucide-react";

export default function AccomplishedResultsSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#ECE5DC] bg-[#FAF7F2] py-8 sm:py-12">
      {/* Top Center Geometric Chevron Accent (Matching Color Theme) */}
      <div className="absolute left-1/2 top-0 flex h-4 w-44 -translate-x-1/2 items-center justify-center overflow-hidden">
        <svg viewBox="0 0 160 16" fill="none" className="h-4 w-40">
          <path
            d="M0 0L10 10L20 0L30 10L40 0L50 10L60 0L70 10L80 0L90 10L100 0L110 10L120 0L130 10L140 0L150 10L160 0"
            stroke="#D96B27"
            strokeWidth="3"
          />
          <path
            d="M10 0L20 10L30 0L40 10L50 0L60 10L70 0L80 10L90 0L100 10L110 0L120 10L130 0L140 10L150 0"
            stroke="#2E7D32"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Playful Top-Right Cloud Doodles */}
      <div className="pointer-events-none absolute right-8 top-8 opacity-70 sm:right-14">
        <svg
          width="130"
          height="65"
          viewBox="0 0 140 75"
          fill="none"
          stroke="#6E6257"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Cloud 1 */}
          <path d="M80 38c-2-7-9-12-17-12-2 0-5 1-7 2-3-8-11-14-20-14-12 0-22 10-22 22 0 2 0 4 1 6-6 2-9 8-9 14 0 9 8 16 17 16h51c9 0 17-7 17-16 0-6-3-11-9-13z" />
          {/* Smaller Cloud 2 */}
          <path d="M110 20c-1-3-4-5-8-5-1 0-2 0-3 1-2-4-5-6-9-6-6 0-11 5-11 11 0 1 0 2 1 3-3 1-4 4-4 7 0 4 4 8 8 8h24c4 0 8-4 8-8 0-3-2-5-4-6z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Subtitle, Founder Quote Card, and Child Doodle */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
            <div className="space-y-3.5">
              {/* Eyebrow from Document Section 1.3 */}
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#D96B27]" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#D96B27] sm:text-sm">
                  1.3 IMPACT STATISTICS
                </span>
              </div>

              {/* Main Headline verbatim from Google Doc */}
              <h2 className="font-serif text-3xl font-black leading-[1.15] tracking-tight text-[#1C1814] sm:text-4xl lg:text-[38px]">
                Together, We Are <br />
                <span className="text-[#D96B27]">Creating Pathways</span> <br />
                to Opportunity
              </h2>

              {/* Exact Copy verbatim from Google Doc */}
              <p className="max-w-md pt-1 text-base font-normal leading-relaxed text-[#5C534A] sm:text-lg">
                Every number represents a child, a family, and a journey that
                continues beyond the classroom.
              </p>
            </div>

            {/* Testimonial Badge Card (Dark badge with decorative edges) */}
            <div className="sm:p-4.5 relative max-w-md overflow-hidden rounded-2xl border border-[#2E2822] bg-[#1A1613] p-4 text-white shadow-xl">
              {/* Decorative Corner Chevron Borders */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-7 w-14 opacity-85">
                <svg viewBox="0 0 64 32" fill="none">
                  <path
                    d="M64 32L48 16L32 32"
                    stroke="#2E7D32"
                    strokeWidth="4"
                  />
                  <path
                    d="M48 32L32 16L16 32"
                    stroke="#E65100"
                    strokeWidth="4"
                  />
                  <path
                    d="M32 32L16 16L0 32"
                    stroke="#F57F17"
                    strokeWidth="4"
                  />
                </svg>
              </div>
              <div className="h-5.5 pointer-events-none absolute left-0 top-0 w-11 opacity-85">
                <svg viewBox="0 0 48 24" fill="none">
                  <path d="M0 0L16 16L32 0" stroke="#E65100" strokeWidth="4" />
                  <path d="M16 0L32 16L48 0" stroke="#2E7D32" strokeWidth="4" />
                </svg>
              </div>

              <div className="relative z-10 flex items-center gap-3.5">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#D96B27]/70 shadow">
                  <Image
                    src="/images/founder.jpg"
                    alt="Chandni Di"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-medium italic leading-snug text-neutral-100 sm:text-sm">
                    “No child deserves to have their future limited by the
                    circumstances of their birth.”
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                    <span className="font-bold text-[#E67E22]">Chandni Di</span>
                    <span className="text-neutral-400">·</span>
                    <span className="text-neutral-300">
                      Founder & Grassroots Worker
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hand-Drawn Doodle Illustration of Two Children Holding Hands */}
            <div className="pl-1 pt-1">
              <svg
                width="160"
                height="140"
                viewBox="0 0 170 150"
                fill="none"
                stroke="#54493F"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="-rotate-1 transform"
              >
                {/* Child 1 (Left - Taller with collar) */}
                <circle cx="55" cy="40" r="22" />
                <circle cx="48" cy="36" r="2" fill="#54493F" />
                <circle cx="62" cy="36" r="2" fill="#54493F" />
                <path d="M47 45c3 4 13 4 16 0" />
                <path d="M55 18c-2-5 3-7 1-11" />
                <path d="M48 62l7 6 7-6" stroke="#D96B27" strokeWidth="2.6" />
                <path d="M42 63l-10 18 6 3 6-12v35h22v-35l6 12 6-3-10-18z" />
                <path d="M38 72l-14 10" />
                <circle cx="21" cy="84" r="3" />
                <path d="M45 107v22l-6 3" />
                <path d="M59 107v22l6 3" />
                <path d="M66 82l25 6" />

                {/* Child 2 (Right - Smaller with spike hair) */}
                <circle cx="108" cy="50" r="16" />
                <circle cx="103" cy="48" r="1.8" fill="#54493F" />
                <circle cx="113" cy="48" r="1.8" fill="#54493F" />
                <path d="M103 55c2 3 8 3 10 0" />
                <path d="M104 34l3-8 3 8 4-6 2 7" />
                <path d="M98 66l18-2 3 24h-24z" />
                <path d="M119 72l12 10" />
                <circle cx="133" cy="83" r="2.5" />
                <path d="M102 88v24l-4 2" />
                <path d="M112 88v24l4 2" />
              </svg>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of 4 Clean White Rounded Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Card 1: 500 Children who have become part of mainstream society */}
              <div className="sm:p-6.5 group flex flex-col justify-between rounded-2xl border border-[#ECE5DC] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)]">
                <div className="space-y-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5ECE4] text-[#2E7D32] transition-transform group-hover:scale-105">
                    <School className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-serif text-3xl font-black text-[#2E7D32]">
                      500
                    </div>
                    <h3 className="text-base font-bold leading-snug text-[#1F1914]">
                      Mainstreamed Into Society
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-[#6B6258] sm:text-sm">
                    Children who have become part of mainstream society.
                  </p>
                </div>
              </div>

              {/* Card 2: 370 Students currently studying in school and college */}
              <div className="sm:p-6.5 group flex flex-col justify-between rounded-2xl border border-[#ECE5DC] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)]">
                <div className="space-y-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FCECE3] text-[#D96B27] transition-transform group-hover:scale-105">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-serif text-3xl font-black text-[#D96B27]">
                      370
                    </div>
                    <h3 className="text-base font-bold leading-snug text-[#1F1914]">
                      In School and College
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-[#6B6258] sm:text-sm">
                    Students currently studying in school and college.
                  </p>
                </div>
              </div>

              {/* Card 3: 136 Children's education completely adopted */}
              <div className="sm:p-6.5 group flex flex-col justify-between rounded-2xl border border-[#ECE5DC] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)]">
                <div className="space-y-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF2ED] text-[#1E7E5A] transition-transform group-hover:scale-105">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-serif text-3xl font-black text-[#1E7E5A]">
                      136
                    </div>
                    <h3 className="text-base font-bold leading-snug text-[#1F1914]">
                      Completely Adopted
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-[#6B6258] sm:text-sm">
                    Children&apos;s education completely adopted.
                  </p>
                </div>
              </div>

              {/* Card 4: 10 Centres across Delhi-NCR */}
              <div className="sm:p-6.5 group flex flex-col justify-between rounded-2xl border border-[#ECE5DC] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)]">
                <div className="space-y-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F9F3DF] text-[#9C7513] transition-transform group-hover:scale-105">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-serif text-3xl font-black text-[#9C7513]">
                      10 Centres
                    </div>
                    <h3 className="text-base font-bold leading-snug text-[#1F1914]">
                      Community Centres
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-[#6B6258] sm:text-sm">
                    Centres across Delhi-NCR connecting children to mainstream
                    society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
