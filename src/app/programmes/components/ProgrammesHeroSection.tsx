"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProgrammesHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200/60 bg-[#FAF7F2]">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-amber-100/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-brand-100/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Eyebrow, Main Headline, Paragraph, and Syllabus Button */}
          <div className="space-y-6 sm:space-y-7 lg:col-span-6">
            {/* Tagline / Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C05621] sm:text-sm sm:tracking-[0.3em]">
              OUR PROGRAMMES
            </span>

            {/* Headline with "Future Careers." in Italic Brand Red with Hand-Drawn Curve */}
            <h1 className="font-serif text-4xl font-extrabold leading-[1.14] tracking-tight text-neutral-900 sm:text-5xl lg:text-[54px] xl:text-[60px]">
              From First Lessons to{" "}
              <span className="relative inline-block font-serif italic text-brand-700">
                Future Careers.
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

            {/* Descriptive Body Paragraph from Google Doc Section 3 */}
            <p className="max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg">
              Our programmes are designed to support children at different
              stages of their educational journey. From foundational learning
              and school admission to higher education and career preparation,
              we work towards creating a continuum of opportunities.
            </p>

            {/* Button: Pill-shaped Burgundy/Brand Red with Chevron */}
            <div className="pt-2">
              <Link
                href="#bridge"
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-800 hover:shadow-lg sm:text-base"
              >
                <span>Explore Our Programmes</span>
                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Joyful Students Representing First Lessons to Future Careers with Playful Illustrated Doodles */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            {/* Illustrated Playful Doodle Layer behind & around students */}

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

            {/* 2. Red Exclamation / Energy Radiant Sparks above the mentor */}
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

            {/* 4. Green Tropical Sprout Leaves behind the left of the desk */}
            <svg
              className="pointer-events-none absolute -left-6 top-16 z-0 h-48 w-32 text-[#2E7D32] opacity-90 sm:-left-8 sm:top-20 sm:h-56 sm:w-36"
              viewBox="0 0 100 160"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50 155C15 120 5 65 28 15C55 58 72 112 50 155Z" />
              <path
                d="M22 155C0 128 -4 82 12 40C33 78 44 122 22 155Z"
                opacity="0.75"
              />
              {/* Leaf Stem line */}
              <line
                x1="50"
                y1="155"
                x2="30"
                y2="25"
                stroke="#1B5E20"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* 5. Green Tropical Sprout Leaves behind the right of the desk */}
            <svg
              className="pointer-events-none absolute -right-6 top-20 z-0 h-48 w-32 text-[#2E7D32] opacity-90 sm:-right-8 sm:top-24 sm:h-56 sm:w-36"
              viewBox="0 0 100 160"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50 155C85 120 95 65 72 15C45 58 28 112 50 155Z" />
              <path
                d="M78 155C100 128 104 82 88 40C67 78 56 122 78 155Z"
                opacity="0.75"
              />
              {/* Leaf Stem line */}
              <line
                x1="50"
                y1="155"
                x2="70"
                y2="25"
                stroke="#1B5E20"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Main Photography: Indian Schoolgirl and College Mentor Studying Together */}
            <div className="relative z-10 w-full max-w-[620px]">
              <Image
                src="/images/programmes_hero_students.png"
                alt="Young Indian schoolgirl and older student studying together with books and laptop, representing the educational journey from foundational learning to future careers"
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
