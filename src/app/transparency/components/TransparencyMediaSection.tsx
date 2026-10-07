"use client";

import React from "react";
import Link from "next/link";
import {
  ExternalLink,
  BookOpen,
  Tv,
  Newspaper,
  Video,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";
import { MEDIA_ITEMS } from "@/data/mediaData";

export default function TransparencyMediaSection() {
  // Highlight top 4 verified public sources
  const showcaseItems = MEDIA_ITEMS.filter((i) =>
    [
      "wikipedia-chandni",
      "gnt-exclusive-interview",
      "dainik-jagran-bhaskar",
      "youtube-documentary",
    ].includes(i.id)
  );

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-start justify-between gap-4 border-b border-neutral-200/80 pb-6 sm:flex-row sm:items-end">
        <div>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            Public Credibility
          </span>
          <h2 className="mt-2 font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Media Recognition &amp; Public Trust
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Our grassroots impact is verified and documented across national
            broadcast television, print news investigative reports, and global
            encyclopedias.
          </p>
        </div>

        <Link
          href="/media"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md sm:text-sm"
        >
          <span>View All Media</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Grid of 4 High-Trust Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {showcaseItems.map((item) => {
          const getIcon = () => {
            switch (item.iconType) {
              case "wikipedia":
                return <BookOpen className="h-5 w-5 text-neutral-900" />;
              case "tv":
                return <Tv className="h-5 w-5 text-red-600" />;
              case "newspaper":
                return <Newspaper className="h-5 w-5 text-amber-700" />;
              case "video":
                return <Video className="h-5 w-5 text-red-600" />;
              default:
                return <ExternalLink className="h-5 w-5 text-brand-700" />;
            }
          };

          return (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="shadow-2xs flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-100 ring-1 ring-neutral-200/80">
                    {getIcon()}
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold text-neutral-700">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  {item.outlet}
                </p>

                <h3 className="font-serif text-base font-bold leading-snug text-neutral-900 transition-colors group-hover:text-brand-700">
                  {item.title}
                </h3>

                <p className="line-clamp-3 text-xs leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 border-t border-neutral-100 pt-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-800"
                >
                  <span>Verify Coverage</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
