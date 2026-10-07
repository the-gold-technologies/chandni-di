"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  ArrowLeft,
  CheckCircle2,
  Share2,
  Check,
  ShieldCheck,
  BookOpen,
  Award,
} from "lucide-react";
import { Story } from "@/data/ngoData";

interface StoryNarrativeSectionProps {
  story: Story;
}

export default function StoryNarrativeSection({ story }: StoryNarrativeSectionProps) {
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
        // User cancelled share
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

  const paragraphs = story.story.split("\n\n").filter(Boolean);

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ── Main Narrative Column (8 cols) ── */}
          <div className="space-y-8 lg:col-span-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                In-Depth Narrative
              </span>
              <h2 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
                Walking with {story.name}
              </h2>
            </div>

            {/* Formatted Story Paragraphs */}
            <div className="space-y-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? "text-lg font-medium leading-relaxed text-neutral-800 sm:text-xl"
                      : "text-neutral-700 leading-relaxed"
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Future Dream / Aspiration Card */}
            {story.dream && (
              <div className="relative overflow-hidden rounded-3xl border border-amber-200/90 bg-gradient-to-br from-amber-50/90 via-amber-100/40 to-[#FAF7F2] p-6 shadow-xs sm:p-8">
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-amber-200/40 blur-2xl" />

                <div className="relative flex items-start gap-4 sm:gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-200/90 text-amber-900 shadow-2xs">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      Aspiration &amp; Future Vision
                    </span>
                    <h3 className="font-serif text-xl font-bold text-neutral-900 sm:text-2xl">
                      Where {story.name} Is Headed
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-800 sm:text-base">
                      {story.dream}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Actions for Story */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6">
              <Link
                href="/stories-of-change"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 transition-colors hover:text-brand-700"
              >
                <ArrowLeft className="h-4 w-4 text-brand-700 transition-transform group-hover:-translate-x-1" />
                <span>Back to All Stories</span>
              </Link>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5 text-neutral-500" />
                      <span>Share Story</span>
                    </>
                  )}
                </button>

                <Link
                  href={`/get-involved#donate?student=${story.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md"
                >
                  <Heart className="h-4 w-4 fill-white text-white" />
                  <span>Support Scholars Like {story.name}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ── Sticky Companion Sidebar (4 cols) ── */}
          <div className="space-y-6 lg:col-span-4 lg:sticky lg:top-28">
            {/* Impact Sponsorship Card */}
            <div className="relative overflow-hidden rounded-3xl border border-brand-200/90 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F5EFE6] p-6 shadow-md sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white shadow-sm">
                  <Heart className="h-5 w-5 fill-white text-white" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                    Sponsor Education
                  </span>
                  <h3 className="font-serif text-lg font-bold text-neutral-900">
                    Make Change Possible
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Behind every scholar is a generous donor who decided to act. Help us provide full tuition, books, and coaching for another deserving child.
              </p>

              {/* Amount Highlight */}
              <div className="mt-4 rounded-2xl border border-neutral-200/80 bg-white/95 p-3.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-neutral-500">
                    Suggested Support
                  </span>
                  <span className="font-serif text-base font-bold text-brand-800">
                    ₹1,500 / month
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-neutral-500">
                  Covers full school tuition, books &amp; daily mentor handholding.
                </p>
              </div>

              {/* Action Button */}
              <Link
                href={`/get-involved#donate?student=${story.id}`}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md"
              >
                <Heart className="h-4 w-4 fill-white text-white" />
                <span>Sponsor a Student</span>
              </Link>

              {/* Trust Checklist */}
              <div className="mt-5 space-y-2.5 border-t border-neutral-200/70 pt-4 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>100% of donation directly funds education</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Instant 80G tax exemption certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Verified NGO &amp; regular progress reports</span>
                </div>
              </div>
            </div>

            {/* Quick Profile Summary Card */}
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-5 text-xs shadow-xs">
              <span className="font-bold uppercase tracking-wider text-neutral-400">
                Scholar Profile
              </span>
              <div className="mt-3 space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Scholar</span>
                  <span className="font-semibold text-neutral-900">{story.name}</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Course</span>
                  <span className="font-semibold text-neutral-900">{story.course}</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Institution</span>
                  <span className="max-w-[180px] text-right font-semibold text-neutral-900 truncate">
                    {story.institution}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Status</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    Verified
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
