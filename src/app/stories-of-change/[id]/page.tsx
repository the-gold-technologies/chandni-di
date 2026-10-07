import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
  Heart,
  Quote,
  Sparkles,
  CheckCircle2,
  Calendar,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { STORIES_OF_CHANGE, Story } from "@/data/ngoData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return STORIES_OF_CHANGE.map((story) => ({
    id: story.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const story = STORIES_OF_CHANGE.find((s) => s.id === id);

  if (!story) {
    return {
      title: "Story Not Found | Chandni Di",
    };
  }

  return {
    title: `${story.name}'s Story of Change | Chandni Di`,
    description: story.excerpt || story.title,
  };
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { id } = await params;
  const story = STORIES_OF_CHANGE.find((s) => s.id === id);

  if (!story) {
    notFound();
  }

  // Related stories (other scholars)
  const relatedStories = STORIES_OF_CHANGE.filter(
    (s) => s.id !== story.id
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* ── Top Navigation & Breadcrumb ── */}
      <section className="border-b border-neutral-100 bg-[#FAF7F2]/80 pb-4 pt-28 sm:pb-6 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/stories-of-change"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 transition-colors hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4 text-brand-700 transition-transform group-hover:-translate-x-1" />
              <span>Back to All Stories</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 ring-1 ring-brand-200">
                <GraduationCap className="h-3.5 w-3.5" />
                <span>{story.category || "Scholar Journey"}</span>
              </span>
              {story.scholarSince && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-neutral-600 ring-1 ring-neutral-200">
                  <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                  <span>Scholar since {story.scholarSince}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Story Hero & Overview ── */}
      <section className="bg-gradient-to-b from-[#FAF7F2]/40 via-white to-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Narrative Introduction */}
            <div className="space-y-6 lg:col-span-7">
              {/* Category pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/80">
                <BookOpen className="h-3.5 w-3.5" />
                <span>{story.course}</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl font-extrabold leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                {story.title}
              </h1>

              {/* Subtitle */}
              <p className="font-sans text-base font-medium text-brand-800 sm:text-lg">
                {story.subtitle}
              </p>

              {/* Quote Highlight Box */}
              {story.quote && (
                <div className="shadow-xs relative rounded-2xl border-l-4 border-brand-700 bg-[#FAF7F2] p-5 sm:p-7">
                  <Quote className="absolute right-4 top-4 h-8 w-8 text-neutral-200" />
                  <p className="font-serif text-lg font-semibold italic leading-relaxed text-neutral-900 sm:text-xl">
                    {story.quote}
                  </p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-neutral-500">
                    — {story.name}&apos;s Words
                  </p>
                </div>
              )}

              {/* Scholar Quick Facts Card */}
              <div className="shadow-xs grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200/80 bg-white p-5 text-xs sm:grid-cols-3">
                <div>
                  <span className="font-bold uppercase tracking-wider text-neutral-400">
                    Institution
                  </span>
                  <p className="mt-1 font-semibold text-neutral-900 sm:text-sm">
                    {story.institution}
                  </p>
                </div>
                <div>
                  <span className="font-bold uppercase tracking-wider text-neutral-400">
                    Course / Stream
                  </span>
                  <p className="mt-1 font-semibold text-neutral-900 sm:text-sm">
                    {story.course}
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-bold uppercase tracking-wider text-neutral-400">
                    Sponsorship
                  </span>
                  <p className="mt-1 font-semibold text-emerald-700 sm:text-sm">
                    {story.fundingStatus || "100% Fully Supported"}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Portrait & Academic Feats */}
            <div className="space-y-6 lg:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border-4 border-white bg-neutral-200 shadow-2xl">
                <Image
                  src={story.image}
                  alt={`Portrait of ${story.name}`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-neutral-900 shadow-md backdrop-blur-md">
                    <GraduationCap className="h-3.5 w-3.5 text-brand-700" />
                    <span>Verified Scholar</span>
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h2 className="font-serif text-3xl font-bold">
                    {story.name}
                  </h2>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-200">
                    <MapPin className="h-3.5 w-3.5 text-brand-300" />
                    {story.institution}
                  </p>
                </div>
              </div>

              {/* Academic Feats Box */}
              <div className="shadow-xs rounded-2xl border border-neutral-200/90 bg-white p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Key Milestones &amp; Honors
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {story.academicFeats.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-brand-200/80 bg-brand-50/80 px-3 py-1.5 text-xs font-bold text-brand-900"
                    >
                      <Award className="h-3.5 w-3.5 text-brand-700" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Sponsor CTA */}
              <div className="rounded-2xl border border-brand-200 bg-brand-50/60 p-5 text-center">
                <p className="text-xs font-semibold text-neutral-700">
                  Help us sponsor the education of more children like{" "}
                  <strong>{story.name}</strong>.
                </p>
                <Link
                  href={`/get-involved#donate?student=${story.id}`}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md"
                >
                  <Heart className="h-4 w-4 fill-white text-white" />
                  <span>Sponsor a Student</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3-Stage Transformation Timeline ── */}
      {story.journeyStages && story.journeyStages.length > 0 && (
        <section className="border-y border-neutral-100 bg-[#FAF7F2]/40 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                The Journey of Resilience
              </span>
              <h2 className="mt-1.5 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl lg:text-4xl">
                From Hardship to Opportunity
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                How persistent intervention turned obstacles into an unstoppable
                journey of growth.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {story.journeyStages.map((stage, idx) => {
                const stageColor =
                  idx === 0
                    ? "border-amber-200 bg-amber-50/50 text-amber-800"
                    : idx === 1
                      ? "border-brand-200 bg-brand-50/50 text-brand-800"
                      : "border-emerald-200 bg-emerald-50/50 text-emerald-800";

                const pillColor =
                  idx === 0
                    ? "bg-amber-100 text-amber-800"
                    : idx === 1
                      ? "bg-brand-100 text-brand-800"
                      : "bg-emerald-100 text-emerald-800";

                return (
                  <div
                    key={idx}
                    className={`shadow-xs relative rounded-2xl border p-6 transition-all hover:shadow-md ${stageColor}`}
                  >
                    <span
                      className={`inline-block rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${pillColor}`}
                    >
                      {stage.stage}
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-bold text-neutral-900">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-700 sm:text-sm">
                      {stage.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── In-Depth Narrative & Future Dream ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Detailed Story Narrative */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              The Full Story
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Walking with {story.name}
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-neutral-700 sm:text-lg">
              {story.story.split("\n\n").map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Future Dream / Aspiration Card */}
          {story.dream && (
            <div className="mt-12 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/90 to-amber-100/40 p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-200/80 text-amber-900">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Aspiration &amp; Future Vision
                  </span>
                  <h3 className="font-serif text-xl font-bold text-neutral-900 sm:text-2xl">
                    Where {story.name} Is Headed
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-800 sm:text-base">
                    {story.dream}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Social Share & Back */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6">
            <Link
              href="/stories-of-change"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-800"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Stories</span>
            </Link>

            <Link
              href={`/get-involved#donate?student=${story.id}`}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-brand-800"
            >
              <Heart className="h-4 w-4 fill-white text-white" />
              <span>Support Scholars Like {story.name}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── More Inspiring Stories ── */}
      {relatedStories.length > 0 && (
        <section className="border-t border-neutral-100 bg-[#FAF7F2]/50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  More Journeys
                </span>
                <h2 className="mt-1 font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
                  Read More Stories of Transformation
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <span className="font-serif text-lg font-bold">
                        {related.name}
                      </span>
                      <p className="text-xs text-neutral-200">
                        {related.course}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <h3 className="line-clamp-2 font-serif text-base font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                      {related.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-600">
                      {related.excerpt || related.story}
                    </p>
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
      )}
    </main>
  );
}
