"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function GetInvolvedCtaBanner() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EDE5DA] bg-[#FBF8F2] p-8 shadow-sm sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Content Column */}
            <div className="space-y-5 lg:col-span-7">
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-[#7A7067]">
                TAKE THE NEXT STEP
              </span>

              <h2 className="font-serif text-3xl font-extrabold leading-[1.18] tracking-tight text-[#2B3B2B] sm:text-4xl lg:text-[44px]">
                Ready to Help a Child Move Forward?
              </h2>

              <p className="max-w-xl text-base font-normal leading-relaxed text-[#5C534A] sm:text-lg">
                &ldquo;Whether you contribute financially, volunteer your time,
                or build a partnership, your involvement creates a lasting
                foundation for every child&rsquo;s educational journey.&rdquo;
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#8A2534] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-[#721F2B] hover:shadow-lg sm:text-base"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Photography Column with Playful Doodles */}
            <div className="relative lg:col-span-5">
              {/* Playful Hand-Drawn Doodle Stars */}
              <div className="pointer-events-none absolute -top-5 left-4 z-20 text-[#E24A4A] opacity-90">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L26.5 15.5L40 16.5L29.5 25.5L33.5 39L22 30.5L10.5 39L14.5 25.5L4 16.5L17.5 15.5L22 2Z"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="pointer-events-none absolute -top-8 right-6 z-20 text-[#E24A4A] opacity-90">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L26.5 15.5L40 16.5L29.5 25.5L33.5 39L22 30.5L10.5 39L14.5 25.5L4 16.5L17.5 15.5L22 2Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Playful Curving Yellow Ribbon / Swirl Doodle */}
              <div className="pointer-events-none absolute -bottom-5 -left-8 z-20 text-[#E5A84B]">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 65C25 45 40 40 55 55C70 70 85 65 90 45C95 25 80 15 65 20C50 25 45 45 55 60C65 75 80 80 95 85"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Photo Asset with Smooth Rounded Corners and Soft Shadow */}
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2rem] border-4 border-white/90 bg-neutral-100 shadow-lg">
                <Image
                  src="/images/get_involved_cta_community.jpg"
                  alt="Volunteers, mentors and happy children with books and drawings at a community learning centre"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
