"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  GraduationCap,
  Calendar,
  Quote,
  Award,
  BookOpen,
  MapPin,
  Heart,
  Share2,
  Check,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Story } from "@/data/ngoData";

interface StoryHeroProps {
  story: Story;
}

export default function StoryHero({ story }: StoryHeroProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window === "undefined") return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${story.name}'s Story of Change | Chandni Di`,
          text: story.excerpt || story.title,
          url: window.location.href,
        });
        return;
      } catch {
        // User cancelled share dialog or not supported
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/70 to-white pb-12 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-40">
      {/* Subtle ambient blur */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-amber-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Top Bar: Breadcrumb Navigation & Verification Badges ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200/70 pb-5">
          <Link
            href="/stories-of-change"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 transition-colors hover:text-brand-700"
          >
            <ArrowLeft className="h-4 w-4 text-brand-700 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Stories</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold text-brand-800 ring-1 ring-brand-200">
              <GraduationCap className="h-3.5 w-3.5 text-brand-700" />
              <span>{story.category || "Scholar Journey"}</span>
            </span>

            {story.scholarSince && (
              <span className="shadow-2xs inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-600 ring-1 ring-neutral-200">
                <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                <span>Scholar since {story.scholarSince}</span>
              </span>
            )}

            <button
              onClick={handleShare}
              type="button"
              className="shadow-2xs inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-600 ring-1 ring-neutral-200 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
              title="Share this story"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span className="font-bold text-emerald-700">
                    Link Copied!
                  </span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5 text-neutral-500" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── Title & Editorial Headline Block ── */}
        <div className="mt-8 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/80">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{story.course}</span>
          </div>

          <h1 className="font-serif text-3xl font-extrabold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {story.title}
          </h1>

          <p className="font-sans text-base font-medium text-brand-800 sm:text-lg">
            {story.subtitle}
          </p>
        </div>

        {/* ── 2-Column Hero Showcase (Balanced Photo + Profile Insights) ── */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Authentic Portrait */}
          <div className="relative flex flex-col justify-center lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border-4 border-white bg-neutral-200 shadow-2xl lg:h-full lg:min-h-[460px] lg:max-w-none">
              <Image
                src={story.image}
                alt={`Portrait of ${story.name}`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Floating Top Verification Badge */}
              <div className="absolute left-4 top-4 z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-neutral-900 shadow-md backdrop-blur-md">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Verified Scholar</span>
                </span>
              </div>

              {/* Bottom Photo Overlay */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white sm:p-7">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-200">
                  Featured Scholar
                </span>
                <h2 className="font-serif text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {story.name}
                </h2>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-neutral-200 sm:text-sm">
                  <MapPin className="h-3.5 w-3.5 text-brand-300" />
                  <span>{story.institution}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quote, Academic Fact Sheet & Immediate Impact CTA ── */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
            {/* Quote Callout */}
            {story.quote && (
              <div className="relative rounded-2xl border-l-4 border-brand-700 bg-white/90 p-6 shadow-sm ring-1 ring-neutral-200/70 sm:p-7">
                <Quote className="absolute right-4 top-4 h-10 w-10 text-neutral-200" />
                <p className="font-serif text-lg font-semibold italic leading-relaxed text-neutral-900 sm:text-xl">
                  {story.quote}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-brand-800">
                  — In {story.name}&apos;s Own Words
                </p>
              </div>
            )}

            {/* Quick Facts Grid */}
            <div className="shadow-xs grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200/80 bg-white p-5 text-xs sm:grid-cols-3">
              <div>
                <span className="font-bold uppercase tracking-wider text-neutral-400">
                  Institution
                </span>
                <p className="mt-1 font-semibold text-neutral-900 sm:text-sm">
                  {story.institution}
                </p>
              </div>
              <div>
                <span className="font-bold uppercase tracking-wider text-neutral-400">
                  Course / Stream
                </span>
                <p className="mt-1 font-semibold text-neutral-900 sm:text-sm">
                  {story.course}
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="font-bold uppercase tracking-wider text-neutral-400">
                  Sponsorship
                </span>
                <p className="mt-1 flex items-center gap-1 font-semibold text-emerald-700 sm:text-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{story.fundingStatus || "100% Fully Supported"}</span>
                </p>
              </div>
            </div>

            {/* Milestones & Honors */}
            {story.academicFeats && story.academicFeats.length > 0 && (
              <div className="shadow-xs rounded-2xl border border-neutral-200/80 bg-white p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Key Milestones &amp; Academic Honors
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {story.academicFeats.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-brand-200/80 bg-brand-50/80 px-3.5 py-1.5 text-xs font-bold text-brand-900"
                    >
                      <Award className="h-3.5 w-3.5 text-brand-700" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Hero Sponsor Action */}
            <div className="shadow-xs flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-brand-200/80 bg-gradient-to-r from-brand-50/90 to-brand-100/40 p-5">
              <div>
                <p className="font-serif text-base font-bold text-neutral-900">
                  Inspired by {story.name}&apos;s journey?
                </p>
                <p className="text-xs text-neutral-600">
                  Just ₹1,500/month sponsors tuition, textbooks &amp; mentoring
                  for a child.
                </p>
              </div>
              <Link
                href={`/get-involved#donate?student=${story.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md"
              >
                <Heart className="h-3.5 w-3.5 fill-white text-white" />
                <span>Sponsor a Scholar</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
