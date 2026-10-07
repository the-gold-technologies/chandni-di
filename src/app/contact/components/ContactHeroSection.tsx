"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ContactHeroSection() {
  return (
    <section className="relative flex min-h-[540px] items-center overflow-hidden border-b border-neutral-200/60 bg-[#FAF7F2] lg:min-h-[600px] xl:min-h-[660px]">
      {/* Subtle background ambient blurs (Exact match to About Us page) */}
      <div className="pointer-events-none absolute -left-32 -top-32 z-0 h-[500px] w-[500px] rounded-full bg-brand-100/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 z-0 h-[400px] w-[400px] rounded-full bg-amber-100/30 blur-3xl" />

      {/* Full-width SVG line vectors — background ambient layer matching About Us page */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="120" cy="80" r="3" fill="#D96B27" opacity="0.18" />
        <circle cx="145" cy="100" r="2" fill="#D96B27" opacity="0.14" />
        <circle cx="96" cy="108" r="1.5" fill="#D96B27" opacity="0.12" />
      </svg>

      {/* Right Side Realistic Photographic Scene with Soft Horizontal Ambient Blend */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-0 h-full w-full lg:w-[62%] xl:w-[60%]">
        <Image
          src="/images/contact_hero.jpg"
          alt="Chandni Di community educators welcoming supporters and volunteers at community learning centre"
          fill
          priority
          className="object-cover object-center lg:object-right"
        />
        {/* Soft horizontal gradient overlay in matching #FAF7F2 tone to blend seamlessly into the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/95 via-35% to-transparent lg:via-[#FAF7F2]/85" />
        {/* Subtle top and bottom blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/30 via-transparent to-[#FAF7F2]/40" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="max-w-xl space-y-6 sm:space-y-7 lg:max-w-2xl">
          {/* Eyebrow Tag matching About Us page style */}
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-200">
              Contact &amp; Connect
            </span>
          </div>

          {/* Main Headline from Google Doc Section 10 */}
          <h1 className="font-serif text-3xl font-extrabold leading-[1.14] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px]">
            Let&apos;s Work Together Towards a{" "}
            <span className="font-serif italic text-brand-700">
              Child&apos;s Future
            </span>
          </h1>

          {/* Supporting Copy verbatim from Google Doc */}
          <p className="max-w-xl text-base font-normal leading-relaxed text-neutral-700 sm:text-lg lg:text-xl">
            Whether you want to support a child&apos;s education, volunteer,
            explore a partnership, or learn more about our work, we would love
            to hear from you.
          </p>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href="#contact-form"
              className="inline-flex transform items-center justify-center gap-3 rounded-full bg-brand-700 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-xl hover:shadow-brand-700/25 sm:text-base"
            >
              <span>SUBMIT ENQUIRY</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
