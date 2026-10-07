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
  category?: string;
  excerpt?: string;
  academicFeats: string[];
  story: string;
  journeyStages?: {
    stage: string;
    title: string;
    desc: string;
  }[];
  quote: string;
  dream: string;
  scholarSince?: string;
  fundingStatus?: string;
}

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "mainstreamed",
    value: "500+",
    numericValue: 500,
    suffix: "+",
    label: "Mainstreamed Children",
    description:
      "Children from slums successfully integrated into mainstream schools and society.",
  },
  {
    id: "currently-studying",
    value: "370",
    numericValue: 370,
    suffix: "",
    label: "Scholars Currently Enrolled",
    description:
      "Active students pursuing quality education across schools and prestigious universities.",
  },
  {
    id: "fully-adopted",
    value: "136",
    numericValue: 136,
    suffix: "",
    label: "100% Adopted Education",
    description:
      "Children whose complete tuition, books, uniform, and living guidance are fully sponsored.",
  },
  {
    id: "growth-centres",
    value: "10",
    numericValue: 10,
    suffix: "",
    label: "Centres Target (Delhi-NCR)",
    description:
      "Strategic community learning centres being expanded across Delhi-NCR.",
  },
];

export const ROADMAP_GOALS = [
  {
    target: "10",
    unit: "Centres",
    label: "Learning Centres Across Delhi-NCR",
    detail:
      "Decentralized hub classrooms embedded directly within underserved slum clusters.",
  },
  {
    target: "3,000",
    unit: "Children",
    label: "Connected Through Continuous Support",
    detail:
      "Expanding our academic and counselling reach to break the cycle of intergenerational poverty.",
  },
  {
    target: "1,000",
    unit: "Students",
    label: "Skilled, Mentored & Formally Employed",
    detail:
      "Connecting vocational and college graduates with corporate internships and career roles.",
  },
];

export const PROGRAMMES: Programme[] = [
  {
    id: "bridge",
    number: "01",
    title: "Bridge Programme",
    subtitle: "Preparing Children for Formal Mainstream Education",
    ageGroup: "5 to 12 Years",
    description:
      "Many children in slums have missed years of foundational education. Our Bridge Programme conducts door-to-door community surveys, identifies eager learners, and provides 1-2 years of intensive remedial schooling to ready them for formal admission into mainstream government and private schools.",
    highlights: [
      "Door-to-door baseline community survey in slum clusters",
      "One committed child per household supported for a 10-15 year educational trajectory",
      "1 to 2 years of intensive foundational literacy and numeracy at our learning centres",
      "Formal mainstream school admission assistance (Govt Hindi Medium & Private English Medium)",
    ],
    stages: [
      {
        title: "1. Community Identification",
        desc: "Active field survey to identify motivated children & families eager to commit to education.",
      },
      {
        title: "2. Foundational Bridge Study",
        desc: "12-24 months of specialized accelerated learning at our centres to bridge academic gaps.",
      },
      {
        title: "3. Mainstream Admission",
        desc: "Securing admissions into verified partner schools (Govt & Private English Medium).",
      },
      {
        title: "4. Continuous Handholding",
        desc: "Seamless transition into our After-School Programme for long-term retention.",
      },
    ],
    impactMetric: "Over 500 children bridged into formal school systems",
    ctaText: "Support a Bridge Child",
    color: "#c62828",
  },
  {
    id: "after-school",
    number: "02",
    title: "After-School Programme",
    subtitle: "Strengthening Learning, Emotional Resilience & Character",
    ageGroup: "Enrolled School Students (Classes 1 - 12)",
    description:
      "Enrolling in school is only the first step. Slum households often lack quiet study spaces or educated parents who can help with homework. We provide daily tutoring, mental health counselling, parent workshops, life skills, and 50% to 100% school fee sponsorships to prevent dropouts.",
    highlights: [
      "Daily subject tutoring in Math, Science, English, and Hindi",
      "Mental, emotional, and social counselling for children and their parents",
      "50% to 100% school tuition fee sponsorship for eligible students",
      "Holistic personality development, arts, sports, and leadership workshops",
    ],
    stages: [
      {
        title: "1. Daily Remedial Support",
        desc: "Structured homework assistance and foundational concept strengthening every afternoon.",
      },
      {
        title: "2. Holistic Wellbeing",
        desc: "Regular one-on-one psychological counselling and family engagement sessions.",
      },
      {
        title: "3. Fee Assistance",
        desc: "Disbursing 50-100% of school tuition and supplying uniform, books, and stationery.",
      },
      {
        title: "4. Board Exam Mentorship",
        desc: "Intensive coaching for 10th & 12th board exams ensuring high academic achievement.",
      },
    ],
    impactMetric: "370+ students currently excelling in regular schools",
    ctaText: "Sponsor After-School Care",
    color: "#b45309",
  },
  {
    id: "college-to-career",
    number: "03",
    title: "College to Career Programme",
    subtitle: "Connecting Higher Education With Dignified Employment",
    ageGroup: "17+ Years (Undergraduate & Vocational)",
    description:
      "True independence comes when an educated child steps into professional employment. We evaluate each student’s aptitude, sponsor 100% of their university or vocational tuition fees, conduct professional communication & technical training, and place them into corporate internships.",
    highlights: [
      "Comprehensive aptitude mapping and university counseling",
      "100% full college & vocational degree fee sponsorship",
      "Extracurricular skills: Digital literacy, English communication, interview prep",
      "Corporate partnerships for paid internships and formal employment",
    ],
    stages: [
      {
        title: "1. Course & College Matching",
        desc: "Selecting suitable degree pathways (Engineering, Law, Arts, Commerce, Vocations).",
      },
      {
        title: "2. 100% Fee Sponsorship",
        desc: "Full funding of college tuition, examination fees, laptops, and study materials.",
      },
      {
        title: "3. Employability Training",
        desc: "Masterclasses in corporate etiquette, soft skills, presentation, and resumes.",
      },
      {
        title: "4. Corporate Internships",
        desc: "Connecting graduates with corporate partners for internships and permanent roles.",
      },
    ],
    impactMetric: "100% scholarship support for university scholars",
    ctaText: "Sponsor Higher Education",
    color: "#15803d",
  },
];

export const STORIES_OF_CHANGE: Story[] = [
  {
    id: "palak",
    name: "Palak",
    title: "From Educational Disruption to University Aspirations",
    subtitle: "B.A. (Honours) Political Science at Gautam Buddha University",
    course: "B.A. (Hons) Political Science",
    institution: "Gautam Buddha University",
    image: "/images/palak.jpg",
    category: "University Scholars",
    excerpt:
      "Following the tragic loss of her father during COVID-19, Palak was backed with complete tuition and mentorship, now pursuing higher education and civil services aspirations.",
    academicFeats: [
      "Class 10: 78%",
      "Class 12: 80%",
      "Civil Services Preparation Cohort",
    ],
    journeyStages: [
      {
        stage: "1. The Challenge",
        title: "Pandemic Loss & Financial Crisis",
        desc: "The sudden demise of her father left the family in extreme distress, threatening to abruptly end Palak's schooling and that of her siblings.",
      },
      {
        stage: "2. The Intervention",
        title: "Chandni Di Holistic Sponsorship",
        desc: "Chandni Di immediately enrolled younger siblings at Indraprastha Global School and provided Palak with books, full exam fees, and daily guidance.",
      },
      {
        stage: "3. Today & Beyond",
        title: "University Scholar & UPSC Aspirant",
        desc: "Now excelling at Gautam Buddha University with top grades, Palak is preparing diligently for the Indian Administrative Services.",
      },
    ],
    story:
      "Following the tragic loss of her father during the COVID-19 pandemic, Palak’s family faced severe economic distress that threatened to halt her education entirely. With multiple younger siblings to care for, the future looked bleak.\n\nChandni Di stepped in immediately, supporting Palak and her siblings through a comprehensive safety net. While her siblings were enrolled at Indraprastha Global School, Palak received intensive academic tuition, books, exam registrations, and constant emotional encouragement. Today, she is pursuing her bachelor’s degree at Gautam Buddha University and actively preparing for the civil services.",
    quote:
      "“If Chandni Di had not helped me, I could not even have imagined fulfilling my dream of going to university.”",
    dream:
      "Aspires to become an Indian Civil Servant (IAS) to formulate inclusive governance and education policies for the underprivileged.",
    scholarSince: "2020",
    fundingStatus: "100% Comprehensive Higher Ed Sponsorship",
  },
  {
    id: "aarti",
    name: "Aarti",
    title: "From Slum Tea Stall to Biotechnology Innovator",
    subtitle:
      "B.Tech in Biotechnology at Noida International University • School Topper",
    course: "B.Tech Biotechnology",
    institution: "Noida International University",
    image: "/images/aarti.jpg",
    category: "STEM & Innovation",
    excerpt:
      "Daughter of a roadside tea stall owner, Aarti ranked 1st in her school and is now thriving in her B.Tech Biotechnology degree with full engineering sponsorship.",
    academicFeats: [
      "Class 10: 86%",
      "Class 12: 80% (1st Position in School)",
      "Full Engineering Sponsorship",
    ],
    journeyStages: [
      {
        stage: "1. The Challenge",
        title: "Roadside Tea Stall Hardship",
        desc: "Born into a family of four sisters whose father struggled to run a modest tea stall after pulling a cycle-rickshaw for years.",
      },
      {
        stage: "2. The Intervention",
        title: "Continuous Academic Underwriting",
        desc: "Discovered during a community survey in 2019, Aarti received full school fee grants, coaching, study kits, and family lockdown food security.",
      },
      {
        stage: "3. Today & Beyond",
        title: "1st Rank & B.Tech Biotechnology",
        desc: "Secured school rank 1 with 80% in 12th science, followed by 100% sponsored admission to Noida International University in Biotechnology.",
      },
    ],
    story:
      "Aarti belongs to a family of four sisters. Her father, who earlier worked as a cycle-rickshaw driver, set up a modest roadside tea stall to support the family. Facing heavy financial strain, keeping four daughters in school seemed impossible.\n\nIn 2019, Chandni Di discovered Aarti’s keen intellect during a grassroots community survey. Chandni Di sponsored Aarti’s entire school fees, books, and uniforms, and provided critical family restart grants during the lockdown. Aarti topped her school with 86% in Class 10 and 80% in Class 12, securing 1st rank. She is now excelling in her B.Tech Biotechnology degree.",
    quote:
      "“One day, I also want to help someone else in the same way Chandni Di helped me.”",
    dream:
      "Aims to become a biotechnology researcher and establish a community science foundation to create accessible healthcare technologies.",
    scholarSince: "2019",
    fundingStatus: "100% Full Engineering Sponsorship",
  },
  {
    id: "rohit",
    name: "Rohit",
    title: "From Street Rag-Picking to Delhi University",
    subtitle: "Bachelor of Commerce (B.Com) at University of Delhi",
    course: "B.Com (Honours)",
    institution: "University of Delhi",
    image: "/images/rohit_scholar.jpg",
    category: "University Scholars",
    excerpt:
      "Rescued from informal waste collection at age 8, Rohit completed an intensive bridge program, topped his senior class in accountancy, and earned admission into Delhi University.",
    academicFeats: [
      "Class 12: 84% in Commerce",
      "Accountancy Topper: 91%",
      "CA Foundation Candidate",
    ],
    journeyStages: [
      {
        stage: "1. The Challenge",
        title: "Child Labor & Illiteracy",
        desc: "Assisting relatives in collecting recyclables along railway tracks with zero formal school exposure until age eight.",
      },
      {
        stage: "2. The Intervention",
        title: "Intensive 18-Month Bridge Course",
        desc: "Enrolled in Chandni Di's accelerated bridge school to achieve age-appropriate literacy before being mainstreamed into a formal school.",
      },
      {
        stage: "3. Today & Beyond",
        title: "Premier Central University Scholar",
        desc: "Graduated Class 12 with 84% and 91% in Accountancy, successfully entering University of Delhi to study commerce and finance.",
      },
    ],
    story:
      "Until he was eight years old, Rohit’s mornings began on the railway platforms and garbage dumps of East Delhi, helping his family collect plastic scrap to earn barely enough for evening meals. School was an alien concept.\n\nA Chandni Di outreach volunteer brought Rohit to the neighborhood bridge center. Within 18 months, his natural aptitude for numbers flourished. Chandni Di mainstreamed Rohit into an English-medium affiliated school, paying all tuition and arranging after-school tutoring. In his Class 12 board examinations, Rohit scored an astounding 91% in Accountancy and 84% overall, earning a coveted seat at the prestigious University of Delhi.",
    quote:
      "“I used to collect plastic waste from dawn till dusk. Today I study financial balance sheets at Delhi University. That is what Chandni Di did for me.”",
    dream:
      "Wishes to become a certified Chartered Accountant and launch a micro-finance literacy hub for street vendors.",
    scholarSince: "2017",
    fundingStatus: "Higher Ed Living & College Grant",
  },
  {
    id: "jyoti",
    name: "Jyoti",
    title: "Defying Early Marriage to Top Science Boards",
    subtitle: "Class 12 (PCB) • NEET Medical Entrance Aspirant",
    course: "Senior Secondary (Medical Stream)",
    institution: "Govt. Model Senior Secondary School",
    image: "/images/jyoti_scholar.jpg",
    category: "School Toppers",
    excerpt:
      "Facing immense community pressure towards underage marriage, Jyoti was protected through dedicated counseling and scored 92% in Class 10 boards.",
    academicFeats: [
      "Class 10 Board: 92%",
      "District Science Olympiad Silver",
      "NEET Super-30 Cohort",
    ],
    journeyStages: [
      {
        stage: "1. The Challenge",
        title: "Pressure Towards Child Marriage",
        desc: "Deep social pressures in her settlement aimed to discontinue her schooling after grade 8 for an arranged underage marriage.",
      },
      {
        stage: "2. The Intervention",
        title: "Parental Counseling & Full Scholarship",
        desc: "Chandni Di conducted 6 rounds of home visits to counsel parents, promising 100% financial coverage for Jyoti's entire secondary education.",
      },
      {
        stage: "3. Today & Beyond",
        title: "92% Board Marks & NEET Aspirant",
        desc: "Scored 92% in Class 10 boards, earning entry into the medical science track and an intensive entrance preparation scholarship.",
      },
    ],
    story:
      "In Jyoti's neighborhood, girls rarely studied past the eighth standard. When Jyoti turned fourteen, family relatives began urging her parents to arrange her marriage. Jyoti dreamed of wearing a white lab coat, but had nowhere to turn.\n\nChandni Di stepped into the home personally. Through patient, respectful dialogue over multiple weeks, she convinced Jyoti's father to allow her to continue. Chandni Di shouldered every expense—textbooks, science lab fees, transportation, and specialized NEET entrance preparation. Jyoti responded with fierce commitment, scoring 92% in her Class 10 boards and emerging as the top science student in her district.",
    quote:
      "“Chandni Di convinced my family that a girl’s pen is stronger than any early compromise. She gave me my life back.”",
    dream:
      "Aims to become an MBBS pediatrician and open a free charitable children's clinic in slum settlements.",
    scholarSince: "2018",
    fundingStatus: "100% School Fees & Pre-Med Coaching",
  },
  {
    id: "aniket",
    name: "Aniket",
    title: "Puncture Stall to Polytechnic Software Developer",
    subtitle: "Diploma in Computer Science & Engineering at DSEU",
    course: "Diploma in CSE",
    institution: "Delhi Skill and Entrepreneurship University",
    image: "/images/aniket_scholar.jpg",
    category: "STEM & Innovation",
    excerpt:
      "From assisting at a roadside puncture stall to coding software applications, Aniket scored in the top 5% of entrance exams and is pursuing computer engineering.",
    academicFeats: [
      "Top 5% DSEU Entrance Rank",
      "Full Stack Web Development Certified",
      "Built NGO Student Attendance Portal",
    ],
    journeyStages: [
      {
        stage: "1. The Challenge",
        title: "Work at Tire Repair Stall",
        desc: "Spending hours after school vulcanizing punctured motorcycle tires to support his household's basic survival.",
      },
      {
        stage: "2. The Intervention",
        title: "Digital Lab Access & Guidance",
        desc: "Chandni Di introduced Aniket to digital literacy at the center, funded his computer science textbooks and entrance coaching.",
      },
      {
        stage: "3. Today & Beyond",
        title: "Engineering Diploma & Coder",
        desc: "Cleared state polytechnic entrance in top percentile, now building software apps and web systems at DSEU.",
      },
    ],
    story:
      "Every afternoon after government school, Aniket could be found covered in grease at his elder brother's roadside tire repair stall. While his hands patched tubes, his mind dreamed of computers—a technology he had only ever seen on television.\n\nChandni Di recognized his acute logical problem-solving during weekend aptitude sessions. She granted him dedicated computer lab access, covered his technical coaching, and helped him apply for the Delhi Skill & Entrepreneurship University. Aniket scored in the top 5th percentile across Delhi. Today, he writes Python and React code, and even developed an open-source student attendance tool for Chandni Di's grassroots centers.",
    quote:
      "“Computers were something I only saw through glass shop windows. Chandni Di gave me a keyboard and showed me I could build the future.”",
    dream:
      "Aspires to join a global technology enterprise as a full-stack engineer and fund computer labs for underprivileged youth.",
    scholarSince: "2020",
    fundingStatus: "Polytechnic Tuition & Laptop Grant",
  },
  {
    id: "komal",
    name: "Komal",
    title: "First Girl in Her Community to Pass Class 12",
    subtitle: "Bachelor of Social Work (BSW) • Grassroots Youth Mentor",
    course: "Bachelor of Social Work (BSW)",
    institution: "Indira Gandhi National Open University",
    image: "/images/komal_scholar.jpg",
    category: "Civil & Social Impact",
    excerpt:
      "Born to daily-wage construction laborers, Komal broke generation-long cycles to become the first girl in her community to complete Class 12, now studying social work.",
    academicFeats: [
      "1st High School Graduate in Settlement",
      "Youth Leadership Fellow 2024",
      "Trained 120+ Girls in Menstrual Hygiene",
    ],
    journeyStages: [
      {
        stage: "1. The Challenge",
        title: "Migrant Instability & Disruption",
        desc: "Constantly moving between seasonal brick kilns and construction sites made regular schooling impossible.",
      },
      {
        stage: "2. The Intervention",
        title: "Hostel Placement & Continuous Care",
        desc: "Chandni Di placed Komal in a stable residential school support ecosystem, shielding her from seasonal migration shocks.",
      },
      {
        stage: "3. Today & Beyond",
        title: "Community Leader & Degree Scholar",
        desc: "First girl in the history of her basti to clear Class 12; currently completing BSW and mentoring younger girls.",
      },
    ],
    story:
      "Komal’s parents are seasonal construction workers whose lives move from one brick pile to another every few months. Because of this itinerant life, Komal had attended five different primary schools by age eleven, falling severely behind.\n\nChandni Di intervened to break this cycle. She enrolled Komal into a continuous educational support program with dedicated lodging support, so her learning would never again be disrupted by construction site relocations. In 2023, Komal made history by becoming the very first girl in her entire 200-family slum settlement to graduate Class 12. She is now enrolled in Bachelor of Social Work, leading grassroots hygiene and literacy drives for younger girls.",
    quote:
      "“Education broke the cycle of seasonal migration. For the first time, my family has an address of hope.”",
    dream:
      "Wants to establish a permanent youth welfare foundation for migrant children across Indian urban borders.",
    scholarSince: "2017",
    fundingStatus: "100% Degree Tuition & Living Stipend",
  },
];

export const FOUNDER_INFO = {
  name: "Chandni Di",
  title: "Founder & Visionary Advocate for Slum Children",
  experienceYears: "Working since 2016",
  badge: "Honoured by 2 Former Presidents of India",
  presidents: [
    {
      name: "Shri Pranab Mukherjee",
      title: "Former President of India",
      note: "Acknowledged for exemplary grassroots commitment to child rights and youth advocacy.",
    },
    {
      name: "Shri Ram Nath Kovind",
      title: "Former President of India",
      note: "Recognized for pioneering educational access and empowerment of slum children.",
    },
  ],
  bio: `Chandni Di’s mission is forged from lived reality. Having grown up in a slum herself, she experienced first-hand the deprivation, insecurity, and social invisibility that millions of street children endure. She started working with slum children at just 10 years of age. By 18, she established an organized grassroots initiative dedicated to child rights and education.
  
Chandni Di believes that simply giving a child school admission is insufficient. Without daily mentorship, emotional healing, family economic stability, and long-term career pathways, children slip through the cracks. Her holistic 3-pillar ecosystem walks with children from their first alphabet all the way to college graduation and corporate employment.`,
  quote:
    "“Having lived in the dark space of a slum, I know that no child deserves this reality. Education is not just about a school uniform—it is the single force that rewires a destiny.”",
};

export const TRANSPARENCY_DOCS = [
  {
    title: "NGO Darpan Registration",
    issuer: "NITI Aayog, Government of India",
    status: "Verified & Active",
    badge: "Govt Verified",
    desc: "Official registration on the National Portal for NGOs, ensuring full compliance and operational legitimacy.",
  },
  {
    title: "Section 80G Tax Exemption",
    issuer: "Income Tax Department of India",
    status: "50% Tax Deduction Eligible",
    badge: "Tax Exemption",
    desc: "All donations made by Indian taxpayers are eligible for a 50% tax deduction under Section 80G.",
  },
  {
    title: "Section 12A Certification",
    issuer: "Income Tax Department of India",
    status: "Non-Profit Tax Status",
    badge: "12A Certified",
    desc: "Affirms that all organisational funds are strictly utilized for charitable educational objectives.",
  },
  {
    title: "CSR-1 Registration",
    issuer: "Ministry of Corporate Affairs",
    status: "Eligible for Corporate CSR Funding",
    badge: "CSR Ready",
    desc: "Authorized to partner with corporations for Section 135 Schedule VII CSR initiatives.",
  },
  {
    title: "Trust Registration Certificate",
    issuer: "Sub-Registrar, Govt. of NCT of Delhi",
    status: "Registered Public Trust",
    badge: "Legal Trust",
    desc: "Registered trust deed validating legal constitution, objectives, and public charitable governance.",
  },
  {
    title: "Annual Activity Reports",
    issuer: "Chandni Di Foundation",
    status: "Published Annually",
    badge: "Impact Reporting",
    desc: "Detailed summaries of learning centres, student enrollments, mainstreamed outcomes, and community reach.",
  },
  {
    title: "Financial Audit Reports",
    issuer: "Independent Chartered Accountants",
    status: "Audited Annually",
    badge: "CA Audited",
    desc: "Fully audited balance sheets, income & expenditure statements, and statutory tax filings.",
  },
  {
    title: "Relevant Organisational Documents",
    issuer: "Tax & Regulatory Bodies",
    status: "Compliant & Active",
    badge: "Statutory Filings",
    desc: "Official PAN card, Form 10BD annual donor returns, child safety guidelines, and operational bylaws.",
  },
];

export const SPONSORSHIP_TIERS = [
  {
    id: "bridge",
    name: "Sponsor a Bridge Child",
    amount: 1500,
    period: "per month",
    annualAmount: 18000,
    impact:
      "Covers remedial tutoring, foundational books, classroom learning materials, and mid-day snacks for a child preparing for school.",
    taxBenefit: "₹750 tax deduction under 80G",
  },
  {
    id: "school",
    name: "Sponsor an After-School Scholar",
    amount: 2500,
    period: "per month",
    annualAmount: 30000,
    popular: true,
    impact:
      "Covers 100% school tuition fee, daily tuition, uniform, school bag, and dedicated psychological counseling.",
    taxBenefit: "₹1,250 tax deduction under 80G",
  },
  {
    id: "college",
    name: "Sponsor a College Scholar",
    amount: 5000,
    period: "per month",
    annualAmount: 60000,
    impact:
      "Covers full university semester fees, textbooks, laptop access, competitive exam coaching, and corporate placement guidance.",
    taxBenefit: "₹2,500 tax deduction under 80G",
  },
];
