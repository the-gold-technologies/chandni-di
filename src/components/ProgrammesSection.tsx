"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function ProgrammesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-8 max-w-3xl space-y-3 text-center sm:mb-10">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand-700" />
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700">
            Our Programmes
          </span>
        </div>
        <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Supporting a Child at Every Stage of Their Journey
        </h2>
        <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
          From preparing children for school to helping them pursue higher
          education and career opportunities, our programmes are designed to
          provide continuous support.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Programme 1: Bridge */}
        <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft transition-all duration-300 hover:shadow-card">
          <div className="space-y-5 p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <span className="font-serif text-4xl font-black text-neutral-300 transition-colors group-hover:text-brand-700">
                01.
              </span>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                Ages 5–12 Years
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                Bridge Programme
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                Preparing children for formal education
              </p>
            </div>

            <p className="text-sm leading-relaxed text-neutral-600">
              We help children between the ages of 5 and 12 build foundational
              academic skills and prepare for admission into mainstream schools.
            </p>
          </div>

          <div className="mt-auto border-t border-neutral-100 bg-neutral-50/70 p-6">
            <Link
              href="/programmes#bridge"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white py-3 text-xs font-bold uppercase tracking-wider text-neutral-800 shadow-sm transition-all hover:bg-brand-700 hover:text-white"
            >
              <span>Learn More</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Programme 2: After-School */}
        <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft transition-all duration-300 hover:shadow-card">
          <div className="space-y-5 p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <span className="font-serif text-4xl font-black text-neutral-300 transition-colors group-hover:text-brand-700">
                02.
              </span>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                School Students
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                After-School Programme
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                Strengthening learning, confidence, and character
              </p>
            </div>

            <p className="text-sm leading-relaxed text-neutral-600">
              We support children already enrolled in school through tuition,
              academic assistance, counselling, and skill development.
            </p>
          </div>

          <div className="mt-auto border-t border-neutral-100 bg-neutral-50/70 p-6">
            <Link
              href="/programmes#after-school"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white py-3 text-xs font-bold uppercase tracking-wider text-neutral-800 shadow-sm transition-all hover:bg-brand-700 hover:text-white"
            >
              <span>Learn More</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Programme 3: College to Career */}
        <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft transition-all duration-300 hover:shadow-card">
          <div className="space-y-5 p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <span className="font-serif text-4xl font-black text-neutral-300 transition-colors group-hover:text-brand-700">
                03.
              </span>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                Higher Education & Jobs
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                College to Career Programme
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                Connecting education with opportunity
              </p>
            </div>

            <p className="text-sm leading-relaxed text-neutral-600">
              We help students pursue higher education, develop relevant skills,
              and prepare for future career opportunities.
            </p>
          </div>

          <div className="mt-auto border-t border-neutral-100 bg-neutral-50/70 p-6">
            <Link
              href="/programmes#college-career"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white py-3 text-xs font-bold uppercase tracking-wider text-neutral-800 shadow-sm transition-all hover:bg-brand-700 hover:text-white"
            >
              <span>Learn More</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Section 1.4 CTA */}
      <div className="mt-8 text-center">
        <Link
          href="/programmes"
          className="group inline-flex transform items-center gap-3 rounded-full bg-brand-700 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg"
        >
          <span>Explore Our Programmes</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
