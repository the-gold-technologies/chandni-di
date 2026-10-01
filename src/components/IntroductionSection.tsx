"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function IntroductionSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Text & Storytelling */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-700" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-700">
                1.2 INTRODUCTION TO THE ORGANISATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-900 font-serif tracking-tight leading-[1.16]">
              Every Child Deserves <br />
              <span className="text-brand-700">an Opportunity</span>
            </h2>
          </div>

          <div className="space-y-3.5 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            <p>
              For children growing up in underserved communities, access to
              education is often shaped by circumstances beyond their control.
            </p>
            <p className="font-semibold text-brand-800">
              At Chandni Di, we believe education can be the beginning of a
              different future.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Our work supports children through structured educational
              programmes, after-school learning, counselling, skill development,
              and higher education assistance. We remain involved throughout
              their journey, helping them develop the knowledge, confidence, and
              skills needed to move forward.
            </p>
          </div>

          {/* Editorial Quote Card */}
          <div className="border-l-4 border-brand-700 bg-neutral-50/80 rounded-r-2xl p-4 sm:p-5 border-y border-r border-neutral-200/60">
            <p className="text-sm sm:text-base text-neutral-800 font-medium italic font-serif leading-relaxed">
              “Because education is not simply about getting a child into
              school. It is about helping them build a life of opportunity.”
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-1">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg hover:shadow-brand-700/25 transform hover:-translate-y-0.5 group"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Layered Editorial Photographic Composition */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Primary Inspiring Photo of Students in Classroom */}
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full rounded-[2.2rem] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.08)] border-4 border-white bg-neutral-100">
              <Image
                src="/images/hero.jpg"
                alt="Children learning happily in Chandni Di classroom"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Secondary Photo Badge (Top Right) */}
            <div className="hidden sm:block absolute -top-5 -right-5 w-28 h-28 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white z-20 transform rotate-3 transition-transform hover:rotate-0">
              <Image
                src="/images/hero_hug.jpg"
                alt="Chandni Di mentoring child"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Bottom Card: Unbroken Continuum */}
            <div className="absolute -bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-neutral-100 z-20 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">
                  Beyond School Admission
                </div>
                <div className="text-[11px] text-neutral-500 leading-tight">
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
