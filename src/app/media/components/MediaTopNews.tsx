"use client";

import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { MEDIA_ITEMS } from "@/data/mediaData";

export default function MediaTopNews() {
  // Main Lead Story (Left Side) - Good News Today Exclusive
  const leadStory = {
    title:
      "Chandni Di on National Television: Empowering Street Children Through Education and Dignity",
    excerpt:
      "A deep-dive national feature detailing how Chandni Di transformed children from street and slum settlements into confident learners, writers, and change-makers.",
    image: "/images/media_gnt_exclusive.png",
    author: {
      name: "Chandni Khan",
      avatar: "/images/founder.jpg",
    },
    date: "January 2022",
    readTime: "6 Min Read",
    url:
      MEDIA_ITEMS.find((i) => i.id === "gnt-exclusive-interview")?.url ||
      "https://www.gnttv.com/india/story/exclusive-interview-chandni-di-voice-slum-started-magazine-which-being-run-children-slums-329149-2022-01-03",
  };

  // 2x2 Grid Stories (Right Side) - Captured from Real Media Platforms
  const gridStories = [
    {
      title:
        "Documentary Film: The Inspiring Story of Chandni Di & Her Learning Centres",
      date: "Full Documentary",
      image: "/images/media_youtube_doc.jpg",
      url:
        MEDIA_ITEMS.find((i) => i.id === "youtube-documentary")?.url ||
        "https://youtu.be/oM5dczvwlY8?si=Dk8r-H-d5x0YD_NK",
    },
    {
      title:
        "Good News Today TV Special: From the Streets to National Recognition",
      date: "TV Broadcast",
      image: "/images/media_gnt_full_clipping.jpg",
      url:
        MEDIA_ITEMS.find((i) => i.id === "good-news-today-instagram")?.url ||
        "https://www.instagram.com/tv/CYZL8D3KQUa/?utm_medium=share_sheet",
    },
    {
      title:
        "India Today Broadcast: Breaking the Cycle of Child Labour Through Safe Classrooms",
      date: "Television Broadcast",
      image: "/images/media_india_today_broadcast.jpg",
      url:
        MEDIA_ITEMS.find((i) => i.id === "india-today-twitter")?.url ||
        "https://twitter.com/IndiaToday/status/1479126001904865281?t=8UQ0TK8-FCAJhh3LK8LuyQ&s=08",
    },
    {
      title: "Chandni Khan: Wikipedia Public Biography & Documented Chronology",
      date: "Official Profile",
      image: "/images/founder.jpg",
      url:
        MEDIA_ITEMS.find((i) => i.id === "wikipedia-chandni")?.url ||
        "https://en.wikipedia.org/wiki/Chandni_Khan",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="mb-6">
        <h2 className="font-sans text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
          Top News
        </h2>
      </div>

      {/* Main Grid: Left Featured Story + Right 2x2 Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* LEFT COLUMN: Featured Big Story (Spans 6 cols on lg) */}
        <div className="lg:col-span-6">
          <a
            href={leadStory.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col justify-between"
          >
            <div>
              {/* Landscape Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-sm sm:aspect-[16/10]">
                <Image
                  src={leadStory.image}
                  alt={leadStory.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Headline */}
              <h3 className="mt-4 text-xl font-bold leading-snug text-neutral-900 transition-colors group-hover:text-brand-700 sm:text-2xl">
                {leadStory.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                {leadStory.excerpt}
              </p>
            </div>

            {/* Author & Meta Row */}
            <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
              <div className="flex items-center gap-2.5">
                <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-neutral-200">
                  <Image
                    src={leadStory.author.avatar}
                    alt={leadStory.author.name}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-semibold text-neutral-800">
                  By {leadStory.author.name}
                </span>
              </div>

              <span className="text-xs font-medium text-neutral-400">
                {leadStory.date} &middot; {leadStory.readTime}
              </span>
            </div>
          </a>
        </div>

        {/* RIGHT COLUMN: 2x2 Grid of 4 Stories (Spans 6 cols on lg) */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
            {gridStories.map((story, index) => (
              <a
                key={index}
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col"
              >
                {/* Thumbnail Image */}
                <div className="shadow-xs relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Date with Calendar Icon */}
                <div className="mt-2.5 flex items-center gap-1.5 text-neutral-400">
                  <Calendar className="h-3 w-3" />
                  <span className="text-[11px] font-medium sm:text-xs">
                    {story.date}
                  </span>
                </div>

                {/* Headline */}
                <h4 className="mt-1 line-clamp-2 text-xs font-bold leading-snug text-neutral-900 transition-colors group-hover:text-brand-700 sm:text-sm">
                  {story.title}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
