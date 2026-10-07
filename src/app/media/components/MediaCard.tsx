"use client";

import React from "react";
import {
  ExternalLink,
  BookOpen,
  Tv,
  Newspaper,
  Video,
  FolderArchive,
  ArrowUpRight,
} from "lucide-react";
import { MediaItem } from "@/data/mediaData";

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

interface MediaCardProps {
  item: MediaItem;
}

export default function MediaCard({ item }: MediaCardProps) {
  const renderIcon = () => {
    switch (item.iconType) {
      case "wikipedia":
        return <BookOpen className="h-5 w-5 text-neutral-800" />;
      case "tv":
        return <Tv className="h-5 w-5 text-red-600" />;
      case "newspaper":
        return <Newspaper className="h-5 w-5 text-amber-700" />;
      case "video":
        return <Video className="h-5 w-5 text-red-600" />;
      case "twitter":
        return <TwitterIcon className="h-5 w-5 text-sky-500" />;
      case "facebook":
        return <FacebookIcon className="h-5 w-5 text-blue-600" />;
      case "archive":
        return <FolderArchive className="h-5 w-5 text-emerald-700" />;
      default:
        return <ExternalLink className="h-5 w-5 text-brand-700" />;
    }
  };

  const getIconBg = () => {
    switch (item.iconType) {
      case "wikipedia":
        return "bg-neutral-100 ring-neutral-200";
      case "tv":
      case "video":
        return "bg-red-50 ring-red-200/70";
      case "newspaper":
        return "bg-amber-50 ring-amber-200/70";
      case "twitter":
        return "bg-sky-50 ring-sky-200/70";
      case "facebook":
        return "bg-blue-50 ring-blue-200/70";
      case "archive":
        return "bg-emerald-50 ring-emerald-200/70";
      default:
        return "bg-brand-50 ring-brand-200";
    }
  };

  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card sm:p-7">
      <div className="space-y-4">
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div
              className={`shadow-2xs flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ring-1 ${getIconBg()}`}
            >
              {renderIcon()}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                {item.outlet}
              </p>
              <p className="text-[11px] font-medium text-neutral-400">
                {item.date}
              </p>
            </div>
          </div>

          <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-bold text-neutral-700">
            {item.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-bold leading-snug text-neutral-900 transition-colors group-hover:text-brand-700 sm:text-xl">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
          {item.description}
        </p>
      </div>

      {/* Card Action Link */}
      <div className="mt-6 border-t border-neutral-100 pt-4">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 transition-colors group-hover:text-brand-800"
        >
          <span>View Coverage</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
