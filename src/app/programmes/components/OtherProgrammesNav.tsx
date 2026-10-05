"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface OtherProgrammesNavProps {
  currentId: "bridge-programme" | "after-school" | "college-to-career";
}

export default function OtherProgrammesNav({
  currentId,
}: OtherProgrammesNavProps) {
  const allProgrammes = [
    {
      id: "bridge-programme",
      stage: "Stage 01 • Foundational",
      title: "Bridge Programme",
      ageGroup: "Ages 5–12 Years",
      tagline:
        "Building foundational literacy, numeracy & formal school admissions for out-of-school children.",
      image: "/images/bridge_programme.jpg",
      href: "/programmes/bridge-programme",
    },
    {
      id: "after-school",
      stage: "Stage 02 • Continuity",
      title: "After-School Programme",
      ageGroup: "Classes 1 to 12",
      tagline:
        "Daily subject tuition, emotional counselling & 50–100% school fee sponsorships to stop dropouts.",
      image: "/images/after_school_programme.jpg",
      href: "/programmes/after-school",
    },
    {
      id: "college-to-career",
      stage: "Stage 03 • Higher Ed",
      title: "College to Career",
      ageGroup: "College & Careers",
      tagline:
        "Guiding youth through higher education with 100% scholarships, digital skills & corporate linkages.",
      image: "/images/college_to_career.jpg",
      href: "/programmes/college-to-career",
    },
  ];

  const others = allProgrammes.filter((p) => p.id !== currentId);

  return (
    <section className="border-t border-neutral-200/80 bg-[#FAF9F5] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
              <Sparkles className="h-3.5 w-3.5 text-brand-600" />
              <span>Continue Exploring</span>
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Our Other Programmes
            </h3>
          </div>
          <Link
            href="/programmes"
            className="shadow-2xs group inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50 hover:text-brand-700"
          >
            <span>View All 3 Programmes</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 2 Wide Interactive Preview Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {others.map((prog) => (
            <Link
              key={prog.id}
              href={prog.href}
              className="group relative flex flex-col items-center gap-6 overflow-hidden rounded-[28px] border border-neutral-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-xl sm:flex-row sm:p-6"
            >
              {/* Image Thumbnail */}
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-2xl bg-neutral-100 shadow-inner sm:aspect-square sm:w-44">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 180px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Card Body */}
              <div className="flex-1 space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-brand-200/60 bg-brand-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-800">
                    {prog.stage}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-semibold text-neutral-600">
                    {prog.ageGroup}
                  </span>
                </div>

                <h4 className="font-serif text-xl font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                  {prog.title}
                </h4>

                <p className="line-clamp-2 text-xs leading-relaxed text-neutral-600">
                  {prog.tagline}
                </p>

                <div className="flex items-center gap-1.5 pt-2 text-xs font-bold text-brand-700 transition-all group-hover:gap-2.5">
                  <span>Explore Programme Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
