import React from "react";
import { ProgrammeOverviewData } from "../data/programmesDetailData";

interface ProgrammeOverviewSectionProps {
  data: ProgrammeOverviewData;
}

export default function ProgrammeOverviewSection({
  data,
}: ProgrammeOverviewSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Story Column */}
          <div className="space-y-6 lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-700">
              {data.eyebrow}
            </span>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              {data.title}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              {data.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right Feature Highlights */}
          <div className="space-y-4 lg:col-span-5">
            {data.highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div
                  key={idx}
                  className="space-y-3 rounded-2xl border border-neutral-200/80 bg-[#FAF9F6] p-6 shadow-sm transition-all hover:border-brand-200 hover:shadow-md"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${h.iconBg} ${h.iconColor}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-neutral-900">
                    {h.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {h.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
