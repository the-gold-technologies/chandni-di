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
    <footer className="bg-charcoal-900 text-white pt-16 pb-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl py-1.5 px-3 flex items-center justify-center">
                <Image
                  src="/images/logo_cropped.png"
                  alt="Chandni Di Logo"
                  width={140}
                  height={45}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed pr-4">
              Working relentlessly since 2016 for slum and street children. We
              provide foundational bridge education, after-school tuition,
              counselling, and 100% college sponsorships to guide every child
              toward mainstream independence and dignity.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Registered NGO • 80G & 12A Certified • NGO Darpan</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Programmes */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-4">
              Our Programmes
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link
                  href="/programmes#bridge"
                  className="hover:text-brand-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-brand-500" /> Bridge
                  Programme (5-12y)
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes#after-school"
                  className="hover:text-brand-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-brand-500" /> After-School
                  Tutoring
                </Link>
              </li>
              <li>
                <Link
                  href="/programmes#college-to-career"
                  className="hover:text-brand-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-brand-500" /> College to
                  Career (100%)
                </Link>
              </li>
              <li>
                <Link
                  href="/impact#stories"
                  className="hover:text-brand-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-brand-500" /> Stories of
                  Change
                </Link>
              </li>
              <li>
                <Link
                  href="/impact#roadmap"
                  className="hover:text-brand-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-brand-500" /> 10 Centres
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link
                  href="/get-involved#donate"
                  className="hover:text-brand-400 transition-colors flex items-center gap-1.5"
                >
                  <Heart className="w-3 h-3 text-brand-500 fill-brand-500" />{" "}
                  Donate & Save 50% Tax
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved#sponsor"
                  className="hover:text-brand-400 transition-colors"
                >
                  Sponsor a Child Monthly
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved#volunteer"
                  className="hover:text-brand-400 transition-colors"
                >
                  Volunteer Your Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved#csr"
                  className="hover:text-brand-400 transition-colors"
                >
                  Corporate CSR Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/transparency"
                  className="hover:text-brand-400 transition-colors"
                >
                  Annual Reports & Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-4">
              Reach Us
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>
                  Centres across Delhi-NCR & Community Classrooms, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a
                  href="mailto:contact@chandnidi.org"
                  className="hover:text-white transition-colors"
                >
                  contact@chandnidi.org
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-neutral-800">
              <Link
                href="/get-involved#donate"
                className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-brand-700 hover:bg-brand-600 text-white font-medium text-xs tracking-wide uppercase transition-colors"
              >
                Support Education Today
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal Certifications */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
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
              className="hover:text-neutral-300 underline"
            >
              Governance & Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
