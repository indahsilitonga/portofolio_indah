export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metricsBadge: string;
  featured?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
  gpaScale: string;
  coursework: string[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'work' | 'organization';
  description?: string;
  highlights: string[];
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  period: string;
  category: string;
  description: string;
  skills: string[];
  status: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: number; note?: string }[];
}

export const PERSONAL_INFO = {
  name: "Indah Silitonga",
  nickname: "Indah",
  roles: [
    "Junior Software Quality Assurance" 
  ],
  bio: "Software Engineering Technology graduate from Institut Teknologi Del with hands-on experience in manual testing, test case development, and basic Selenium automation through academic projects. Experienced in requirements analysis, system validation, and evaluating software outputs. Detail-oriented, analytical, and eager to contribute to software quality assurance while continuously developing testing skills.",
  location: "Laguboti, North Sumatra, Indonesia",
  phone: "081264835461",
  whatsappUrl: "https://wa.me/6281264835461?text=Halo%20Indah,%20saya%20tertarik%20dengan%20profil%20portfolio%20Anda!",
  email: "silitongaindah91@gmail.com",
  linkedin: "https://linkedin.com/in/indah-silitonga-853834311",
  linkedinHandle: "indah-silitonga-853834311",
  github: "https://github.com",
  status: "Available for QA & Tech Opportunities",
  primaryColor: "#2c67ed",
  stats: [
    { label: "GPA Cum Laude", value: "3.34", unit: "/ 4.00", desc: "Institut Teknologi Del" },
    { label: "RAG Evaluation", value: "41+", unit: "cases", desc: "Per testing scenario" },
    { label: "QA Test Cases", value: "23+", unit: "cases", desc: "Manual & Selenium" },
    { label: "RAGAS Metrics", value: "6", unit: "metrics", desc: "Precision, recall & faithfulness" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "rag-raft-benchmark",
    title: "Benchmarking RAG vs. RAFT for Legal Question Answering",
    category: "AI & QA Evaluation",
    period: "Jan 2026 – Jul 2026",
    description: "Evaluasi dan benchmarking mendalam antara arsitektur Retrieval-Augmented Generation (RAG) dan Retrieval Augmented Fine-Tuning (RAFT) untuk sistem tanya jawab hukum berbasis dokumen Peraturan Desa (Perdes).",
    highlights: [
      "Mengkomparasikan performa RAG dan RAFT melalui 3 skenario eksperimen: RAG standar, RAG dengan distractor documents, dan RAFT dengan distractor documents.",
      "Merancang dan mengeksekusi 41 test cases terstruktur untuk setiap skenario pengujian.",
      "Mengumpulkan, membersihkan, dan memproses korpus regulasi desa Indonesia (Perdes) untuk pengujian akurasi regulasi.",
      "Membangun pipeline retrieval menggunakan embedding model dan vector database (Supabase / pgvector).",
      "Mengevaluasi output model menggunakan 6 metrik RAGAS: Faithfulness, Answer Relevancy, Context Precision, Context Recall, Answer Correctness, dan Semantic Answer Similarity.",
      "Menganalisis ketangguhan (robustness) sistem saat retrieval terkontaminasi dokumen pengalih (distractors)."
    ],
    technologies: ["Python", "RAG", "RAFT", "RAGAS", "Vector DB", "Supabase/pgvector", "Embedding Models", "Jupyter Notebook"],
    metricsBadge: "41 Test Cases / Skenario • 6 RAGAS Metrics",
    featured: true
  },
  {
    id: "ataraxia-ticket-system",
    title: "Live Music Ticket Booking System for Ataraxia Café",
    category: "Full SDLC & QA Automation",
    period: "Jan 2025 – Jun 2025",
    location: "Balige, North Sumatra",
    description: "Sistem reservasi dan pemesanan tiket pertunjukan live music berbasis web untuk Ataraxia Café dari tahap analisis kebutuhan bisnis hingga implementasi automated testing.",
    highlights: [
      "Merancang antarmuka pengguna (UI/UX) dan prototipe interaktif menggunakan Figma dengan fokus pada user experience pelanggan kafe.",
      "Memodelkan alur proses bisnis menggunakan BPMN dan Use Case Diagram, serta memodelkan struktur data dengan ERD.",
      "Menyusun Work Breakdown Structure (WBS) untuk manajemen waktu dan estimasi delivery proyek perangkat lunak.",
      "Mengembangkan 23 manual test cases komprehensif (positive, negative, and edge cases).",
      "Mengeksekusi automated functional testing menggunakan Selenium untuk validasi fitur krusial pemesanan tiket."
    ],
    technologies: ["Selenium", "Manual Testing", "Test Case Design", "Figma", "BPMN", "Use Case", "ERD", "WBS", "MySQL"],
    metricsBadge: "23 Manual Test Cases • Selenium Automation",
    featured: true
  },
  {
    id: "bkn-project-management",
    title: "Integrated Project Management System (BKN)",
    category: "Frontend Development",
    period: "Aug 2025 – Dec 2025",
    location: "East Jakarta, Republic of Indonesia",
    description: "Pengembangan antarmuka sistem manajemen proyek terintegrasi pada Badan Kepegawaian Negara (BKN) untuk monitoring proyek dan efisiensi birokrasi digital.",
    highlights: [
      "Mengembangkan komponen UI modern dan reusable untuk sistem manajemen proyek menggunakan React dan TypeScript.",
      "Mengimplementasikan desain antarmuka responsif dan konsisten menggunakan Tailwind CSS dan shadcn/ui.",
      "Membangun dan mengintegrasikan fitur-fitur frontend berdasarkan dokumen kebutuhan sistem aparatur sipil negara.",
      "Memastikan standardisasi kode dan kemudahan usability antar divisi kerja internal BKN."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "REST API", "Git"],
    metricsBadge: "Production Grade UI • Badan Kepegawaian Negara",
    featured: true
  },
  {
    id: "visitor-management-system",
    title: "Visitor Management System",
    category: "Requirements & System Modeling",
    period: "Jan 2024 – Jun 2024",
    description: "Perancangan sistem manajemen pencatatan tamu dan pengunjung institusi untuk meningkatkan kontrol keamanan dan kemudahan administrasi resepsionis.",
    highlights: [
      "Merancang prototipe antarmuka sistem registrasi tamu, pencatatan check-in/check-out, serta pencetakan badge tamu menggunakan Figma.",
      "Memodelkan alur proses bisnis verifikasi pengunjung menggunakan notasi BPMN dan diagram Use Case terperinci.",
      "Merancang skema basis data relasional menggunakan Entity Relationship Diagram (ERD) untuk histori audit pengunjung."
    ],
    technologies: ["Figma", "BPMN", "Use Case Diagram", "ERD", "Balsamiq", "System Requirements"],
    metricsBadge: "BPMN & ERD Architecture • UI Prototype",
    featured: false
  }
];

export const EDUCATION: Education = {
  institution: "Institut Teknologi Del",
  degree: "Bachelor of Applied Science in Software Engineering Technology",
  period: "Sep 2022 – Aug 2026",
  location: "Laguboti, North Sumatra",
  gpa: "3.34",
  gpaScale: "4.00",
  coursework: [
    "Software Testing",
    "Software Requirements Analysis",
    "User Interface Design",
    "Project Management",
    "Database Systems",
    "Machine Learning",
    "Data Analytics",
    "Data Science"
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Frontend Developer Intern",
    organization: "Badan Kepegawaian Negara (BKN), Republic of Indonesia",
    period: "Aug 2025 – Dec 2025",
    location: "East Jakarta, Indonesia",
    type: "work",
    highlights: [
      "Developed user interface components for an integrated project management system using React and TypeScript.",
      "Implemented UI designs using Tailwind CSS and shadcn/ui.",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Team Collaboration"]
  },
  {
    role: "Creative Division Head",
    organization: "Software Engineering Student Association (HIMAPRO)",
    period: "Sep 2024 – Jul 2025",
    location: "Institut Teknologi Del",
    type: "organization",
    highlights: [
      "Led the creative division by delegating design tasks and coordinating with other divisions.",
      "Managed Instagram content strategy and produced high-engagement event posters and promotional videos.",
      "Facilitated team alignment and delivered visual branding on schedule for all institutional events."
    ],
    skills: ["Creative Leadership", "Figma", "Canva", "Video Editing", "Content Strategy"]
  },
  {
    role: "Creative Division Member",
    organization: "Software Engineering Student Association (HIMAPRO)",
    period: "Aug 2023 – Sep 2024",
    location: "Institut Teknologi Del",
    type: "organization",
    highlights: [
      "Created posters, social media content, and event documentation videos.",
      "Collaborated closely with event committees to produce interactive digital assets for workshops and seminars."
    ],
    skills: ["Graphic Design", "Social Media", "Video Documentation", "Canva", "Figma"]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-sqa-del",
    title: "Software Quality Assurance & System Testing",
    issuer: "Institut Teknologi Del",
    period: "2024 - 2025",
    category: "Software Testing",
    description: "Verifikasi kompetensi dalam perancangan test case komprehensif, manual functional testing, pembuatan test suite, dan dasar otomasi pengetesan dengan Selenium.",
    skills: ["Manual Testing", "Test Case Design", "Selenium", "System Validation"],
    status: "Verified Academic Credential"
  },
  {
    id: "cert-frontend-bkn",
    title: "Frontend Engineering Internship Completion",
    issuer: "Badan Kepegawaian Negara (BKN) RI",
    period: "Dec 2025",
    category: "Frontend Development",
    description: "Pengakuan resmi atas kontribusi pengembangan UI sistem manajemen proyek berbasis React, TypeScript, dan Tailwind CSS di instansi pemerintahan.",
    skills: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Component Architecture"],
    status: "Official Internship Certificate"
  },
  {
    id: "cert-ai-ragas",
    title: "AI Benchmarking & RAGAS Quality Evaluation",
    issuer: "Del IT AI & Data Research Group",
    period: "2026",
    category: "AI & Data Science",
    description: "Pengujian arsitektur Retrieval-Augmented Generation & RAFT serta benchmarking akurasi retrieval menggunakan 6 parameter metrik RAGAS.",
    skills: ["RAGAS", "RAG", "RAFT", "Vector DB", "Evaluation Metrics"],
    status: "Research Excellence"
  },
  {
    id: "cert-systems-modeling",
    title: "Software Requirements Analysis & System Modeling",
    issuer: "Institut Teknologi Del",
    period: "2024",
    category: "System Analysis",
    description: "Kompetensi pemodelan proses bisnis, use case diagram, normalisasi ERD basis data, dan penyusunan Work Breakdown Structure (WBS).",
    skills: ["BPMN", "Use Case", "ERD", "WBS", "Bizagi Modeler"],
    status: "Academic Credential"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software Testing & QA",
    iconName: "ShieldCheck",
    description: "Kompetensi pengujian kualitas perangkat lunak manual & otomatis",
    skills: [
      { name: "Manual Testing", level: 92, note: "Exploratory & Functional" },
      { name: "Test Case Development", level: 95, note: "Positive, Negative, Boundary" },
      { name: "Functional Testing", level: 90, note: "Scenario-based Verification" },
      { name: "Selenium (Basic)", level: 75, note: "Automated Web Flows" },
      { name: "Bug Tracking & Reporting", level: 88, note: "Issue Lifecycle Management" },
      { name: "System Validation", level: 90, note: "Requirements Verification" }
    ]
  },
  {
    title: "Programming & Frontend",
    iconName: "Code2",
    description: "Pengembangan antarmuka web modern, interaktif, dan terstruktur",
    skills: [
      { name: "TypeScript", level: 65, note: "Strict Typing & Interfaces" },
      { name: "React", level: 65, note: "Component & Hook Lifecycle" },
      { name: "Tailwind CSS", level: 65, note: "Responsive & Modern Utility" },
      { name: "shadcn/ui", level: 65, note: "Accessible UI Primitives" },
      { name: "JavaScript (ES6+)", level: 65, note: "Modern Standards" },
      { name: "HTML5 & CSS3", level: 90, note: "Semantic Structure & Styling" }
    ]
  },
  {
    title: "Requirements & Modeling",
    iconName: "Workflow",
    description: "Analisis kebutuhan sistem, pemodelan arsitektur, dan alur bisnis",
    skills: [
      { name: "BPMN", level: 90, note: "Business Process Modeling" },
      { name: "Use Case Diagram", level: 92, note: "Actor & Flow Analysis" },
      { name: "ERD (Entity Relationship)", level: 88, note: "Database Architecture" },
      { name: "WBS (Work Breakdown)", level: 86, note: "Project Task Decomposition" }
    ]
  },
  {
    title: "Database & Storage",
    iconName: "Database",
    description: "Pengelolaan data relasional, noSQL, dan basis data vektor",
    skills: [
      { name: "MySQL", level: 85, note: "Relational Queries & Views" },
      { name: "SQL Server", level: 80, note: "Database Operations" },
      { name: "MongoDB", level: 70, note: "Document Store" },
      { name: "Supabase / pgvector", level: 70, note: "Vector Storage & Embeddings" }
    ]
  },
  {
    title: "AI & Quality Evaluation",
    iconName: "BrainCircuit",
    description: "Evaluasi model bahasa, arsitektur RAG, dan metrik akurasi",
    skills: [
      { name: "RAG Architecture", level: 75, note: "Retrieval-Augmented Gen" },
      { name: "RAFT Fine-Tuning", level: 75, note: "Domain Adaptations" },
      { name: "RAGAS Metrics", level: 88, note: "6 Quality Dimensions" },
      { name: "Embedding & Vector Search", level: 75, note: "Similarity Retrieval" }
    ]
  },
  {
    title: "Tools & Collaboration",
    iconName: "Wrench",
    description: "Perangkat perancangan, dokumentasi, pengujian, dan manajemen proyek",
    skills: [
      { name: "Figma & Balsamiq", level: 90, note: "UI/UX & Wireframing" },
      { name: "Postman", level: 85, note: "API Testing & Inspection" },
      { name: "Jira & Trello", level: 88, note: "Agile Task Management" },
      { name: "Git & GitHub", level: 86, note: "Version Control" },
      { name: "Bizagi & StarUML", level: 85, note: "System Modeling" },
      { name: "Jupyter Notebook & Tableau", level: 80, note: "Data Analysis" }
    ]
  }
];
