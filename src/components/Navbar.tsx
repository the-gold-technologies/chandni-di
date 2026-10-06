"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Heart,
  ChevronDown,
  TrendingUp,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [impactDropdownOpen, setImpactDropdownOpen] = useState(false);
  const [mobileImpactOpen, setMobileImpactOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Automatically reset mobile dropdown whenever the menu is closed
  useEffect(() => {
    if (!isOpen) {
      setMobileImpactOpen(false);
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileImpactOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle desktop hover with a slight close delay for butter-smooth UX
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setImpactDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setImpactDropdownOpen(false);
    }, 180);
  };

  const impactSubLinks = [
    {
      name: "Impact Overview",
      href: "/impact",
      desc: "Key figures, 500+ mainstreamed & 3-year vision",
      icon: TrendingUp,
      color: "text-brand-700 bg-brand-50",
    },
    {
      name: "Stories of Change",
      href: "/stories-of-change",
      desc: "Real student journeys from slums to university",
      icon: Sparkles,
      color: "text-amber-700 bg-amber-50",
    },
    {
      name: "Trust & Transparency",
      href: "/transparency",
      desc: "Audited financials, 80G tax exemption & registrations",
      icon: ShieldCheck,
      color: "text-emerald-700 bg-emerald-50",
    },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "pt-4 sm:pt-4 lg:pt-4" : "pt-4 sm:pt-6"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ${
          scrolled ? "max-w-6xl px-4 sm:px-6" : "max-w-7xl px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "rounded-full border border-neutral-200/80 bg-white/95 px-5 py-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.08)] backdrop-blur-md sm:px-8 sm:py-3"
              : "border-b border-transparent bg-transparent py-1.5 sm:py-2"
          }`}
        >
          {/* Logo with comfortable sizing and breathing room */}
          <Link href="/" className="group flex items-center py-0.5">
            <Image
              src="/images/logo_cropped.png"
              alt="Chandni Di Logo"
              width={180}
              height={62}
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                scrolled
                  ? "h-8 sm:h-9 md:h-10 lg:h-11"
                  : "lg:h-13 h-9 sm:h-10 md:h-11"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center lg:flex lg:space-x-2 xl:space-x-4">
            <Link
              href="/about"
              className="rounded-full px-3.5 py-2 text-[15px] font-semibold tracking-normal text-neutral-700 transition-all duration-200 hover:bg-neutral-100 hover:text-brand-700 lg:px-4"
            >
              About Us
            </Link>

            <Link
              href="/programmes"
              className="rounded-full px-3.5 py-2 text-[15px] font-semibold tracking-normal text-neutral-700 transition-all duration-200 hover:bg-neutral-100 hover:text-brand-700 lg:px-4"
            >
              Programmes
            </Link>

            {/* 3rd Item: Impact & Trust Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setImpactDropdownOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[15px] font-semibold tracking-normal transition-all duration-200 lg:px-4 ${
                  impactDropdownOpen
                    ? "bg-neutral-100 text-brand-700"
                    : "text-neutral-700 hover:bg-neutral-100 hover:text-brand-700"
                }`}
                aria-expanded={impactDropdownOpen}
                aria-haspopup="true"
              >
                <span>Impact &amp; Trust</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    impactDropdownOpen
                      ? "rotate-180 text-brand-700"
                      : "text-neutral-400"
                  }`}
                />
              </button>

              {/* Dropdown Menu Flyout */}
              {impactDropdownOpen && (
                <div
                  className="animate-in fade-in slide-in-from-top-2 absolute left-1/2 top-full z-50 mt-2 w-80 -translate-x-1/2 rounded-2xl border border-neutral-200/90 bg-white p-2.5 shadow-2xl backdrop-blur-md transition-all duration-200"
                  role="menu"
                >
                  <div className="space-y-1">
                    {impactSubLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setImpactDropdownOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-neutral-50"
                          role="menuitem"
                        >
                          <div
                            className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-105 ${item.color}`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                              {item.name}
                            </div>
                            <div className="text-xs text-neutral-500">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/get-involved"
              className="rounded-full px-3.5 py-2 text-[15px] font-semibold tracking-normal text-neutral-700 transition-all duration-200 hover:bg-neutral-100 hover:text-brand-700 lg:px-4"
            >
              Get Involved
            </Link>

            <Link
              href="/contact"
              className="rounded-full px-3.5 py-2 text-[15px] font-semibold tracking-normal text-neutral-700 transition-all duration-200 hover:bg-neutral-100 hover:text-brand-700 lg:px-4"
            >
              Contact
            </Link>
          </nav>

          {/* Action Button: Donate Now (Desktop only) */}
          <div className="hidden items-center lg:flex">
            <Link
              href="/get-involved#donate"
              className="inline-flex transform items-center gap-2 rounded-full bg-brand-700 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg"
            >
              <Heart className="h-4 w-4 fill-white text-white" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile & Tablet Menu Toggle Button (No header donate button) */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-1.5 text-neutral-700 hover:bg-neutral-100 hover:text-brand-700 focus:outline-none sm:p-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer */}
        {isOpen && (
          <div className="animate-fade-in mt-3 max-h-[85vh] space-y-2 overflow-y-auto rounded-3xl border border-neutral-200 bg-white/95 p-5 shadow-2xl backdrop-blur-md lg:hidden">
            <div className="space-y-1">
              <Link
                href="/about"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-2xl px-4 py-2.5 text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-brand-700"
              >
                <span>About Us</span>
              </Link>

              <Link
                href="/programmes"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-2xl px-4 py-2.5 text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-brand-700"
              >
                <span>Programmes</span>
              </Link>

              {/* Mobile Impact & Trust Expandable Accordion */}
              <div className="rounded-2xl border border-neutral-100 bg-neutral-50/70 p-2">
                <button
                  type="button"
                  onClick={() => setMobileImpactOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between px-3 py-2 text-base font-semibold text-neutral-900"
                >
                  <span>Impact &amp; Trust</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileImpactOpen
                        ? "rotate-180 text-brand-700"
                        : "text-neutral-400"
                    }`}
                  />
                </button>

                {mobileImpactOpen && (
                  <div className="mt-1 space-y-1 pl-2">
                    {impactSubLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeMenu}
                          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-white hover:text-brand-700"
                        >
                          <Icon className="h-4 w-4 text-brand-700" />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/get-involved"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-2xl px-4 py-2.5 text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-brand-700"
              >
                <span>Get Involved</span>
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-2xl px-4 py-2.5 text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-brand-700"
              >
                <span>Contact</span>
              </Link>
            </div>

            <div className="border-t border-neutral-100 pt-4">
              <Link
                href="/get-involved#donate"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 py-3 text-center text-sm font-bold text-white shadow-md transition-colors hover:bg-brand-800"
              >
                <Heart className="h-4 w-4 fill-white text-white" />
                <span>Donate to a Child</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
