"use client";

import React from "react";
import Image from "next/image";
import { Download, Mail, ShieldCheck, Sparkles, Heart } from "lucide-react";
import { CONTACT_INFO } from "@/data/ngoData";

export default function MediaPressKit() {
  return (
    <section
      id="press-kit"
      className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EDE8DE] bg-[#F8F5EE] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] sm:p-10 lg:p-12">
        {/* Decorative Muted Sage Foliage in Bottom-Left Corner — Matching Homepage CTA */}
        <div className="pointer-events-none absolute -bottom-8 -left-6 opacity-60">
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            className="text-[#9EABA2]"
          >
            <path
              d="M30 140C20 110 35 70 65 60C85 53 105 65 110 85C115 105 100 130 75 135C50 140 40 140 30 140Z"
              fill="currentColor"
              opacity="0.8"
            />
            <path
              d="M75 145C85 115 110 95 130 100C145 103 150 120 145 135C140 150 120 160 100 158C85 156 80 150 75 145Z"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M20 90C15 65 35 40 55 45C70 48 75 65 65 80C55 95 30 105 20 90Z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Ambient Warm Corner Glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-100/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-1/3 h-64 w-64 rounded-full bg-amber-100/35 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Eyebrow, Headline, Paragraphs, Action Buttons & Direct Contacts */}
          <div className="space-y-6 lg:col-span-7">
            <div className="space-y-3.5">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-700 ring-1 ring-brand-200">
                <Sparkles className="h-3.5 w-3.5 text-brand-700" />
                Journalists &amp; Broadcasters
              </span>

              <h2 className="font-serif text-3xl font-extrabold leading-[1.16] tracking-tight text-[#1C1814] sm:text-4xl lg:text-[44px]">
                Partner With Us to Spotlight <br />
                <span className="font-serif italic text-brand-700">
                  Stories That Matter.
                </span>
              </h2>
            </div>

            <div className="max-w-xl space-y-3 text-sm leading-relaxed text-[#5C534A] sm:text-base">
              <p>
                Chandni Di and our community educators regularly collaborate
                with broadcast networks, documentary filmmakers, and national
                print journalists. We provide verified impact metrics, classroom
                access, and high-resolution media assets.
              </p>
            </div>

            {/* Action Buttons (Consistent rounded-full pills) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="mailto:contact@chandnidi.org?subject=Press%20Kit%20Request%20-%20Chandni%20Di%20Foundation"
                className="inline-flex transform items-center justify-center gap-2.5 rounded-full bg-brand-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg sm:text-sm"
              >
                <Download className="h-4 w-4" />
                <span>Request Media Kit</span>
              </a>

              <a
                href="mailto:contact@chandnidi.org?subject=Interview%20or%20Media%20Inquiry%20-%20Chandni%20Di%20Foundation"
                className="inline-flex transform items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-md sm:text-sm"
              >
                <Mail className="h-4 w-4 text-neutral-500" />
                <span>Contact Media Desk</span>
              </a>
            </div>

            {/* Direct Media Desk Quick Info */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="font-bold text-neutral-900">Email:</span>
                <a
                  href="mailto:contact@chandnidi.org"
                  className="font-medium text-brand-700 hover:underline"
                >
                  contact@chandnidi.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-neutral-900">Direct Desk:</span>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
                  className="font-medium text-neutral-700 hover:text-brand-700"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Reassurance Safeguard Footnote */}
            <div className="flex items-center gap-2 pt-2 text-xs text-emerald-800">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-700" />
              <span className="font-semibold">
                Strict POCSO Act &amp; Juvenile Justice Safeguarding Compliance
              </span>
            </div>
          </div>

          {/* Right Column: Visual Arch Shape + Sunburst Rays + Floating Polaroid Card */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Sunburst Doodle Rays on Top-Left of Arch */}
              <div className="pointer-events-none absolute -left-4 -top-4 z-10 sm:-left-6 sm:-top-6">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M10 24H2M14 14L8 8M24 10V2M34 14L40 8"
                    stroke="#C62828"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Large Arch / Oval Masked Photo */}
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[3.5rem_3.5rem_2rem_2rem] border-4 border-white/80 bg-neutral-200 shadow-2xl sm:aspect-[16/10]">
                <Image
                  src="/images/hero_hug.jpg"
                  alt="Chandni Di with smiling student"
                  fill
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              {/* Floating Tilted Polaroid Card (Bottom Right - Matching Homepage Style) */}
              <div className="absolute -bottom-4 right-2 z-20 rotate-6 transform rounded-2xl border border-neutral-100 bg-white p-3.5 shadow-2xl transition-transform hover:rotate-2 sm:bottom-2 sm:right-4 sm:p-4">
                <div className="select-none space-y-0.5 text-center font-serif text-xs font-semibold italic text-neutral-800">
                  <div>Voices of</div>
                  <div>Hope &amp;</div>
                  <div>Dignity</div>
                  <div className="flex justify-center pt-1">
                    <Heart className="h-3.5 w-3.5 fill-brand-700 text-brand-700" />
                  </div>
                </div>
              </div>

              {/* Subtle Bottom-Right Subtitle */}
              <div className="pt-5 text-right">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 sm:text-xs">
                  PRESS · IMPACT · STORIES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
