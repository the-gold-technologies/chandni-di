'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [enquiryType, setEnquiryType] = useState('Sponsor a Child');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="hero-radial-bg pt-12 pb-16 sm:py-20 border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
              Contact & Connect
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 font-serif leading-tight">
              Let’s Work Together Towards a <span className="text-brand-700">Child’s Future.</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
              Whether you want to sponsor a child, volunteer your skills, explore a CSR collaboration, or schedule a centre visit, we would love to connect.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT FORM & INFO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Office */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Official Information
              </span>
              <h2 className="text-3xl font-bold text-neutral-900 font-serif">
                Reach Out to Us
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Our administrative and coordination desk operates across Delhi-NCR. We respond to inquiries within 24 to 48 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-white rounded-2xl border border-neutral-200/80 shadow-soft flex items-start gap-4">
                <div className="p-3 bg-brand-50 text-brand-700 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Community Classrooms & Centres</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Decentralized learning centres across Delhi-NCR, India
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Visiting hours: Monday to Saturday, 10:00 AM – 5:00 PM (Prior appointment required)
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-neutral-200/80 shadow-soft flex items-start gap-4">
                <div className="p-3 bg-brand-50 text-brand-700 rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Phone / WhatsApp</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    <a href="tel:+919876543210" className="hover:text-brand-700 font-semibold">
                      +91 98765 43210
                    </a>
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Available Mon-Sat for donor and volunteer inquiries
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-neutral-200/80 shadow-soft flex items-start gap-4">
                <div className="p-3 bg-brand-50 text-brand-700 rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Official Email</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    <a href="mailto:contact@chandnidi.org" className="hover:text-brand-700 font-semibold">
                      contact@chandnidi.org
                    </a>
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    For CSR proposals: csr@chandnidi.org
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-800 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                All donations are registered under <strong>Section 80G</strong> and <strong>12A</strong>. We guarantee 100% financial legitimacy.
              </span>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200 shadow-card p-6 sm:p-10">
            {submitted ? (
              <div className="p-10 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 font-serif">
                  Thank You, {name}!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  Your enquiry regarding <strong>{enquiryType}</strong> has been logged. Our coordinator will contact you at <strong>{email}</strong> or <strong>{phone}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-black transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 mb-4">
                  <h3 className="text-xl font-bold text-neutral-900 font-serif">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Fill out the form below and we will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sen"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ananya@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91-XXXXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                      Organisation (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Company, College, or School"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                    Enquiry Type *
                  </label>
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700 bg-white"
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
                  <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How would you like to collaborate or support our scholars?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-brand-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
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
