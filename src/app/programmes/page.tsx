import React from 'react';
import Link from 'next/link';
import { BookOpen, School, Briefcase, CheckCircle2, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { PROGRAMMES } from '@/data/ngoData';

export const metadata = {
  title: 'Our Programmes | Bridge, After-School & College to Career | Chandni Di NGO',
  description:
    'Discover our 3-pillar educational framework: Bridge Programme for foundational literacy, After-School tutoring with 50-100% fee grants, and 100% College to Career scholarships.',
};

export default function ProgrammesPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="hero-radial-bg pt-12 pb-16 sm:py-20 border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
              Educational Continuum
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 font-serif leading-tight">
              Supporting Children From Their First Lessons to Their <span className="text-brand-700">Future Careers.</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
              Our 3 programmes form an unbroken educational safety net—ensuring that poverty, family distress, or lack of guidance never forces an ambitious child to abandon their studies.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROGRAMMES OVERVIEW TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#bridge"
            className="px-6 py-3 rounded-full bg-white border border-neutral-300 text-neutral-800 font-bold text-sm hover:border-brand-700 hover:text-brand-700 shadow-sm transition-all"
          >
            01. Bridge Programme (5-12 Years)
          </a>
          <a
            href="#after-school"
            className="px-6 py-3 rounded-full bg-white border border-neutral-300 text-neutral-800 font-bold text-sm hover:border-brand-700 hover:text-brand-700 shadow-sm transition-all"
          >
            02. After-School Programme (Tutoring & Fees)
          </a>
          <a
            href="#college-to-career"
            className="px-6 py-3 rounded-full bg-white border border-neutral-300 text-neutral-800 font-bold text-sm hover:border-brand-700 hover:text-brand-700 shadow-sm transition-all"
          >
            03. College to Career (100% Scholarships)
          </a>
        </div>
      </section>

      {/* 3. PROGRAMME DEEP DIVES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* PROGRAMME 1: BRIDGE */}
        <div
          id="bridge"
          className="bg-white rounded-3xl border border-neutral-200 shadow-card p-8 sm:p-12 lg:p-16 scroll-mt-24 space-y-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-100 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-extrabold text-brand-700 font-serif">01</span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-50 text-brand-800 border border-brand-200">
                  Ages: 5 to 12 Years
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-serif">
                Bridge Programme: Foundational School Readiness
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                Many children in underserved slum communities have never held a book or have experienced prolonged school dropouts. We bridge this academic gap before formal admission.
              </p>
            </div>
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-semibold text-xs tracking-wider uppercase transition-all shrink-0 shadow-md"
            >
              <Heart className="w-4 h-4 fill-white" /> Sponsor a Bridge Child
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl font-bold text-neutral-900 font-serif">
                How the Bridge Programme Works:
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We conduct intensive baseline community surveys in slum clusters to identify eager learners. We work with one committed child from each family, ensuring that the parents pledge their dedication for a 10 to 15-year educational path.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                At our dedicated learning centres, children spend 1 to 2 years building core literacy, basic arithmetic, discipline, and hygienic habits. Once ready, we secure their admission into mainstream schools—either government Hindi-medium or private English-medium institutions.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>Door-to-door slum survey ensuring reaching the most neglected children.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>1 to 2 years accelerated remedial education at Chandni Di centre.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>Full admission documentation & enrollment into formal schools.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>Smooth transition into our After-School Programme for retention.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200 space-y-6">
              <h4 className="text-base font-bold text-neutral-900 font-serif">
                4-Stage Bridge Progression
              </h4>
              <div className="space-y-4">
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200">
                  <div className="text-xs font-bold text-brand-700">Stage 1: Community Survey</div>
                  <div className="text-xs text-neutral-600 mt-1">
                    Identifying out-of-school street and slum children through rigorous field assessments.
                  </div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200">
                  <div className="text-xs font-bold text-brand-700">Stage 2: Foundational Remedial Study</div>
                  <div className="text-xs text-neutral-600 mt-1">
                    Daily 4-hour modules covering reading, writing, numbers, and social skills.
                  </div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200">
                  <div className="text-xs font-bold text-brand-700">Stage 3: Formal School Admission</div>
                  <div className="text-xs text-neutral-600 mt-1">
                    Enrolling into government Hindi medium or private English medium partner schools.
                  </div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-neutral-200">
                  <div className="text-xs font-bold text-brand-700">Stage 4: Post-Admission Handholding</div>
                  <div className="text-xs text-neutral-600 mt-1">
                    Enrolled students immediately join our After-School Programme to ensure zero dropouts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRAMME 2: AFTER SCHOOL */}
        <div
          id="after-school"
          className="bg-white rounded-3xl border border-neutral-200 shadow-card p-8 sm:p-12 lg:p-16 scroll-mt-24 space-y-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-100 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-extrabold text-gold-600 font-serif">02</span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold-50 text-gold-800 border border-gold-200">
                  Classes 1 to 12
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-serif">
                After-School Programme: Academic Excellence & Fee Sponsorship
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                Enrolling in school is not enough. We provide daily tuition, psychological counselling, parent engagement, and sponsor 50% to 100% of school fees.
              </p>
            </div>
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold-600 hover:bg-gold-700 text-white font-semibold text-xs tracking-wider uppercase transition-all shrink-0 shadow-md"
            >
              <Heart className="w-4 h-4 fill-white" /> Sponsor School Tuition
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl font-bold text-neutral-900 font-serif">
                What We Provide in After-School:
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Slum homes often lack light, tables, or quiet for study. In our after-school centres, children receive dedicated subject coaching, complete homework with tutor assistance, and develop analytical confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <div className="font-bold text-sm text-neutral-900 mb-1">Academic Tutoring</div>
                  <div className="text-xs text-neutral-600">Daily support in Mathematics, Science, English, and Hindi.</div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <div className="font-bold text-sm text-neutral-900 mb-1">Fee Sponsorship</div>
                  <div className="text-xs text-neutral-600">We sponsor 50% to 100% of school fees for eligible children.</div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <div className="font-bold text-sm text-neutral-900 mb-1">Mental Counselling</div>
                  <div className="text-xs text-neutral-600">Psychological care for children and regular parent counseling.</div>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <div className="font-bold text-sm text-neutral-900 mb-1">Board Exam Prep</div>
                  <div className="text-xs text-neutral-600">Rigorous mock tests and guidance for Class 10 & 12 board exams.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-gold-50/50 rounded-2xl p-6 sm:p-8 border border-gold-200/80 space-y-4">
              <h4 className="text-base font-bold text-neutral-900 font-serif">
                Real Academic Outcomes:
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Our After-School scholars consistently outperform expectations. Our students have scored 80% to 86% in Class 10 and 12 CBSE exams, securing top ranks and prestigious admissions.
              </p>
              <div className="p-4 bg-white rounded-xl border border-gold-200 space-y-2">
                <div className="text-xs font-bold text-gold-800 uppercase">Case Highlight: Aarti</div>
                <div className="text-xs text-neutral-700 italic">
                  “Aarti, daughter of a tea stall owner, joined in 2019. Chandni Di supported her school fees and stationery. She scored 86% in Class 10 and 80% in Class 12, securing 1st position in her school.”
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRAMME 3: COLLEGE TO CAREER */}
        <div
          id="college-to-career"
          className="bg-white rounded-3xl border border-neutral-200 shadow-card p-8 sm:p-12 lg:p-16 scroll-mt-24 space-y-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-100 pb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-extrabold text-emerald-600 font-serif">03</span>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Undergraduates & Vocations
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-serif">
                College to Career Programme: 100% Scholarships & Internships
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 max-w-2xl">
                Connecting higher education with sustainable, dignified employment. We sponsor 100% of university degree fees and prepare students for corporate careers.
              </p>
            </div>
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase transition-all shrink-0 shadow-md"
            >
              <Heart className="w-4 h-4 fill-white" /> Sponsor College Scholar
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl font-bold text-neutral-900 font-serif">
                Bridging University into Employment:
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                When students finish high school, poverty often forces them into low-wage informal labour. Our College to Career Programme breaks this barrier by identifying suitable colleges based on their aptitude and track record, and sponsoring their entire fees.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% Full Fee Sponsorship:</strong> We cover all university and course tuition fees.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Curated College Search:</strong> Selecting reputable accredited institutions (e.g. Gautam Buddha University, Noida International University).</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Professional Skill Building:</strong> Communication, digital literacy, and interview prep.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Corporate Internships:</strong> Guiding scholars into structured corporate internships for guaranteed employability.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-emerald-50/50 rounded-2xl p-6 sm:p-8 border border-emerald-200/80 space-y-4">
              <h4 className="text-base font-bold text-neutral-900 font-serif">
                Active Higher Education Scholars:
              </h4>
              <div className="space-y-3">
                <div className="p-3.5 bg-white rounded-xl border border-emerald-200">
                  <div className="text-xs font-bold text-neutral-900">Palak — B.A. (Hons) Political Science</div>
                  <div className="text-xs text-neutral-600">Gautam Buddha University • Preparing for Civil Services (UPSC)</div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-emerald-200">
                  <div className="text-xs font-bold text-neutral-900">Aarti — B.Tech Biotechnology</div>
                  <div className="text-xs text-neutral-600">Noida International University • Future Biotech Researcher</div>
                </div>
              </div>
              <p className="text-xs text-neutral-500 pt-2">
                Future Roadmap: 1,000 students trained and formally employed across tech, commerce, science, and governance.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* 4. CTA BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-serif">
          Invest in a Child’s Educational Lifecycle
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto">
          Whether you support a 5-year-old taking their first steps in our Bridge Programme or a university undergraduate in our College to Career initiative, your gift is 50% tax exempt under Section 80G.
        </p>
        <Link
          href="/get-involved#donate"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-elevated transition-all"
        >
          <Heart className="w-5 h-5 fill-white" />
          <span>Sponsor an Educational Pillar</span>
        </Link>
      </section>

    </div>
  );
}
