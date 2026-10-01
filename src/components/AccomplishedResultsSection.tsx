"use client";

import React from "react";
import Image from "next/image";
import { Users, GraduationCap, Heart, School } from "lucide-react";

export default function AccomplishedResultsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-8 sm:py-12 border-y border-[#ECE5DC]">
      {/* Top Center Geometric Chevron Accent (Matching Color Theme) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-4 overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 160 16" fill="none" className="w-40 h-4">
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
      <div className="absolute top-8 right-8 sm:right-14 pointer-events-none opacity-70">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading, Subtitle, Founder Quote Card, and Child Doodle */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-3.5">
              {/* Eyebrow from Document Section 1.3 */}
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D96B27]" />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D96B27]">
                  1.3 IMPACT STATISTICS
                </span>
              </div>

              {/* Main Headline verbatim from Google Doc */}
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-black text-[#1C1814] font-serif tracking-tight leading-[1.15]">
                Together, We Are <br />
                <span className="text-[#D96B27]">Creating Pathways</span> <br />
                to Opportunity
              </h2>

              {/* Exact Copy verbatim from Google Doc */}
              <p className="text-base sm:text-lg text-[#5C534A] leading-relaxed font-normal pt-1 max-w-md">
                Every number represents a child, a family, and a journey that
                continues beyond the classroom.
              </p>
            </div>

            {/* Testimonial Badge Card (Dark badge with decorative edges) */}
            <div className="relative bg-[#1A1613] text-white rounded-2xl p-4 sm:p-4.5 overflow-hidden shadow-xl border border-[#2E2822] max-w-md">
              {/* Decorative Corner Chevron Borders */}
              <div className="absolute bottom-0 right-0 w-14 h-7 pointer-events-none opacity-85">
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
              <div className="absolute top-0 left-0 w-11 h-5.5 pointer-events-none opacity-85">
                <svg viewBox="0 0 48 24" fill="none">
                  <path d="M0 0L16 16L32 0" stroke="#E65100" strokeWidth="4" />
                  <path d="M16 0L32 16L48 0" stroke="#2E7D32" strokeWidth="4" />
                </svg>
              </div>

              <div className="flex items-center gap-3.5 relative z-10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#D96B27]/70 shadow">
                  <Image
                    src="/images/founder.jpg"
                    alt="Chandni Di"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm font-medium text-neutral-100 italic leading-snug">
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
            <div className="pt-1 pl-1">
              <svg
                width="160"
                height="140"
                viewBox="0 0 170 150"
                fill="none"
                stroke="#54493F"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform -rotate-1"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1: 500 Children who have become part of mainstream society */}
              <div className="bg-white rounded-2xl p-6 sm:p-6.5 shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-[#ECE5DC] hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#E5ECE4] flex items-center justify-center text-[#2E7D32] group-hover:scale-105 transition-transform">
                    <School className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-black text-[#2E7D32] font-serif">
                      500
                    </div>
                    <h3 className="text-base font-bold text-[#1F1914] leading-snug">
                      Mainstreamed Into Society
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B6258] leading-relaxed">
                    Children who have become part of mainstream society.
                  </p>
                </div>
              </div>

              {/* Card 2: 370 Students currently studying in school and college */}
              <div className="bg-white rounded-2xl p-6 sm:p-6.5 shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-[#ECE5DC] hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#FCECE3] flex items-center justify-center text-[#D96B27] group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-black text-[#D96B27] font-serif">
                      370
                    </div>
                    <h3 className="text-base font-bold text-[#1F1914] leading-snug">
                      In School and College
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B6258] leading-relaxed">
                    Students currently studying in school and college.
                  </p>
                </div>
              </div>

              {/* Card 3: 136 Children's education completely adopted */}
              <div className="bg-white rounded-2xl p-6 sm:p-6.5 shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-[#ECE5DC] hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#EAF2ED] flex items-center justify-center text-[#1E7E5A] group-hover:scale-105 transition-transform">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-black text-[#1E7E5A] font-serif">
                      136
                    </div>
                    <h3 className="text-base font-bold text-[#1F1914] leading-snug">
                      Completely Adopted
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B6258] leading-relaxed">
                    Children&apos;s education completely adopted.
                  </p>
                </div>
              </div>

              {/* Card 4: 10 Centres across Delhi-NCR */}
              <div className="bg-white rounded-2xl p-6 sm:p-6.5 shadow-[0_8px_24px_rgba(0,0,0,0.03)] border border-[#ECE5DC] hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#F9F3DF] flex items-center justify-center text-[#9C7513] group-hover:scale-105 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-black text-[#9C7513] font-serif">
                      10 Centres
                    </div>
                    <h3 className="text-base font-bold text-[#1F1914] leading-snug">
                      Community Centres
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B6258] leading-relaxed">
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
