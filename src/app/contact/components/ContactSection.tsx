"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Send,
} from "lucide-react";

// Social Media Icons
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

// ── Contact Form Component ──
function ContactFormComponent() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [org, setOrg] = useState("");
  const [enquiryType, setEnquiryType] = useState("General Enquiry");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const typeParam = searchParams.get("type") || searchParams.get("subject");
    if (typeParam) {
      const normalized = typeParam.toLowerCase();
      if (normalized.includes("donate")) setEnquiryType("Donate");
      else if (normalized.includes("volunteer")) setEnquiryType("Volunteer");
      else if (normalized.includes("csr") || normalized.includes("partner"))
        setEnquiryType("CSR Partnership");
      else if (normalized.includes("sponsor"))
        setEnquiryType("Sponsor a Child");
      else if (normalized.includes("fundraise")) setEnquiryType("Fundraise");
      else setEnquiryType("General Enquiry");
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.06)] sm:p-9 lg:p-10">
      {submitted ? (
        <div className="py-8 text-center sm:py-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200/60">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h3 className="mt-5 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
            Thank You, {name}!
          </h3>
          <p className="mx-auto mt-2.5 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
            Your enquiry regarding{" "}
            <strong className="text-neutral-900">{enquiryType}</strong> has been
            received. Our community team will get back to you within 24 hours.
          </p>
          <div className="pt-8">
            <button
              onClick={() => {
                setSubmitted(false);
                setMessage("");
                setName("");
                setEmail("");
                setPhone("");
                setOrg("");
              }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-brand-800 hover:shadow-lg"
            >
              <span>Send Another Message</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Form Header */}
          <div className="space-y-1.5 border-b border-neutral-100 pb-5">
            <h3 className="font-serif text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
              Send Message
            </h3>
            <p className="text-xs leading-relaxed text-neutral-500 sm:text-sm">
              Please fill out the form below with your details and message to
              get in touch with us.
            </p>
          </div>

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Full Name <span className="text-brand-700">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50/60 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-all hover:border-neutral-300 hover:bg-white focus:border-brand-700 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-700/10"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Email Address <span className="text-brand-700">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. rahul@example.com"
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50/60 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-all hover:border-neutral-300 hover:bg-white focus:border-brand-700 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-700/10"
              />
            </div>
          </div>

          {/* Row 2: Phone & Organisation */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Phone Number <span className="text-brand-700">*</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50/60 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-all hover:border-neutral-300 hover:bg-white focus:border-brand-700 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-700/10"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                Organisation{" "}
                <span className="text-xs font-normal normal-case text-neutral-400">
                  (optional)
                </span>
              </label>
              <input
                type="text"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                placeholder="e.g. Company or Foundation"
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50/60 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-all hover:border-neutral-300 hover:bg-white focus:border-brand-700 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-700/10"
              />
            </div>
          </div>

          {/* Row 3: Enquiry Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
              Enquiry Type <span className="text-brand-700">*</span>
            </label>
            <div className="relative">
              <select
                value={enquiryType}
                onChange={(e) => setEnquiryType(e.target.value)}
                className="w-full appearance-none rounded-xl border border-neutral-200 bg-neutral-50/60 px-4 py-3 pr-10 text-sm font-medium text-neutral-800 transition-all hover:border-neutral-300 hover:bg-white focus:border-brand-700 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-700/10"
              >
                <option value="Donate">Donate</option>
                <option value="Volunteer">Volunteer</option>
                <option value="CSR Partnership">CSR Partnership</option>
                <option value="Sponsor a Child">Sponsor a Child</option>
                <option value="Fundraise">Fundraise</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            </div>
          </div>

          {/* Row 4: Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
              Your Message <span className="text-brand-700">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your requirement or how you'd like to collaborate..."
              className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50/60 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-all hover:border-neutral-300 hover:bg-white focus:border-brand-700 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-700/10"
            />
          </div>

          {/* Submit Button & Assurance */}
          <div className="pt-2 sm:flex sm:items-center sm:justify-between sm:gap-4">
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-700 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-700/20 transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-xl hover:shadow-brand-700/30 active:translate-y-0 sm:w-auto"
            >
              <span>Submit Enquiry</span>
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="mt-3 text-center text-xs text-neutral-400 sm:mt-0 sm:text-right">
              🔒 Information is secure &amp; confidential
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

// ── Contact Section Component ──
export default function ContactSection() {
  return (
    <section
      id="contact-form"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-20 xl:gap-24">
          {/* ── LEFT COLUMN: Contact Details & Social Links ── */}
          <div className="space-y-8 lg:col-span-5">
            {/* Header with Editorial Typography */}
            <div className="space-y-3.5">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/80">
                Get In Touch
              </span>

              <h2 className="font-serif text-3xl font-extrabold leading-[1.2] tracking-tight text-neutral-900 sm:text-4xl lg:text-[40px]">
                Need more information?{" "}
                <span className="block font-serif italic text-brand-700">
                  Get in touch with us
                </span>
              </h2>

              <p className="text-sm font-normal leading-relaxed text-neutral-600 sm:text-base">
                Whether you want to support a child&apos;s education, volunteer,
                explore a partnership, or learn more about our work, we would
                love to hear from you.
              </p>
            </div>

            {/* Response Time Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-2xl border border-emerald-200/70 bg-emerald-50/90 px-4 py-2.5 text-xs font-medium text-emerald-800">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Typically responds within 24 business hours</span>
            </div>

            {/* 3 Interactive Contact Cards */}
            <div className="space-y-4 pt-1">
              {/* Phone Number */}
              <a
                href="tel:+919876543210"
                className="hover:shadow-xs group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-neutral-200/80 hover:bg-white"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all group-hover:scale-105 group-hover:bg-brand-700 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-700/20">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Phone Number
                  </h4>
                  <p className="mt-0.5 text-base font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                    +91 98765 43210
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@chandnidi.org"
                className="hover:shadow-xs group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-neutral-200/80 hover:bg-white"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all group-hover:scale-105 group-hover:bg-brand-700 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-700/20">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Official Email
                  </h4>
                  <p className="mt-0.5 text-base font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                    contact@chandnidi.org
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="hover:shadow-xs group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-neutral-200/80 hover:bg-white">
                <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-all group-hover:scale-105 group-hover:bg-brand-700 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-700/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Office Address
                  </h4>
                  <p className="mt-0.5 text-sm font-semibold leading-snug text-neutral-800">
                    Chandni Di Foundation, Community Learning Centres across
                    Delhi-NCR, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-3.5 border-t border-neutral-200/60 pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Connect on Social Media
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="shadow-xs flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all hover:-translate-y-0.5 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:shadow-sm"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="shadow-xs flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all hover:-translate-y-0.5 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-sm"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="shadow-xs flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all hover:-translate-y-0.5 hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white hover:shadow-sm"
                >
                  <YoutubeIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="shadow-xs flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all hover:-translate-y-0.5 hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white hover:shadow-sm"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Send Message Form ── */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="rounded-3xl border border-neutral-200/80 bg-white p-12 text-center text-sm text-neutral-400">
                  Loading form...
                </div>
              }
            >
              <ContactFormComponent />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
