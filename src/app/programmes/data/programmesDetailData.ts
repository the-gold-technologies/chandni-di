import {
  Users,
  BookOpen,
  School,
  CheckCircle2,
  Smile,
  Sparkles,
  Receipt,
  Compass,
  GraduationCap,
  Briefcase,
  Target,
  ShieldCheck,
  Building2,
  LucideIcon,
} from "lucide-react";

export interface QuickFact {
  label: string;
  value: string;
  isHighlight?: boolean;
}

export interface ProgrammeHeroData {
  title: string;
  italicTitle: string;
  stageBadge: string;
  ageBadge: string;
  breadcrumbLabel: string;
  description: string;
  quickFacts: QuickFact[];
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  image: string;
  imageAlt: string;
  floatingBadge: string;
  captionTitle: string;
  captionText: string;
}

export interface HighlightCard {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

export interface ProgrammeOverviewData {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlights: HighlightCard[];
}

export interface FrameworkCard {
  num: string;
  progress: string;
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon;
  actionItems: string[];
  image?: string;
  cardBg?: string;
  borderColor?: string;
  badgeColor?: string;
  pinColor?: string;
}

export interface ProgrammeFrameworkData {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  stepPrefix: string; // e.g. "Step" or "Pillar"
  cards: FrameworkCard[];
}

export interface ProgrammeGoalData {
  eyebrow?: string;
  heading?: string;
  quote: string;
  ctaText: string;
  ctaHref: string;
  badgeText?: string;
  image?: string;
  imageAlt?: string;
}

export interface ProgrammeCalloutData {
  badge: string;
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export interface ProgrammeDetail {
  id: "bridge-programme" | "after-school" | "college-to-career";
  metaTitle: string;
  metaDescription: string;
  hero: ProgrammeHeroData;
  overview: ProgrammeOverviewData;
  framework: ProgrammeFrameworkData;
  goal: ProgrammeGoalData;
  callout?: ProgrammeCalloutData;
}

export const programmesDetailData: Record<string, ProgrammeDetail> = {
  "bridge-programme": {
    id: "bridge-programme",
    metaTitle: "Bridge Programme | Foundational Learning & School Admission | Chandni Di NGO",
    metaDescription:
      "Helping children from underserved communities take their first step towards formal education. Age group 5–12 years, foundational literacy, and mainstream school admission.",
    hero: {
      title: "Helping Children Take Their First Step Towards",
      italicTitle: "Formal Education.",
      stageBadge: "Stage 01 • Foundational",
      ageBadge: "Age Group: 5–12 Years",
      breadcrumbLabel: "Bridge Programme",
      description:
        "Many children from underserved communities may not have had the opportunity to begin formal education or require structured academic preparation before entering a classroom. The Bridge Programme bridges this divide.",
      quickFacts: [
        { label: "Target Age", value: "5 to 12 Years" },
        { label: "Programme Fee", value: "100% Free", isHighlight: true },
        { label: "Key Objective", value: "School Admission" },
        { label: "School Medium", value: "Govt & Private" },
      ],
      primaryCtaText: "Support a Child's Education",
      primaryCtaHref: "/get-involved#donate",
      secondaryCtaText: "Explore Operational Steps",
      secondaryCtaHref: "#how-it-works",
      image: "/images/bridge_programme.jpg",
      imageAlt: "Teacher helping young children learn in a community classroom",
      floatingBadge: "100% Free Programme",
      captionTitle: "Community Learning Centers",
      captionText: "Building foundational confidence, letters, numbers, and basic classroom habits.",
    },
    overview: {
      eyebrow: "The Ground Reality",
      title: "Why Foundational Preparation is Essential",
      paragraphs: [
        "Many children living in underserved urban settlements have never stepped inside a formal school, or have been forced out due to family financial instability or migration. For an 8 or 10-year-old who has never held a pencil, entering a mainstream school classroom directly can be overwhelming and discouraging.",
        "The Bridge Programme identifies children who want to study and supports them in developing the foundational knowledge, emotional resilience, and learning habits required for formal education.",
        "By the time children complete the Bridge phase, they have achieved grade-appropriate learning levels, gained self-confidence, and secured admission into mainstream schools.",
      ],
      highlights: [
        {
          icon: Target,
          iconBg: "bg-brand-100",
          iconColor: "text-brand-700",
          title: "Dual School Admission",
          description:
            "We prepare children for admission into mainstream schools, including government Hindi-medium and private English-medium schools, depending on the child's aptitude and circumstances.",
        },
        {
          icon: ShieldCheck,
          iconBg: "bg-amber-100",
          iconColor: "text-amber-800",
          title: "Zero Drop-out Guarantee",
          description:
            "School admission is only the start. Through our After-School Programme, children continue to receive tuition and counselling to guarantee long-term retention.",
        },
      ],
    },
    framework: {
      id: "how-it-works",
      eyebrow: "Operational Pathway",
      title: "How the Programme Works",
      subtitle:
        "A proven 4-stage operational framework moving children from out-of-school identification to joyful, lifelong formal education.",
      stepPrefix: "Step",
      cards: [
        {
          num: "01",
          progress: "25%",
          badge: "Outreach & Survey",
          title: "Community Identification",
          description:
            "We actively identify children and families in underserved communities who wish to pursue education but lack foundational access or prior schooling opportunity.",
          icon: Users,
          image: "/images/step1_identification.jpg",
          cardBg: "bg-[#FAF6ED]",
          borderColor: "border-[#EFE5D3]",
          badgeColor: "border-amber-400 text-amber-700",
          pinColor: "bg-amber-500",
          actionItems: [
            "Door-to-door community outreach",
            "Identifying out-of-school children",
            "Parental trust & consent building",
          ],
        },
        {
          num: "02",
          progress: "50%",
          badge: "Foundational Literacy",
          title: "Academic Preparation",
          description:
            "Children receive structured learning support through our programme, helping them build foundational reading, writing, numeracy, and daily study habits.",
          icon: BookOpen,
          image: "/images/step2_preparation.jpg",
          cardBg: "bg-[#F2F7F2]",
          borderColor: "border-[#DEEADE]",
          badgeColor: "border-emerald-500 text-emerald-700",
          pinColor: "bg-emerald-600",
          actionItems: [
            "Foundational Hindi, English & numeracy",
            "Classroom discipline & pencil grip",
            "Social & emotional confidence",
          ],
        },
        {
          num: "03",
          progress: "75%",
          badge: "Mainstream Admission",
          title: "School Readiness & Admission",
          description:
            "The programme prepares children for formal admission into mainstream schools—including government Hindi-medium and private English-medium schools, depending on their needs.",
          icon: School,
          image: "/images/step3_admission.jpg",
          cardBg: "bg-[#FDF4F2]",
          borderColor: "border-[#F7E1DE]",
          badgeColor: "border-rose-500 text-rose-700",
          pinColor: "bg-rose-500",
          actionItems: [
            "Mainstream school admissions",
            "Age-appropriate grade placement",
            "Uniforms, stationery & documentation",
          ],
        },
        {
          num: "04",
          progress: "100%",
          badge: "Continuity & Retention",
          title: "Continued Retention Support",
          description:
            "After mainstream admission, children continue to receive academic assistance, tuition, and counselling through our After-School Programme to ensure zero dropouts.",
          icon: CheckCircle2,
          image: "/images/after_school_programme.jpg",
          cardBg: "bg-[#F2F5FA]",
          borderColor: "border-[#DEE5F2]",
          badgeColor: "border-blue-500 text-blue-700",
          pinColor: "bg-blue-600",
          actionItems: [
            "Transition to After-School centers",
            "Daily subject coaching & tuition",
            "Zero-dropout retention monitoring",
          ],
        },
      ],
    },
    goal: {
      eyebrow: "TAKE THE NEXT STEP",
      heading: "Ready to Help a Child Take Their First Step?",
      badgeText: "Official Programme Goal",
      quote:
        "To help children transition into formal education and begin their academic journey with greater confidence and preparation.",
      ctaText: "Sponsor a Child's Education",
      ctaHref: "/get-involved#donate",
      image: "/images/cta_learning_children.jpg",
      imageAlt: "Two happy Indian school children sitting at a study desk drawing with pencils",
    },
  },

  "after-school": {
    id: "after-school",
    metaTitle: "After-School Programme (Classes 1–12) | Tuition & Fee Grants | Chandni Di NGO",
    metaDescription:
      "Daily tuition, mental health counselling, and 50–100% school fee sponsorships to keep underprivileged children in school and thriving.",
    hero: {
      title: "Helping Children Continue Learning, Growing, and",
      italicTitle: "Believing in Themselves.",
      stageBadge: "Stage 02 • Continuity & Support",
      ageBadge: "Classes 1 to 12",
      breadcrumbLabel: "After-School Programme",
      description:
        "Entering school is only one part of a child's educational journey. Continued support helps children strengthen their learning, manage personal challenges, and develop the confidence to progress year after year.",
      quickFacts: [
        { label: "Target Classes", value: "Classes 1 to 12" },
        { label: "Fee Grants", value: "50% to 100%", isHighlight: true },
        { label: "Daily Support", value: "Tuition & Mentoring" },
        { label: "Key Outcome", value: "Zero Dropouts" },
      ],
      primaryCtaText: "Help a Child Continue School",
      primaryCtaHref: "/get-involved#donate",
      secondaryCtaText: "Explore What We Provide",
      secondaryCtaHref: "#what-we-provide",
      image: "/images/after_school_programme.jpg",
      imageAlt: "Indian school students gathered around a study desk with their mentor in an after-school coaching library",
      floatingBadge: "50%–100% Fee Grant",
      captionTitle: "After-School Centers",
      captionText: "Daily subject coaching, emotional counselling & holistic personality growth.",
    },
    overview: {
      eyebrow: "The Journey Beyond Enrollment",
      title: "Why Sustained After-School Support is Crucial",
      paragraphs: [
        "Enrolling a child in school is only the beginning. For children growing up in vulnerable communities, continuing education is an uphill battle. Crowded living quarters, lack of dedicated study spaces, and first-generation learner status mean there is rarely academic guidance available at home.",
        "Without intervention, minor learning gaps quickly compound into severe academic distress, leading to demotivation, absenteeism, and eventually dropouts.",
        "The After-School Programme steps in as a dependable second home. Every single day after school hours, our centers welcome children to clarify concepts, complete homework with trained tutors, and discover the joy of steady academic progress.",
      ],
      highlights: [
        {
          icon: Receipt,
          iconBg: "bg-amber-100",
          iconColor: "text-amber-800",
          title: "50%–100% School Fee Sponsorship",
          description:
            "We provide partial to full fee scholarships for eligible children, ensuring that sudden financial shocks, job losses, or medical emergencies never force a child out of the classroom.",
        },
        {
          icon: Smile,
          iconBg: "bg-brand-100",
          iconColor: "text-brand-700",
          title: "Mental Health & Parent Counselling",
          description:
            "Education cannot flourish without emotional stability. We offer empathetic counselling for children alongside regular dialogue with parents to build a nurturing home learning atmosphere.",
        },
      ],
    },
    framework: {
      id: "what-we-provide",
      eyebrow: "Core Support Framework",
      title: "What We Provide",
      subtitle:
        "Four comprehensive pillars designed to ensure children stay enrolled, excel in their studies, and develop strong character.",
      stepPrefix: "Pillar",
      cards: [
        {
          num: "01",
          progress: "25%",
          badge: "Tuition & Coaching",
          title: "Academic Support",
          description:
            "Daily subject-based tuition and homework guidance, reinforcing classroom lessons and strengthening foundational learning.",
          icon: BookOpen,
          image: "/images/after_school_programme.jpg",
          cardBg: "bg-[#FAF6ED]",
          borderColor: "border-[#EFE5D3]",
          badgeColor: "border-amber-400 text-amber-700",
          pinColor: "bg-amber-500",
          actionItems: [
            "Daily tuition and subject-based assistance",
            "Strengthening foundational concepts & pace",
            "Dedicated homework supervision & exam prep",
          ],
        },
        {
          num: "02",
          progress: "50%",
          badge: "Mental & Emotional",
          title: "Counselling & Well-Being",
          description:
            "Providing safe mental health guidance, emotional outlets, and active counselling to help children overcome trauma and stress.",
          icon: Smile,
          image: "/images/hero_hug.jpg",
          cardBg: "bg-[#F2F7F2]",
          borderColor: "border-[#DEEADE]",
          badgeColor: "border-emerald-500 text-emerald-700",
          pinColor: "bg-emerald-600",
          actionItems: [
            "Safe emotional outlet and mental counselling",
            "Individual guidance for distress & trauma",
            "Engagement with parents and guardians",
          ],
        },
        {
          num: "03",
          progress: "75%",
          badge: "Holistic Growth",
          title: "Skill & Personality",
          description:
            "Extracurricular exposure, spoken English, arts, sports, and leadership activities that nurture self-belief and curiosity.",
          icon: Sparkles,
          image: "/images/hero_classroom_banner.jpg",
          cardBg: "bg-[#FDF4F2]",
          borderColor: "border-[#F7E1DE]",
          badgeColor: "border-rose-500 text-rose-700",
          pinColor: "bg-rose-500",
          actionItems: [
            "Spoken English, art & creative expression",
            "Interactive workshops for self-expression",
            "Sports, leadership & team collaboration",
          ],
        },
        {
          num: "04",
          progress: "100%",
          badge: "50%–100% Fee Grant",
          title: "Fee Scholarships",
          description:
            "Direct sponsorship of 50% to 100% of school fees for eligible children, ensuring poverty never interrupts schooling.",
          icon: Receipt,
          image: "/images/cta_learning_children.jpg",
          cardBg: "bg-[#F2F5FA]",
          borderColor: "border-[#DEE5F2]",
          badgeColor: "border-blue-500 text-blue-700",
          pinColor: "bg-blue-600",
          actionItems: [
            "50% to 100% direct school fee sponsorship",
            "Coverage for books, stationery & uniforms",
            "Emergency aid during family financial shocks",
          ],
        },
      ],
    },
    goal: {
      eyebrow: "TAKE THE NEXT STEP",
      heading: "Ready to Help a Child Continue Learning?",
      badgeText: "Official Programme Goal",
      quote:
        "To help children remain engaged in education, strengthen their capabilities, and develop the confidence needed to move forward.",
      ctaText: "Sponsor a Child's School Fees",
      ctaHref: "/get-involved#donate",
      image: "/images/cta_learning_children.jpg",
      imageAlt: "Two happy Indian school children sitting at a study desk drawing with pencils",
    },
  },

  "college-to-career": {
    id: "college-to-career",
    metaTitle: "College to Career Programme | 100% Scholarships & Internships | Chandni Di NGO",
    metaDescription:
      "Empowering youth through college guidance, 100% higher education scholarships, skill development, and corporate internship linkages.",
    hero: {
      title: "Connecting Higher Education With",
      italicTitle: "Future Opportunities.",
      stageBadge: "Stage 03 • Higher Education & Careers",
      ageBadge: "Undergraduates & Graduates",
      breadcrumbLabel: "College to Career",
      description:
        "Education should open doors to real opportunities beyond graduation. The College to Career Programme supports first-generation youth as they transition from school to college and prepare for dignified professional careers.",
      quickFacts: [
        { label: "Target Group", value: "Undergrads & Youth" },
        { label: "Scholarship", value: "Up to 100% Fees", isHighlight: true },
        { label: "Core Focus", value: "Degrees & Skills" },
        { label: "Key Outcome", value: "Career Placement" },
      ],
      primaryCtaText: "Support a College Student",
      primaryCtaHref: "/get-involved#donate",
      secondaryCtaText: "Explore What We Do",
      secondaryCtaHref: "#what-we-do",
      image: "/images/college_to_career.jpg",
      imageAlt: "Confident Indian college students and fresh graduates on university campus with laptops and books",
      floatingBadge: "100% Scholarships",
      captionTitle: "University & Professional Life",
      captionText: "Degree guidance, digital skill training & corporate internship linkages.",
    },
    overview: {
      eyebrow: "Bridging The Higher Education Gap",
      title: "Opening Doors Beyond High School Graduation",
      paragraphs: [
        "Finishing Class 12 is a monumental milestone for children from slum and underserved communities. Yet, it is precisely at this juncture that most students are forced to discontinue education due to expensive college fees, lack of awareness of career fields, or urgent familial pressure to take low-wage informal work.",
        "The College to Career Programme intervenes at this critical threshold. We help students explore career opportunities aligned with their passions and aptitude, while providing the complete financial and mentoring infrastructure needed to attend reputable colleges.",
        "From academic admission to digital literacy, resume preparation, and corporate networking, we ensure every student transforms their degree into a sustainable, independent career.",
      ],
      highlights: [
        {
          icon: GraduationCap,
          iconBg: "bg-emerald-100",
          iconColor: "text-emerald-800",
          title: "100% Full Fee Scholarships",
          description:
            "Eligible students receive comprehensive financial coverage for their degrees, diplomas, and vocational certificates, ensuring that financial constraints never stand in the way of a degree.",
        },
        {
          icon: Briefcase,
          iconBg: "bg-brand-100",
          iconColor: "text-brand-700",
          title: "Career Readiness & Mentorship",
          description:
            "Students learn practical digital skills, build professional resumes, practice interview techniques, and receive ongoing guidance from industry mentors.",
        },
      ],
    },
    framework: {
      id: "what-we-do",
      eyebrow: "Programme Pillars",
      title: "What We Do",
      subtitle:
        "Empowering students from higher education entrance to degree completion and professional career readiness.",
      stepPrefix: "Pillar",
      cards: [
        {
          num: "01",
          progress: "25%",
          badge: "Admissions & Pathways",
          title: "College Guidance",
          description:
            "Helping identify suitable colleges, degrees, and vocational courses based on each student's aptitude and career goals.",
          icon: Compass,
          image: "/images/college_to_career.jpg",
          cardBg: "bg-[#FAF6ED]",
          borderColor: "border-[#EFE5D3]",
          badgeColor: "border-amber-400 text-amber-700",
          pinColor: "bg-amber-500",
          actionItems: [
            "Identifying suitable accredited colleges",
            "Aptitude & ambition pathway planning",
            "Admissions & entrance exam assistance",
          ],
        },
        {
          num: "02",
          progress: "50%",
          badge: "Up to 100% Scholarship",
          title: "Financial Support",
          description:
            "Providing eligible students with up to 100% full fee sponsorships, removing the financial barriers to a college degree.",
          icon: GraduationCap,
          image: "/images/palak.jpg",
          cardBg: "bg-[#F2F7F2]",
          borderColor: "border-[#DEEADE]",
          badgeColor: "border-emerald-500 text-emerald-700",
          pinColor: "bg-emerald-600",
          actionItems: [
            "Sponsorship of up to 100% college fees",
            "Textbooks, digital tools & study kits",
            "Eliminating pressure for informal child labor",
          ],
        },
        {
          num: "03",
          progress: "75%",
          badge: "Modern & Digital Skills",
          title: "Skill Development",
          description:
            "Hands-on training in digital tools, communication, workplace professionalism, and contemporary industry skills.",
          icon: Sparkles,
          image: "/images/aarti.jpg",
          cardBg: "bg-[#FDF4F2]",
          borderColor: "border-[#F7E1DE]",
          badgeColor: "border-rose-500 text-rose-700",
          pinColor: "bg-rose-500",
          actionItems: [
            "Digital tools, computers & workplace software",
            "Spoken English & business communication",
            "Vocational certifications & workshops",
          ],
        },
        {
          num: "04",
          progress: "100%",
          badge: "Employability & Livelihood",
          title: "Career Preparation",
          description:
            "Resume building, interview coaching, vocational certifications, and career mentoring for sustainable livelihoods.",
          icon: Briefcase,
          image: "/images/hero_classroom_banner.jpg",
          cardBg: "bg-[#F2F5FA]",
          borderColor: "border-[#DEE5F2]",
          badgeColor: "border-blue-500 text-blue-700",
          pinColor: "bg-blue-600",
          actionItems: [
            "Professional CV & portfolio drafting",
            "Mock interviews & workplace etiquette",
            "Career mentoring for sustainable jobs",
          ],
        },
      ],
    },
    callout: {
      badge: "Our Future Direction",
      title: "Corporate Internships & Professional Linkages",
      description:
        "Employment support and corporate internships are central to our planned expansion roadmap. We are establishing partnerships with responsible businesses to ensure our graduates transition seamlessly from university lecture halls into meaningful, paid internships and formal employment.",
      primaryCtaText: "Partner for Internships",
      primaryCtaHref: "/get-involved#partner",
      secondaryCtaText: "Connect With Our Team",
      secondaryCtaHref: "/contact",
    },
    goal: {
      eyebrow: "TAKE THE NEXT STEP",
      heading: "Ready to Connect a Student With Their Future?",
      badgeText: "Official Programme Goal",
      quote:
        "To help students move from higher education towards meaningful career pathways with greater confidence and preparation.",
      ctaText: "Support College Scholarships",
      ctaHref: "/get-involved#donate",
      image: "/images/cta_learning_children.jpg",
      imageAlt: "Two happy Indian school children sitting at a study desk drawing with pencils",
    },
  },
};

export function getProgrammeData(id: "bridge-programme" | "after-school" | "college-to-career"): ProgrammeDetail {
  return programmesDetailData[id];
}
