"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Share2,
  Package,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function WaysToContributeSection() {
  const [activeTab, setActiveTab] = useState<"volunteer" | "fundraise" | "drives">(
    "volunteer"
  );

  const streams = [
    {
      id: "volunteer" as const,
      badge: "7.2 Volunteer",
      title: "Give Your Time. Share Your Skills.",
      desc: "Volunteers contribute through academic tutoring, weekend mentoring, events, digital skills, and community engagement.",
      icon: Users,
      highlights: [
        "Academic Tutoring & Basic English",
        "Digital Literacy & Basic Coding",
        "Sports, Arts & Personality Mentorship",
        "In-person Delhi-NCR or Virtual Tutoring",
      ],
      ctaText: "Become a Volunteer",
      ctaHref: "/contact?type=Volunteer+Application",
    },
    {
      id: "fundraise" as const,
      badge: "7.6 Fundraise",
      title: "Turn Your Network Into an Opportunity",
      desc: "Organise a fundraiser through your community, workplace, college campus, or personal network to support a child's education.",
      icon: Share2,
      highlights: [
        "Birthday & Milestone Pledge Giving",
        "Corporate Workplace Giving Drives",
        "College Campus Ambassador Campaigns",
        "Full Toolkit & Creative Assets Provided",
      ],
      ctaText: "Start a Fundraiser",
      ctaHref: "/contact?type=Start+a+Fundraiser",
    },
    {
      id: "drives" as const,
      badge: "7.7 In-Kind Drives",
      title: "Every Contribution Can Matter",
      desc: "Support our learning centres directly with essential supplies, textbooks, nutritious food rations, or study tablets.",
      icon: Package,
      highlights: [
        "Food Drives & Daily Ration Essentials",
        "Textbooks, Stationery & Learning Kits",
        "Refurbished Laptops & Study Tablets",
        "School Bags, Shoes & Winter Sweaters",
      ],
      ctaText: "Discuss In-Kind Support",
      ctaHref: "/contact?type=Stationery+or+Food+Drive",
    },
  ];

  const currentStream = streams.find((s) => s.id === activeTab) || streams[0];

  return (
    <section id="ways-to-contribute" className="scroll-mt-24 py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ── LEFT COLUMN: Text Content & Adjusted Compact Pathway Card ── */}
          <div className="space-y-5 lg:col-span-6 xl:col-span-6">
            {/* Accent Dash Eyebrow in Brand Red */}
            <div className="flex items-center gap-2.5">
              <span className="h-[3px] w-7 rounded-full bg-brand-700" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-700">
                Ways to Contribute
              </span>
            </div>

            {/* Bold Headline with Brand Red Highlight */}
            <h2 className="font-sans text-3xl font-black uppercase tracking-tight text-neutral-900 sm:text-4xl lg:text-[42px] leading-tight">
              YOUR SUPPORT IS{" "}
              <span className="text-brand-700">TRULY POWERFUL.</span>
            </h2>

            {/* Concise Narrative Copy from Google Doc 7.2 & 7.7 */}
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
              Every form of contribution creates a lasting impact. Whether you
              volunteer your time, share your skills, organise a fundraiser, or
              donate educational supplies, your involvement helps children move
              forward.
            </p>

            {/* Interactive Tab Switchers */}
            <div className="flex flex-wrap gap-2 pt-0.5">
              {streams.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-brand-700 text-white shadow-xs"
                      : "border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50"
                  }`}
                >
                  {tab.badge}
                </button>
              ))}
            </div>

            {/* Dynamic Active Pathway Card (Self-contained with its own Action Button) */}
            <div className="rounded-2xl sm:rounded-3xl border border-neutral-200/90 bg-[#FAF7F2]/80 p-5 sm:p-6 shadow-xs transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  {currentStream.badge}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-neutral-900 shadow-xs">
                  <currentStream.icon className="h-4 w-4 text-brand-700" />
                </div>
              </div>

              <h3 className="mt-2.5 font-serif text-lg font-bold text-neutral-900 sm:text-xl">
                {currentStream.title}
              </h3>

              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-600">
                {currentStream.desc}
              </p>

              {/* Highlights Check List */}
              <div className="mt-3.5 grid grid-cols-1 gap-1.5 pt-1 sm:grid-cols-2">
                {currentStream.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Link inside Card */}
              <div className="mt-5 border-t border-neutral-200/70 pt-3.5">
                <Link
                  href={currentStream.ctaHref}
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-brand-800 hover:shadow-md"
                >
                  <span>{currentStream.ctaText}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: 3-Image Dynamic Collage (Aligned with Left Column) ── */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            <div className="grid grid-cols-12 items-center gap-3.5 sm:gap-4">
              {/* Sub-column 1 (Left): Two Stacked Photos */}
              <div className="col-span-5 flex flex-col gap-3.5 sm:gap-4">
                {/* Top Photo with Floating Badge */}
                <div className="relative">
                  {/* Floating Circular Badge on Top-Left Corner (Matching Reference) */}
                  <div className="absolute -left-3 -top-3 z-20 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-700 text-white shadow-lg ring-4 ring-white">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>

                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-md">
                    <Image
                      src="/images/cta_learning_children.jpg"
                      alt="Children studying with notebooks and educational kits"
                      fill
                      sizes="(max-width: 1024px) 40vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Bottom Photo */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-md">
                  <Image
                    src="/images/after_school_programme.jpg"
                    alt="Students laughing and participating in after school classes"
                    fill
                    sizes="(max-width: 1024px) 40vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Sub-column 2 (Right): Tall Vertical Photo */}
              <div className="relative col-span-7">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-lg">
                  <Image
                    src="/images/get_involved_volunteer.png"
                    alt="Volunteer mentor teaching slum children in classroom"
                    fill
                    sizes="(max-width: 1024px) 60vw, 35vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Floating Avatar Pill Badge at Bottom (Matching Reference) */}
                <div className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2.5 rounded-full border border-neutral-200/90 bg-white/95 px-4 py-2 shadow-xl backdrop-blur-md whitespace-nowrap">
                  {/* Overlapping Mini Avatars */}
                  <div className="flex -space-x-2">
                    <div className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-[#C05621]">
                      <Image
                        src="/images/step1_identification.jpg"
                        alt="Volunteer 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-brand-700">
                      <Image
                        src="/images/step2_preparation.jpg"
                        alt="Volunteer 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-emerald-600">
                      <Image
                        src="/images/step3_admission.jpg"
                        alt="Volunteer 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-neutral-900">
                    +500+ Active Volunteers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
