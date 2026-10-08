"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function TransparencyHero() {
  return (
    <section className="relative flex min-h-[540px] items-center overflow-hidden border-b border-neutral-200/60 bg-[#FAF7F2] lg:min-h-[600px] xl:min-h-[660px]">
      {/* Subtle background ambient blurs (Exact match to Contact & About Us pages) */}
      <div className="pointer-events-none absolute -left-32 -top-32 z-0 h-[500px] w-[500px] rounded-full bg-brand-100/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 z-0 h-[400px] w-[400px] rounded-full bg-amber-100/30 blur-3xl" />

      {/* SVG dots background layer */}
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
          src="/images/transparency_trust.jpg"
          alt="Chandni Di Foundation institutional trust, classroom accountability, and governance verification"
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
          {/* Eyebrow Tag matching Contact page style */}
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-200">
              Trust &amp; Transparency
            </span>
          </div>

          {/* Main Headline verbatim from Google Doc */}
          <h1 className="font-serif text-3xl font-extrabold leading-[1.14] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px]">
            Building Trust Through{" "}
            <span className="font-serif italic text-brand-700">
              Accountability
            </span>
          </h1>

          {/* Supporting Copy verbatim from Google Doc */}
          <p className="max-w-xl text-base font-normal leading-relaxed text-neutral-700 sm:text-lg lg:text-xl">
            We believe transparency and accountability are essential to
            responsible social impact. We aim to share relevant organisational
            information and documentation so supporters can better understand
            our work and governance.
          </p>

          {/* Trust Badges Strip */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-semibold text-neutral-700">
            <span className="shadow-2xs backdrop-blur-xs inline-flex items-center gap-1.5 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 py-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Section 80G Certified</span>
            </span>
            <span className="shadow-2xs backdrop-blur-xs inline-flex items-center gap-1.5 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 py-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Section 12A Non-Profit</span>
            </span>
            <span className="shadow-2xs backdrop-blur-xs inline-flex items-center gap-1.5 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 py-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>NITI Aayog NGO Darpan</span>
            </span>
            <span className="shadow-2xs backdrop-blur-xs inline-flex items-center gap-1.5 rounded-full border border-neutral-200/90 bg-white/90 px-3.5 py-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Annual CA Audited</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
