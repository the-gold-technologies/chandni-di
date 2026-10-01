import React from "react";
import AboutHeroSection from "./components/AboutHeroSection";
import AboutStorySection from "./components/AboutStorySection";
import AboutMissionVisionSection from "./components/AboutMissionVisionSection";
import AboutApproachSection from "./components/AboutApproachSection";
import AboutFounderSection from "./components/AboutFounderSection";

export const metadata = {
  title: "About Us | Chandni Di — Story, Mission & Vision",
  description:
    "Learn about Chandni Di NGO — our story, mission, vision, and approach to supporting children from slum and street communities through education and opportunity.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20 sm:space-y-28">
      {/* 2.1 Hero */}
      <AboutHeroSection />

      {/* 2.2 Our Story */}
      <AboutStorySection />

      {/* 2.3 Mission + 2.4 Vision */}
      <AboutMissionVisionSection />

      {/* 2.5 Our Approach */}
      <AboutApproachSection />

      {/* Founder (6.1 + 6.2) */}
      <AboutFounderSection />
    </div>
  );
}
