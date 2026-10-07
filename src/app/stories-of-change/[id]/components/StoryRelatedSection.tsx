import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Story } from "@/data/ngoData";

interface StoryRelatedSectionProps {
  relatedStories: Story[];
}

export default function StoryRelatedSection({
  relatedStories,
}: StoryRelatedSectionProps) {
  if (!relatedStories || relatedStories.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-neutral-100 bg-[#FAF7F2]/60 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
              More Journeys of Transformation
            </span>
            <h2 className="mt-1 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              Meet More Inspiring Scholars
            </h2>
          </div>
          <Link
            href="/stories-of-change"
            className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-800"
          >
            <span>View All Stories</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedStories.map((related) => (
            <Link
              key={related.id}
              href={`/stories-of-change/${related.id}`}
              className="shadow-xs group flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={related.image}
                  alt={related.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="font-serif text-lg font-bold">
                    {related.name}
                  </span>
                  <p className="text-xs text-neutral-200">{related.course}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="line-clamp-2 font-serif text-base font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                    {related.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-600">
                    {related.excerpt || related.story}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3 text-xs font-bold text-brand-700">
                  <span>Read Full Story</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
