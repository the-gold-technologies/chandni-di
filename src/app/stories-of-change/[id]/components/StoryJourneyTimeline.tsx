import React from "react";
import { ArrowRight, Sparkles, AlertCircle, TrendingUp } from "lucide-react";
import { Story } from "@/data/ngoData";

interface StoryJourneyTimelineProps {
  story: Story;
}

export default function StoryJourneyTimeline({
  story,
}: StoryJourneyTimelineProps) {
  const journeyStages = story.journeyStages;

  if (!journeyStages || journeyStages.length === 0) {
    return null;
  }

  const stageIcons = [AlertCircle, Sparkles, TrendingUp];

  return (
    <section className="sm:py-18 border-y border-neutral-100 bg-[#FAF7F2]/45 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
            The Journey of Resilience
          </span>
          <h2 className="mt-1 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl lg:text-4xl">
            From Hardship to Opportunity
          </h2>
          <p className="mt-2 text-xs text-neutral-600 sm:text-sm">
            How continuous grassroots handholding helped {story.name} turn
            formidable barriers into academic milestones.
          </p>
        </div>

        {/* 3 Connected Stage Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {journeyStages.map((stage, idx) => {
            const Icon = stageIcons[idx] || Sparkles;

            const colorSchemes = [
              {
                border: "border-amber-200/90",
                bg: "bg-white",
                pill: "bg-amber-100 text-amber-800 ring-1 ring-amber-200/60",
                iconColor: "text-amber-700 bg-amber-50",
              },
              {
                border: "border-brand-200/90",
                bg: "bg-white",
                pill: "bg-brand-100 text-brand-800 ring-1 ring-brand-200/60",
                iconColor: "text-brand-700 bg-brand-50",
              },
              {
                border: "border-emerald-200/90",
                bg: "bg-white",
                pill: "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200/60",
                iconColor: "text-emerald-700 bg-emerald-50",
              },
            ];

            const theme = colorSchemes[idx] || colorSchemes[0];

            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-2xl border ${theme.border} ${theme.bg} shadow-xs p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-block rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${theme.pill}`}
                    >
                      {stage.stage}
                    </span>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-xl ${theme.iconColor}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-serif text-lg font-bold text-neutral-900">
                    {stage.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                    {stage.desc}
                  </p>
                </div>

                {idx < journeyStages.length - 1 && (
                  <div className="mt-4 hidden items-center justify-end text-xs font-semibold text-neutral-400 sm:flex">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
