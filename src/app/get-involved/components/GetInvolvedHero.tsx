"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, ArrowDown } from "lucide-react";

export default function GetInvolvedHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = id;
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-neutral-200/60 bg-[#FAF7F2]">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-amber-100/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-brand-100/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Eyebrow, Main Headline, Paragraph, and Action Buttons */}
          <div className="space-y-6 sm:space-y-7 lg:col-span-6">
            {/* Tagline / Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C05621] sm:text-sm sm:tracking-[0.3em]">
              GET INVOLVED
            </span>

            {/* Headline with "Move Forward." in Italic Brand Red with Hand-Drawn Curve */}
            <h1 className="font-serif text-4xl font-extrabold leading-[1.14] tracking-tight text-neutral-900 sm:text-5xl lg:text-[54px] xl:text-[60px]">
              There Are Many Ways to Help a Child{" "}
              <span className="relative inline-block font-serif italic text-brand-700">
                Move Forward.
                {/* Hand-drawn warm ochre underline curve */}
                <svg
                  className="pointer-events-none absolute -bottom-2 left-0 h-3.5 w-full text-[#E5A84B] sm:-bottom-3"
                  viewBox="0 0 140 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10C40 3 100 3 137 10"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Descriptive Body Paragraph from Google Doc Section 7 */}
            <p className="max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg">
              Your support can help a child access education, continue learning,
              develop skills, and pursue future opportunities. Whether you
              contribute financially, volunteer your time, or build a
              partnership, your involvement can support our work.
            </p>

            {/* Buttons: Pill-shaped Burgundy/Brand Red with Chevron & Outline Pill */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#donate"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("donate");
                }}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-800 hover:shadow-lg sm:text-base"
              >
                <span>Support Education</span>
                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
              </a>

              <a
                href="#ways-to-contribute"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("ways-to-contribute");
                }}
                className="shadow-xs inline-flex cursor-pointer items-center gap-2 rounded-full border border-neutral-300 bg-white/90 px-6 py-3.5 text-sm font-semibold text-neutral-800 backdrop-blur-sm transition-all duration-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 sm:text-base"
              >
                <span>Explore Ways to Help</span>
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Joyful Children with Playful Illustrated Doodles (Matching Programme Hero Style) */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            {/* Illustrated Playful Doodle Layer behind & around children */}

            {/* 1. Yellow Doodle Cloud behind the students */}
            <svg
              className="sm:w-88 pointer-events-none absolute left-4 top-2 z-0 h-52 w-72 text-[#F6C944] opacity-90 sm:left-10 sm:top-4 sm:h-64 md:h-72 md:w-96"
              viewBox="0 0 240 170"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 105C32 105 18 92 20 74C22 56 38 46 54 50C63 28 86 16 110 22C134 28 146 46 148 64C164 58 180 64 185 78C190 92 181 106 166 109C174 121 168 136 153 140C138 144 124 136 118 126C107 138 88 140 73 132C58 124 54 112 50 105Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* 2. Red Exclamation / Energy Radiant Sparks */}
            <svg
              className="pointer-events-none absolute -top-8 left-[46%] z-20 h-12 w-12 -rotate-6 text-[#E53E3E] sm:-top-10 sm:left-[48%] sm:h-14 sm:w-14"
              viewBox="0 0 50 50"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 4C23 1.5 27 1.5 27 4L26 18C26 20 24 20 24 18L23 4Z" />
              <path d="M11 11C9 9 12 6 15 8L22 17C24 19 22 21 20 19L11 11Z" />
              <path d="M37 9C39 7 42 10 40 12L31 20C29 22 27 20 29 18L37 9Z" />
            </svg>

            {/* 3. Cheerful Doodle Stars on top right */}
            <div className="pointer-events-none absolute -top-6 right-2 z-20 flex items-center gap-2 sm:-top-8 sm:right-6">
              {/* Yellow Solid Star */}
              <svg
                className="h-8 w-8 rotate-12 text-[#F6C944] drop-shadow-sm sm:h-10 sm:w-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L14.8 8.2L21.6 8.8L16.4 13.4L18 20L12 16.5L6 20L7.6 13.4L2.4 8.8L9.2 8.2L12 2Z" />
              </svg>
              {/* Red Outline Star */}
              <svg
                className="h-10 w-10 -rotate-6 text-[#E53E3E] sm:h-12 sm:w-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L14.8 8.2L21.6 8.8L16.4 13.4L18 20L12 16.5L6 20L7.6 13.4L2.4 8.8L9.2 8.2L12 2Z" />
              </svg>
            </div>

            {/* 4. Left: Whimsical Fluttering Butterfly with flight path (Symbol of Transformation & Human Touch) */}
            <div className="pointer-events-none absolute -left-6 top-12 z-0 sm:-left-10 sm:top-14">
              <svg
                width="130"
                height="150"
                viewBox="0 0 130 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
              >
                {/* Dashed curved flight trail */}
                <path
                  d="M15 140 C 25 105 10 75 45 60 C 65 52 75 40 85 28"
                  stroke="#E5A84B"
                  strokeWidth="2.2"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
                {/* Tiny accent spark near trail */}
                <circle cx="28" cy="98" r="2" fill="#E5A84B" opacity="0.7" />
                <circle cx="58" cy="62" r="2.5" fill="#E5A84B" opacity="0.8" />

                {/* Butterfly (Warm Honey/Amber) at (85, 25) */}
                <g transform="translate(65, 8) rotate(-10)">
                  {/* Left Top Wing */}
                  <path
                    d="M24 22 C 10 6 0 16 8 28 C 14 36 22 28 24 22 Z"
                    fill="#F6C944"
                    stroke="#D97706"
                    strokeWidth="1.8"
                  />
                  {/* Left Bottom Wing */}
                  <path
                    d="M24 28 C 12 33 8 44 18 47 C 23 48 24 36 24 28 Z"
                    fill="#FBBF24"
                    stroke="#D97706"
                    strokeWidth="1.6"
                    opacity="0.9"
                  />
                  {/* Right Top Wing */}
                  <path
                    d="M28 22 C 42 6 52 16 44 28 C 38 36 30 28 28 22 Z"
                    fill="#F6C944"
                    stroke="#D97706"
                    strokeWidth="1.8"
                  />
                  {/* Right Bottom Wing */}
                  <path
                    d="M28 28 C 40 33 44 44 34 47 C 29 48 28 36 28 28 Z"
                    fill="#FBBF24"
                    stroke="#D97706"
                    strokeWidth="1.6"
                    opacity="0.9"
                  />
                  {/* Body & Antennae */}
                  <ellipse cx="26" cy="27" rx="2.5" ry="9" fill="#92400E" />
                  <path
                    d="M25 18 C 22 12 18 10 16 12"
                    stroke="#92400E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M27 18 C 30 12 34 10 36 12"
                    stroke="#92400E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle cx="16" cy="12" r="1.5" fill="#92400E" />
                  <circle cx="36" cy="12" r="1.5" fill="#92400E" />
                </g>
              </svg>
            </div>

            {/* 5. Right: Gentle Butterfly & Floating Love/Caring Heart Doodles (Human Touch) */}
            <div className="sm:top-18 pointer-events-none absolute -right-6 top-16 z-0 sm:-right-10">
              <svg
                width="140"
                height="160"
                viewBox="0 0 140 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
              >
                {/* Looping playful dashed flight path */}
                <path
                  d="M115 150 C 95 120 75 90 95 65 C 105 52 90 35 65 30"
                  stroke="#E53E3E"
                  strokeWidth="2.2"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />

                {/* Hand-drawn Floating Mini Heart 1 (Human Touch) */}
                <g transform="translate(100, 85) rotate(15) scale(0.7)">
                  <path
                    d="M12 21.35 C 11.2 20.6 5 15 2 9 C -0.5 4.5 3 0 7.5 0 C 10.2 0 12 2 12 2 C 12 2 13.8 0 16.5 0 C 21 0 24.5 4.5 22 9 C 19 15 12.8 20.6 12 21.35 Z"
                    fill="#E53E3E"
                    stroke="#991B1B"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Hand-drawn Floating Mini Heart 2 */}
                <g transform="translate(85, 42) rotate(-10) scale(0.55)">
                  <path
                    d="M12 21.35 C 11.2 20.6 5 15 2 9 C -0.5 4.5 3 0 7.5 0 C 10.2 0 12 2 12 2 C 12 2 13.8 0 16.5 0 C 21 0 24.5 4.5 22 9 C 19 15 12.8 20.6 12 21.35 Z"
                    fill="#F87171"
                    stroke="#B91C1C"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Butterfly (Warm Coral/Rose) at (55, 20) */}
                <g transform="translate(40, 8) rotate(18)">
                  {/* Left Top Wing */}
                  <path
                    d="M24 22 C 10 6 0 16 8 28 C 14 36 22 28 24 22 Z"
                    fill="#F87171"
                    stroke="#B91C1C"
                    strokeWidth="1.8"
                  />
                  {/* Left Bottom Wing */}
                  <path
                    d="M24 28 C 12 33 8 44 18 47 C 23 48 24 36 24 28 Z"
                    fill="#FCA5A5"
                    stroke="#B91C1C"
                    strokeWidth="1.6"
                    opacity="0.9"
                  />
                  {/* Right Top Wing */}
                  <path
                    d="M28 22 C 42 6 52 16 44 28 C 38 36 30 28 28 22 Z"
                    fill="#F87171"
                    stroke="#B91C1C"
                    strokeWidth="1.8"
                  />
                  {/* Right Bottom Wing */}
                  <path
                    d="M28 28 C 40 33 44 44 34 47 C 29 48 28 36 28 28 Z"
                    fill="#FCA5A5"
                    stroke="#B91C1C"
                    strokeWidth="1.6"
                    opacity="0.9"
                  />
                  {/* Body & Antennae */}
                  <ellipse cx="26" cy="27" rx="2.5" ry="9" fill="#7F1D1D" />
                  <path
                    d="M25 18 C 22 12 18 10 16 12"
                    stroke="#7F1D1D"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M27 18 C 30 12 34 10 36 12"
                    stroke="#7F1D1D"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle cx="16" cy="12" r="1.5" fill="#7F1D1D" />
                  <circle cx="36" cy="12" r="1.5" fill="#7F1D1D" />
                </g>
              </svg>
            </div>

            {/* Main Photography: Cutout image of volunteer mentor and student */}
            <div className="relative z-10 w-full max-w-[620px]">
              <Image
                src="/images/get_involved_volunteer.png"
                alt="A dedicated young volunteer mentor warmly guiding a smiling schoolgirl with her studies, representing volunteering, mentorship, and educational support"
                width={800}
                height={600}
                className="h-auto w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.07)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
