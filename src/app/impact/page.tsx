import React from "react";
import ImpactHeroSection from "./components/ImpactHeroSection";
import ImpactMeasureProgressSection from "./components/ImpactMeasureProgressSection";
import ImpactGlanceSection from "./components/ImpactGlanceSection";
import ImpactFutureGoalsSection from "./components/ImpactFutureGoalsSection";

export const metadata = {
  title: "Our Impact | Chandni Di — Measuring Journeys We Help Build",
  description:
    "Our impact is reflected in the children we support, their continued education, personal growth, and access to new opportunities across Delhi-NCR.",
};

export default function ImpactPage() {
  return (
    <div className="space-y-20 pb-20 sm:space-y-28">
      {/* 1. Hero Section */}
      <ImpactHeroSection />

      {/* 2. How We Measure Progress */}
      <ImpactMeasureProgressSection />

      {/* 3. Together, We Create Impact (Full-screen width with #F9F7F2 bg) */}
      <ImpactGlanceSection />

      {/* 4. Our Future Goals */}
      <ImpactFutureGoalsSection />
    </div>
  );
}
