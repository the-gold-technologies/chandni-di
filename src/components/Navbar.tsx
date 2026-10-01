"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clean, genuine, and concise navigation structure
  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programmes", href: "/programmes" },
    { name: "Our Impact", href: "/impact" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-200/80 bg-white/95 py-2.5 shadow-md backdrop-blur-md"
          : "border-b border-neutral-200/60 bg-white py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Tightly Cropped Authentic Logo Image */}
          <Link href="/" className="group flex items-center py-0.5">
            <Image
              src="/images/logo_cropped.png"
              alt="Chandni Di Logo"
              width={190}
              height={70}
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105 sm:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation Links - Clean, Genuine, Spaced */}
          <nav className="hidden items-center space-x-1 md:flex lg:space-x-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-brand-700"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Single Prominent Action Button: Donate Now */}
          <div className="hidden items-center sm:flex">
            <Link
              href="/get-involved#donate"
              className="inline-flex transform items-center gap-2 rounded-full bg-brand-700 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg hover:shadow-brand-700/25"
            >
              <Heart className="h-4 w-4 fill-white" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-3.5 py-1.5 text-xs font-semibold text-white sm:hidden"
            >
              <Heart className="h-3.5 w-3.5 fill-white" />
              Donate
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-neutral-700 hover:bg-neutral-100 hover:text-brand-700 focus:outline-none"
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
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="animate-fade-in space-y-2 border-b border-neutral-200 bg-white px-4 pb-6 pt-3 shadow-xl md:hidden">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-base font-semibold ${
                pathname === "/"
                  ? "bg-brand-50 text-brand-700"
                  : "text-neutral-700 hover:bg-neutral-50 hover:text-brand-700"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-base font-semibold ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-brand-700"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="border-t border-neutral-100 pt-4">
            <Link
              href="/get-involved#donate"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-700 py-3 text-center text-sm font-bold tracking-wide text-white shadow-md transition-colors hover:bg-brand-800"
            >
              <Heart className="h-4 w-4 fill-white" />
              <span>Donate to a Child</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
