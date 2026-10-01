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
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-neutral-200/80"
          : "bg-white py-3 border-b border-neutral-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Tightly Cropped Authentic Logo Image */}
          <Link href="/" className="flex items-center group py-0.5">
            <Image
              src="/images/logo_cropped.png"
              alt="Chandni Di Logo"
              width={190}
              height={70}
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation Links - Clean, Genuine, Spaced */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? "text-brand-700 bg-brand-50"
                      : "text-neutral-700 hover:text-brand-700 hover:bg-neutral-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Single Prominent Action Button: Donate Now */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-700 hover:bg-brand-800 text-white text-sm font-bold shadow-md hover:shadow-lg hover:shadow-brand-700/25 transition-all transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/get-involved#donate"
              className="sm:hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-700 text-white text-xs font-semibold"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              Donate
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-brand-700 hover:bg-neutral-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fade-in">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                pathname === "/"
                  ? "text-brand-700 bg-brand-50"
                  : "text-neutral-700 hover:text-brand-700 hover:bg-neutral-50"
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
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                    isActive
                      ? "text-brand-700 bg-brand-50"
                      : "text-neutral-700 hover:text-brand-700 hover:bg-neutral-50"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-neutral-100">
            <Link
              href="/get-involved#donate"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-center font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate to a Child</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
