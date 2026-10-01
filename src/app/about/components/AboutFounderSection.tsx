"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

const presidents = [
  {
    name: "Shri Pranab Mukherjee",
    title: "Former President of India",
  },
  {
    name: "Shri Ram Nath Kovind",
    title: "Former President of India",
  },
];

export default function AboutFounderSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-8 rounded-3xl border border-neutral-200 bg-neutral-50 p-8 sm:p-12">
        {/* Heading */}
        <div className="space-y-2">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            Meet the Founder
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Turning Lived Experience Into a Commitment to Children&apos;s
            Futures
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Photo */}
          <div className="lg:col-span-4">
            <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl border-4 border-white shadow-md">
              <Image
                src="/images/founder.jpg"
                alt="Chandni Di — Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Story + Recognition */}
          <div className="space-y-5 lg:col-span-8">
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Chandni Di is the founder of the organisation and an advocate for
              education and opportunities for children from underserved
              communities.
            </p>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Her work is shaped by her own experiences growing up in a slum and
              by her belief that children deserve the opportunity to pursue a
              different future.
            </p>

            <div className="space-y-3 border-t border-neutral-200 pt-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
              <p>
                Chandni Di began working with children at a young age. By the
                age of 10, she had started contributing to efforts supporting
                slum children.
              </p>
              <p>
                At 18, she established an initiative dedicated to
                children&apos;s rights and education.
              </p>
              <p>
                Her work has focused on supporting children through educational
                access, school assistance, higher education, and the development
                of skills needed to navigate life beyond the classroom.
              </p>
              <p>
                Today, she continues to work towards creating educational
                opportunities for children from underserved communities and
                helping them build pathways towards greater independence.
              </p>
            </div>

            {/* Recognition */}
            <div className="border-t border-neutral-200 pt-5">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-500">
                Recognised for Her Work
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {presidents.map((pres, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded-xl border border-neutral-200 bg-white p-3"
                  >
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />
                    <div>
                      <div className="text-xs font-bold text-neutral-900">
                        {pres.name}
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        {pres.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2 text-center">
          <Link
            href="/get-involved"
            className="group inline-flex transform items-center gap-2 rounded-full bg-brand-700 px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg"
          >
            <span>Get Involved</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
