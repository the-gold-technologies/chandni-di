"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ChevronDown, Send } from "lucide-react";

export default function ContactForm() {
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
    <div className="w-full">
      {submitted ? (
        <div className="shadow-xs rounded-2xl border border-neutral-200 bg-white p-8 text-center sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="mt-4 font-sans text-2xl font-bold text-neutral-900">
            Thank You, {name}!
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-neutral-600">
            Your enquiry regarding <strong>{enquiryType}</strong> has been
            received. We will get back to you within 24 hours.
          </p>
          <div className="pt-6">
            <button
              onClick={() => {
                setSubmitted(false);
                setMessage("");
                setName("");
                setEmail("");
                setPhone("");
                setOrg("");
              }}
              className="rounded-full bg-brand-700 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-800"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Header matching Reference Image: "Send Message" */}
          <div className="space-y-1.5 pb-1">
            <h3 className="font-sans text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Send Message
            </h3>
            <p className="text-xs leading-relaxed text-neutral-500 sm:text-sm">
              Please fill out the form below with your details and message to
              contact with us
            </p>
          </div>

          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name *"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address *"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Row 2: Phone & Organisation */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number *"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <input
                type="text"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                placeholder="Organisation (optional)"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Row 3: Enquiry Type (Dropdown) */}
          <div className="relative">
            <select
              value={enquiryType}
              onChange={(e) => setEnquiryType(e.target.value)}
              className="w-full appearance-none rounded-xl border border-neutral-200 bg-white px-4 py-3 pr-10 text-sm text-neutral-800 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-0"
            >
              <option value="Donate">Donate</option>
              <option value="Volunteer">Volunteer</option>
              <option value="CSR Partnership">CSR Partnership</option>
              <option value="Sponsor a Child">Sponsor a Child</option>
              <option value="Fundraise">Fundraise</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-neutral-400" />
          </div>

          {/* Row 4: Message */}
          <div>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write Message Here..."
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-neutral-900 focus:outline-none focus:ring-0"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-700 px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow"
            >
              <span>Submit Enquiry</span>
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
