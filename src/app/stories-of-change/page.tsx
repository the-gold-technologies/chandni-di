import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Quote,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Heart,
  CheckCircle2,
  BookOpen,
  Award,
} from "lucide-react";
import { STORIES_OF_CHANGE } from "@/data/ngoData";

export const metadata: Metadata = {
  title: "Stories of Change | Chandni Di — Real Journeys of Transformation",
  description:
    "Read inspiring stories of children supported by Chandni Di who overcame extreme circumstances in slums to excel in school, university, and beyond.",
};

export default function StoriesOfChangePage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]/40 pb-20">
      {/* ── 1. HERO SECTION ── */}
      <section className="hero-radial-bg border-b border-neutral-200/60 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
              <Sparkles className="h-3.5 w-3.5 text-brand-700" />
              5. Beneficiary Journeys
            </span>

            <h1 className="font-serif text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Every Child Has a Story.{" "}
              <span className="text-brand-700">
                Every Opportunity Changes Its Direction.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-xl">
              The children we work with come from difficult circumstances, but
              their aspirations remind us of the power of sustained support,
              daily mentorship, and believing in their potential.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. FEATURED STORIES GRID ── */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="space-y-16 lg:space-y-24">
          {STORIES_OF_CHANGE.map((story, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={story.id}
                id={story.id}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-soft transition-all hover:shadow-card sm:p-10 lg:p-12"
              >
                <div
                  className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14 ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Visual Portrait Column */}
                  <div className="relative flex flex-col items-center lg:col-span-5">
                    <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200 shadow-md">
                      <Image
                        src={story.image}
                        alt={`Portrait of ${story.name}`}
                        fill
                        className="object-cover object-top transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                        <div className="text-lg font-bold">{story.name}</div>
                        <div className="text-xs text-neutral-200">
                          {story.institution}
                        </div>
                      </div>
                    </div>

                    {/* Academic Badges */}
                    <div className="mt-4 flex w-full max-w-md flex-wrap gap-2">
                      {story.academicFeats.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center gap-1 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800"
                        >
                          <Award className="h-3 w-3 text-brand-700" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Story Narrative Column */}
                  <div className="space-y-5 lg:col-span-7">
                    <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold text-neutral-700">
                      <GraduationCap className="h-3.5 w-3.5 text-brand-700" />
                      {story.course}
                    </div>

                    <h2 className="font-serif text-2xl font-extrabold text-neutral-900 sm:text-3xl lg:text-4xl">
                      {story.title}
                    </h2>

                    <p className="text-sm font-semibold text-brand-700 sm:text-base">
                      {story.subtitle}
                    </p>

                    <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
                      {story.story}
                    </p>

                    {/* Personal Quote Callout */}
                    <div className="relative rounded-2xl border-l-4 border-brand-700 bg-[#FAF7F2] p-5 shadow-inner sm:p-6">
                      <Quote className="absolute right-4 top-4 h-8 w-8 text-neutral-300" />
                      <p className="font-serif text-base font-semibold italic text-neutral-900 sm:text-lg">
                        {story.quote}
                      </p>
                      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                        — {story.name}&apos;s Words of Gratitude
                      </p>
                    </div>

                    {/* Future Aspiration / Dream */}
                    <div className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-4">
                      <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-700" />
                      <div className="text-xs text-neutral-700 sm:text-sm">
                        <span className="font-bold text-neutral-900">
                          Future Vision:{" "}
                        </span>
                        {story.dream}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/get-involved#donate"
                        className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow"
                      >
                        <Heart className="h-4 w-4 fill-white" />
                        <span>Support a Student Like {story.name}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. BOTTOM CTA ── */}
      <section className="mx-auto mt-20 max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#EDE5DA] bg-white p-8 shadow-card sm:p-12">
          <h3 className="font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
            You Can Write the Next Story of Change
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Hundreds of promising children in Delhi&apos;s slum clusters are
            waiting for a chance to enter a classroom. With just ₹1,500/month,
            you can make their dream possible.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-800"
            >
              <Heart className="h-4 w-4 fill-white" />
              <span>Sponsor a Child Today</span>
            </Link>
            <Link
              href="/transparency"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-bold text-neutral-800 shadow-sm transition-all hover:border-brand-700 hover:text-brand-700"
            >
              <span>Our Transparency &amp; 80G</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
