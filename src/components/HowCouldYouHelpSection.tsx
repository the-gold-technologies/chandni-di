"use client";

import React from "react";
import Link from "next/link";

export default function HowCouldYouHelpSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Centered Heading Matching Google Doc Section 1.6 */}
      <div className="sm:mb-18 mx-auto mb-14 max-w-3xl space-y-3 text-center">
        <div className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#00897B]" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00897B] sm:text-sm">
            1.6 GET INVOLVED
          </span>
        </div>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          You Can Be Part of a Child&apos;s Journey
        </h2>
        <div className="mx-auto max-w-2xl space-y-2 pt-1 text-sm leading-relaxed text-neutral-600 sm:text-base">
          <p>
            Change can begin with a contribution, a few hours of your time, a
            partnership, or the decision to support a child&apos;s education.
          </p>
          <p className="text-xs text-neutral-500 sm:text-sm">
            Whether you are an individual, organisation, volunteer, or CSR
            partner, there are meaningful ways to contribute.
          </p>
        </div>
      </div>

      {/* 3-Column Clean Minimalist Layout Matching 3 CTA Buttons from Doc */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 text-left md:grid-cols-3 lg:gap-14">
        {/* Column 1: Volunteer */}
        <div className="flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            {/* Illustrated Icon (Stick figure holding heart matching reference) */}
            <div className="flex h-14 w-14 items-center justify-start">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                {/* Head */}
                <circle
                  cx="24"
                  cy="11"
                  r="5"
                  stroke="#1F1914"
                  strokeWidth="2.2"
                />
                {/* Heart held in hands */}
                <path
                  d="M24 21c-1.4-2.2-4.2-2.2-5.6 0-1.4 2.2 0 4.5 5.6 8 5.6-3.5 7-5.8 5.6-8-1.4-2.2-4.2-2.2-5.6 0z"
                  fill="#E53935"
                  stroke="#E53935"
                  strokeWidth="1.2"
                />
                {/* Arms holding heart */}
                <path
                  d="M17 25l4 3h6l4-3"
                  stroke="#1F1914"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Body / Legs */}
                <path
                  d="M21 28v10M27 28v10"
                  stroke="#1F1914"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Ground Line */}
                <path
                  d="M14 38h20"
                  stroke="#1F1914"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="font-serif text-xl font-bold text-neutral-900 sm:text-2xl">
              Volunteer
            </h3>

            <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
              Contribute a few hours of your time. Mentor a child, provide
              academic tutoring, or conduct creative workshops for children.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/get-involved#volunteer"
              className="group inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#00897B] transition-colors hover:text-[#00695C]"
            >
              <span>+ VOLUNTEER</span>
            </Link>
          </div>
        </div>

        {/* Column 2: Partner With Us */}
        <div className="flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            {/* Illustrated Icon (Hands holding coin matching reference) */}
            <div className="flex h-14 w-14 items-center justify-start">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                {/* Coin */}
                <circle
                  cx="24"
                  cy="17"
                  r="7"
                  fill="#FFD54F"
                  stroke="#1F1914"
                  strokeWidth="2.2"
                />
                <text
                  x="24"
                  y="21"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="bold"
                  fill="#1F1914"
                >
                  ₹
                </text>
                {/* Left Hand cupping */}
                <path
                  d="M12 28c3 4 7 6 12 6"
                  stroke="#1F1914"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M10 28l-3-6 4-2 4 5"
                  stroke="#1F1914"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Right Hand cupping */}
                <path
                  d="M36 28c-3 4-7 6-12 6"
                  stroke="#1F1914"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M38 28l3-6-4-2-4 5"
                  stroke="#1F1914"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="font-serif text-xl font-bold text-neutral-900 sm:text-2xl">
              Partner With Us
            </h3>

            <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
              Whether you are an organization or CSR partner, collaborate to
              establish learning centres and connect youth to career
              opportunities.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#00897B] transition-colors hover:text-[#00695C]"
            >
              <span>+ PARTNER WITH US</span>
            </Link>
          </div>
        </div>

        {/* Column 3: Donate */}
        <div className="flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            {/* Illustrated Icon (Donation box with card & heart matching reference) */}
            <div className="flex h-14 w-14 items-center justify-start">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                {/* Card slipping into box */}
                <rect
                  x="20"
                  y="6"
                  width="10"
                  height="12"
                  rx="1.5"
                  fill="#4DB6AC"
                  stroke="#1F1914"
                  strokeWidth="2"
                  transform="rotate(-10 25 12)"
                />
                {/* Donation Box */}
                <rect
                  x="11"
                  y="18"
                  width="26"
                  height="21"
                  rx="3"
                  stroke="#1F1914"
                  strokeWidth="2.2"
                  fill="#FFFFFF"
                />
                {/* Top Slot */}
                <path d="M17 18h14" stroke="#1F1914" strokeWidth="2.2" />
                {/* Heart on box */}
                <path
                  d="M24 26.5c-1-1.5-2.8-1.5-3.8 0-1 1.5 0 3 3.8 5 3.8-2 4.8-3.5 3.8-5-1-1.5-2.8-1.5-3.8 0z"
                  fill="#E53935"
                  stroke="#E53935"
                  strokeWidth="1"
                />
              </svg>
            </div>

            <h3 className="font-serif text-xl font-bold text-neutral-900 sm:text-2xl">
              Donate
            </h3>

            <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
              Support a child&apos;s education, tuition fees, uniforms, and
              learning materials with eligible 80G tax deductions.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/get-involved#donate"
              className="group inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#00897B] transition-colors hover:text-[#00695C]"
            >
              <span>+ DONATE</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
