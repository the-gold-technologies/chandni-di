"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Award,
  BookOpen,
} from "lucide-react";

export default function StoriesCtaSection() {
  return (
    <section className="bg-white pb-20 pt-10 sm:pb-28 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2-Column Storyteller CTA Banner */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EAE3D6] bg-gradient-to-br from-[#FAF7F2] via-[#FFFDF9] to-[#F5EFE6] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:p-12 lg:p-16">
          {/* Subtle Ambient Background Glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* ── Left Column: Headline, Narrative & Actions ── */}
            <div className="space-y-6 lg:col-span-7">
              {/* Eyebrow Pill */}
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/80">
                <Sparkles className="h-3.5 w-3.5 text-brand-700" />
                Be The Turning Point
              </span>

              {/* Bold Editorial Headline */}
              <h2 className="font-serif text-3xl font-extrabold leading-[1.18] tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px]">
                Help Us Write The Next{" "}
                <span className="font-serif italic text-brand-700">
                  Story of Change
                </span>
              </h2>

              {/* Heartfelt Story Narrative */}
              <p className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                Behind every university scholar and school topper is a sponsor
                who refused to let poverty decide their destiny. With just{" "}
                <strong className="font-semibold text-neutral-900">
                  ₹1,500/month
                </strong>
                , you provide school fees, books, nutritious meals, and daily
                coaching to break generational poverty.
              </p>

              {/* Tangible Impact Highlights */}
              <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
                <div className="shadow-2xs flex items-start gap-3 rounded-2xl border border-neutral-200/80 bg-white/90 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-serif text-base font-bold text-neutral-900">
                      ₹1,500 / Month
                    </span>
                    <p className="text-xs text-neutral-500">
                      Full tuition, books, uniform &amp; mentor
                    </p>
                  </div>
                </div>

                <div className="shadow-2xs flex items-start gap-3 rounded-2xl border border-neutral-200/80 bg-white/90 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-serif text-base font-bold text-neutral-900">
                      50% Tax Exemption
                    </span>
                    <p className="text-xs text-neutral-500">
                      Eligible under Section 80G with instant receipt
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/get-involved#donate"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-brand-700 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-brand-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-xl hover:shadow-brand-700/30"
                >
                  <Heart className="h-4 w-4 fill-white" />
                  <span>Sponsor a Child Today</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/transparency"
                  className="shadow-2xs inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-800 transition-all duration-300 hover:border-brand-700 hover:text-brand-700"
                >
                  <ShieldCheck className="h-4 w-4 text-neutral-500" />
                  <span>View 80G &amp; Transparency</span>
                </Link>
              </div>

              {/* Trust Assurance Checklist */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  NGO Darpan Verified (NITI Aayog)
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  Instant 80G Tax Receipt
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  Regular Scholar Progress Reports
                </span>
              </div>
            </div>

            {/* ── Right Column: Emotional Photography & Floating Badges ── */}
            <div className="relative flex flex-col justify-center lg:col-span-5">
              {/* Outer Layered Photographic Frame */}
              <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border-4 border-white bg-neutral-100 shadow-2xl lg:h-full lg:max-w-none lg:min-h-[520px]">
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:h-full lg:min-h-[520px] lg:aspect-auto">
                  <Image
                    src="/images/step3_admission.jpg"
                    alt="Children joyfully walking out of school with backpacks after admission"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Floating Top Badge */}
                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-neutral-900 shadow-md backdrop-blur-md">
                    <Award className="h-4 w-4 text-brand-700" />
                    <span>500+ Children Mainstreamed</span>
                  </span>
                </div>

                {/* Bottom Overlay Inside Photo */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-6">
                  <p className="font-serif text-sm font-semibold italic text-neutral-100 sm:text-base sm:leading-snug">
                    &ldquo;School wasn&apos;t just a distant dream anymore—it
                    became our everyday reality.&rdquo;
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-neutral-300">
                    — Supported Scholars, Chandni Di Foundation
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Background Corner Accent */}
              <div className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-3xl bg-brand-200/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
