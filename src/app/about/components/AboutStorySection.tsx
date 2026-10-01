"use client";

import React from "react";
import Image from "next/image";
import { Award } from "lucide-react";

export default function AboutStorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Left: Photo + Recognition badge */}
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-4 border-white shadow-card">
            <Image
              src="/images/founder.jpg"
              alt="Founder Chandni Di"
              fill
              className="object-cover"
            />
          </div>
          {/* Recognition badge */}
          <div className="mt-3 rounded-2xl bg-neutral-900 p-4 text-white">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-yellow-400">
              <Award className="h-4 w-4" /> Recognised for Her Work
            </div>
            <div className="mt-1 text-xs leading-relaxed text-neutral-300">
              Honoured by former Presidents of India: Shri Pranab Mukherjee and
              Shri Ram Nath Kovind
            </div>
          </div>
        </div>

        {/* Right: Story text */}
        <div className="space-y-6 lg:col-span-7">
          <div className="space-y-2">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
              Our Story
            </span>
            <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
              A Personal Journey That Became a Larger Purpose
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            <p>
              Chandni Di&apos;s connection with underserved children comes from
              personal experience.
            </p>
            <p>
              Growing up in a slum, she witnessed the hardships that children
              and families face when opportunities are limited. She understood
              that no child should have to accept difficult circumstances as the
              only possible future.
            </p>
            <p>
              Her journey began at a young age, working alongside her father in
              roadside performances. Following her father&apos;s untimely death,
              she and her mother faced the challenges of survival, including rag
              picking and selling flowers at traffic signals.
            </p>
            <p>
              These experiences shaped her understanding of hardship and
              strengthened her commitment to supporting children.
            </p>
            <p>
              By the age of 10, she had begun working for slum children. At 18,
              she established an initiative dedicated to children&apos;s rights
              and education.
            </p>
            <p>
              Since then, her work has focused on supporting children through
              their educational journey, from foundational learning to higher
              education and career preparation.
            </p>
          </div>

          <blockquote className="rounded-r-2xl border-l-4 border-brand-700 bg-brand-50 p-4 font-serif text-base italic text-neutral-800 sm:text-lg">
            &quot;No child deserves to have their future limited by the
            circumstances of their birth.&quot;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
