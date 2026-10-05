import React from "react";
import ProgrammesHeroSection from "./components/ProgrammesHeroSection";
import ProgrammesTabsNav from "./components/ProgrammesTabsNav";
import BridgeProgrammeSection from "./components/BridgeProgrammeSection";
import AfterSchoolProgrammeSection from "./components/AfterSchoolProgrammeSection";
import CollegeToCareerSection from "./components/CollegeToCareerSection";
import ProgrammesCtaSection from "./components/ProgrammesCtaSection";

export const metadata = {
  title:
    "Our Programmes | Bridge, After-School & College to Career | Chandni Di NGO",
  description:
    "Discover our 3-pillar educational framework: Bridge Programme for foundational literacy, After-School tutoring with 50-100% fee grants, and 100% College to Career scholarships.",
};

export default function ProgrammesPage() {
  return (
    <div className="space-y-16 pb-20 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <ProgrammesHeroSection />

      {/* 2. PROGRAMMES OVERVIEW TABS */}
      <ProgrammesTabsNav />

      {/* 3. PROGRAMME DEEP DIVES */}
      <section className="mx-auto max-w-7xl space-y-16 px-4 sm:space-y-20 sm:px-6 lg:px-8">
        <BridgeProgrammeSection />
        <AfterSchoolProgrammeSection />
        <CollegeToCareerSection />
      </section>

      {/* 4. CTA BANNER */}
      <ProgrammesCtaSection />
    </div>
  );
}
