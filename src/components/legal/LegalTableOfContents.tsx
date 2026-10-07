"use client";

import React, { useState, useEffect } from "react";
import { ListFilter, ChevronRight } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
}

interface LegalTableOfContentsProps {
  items: TOCItem[];
}

export default function LegalTableOfContents({
  items,
}: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-sm lg:sticky lg:top-28 print:hidden">
      <div className="flex items-center gap-2 border-b border-neutral-200/80 pb-3 text-xs font-bold uppercase tracking-wider text-neutral-800">
        <ListFilter className="h-4 w-4 text-brand-700" />
        <span>Table of Contents</span>
      </div>

      <nav className="mt-3.5 space-y-1 text-xs">
        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`group flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left font-medium transition-all ${
                isActive
                  ? "shadow-2xs bg-brand-50 font-bold text-brand-800 ring-1 ring-brand-200/60"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              <span className="flex items-center gap-2 truncate">
                <span
                  className={`text-[10px] font-bold ${isActive ? "text-brand-700" : "text-neutral-400"}`}
                >
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <span className="truncate">{item.title}</span>
              </span>
              <ChevronRight
                className={`h-3 w-3 shrink-0 transition-transform ${
                  isActive
                    ? "translate-x-0.5 text-brand-700"
                    : "text-neutral-300 group-hover:text-neutral-500"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
