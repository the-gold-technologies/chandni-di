"use client";

import React, { useState } from "react";
import { MEDIA_ITEMS, MediaItem } from "@/data/mediaData";
import MediaCard from "./MediaCard";
import { Newspaper, Tv, BookOpen, FolderArchive, Layers } from "lucide-react";

export default function MediaGrid() {
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "tv-video" | "print-articles" | "profiles" | "archives"
  >("all");

  const filterTabs = [
    { id: "all", label: "All Media", count: MEDIA_ITEMS.length, icon: Layers },
    {
      id: "tv-video",
      label: "TV & Video",
      count: MEDIA_ITEMS.filter((i) => i.category === "tv-video").length,
      icon: Tv,
    },
    {
      id: "print-articles",
      label: "Print & Articles",
      count: MEDIA_ITEMS.filter((i) => i.category === "print-articles").length,
      icon: Newspaper,
    },
    {
      id: "profiles",
      label: "Wikipedia & Profiles",
      count: MEDIA_ITEMS.filter((i) => i.category === "profiles").length,
      icon: BookOpen,
    },
    {
      id: "archives",
      label: "Press Archives",
      count: MEDIA_ITEMS.filter((i) => i.category === "archives").length,
      icon: FolderArchive,
    },
  ];

  const filteredItems =
    selectedFilter === "all"
      ? MEDIA_ITEMS
      : MEDIA_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section
      id="media-coverage"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-start justify-between gap-6 border-b border-neutral-200/80 pb-6 sm:flex-row sm:items-center">
        <div>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            Archive &amp; Press Clippings
          </span>
          <h2 className="mt-2 font-serif text-2xl font-extrabold text-neutral-900 sm:text-3xl">
            All Verified News &amp; Features
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="no-scrollbar shadow-2xs flex max-w-full items-center gap-2 overflow-x-auto rounded-full border border-neutral-200/80 bg-white p-1.5">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() =>
                  setSelectedFilter(tab.id as typeof selectedFilter)
                }
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  isActive
                    ? "shadow-xs bg-brand-700 text-white"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                <Icon
                  className={`h-3.5 w-3.5 ${
                    isActive ? "text-white" : "text-neutral-400"
                  }`}
                />
                <span>{tab.label}</span>
                <span
                  className={`py-0.2 rounded-full px-1.5 text-[10px] font-bold ${
                    isActive
                      ? "bg-brand-800 text-white"
                      : "bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filteredItems.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
