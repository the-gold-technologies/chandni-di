import React from "react";
import { getProgrammeData } from "../data/programmesDetailData";
import ProgrammeDetailHero from "../components/ProgrammeDetailHero";
import ProgrammeOverviewSection from "../components/ProgrammeOverviewSection";
import ProgrammeFrameworkSection from "../components/ProgrammeFrameworkSection";
import OtherProgrammesNav from "../components/OtherProgrammesNav";
import ProgrammeGoalBanner from "../components/ProgrammeGoalBanner";

export const metadata = {
  title:
    "Bridge Programme | Foundational Learning & School Admission | Chandni Di NGO",
  description:
    "Helping children from underserved communities take their first step towards formal education. Age group 5–12 years, foundational literacy, and mainstream school admission.",
};

export default function BridgeProgrammePage() {
  const data = getProgrammeData("bridge-programme");

  return (
    <div className="space-y-0">
      {/* 1. Dedicated Full Hero Section */}
      <ProgrammeDetailHero data={data.hero} />

      {/* 2. Context Story & Dual Admission Highlights */}
      <ProgrammeOverviewSection data={data.overview} />

      {/* 3. 4-Stage Operational Pathway Cards (Matching Reference Timeline Style) */}
      <ProgrammeFrameworkSection data={data.framework} />

      {/* 4. Cross-Navigation to Other Programmes */}
      <OtherProgrammesNav currentId="bridge-programme" />

      {/* 5. Concluding Take the Next Step CTA Banner (Just before the footer) */}
      <ProgrammeGoalBanner data={data.goal} />
    </div>
  );
}
