import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import AfterSchoolProgrammeSection from "../components/AfterSchoolProgrammeSection";
import OtherProgrammesNav from "../components/OtherProgrammesNav";
import ProgrammesCtaSection from "../components/ProgrammesCtaSection";

export const metadata = {
  title: "After-School Programme (Classes 1–12) | Tuition & Fee Grants | Chandni Di NGO",
  description:
    "Daily tuition, mental health counselling, and 50–100% school fee sponsorships to keep underprivileged children in school and thriving.",
};

export default function AfterSchoolDetailPage() {
  return (
    <div className="space-y-12 pb-20 pt-28 sm:space-y-16 sm:pt-32">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500 sm:text-sm">
          <Link href="/" className="inline-flex items-center gap-1 hover:text-brand-700 transition-colors">
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
          <Link href="/programmes" className="hover:text-brand-700 transition-colors">
            Programmes
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
          <span className="font-semibold text-neutral-900">After-School Programme</span>
        </nav>
      </div>

      {/* Main Programme In-Depth Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AfterSchoolProgrammeSection />
      </section>

      {/* Cross-Navigation to Other Programmes */}
      <OtherProgrammesNav currentId="after-school" />

      {/* CTA Section */}
      <ProgrammesCtaSection />
    </div>
  );
}
