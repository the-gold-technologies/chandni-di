"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 0 0 1.4-1.4 1.4 1.4 0 0 0-1.4-1.4 1.4 1.4 0 0 0-1.4 1.4c0 .77.62 1.4 1.4 1.4m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden rounded-t-[2.5rem] border-x border-t border-[#EDE5DA] bg-[#FAF7F2] text-neutral-800 shadow-[0_-6px_30px_rgba(0,0,0,0.02)] sm:rounded-t-[3rem] lg:rounded-t-[3.5rem] print:hidden">
      {/* Decorative Botanical Flowers Illustration firmly anchored at Bottom-Left Corner */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 select-none">
        <Image
          src="/images/exact_reference_flowers.png"
          alt="Wildflowers illustration"
          width={340}
          height={230}
          className="h-32 w-auto object-contain object-bottom sm:h-40 md:h-44"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-7 pt-12 sm:px-8 sm:pb-9 sm:pt-14 lg:px-10">
        {/* Main Grid: Logo & Mission on Left, 3 Distinct Navigation Columns on Right */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          {/* Left Column: Brand Logo & Mission Snapshot */}
          <div className="space-y-4 md:col-span-5 lg:col-span-5">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-90"
            >
              <Image
                src="/images/logo_cropped.png"
                alt="Chandni Di Logo"
                width={195}
                height={68}
                className="h-10 w-auto object-contain sm:h-12"
                priority
              />
            </Link>
            <p className="max-w-sm text-xs leading-relaxed text-neutral-600 sm:text-[13px]">
              Empowering children from street and slum communities through
              foundational education, after-school handholding, skill building,
              and university career sponsorships.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200/80">
                <span>Section 80G &amp; 12A Compliant Non-Profit</span>
              </span>
            </div>
          </div>

          {/* Right Navigation Columns: 3 Columns with 100% Unique, Non-Redundant Pages */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-7 lg:col-span-7 lg:gap-8">
            {/* Column 1: Our Work & Impact */}
            <div>
              <h3 className="mb-3.5 text-[15px] font-bold tracking-tight text-brand-700 sm:text-base">
                Organisation
              </h3>
              <ul className="space-y-2.5 text-[13px] font-medium text-neutral-800 sm:text-[14px]">
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-brand-700"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impact"
                    className="transition-colors hover:text-brand-700"
                  >
                    Measuring Impact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stories-of-change"
                    className="transition-colors hover:text-brand-700"
                  >
                    Stories of Change
                  </Link>
                </li>
                <li>
                  <Link
                    href="/transparency"
                    className="transition-colors hover:text-brand-700"
                  >
                    Trust &amp; Transparency
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media"
                    className="transition-colors hover:text-brand-700"
                  >
                    Media &amp; Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Programmes */}
            <div>
              <h3 className="mb-3.5 text-[15px] font-bold tracking-tight text-brand-700 sm:text-base">
                Programmes
              </h3>
              <ul className="space-y-2.5 text-[13px] font-medium text-neutral-800 sm:text-[14px]">
                <li>
                  <Link
                    href="/programmes"
                    className="transition-colors hover:text-brand-700"
                  >
                    All Programmes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programmes/bridge-programme"
                    className="transition-colors hover:text-brand-700"
                  >
                    Bridge Schooling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programmes/after-school"
                    className="transition-colors hover:text-brand-700"
                  >
                    After-School Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programmes/college-to-career"
                    className="transition-colors hover:text-brand-700"
                  >
                    College to Career
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Connect & Get Involved */}
            <div>
              <h3 className="mb-3.5 text-[15px] font-bold tracking-tight text-brand-700 sm:text-base">
                Get Involved
              </h3>
              <ul className="space-y-2.5 text-[13px] font-medium text-neutral-800 sm:text-[14px]">
                <li>
                  <Link
                    href="/get-involved"
                    className="font-semibold text-brand-800 transition-colors hover:text-brand-700"
                  >
                    Support a Child
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-brand-700"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row: Left Copyright, Center Social Media Icons, Right Legal Policy Links */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#E5DACD] pt-6 sm:mt-14 lg:flex-row">
          {/* Left: Copyright */}
          <div className="text-xs font-medium text-neutral-600 sm:text-[13px]">
            <p className="font-semibold text-neutral-800">
              © {new Date().getFullYear()} Chandni Di Foundation. All rights
              reserved.
            </p>
          </div>

          {/* Center: 4 Social Media Icons (LinkedIn, Facebook, YouTube, Instagram) */}
          <div className="flex items-center gap-3">
            {/* 1. LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="shadow-xs flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A66C2] text-white transition-transform hover:scale-110"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>

            {/* 2. Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="shadow-xs flex h-8 w-8 items-center justify-center rounded-lg bg-[#1877F2] text-white transition-transform hover:scale-110"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>

            {/* 3. YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="shadow-xs flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF0000] text-white transition-transform hover:scale-110"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>

            {/* 4. Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="shadow-xs flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white transition-transform hover:scale-110"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Right: Legal Policy Links */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-600 sm:gap-4 sm:text-[13px]">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-brand-700 hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-neutral-300">•</span>
            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-brand-700 hover:underline"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-neutral-300">•</span>
            <Link
              href="/cookie-policy"
              className="transition-colors hover:text-brand-700 hover:underline"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
