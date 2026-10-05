import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  GraduationCap,
  HeartHandshake,
  MapPin,
  CheckCircle2,
  Quote,
  ArrowRight,
  Heart,
  TrendingUp,
  Award,
} from "lucide-react";
import ImpactCounters from "@/components/ImpactCounters";
import { STORIES_OF_CHANGE, ROADMAP_GOALS } from "@/data/ngoData";

export const metadata = {
  title: "Our Impact & Stories of Change | Chandni Di NGO",
  description:
    "Real measurable outcomes: 500+ children mainstreamed, 370 active students, 136 fully adopted scholars. Read inspiring journeys of Palak, Aarti, and our Delhi-NCR roadmap.",
};

export default function ImpactPage() {
  return (
    <div className="space-y-20 pb-20 sm:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="hero-radial-bg border-b border-neutral-200/60 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
              Evidence-Based Social Impact
            </span>
            <h1 className="font-serif text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Measuring Our Work Through the{" "}
              <span className="text-brand-700">Journeys We Help Build.</span>
            </h1>
            <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">
              Our impact is reflected not only in numbers, but in every child
              who transitions from street vulnerability to classrooms, board
              exam toppers, university scholars, and future civil servants.
            </p>
          </div>
        </div>
      </section>

      {/* 2. IMPACT STATS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl space-y-2 text-center">
          <h2 className="font-serif text-3xl font-bold text-neutral-900">
            Impact at a Glance
          </h2>
          <p className="text-sm text-neutral-600">
            Rigorous grassroots accounting of every scholar enrolled and
            supported.
          </p>
        </div>

        <ImpactCounters />
      </section>

      {/* 3. HOW WE MEASURE PROGRESS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 rounded-3xl border border-neutral-200 bg-white p-8 shadow-card sm:p-12 lg:p-14">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700">
              Accountability Framework
            </span>
            <h3 className="font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
              How We Measure Progress
            </h3>
            <p className="text-sm text-neutral-600">
              Our multidisciplinary tracking focuses on developmental benchmarks
              at every step of a child’s life:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="text-sm font-bold text-brand-700">
                01. Formal Entry
              </div>
              <h4 className="text-base font-bold text-neutral-900">
                Mainstream Enrolment
              </h4>
              <p className="text-xs text-neutral-600">
                Tracking admission rates into government and private partner
                schools following 1-2 years of Bridge remediation.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="text-sm font-bold text-brand-700">
                02. Retention & Attendance
              </div>
              <h4 className="text-base font-bold text-neutral-900">
                Zero Dropout Tracking
              </h4>
              <p className="text-xs text-neutral-600">
                Daily attendance logs and family check-ins to prevent dropouts
                resulting from economic or domestic stress.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="text-sm font-bold text-brand-700">
                03. Academic Growth
              </div>
              <h4 className="text-base font-bold text-neutral-900">
                Board Exam Performance
              </h4>
              <p className="text-xs text-neutral-600">
                Documenting class test results and CBSE 10th and 12th board
                scores (with our scholars scoring 80% to 86%).
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="text-sm font-bold text-brand-700">
                04. Higher Education
              </div>
              <h4 className="text-base font-bold text-neutral-900">
                University Admissions
              </h4>
              <p className="text-xs text-neutral-600">
                Admissions into accredited degree programs in engineering,
                biotechnology, law, and humanities.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="text-sm font-bold text-brand-700">
                05. Skill Development
              </div>
              <h4 className="text-base font-bold text-neutral-900">
                Digital & Life Capabilities
              </h4>
              <p className="text-xs text-neutral-600">
                Fluency in English communication, computer software, mental
                resilience, and critical thinking.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="text-sm font-bold text-brand-700">
                06. Career Placement
              </div>
              <h4 className="text-base font-bold text-neutral-900">
                Internships to Employment
              </h4>
              <p className="text-xs text-neutral-600">
                Transition from university degrees into corporate internships
                and long-term salaried positions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STORIES OF CHANGE SECTION */}
      <section
        id="stories"
        className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
            In-Depth Beneficiary Profiles
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Real Lives. Unstoppable Journeys.
          </h2>
          <p className="text-sm text-neutral-600 sm:text-base">
            These are not hypothetical statistics. These are living testaments
            to what sustained, loving educational support can achieve.
          </p>
        </div>

        <div className="space-y-12">
          {STORIES_OF_CHANGE.map((story, idx) => (
            <div
              key={story.id}
              className={`grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-card lg:grid-cols-12 ${
                idx % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div
                className={`relative lg:col-span-5 ${idx % 2 === 1 ? "lg:col-start-8" : ""}`}
              >
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[4/4]">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-neutral-900 shadow backdrop-blur-sm">
                  🎓 {story.course}
                </div>
              </div>

              <div
                className={`space-y-6 p-6 sm:p-10 lg:col-span-7 lg:p-12 ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {story.academicFeats.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-neutral-900 sm:text-3xl">
                    {story.name}: {story.title}
                  </h3>
                  <div className="text-sm font-semibold text-brand-700">
                    {story.institution}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {story.story}
                </p>

                <blockquote className="rounded-2xl border-l-4 border-brand-700 bg-brand-50/80 p-4 font-serif text-sm italic text-brand-900 sm:text-base">
                  {story.quote}
                </blockquote>

                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-xs text-neutral-600">
                  🎯{" "}
                  <strong className="text-neutral-800">Lifelong Goal:</strong>{" "}
                  {story.dream}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 3-YEAR EXPANSION ROADMAP */}
      <section id="roadmap" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-charcoal-900 p-8 text-white sm:p-12 lg:p-16">
          <div className="mb-12 max-w-3xl space-y-4">
            <span className="bg-brand-950/80 rounded-full border border-brand-800 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-400">
              Looking Forward: 2026 - 2029
            </span>
            <h2 className="font-serif text-3xl font-extrabold sm:text-4xl">
              Our 3-Year Future Milestones
            </h2>
            <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
              Our vision is to multiply our reach, support more children through
              education, and build strong corporate corridors into formal
              employment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {ROADMAP_GOALS.map((goal, idx) => (
              <div
                key={idx}
                className="space-y-3 rounded-2xl border border-neutral-700 bg-neutral-800/80 p-6"
              >
                <div className="font-serif text-4xl font-extrabold text-brand-500 sm:text-5xl">
                  {goal.target}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
                  {goal.unit}
                </div>
                <h4 className="text-lg font-bold text-white">{goal.label}</h4>
                <p className="text-xs leading-relaxed text-neutral-400">
                  {goal.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="mx-auto max-w-5xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-neutral-900 sm:text-4xl">
          Help Us Write the Next Success Story
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-neutral-600 sm:text-base">
          Every contribution directly underwrites a child’s school fees,
          uniform, tuition, and mental healthcare.
        </p>
        <Link
          href="/get-involved#donate"
          className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-8 py-4 text-sm font-bold text-white shadow-elevated transition-all hover:bg-brand-800"
        >
          <Heart className="h-5 w-5 fill-white" />
          <span>Sponsor a Child (80G Tax Deductible)</span>
        </Link>
      </section>
    </div>
  );
}
