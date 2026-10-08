import React from "react";
import { Metadata } from "next";
import {
  MediaHero,
  MediaTopNews,
  MediaMoreCoverage,
  MediaPressKit,
} from "@/app/media/components";

export const metadata: Metadata = {
  title: "Media & Press Coverage | Chandni Di Foundation",
  description:
    "Explore national television broadcasts, print news investigative reports, Wikipedia biography, and documentary features spotlighting Chandni Di Foundation's mission to educate street children.",
};

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="space-y-16 pb-20 sm:space-y-24 sm:pb-28">
        {/* 1. Hero with stats & quick actions */}
        <MediaHero />

        {/* 2. Top News Showcase (1 Left Lead Feature + 2x2 Grid) */}
        <MediaTopNews />

        {/* 3. More Coverage & Archives (4-Column Grid) */}
        <MediaMoreCoverage />

        {/* 4. Official Press Kit & Media Desk Contacts */}
        <MediaPressKit />
      </div>
    </main>
  );
}
