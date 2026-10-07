"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, FileCheck, Cookie } from "lucide-react";

export default function LegalTabNav() {
  const pathname = usePathname();

  const tabs = [
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
      icon: ShieldCheck,
      description: "Data protection & donor privacy",
    },
    {
      name: "Terms & Conditions",
      href: "/terms-and-conditions",
      icon: FileCheck,
      description: "Donations & website usage terms",
    },
    {
      name: "Cookie Policy",
      href: "/cookie-policy",
      icon: Cookie,
      description: "Cookies & tracking preferences",
    },
  ];

  return (
    <div className="shadow-2xs sticky top-16 z-30 border-b border-neutral-200 bg-white bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="no-scrollbar flex space-x-2 overflow-x-auto py-2 sm:space-x-4">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            const Icon = tab.icon;

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  isActive
                    ? "shadow-xs bg-brand-700 text-white"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                <Icon
                  className={`h-4 w-4 ${isActive ? "text-white" : "text-neutral-500"}`}
                />
                <span>{tab.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
