import { Metadata } from "next";
import {
  GetInvolvedHero,
  DonateSection,
  CharityWithDifferenceSection,
  SponsorChildSection,
  WaysToContributeSection,
  PartnerSection,
  TransparencySection,
  GetInvolvedCtaBanner,
} from "./components";

export const metadata: Metadata = {
  title: "Get Involved | Chandni Di — Empowering Children Through Education",
  description:
    "Join Chandni Di in empowering children through education, healthcare, and livelihood support. Donate, sponsor a child, volunteer, fundraise, or partner with us today.",
};

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO SECTION (Warm Cream) */}
      <GetInvolvedHero />

      {/* 2. DIRECT EDUCATIONAL GIVING (Crisp White) */}
      <DonateSection />

      {/* 3. CHARITY WITH DIFFERENCE (Warm Cream) */}
      <CharityWithDifferenceSection />

      {/* 4. SPONSOR A CHILD'S LIFECYCLE (Crisp White) */}
      <SponsorChildSection />

      {/* 5. WAYS TO CONTRIBUTE BEYOND MONEY (Warm Cream) */}
      <WaysToContributeSection />

      {/* 6. PARTNERSHIPS (Crisp White) */}
      <PartnerSection />

      {/* 7. BUILDING TRUST THROUGH ACCOUNTABILITY (Warm Cream) */}
      <TransparencySection />

      {/* 8. TAKE THE NEXT STEP CTA BANNER (Crisp White) */}
      <GetInvolvedCtaBanner />
    </main>
  );
}
