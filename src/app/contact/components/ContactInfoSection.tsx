"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

// Social Media Icons
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export default function ContactInfoSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Need more information?
          <br />
          <span className="text-neutral-900">Get in touch with us</span>
        </h2>

        <p className="text-sm leading-relaxed text-neutral-500 sm:text-base">
          Whether you want to support a child&apos;s education, volunteer,
          explore a partnership, or learn more about our work, we would love to
          hear from you.
        </p>
      </div>

      {/* 3 Circular Icon Rows (As in Reference Image) */}
      <div className="space-y-6 pt-2">
        {/* Phone Number */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors hover:bg-brand-50 hover:text-brand-700">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900">Phone Number</h4>
            <p className="text-xs text-neutral-500 sm:text-sm">
              <a
                href="tel:+919876543210"
                className="transition-colors hover:text-brand-700 hover:underline"
              >
                +91 98765 43210
              </a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors hover:bg-brand-50 hover:text-brand-700">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900">Email</h4>
            <p className="text-xs text-neutral-500 sm:text-sm">
              <a
                href="mailto:contact@chandnidi.org"
                className="transition-colors hover:text-brand-700 hover:underline"
              >
                contact@chandnidi.org
              </a>
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors hover:bg-brand-50 hover:text-brand-700">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900">Address</h4>
            <p className="text-xs text-neutral-500 sm:text-sm">
              Chandni Di Foundation, Community Hubs across Delhi-NCR, India
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="space-y-3 border-t border-neutral-100 pt-6">
        <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
          Social Media Links
        </span>
        <div className="flex items-center gap-2.5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-[#1877F2] hover:text-white"
          >
            <FacebookIcon className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-[#0A66C2] hover:text-white"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-[#FF0000] hover:text-white"
          >
            <YoutubeIcon className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-[#E4405F] hover:text-white"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
