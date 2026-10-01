import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-charcoal-900 pb-10 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-neutral-800 pb-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-xl bg-white px-3 py-1.5">
                <Image
                  src="/images/logo_cropped.png"
                  alt="Chandni Di Logo"
                  width={140}
                  height={45}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            <p className="pr-4 text-sm leading-relaxed text-neutral-400">
              Working relentlessly since 2016 for slum and street children. We
              provide foundational bridge education, after-school tuition,
              counselling, and 100% college sponsorships to guide every child
              toward mainstream independence and dignity.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800/80 px-3 py-1.5 text-xs text-neutral-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Registered NGO • 80G & 12A Certified • NGO Darpan</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Programmes */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Our Programmes
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link
                  href="/programmes#bridge"
                  className="flex items-center gap-1.5 transition-colors hover:text-brand-400"
                >
                  <ArrowRight className="h-3 w-3 text-brand-500" /> Bridge
                  Programme (5-12y)
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes#after-school"
                  className="flex items-center gap-1.5 transition-colors hover:text-brand-400"
                >
                  <ArrowRight className="h-3 w-3 text-brand-500" /> After-School
                  Tutoring
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes#college-to-career"
                  className="flex items-center gap-1.5 transition-colors hover:text-brand-400"
                >
                  <ArrowRight className="h-3 w-3 text-brand-500" /> College to
                  Career (100%)
                </Link>
              </li>
              <li>
                <Link
                  href="/impact#stories"
                  className="flex items-center gap-1.5 transition-colors hover:text-brand-400"
                >
                  <ArrowRight className="h-3 w-3 text-brand-500" /> Stories of
                  Change
                </Link>
              </li>
              <li>
                <Link
                  href="/impact#roadmap"
                  className="flex items-center gap-1.5 transition-colors hover:text-brand-400"
                >
                  <ArrowRight className="h-3 w-3 text-brand-500" /> 10 Centres
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link
                  href="/get-involved#donate"
                  className="flex items-center gap-1.5 transition-colors hover:text-brand-400"
                >
                  <Heart className="h-3 w-3 fill-brand-500 text-brand-500" />{" "}
                  Donate & Save 50% Tax
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved#sponsor"
                  className="transition-colors hover:text-brand-400"
                >
                  Sponsor a Child Monthly
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved#volunteer"
                  className="transition-colors hover:text-brand-400"
                >
                  Volunteer Your Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved#csr"
                  className="transition-colors hover:text-brand-400"
                >
                  Corporate CSR Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/transparency"
                  className="transition-colors hover:text-brand-400"
                >
                  Annual Reports & Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Reach Us
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>
                  Centres across Delhi-NCR & Community Classrooms, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-500" />
                <a
                  href="tel:+919876543210"
                  className="transition-colors hover:text-white"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-500" />
                <a
                  href="mailto:contact@chandnidi.org"
                  className="transition-colors hover:text-white"
                >
                  contact@chandnidi.org
                </a>
              </li>
            </ul>
            <div className="mt-4 border-t border-neutral-800 pt-3">
              <Link
                href="/get-involved#donate"
                className="inline-flex w-full items-center justify-center rounded-lg bg-brand-700 py-2 text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-600"
              >
                Support Education Today
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal Certifications */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-neutral-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Chandni Di NGO. All rights reserved.
            Registered Indian Social Organisation.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-neutral-400">
              80G Tax Exemption No: Verified
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">12A Reg: Active</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">CSR-1 Registered</span>
            <span className="text-neutral-600">•</span>
            <Link
              href="/transparency"
              className="underline hover:text-neutral-300"
            >
              Governance & Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
