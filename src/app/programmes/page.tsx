import React from "react";
import Link from "next/link";
import {
  BookOpen,
  School,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Heart,
  Sparkles,
} from "lucide-react";
import { PROGRAMMES } from "@/data/ngoData";

export const metadata = {
  title:
    "Our Programmes | Bridge, After-School & College to Career | Chandni Di NGO",
  description:
    "Discover our 3-pillar educational framework: Bridge Programme for foundational literacy, After-School tutoring with 50-100% fee grants, and 100% College to Career scholarships.",
};

export default function ProgrammesPage() {
  return (
    <div className="space-y-20 pb-20 sm:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="hero-radial-bg border-b border-neutral-200/60 pb-16 pt-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-700">
              Educational Continuum
            </span>
            <h1 className="font-serif text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Supporting Children From Their First Lessons to Their{" "}
              <span className="text-brand-700">Future Careers.</span>
            </h1>
            <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">
              Our 3 programmes form an unbroken educational safety net—ensuring
              that poverty, family distress, or lack of guidance never forces an
              ambitious child to abandon their studies.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMMES OVERVIEW TABS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#bridge"
            className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 shadow-sm transition-all hover:border-brand-700 hover:text-brand-700"
          >
            01. Bridge Programme (5-12 Years)
          </a>
          <a
            href="#after-school"
            className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 shadow-sm transition-all hover:border-brand-700 hover:text-brand-700"
          >
            02. After-School Programme (Tutoring & Fees)
          </a>
          <a
            href="#college-to-career"
            className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-800 shadow-sm transition-all hover:border-brand-700 hover:text-brand-700"
          >
            03. College to Career (100% Scholarships)
          </a>
        </div>
      </section>

      {/* 3. PROGRAMME DEEP DIVES */}
      <section className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
        {/* PROGRAMME 1: BRIDGE */}
        <div
          id="bridge"
          className="scroll-mt-24 space-y-10 rounded-3xl border border-neutral-200 bg-white p-8 shadow-card sm:p-12 lg:p-16"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-neutral-100 pb-8 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl font-extrabold text-brand-700">
                  01
                </span>
                <span className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-800">
                  Ages: 5 to 12 Years
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-neutral-900 sm:text-4xl">
                Bridge Programme: Foundational School Readiness
              </h2>
              <p className="max-w-2xl text-sm text-neutral-600 sm:text-base">
                Many children in underserved slum communities have never held a
                book or have experienced prolonged school dropouts. We bridge
                this academic gap before formal admission.
              </p>
            </div>
            <Link
              href="/get-involved#donate"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-brand-800"
            >
              <Heart className="h-4 w-4 fill-white" /> Sponsor a Bridge Child
            </Link>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                How the Bridge Programme Works:
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                We conduct intensive baseline community surveys in slum clusters
                to identify eager learners. We work with one committed child
                from each family, ensuring that the parents pledge their
                dedication for a 10 to 15-year educational path.
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">
                At our dedicated learning centres, children spend 1 to 2 years
                building core literacy, basic arithmetic, discipline, and
                hygienic habits. Once ready, we secure their admission into
                mainstream schools—either government Hindi-medium or private
                English-medium institutions.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>
                    Door-to-door slum survey ensuring reaching the most
                    neglected children.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>
                    1 to 2 years accelerated remedial education at Chandni Di
                    centre.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>
                    Full admission documentation & enrollment into formal
                    schools.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span>
                    Smooth transition into our After-School Programme for
                    retention.
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 lg:col-span-6">
              <h4 className="font-serif text-base font-bold text-neutral-900">
                4-Stage Bridge Progression
              </h4>
              <div className="space-y-4">
                <div className="rounded-xl border border-neutral-200 bg-white p-3.5">
                  <div className="text-xs font-bold text-brand-700">
                    Stage 1: Community Survey
                  </div>
                  <div className="mt-1 text-xs text-neutral-600">
                    Identifying out-of-school street and slum children through
                    rigorous field assessments.
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-3.5">
                  <div className="text-xs font-bold text-brand-700">
                    Stage 2: Foundational Remedial Study
                  </div>
                  <div className="mt-1 text-xs text-neutral-600">
                    Daily 4-hour modules covering reading, writing, numbers, and
                    social skills.
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-3.5">
                  <div className="text-xs font-bold text-brand-700">
                    Stage 3: Formal School Admission
                  </div>
                  <div className="mt-1 text-xs text-neutral-600">
                    Enrolling into government Hindi medium or private English
                    medium partner schools.
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-3.5">
                  <div className="text-xs font-bold text-brand-700">
                    Stage 4: Post-Admission Handholding
                  </div>
                  <div className="mt-1 text-xs text-neutral-600">
                    Enrolled students immediately join our After-School
                    Programme to ensure zero dropouts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRAMME 2: AFTER SCHOOL */}
        <div
          id="after-school"
          className="scroll-mt-24 space-y-10 rounded-3xl border border-neutral-200 bg-white p-8 shadow-card sm:p-12 lg:p-16"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-neutral-100 pb-8 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl font-extrabold text-gold-600">
                  02
                </span>
                <span className="text-gold-800 border-gold-200 rounded-full border bg-gold-50 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Classes 1 to 12
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-neutral-900 sm:text-4xl">
                After-School Programme: Academic Excellence & Fee Sponsorship
              </h2>
              <p className="max-w-2xl text-sm text-neutral-600 sm:text-base">
                Enrolling in school is not enough. We provide daily tuition,
                psychological counselling, parent engagement, and sponsor 50% to
                100% of school fees.
              </p>
            </div>
            <Link
              href="/get-involved#donate"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-gold-700"
            >
              <Heart className="h-4 w-4 fill-white" /> Sponsor School Tuition
            </Link>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                What We Provide in After-School:
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Slum homes often lack light, tables, or quiet for study. In our
                after-school centres, children receive dedicated subject
                coaching, complete homework with tutor assistance, and develop
                analytical confidence.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <div className="mb-1 text-sm font-bold text-neutral-900">
                    Academic Tutoring
                  </div>
                  <div className="text-xs text-neutral-600">
                    Daily support in Mathematics, Science, English, and Hindi.
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <div className="mb-1 text-sm font-bold text-neutral-900">
                    Fee Sponsorship
                  </div>
                  <div className="text-xs text-neutral-600">
                    We sponsor 50% to 100% of school fees for eligible children.
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <div className="mb-1 text-sm font-bold text-neutral-900">
                    Mental Counselling
                  </div>
                  <div className="text-xs text-neutral-600">
                    Psychological care for children and regular parent
                    counseling.
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <div className="mb-1 text-sm font-bold text-neutral-900">
                    Board Exam Prep
                  </div>
                  <div className="text-xs text-neutral-600">
                    Rigorous mock tests and guidance for Class 10 & 12 board
                    exams.
                  </div>
                </div>
              </div>
            </div>

            <div className="border-gold-200/80 space-y-4 rounded-2xl border bg-gold-50/50 p-6 sm:p-8 lg:col-span-6">
              <h4 className="font-serif text-base font-bold text-neutral-900">
                Real Academic Outcomes:
              </h4>
              <p className="text-xs leading-relaxed text-neutral-700">
                Our After-School scholars consistently outperform expectations.
                Our students have scored 80% to 86% in Class 10 and 12 CBSE
                exams, securing top ranks and prestigious admissions.
              </p>
              <div className="border-gold-200 space-y-2 rounded-xl border bg-white p-4">
                <div className="text-gold-800 text-xs font-bold uppercase">
                  Case Highlight: Aarti
                </div>
                <div className="text-xs italic text-neutral-700">
                  “Aarti, daughter of a tea stall owner, joined in 2019. Chandni
                  Di supported her school fees and stationery. She scored 86% in
                  Class 10 and 80% in Class 12, securing 1st position in her
                  school.”
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRAMME 3: COLLEGE TO CAREER */}
        <div
          id="college-to-career"
          className="scroll-mt-24 space-y-10 rounded-3xl border border-neutral-200 bg-white p-8 shadow-card sm:p-12 lg:p-16"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-neutral-100 pb-8 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl font-extrabold text-emerald-600">
                  03
                </span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Undergraduates & Vocations
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-neutral-900 sm:text-4xl">
                College to Career Programme: 100% Scholarships & Internships
              </h2>
              <p className="max-w-2xl text-sm text-neutral-600 sm:text-base">
                Connecting higher education with sustainable, dignified
                employment. We sponsor 100% of university degree fees and
                prepare students for corporate careers.
              </p>
            </div>
            <Link
              href="/get-involved#donate"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-emerald-700"
            >
              <Heart className="h-4 w-4 fill-white" /> Sponsor College Scholar
            </Link>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <h3 className="font-serif text-xl font-bold text-neutral-900">
                Bridging University into Employment:
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                When students finish high school, poverty often forces them into
                low-wage informal labour. Our College to Career Programme breaks
                this barrier by identifying suitable colleges based on their
                aptitude and track record, and sponsoring their entire fees.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>
                    <strong>100% Full Fee Sponsorship:</strong> We cover all
                    university and course tuition fees.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Curated College Search:</strong> Selecting reputable
                    accredited institutions (e.g. Gautam Buddha University,
                    Noida International University).
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Professional Skill Building:</strong> Communication,
                    digital literacy, and interview prep.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>
                    <strong>Corporate Internships:</strong> Guiding scholars
                    into structured corporate internships for guaranteed
                    employability.
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-6 sm:p-8 lg:col-span-6">
              <h4 className="font-serif text-base font-bold text-neutral-900">
                Active Higher Education Scholars:
              </h4>
              <div className="space-y-3">
                <div className="rounded-xl border border-emerald-200 bg-white p-3.5">
                  <div className="text-xs font-bold text-neutral-900">
                    Palak — B.A. (Hons) Political Science
                  </div>
                  <div className="text-xs text-neutral-600">
                    Gautam Buddha University • Preparing for Civil Services
                    (UPSC)
                  </div>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-white p-3.5">
                  <div className="text-xs font-bold text-neutral-900">
                    Aarti — B.Tech Biotechnology
                  </div>
                  <div className="text-xs text-neutral-600">
                    Noida International University • Future Biotech Researcher
                  </div>
                </div>
              </div>
              <p className="pt-2 text-xs text-neutral-500">
                Future Roadmap: 1,000 students trained and formally employed
                across tech, commerce, science, and governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="mx-auto max-w-5xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-neutral-900 sm:text-4xl">
          Invest in a Child’s Educational Lifecycle
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-neutral-600 sm:text-base">
          Whether you support a 5-year-old taking their first steps in our
          Bridge Programme or a university undergraduate in our College to
          Career initiative, your gift is 50% tax exempt under Section 80G.
        </p>
        <Link
          href="/get-involved#donate"
          className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-8 py-4 text-sm font-bold text-white shadow-elevated transition-all hover:bg-brand-800"
        >
          <Heart className="h-5 w-5 fill-white" />
          <span>Sponsor an Educational Pillar</span>
        </Link>
      </section>
    </div>
  );
}
