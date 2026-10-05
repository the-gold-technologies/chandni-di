"use client";

import React from "react";
import { Eye, Target } from "lucide-react";

export default function AboutMissionVisionSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
        {/* Card 1: Our Vision (Deep Forest Green Theme) */}
        <div className="relative flex flex-col justify-start overflow-hidden rounded-[2.5rem] bg-[#1B3828] p-8 shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,0,0,0.12)] sm:p-10 lg:p-12">
          {/* Subtle Top-Right Corner Circle Overlay (Matching Reference) */}
          <div className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-white/[0.08]" />

          {/* Top Left Icon Pill (Gold circular badge with Eye icon) */}
          <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#E5A84B] shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-transform hover:scale-105">
            <Eye className="h-6 w-6 text-[#1A1613]" strokeWidth={2.2} />
          </div>

          {/* Headline */}
          <h2 className="relative mb-5 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[40px]">
            Our Vision
          </h2>

          {/* Copy (Clear, inspiring, verbatim & accessible) */}
          <p className="relative max-w-xl text-base font-normal leading-relaxed text-emerald-50/90 sm:text-[17px]">
            We envision a society where children from slum and street
            communities have access to education, opportunities, and the support
            they need to build independent, fulfilling, and dignified futures.
            Our long-term goal is to help children move beyond survival towards
            learning, growth, professional opportunities, and active
            participation in mainstream society.
          </p>
        </div>

        {/* Card 2: Our Mission (Rich Brand Red Theme) */}
        <div className="relative flex flex-col justify-start overflow-hidden rounded-[2.5rem] bg-[#8C1B23] p-8 shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,0,0,0.12)] sm:p-10 lg:p-12">
          {/* Subtle Bottom-Left Corner Circle Overlay (Matching Reference) */}
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-white/[0.08]" />

          {/* Top Left Icon Pill (White circular badge with Target bullseye icon) */}
          <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-transform hover:scale-105">
            <Target className="h-6 w-6 text-brand-700" strokeWidth={2.2} />
          </div>

          {/* Headline */}
          <h2 className="relative mb-5 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[40px]">
            Our Mission
          </h2>

          {/* Copy (Clear, inspiring, verbatim & accessible) */}
          <p className="relative max-w-xl text-base font-normal leading-relaxed text-rose-50/90 sm:text-[17px]">
            Our mission is to support children from underserved communities
            through accessible foundational education, continuous academic
            tutoring, emotional counselling, practical skill development, and
            pathways to higher education and employment. We work to help
            children develop the capabilities and confidence needed to thrive in
            society.
          </p>
        </div>
      </div>
    </section>
  );
}
