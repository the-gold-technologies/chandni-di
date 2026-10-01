export interface ImpactStat {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Programme {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  ageGroup: string;
  description: string;
  highlights: string[];
  stages: { title: string; desc: string }[];
  impactMetric: string;
  ctaText: string;
  color: string;
}

export interface Story {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  course: string;
  institution: string;
  image: string;
  academicFeats: string[];
  story: string;
  quote: string;
  dream: string;
}

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: 'mainstreamed',
    value: '500+',
    numericValue: 500,
    suffix: '+',
    label: 'Mainstreamed Children',
    description: 'Children from slums successfully integrated into mainstream schools and society.'
  },
  {
    id: 'currently-studying',
    value: '370',
    numericValue: 370,
    suffix: '',
    label: 'Scholars Currently Enrolled',
    description: 'Active students pursuing quality education across schools and prestigious universities.'
  },
  {
    id: 'fully-adopted',
    value: '136',
    numericValue: 136,
    suffix: '',
    label: '100% Adopted Education',
    description: 'Children whose complete tuition, books, uniform, and living guidance are fully sponsored.'
  },
  {
    id: 'growth-centres',
    value: '10',
    numericValue: 10,
    suffix: '',
    label: 'Centres Target (Delhi-NCR)',
    description: 'Strategic community learning centres being expanded across Delhi-NCR.'
  }
];

export const ROADMAP_GOALS = [
  {
    target: '10',
    unit: 'Centres',
    label: 'Learning Centres Across Delhi-NCR',
    detail: 'Decentralized hub classrooms embedded directly within underserved slum clusters.'
  },
  {
    target: '3,000',
    unit: 'Children',
    label: 'Connected Through Continuous Support',
    detail: 'Expanding our academic and counselling reach to break the cycle of intergenerational poverty.'
  },
  {
    target: '1,000',
    unit: 'Students',
    label: 'Skilled, Mentored & Formally Employed',
    detail: 'Connecting vocational and college graduates with corporate internships and career roles.'
  }
];

export const PROGRAMMES: Programme[] = [
  {
    id: 'bridge',
    number: '01',
    title: 'Bridge Programme',
    subtitle: 'Preparing Children for Formal Mainstream Education',
    ageGroup: '5 to 12 Years',
    description: 'Many children in slums have missed years of foundational education. Our Bridge Programme conducts door-to-door community surveys, identifies eager learners, and provides 1-2 years of intensive remedial schooling to ready them for formal admission into mainstream government and private schools.',
    highlights: [
      'Door-to-door baseline community survey in slum clusters',
      'One committed child per household supported for a 10-15 year educational trajectory',
      '1 to 2 years of intensive foundational literacy and numeracy at our learning centres',
      'Formal mainstream school admission assistance (Govt Hindi Medium & Private English Medium)'
    ],
    stages: [
      { title: '1. Community Identification', desc: 'Active field survey to identify motivated children & families eager to commit to education.' },
      { title: '2. Foundational Bridge Study', desc: '12-24 months of specialized accelerated learning at our centres to bridge academic gaps.' },
      { title: '3. Mainstream Admission', desc: 'Securing admissions into verified partner schools (Govt & Private English Medium).' },
      { title: '4. Continuous Handholding', desc: 'Seamless transition into our After-School Programme for long-term retention.' }
    ],
    impactMetric: 'Over 500 children bridged into formal school systems',
    ctaText: 'Support a Bridge Child',
    color: '#c62828'
  },
  {
    id: 'after-school',
    number: '02',
    title: 'After-School Programme',
    subtitle: 'Strengthening Learning, Emotional Resilience & Character',
    ageGroup: 'Enrolled School Students (Classes 1 - 12)',
    description: 'Enrolling in school is only the first step. Slum households often lack quiet study spaces or educated parents who can help with homework. We provide daily tutoring, mental health counselling, parent workshops, life skills, and 50% to 100% school fee sponsorships to prevent dropouts.',
    highlights: [
      'Daily subject tutoring in Math, Science, English, and Hindi',
      'Mental, emotional, and social counselling for children and their parents',
      '50% to 100% school tuition fee sponsorship for eligible students',
      'Holistic personality development, arts, sports, and leadership workshops'
    ],
    stages: [
      { title: '1. Daily Remedial Support', desc: 'Structured homework assistance and foundational concept strengthening every afternoon.' },
      { title: '2. Holistic Wellbeing', desc: 'Regular one-on-one psychological counselling and family engagement sessions.' },
      { title: '3. Fee Assistance', desc: 'Disbursing 50-100% of school tuition and supplying uniform, books, and stationery.' },
      { title: '4. Board Exam Mentorship', desc: 'Intensive coaching for 10th & 12th board exams ensuring high academic achievement.' }
    ],
    impactMetric: '370+ students currently excelling in regular schools',
    ctaText: 'Sponsor After-School Care',
    color: '#b45309'
  },
  {
    id: 'college-to-career',
    number: '03',
    title: 'College to Career Programme',
    subtitle: 'Connecting Higher Education With Dignified Employment',
    ageGroup: '17+ Years (Undergraduate & Vocational)',
    description: 'True independence comes when an educated child steps into professional employment. We evaluate each student’s aptitude, sponsor 100% of their university or vocational tuition fees, conduct professional communication & technical training, and place them into corporate internships.',
    highlights: [
      'Comprehensive aptitude mapping and university counseling',
      '100% full college & vocational degree fee sponsorship',
      'Extracurricular skills: Digital literacy, English communication, interview prep',
      'Corporate partnerships for paid internships and formal employment'
    ],
    stages: [
      { title: '1. Course & College Matching', desc: 'Selecting suitable degree pathways (Engineering, Law, Arts, Commerce, Vocations).' },
      { title: '2. 100% Fee Sponsorship', desc: 'Full funding of college tuition, examination fees, laptops, and study materials.' },
      { title: '3. Employability Training', desc: 'Masterclasses in corporate etiquette, soft skills, presentation, and resumes.' },
      { title: '4. Corporate Internships', desc: 'Connecting graduates with corporate partners for internships and permanent roles.' }
    ],
    impactMetric: '100% scholarship support for university scholars',
    ctaText: 'Sponsor Higher Education',
    color: '#15803d'
  }
];

export const STORIES_OF_CHANGE: Story[] = [
  {
    id: 'palak',
    name: 'Palak',
    title: 'From Educational Disruption to University Aspirations',
    subtitle: 'B.A. (Honours) Political Science at Gautam Buddha University',
    course: 'B.A. (Hons) Political Science',
    institution: 'Gautam Buddha University',
    image: '/images/palak.jpg',
    academicFeats: ['Class 10: 78%', 'Class 12: 80%', 'Siblings admitted to Indraprastha Global School'],
    story: 'Following the tragic loss of her father during the COVID-19 pandemic, Palak’s family faced severe economic distress that threatened to halt her education entirely. Chandni Di stepped in immediately, supporting Palak and her siblings. While her siblings were enrolled at Indraprastha Global School, Palak received comprehensive academic tuition, books, exam fees, and moral guidance. Today, she is pursuing her bachelor’s degree at Gautam Buddha University and preparing for the civil services.',
    quote: '“If Chandni Di had not helped me, I could not even have imagined fulfilling my dream.”',
    dream: 'Aspires to become an Indian Civil Servant (IAS) to reform governance for the underprivileged.'
  },
  {
    id: 'aarti',
    name: 'Aarti',
    title: 'From Slum Tea Stall to Biotechnology Innovator',
    subtitle: 'B.Tech in Biotechnology at Noida International University • School Topper',
    course: 'B.Tech Biotechnology',
    institution: 'Noida International University',
    image: '/images/aarti.jpg',
    academicFeats: ['Class 10: 86%', 'Class 12: 80% (1st Position in School)', 'Full Engineering Sponsorship'],
    story: 'Aarti belongs to a family of four sisters. Her father, who earlier worked as a cycle-rickshaw driver, set up a modest roadside tea stall to support the family. In 2019, Chandni Di discovered Aarti’s keen intellect during a community survey. Chandni Di sponsored Aarti’s entire school fees, books, and uniforms, and provided critical family restart grants during the lockdown. Aarti topped her school with 86% in Class 10 and 80% in Class 12, securing 1st rank. She is now excelling in her B.Tech Biotechnology degree.',
    quote: '“One day, I also want to help someone else in the same way Chandni Di helped me.”',
    dream: 'Aims to become a biotechnology researcher and establish a community science foundation.'
  }
];

export const FOUNDER_INFO = {
  name: 'Chandni Di',
  title: 'Founder & Visionary Advocate for Slum Children',
  experienceYears: 'Working since 2016',
  badge: 'Honoured by 2 Former Presidents of India',
  presidents: [
    {
      name: 'Shri Pranab Mukherjee',
      title: 'Former President of India',
      note: 'Acknowledged for exemplary grassroots commitment to child rights and youth advocacy.'
    },
    {
      name: 'Shri Ram Nath Kovind',
      title: 'Former President of India',
      note: 'Recognized for pioneering educational access and empowerment of slum children.'
    }
  ],
  bio: `Chandni Di’s mission is forged from lived reality. Having grown up in a slum herself, she experienced first-hand the deprivation, insecurity, and social invisibility that millions of street children endure. She started working with slum children at just 10 years of age. By 18, she established an organized grassroots initiative dedicated to child rights and education.
  
Chandni Di believes that simply giving a child school admission is insufficient. Without daily mentorship, emotional healing, family economic stability, and long-term career pathways, children slip through the cracks. Her holistic 3-pillar ecosystem walks with children from their first alphabet all the way to college graduation and corporate employment.`,
  quote: '“Having lived in the dark space of a slum, I know that no child deserves this reality. Education is not just about a school uniform—it is the single force that rewires a destiny.”'
};

export const TRANSPARENCY_DOCS = [
  {
    title: 'NGO Darpan Registration',
    issuer: 'NITI Aayog, Government of India',
    status: 'Verified & Active',
    badge: 'Govt Verified',
    desc: 'Official registration on the National Portal for NGOs, ensuring full compliance and operational legitimacy.'
  },
  {
    title: 'Section 80G Tax Exemption',
    issuer: 'Income Tax Department of India',
    status: '50% Tax Deduction Eligible',
    badge: 'Tax Exemption',
    desc: 'All donations made by Indian taxpayers are eligible for a 50% tax deduction under Section 80G.'
  },
  {
    title: 'Section 12A Certification',
    issuer: 'Income Tax Department of India',
    status: 'Non-Profit Tax Status',
    badge: '12A Certified',
    desc: 'Affirms that all organisational funds are strictly utilized for charitable educational objectives.'
  },
  {
    title: 'CSR-1 Registration',
    issuer: 'Ministry of Corporate Affairs',
    status: 'Eligible for Corporate CSR Funding',
    badge: 'CSR Ready',
    desc: 'Authorized to partner with corporations for Section 135 Schedule VII CSR initiatives.'
  }
];

export const SPONSORSHIP_TIERS = [
  {
    id: 'bridge',
    name: 'Sponsor a Bridge Child',
    amount: 1500,
    period: 'per month',
    annualAmount: 18000,
    impact: 'Covers remedial tutoring, foundational books, classroom learning materials, and mid-day snacks for a child preparing for school.',
    taxBenefit: '₹750 tax deduction under 80G'
  },
  {
    id: 'school',
    name: 'Sponsor an After-School Scholar',
    amount: 2500,
    period: 'per month',
    annualAmount: 30000,
    popular: true,
    impact: 'Covers 100% school tuition fee, daily tuition, uniform, school bag, and dedicated psychological counseling.',
    taxBenefit: '₹1,250 tax deduction under 80G'
  },
  {
    id: 'college',
    name: 'Sponsor a College Scholar',
    amount: 5000,
    period: 'per month',
    annualAmount: 60000,
    impact: 'Covers full university semester fees, textbooks, laptop access, competitive exam coaching, and corporate placement guidance.',
    taxBenefit: '₹2,500 tax deduction under 80G'
  }
];
