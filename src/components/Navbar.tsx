"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programmes", href: "/programmes" },
    { name: "Our Impact", href: "/impact" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "pt-3 sm:pt-4" : "pt-4 sm:pt-6"
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
              ? "rounded-full border border-neutral-200/80 bg-white/95 px-6 py-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.08)] backdrop-blur-md sm:px-8 sm:py-3"
              : "border-b border-transparent bg-transparent py-1.5"
          }`}
        >
          {/* Logo with comfortable sizing and breathing room */}
          <Link href="/" className="group flex items-center py-0.5">
            <Image
              src="/images/logo_cropped.png"
              alt="Chandni Di Logo"
              width={190}
              height={66}
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                scrolled ? "h-10 sm:h-11" : "h-12 sm:h-14"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation Links (Clean, readable, well-spaced, highlights only on hover) */}
          <nav className="hidden items-center md:flex md:space-x-1 lg:space-x-3 xl:space-x-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[15px] font-semibold tracking-normal text-neutral-700 transition-all duration-200 hover:bg-neutral-100 hover:text-brand-700 lg:px-4"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Button: Donate Now (Nicely proportioned pill) */}
          <div className="hidden items-center sm:flex">
            <Link
              href="/get-involved#donate"
              className="inline-flex transform items-center gap-2 rounded-full bg-brand-700 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg"
            >
              <Heart className="h-4 w-4 fill-white text-white" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-800 sm:hidden"
            >
              <Heart className="h-3.5 w-3.5 fill-white text-white" />
              <span>Donate</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 text-neutral-700 hover:bg-neutral-100 hover:text-brand-700 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="animate-fade-in mt-3 space-y-2 rounded-3xl border border-neutral-200 bg-white/95 p-5 shadow-2xl backdrop-blur-md md:hidden">
            <div className="space-y-1.5">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-brand-700"
              >
                <span>Home</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-brand-700"
                >
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>

            <div className="border-t border-neutral-100 pt-4">
              <Link
                href="/get-involved#donate"
                onClick={() => setIsOpen(false)}
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
