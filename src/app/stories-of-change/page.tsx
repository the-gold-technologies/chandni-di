import React from "react";
import { Metadata } from "next";
import {
  StoriesHeroSection,
  StoriesListSection,
  StoriesCtaSection,
} from "./components";

export const metadata: Metadata = {
  title: "Stories of Change | Chandni Di — Real Journeys of Transformation",
  description:
    "Read inspiring stories of children supported by Chandni Di who overcame extreme circumstances in slums to excel in school, university, and beyond.",
};

export default function StoriesOfChangePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section (Aligned with About, Contact & Impact heroes) */}
      <StoriesHeroSection />

      {/* 2. Deep Storytelling List & Community Milestones */}
      <StoriesListSection />

      {/* 3. Revised Bottom CTA */}
      <StoriesCtaSection />
    </main>
  );
}
