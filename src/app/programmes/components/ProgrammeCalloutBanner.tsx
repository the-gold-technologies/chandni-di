import React from "react";
import Link from "next/link";
import { Building2 } from "lucide-react";
import { ProgrammeCalloutData } from "../data/programmesDetailData";

interface ProgrammeCalloutBannerProps {
  data: ProgrammeCalloutData;
}

export default function ProgrammeCalloutBanner({
  data,
}: ProgrammeCalloutBannerProps) {
  return (
    <section className="sm:py-18 border-t border-neutral-100 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-200/80 bg-gradient-to-r from-emerald-50/70 via-white to-amber-50/50 p-8 shadow-sm sm:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-8">
              <div className="shadow-2xs inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-900">
                <Building2 className="h-4 w-4 text-emerald-700" />
                <span>{data.badge}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
                {data.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                {data.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
              <Link
                href={data.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-neutral-800"
              >
                <Building2 className="h-4 w-4 text-emerald-400" />
                <span>{data.primaryCtaText}</span>
              </Link>
              <Link
                href={data.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-700 transition-all hover:bg-neutral-50"
              >
                <span>{data.secondaryCtaText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
