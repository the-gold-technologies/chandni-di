"use client";

import React, { useState, useEffect } from "react";

export default function ProgrammesTabsNav() {
  const [activeTab, setActiveTab] = useState("bridge");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["bridge", "after-school", "college-to-career"];
      const scrollY = window.scrollY + 260;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    {
      id: "bridge",
      step: "01",
      label: "Bridge Programme",
      shortLabel: "Bridge",
    },
    {
      id: "after-school",
      step: "02",
      label: "After-School Programme",
      shortLabel: "After-School",
    },
    {
      id: "college-to-career",
      step: "03",
      label: "College to Career",
      shortLabel: "College to Career",
    },
  ];

  return (
    <section className="sticky top-20 z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        {/* Sleek Segmented Control Bar */}
        <nav
          aria-label="Programmes Navigation"
          className="inline-flex items-center gap-1 rounded-full border border-neutral-200/90 bg-[#F4F1EA]/95 p-1.5 shadow-md backdrop-blur-md"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 sm:px-6 sm:py-2.5 sm:text-sm ${
                  isActive
                    ? "bg-brand-700 text-white shadow-sm"
                    : "text-neutral-600 hover:bg-white/80 hover:text-neutral-900"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-neutral-200/80 text-neutral-600 group-hover:bg-neutral-300 group-hover:text-neutral-900"
                  }`}
                >
                  {tab.step}
                </span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="inline sm:hidden">{tab.shortLabel}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
