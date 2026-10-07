"use client";

import React from "react";
import {
  Mail,
  Phone,
  Download,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { CONTACT_INFO } from "@/data/ngoData";

export default function MediaPressKit() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#F5EFE6] p-8 shadow-card sm:p-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: Press Inquiry Details */}
          <div className="space-y-4 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/80">
              <Sparkles className="h-3.5 w-3.5 text-brand-700" />
              Journalists &amp; Broadcasters
            </span>

            <h2 className="font-serif text-2xl font-extrabold text-neutral-900 sm:text-3xl lg:text-4xl">
              Media &amp; Press Inquiries
            </h2>

            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
              Chandni Di and our student spokespersons regularly engage with
              print journalists, television documentary producers, and social
              activists. We provide verified impact metrics, classroom filming
              access (subject to child safeguarding consent), and
              high-resolution visual assets.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-2 text-xs sm:grid-cols-2">
              <div className="shadow-2xs flex items-center gap-3 rounded-2xl border border-neutral-200/80 bg-white p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Official Media Desk
                  </span>
                  <a
                    href="mailto:contact@chandnidi.org"
                    className="font-semibold text-neutral-900 hover:text-brand-700"
                  >
                    contact@chandnidi.org
                  </a>
                </div>
              </div>

              <div className="shadow-2xs flex items-center gap-3 rounded-2xl border border-neutral-200/80 bg-white p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Direct Coordination
                  </span>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
                    className="font-semibold text-neutral-900 hover:text-brand-700"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Child Rights & Verification Safeguard Notice */}
          <div className="lg:col-span-5">
            <div className="space-y-4 rounded-3xl border-2 border-white bg-white/95 p-6 shadow-xl ring-1 ring-neutral-200/80 backdrop-blur-md sm:p-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <ShieldCheck className="h-4 w-4 text-emerald-700" />
                <span>Child Rights &amp; Safeguarding Policy</span>
              </div>

              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                In strict compliance with the POCSO Act and Juvenile Justice
                regulations, any media interviews or photographs of enrolled
                children require prior written guardian authorization and
                foundation supervision.
              </p>

              <div className="border-t border-neutral-100 pt-4">
                <a
                  href="mailto:contact@chandnidi.org?subject=Press%20Kit%20Request%20-%20Chandni%20Di%20Foundation"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md"
                >
                  <Download className="h-4 w-4" />
                  <span>Request Official Media Kit</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
