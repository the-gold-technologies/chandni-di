"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

export default function TransparencySection() {
  // Curated core documents on overview page (all 8 available on /transparency detail page)
  const documents = [
    "NGO Darpan registration",
    "80G certificate",
    "12A certificate",
    "CSR-1 registration",
  ];

  return (
    <section
      id="transparency"
      className="scroll-mt-24 border-b border-neutral-200/60 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ── Left Column: Exact Content from User ── */}
          <div className="space-y-6 lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              <ShieldCheck className="h-4 w-4 text-brand-700" />
              <span>Trust &amp; Transparency</span>
            </div>

            {/* Main Title with Serif Italic Accent */}
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-[44px] lg:leading-[1.18]">
              Building Trust Through{" "}
              <span className="font-serif italic text-brand-700">
                Accountability
              </span>
            </h2>

            {/* Hero Body Paragraph */}
            <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
              We believe transparency and accountability are essential to
              responsible social impact. We aim to share relevant organisational
              information and documentation so supporters can better understand
              our work and governance.
            </p>

            {/* 2-Column Pill Buttons Grid (Curated Core Documents) */}
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
              {documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="shadow-2xs flex items-center gap-3 rounded-2xl border border-neutral-200/90 bg-[#FAF7F2] px-4 py-3.5 text-xs font-semibold text-neutral-800 transition-colors hover:border-brand-600 hover:bg-brand-50/50 hover:text-brand-700 sm:text-sm"
                >
                  <FileText className="h-4 w-4 shrink-0 text-brand-700" />
                  <span className="truncate">{doc}</span>
                </div>
              ))}
            </div>

            {/* Our Commitment Block */}
            <div className="rounded-2xl border border-brand-200/60 bg-brand-50/50 p-4 sm:p-5">
              <div className="flex items-center gap-2 font-serif text-sm font-bold text-neutral-900 sm:text-base">
                <HeartHandshake className="h-4 w-4 text-brand-700" />
                <span>Our Commitment</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                We strive to maintain responsible processes and provide
                appropriate information about our programmes, operations, and
                impact.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact?subject=Transparency"
                className="inline-flex items-center gap-2.5 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-brand-800 hover:shadow-lg"
              >
                <span>Contact Us for More Information</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/transparency"
                className="shadow-2xs inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-bold text-neutral-800 transition-all duration-200 hover:border-brand-700 hover:bg-brand-50 hover:text-brand-700"
              >
                <span>View Full Detail Page</span>
              </Link>
            </div>
          </div>

          {/* ── Right Column: Large Rounded Editorial Photo (As in Reference) ── */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-neutral-200/80 shadow-xl sm:rounded-[36px] lg:aspect-[4/5]">
              <Image
                src="/images/transparency_trust.jpg"
                alt="Children in classroom with educator"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
