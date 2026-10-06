"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 0 0 1.4-1.4 1.4 1.4 0 0 0-1.4-1.4 1.4 1.4 0 0 0-1.4 1.4c0 .77.62 1.4 1.4 1.4m1.39 9.74v-8.37H5.07v8.37h2.78z" />
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

function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden rounded-t-[2.5rem] border-x border-t border-[#EDE5DA] bg-[#FAF7F2] text-neutral-800 shadow-[0_-6px_30px_rgba(0,0,0,0.02)] sm:rounded-t-[3rem] lg:rounded-t-[3.5rem]">
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

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-7 pt-12 sm:px-8 sm:pb-9 sm:pt-14 lg:px-10">
        {/* Main Grid: Logo on Left, Exactly 3 Navigation Columns on Right */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          {/* Left Column: Clean Logo Only (Aligned with Column Headers, No Text Below) */}
          <div className="flex items-start md:col-span-5 lg:col-span-5">
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
          </div>

          {/* Right Navigation Columns: 3 Columns matching original reference layout */}
          <div className="grid grid-cols-3 gap-6 md:col-span-7 lg:col-span-7 lg:gap-10">
            {/* Column 1: Our Organisation */}
            <div>
              <h3 className="mb-3.5 text-[15px] font-bold tracking-tight text-brand-700 sm:text-base">
                Our Organisation
              </h3>
              <ul className="space-y-2 text-[13px] font-medium text-neutral-800 sm:text-[14px]">
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
                    href="/about#founder"
                    className="transition-colors hover:text-brand-700"
                  >
                    Founder&apos;s Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#mission"
                    className="transition-colors hover:text-brand-700"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/transparency"
                    className="transition-colors hover:text-brand-700"
                  >
                    Transparency &amp; 80G
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Programmes */}
            <div>
              <h3 className="mb-3.5 text-[15px] font-bold tracking-tight text-brand-700 sm:text-base">
                Programmes
              </h3>
              <ul className="space-y-2 text-[13px] font-medium text-neutral-800 sm:text-[14px]">
                <li>
                  <Link
                    href="/programmes#bridge"
                    className="transition-colors hover:text-brand-700"
                  >
                    Bridge Schooling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programmes#after-school"
                    className="transition-colors hover:text-brand-700"
                  >
                    After-School Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programmes#college-to-career"
                    className="transition-colors hover:text-brand-700"
                  >
                    College to Career
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impact#stories"
                    className="transition-colors hover:text-brand-700"
                  >
                    Student Stories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="mb-3.5 text-[15px] font-bold tracking-tight text-brand-700 sm:text-base">
                Contact
              </h3>
              <ul className="space-y-2 text-[13px] font-medium text-neutral-800 sm:text-[14px]">
                <li>
                  <Link
                    href="/contact#faqs"
                    className="transition-colors hover:text-brand-700"
                  >
                    FAQs
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
                <li>
                  <Link
                    href="/get-involved#donate"
                    className="transition-colors hover:text-brand-700"
                  >
                    Support a Child
                  </Link>
                </li>
                <li>
                  <Link
                    href="/get-involved#volunteer"
                    className="transition-colors hover:text-brand-700"
                  >
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row: Left Copyright (aligned with logo) and Right Social Icons */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 sm:mt-14 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold text-neutral-800 sm:text-[13px]">
              © {new Date().getFullYear()} Chandni Di Foundation. All rights
              reserved
            </p>
          </div>

          {/* 4 Social Media Icons matching original styling */}
          <div className="flex items-center gap-2.5">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm transition-transform hover:scale-110"
            >
              <FacebookIcon className="h-3.5 w-3.5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded-[5px] bg-[#0A66C2] text-white shadow-sm transition-transform hover:scale-110"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-[#FF0000] text-white shadow-sm transition-transform hover:scale-110"
            >
              <YoutubeIcon className="h-3.5 w-3.5" />
            </a>

            {/* Spotify */}
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1DB954] text-white shadow-sm transition-transform hover:scale-110"
            >
              <SpotifyIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
