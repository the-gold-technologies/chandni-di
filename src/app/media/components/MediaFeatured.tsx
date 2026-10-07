"use client";

import React from "react";
import {
  BookOpen,
  Tv,
  ArrowUpRight,
  ShieldCheck,
  PlayCircle,
} from "lucide-react";
import { MEDIA_ITEMS } from "@/data/mediaData";

export default function MediaFeatured() {
  const wikipedia = MEDIA_ITEMS.find((i) => i.id === "wikipedia-chandni");
  const gntInterview = MEDIA_ITEMS.find(
    (i) => i.id === "gnt-exclusive-interview"
  );
  const documentary = MEDIA_ITEMS.find((i) => i.id === "youtube-documentary");

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
          Flagship Recognition
        </span>
        <h2 className="mt-2 font-serif text-2xl font-extrabold text-neutral-900 sm:text-3xl">
          National Spotlights &amp; Global Citations
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Spotlight 1: Wikipedia Biography (Spans 7 cols) */}
        {wikipedia && (
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-white bg-gradient-to-br from-white via-neutral-50/80 to-[#FAF7F2] p-7 shadow-xl ring-1 ring-neutral-200/80 sm:p-9 lg:col-span-7">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-sm">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Wikipedia The Free Encyclopedia
                    </span>
                    <h3 className="font-serif text-xl font-black text-neutral-900 sm:text-2xl">
                      Chandni Khan Biography
                    </h3>
                  </div>
                </div>
                <span className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 ring-1 ring-emerald-200/80 sm:inline-flex">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
                  Public Record
                </span>
              </div>

              <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
                Chandni Khan&apos;s journey from working as a child ragpicker to
                establishing learning centers and founding Voice of Slum is
                documented on Wikipedia. The entry chronicles her life story,
                street journalism initiatives, and educational activism across
                India.
              </p>

              <div className="rounded-2xl border border-neutral-200/90 bg-white/90 p-4 text-xs text-neutral-600 sm:text-sm">
                <p className="font-semibold text-neutral-900">
                  &ldquo;A young leader transforming street children into voices
                  of hope and education.&rdquo;
                </p>
                <span className="mt-1 block text-[11px] text-neutral-500">
                  — Wikipedia Citation &amp; Documented Chronology
                </span>
              </div>
            </div>

            <div className="mt-6 border-t border-neutral-200/70 pt-4">
              <a
                href={wikipedia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-neutral-800 hover:shadow-md sm:text-sm"
              >
                <span>Read Full Biography on Wikipedia</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}

        {/* Spotlight 2: GNT & India Today Interview + Documentary (Spans 5 cols) */}
        <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
          {gntInterview && (
            <div className="flex flex-1 flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-soft transition-all hover:shadow-card sm:p-7">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-200/70">
                    <Tv className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-800">
                    Good News Today
                  </span>
                </div>

                <h4 className="font-serif text-lg font-bold text-neutral-900 sm:text-xl">
                  {gntInterview.title}
                </h4>

                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  {gntInterview.description}
                </p>
              </div>

              <div className="mt-5 border-t border-neutral-100 pt-3">
                <a
                  href={gntInterview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-800"
                >
                  <span>Read Article on GNT TV</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}

          {documentary && (
            <div className="flex flex-1 flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-soft transition-all hover:shadow-card sm:p-7">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-200/70">
                    <PlayCircle className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800">
                    Documentary Film
                  </span>
                </div>

                <h4 className="font-serif text-lg font-bold text-neutral-900 sm:text-xl">
                  {documentary.title}
                </h4>

                <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  {documentary.description}
                </p>
              </div>

              <div className="mt-5 border-t border-neutral-100 pt-3">
                <a
                  href={documentary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-800"
                >
                  <span>Watch on YouTube</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
