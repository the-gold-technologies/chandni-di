import React from "react";
import { getProgrammeData } from "../data/programmesDetailData";
import ProgrammeDetailHero from "../components/ProgrammeDetailHero";
import ProgrammeOverviewSection from "../components/ProgrammeOverviewSection";
import ProgrammeFrameworkSection from "../components/ProgrammeFrameworkSection";
import ProgrammeCalloutBanner from "../components/ProgrammeCalloutBanner";
import OtherProgrammesNav from "../components/OtherProgrammesNav";
import ProgrammeGoalBanner from "../components/ProgrammeGoalBanner";

export const metadata = {
  title:
    "College to Career Programme | 100% Scholarships & Internships | Chandni Di NGO",
  description:
    "Empowering youth through college guidance, 100% higher education scholarships, skill development, and corporate internship linkages.",
};

export default function CollegeToCareerPage() {
  const data = getProgrammeData("college-to-career");

  return (
    <div className="space-y-0">
      {/* 1. Dedicated Full Hero Section */}
      <ProgrammeDetailHero data={data.hero} />

      {/* 2. Context Story & Dual Feature Highlights */}
      <ProgrammeOverviewSection data={data.overview} />

      {/* 3. 4-Pillar Higher Ed Framework Cards (Matching Reference Timeline Style) */}
      <ProgrammeFrameworkSection data={data.framework} />

      {/* 4. Future Direction: Internships & Corporate Linkages */}
      {data.callout && <ProgrammeCalloutBanner data={data.callout} />}

      {/* 5. Cross-Navigation to Other Programmes */}
      <OtherProgrammesNav currentId="college-to-career" />

      {/* 6. Concluding Take the Next Step CTA Banner (Just before the footer) */}
      <ProgrammeGoalBanner data={data.goal} />
    </div>
  );
}
