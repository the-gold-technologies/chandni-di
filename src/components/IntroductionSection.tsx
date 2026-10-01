"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function IntroductionSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Text & Storytelling */}
        <div className="space-y-6 lg:col-span-7">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-700" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 sm:text-sm">
                1.2 INTRODUCTION TO THE ORGANISATION
              </span>
            </div>

            <h2 className="font-serif text-3xl font-bold leading-[1.16] tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px]">
              Every Child Deserves <br />
              <span className="text-brand-700">an Opportunity</span>
            </h2>
          </div>

          <div className="space-y-3.5 text-base font-normal leading-relaxed text-neutral-700 sm:text-lg">
            <p>
              For children growing up in underserved communities, access to
              education is often shaped by circumstances beyond their control.
            </p>
            <p className="font-semibold text-brand-800">
              At Chandni Di, we believe education can be the beginning of a
              different future.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
              Our work supports children through structured educational
              programmes, after-school learning, counselling, skill development,
              and higher education assistance. We remain involved throughout
              their journey, helping them develop the knowledge, confidence, and
              skills needed to move forward.
            </p>
          </div>

          {/* Editorial Quote Card */}
          <div className="rounded-r-2xl border-y border-l-4 border-r border-brand-700 border-neutral-200/60 bg-neutral-50/80 p-4 sm:p-5">
            <p className="font-serif text-sm font-medium italic leading-relaxed text-neutral-800 sm:text-base">
              “Because education is not simply about getting a child into
              school. It is about helping them build a life of opportunity.”
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-1">
            <Link
              href="/about"
              className="group inline-flex transform items-center gap-2.5 rounded-full bg-brand-700 px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg hover:shadow-brand-700/25"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Column: Layered Editorial Photographic Composition */}
        <div className="relative flex justify-center lg:col-span-5">
          <div className="relative w-full max-w-md">
            {/* Primary Inspiring Photo of Students in Classroom */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.2rem] border-4 border-white bg-neutral-100 shadow-[0_16px_40px_rgba(0,0,0,0.08)] sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/images/hero.jpg"
                alt="Children learning happily in Chandni Di classroom"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            {/* Overlapping Secondary Photo Badge (Top Right) */}
            <div className="absolute -right-5 -top-5 z-20 hidden h-28 w-28 rotate-3 transform overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl transition-transform hover:rotate-0 sm:block">
              <Image
                src="/images/hero_hug.jpg"
                alt="Chandni Di mentoring child"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Bottom Card: Unbroken Continuum */}
            <div className="absolute -bottom-4 left-4 right-4 z-20 flex items-center gap-3.5 rounded-2xl border border-neutral-100 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:left-6 sm:right-6 sm:p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-bold leading-tight text-neutral-900 sm:text-sm">
                  Beyond School Admission
                </div>
                <div className="text-[11px] leading-tight text-neutral-500">
                  Continuous learning from slum to career
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
