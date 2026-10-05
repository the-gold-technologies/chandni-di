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
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <ProgrammesHeroSection />

      {/* 2. PROGRAMMES 3-CARD SHOWCASE GRID */}
      <div className="bg-white pt-16 sm:pt-24 pb-8 sm:pb-12">
        <ProgrammesCardsGrid />
      </div>

      {/* 3. CTA BANNER (Seamlessly blending with upper bg-white) */}
      <ProgrammesCtaSection />
    </div>
  );
}
