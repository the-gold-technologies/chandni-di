import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import CollegeToCareerSection from "../components/CollegeToCareerSection";
import OtherProgrammesNav from "../components/OtherProgrammesNav";
import ProgrammesCtaSection from "../components/ProgrammesCtaSection";

export const metadata = {
  title: "College to Career Programme | 100% Scholarships & Internships | Chandni Di NGO",
  description:
    "Empowering youth through college guidance, 100% higher education scholarships, skill development, and corporate internship linkages.",
};

export default function CollegeToCareerDetailPage() {
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
          <span className="font-semibold text-neutral-900">College to Career</span>
        </nav>
      </div>

      {/* Main Programme In-Depth Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CollegeToCareerSection />
      </section>

      {/* Cross-Navigation to Other Programmes */}
      <OtherProgrammesNav currentId="college-to-career" />

      {/* CTA Section */}
      <ProgrammesCtaSection />
    </div>
  );
}
