"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

const presidents = [
  {
    name: "Shri Pranab Mukherjee",
    title: "Former President of India",
  },
  {
    name: "Shri Ram Nath Kovind",
    title: "Former President of India",
  },
];

export default function AboutFounderSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Editorial Card matching reference style with hand-drawn texture accents */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EDE5DA] bg-[#FAF8F5] p-8 shadow-sm sm:p-12 lg:p-14">
        {/* Left decorative edge accent tab */}
        <div
          className="absolute -left-1 top-1/2 h-20 w-3.5 -translate-y-1/2 rounded-r-lg bg-[#EBDDC8]"
          aria-hidden="true"
        />

        {/* Playful Floating Hand-Drawn Sparkle in Top Left */}
        <div className="pointer-events-none absolute left-12 top-6 text-brand-300 opacity-70">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C12 6.5 6.5 12 0 12C6.5 12 12 17.5 12 24C12 17.5 17.5 12 24 12C17.5 12 12 6.5 12 0Z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Editorial Narrative */}
          <div className="space-y-6 lg:col-span-7 xl:col-span-7">
            {/* Eyebrow - in Brand Red as requested */}
            <div className="flex items-center gap-3">
              <span className="shadow-xs inline-flex items-center gap-1.5 rounded-full border border-brand-200/60 bg-brand-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-700" />
                MEET THE FOUNDER
              </span>
            </div>

            {/* Pull Quote / Headline with Hand-Drawn Brush Underline */}
            <h2 className="relative font-serif text-2xl font-bold leading-[1.28] text-neutral-900 sm:text-3xl lg:text-[34px]">
              “Turning lived experience into a lifelong commitment to{" "}
              <span className="relative inline-block text-neutral-900">
                children&apos;s futures.
                {/* Hand-Drawn Underline Stroke Curve */}
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand-700/80"
                  viewBox="0 0 200 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C55 3 150 3 197 8"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ”
            </h2>

            {/* Story text */}
            <div className="space-y-3.5 text-sm leading-relaxed text-neutral-600 sm:text-base">
              <p>
                Chandni Di is the founder of the organisation and an advocate
                for education and opportunities for children from underserved
                communities.
              </p>
              <p>
                Her work is shaped by her own experiences growing up in a slum
                and by her belief that children deserve the opportunity to
                pursue a different future.
              </p>
              <p>
                Chandni Di began working with children at a young age. By the
                age of 10, she had started contributing to efforts supporting
                slum children. At 18, she established an initiative dedicated to
                children&apos;s rights and education.
              </p>
              <p>
                Her work has focused on supporting children through educational
                access, school assistance, higher education, and the development
                of skills needed to navigate life beyond the classroom.
              </p>
              <p>
                Today, she continues to work towards creating educational
                opportunities for children from underserved communities and
                helping them build pathways towards greater independence.
              </p>
            </div>

            {/* Divider line */}
            <div className="border-t border-[#E5DDD0] pt-6" />

            {/* Sign-off & Honors */}
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 sm:text-2xl">
                    Chandni Di
                  </h3>
                  {/* Founder & Advocate in Brand Red as requested */}
                  <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-700 sm:text-[13px]">
                    Founder &amp; Advocate for Children&apos;s Rights
                  </p>
                </div>

                {/* Hand-Drawn Doodle Heart Accent */}
                <div className="pr-2 text-brand-600 opacity-90">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 27.5C14.5 26.2 4 18 4 11C4 7 7 4 11 4C13.5 4 15.5 5.5 16 6.5C16.5 5.5 18.5 4 21 4C25 4 28 7 28 11C28 18 17.5 26.2 16 27.5Z"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fill-brand-50"
                    />
                  </svg>
                </div>
              </div>

              {/* Presidential Recognition Badges & CTA */}
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-2.5">
                  {presidents.map((pres, i) => (
                    <div
                      key={i}
                      className="shadow-xs inline-flex items-center gap-2.5 rounded-xl border border-[#EDE5DA] bg-white/90 px-3.5 py-2 transition-colors hover:border-brand-200"
                    >
                      <Award className="h-4 w-4 shrink-0 text-brand-700" />
                      <div className="text-left">
                        <span className="block text-xs font-bold text-neutral-900">
                          {pres.name}
                        </span>
                        <span className="block text-[10px] font-medium text-neutral-500">
                          {pres.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/get-involved"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-xs font-bold tracking-wide text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg sm:text-sm"
                >
                  <span>Get Involved</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Photo with Hand-drawn Doodle Accents */}
          <div className="relative flex justify-center lg:col-span-5 xl:col-span-5">
            {/* Playful Hand-Drawn Doodle Star (Top-Right) */}
            <div className="pointer-events-none absolute -right-2 -top-5 z-20 text-brand-600 sm:-right-4 sm:-top-6">
              <svg
                width="42"
                height="42"
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

            {/* Playful Hand-Drawn Little Doodle Star (Bottom-Left) */}
            <div className="pointer-events-none absolute -bottom-4 -left-3 z-20 text-[#E5A84B] sm:-left-5">
              <svg
                width="34"
                height="34"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2L26.5 15.5L40 16.5L29.5 25.5L33.5 39L22 30.5L10.5 39L14.5 25.5L4 16.5L17.5 15.5L22 2Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Main Portrait Frame */}
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[24px] border border-[#EDE5DA]/80 shadow-md">
              <Image
                src="/images/founder.jpg"
                alt="Chandni Di — Founder"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />

              {/* Floating Pill Tag with handwritten accent */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/95 px-3.5 py-1.5 shadow-md backdrop-blur-sm">
                <span className="font-handwriting text-base font-bold text-brand-700">
                  Every child matters
                </span>
                <span className="text-xs text-brand-600">♥</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
