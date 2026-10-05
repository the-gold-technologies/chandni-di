import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, Heart, ArrowRight } from "lucide-react";
import { ProgrammeHeroData } from "../data/programmesDetailData";

interface ProgrammeDetailHeroProps {
  data: ProgrammeHeroData;
}

export default function ProgrammeDetailHero({
  data,
}: ProgrammeDetailHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200/60 bg-[#FAF7F2] pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-brand-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-xs text-neutral-500 sm:text-sm"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-brand-700"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
          <Link
            href="/programmes"
            className="transition-colors hover:text-brand-700"
          >
            Programmes
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
          <span className="font-semibold text-neutral-900">
            {data.breadcrumbLabel}
          </span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Content Column */}
          <div className="space-y-6 sm:space-y-7 lg:col-span-7">
            {/* Stage Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200/80 bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-800">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-600" />
                {data.stageBadge}
              </span>
              <span className="shadow-2xs rounded-full border border-neutral-200/80 bg-white px-3.5 py-1 text-xs font-semibold text-neutral-700">
                {data.ageBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl font-extrabold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              {data.title}{" "}
              <span className="font-serif italic text-brand-700">
                {data.italicTitle}
              </span>
            </h1>

            {/* Lead Body Paragraph */}
            <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
              {data.description}
            </p>

            {/* Quick-Facts Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
              {data.quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="shadow-2xs rounded-xl border border-neutral-200/80 bg-white p-3.5"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    {fact.label}
                  </div>
                  <div
                    className={`mt-1 text-sm font-bold ${
                      fact.isHighlight ? "text-brand-700" : "text-neutral-900"
                    }`}
                  >
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={data.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-800 hover:shadow-lg"
              >
                <Heart className="h-4 w-4 fill-white" />
                <span>{data.primaryCtaText}</span>
              </Link>
              <a
                href={data.secondaryCtaHref}
                className="shadow-2xs inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50"
              >
                <span>{data.secondaryCtaText}</span>
                <ArrowRight className="h-4 w-4 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Right Photography Asset */}
          <div className="relative lg:col-span-5">
            <div className="group relative overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-neutral-100 shadow-xl">
              <Image
                src={data.image}
                alt={data.imageAlt}
                width={800}
                height={600}
                className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-neutral-900 shadow-md backdrop-blur-md">
                {data.floatingBadge}
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/45 p-4 text-white backdrop-blur-md">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  {data.captionTitle}
                </div>
                <div className="mt-1 text-xs text-white/90">
                  {data.captionText}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
