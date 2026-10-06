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
    <main className="min-h-screen bg-[#FAF7F2]/30">
      {/* 1. HERO SECTION */}
      <GetInvolvedHero />

      <div className="space-y-4 pb-16 sm:space-y-8 sm:pb-24">
        {/* 2. DIRECT EDUCATIONAL GIVING (7.1 Donate) */}
        <DonateSection />

        {/* 3. CHARITY WITH DIFFERENCE (Donation Utilisation Categories) */}
        <CharityWithDifferenceSection />

        {/* 4. SPONSOR A CHILD'S LIFECYCLE (7.5 Sponsor a Child) */}
        <SponsorChildSection />

        {/* 5. WAYS TO CONTRIBUTE BEYOND MONEY (7.2 Volunteer + 7.6 Fundraise + 7.7 In-Kind Drives) */}
        <WaysToContributeSection />

        {/* 6. PARTNERSHIPS (7.3 Institutional + 7.4 Corporate CSR) */}
        <PartnerSection />

        {/* 7. BUILDING TRUST THROUGH ACCOUNTABILITY (Google Doc Transparency Section) */}
        <TransparencySection />

        {/* 8. TAKE THE NEXT STEP CTA BANNER (Navigates to Contact) */}
        <GetInvolvedCtaBanner />
      </div>
    </main>
  );
}
