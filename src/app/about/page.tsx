import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, CheckCircle2, ShieldCheck, Target, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { FOUNDER_INFO, ROADMAP_GOALS } from '@/data/ngoData';

export const metadata = {
  title: 'About Us | Chandni Di NGO - Story, Founder & Vision',
  description:
    'Learn about Chandni Di NGO, founded by Chandni Di who grew up in a slum and was honoured by two former Presidents of India. Dedicated to education and holistic growth for slum children since 2016.',
};

export default function AboutPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="hero-radial-bg pt-12 pb-16 sm:py-20 border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
              About Chandni Di NGO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 font-serif leading-tight">
              Creating Opportunities. Supporting Dreams. <span className="text-brand-700">Building Futures.</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
              We work towards a future where children from slum and street communities can access quality education, build unshakeable confidence, and step boldly into mainstream society.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE FOUNDER'S LIVED EXPERIENCE */}
      <section id="founder" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full">
                <Image
                  src="/images/founder.jpg"
                  alt="Founder Chandni Di mentoring young students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-brand-dark text-white border-t border-neutral-800">
                <div className="text-xs font-bold text-gold-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Award className="w-4 h-4" /> Presidential Recognition
                </div>
                <div className="text-xs text-neutral-300 mt-1">
                  Honoured by former Presidents of India: Shri Pranab Mukherjee and Shri Ram Nath Kovind
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
                  Meet the Founder
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-serif">
                  Turning Lived Experience Into a Commitment to Children’s Futures
                </h2>
                <div className="text-sm font-semibold text-brand-700">
                  Chandni Di — Founder & Child Rights Advocate
                </div>
              </div>

              <blockquote className="font-serif italic text-lg text-neutral-800 bg-neutral-50 p-4 rounded-2xl border-l-4 border-brand-700">
                “Coming from a slum, I understand their lives—its dark space, and no kid deserves to go through this. This understanding became my inspiration to dedicate my life to their future.”
              </blockquote>

              <div className="space-y-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  Chandni Di’s advocacy began when she was just 10 years old, helping other children in her neighbourhood learn basic words. By the age of 18, she established an initiative dedicated to children’s rights and education.
                </p>
                <p>
                  Her work is shaped by her own lived reality: she knows that slum children face relentless hardships—hunger, economic fragility, lack of role models, and societal bias. Her mission goes far beyond handing out pencils; it is about providing unconditional psychological, academic, and financial shelter until each young adult is self-reliant.
                </p>
              </div>

              {/* Presidential Honours Details */}
              <div className="pt-2 border-t border-neutral-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  Recognised by Former Presidents of India:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FOUNDER_INFO.presidents.map((pres, i) => (
                    <div key={i} className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900">
                        <Award className="w-3.5 h-3.5 text-gold-600" />
                        <span>{pres.name}</span>
                      </div>
                      <div className="text-[11px] text-neutral-500">{pres.title}</div>
                      <p className="text-[11px] text-neutral-600 mt-1">{pres.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-soft hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 font-serif mb-3">Our Mission</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              To provide slum and street children with foundational education, after-school academic support, mental health counselling, and full higher education sponsorships—guiding them till they are ready to face the world as independent, empowered citizens.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-soft hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gold-50 text-gold-700 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 font-serif mb-3">Our Vision</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We envision an equitable society where a child’s place of birth does not determine the boundaries of their potential. A future where every slum child has an open path to universities, dignity, and purposeful careers.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-soft hover:shadow-card transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 font-serif mb-3">Our Core Values</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Unconditional commitment, long-term continuity, psychological empathy, complete financial transparency (80G/12A), and relentless pursuit of excellence in every student’s academic and human journey.
            </p>
          </div>

        </div>
      </section>

      {/* 4. OUR APPROACH: 5 PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-serif">
            Our 5 Pillars of Sustainable Transformation
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Why our model works: We don’t offer temporary relief; we create irreversible, multi-year pathways out of poverty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-2">
            <div className="text-xs font-bold text-brand-700 uppercase">Pillar 1</div>
            <h4 className="text-lg font-bold text-neutral-900">Access & Identification</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Door-to-door community field surveys in slum clusters to identify eager learners who have never attended school or dropped out.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-2">
            <div className="text-xs font-bold text-brand-700 uppercase">Pillar 2</div>
            <h4 className="text-lg font-bold text-neutral-900">Continuous Handholding</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Staying with the child from age 5 through Class 12 and university graduation, ensuring zero dropouts due to financial or domestic crises.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-2">
            <div className="text-xs font-bold text-brand-700 uppercase">Pillar 3</div>
            <h4 className="text-lg font-bold text-neutral-900">Holistic Mental Wellbeing</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Emotional and psychological counselling for students and regular workshops with parents to foster a supportive household environment.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-2">
            <div className="text-xs font-bold text-brand-700 uppercase">Pillar 4</div>
            <h4 className="text-lg font-bold text-neutral-900">100% Fee Sponsorships</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Sponsoring 50-100% of school tuition and 100% of university tuition fees, exam fees, textbooks, uniforms, and digital tools.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200 space-y-2">
            <div className="text-xs font-bold text-brand-700 uppercase">Pillar 5</div>
            <h4 className="text-lg font-bold text-neutral-900">Career & Placement Readiness</h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Corporate internships, soft skills, interview prep, and career counseling to bridge the gap between degree completion and employment.
            </p>
          </div>

          <div className="p-6 bg-brand-50 rounded-2xl border border-brand-200 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-bold text-brand-700 uppercase">Impact Result</div>
              <h4 className="text-lg font-bold text-brand-900">500+ Children Mainstreamed</h4>
              <p className="text-xs text-brand-800">
                Children who were once on streets are now confident school students and college undergraduates.
              </p>
            </div>
            <Link
              href="/programmes"
              className="mt-4 text-xs font-bold text-brand-700 hover:text-brand-900 flex items-center gap-1"
            >
              <span>Explore the programmes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. 3-YEAR DELHI-NCR ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-charcoal-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-950/80 px-3 py-1 rounded-full border border-brand-800">
              Expansion Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">
              Our 3-Year Strategic Growth Plan
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              With growing support from individuals and CSR partners, we are scaling our presence across the National Capital Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROADMAP_GOALS.map((goal, idx) => (
              <div key={idx} className="p-6 bg-neutral-800/80 rounded-2xl border border-neutral-700 space-y-2">
                <div className="text-4xl font-extrabold text-brand-500 font-serif">
                  {goal.target} {goal.unit}
                </div>
                <h4 className="text-base font-bold text-white">{goal.label}</h4>
                <p className="text-xs text-neutral-400">{goal.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-serif">
          Join Us in Writing the Next Chapter
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto">
          Every child we support is a life rescued from darkness. Your partnership enables us to open new learning centres and sponsor more scholars.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/get-involved#donate"
            className="px-8 py-3.5 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-md transition-all"
          >
            Sponsor a Scholar (80G Tax Deductible)
          </Link>
          <Link
            href="/get-involved#volunteer"
            className="px-8 py-3.5 rounded-full border border-neutral-300 hover:bg-neutral-100 text-neutral-800 font-semibold text-sm transition-all"
          >
            Volunteer With Us
          </Link>
        </div>
      </section>

    </div>
  );
}
