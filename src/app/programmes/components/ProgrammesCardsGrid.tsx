"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Laptop,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function ProgrammesCardsGrid() {
  const programmes = [
    {
      id: "bridge-programme",
      stage: "Stage 01 • Foundational",
      ageGroup: "Ages 5–12 Years",
      title: "Bridge Programme",
      description:
        "Building foundational literacy, numeracy, and learning habits to transition out-of-school children into mainstream formal education.",
      image: "/images/bridge_programme.jpg",
      icon: BookOpen,
      iconColor: "text-amber-600",
      href: "/programmes/bridge-programme",
    },
    {
      id: "after-school",
      stage: "Stage 02 • Continuity",
      ageGroup: "Classes 1 to 12",
      title: "After-School Programme",
      description:
        "Providing tuition, mental health counselling, and 50–100% fee sponsorships so enrolled children stay in school and excel.",
      image: "/images/after_school_programme.jpg",
      icon: GraduationCap,
      iconColor: "text-amber-600",
      href: "/programmes/after-school",
    },
    {
      id: "college-to-career",
      stage: "Stage 03 • Higher Ed",
      ageGroup: "College & Careers",
      title: "College to Career",
      description:
        "Guiding students through higher education with 100% scholarships, digital skills, and practical corporate internship linkages.",
      image: "/images/college_to_career.jpg",
      icon: Laptop,
      iconColor: "text-amber-600",
      href: "/programmes/college-to-career",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center space-y-2 mb-12 sm:mb-14">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-700">
          Our Educational Lifecycle
        </span>
        <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[42px]">
          Three Focused Programmes.
          <br />
          <span className="font-serif italic text-brand-700">One Unbroken Journey.</span>
        </h2>
        <p className="text-sm text-neutral-600 sm:text-base max-w-xl mx-auto pt-1">
          Select a programme to explore its full curriculum, operational framework, and student stories.
        </p>
      </div>

      {/* 3-Card Grid matching user reference */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pt-4">
        {programmes.map((prog) => {
          const Icon = prog.icon;
          return (
            <div key={prog.id} className="relative pt-6">
              {/* Card Container */}
              <div className="group relative flex flex-col justify-between overflow-visible rounded-[32px] border border-neutral-200/80 bg-white p-4 pb-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl sm:p-5 sm:pb-8">
                {/* Image Container with Floating Centered Icon Badge */}
                <div className="relative">
                  {/* Floating Circular Icon Badge */}
                  <div className="absolute -top-7 left-1/2 z-20 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-100 bg-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className={`h-6 w-6 ${prog.iconColor}`} />
                  </div>

                  {/* Rounded Corner Image */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[26px] bg-neutral-100">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    {/* Bottom Centered Age/Stage Pill */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md border border-white/20 whitespace-nowrap">
                      {prog.stage} • {prog.ageGroup}
                    </div>
                  </div>
                </div>

                {/* Centered Content */}
                <div className="flex flex-1 flex-col items-center justify-between text-center pt-5 sm:pt-6 space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-brand-700 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600 max-w-xs mx-auto">
                      {prog.description}
                    </p>
                  </div>

                  {/* Brand Red Button & Sponsor Link */}
                  <div className="w-full pt-1 space-y-2">
                    <Link
                      href={prog.href}
                      className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-brand-800 hover:shadow-lg w-full"
                    >
                      <span>Explore Programme</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>

                    <div>
                      <Link
                        href="/get-involved#donate"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-500 hover:text-brand-700 transition-colors"
                      >
                        <Heart className="h-3 w-3 text-brand-700" />
                        <span>Sponsor this programme (80G Tax Benefit)</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
