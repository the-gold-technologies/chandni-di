"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface OtherProgrammesNavProps {
  currentId: "bridge-programme" | "after-school" | "college-to-career";
}

export default function OtherProgrammesNav({ currentId }: OtherProgrammesNavProps) {
  const allProgrammes = [
    {
      id: "bridge-programme",
      stage: "Stage 01",
      title: "Bridge Programme",
      ageGroup: "Ages 5–12 Years",
      tagline: "First step to formal schooling & literacy",
      image: "/images/bridge_programme.jpg",
      href: "/programmes/bridge-programme",
    },
    {
      id: "after-school",
      stage: "Stage 02",
      title: "After-School Programme",
      ageGroup: "Classes 1 to 12",
      tagline: "Tuition, counselling & 50–100% fee grants",
      image: "/images/after_school_programme.jpg",
      href: "/programmes/after-school",
    },
    {
      id: "college-to-career",
      stage: "Stage 03",
      title: "College to Career",
      ageGroup: "Higher Ed & Careers",
      tagline: "100% scholarships & corporate internships",
      image: "/images/college_to_career.jpg",
      href: "/programmes/college-to-career",
    },
  ];

  const others = allProgrammes.filter((p) => p.id !== currentId);

  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 border-t border-neutral-200/80">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
            Continue Exploring
          </span>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Our Other Programmes
          </h3>
        </div>
        <Link
          href="/programmes"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 hover:text-brand-700 transition-colors"
        >
          <span>View All 3 Programmes</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {others.map((prog) => (
          <Link
            key={prog.id}
            href={prog.href}
            className="group flex flex-col sm:flex-row items-center gap-5 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
          >
            <div className="relative aspect-video sm:aspect-square w-full sm:w-36 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
              <Image
                src={prog.image}
                alt={prog.title}
                fill
                sizes="(max-width: 640px) 100vw, 150px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-800 border border-brand-200/60">
                  {prog.stage}
                </span>
                <span className="text-xs font-semibold text-neutral-500">
                  {prog.ageGroup}
                </span>
              </div>
              <h4 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-brand-700 transition-colors">
                {prog.title}
              </h4>
              <p className="text-xs text-neutral-600">
                {prog.tagline}
              </p>
              <div className="pt-1 inline-flex items-center gap-1 text-xs font-bold text-brand-700">
                <span>Explore Details</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
