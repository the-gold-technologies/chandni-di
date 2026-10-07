import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ShieldAlert,
  ArrowRight,
  Clock,
} from "lucide-react";
import { CONTACT_INFO } from "@/data/ngoData";

interface LegalContactCardProps {
  policyName: string;
}

export default function LegalContactCard({
  policyName,
}: LegalContactCardProps) {
  return (
    <div
      style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
      className="mt-12 overflow-hidden rounded-3xl border border-brand-200/90 bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#F5EFE6] p-6 shadow-sm sm:p-8 print:mt-6 print:break-inside-avoid print:border-neutral-300 print:bg-white print:p-5"
    >
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
        <div className="max-w-xl space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800 ring-1 ring-brand-200/70">
            <ShieldAlert className="h-3.5 w-3.5 text-brand-700" />
            <span>Grievance Redressal &amp; Inquiries</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-neutral-900 sm:text-2xl">
            Questions Regarding Our {policyName}?
          </h3>
          <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
            Chandni Di Foundation is committed to transparency and ethical
            governance. For any concerns regarding personal data, donor records,
            terms, or cookies, our Grievance Officer is available to assist you.
          </p>
        </div>

        <Link
          href="/contact"
          className="shadow-xs inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-brand-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-800 hover:shadow-md"
        >
          <span>Contact Officer</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 border-t border-neutral-200/70 pt-6 text-xs sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <div className="shadow-2xs flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-neutral-200/80">
            <Mail className="h-4 w-4" />
          </div>
          <div>
            <span className="font-bold uppercase tracking-wider text-neutral-400">
              Official Email
            </span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="mt-0.5 block font-semibold text-neutral-900 hover:text-brand-700"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="shadow-2xs flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-neutral-200/80">
            <Phone className="h-4 w-4" />
          </div>
          <div>
            <span className="font-bold uppercase tracking-wider text-neutral-400">
              Helpline Phone
            </span>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
              className="mt-0.5 block font-semibold text-neutral-900 hover:text-brand-700"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="shadow-2xs flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-neutral-200/80">
            <Clock className="h-4 w-4" />
          </div>
          <div>
            <span className="font-bold uppercase tracking-wider text-neutral-400">
              Resolution Turnaround
            </span>
            <p className="mt-0.5 font-semibold text-neutral-900">
              Within 48–72 Working Hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
