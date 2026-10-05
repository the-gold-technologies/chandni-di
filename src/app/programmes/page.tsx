import React from "react";
import ProgrammesHeroSection from "./components/ProgrammesHeroSection";
import ProgrammesCardsGrid from "./components/ProgrammesCardsGrid";
import ProgrammesCtaSection from "./components/ProgrammesCtaSection";

export const metadata = {
  title:
    "Our Programmes | Bridge, After-School & College to Career | Chandni Di NGO",
  description:
    "Explore our 3-pillar educational framework: Bridge Programme for foundational literacy, After-School tutoring with 50-100% fee grants, and 100% College to Career scholarships.",
};

export default function ProgrammesPage() {
  return (
    <div className="space-y-16 pb-20 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <ProgrammesHeroSection />

      {/* 2. PROGRAMMES 3-CARD SHOWCASE GRID */}
      <ProgrammesCardsGrid />

      {/* 3. CTA BANNER */}
      <ProgrammesCtaSection />
    </div>
  );
}
