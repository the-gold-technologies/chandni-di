"use client";

import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function ProgrammesCtaSection() {
  return (
    <section className="bg-white pb-20 sm:pb-28 pt-6 sm:pt-10">
      <div className="mx-auto max-w-5xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-neutral-900 sm:text-4xl">
          Invest in a Child’s Educational Lifecycle
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          Whether you support a 5-year-old taking their first steps in our Bridge
          Programme or a university undergraduate in our College to Career
          initiative, your gift is 50% tax exempt under Section 80G.
        </p>
        <div className="pt-2">
          <Link
            href="/get-involved#donate"
            className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-8 py-4 text-sm font-bold text-white shadow-elevated transition-all duration-200 hover:scale-[1.02] hover:bg-brand-800 hover:shadow-lg"
          >
            <Heart className="h-5 w-5 fill-white" />
            <span>Sponsor an Educational Pillar</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
