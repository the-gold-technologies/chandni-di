"use client";

import React from "react";

export default function ProgrammesTabsNav() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <a
          href="#bridge"
          className="rounded-full border border-neutral-200/90 bg-white px-5 py-2.5 text-xs font-bold text-neutral-800 shadow-sm transition-all duration-200 hover:border-brand-700 hover:text-brand-700 hover:shadow sm:px-6 sm:py-3 sm:text-sm"
        >
          01. Bridge Programme (5-12 Years)
        </a>
        <a
          href="#after-school"
          className="rounded-full border border-neutral-200/90 bg-white px-5 py-2.5 text-xs font-bold text-neutral-800 shadow-sm transition-all duration-200 hover:border-brand-700 hover:text-brand-700 hover:shadow sm:px-6 sm:py-3 sm:text-sm"
        >
          02. After-School Programme (Tutoring &amp; Fees)
        </a>
        <a
          href="#college-to-career"
          className="rounded-full border border-neutral-200/90 bg-white px-5 py-2.5 text-xs font-bold text-neutral-800 shadow-sm transition-all duration-200 hover:border-brand-700 hover:text-brand-700 hover:shadow sm:px-6 sm:py-3 sm:text-sm"
        >
          03. College to Career (100% Scholarships)
        </a>
      </div>
    </section>
  );
}
