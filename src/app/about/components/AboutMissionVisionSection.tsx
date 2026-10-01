"use client";

import React from "react";

export default function AboutMissionVisionSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Mission */}
        <div className="space-y-4 rounded-3xl border border-neutral-200 bg-white p-8 shadow-soft sm:p-10">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            Our Mission
          </span>
          <h2 className="font-serif text-2xl font-extrabold text-neutral-900 sm:text-3xl">
            Education That Continues Beyond the Classroom
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            Our mission is to support children from underserved communities
            through accessible education, continuous academic assistance,
            counselling, skill development, and pathways to higher education and
            employment.
          </p>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            We work to help children develop the capabilities and confidence
            needed to participate meaningfully in society.
          </p>
        </div>

        {/* Vision */}
        <div className="space-y-4 rounded-3xl border border-neutral-200 bg-white p-8 shadow-soft sm:p-10">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            Our Vision
          </span>
          <h2 className="font-serif text-2xl font-extrabold text-neutral-900 sm:text-3xl">
            A Future Where Every Child Can Pursue Their Potential
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            We envision a society where children from slum and street
            communities have access to education, opportunities, and the support
            they need to build independent and fulfilling futures.
          </p>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
            Our long-term goal is to help children move beyond survival towards
            learning, growth, professional opportunities, and greater
            participation in mainstream society.
          </p>
        </div>
      </div>
    </section>
  );
}
