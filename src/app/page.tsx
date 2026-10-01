import React from "react";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import AccomplishedResultsSection from "@/components/AccomplishedResultsSection";
import ProgrammesSection from "@/components/ProgrammesSection";
import FounderSection from "@/components/FounderSection";
import CtaBannerSection from "@/components/CtaBannerSection";

export default function HomePage() {
  return (
    <div className="space-y-10 pb-14 sm:space-y-14">
      {/* 1.1 HERO SECTION */}
      <HeroSection />

      {/* 1.2 INTRODUCTION TO THE ORGANISATION */}
      <IntroductionSection />

      {/* 1.3 IMPACT STATISTICS / ACCOMPLISHED GREAT RESULTS */}
      <AccomplishedResultsSection />

      {/* 1.4 OUR PROGRAMMES */}
      <ProgrammesSection />

      {/* 1.5 FOUNDER INTRODUCTION */}
      <FounderSection />

      {/* 1.6 GET INVOLVED CTA BANNER */}
      <CtaBannerSection />
    </div>
  );
}
