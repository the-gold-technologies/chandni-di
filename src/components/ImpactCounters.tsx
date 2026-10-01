"use client";

import React from "react";
import { Users, GraduationCap, HeartHandshake, MapPin } from "lucide-react";
import { IMPACT_STATS } from "@/data/ngoData";

const iconMap: Record<string, React.ReactNode> = {
  mainstreamed: <Users className="h-7 w-7 text-brand-600" />,
  "currently-studying": <GraduationCap className="h-7 w-7 text-gold-600" />,
  "fully-adopted": <HeartHandshake className="h-7 w-7 text-emerald-600" />,
  "growth-centres": <MapPin className="h-7 w-7 text-blue-600" />,
};

export default function ImpactCounters() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {IMPACT_STATS.map((stat) => (
        <div
          key={stat.id}
          className="group relative transform rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card sm:p-7"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 transition-transform group-hover:scale-110">
              {iconMap[stat.id] || <Users className="h-6 w-6 text-brand-600" />}
            </div>
            <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-600 transition-colors group-hover:bg-brand-50 group-hover:text-brand-700">
              Verified
            </span>
          </div>

          <div className="space-y-1">
            <div className="font-serif text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
              {stat.value}
            </div>
            <h3 className="text-base font-bold text-neutral-800">
              {stat.label}
            </h3>
            <p className="pt-1 text-xs leading-relaxed text-neutral-500">
              {stat.description}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3 text-[11px] text-neutral-400">
            <span>Grassroots Impact</span>
            <span className="font-semibold text-brand-700 transition-transform group-hover:translate-x-1">
              Learn more →
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
