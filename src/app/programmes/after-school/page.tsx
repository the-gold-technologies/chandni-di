import React from "react";
import { getProgrammeData } from "../data/programmesDetailData";
import ProgrammeDetailHero from "../components/ProgrammeDetailHero";
import ProgrammeOverviewSection from "../components/ProgrammeOverviewSection";
import ProgrammeFrameworkSection from "../components/ProgrammeFrameworkSection";
import OtherProgrammesNav from "../components/OtherProgrammesNav";
import ProgrammeGoalBanner from "../components/ProgrammeGoalBanner";

export const metadata = {
  title:
    "After-School Programme (Classes 1–12) | Tuition & Fee Grants | Chandni Di NGO",
  description:
    "Daily tuition, mental health counselling, and 50–100% school fee sponsorships to keep underprivileged children in school and thriving.",
};

export default function AfterSchoolPage() {
  const data = getProgrammeData("after-school");

  return (
    <div className="space-y-0">
      {/* 1. Dedicated Full Hero Section */}
      <ProgrammeDetailHero data={data.hero} />

      {/* 2. Context Story & Dual Feature Highlights */}
      <ProgrammeOverviewSection data={data.overview} />

      {/* 3. 4-Pillar Support Framework Cards (Matching Reference Timeline Style) */}
      <ProgrammeFrameworkSection data={data.framework} />

      {/* 4. Cross-Navigation to Other Programmes */}
      <OtherProgrammesNav currentId="after-school" />

      {/* 5. Concluding Take the Next Step CTA Banner (Just before the footer) */}
      <ProgrammeGoalBanner data={data.goal} />
    </div>
  );
}
