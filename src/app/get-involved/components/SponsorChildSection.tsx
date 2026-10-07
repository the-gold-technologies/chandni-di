"use client";

import React from "react";
import Image from "next/image";
import {
  Heart,
  GraduationCap,
  BookOpen,
  Laptop,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Mail,
  Award,
} from "lucide-react";

export default function SponsorChildSection() {
  const tiers = [
    {
      id: "bridge",
      title: "Bridge Programme Scholar",
      ageGroup: "Ages 5–12 Years",
      monthly: "₹1,500",
      annual: "₹18,000",
      image: "/images/step2_preparation.jpg",
      tag: "Foundational Literacy",
      storySnippet:
        "Rescued from begging, rag-picking, and child labor. We build foundational reading, writing, and discipline to enter formal schools.",
      benefits: [
        "Covers daily learning kit & activity books",
        "Hot nutritious midday meal & fruit support",
        "Health, vision & dental checkup drives",
        "Guaranteed mainstream school admission support",
      ],
      sponsorExperience: "Welcome photo pack + Child's annual progress letter",
      buttonText: "Sponsor Bridge Child",
      amount: 1500,
    },
    {
      id: "school",
      title: "School Continuation Scholar",
      ageGroup: "Classes 1 to 12",
      monthly: "₹2,500",
      annual: "₹30,000",
      image: "/images/after_school_programme.jpg",
      tag: "Most Urgent Need",
      isPopular: true,
      storySnippet:
        "Protecting young minds from dropping out due to family poverty. We pay their school fees and provide daily evening tutoring.",
      benefits: [
        "Sponsors 50–100% of formal private/govt school fees",
        "Daily 3-hour evening coaching & homework support",
        "School uniforms, sturdy shoes & winter sweaters",
        "Mental well-being & parental counselling sessions",
      ],
      sponsorExperience:
        "Quarterly school report cards + Student handmade drawings",
      buttonText: "Sponsor School Child",
      amount: 2500,
    },
    {
      id: "college",
      title: "College to Career Scholar",
      ageGroup: "College & Professional",
      monthly: "₹5,000",
      annual: "₹60,000",
      image: "/images/aarti.jpg",
      tag: "First-Gen Graduate",
      storySnippet:
        "Enabling slum youth to attend reputable universities and transition into white-collar corporate employment and financial independence.",
      benefits: [
        "100% bachelor's degree / diploma tuition grant",
        "Personal laptop access & coding/digital skills",
        "Corporate professional resume & interview coaching",
        "Internship linkages & dignified career placement",
      ],
      sponsorExperience:
        "Direct mentor connection + Convocation graduation invitation",
      buttonText: "Sponsor College Youth",
      amount: 5000,
    },
  ];

  const handleSponsorClick = (amount: number) => {
    const el = document.getElementById("donate");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="sponsor"
      className="scroll-mt-24 border-b border-neutral-200/60 bg-[#FAF7F2]/50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/90 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C05621]">
            <Sparkles className="h-3.5 w-3.5 text-[#C05621]" />
            7.5 Sponsor a Child
          </span>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px]">
            Help Make Continued Education Possible
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            A child’s education requires sustained support. Through sponsorship,
            individuals and organisations can contribute towards the educational
            needs of eligible children, including fees and learning support.
          </p>

          <p className="font-handwriting text-2xl font-semibold text-[#C05621] sm:text-3xl">
            &ldquo;When you sponsor a child, you walk beside them until they
            stand on their own feet.&rdquo;
          </p>
        </div>

        {/* 3 Emotional Lifecycle Sponsorship Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                tier.isPopular
                  ? "border-brand-400 ring-2 ring-brand-700/15"
                  : "border-neutral-200/90"
              }`}
            >
              {/* Top Banner Tag */}
              {tier.isPopular && (
                <div className="absolute right-4 top-4 z-20 rounded-full bg-brand-700 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                  {tier.tag}
                </div>
              )}

              <div>
                {/* Photo Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden bg-neutral-100 sm:h-56">
                  <Image
                    src={tier.image}
                    alt={tier.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                      {tier.ageGroup}
                    </span>
                    {!tier.isPopular && (
                      <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold backdrop-blur-md">
                        {tier.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-serif text-2xl font-bold text-neutral-900">
                    {tier.title}
                  </h3>

                  {/* Financial Breakdown */}
                  <div className="my-4 flex items-baseline justify-between border-y border-neutral-100 py-3">
                    <div>
                      <span className="font-serif text-3xl font-extrabold text-brand-700">
                        {tier.monthly}
                      </span>
                      <span className="text-xs text-neutral-500"> / month</span>
                    </div>
                    <span className="rounded-lg bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                      {tier.annual} / year
                    </span>
                  </div>

                  {/* Emotional Story Snippet */}
                  <p className="text-xs leading-relaxed text-neutral-600 sm:text-[13px]">
                    {tier.storySnippet}
                  </p>

                  {/* Specific Sponsorship Deliverables */}
                  <div className="mt-5 space-y-2 border-t border-neutral-100 pt-4 text-xs text-neutral-700 sm:text-[13px]">
                    <p className="font-bold text-neutral-900">
                      What You Sponsor:
                    </p>
                    {tier.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sponsor Connection Milestone */}
                  <div className="mt-5 rounded-2xl border border-amber-200/70 bg-amber-50/60 p-3.5 text-xs text-neutral-700">
                    <p className="flex items-center gap-1.5 font-bold text-[#C05621]">
                      <Mail className="h-3.5 w-3.5" />
                      <span>Your Sponsor Connection:</span>
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-neutral-600">
                      {tier.sponsorExperience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <button
                  type="button"
                  onClick={() => handleSponsorClick(tier.amount)}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3.5 text-sm font-bold tracking-wide transition-all duration-200 ${
                    tier.isPopular
                      ? "bg-brand-700 text-white shadow-md hover:bg-brand-800 hover:shadow-lg"
                      : "border-2 border-neutral-300 bg-white hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  <Heart className="h-4 w-4 shrink-0" />
                  <span>{tier.buttonText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 80G Tax Exemption & Direct Transparency Assurance */}
        <div className="shadow-xs mt-14 rounded-3xl border border-neutral-200/80 bg-white p-6 sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-base font-bold text-neutral-900">
                  Tax Deductible Under Section 80G
                </h4>
                <p className="text-xs text-neutral-600 sm:text-sm">
                  All child sponsorships are eligible for 50% income tax
                  deduction under Section 80G of the Indian Income Tax Act.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleSponsorClick(2500)}
              className="shadow-xs inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-800"
            >
              <span>Begin Sponsorship Today</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
