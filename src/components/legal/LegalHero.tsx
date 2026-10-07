"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  Calendar,
  Clock,
  Printer,
  FileCheck,
  Cookie,
  Award,
  Lock,
} from "lucide-react";

export interface LegalHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  readingTime: string;
  activePolicyId?: "privacy" | "terms" | "cookies";
  onTabChange?: (
    policyId: "privacy" | "terms" | "cookies",
    href: string
  ) => void;
}

export default function LegalHero({
  badge,
  title,
  subtitle,
  lastUpdated,
  readingTime,
  activePolicyId,
  onTabChange,
}: LegalHeroProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  const policyTabs = [
    {
      id: "privacy" as const,
      name: "Privacy Policy",
      href: "/privacy-policy",
      icon: ShieldCheck,
    },
    {
      id: "terms" as const,
      name: "Terms & Conditions",
      href: "/terms-and-conditions",
      icon: FileCheck,
    },
    {
      id: "cookies" as const,
      name: "Cookie Policy",
      href: "/cookie-policy",
      icon: Cookie,
    },
  ];

  // Determine active tab key
  const currentActiveKey: "privacy" | "terms" | "cookies" =
    activePolicyId ||
    (pathname === "/terms-and-conditions"
      ? "terms"
      : pathname === "/cookie-policy"
        ? "cookies"
        : "privacy");

  // Sliding pill position state - strictly horizontal, vertical is pinned via top-1.5/bottom-1.5
  const [pillStyle, setPillStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const updatePillPosition = useCallback(() => {
    const activeEl = tabRefs.current[currentActiveKey];

    if (activeEl) {
      setPillStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        opacity: 1,
      });
    }
  }, [currentActiveKey]);

  useEffect(() => {
    setMounted(true);
    updatePillPosition();

    const handleResize = () => updatePillPosition();
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(updatePillPosition, 60);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [updatePillPosition]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleTabClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    tab: (typeof policyTabs)[0]
  ) => {
    if (onTabChange) {
      e.preventDefault();
      onTabChange(tab.id, tab.href);
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-neutral-200/70 bg-[#FAF7F2] pb-12 pt-32 sm:pb-16 sm:pt-36 lg:pb-16 lg:pt-40 print:hidden">
      {/* Subtle ambient lighting glows */}
      <div className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-brand-100/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-amber-100/35 blur-3xl" />

      {/* Background SVG decorative motif */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 850 -30 Q 1150 160 1020 420"
          stroke="#D96B27"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          fill="none"
          opacity="0.15"
        />
        <circle cx="100" cy="90" r="2.5" fill="#D96B27" opacity="0.16" />
        <circle cx="130" cy="115" r="1.5" fill="#D96B27" opacity="0.12" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
          <Link href="/" className="transition-colors hover:text-brand-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-neutral-400">Trust &amp; Legal</span>
          <span>/</span>
          <span className="font-bold text-brand-700">{badge}</span>
        </div>

        {/* 2-Column Hero Showcase */}
        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading, Subtitle & Policy Switcher */}
          <div className="space-y-6 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/80">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-700" />
              Verified Institutional Policy
            </span>

            <h1 className="font-serif text-3xl font-extrabold leading-[1.15] tracking-tight text-neutral-900 transition-all duration-300 sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 transition-all duration-300 sm:text-lg">
              {subtitle}
            </p>

            {/* Embedded Policy Switcher Pills with Liquid Smooth Sliding Red Indicator */}
            <div className="pt-2">
              <span className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-neutral-400">
                Select Policy Document:
              </span>
              <div
                ref={containerRef}
                className="shadow-2xs relative inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white p-1.5"
              >
                {/* Smooth sliding red pill indicator strictly constrained to container inner height */}
                {mounted && (
                  <div
                    className="pointer-events-none absolute bottom-1.5 top-1.5 rounded-full bg-brand-700 shadow-sm transition-all duration-300 ease-out"
                    style={{
                      left: `${pillStyle.left}px`,
                      width: `${pillStyle.width}px`,
                      opacity: pillStyle.opacity,
                    }}
                    aria-hidden="true"
                  />
                )}

                {policyTabs.map((tab) => {
                  const isActive = currentActiveKey === tab.id;
                  const Icon = tab.icon;

                  return (
                    <Link
                      key={tab.id}
                      ref={(el) => {
                        tabRefs.current[tab.id] = el;
                      }}
                      href={tab.href}
                      onClick={(e) => handleTabClick(e, tab)}
                      className={`relative z-10 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-colors duration-200 sm:text-sm ${
                        isActive
                          ? mounted
                            ? "text-white"
                            : "bg-brand-700 text-white"
                          : "text-neutral-600 hover:text-neutral-950"
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 transition-colors duration-200 ${
                          isActive ? "text-white" : "text-neutral-400"
                        }`}
                      />
                      <span>{tab.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: High-Trust Governance & Verification Badge Card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border-2 border-white bg-white/95 p-6 shadow-xl ring-1 ring-neutral-200/70 backdrop-blur-md sm:p-7">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                    Chandni Di Foundation
                  </span>
                  <h3 className="font-serif text-lg font-bold text-neutral-900">
                    Compliance &amp; Trust
                  </h3>
                </div>
                <div className="shadow-2xs flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/70">
                  <Award className="h-5 w-5" />
                </div>
              </div>

              {/* Trust Checkmarks */}
              <div className="mt-4 space-y-2.5 text-xs text-neutral-700">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <Lock className="h-3 w-3" />
                  </div>
                  <span className="font-medium">
                    Section 80G &amp; 12A Certified Non-Profit
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <ShieldCheck className="h-3 w-3" />
                  </div>
                  <span className="font-medium">
                    NGO Darpan Registered (NITI Aayog)
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <FileCheck className="h-3 w-3" />
                  </div>
                  <span className="font-medium">
                    DPDPA 2023 &amp; IT Act, 2000 Compliant
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <ShieldCheck className="h-3 w-3" />
                  </div>
                  <span className="font-medium">
                    Strict POCSO Child Protection Safeguards
                  </span>
                </div>
              </div>

              {/* Metadata & Actions */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-4 text-xs text-neutral-500">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                    <span>{lastUpdated}</span>
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-neutral-400" />
                    <span>{readingTime}</span>
                  </span>
                </div>

                <button
                  onClick={handlePrint}
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                  title="Print this official policy document"
                >
                  <Printer className="h-3 w-3" />
                  <span>Print Document</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
