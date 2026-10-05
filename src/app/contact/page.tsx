"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Send,
  Clock,
  ShieldCheck,
  Heart,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [org, setOrg] = useState("");
  const [enquiryType, setEnquiryType] = useState("Sponsor a Child");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-20 sm:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="hero-radial-bg border-b border-neutral-200/60 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
              Contact & Connect
            </span>
            <h1 className="font-serif text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Let’s Work Together Towards a{" "}
              <span className="text-brand-700">Child’s Future.</span>
            </h1>
            <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">
              Whether you want to sponsor a child, volunteer your skills,
              explore a CSR collaboration, or schedule a centre visit, we would
              love to connect.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT FORM & INFO GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Contact Details & Office */}
          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Official Information
              </span>
              <h2 className="font-serif text-3xl font-bold text-neutral-900">
                Reach Out to Us
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600">
                Our administrative and coordination desk operates across
                Delhi-NCR. We respond to inquiries within 24 to 48 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-soft">
                <div className="shrink-0 rounded-xl bg-brand-50 p-3 text-brand-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    Community Classrooms & Centres
                  </h4>
                  <p className="mt-0.5 text-xs text-neutral-600">
                    Decentralized learning centres across Delhi-NCR, India
                  </p>
                  <p className="mt-1 text-[11px] text-neutral-400">
                    Visiting hours: Monday to Saturday, 10:00 AM – 5:00 PM
                    (Prior appointment required)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-soft">
                <div className="shrink-0 rounded-xl bg-brand-50 p-3 text-brand-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    Phone / WhatsApp
                  </h4>
                  <p className="mt-0.5 text-xs text-neutral-600">
                    <a
                      href="tel:+919876543210"
                      className="font-semibold hover:text-brand-700"
                    >
                      +91 98765 43210
                    </a>
                  </p>
                  <p className="mt-1 text-[11px] text-neutral-400">
                    Available Mon-Sat for donor and volunteer inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-soft">
                <div className="shrink-0 rounded-xl bg-brand-50 p-3 text-brand-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    Official Email
                  </h4>
                  <p className="mt-0.5 text-xs text-neutral-600">
                    <a
                      href="mailto:contact@chandnidi.org"
                      className="font-semibold hover:text-brand-700"
                    >
                      contact@chandnidi.org
                    </a>
                  </p>
                  <p className="mt-1 text-[11px] text-neutral-400">
                    For CSR proposals: csr@chandnidi.org
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-emerald-800">
              <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-700" />
              <span>
                All donations are registered under <strong>Section 80G</strong>{" "}
                and <strong>12A</strong>. We guarantee 100% financial
                legitimacy.
              </span>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card sm:p-10 lg:col-span-7">
            {submitted ? (
              <div className="space-y-4 p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900">
                  Thank You, {name}!
                </h3>
                <p className="mx-auto max-w-md text-sm text-neutral-600">
                  Your enquiry regarding <strong>{enquiryType}</strong> has been
                  logged. Our coordinator will contact you at{" "}
                  <strong>{email}</strong> or <strong>{phone}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage("");
                    }}
                    className="rounded-full bg-neutral-900 px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-black"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4 space-y-1">
                  <h3 className="font-serif text-xl font-bold text-neutral-900">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Fill out the form below and we will get back to you
                    promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sen"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm focus:border-brand-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ananya@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm focus:border-brand-700 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91-XXXXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm focus:border-brand-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                      Organisation (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Company, College, or School"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm focus:border-brand-700 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                    Enquiry Type *
                  </label>
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm focus:border-brand-700 focus:outline-none"
                  >
                    <option>Sponsor a Child</option>
                    <option>Donate (80G Tax Exemption)</option>
                    <option>Volunteer Application</option>
                    <option>CSR Partnership (Corporate)</option>
                    <option>Start a Fundraiser</option>
                    <option>Stationery or Food Drive</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How would you like to collaborate or support our scholars?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm focus:border-brand-700 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-700 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-800 hover:shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
