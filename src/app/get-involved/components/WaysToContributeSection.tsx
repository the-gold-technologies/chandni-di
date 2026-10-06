"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  Share2,
  Package,
  BookOpen,
  Apple,
  Sparkles,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

export default function WaysToContributeSection() {
  return (
    <section id="ways-to-contribute" className="scroll-mt-24 bg-[#FAF7F2]/60 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200/80 bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-700" />
            Beyond Financial Giving
          </span>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[40px]">
            Give Your Time, Skills & Community Support
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Every form of contribution creates a meaningful impact. Explore how
            you can empower children through mentoring, network fundraising, and
            in-kind supply drives.
          </p>
        </div>

        {/* 3 Pillar Cards: 7.2 Volunteer, 7.6 Fundraise, 7.7 In-Kind Drives */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* 7.2 VOLUNTEER */}
          <div className="shadow-xs group flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                <Users className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                7.2 Volunteer
              </span>
              <h3 className="font-serif text-2xl font-bold text-neutral-900">
                Give Your Time. Share Your Skills.
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Volunteers contribute through academic support, weekend
                mentoring, events, career guidance, and community engagement.
              </p>

              <div className="space-y-2 border-t border-neutral-100 pt-4 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-700" />
                  <span>Academic Tutoring & Basic English</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-700" />
                  <span>Digital Literacy & Computer Skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-700" />
                  <span>Sports, Creative Arts & Personality Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-700" />
                  <span>In-person in Delhi-NCR or Virtual Tutoring</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/contact?type=Volunteer+Application"
                className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-brand-700 transition-all hover:bg-brand-700 hover:text-white"
              >
                <span>Become a Volunteer</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 7.6 FUNDRAISE */}
          <div className="shadow-xs group flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-[#C05621] transition-colors group-hover:bg-[#C05621] group-hover:text-white">
                <Share2 className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C05621]">
                7.6 Fundraise
              </span>
              <h3 className="font-serif text-2xl font-bold text-neutral-900">
                Turn Your Network Into an Opportunity for a Child
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Organise a fundraiser through your community, workplace,
                college, or personal network to support children’s education.
              </p>

              <div className="space-y-2 border-t border-neutral-100 pt-4 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C05621]" />
                  <span>Birthday & Anniversary Pledge Giving</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C05621]" />
                  <span>College Campus & Youth Ambassador Drives</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C05621]" />
                  <span>Marathon, Sports & Fitness Challenges</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C05621]" />
                  <span>Full Toolkit & Digital Creatives Provided</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/contact?type=Start+a+Fundraiser"
                className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#C05621] transition-all hover:bg-[#C05621] hover:text-white"
              >
                <span>Start a Fundraiser</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 7.7 OTHER WAYS TO CONTRIBUTE (IN-KIND & DRIVES) */}
          <div className="shadow-xs group flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                <Package className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                7.7 In-Kind & Drives
              </span>
              <h3 className="font-serif text-2xl font-bold text-neutral-900">
                Every Contribution Can Matter
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Support our learning centres directly with learning kits,
                stationery supplies, healthy rations, or educational devices.
              </p>

              <div className="space-y-2 border-t border-neutral-100 pt-4 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Books, Stationery & Activity Kits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Apple className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Ration, Milk & Food Drive Essentials</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Refurbished Laptops & Study Tablets</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="h-3.5 w-3.5 text-emerald-600" />
                  <span>School Bags, Shoes & Winter Sweaters</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/contact?type=Stationery+or+Food+Drive"
                className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-xs font-bold uppercase tracking-wider text-emerald-700 transition-all hover:bg-emerald-700 hover:text-white"
              >
                <span>Discuss Other Ways to Help</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
