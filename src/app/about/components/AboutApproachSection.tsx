"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

const approachPillars = [
  {
    label: "Access",
    description: "Helping children enter formal education.",
  },
  {
    label: "Continuity",
    description:
      "Supporting children throughout their school and college journey.",
  },
  {
    label: "Holistic Development",
    description: "Strengthening academic, personal, and social capabilities.",
  },
  {
    label: "Career Readiness",
    description:
      "Helping students identify suitable educational and professional pathways.",
  },
  {
    label: "Community Engagement",
    description:
      "Working with families, volunteers, and partners to build sustained support.",
  },
];

export default function AboutApproachSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
          Our Approach
        </span>
        <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
          We Stay With the Child Beyond Admission
        </h2>
        <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
          Our work is designed around continuity. We believe that school
          admission alone is not enough. Children may need ongoing academic
          support, emotional guidance, family engagement, financial assistance,
          and career direction to continue progressing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {approachPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="space-y-2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft transition-all hover:shadow-card"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
              <div>
                <h3 className="text-base font-bold text-neutral-900">
                  {pillar.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  {pillar.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
