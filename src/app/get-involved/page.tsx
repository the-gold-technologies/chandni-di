'use client';

import React, { useState } from 'react';
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
  PhoneCall
} from 'lucide-react';
import DonationCalculator from '@/components/DonationCalculator';

export default function GetInvolvedPage() {
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [csrSubmitted, setCsrSubmitted] = useState(false);

  // Volunteer Form State
  const [vName, setVName] = useState('');
  const [vEmail, setVEmail] = useState('');
  const [vPhone, setVPhone] = useState('');
  const [vCity, setVCity] = useState('Delhi-NCR');
  const [vInterest, setVInterest] = useState('Teaching & Tutoring');
  const [vAvailability, setVAvailability] = useState('Weekends');
  const [vMessage, setVMessage] = useState('');

  // CSR Form State
  const [cCompany, setCCompany] = useState('');
  const [cContactPerson, setCContactPerson] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cPhone, setCPhone] = useState('');
  const [cScope, setCScope] = useState('Establish a Learning Centre');
  const [cNotes, setCNotes] = useState('');

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
  };

  const handleCsrSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCsrSubmitted(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="hero-radial-bg pt-12 pb-16 sm:py-20 border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
              Get Involved
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 font-serif leading-tight">
              There Are Many Ways to Help a Child <span className="text-brand-700">Move Forward.</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
              Your support can help a child access education, continue learning, heal emotionally, develop skills, and unlock lifetime independence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUICK NAVIGATION PILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#donate"
            className="px-5 py-2.5 rounded-full bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-brand-800 transition-all flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 fill-white" /> 1. Donate (80G)
          </a>
          <a
            href="#volunteer"
            className="px-5 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-800 font-bold text-xs uppercase tracking-wider hover:border-brand-700 hover:text-brand-700 transition-all"
          >
            2. Volunteer Skills
          </a>
          <a
            href="#csr"
            className="px-5 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-800 font-bold text-xs uppercase tracking-wider hover:border-brand-700 hover:text-brand-700 transition-all"
          >
            3. Corporate CSR
          </a>
          <a
            href="#in-kind"
            className="px-5 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-800 font-bold text-xs uppercase tracking-wider hover:border-brand-700 hover:text-brand-700 transition-all"
          >
            4. In-Kind & Book Drives
          </a>
        </div>
      </section>

      {/* 3. DONATE & SPONSOR SECTION */}
      <section id="donate" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
            7.1 Direct Financial Contribution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-serif">
            Support a Child’s Educational Journey
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Every contribution directly finances educational fees, learning kits, nutrition, and mental health counseling.
          </p>
        </div>

        <DonationCalculator />
      </section>

      {/* 4. VOLUNTEER SECTION */}
      <section id="volunteer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-card p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
                7.2 Volunteer Opportunities
              </span>
              <h3 className="text-3xl font-bold text-neutral-900 font-serif">
                Give Your Time. Share Your Skills.
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Volunteers are the backbone of Chandni Di’s daily classrooms. Whether you can teach English or mathematics, organize art workshops, offer professional career mentorship, or assist in weekend drives, your presence inspires our scholars.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Academic Tutoring (Math, Science, English, Hindi)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>College & Career Mentorship for University Scholars</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Art, Music, Sports & Life Skills Workshops</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Digital Literacy & Computer Lab Guidance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200">
              {volunteerSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 font-serif">
                    Thank You for Stepping Up!
                  </h4>
                  <p className="text-sm text-neutral-600">
                    We have received your details, <strong>{vName}</strong>. Our volunteer coordination team in Delhi-NCR will reach out to you via WhatsApp / Email within 48 hours.
                  </p>
                  <button
                    onClick={() => setVolunteerSubmitted(false)}
                    className="text-xs text-brand-700 font-bold hover:underline"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <h4 className="text-base font-bold text-neutral-900 mb-2">
                    Volunteer Application Form
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={vName}
                        onChange={(e) => setVName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={vEmail}
                        onChange={(e) => setVEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91-9876543210"
                        value={vPhone}
                        onChange={(e) => setVPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={vCity}
                        onChange={(e) => setVCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                        Area of Interest
                      </label>
                      <select
                        value={vInterest}
                        onChange={(e) => setVInterest(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700"
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
                      <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                        Availability
                      </label>
                      <select
                        value={vAvailability}
                        onChange={(e) => setVAvailability(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700"
                      >
                        <option>Weekends (Sat/Sun)</option>
                        <option>Weekday Evenings</option>
                        <option>Flexible / Remote</option>
                        <option>Full-Time Volunteer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                      Brief Message or Background
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us a little bit about yourself and your skills..."
                      value={vMessage}
                      onChange={(e) => setVMessage(e.target.value)}
                      className="w-full px-3.5 py-2 bg-white rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm transition-all shadow"
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
      <section id="csr" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-charcoal-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-950 px-3 py-1 rounded-full border border-brand-800">
                7.4 Corporate Social Responsibility
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white">
                Create Meaningful Impact Through Structured CSR
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Chandni Di NGO is registered with the Ministry of Corporate Affairs with valid <strong>CSR-1 registration</strong>, <strong>Section 80G</strong>, and <strong>12A</strong> status. We partner with forward-thinking enterprises under Schedule VII to execute high-impact educational models.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                  <div className="text-xs font-bold text-white">Adopt an Entire Learning Centre</div>
                  <div className="text-xs text-neutral-400">Finance infrastructure, computers, and staff for 100 slum children.</div>
                </div>
                <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                  <div className="text-xs font-bold text-white">College to Corporate Fellowship</div>
                  <div className="text-xs text-neutral-400">Sponsor degree fees and offer structured internships at your company.</div>
                </div>
                <div className="p-3 bg-neutral-800/80 rounded-xl border border-neutral-700">
                  <div className="text-xs font-bold text-white">Employee Volunteering Programs</div>
                  <div className="text-xs text-neutral-400">Engage your corporate workforce in weekend teaching and life mentorship.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-neutral-800 rounded-2xl p-6 sm:p-8 border border-neutral-700">
              {csrSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-neutral-900 rounded-xl border border-neutral-700">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-serif">
                    Proposal Request Received
                  </h4>
                  <p className="text-sm text-neutral-300">
                    Thank you, <strong>{cContactPerson}</strong> from <strong>{cCompany}</strong>. Our CSR Partnerships Director will reach out within 24 business hours with our CSR documentation and compliance dossier.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCsrSubmit} className="space-y-4">
                  <h4 className="text-base font-bold text-white mb-2">
                    Request Corporate CSR Proposal
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Corporate Ltd."
                        value={cCompany}
                        onChange={(e) => setCCompany(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 text-white rounded-xl border border-neutral-700 text-sm focus:outline-none focus:border-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Name & Title"
                        value={cContactPerson}
                        onChange={(e) => setCContactPerson(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 text-white rounded-xl border border-neutral-700 text-sm focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="csr@company.com"
                        value={cEmail}
                        onChange={(e) => setCEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 text-white rounded-xl border border-neutral-700 text-sm focus:outline-none focus:border-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91-XXXXXXXXXX"
                        value={cPhone}
                        onChange={(e) => setCPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-neutral-900 text-white rounded-xl border border-neutral-700 text-sm focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">
                      CSR Scope / Interest
                    </label>
                    <select
                      value={cScope}
                      onChange={(e) => setCScope(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-neutral-900 text-white rounded-xl border border-neutral-700 text-sm focus:outline-none focus:border-brand-500"
                    >
                      <option>Establish a New Learning Centre</option>
                      <option>Sponsor Classrooms & Computers</option>
                      <option>Higher Education Scholarship Fund</option>
                      <option>Employee Payroll Giving & Volunteering</option>
                      <option>General CSR Fund Allocation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">
                      Estimated Budget or Requirements
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Specify your targeted geography, timeline, or mandate..."
                      value={cNotes}
                      onChange={(e) => setCNotes(e.target.value)}
                      className="w-full px-3.5 py-2 bg-neutral-900 text-white rounded-xl border border-neutral-700 text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-brand-700 hover:bg-brand-600 text-white font-bold text-sm transition-all"
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
      <section id="in-kind" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
            7.7 Community Participation
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 font-serif">
            Every Contribution Matters
          </h2>
          <p className="text-sm text-neutral-600">
            Beyond financial gifts, physical educational essentials make an immediate difference in a child’s day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
              📚
            </div>
            <h4 className="font-bold text-neutral-900 text-base">Book & Stationery Drives</h4>
            <p className="text-xs text-neutral-600">
              Donate notebooks, pens, geometry boxes, storybooks, and Hindi/English dictionaries.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
              🎒
            </div>
            <h4 className="font-bold text-neutral-900 text-base">School Uniforms & Bags</h4>
            <p className="text-xs text-neutral-600">
              Sponsor durable school backpacks, formal school shoes, socks, and winter sweaters.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
              💻
            </div>
            <h4 className="font-bold text-neutral-900 text-base">Refurbished Digital Devices</h4>
            <p className="text-xs text-neutral-600">
              Donate working laptops, tablets, or monitors for our community digital classrooms.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
              🍎
            </div>
            <h4 className="font-bold text-neutral-900 text-base">Nutrition & Food Support</h4>
            <p className="text-xs text-neutral-600">
              Support healthy afternoon snacks and nutritional rations for families in extreme distress.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
