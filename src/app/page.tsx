import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  GraduationCap,
  Briefcase,
  Heart,
  Users,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import AccomplishedResultsSection from "@/components/AccomplishedResultsSection";
import FounderSection from "@/components/FounderSection";
import CtaBannerSection from "@/components/CtaBannerSection";

export default function HomePage() {
  return (
    <div className="space-y-10 sm:space-y-14 pb-14">
      {/* 1.1 HERO SECTION */}
      <HeroSection />

      {/* 1.2 INTRODUCTION TO THE ORGANISATION */}
      <IntroductionSection />

      {/* 1.3 IMPACT STATISTICS / ACCOMPLISHED GREAT RESULTS */}
      <AccomplishedResultsSection />

      {/* 1.4 OUR PROGRAMMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-700" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700">
              Our Programmes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 font-serif tracking-tight">
            Supporting a Child at Every Stage of Their Journey
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            From preparing children for school to helping them pursue higher
            education and career opportunities, our programmes are designed to
            provide continuous support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Programme 1: Bridge */}
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div className="p-8 sm:p-10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-neutral-300 group-hover:text-brand-700 transition-colors font-serif">
                  01.
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-700">
                  Ages 5–12 Years
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 font-serif group-hover:text-brand-700 transition-colors">
                  Bridge Programme
                </h3>
                <p className="text-xs font-semibold text-brand-700 mt-1 uppercase tracking-wide">
                  Preparing children for formal education
                </p>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed">
                We help children between the ages of 5 and 12 build foundational
                academic skills and prepare for admission into mainstream
                schools.
              </p>
            </div>

            <div className="p-6 bg-neutral-50/70 border-t border-neutral-100 mt-auto">
              <Link
                href="/programmes#bridge"
                className="w-full py-3 rounded-xl bg-white hover:bg-brand-700 hover:text-white border border-neutral-200 text-neutral-800 text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Programme 2: After-School */}
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div className="p-8 sm:p-10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-neutral-300 group-hover:text-brand-700 transition-colors font-serif">
                  02.
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-700">
                  School Students
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 font-serif group-hover:text-brand-700 transition-colors">
                  After-School Programme
                </h3>
                <p className="text-xs font-semibold text-brand-700 mt-1 uppercase tracking-wide">
                  Strengthening learning, confidence, and character
                </p>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed">
                We support children already enrolled in school through tuition,
                academic assistance, counselling, and skill development.
              </p>
            </div>

            <div className="p-6 bg-neutral-50/70 border-t border-neutral-100 mt-auto">
              <Link
                href="/programmes#after-school"
                className="w-full py-3 rounded-xl bg-white hover:bg-brand-700 hover:text-white border border-neutral-200 text-neutral-800 text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Programme 3: College to Career */}
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div className="p-8 sm:p-10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-neutral-300 group-hover:text-brand-700 transition-colors font-serif">
                  03.
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-700">
                  Higher Education & Jobs
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 font-serif group-hover:text-brand-700 transition-colors">
                  College to Career Programme
                </h3>
                <p className="text-xs font-semibold text-brand-700 mt-1 uppercase tracking-wide">
                  Connecting education with opportunity
                </p>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed">
                We help students pursue higher education, develop relevant
                skills, and prepare for future career opportunities.
              </p>
            </div>

            <div className="p-6 bg-neutral-50/70 border-t border-neutral-100 mt-auto">
              <Link
                href="/programmes#college-career"
                className="w-full py-3 rounded-xl bg-white hover:bg-brand-700 hover:text-white border border-neutral-200 text-neutral-800 text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 1.4 CTA */}
        <div className="text-center mt-8">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group"
          >
            <span>Explore Our Programmes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 1.5 FOUNDER INTRODUCTION */}
      <FounderSection />

      {/* 1.6 GET INVOLVED CTA BANNER */}
      <CtaBannerSection />
    </div>
  );
}
