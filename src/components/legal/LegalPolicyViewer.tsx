"use client";

import React, { useState, useEffect, useCallback, useTransition } from "react";
import { POLICIES, PolicyDocument } from "./policyData";
import LegalHero from "./LegalHero";
import LegalTableOfContents from "./LegalTableOfContents";
import LegalSection from "./LegalSection";
import LegalContactCard from "./LegalContactCard";

interface LegalPolicyViewerProps {
  initialPolicy?: "privacy" | "terms" | "cookies";
}

export default function LegalPolicyViewer({
  initialPolicy = "privacy",
}: LegalPolicyViewerProps) {
  const [activePolicyId, setActivePolicyId] = useState<
    "privacy" | "terms" | "cookies"
  >(initialPolicy);
  const [isPending, startTransition] = useTransition();

  const currentDoc: PolicyDocument =
    POLICIES[activePolicyId] || POLICIES.privacy;

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.includes("terms")) {
        setActivePolicyId("terms");
      } else if (path.includes("cookie")) {
        setActivePolicyId("cookies");
      } else if (path.includes("privacy")) {
        setActivePolicyId("privacy");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Smooth tab change handler
  const handleTabChange = useCallback(
    (newPolicyId: "privacy" | "terms" | "cookies", href: string) => {
      if (newPolicyId === activePolicyId) return;

      // 1. Smoothly update history state without page refresh shock
      if (typeof window !== "undefined") {
        window.history.pushState({ policy: newPolicyId }, "", href);
      }

      // 2. Transition active policy state
      startTransition(() => {
        setActivePolicyId(newPolicyId);
      });

      // 3. Smooth scroll down to policy reading start point
      setTimeout(() => {
        const contentEl = document.getElementById("policy-document-content");
        if (contentEl) {
          const navbarOffset = 110;
          const targetY =
            contentEl.getBoundingClientRect().top +
            window.pageYOffset -
            navbarOffset;

          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: "smooth",
          });
        }
      }, 50);
    },
    [activePolicyId]
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Interactive Hero with Smooth Sliding Red Capsule Indicator (Hidden in print) */}
      <LegalHero
        badge={currentDoc.badge}
        title={currentDoc.title}
        subtitle={currentDoc.subtitle}
        lastUpdated={currentDoc.lastUpdated}
        readingTime={currentDoc.readingTime}
        activePolicyId={activePolicyId}
        onTabChange={handleTabChange}
      />

      {/* Anchor for smooth scroll target */}
      <div id="policy-document-content" className="scroll-mt-28" />

      {/* Formal Printable Document Header (ONLY visible when printing/exporting to PDF) */}
      <div className="hidden print:block print:pb-6 print:pt-0">
        <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
          {/* Left: ONLY the Official Logo */}
          <div className="pl-1">
            <img
              src="/images/logo_cropped.png"
              alt="Chandni Di Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Right: Official Policy & Effective Date */}
          <div className="shrink-0 text-right text-xs">
            <span className="inline-block rounded-full border border-neutral-300 bg-neutral-50 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-700">
              Official Policy
            </span>
            <p className="mt-1 font-semibold text-neutral-800">
              {currentDoc.badge}
            </p>
            <p className="text-[10px] text-neutral-500">
              Effective: {currentDoc.lastUpdated}
            </p>
          </div>
        </div>

        {/* Document Title Banner & Statutory Registration Line */}
        <div className="mt-4 border-b border-neutral-200 pb-3">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-xl font-bold tracking-tight text-neutral-900">
              {currentDoc.title}
            </h2>
            <span className="shrink-0 text-[10px] font-medium text-neutral-500">
              NGO Darpan Registered • 80G &amp; 12A Certified
            </span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-neutral-600">
            {currentDoc.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 print:px-2 print:py-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 print:block">
          {/* Sticky Table of Contents Sidebar (Desktop only, completely hidden in print) */}
          <aside className="lg:col-span-4 print:hidden">
            <LegalTableOfContents
              key={activePolicyId}
              items={currentDoc.tocItems}
            />
          </aside>

          {/* Main Legal Clauses & Text */}
          <div
            className={`space-y-4 transition-opacity duration-300 lg:col-span-8 print:col-span-12 print:w-full print:space-y-6 ${
              isPending ? "opacity-70" : "opacity-100"
            }`}
          >
            {currentDoc.sections.map((section) => (
              <LegalSection
                key={section.id}
                id={section.id}
                number={section.number}
                title={section.title}
                callout={section.callout}
              >
                {section.content}
              </LegalSection>
            ))}

            {/* Official Non-Profit Grievance Officer Card */}
            <div className="pt-4">
              <LegalContactCard policyName={currentDoc.name} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
