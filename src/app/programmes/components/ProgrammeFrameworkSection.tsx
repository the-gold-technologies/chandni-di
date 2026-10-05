import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { ProgrammeFrameworkData } from "../data/programmesDetailData";

interface ProgrammeFrameworkSectionProps {
  data: ProgrammeFrameworkData;
}

export default function ProgrammeFrameworkSection({
  data,
}: ProgrammeFrameworkSectionProps) {
  return (
    <section
      id={data.id}
      className="scroll-mt-24 border-y border-neutral-200/70 bg-[#FAF8F5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center sm:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-200/70 bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-800">
            <Sparkles className="h-3.5 w-3.5 text-brand-600" />
            <span>{data.eyebrow}</span>
          </div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {data.title}
          </h2>
          <p className="text-base text-neutral-600 sm:text-lg">
            {data.subtitle}
          </p>
        </div>

        {/* Top Timeline Track with Circular Badges & Connector Pins (Matches Reference Image 1) */}
        <div className="relative mb-8 hidden lg:block">
          {/* Subtle Curved Dotted Connecting Line */}
          <div className="absolute left-[12%] right-[12%] top-6 -z-0">
            <svg
              className="h-8 w-full text-neutral-300"
              fill="none"
              viewBox="0 0 1000 30"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 Q 125 0, 250 15 T 500 15 T 750 15 T 1000 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          {/* 4 Circular Milestone Badges with Connector Pins */}
          <div className="relative z-10 grid grid-cols-4 gap-6 text-center">
            {data.cards.map((card) => (
              <div key={card.num} className="flex flex-col items-center">
                {/* Milestone Circle */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white text-sm font-bold shadow-sm transition-transform duration-300 hover:scale-110 ${
                    card.badgeColor || "border-brand-600 text-brand-700"
                  }`}
                >
                  {card.num}
                </div>
                {/* Vertical Connector Pin & Dot */}
                <div className="flex flex-col items-center">
                  <div
                    className={`h-4 w-0.5 ${
                      card.pinColor || "bg-brand-600"
                    }`}
                  />
                  <div
                    className={`h-2 w-2 rounded-full ${
                      card.pinColor || "bg-brand-600"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid with Pastel Backgrounds & Top Photography (Matches Reference Image 1) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className={`group relative flex flex-col justify-between overflow-visible rounded-[30px] border p-4 sm:p-5 pb-7 sm:pb-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  card.cardBg || "bg-[#FAF6ED]"
                } ${card.borderColor || "border-[#EFE5D3]"}`}
              >
                {/* Small Floating Circular Icon Badge Overlapping Left Edge */}
                <div className="absolute -left-3 top-[32%] z-20 hidden sm:flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/90 bg-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-4 w-4 text-neutral-700" />
                </div>

                <div className="space-y-4">
                  {/* Photo at Top of Card with Rounded Corners */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[22px] bg-neutral-100 shadow-inner">
                    <Image
                      src={card.image || "/images/bridge_programme.jpg"}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Mobile-only Step Pill */}
                    <div className="absolute left-3 top-3 lg:hidden rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-800 shadow-xs border border-white/60">
                      Step {card.num}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <span className="inline-block rounded-md bg-white/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-700 border border-black/5 shadow-2xs">
                      {card.badge}
                    </span>
                    <h3 className="font-serif text-xl font-bold leading-snug text-neutral-900 group-hover:text-brand-800 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-neutral-600">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Key Deliverables / Action Items Sub-Pills */}
                <div className="mt-5 border-t border-black/5 pt-3.5 space-y-1.5">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Key Highlights:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {card.actionItems.map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-medium text-neutral-700 border border-black/5 shadow-2xs"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
