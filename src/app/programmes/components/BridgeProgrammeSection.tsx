"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Heart, GraduationCap } from "lucide-react";

export default function BridgeProgrammeSection() {
  return (
    <div
      id="bridge"
      className="scroll-mt-28 space-y-10 rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-card sm:p-12 lg:p-16"
    >
      {/* Header Row */}
      <div className="flex flex-col justify-between gap-6 border-b border-neutral-100 pb-8 lg:flex-row lg:items-start">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-serif text-4xl font-extrabold text-brand-700">
              3.1
            </span>
            <span className="rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-800">
              Age Group: Approximately 5–12 years
            </span>
            <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-semibold text-neutral-600">
              Primary Objective: School readiness &amp; mainstream school
              admission
            </span>
          </div>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Bridge Programme
          </h2>
          <p className="text-lg font-medium text-brand-700">
            Helping Children Take Their First Step Towards Formal Education
          </p>
        </div>

        {/* CTA Button from Doc: Support a Child's Education */}
        <Link
          href="/get-involved#donate"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-800 hover:shadow-lg sm:text-sm"
        >
          <Heart className="h-4 w-4 fill-white" />
          <span>Support a Child&apos;s Education</span>
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Context & Programme Goal */}
        <div className="space-y-6 lg:col-span-6">
          <div className="space-y-4 text-base leading-relaxed text-neutral-700">
            <p>
              Many children from underserved communities may not have had the
              opportunity to begin formal education or may require additional
              academic preparation before entering school.
            </p>
            <p>
              The Bridge Programme identifies children who want to study and
              supports them in developing the foundational knowledge and
              learning habits required for formal education.
            </p>
          </div>

          {/* Programme Goal Box */}
          <div className="rounded-2xl border-l-4 border-brand-700 bg-brand-50/70 p-5 sm:p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-800">
              Programme Goal
            </div>
            <p className="mt-1.5 font-serif text-base italic leading-relaxed text-neutral-800 sm:text-lg">
              &ldquo;To help children transition into formal education and begin
              their academic journey with greater confidence and
              preparation.&rdquo;
            </p>
          </div>
        </div>

        {/* Right Column: 4-Step "How the Programme Works" from Document */}
        <div className="space-y-4 rounded-2xl border border-neutral-200/90 bg-[#FBF9F5] p-6 sm:p-8 lg:col-span-6">
          <h3 className="font-serif text-lg font-bold text-neutral-900 sm:text-xl">
            How the Programme Works
          </h3>

          <div className="space-y-3.5 pt-1">
            {/* Step 1 */}
            <div className="rounded-xl border border-neutral-200/80 bg-white p-4 shadow-sm transition-all hover:border-brand-300">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    Community Identification
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                    We identify children and families who wish to pursue
                    education.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-neutral-200/80 bg-white p-4 shadow-sm transition-all hover:border-brand-300">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    Academic Preparation
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                    Children receive structured learning support through our
                    programme, helping them build their foundational skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-neutral-200/80 bg-white p-4 shadow-sm transition-all hover:border-brand-300">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    School Readiness
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                    The programme prepares children for admission into
                    mainstream schools, including government Hindi-medium and
                    private English-medium schools, depending on their needs and
                    circumstances.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-xl border border-neutral-200/80 bg-white p-4 shadow-sm transition-all hover:border-brand-300">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                  4
                </span>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    Continued Support
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                    After school admission, children can receive further
                    assistance through our After-School Programme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
