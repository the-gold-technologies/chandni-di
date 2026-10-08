"use client";

import React from "react";
import Image from "next/image";
import { MEDIA_ITEMS } from "@/data/mediaData";

export default function MediaMoreCoverage() {
  // Items displayed in the 4-column grid
  // Focus on the rest of the coverage: Print Reports, Video Features, and Verified Press Archives
  const restNewsItems = [
    {
      id: "dainik-jagran-bhaskar",
      category: "PRINT DAILY",
      title:
        "National Daily Print Coverage: Ground Report on Bridge Schools & Slum Learning",
      date: "Ground Report",
      description:
        "Frontline Hindi daily report covering the practical challenges and remarkable successes of bridge schools operating in underprivileged settlements across Delhi NCR.",
      image: "/images/bridge_programme.jpg",
      url:
        MEDIA_ITEMS.find((i) => i.id === "dainik-jagran-bhaskar")?.url ||
        "https://dainik-b.in/ZZBYy4srBnb",
    },
    {
      id: "facebook-viral-feature",
      category: "VIDEO FEATURE",
      title: "Community Spotlight: Children Reclaiming Their Right to Learn",
      date: "Social Feature",
      description:
        "High-engagement video documentation showing student classroom interactions, vocational workshops, and community parent meetings in informal settlements.",
      image: "/images/college_to_career.jpg",
      url:
        MEDIA_ITEMS.find((i) => i.id === "facebook-viral-feature")?.url ||
        "https://www.facebook.com/1954072204870360/posts/3156720444605524/",
    },
    {
      id: "google-press-archive-1",
      category: "PRESS ARCHIVE",
      title: "National Press Clippings & Curated Media Gallery (Part 1)",
      date: "Digital Archive",
      description:
        "Curated archive of national news clippings, event photographs, and public interviews documenting the foundation's institutional growth and student milestones.",
      image: "/images/contact_hero.jpg",
      url:
        MEDIA_ITEMS.find((i) => i.id === "google-press-archive-1")?.url ||
        "https://share.google/Lm8QFKyh1Pq2HymyD",
    },
    {
      id: "google-press-archive-2",
      category: "AWARDS & RECOGNITION",
      title: "Institutional Recognition & Documentary Media Archives (Part 2)",
      date: "Verified Records",
      description:
        "Verified media records, award citations, television interview archives, and high-resolution institutional photo assets available for press use.",
      image: "/images/corporate_csr_partnership.jpg",
      url:
        MEDIA_ITEMS.find((i) => i.id === "google-press-archive-2")?.url ||
        "https://share.google/gL9tcocb9Kt5UiDG0",
    },
  ];

  return (
    <section
      id="more-coverage"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      {/* Header bar matching user reference: Category on left, View all » on right, bottom border */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <h2 className="font-sans text-xs font-bold uppercase tracking-wider text-neutral-900 sm:text-sm">
          MORE MEDIA COVERAGE &amp; ARCHIVES
        </h2>
        <a
          href="https://share.google/Lm8QFKyh1Pq2HymyD"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-brand-700 transition-colors hover:text-brand-800"
        >
          View all &raquo;
        </a>
      </div>

      {/* 4-Column Card Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {restNewsItems.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col"
          >
            {/* 1. Image */}
            <div className="shadow-2xs relative aspect-[16/10] w-full overflow-hidden rounded-md bg-neutral-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* 2. Category Tag (Blue / Brand Accent) */}
            <span className="mt-3 block text-[11px] font-bold uppercase tracking-wider text-brand-700 sm:text-xs">
              {item.category}
            </span>

            {/* 3. Bold Headline */}
            <h3 className="mt-1 line-clamp-2 font-sans text-sm font-bold leading-snug text-neutral-900 transition-colors group-hover:text-brand-700 sm:text-base">
              {item.title}
            </h3>

            {/* 4. Publication Date */}
            <p className="mt-1 text-[11px] font-medium text-neutral-400">
              {item.date}
            </p>

            {/* 5. Excerpt / Summary */}
            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-neutral-600">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
