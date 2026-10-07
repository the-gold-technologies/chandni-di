import React from "react";
import { Info, AlertTriangle, CheckCircle2 } from "lucide-react";

interface LegalSectionProps {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  callout?: {
    type?: "info" | "warning" | "success";
    title?: string;
    text: string;
  };
}

export default function LegalSection({
  id,
  number,
  title,
  children,
  callout,
}: LegalSectionProps) {
  const calloutStyles = {
    info: {
      border: "border-sky-200",
      bg: "bg-sky-50/70",
      text: "text-sky-950",
      icon: <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" />,
    },
    warning: {
      border: "border-amber-200",
      bg: "bg-amber-50/70",
      text: "text-amber-950",
      icon: (
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
      ),
    },
    success: {
      border: "border-emerald-200",
      bg: "bg-emerald-50/70",
      text: "text-emerald-950",
      icon: (
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
      ),
    },
  };

  const selectedCallout = callout
    ? calloutStyles[callout.type || "info"]
    : null;

  return (
    <section
      id={id}
      className="scroll-mt-36 border-b border-neutral-100 pb-10 pt-6 last:border-b-0"
    >
      <div className="flex items-baseline gap-3">
        <span className="rounded-md bg-brand-50 px-2 py-0.5 font-mono text-xs font-bold text-brand-700 ring-1 ring-brand-200/60">
          {number}
        </span>
        <h2 className="font-serif text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
          {title}
        </h2>
      </div>

      <div className="mt-4 space-y-4 text-sm font-normal leading-relaxed text-neutral-700 sm:text-base">
        {children}
      </div>

      {callout && selectedCallout && (
        <div
          className={`mt-5 flex items-start gap-3.5 rounded-2xl border p-4 sm:p-5 ${selectedCallout.border} ${selectedCallout.bg}`}
        >
          {selectedCallout.icon}
          <div className="text-xs leading-relaxed text-neutral-800 sm:text-sm">
            {callout.title && (
              <span className="mb-1 block font-bold text-neutral-900">
                {callout.title}
              </span>
            )}
            {callout.text}
          </div>
        </div>
      )}
    </section>
  );
}
