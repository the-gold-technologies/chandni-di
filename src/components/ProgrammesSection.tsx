"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ProgrammesSection() {
  const programmes = [
    {
      id: "bridge",
      num: "01",
      title: "Bridge Programme",
      category: "Foundational",
      tag: "Ages 5–12 Years",
      eyebrow: "Preparing children for formal education",
      quote:
        "We help children between the ages of 5 and 12 build foundational academic skills and prepare for admission into mainstream schools.",
      link: "/programmes#bridge",
      // Background Image & Soft Blurry Reduced Black Overlay
      image: "/images/hero_hug.jpg",
      bgClass: "bg-[#18181b]",
      gradientClass: "bg-gradient-to-t from-black/85 via-black/50 to-black/30",
      ambientClass: "bg-black/20 backdrop-blur-[2px]",
      textClass: "text-white",
      subtextClass: "text-white/90 drop-shadow-sm",
      quoteIconClass: "text-white/40 drop-shadow-sm",
      badgeClass:
        "bg-black/40 text-white backdrop-blur-md border border-white/20 shadow-sm",
      avatarClass: "bg-black/40 text-white border border-white/20 shadow-sm",
      buttonClass:
        "bg-black/40 hover:bg-white text-white hover:text-black shadow-md border border-white/20",
      role: "Ages 5–12 • School Readiness",
    },
    {
      id: "after-school",
      num: "02",
      title: "After-School Programme",
      category: "Tutoring",
      tag: "School Students",
      eyebrow: "Strengthening learning, confidence, and character",
      quote:
        "We support children already enrolled in school through tuition, academic assistance, counselling, and skill development.",
      link: "/programmes#after-school",
      // Background Image & Soft Blurry Reduced Black Overlay
      image: "/images/hero_classroom_banner.jpg",
      bgClass: "bg-[#18181b]",
      gradientClass: "bg-gradient-to-t from-black/85 via-black/50 to-black/30",
      ambientClass: "bg-black/20 backdrop-blur-[2px]",
      textClass: "text-white",
      subtextClass: "text-white/90 drop-shadow-sm",
      quoteIconClass: "text-white/40 drop-shadow-sm",
      badgeClass:
        "bg-black/40 text-white backdrop-blur-md border border-white/20 shadow-sm",
      avatarClass: "bg-black/40 text-white border border-white/20 shadow-sm",
      buttonClass:
        "bg-black/40 hover:bg-white text-white hover:text-black shadow-md border border-white/20",
      role: "Enrolled Students • Daily Guidance",
    },
    {
      id: "college",
      num: "03",
      title: "College to Career",
      category: "Higher Ed",
      tag: "Higher Education & Jobs",
      eyebrow: "Connecting education with opportunity",
      quote:
        "We help students pursue higher education, develop relevant skills, and prepare for future career opportunities.",
      link: "/programmes#college-to-career",
      // Background Image & Soft Blurry Reduced Black Overlay
      image: "/images/palak.jpg",
      bgClass: "bg-[#18181b]",
      gradientClass: "bg-gradient-to-t from-black/85 via-black/50 to-black/30",
      ambientClass: "bg-black/20 backdrop-blur-[2px]",
      textClass: "text-white",
      subtextClass: "text-white/90 drop-shadow-sm",
      quoteIconClass: "text-white/40 drop-shadow-sm",
      badgeClass:
        "bg-black/40 text-white backdrop-blur-md border border-white/20 shadow-sm",
      avatarClass: "bg-black/40 text-white border border-white/20 shadow-sm",
      buttonClass:
        "bg-black/40 hover:bg-white text-white hover:text-black shadow-md border border-white/20",
      role: "Higher Education • 100% Sponsored",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Playful Top-Right Paper Airplane with Dashed Trail */}
      <div className="pointer-events-none absolute -top-2 right-4 hidden opacity-80 sm:right-8 sm:block lg:right-16">
        <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
          {/* Dashed flight loop */}
          <path
            d="M10 95C45 100 85 85 80 55C75 25 35 45 55 70C70 90 105 50 135 25"
            stroke="#5B7865"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          {/* Paper airplane body */}
          <g transform="translate(115, 12) rotate(15)">
            <path
              d="M26 2L2 14L12 18L16 28L20 20L26 2Z"
              fill="white"
              stroke="#173425"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M26 2L12 18"
              stroke="#173425"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
          {/* Sparkle stars */}
          <path
            d="M138 6C138 9 140 10 140 10C140 10 138 11 138 14C138 11 136 10 136 10C136 10 138 9 138 6Z"
            fill="#B85A67"
          />
          <path
            d="M144 26C144 28 145 29 145 29C145 29 144 30 144 32C144 30 143 29 143 29C143 29 144 28 144 26Z"
            fill="#B85A67"
          />
        </svg>
      </div>

      {/* Header Area with Playful Script Highlight in Deep Forest Green */}
      <div className="mx-auto mb-12 max-w-3xl space-y-3.5 text-center">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand-700" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 sm:text-sm">
            Our Programmes
          </span>
        </div>

        <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1C1814] sm:text-4xl lg:text-[44px] lg:leading-tight">
          Supporting a Child at Every Stage of Their{" "}
          <span className="font-handwriting text-4xl font-semibold text-brand-700 sm:text-5xl lg:text-[54px]">
            Journey
          </span>
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#5C534A] sm:text-base">
          From preparing children for school to helping them pursue higher
          education and career opportunities, our programmes are designed to
          provide continuous support.
        </p>
      </div>

      {/* Cards Grid: Warm Terracotta Rose, Deep Forest Green, and Eucalyptus Sage */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {programmes.map((prog) => (
          <div
            key={prog.id}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] p-7 shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.16)] sm:p-8 ${prog.bgClass}`}
          >
            {/* Background Authentic Photo as per content with subtle zoom on hover */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <Image
                src={prog.image}
                alt={prog.title}
                fill
                className="object-cover object-center opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Shaded Color Gradient Overlay guaranteeing text contrast */}
              <div className={`absolute inset-0 ${prog.gradientClass}`} />
              {/* Subtle ambient radial highlight */}
              <div className={`absolute inset-0 ${prog.ambientClass}`} />
            </div>

            {/* Foreground Content with crisp contrast */}
            <div className="relative z-10 flex h-full flex-col justify-between">
              {/* Top Row: Large Decorative Quotation Mark & Age Pill */}
              <div className="flex items-start justify-between">
                {/* Solid Quote Marks */}
                <div className={prog.quoteIconClass}>
                  <svg
                    className="h-10 w-10 fill-current sm:h-12 sm:w-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stage / Age Pill */}
                <span
                  className={`shadow-xs rounded-full px-3.5 py-1 text-xs font-bold tracking-wide ${prog.badgeClass}`}
                >
                  {prog.tag}
                </span>
              </div>

              {/* Middle: Impact Quote / Description */}
              <div className="my-6 space-y-3">
                <h3
                  className={`font-serif text-xl font-bold leading-snug sm:text-2xl ${prog.textClass}`}
                >
                  {prog.title}
                </h3>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${prog.subtextClass}`}
                >
                  {prog.eyebrow}
                </p>
                <p className={`text-sm leading-relaxed ${prog.subtextClass}`}>
                  &ldquo;{prog.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Row: Avatar Circle + Name + Role + Action Link */}
              <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  {/* Circular Avatar with Initial / Number */}
                  <div
                    className={`shadow-xs flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-serif text-base font-bold ${prog.avatarClass}`}
                  >
                    {prog.num}
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-bold leading-tight ${prog.textClass}`}
                    >
                      {prog.title}
                    </h4>
                    <p
                      className={`text-[11px] font-medium uppercase tracking-wider ${prog.subtextClass}`}
                    >
                      {prog.role}
                    </p>
                  </div>
                </div>

                {/* Learn More Arrow Icon Link */}
                <Link
                  href={prog.link}
                  aria-label={`Learn more about ${prog.title}`}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110 ${prog.buttonClass}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Soft Pink Heart Doodle in Bottom Right Corner */}
      <div className="pointer-events-none absolute -bottom-2 right-4 hidden opacity-80 sm:right-8 sm:block">
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <path
            d="M24 41C24 41 6 29 6 17C6 11 10.5 7 16 7C19.5 7 22.5 9 24 12C25.5 9 28.5 7 32 7C37.5 7 42 11 42 17C42 29 24 41 24 41Z"
            fill="#F8B4C0"
          />
        </svg>
      </div>

      {/* Bottom Action CTA Pill Button */}
      <div className="mt-10 text-center">
        <Link
          href="/programmes"
          className="group inline-flex transform items-center gap-3 rounded-full bg-brand-700 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg"
        >
          <span>Explore All Programmes</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
