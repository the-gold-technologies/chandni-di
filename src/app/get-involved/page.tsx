"use client";

import React, { useState } from "react";
import {
  Heart,
  Users,
  Building,
  GraduationCap,
  Package,
  Share2,
  CheckCircle2,
  Send,
  ShieldCheck,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import DonationCalculator from "@/components/DonationCalculator";

export default function GetInvolvedPage() {
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [csrSubmitted, setCsrSubmitted] = useState(false);

  // Volunteer Form State
  const [vName, setVName] = useState("");
  const [vEmail, setVEmail] = useState("");
  const [vPhone, setVPhone] = useState("");
  const [vCity, setVCity] = useState("Delhi-NCR");
  const [vInterest, setVInterest] = useState("Teaching & Tutoring");
  const [vAvailability, setVAvailability] = useState("Weekends");
  const [vMessage, setVMessage] = useState("");

  // CSR Form State
  const [cCompany, setCCompany] = useState("");
  const [cContactPerson, setCContactPerson] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [cScope, setCScope] = useState("Establish a Learning Centre");
  const [cNotes, setCNotes] = useState("");

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
  };

  const handleCsrSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCsrSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-20 sm:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="hero-radial-bg border-b border-neutral-200/60 pb-16 pt-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
              Get Involved
            </span>
            <h1 className="font-serif text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              There Are Many Ways to Help a Child{" "}
              <span className="text-brand-700">Move Forward.</span>
            </h1>
            <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">
              Your support can help a child access education, continue learning,
              heal emotionally, develop skills, and unlock lifetime
              independence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUICK NAVIGATION PILLS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#donate"
            className="flex items-center gap-1.5 rounded-full bg-brand-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-800"
          >
            <Heart className="h-3.5 w-3.5 fill-white" /> 1. Donate (80G)
          </a>
          <a
            href="#volunteer"
            className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-800 transition-all hover:border-brand-700 hover:text-brand-700"
          >
            2. Volunteer Skills
          </a>
          <a
            href="#csr"
            className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-800 transition-all hover:border-brand-700 hover:text-brand-700"
          >
            3. Corporate CSR
          </a>
          <a
            href="#in-kind"
            className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-800 transition-all hover:border-brand-700 hover:text-brand-700"
          >
            4. In-Kind & Book Drives
          </a>
        </div>
      </section>

      {/* 3. DONATE & SPONSOR SECTION */}
      <section
        id="donate"
        className="mx-auto max-w-5xl scroll-mt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            7.1 Direct Financial Contribution
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Support a Child’s Educational Journey
          </h2>
          <p className="text-sm text-neutral-600 sm:text-base">
            Every contribution directly finances educational fees, learning
            kits, nutrition, and mental health counseling.
          </p>
        </div>

        <DonationCalculator />
      </section>

      {/* 4. VOLUNTEER SECTION */}
      <section
        id="volunteer"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-card sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
                7.2 Volunteer Opportunities
              </span>
              <h3 className="font-serif text-3xl font-bold text-neutral-900">
                Give Your Time. Share Your Skills.
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Volunteers are the backbone of Chandni Di’s daily classrooms.
                Whether you can teach English or mathematics, organize art
                workshops, offer professional career mentorship, or assist in
                weekend drives, your presence inspires our scholars.
              </p>

              <div className="space-y-3 text-xs text-neutral-700 sm:text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-600" />
                  <span>Academic Tutoring (Math, Science, English, Hindi)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-600" />
                  <span>
                    College & Career Mentorship for University Scholars
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-600" />
                  <span>Art, Music, Sports & Life Skills Workshops</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-600" />
                  <span>Digital Literacy & Computer Lab Guidance</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 lg:col-span-7">
              {volunteerSubmitted ? (
                <div className="space-y-4 rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-neutral-900">
                    Thank You for Stepping Up!
                  </h4>
                  <p className="text-sm text-neutral-600">
                    We have received your details, <strong>{vName}</strong>. Our
                    volunteer coordination team in Delhi-NCR will reach out to
                    you via WhatsApp / Email within 48 hours.
                  </p>
                  <button
                    onClick={() => setVolunteerSubmitted(false)}
                    className="text-xs font-bold text-brand-700 hover:underline"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <h4 className="mb-2 text-base font-bold text-neutral-900">
                    Volunteer Application Form
                  </h4>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={vName}
                        onChange={(e) => setVName(e.target.value)}
                        className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm focus:border-brand-700 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={vEmail}
                        onChange={(e) => setVEmail(e.target.value)}
                        className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm focus:border-brand-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91-9876543210"
                        value={vPhone}
                        onChange={(e) => setVPhone(e.target.value)}
                        className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm focus:border-brand-700 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={vCity}
                        onChange={(e) => setVCity(e.target.value)}
                        className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm focus:border-brand-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                        Area of Interest
                      </label>
                      <select
                        value={vInterest}
                        onChange={(e) => setVInterest(e.target.value)}
                        className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm focus:border-brand-700 focus:outline-none"
                      >
                        <option>Teaching & Tutoring</option>
                        <option>Mentorship & Career Guidance</option>
                        <option>Mental Health & Wellbeing</option>
                        <option>Digital Literacy & Coding</option>
                        <option>Event & Fundraiser Organizing</option>
                        <option>Creative Arts & Sports</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                        Availability
                      </label>
                      <select
                        value={vAvailability}
                        onChange={(e) => setVAvailability(e.target.value)}
                        className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-sm focus:border-brand-700 focus:outline-none"
                      >
                        <option>Weekends (Sat/Sun)</option>
                        <option>Weekday Evenings</option>
                        <option>Flexible / Remote</option>
                        <option>Full-Time Volunteer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase text-neutral-700">
                      Brief Message or Background
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us a little bit about yourself and your skills..."
                      value={vMessage}
                      onChange={(e) => setVMessage(e.target.value)}
                      className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2 text-sm focus:border-brand-700 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-700 py-3 text-sm font-bold text-white shadow transition-all hover:bg-brand-800"
                  >
                    Submit Volunteer Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CSR PARTNERSHIPS */}
      <section
        id="csr"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl bg-charcoal-900 p-8 text-white sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <span className="bg-brand-950 rounded-full border border-brand-800 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-400">
                7.4 Corporate Social Responsibility
              </span>
              <h3 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                Create Meaningful Impact Through Structured CSR
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Chandni Di NGO is registered with the Ministry of Corporate
                Affairs with valid <strong>CSR-1 registration</strong>,{" "}
                <strong>Section 80G</strong>, and <strong>12A</strong> status.
                We partner with forward-thinking enterprises under Schedule VII
                to execute high-impact educational models.
              </p>

              <div className="space-y-3 pt-2">
                <div className="rounded-xl border border-neutral-700 bg-neutral-800/80 p-3">
                  <div className="text-xs font-bold text-white">
                    Adopt an Entire Learning Centre
                  </div>
                  <div className="text-xs text-neutral-400">
                    Finance infrastructure, computers, and staff for 100 slum
                    children.
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-700 bg-neutral-800/80 p-3">
                  <div className="text-xs font-bold text-white">
                    College to Corporate Fellowship
                  </div>
                  <div className="text-xs text-neutral-400">
                    Sponsor degree fees and offer structured internships at your
                    company.
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-700 bg-neutral-800/80 p-3">
                  <div className="text-xs font-bold text-white">
                    Employee Volunteering Programs
                  </div>
                  <div className="text-xs text-neutral-400">
                    Engage your corporate workforce in weekend teaching and life
                    mentorship.
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-700 bg-neutral-800 p-6 sm:p-8 lg:col-span-6">
              {csrSubmitted ? (
                <div className="space-y-4 rounded-xl border border-neutral-700 bg-neutral-900 p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Proposal Request Received
                  </h4>
                  <p className="text-sm text-neutral-300">
                    Thank you, <strong>{cContactPerson}</strong> from{" "}
                    <strong>{cCompany}</strong>. Our CSR Partnerships Director
                    will reach out within 24 business hours with our CSR
                    documentation and compliance dossier.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCsrSubmit} className="space-y-4">
                  <h4 className="mb-2 text-base font-bold text-white">
                    Request Corporate CSR Proposal
                  </h4>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase text-neutral-300">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Corporate Ltd."
                        value={cCompany}
                        onChange={(e) => setCCompany(e.target.value)}
                        className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3.5 py-2.5 text-sm text-white focus:border-brand-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase text-neutral-300">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Name & Title"
                        value={cContactPerson}
                        onChange={(e) => setCContactPerson(e.target.value)}
                        className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3.5 py-2.5 text-sm text-white focus:border-brand-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase text-neutral-300">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="csr@company.com"
                        value={cEmail}
                        onChange={(e) => setCEmail(e.target.value)}
                        className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3.5 py-2.5 text-sm text-white focus:border-brand-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase text-neutral-300">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91-XXXXXXXXXX"
                        value={cPhone}
                        onChange={(e) => setCPhone(e.target.value)}
                        className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3.5 py-2.5 text-sm text-white focus:border-brand-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase text-neutral-300">
                      CSR Scope / Interest
                    </label>
                    <select
                      value={cScope}
                      onChange={(e) => setCScope(e.target.value)}
                      className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3.5 py-2.5 text-sm text-white focus:border-brand-500 focus:outline-none"
                    >
                      <option>Establish a New Learning Centre</option>
                      <option>Sponsor Classrooms & Computers</option>
                      <option>Higher Education Scholarship Fund</option>
                      <option>Employee Payroll Giving & Volunteering</option>
                      <option>General CSR Fund Allocation</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase text-neutral-300">
                      Estimated Budget or Requirements
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Specify your targeted geography, timeline, or mandate..."
                      value={cNotes}
                      onChange={(e) => setCNotes(e.target.value)}
                      className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3.5 py-2 text-sm text-white focus:border-brand-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-700 py-3 text-sm font-bold text-white transition-all hover:bg-brand-600"
                  >
                    Request CSR Partnership Deck
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. IN-KIND DRIVES & OTHER WAYS */}
      <section
        id="in-kind"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto mb-10 max-w-2xl space-y-2 text-center">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            7.7 Community Participation
          </span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900">
            Every Contribution Matters
          </h2>
          <p className="text-sm text-neutral-600">
            Beyond financial gifts, physical educational essentials make an
            immediate difference in a child’s day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 font-bold text-brand-700">
              📚
            </div>
            <h4 className="text-base font-bold text-neutral-900">
              Book & Stationery Drives
            </h4>
            <p className="text-xs text-neutral-600">
              Donate notebooks, pens, geometry boxes, storybooks, and
              Hindi/English dictionaries.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 font-bold text-brand-700">
              🎒
            </div>
            <h4 className="text-base font-bold text-neutral-900">
              School Uniforms & Bags
            </h4>
            <p className="text-xs text-neutral-600">
              Sponsor durable school backpacks, formal school shoes, socks, and
              winter sweaters.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 font-bold text-brand-700">
              💻
            </div>
            <h4 className="text-base font-bold text-neutral-900">
              Refurbished Digital Devices
            </h4>
            <p className="text-xs text-neutral-600">
              Donate working laptops, tablets, or monitors for our community
              digital classrooms.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 font-bold text-brand-700">
              🍎
            </div>
            <h4 className="text-base font-bold text-neutral-900">
              Nutrition & Food Support
            </h4>
            <p className="text-xs text-neutral-600">
              Support healthy afternoon snacks and nutritional rations for
              families in extreme distress.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
