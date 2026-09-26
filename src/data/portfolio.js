// ============================================================
// Centralized portfolio content.
// Edit this file to update anything shown on the site —
// no component files need to change.
// ============================================================

export const personalInfo = {
  name: "Raj Karan",
  initials: "RK.DEV",
  title: "Full-Stack Developer",
  tagline: "Building fast, reliable web & mobile experiences.",
  roles: [
    "Full-Stack Developer",
    "MERN Developer",
    "React Native Developer",
    "Freelance Developer",
  ],
  summary:
    "Passionate full-stack developer with strong skills in JavaScript and modern web technologies. Experienced in building scalable web and mobile applications, UI/UX design, and real-world projects across the MERN stack and React Native. A self-driven learner with internship and freelance experience.",
  location: "India",
  availability: "Available for freelance work",
  email: "rajkaranprem@outlook.com",
  phone: "+91 9962313298",
  profileImage: "/images/Aboutme.jpg",
  resumeUrl: "/resume.pdf",
};

export const socialLinks = [
  {
    label: "GitHub",
    username: "rkverse",
    url: "https://github.com/rkverse",
    icon: "github",
  },
  {
    label: "LinkedIn",
    username: "rajkaran7",
    url: "https://linkedin.com/in/rajkaran7",
    icon: "linkedin",
  },
  {
    label: "Email",
    username: "rajkaranprem@outlook.com",
    url: "mailto:rajkaranprem@outlook.com",
    icon: "mail",
  },
];

export const about = {
  heading: "About",
  paragraphs: [
    "I'm Raj Karan, a full-stack developer who enjoys turning ideas into scalable, production-ready products. My work spans the MERN stack and React Native, with a strong focus on clean UI/UX and real-world usability.",
    "I've delivered ERP-style systems, e-commerce platforms, and e-learning modules for clients and teams — combining technical execution with clear communication and dependable delivery.",
    "Currently pursuing an MSc in Applied Data Science, I'm expanding into data-driven engineering while continuing to freelance and ship full-stack products.",
  ],
  skills: [
    { name: "JavaScript", category: "Language" },
    { name: "Java", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "React JS", category: "Frontend" },
    { name: "React Native", category: "Mobile" },
    { name: "Node JS", category: "Backend" },
    { name: "Express JS", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "Mongo DB", category: "DataBase" },
    { name: "SQL", category: "DataBase" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "Firebase", category: "Backend" },
    { name: "Git", category: "Tooling" },
    { name: "Render", category: "Deployment" },
    { name: "Vercel", category: "Deployment" },
    { name: "Hostinger VPS", category: "Deployment" },
  ],
  education: [
    {
      degree: "MSc Applied Data Science",
      institution: "SRM RMP",
      period: "2025 — 2027",
      gpa: "8.2 / 10.0",
    },
    {
      degree: "BCA",
      institution: "Guru Nanak College",
      period: "2022 — 2025",
      gpa: "7.2 / 10.0",
    },
  ],
};

export const experience = [
  {
    role: "Developer",
    company: "Cookie Freelancing Agency",
    period: "Jan 2025 — Jun 2026",
    type: "Agency",
    description:
      "Joined Cookie Freelancing agency and successfully delivered multiple client projects in web and app development, combining technical execution with client coordination and team collaboration.",
    highlights: [
      "Delivered multiple client projects across web and app development",
      "Coordinated directly with clients while collaborating within a team",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "Jan 2025 — Present",
    type: "Freelance",
    description:
      "Completed freelance projects involving web and app development for diverse clients, known for meeting deadlines, clear communication, and client-focused execution.",
    highlights: [
      "Consistently met project deadlines across diverse client work",
      "Maintained clear, client-focused communication throughout delivery",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Altruisty",
    period: "Oct 2024 — Jan 2025",
    type: "Internship",
    description:
      "Worked as a Full Stack Developer Intern at Altruisty, developing and improving key modules of an e-learning platform. Collaborated with the team to design, implement, and optimize full-stack features.",
    highlights: [
      "Built and improved key modules of a live e-learning platform",
      "Collaborated on designing, implementing, and optimizing full-stack features",
    ],
  },
];

export const projects = [
  {
    title: "ERP Application for a Reputed CBSE Institute",
    description:
      "CRM built for SAP use cases, supporting student, admin, and teacher portals. Streamlined academic and administrative workflows through role-based access.",
    image: "/images/Sap_app.jpeg",
    tags: ["React JS", "Express JS", "Role-based Access", "ERP/CRM"],
    link: "https://play.google.com/store/apps/details?id=com.sampathacademy.sapscholar",
    featured: true,
  },
  {
    title: "POS and Billing Software for SRM Ramapuram",
    description:
      "A POS and billing system for SRM Ramapuram, designed to manage transactions, inventory, and reporting efficiently. Built with a focus on speed and reliability.",
    image: "/images/srm_project.jpg",
    tags: ["React JS", "Express JS", "UI/UX Design"],
    link: "https://srm-ddp-management-software.onrender.com/",
    featured: false,
  },
  {
    title: "E-commerce for an RC Toy Brand",
    description:
      "A real-world e-commerce website built for an RC toy company to expand their online presence with new ideas at an affordable price — a serverless, user-friendly shopping experience.",
    image: "/images/Torque_toyzz_mobile.png",
    tags: ["React JS", "E-commerce", "Serverless", "Firebase"],
    link: "https://www.torquetoyzz.com/",
    featured: true,
  },
];

export const blogs = [
  {
    title: "How I Started My Developer Journey",
    excerpt:
      "From writing my first lines of code to building real-world projects, here's how curiosity turned into a journey of learning, building, and growing as a developer.",
    image: "/images/Design-4.jpeg",
    date: "2026-07-18",
    readTime: "6 min read",
    url: "#",
    featured: true,
    tags: ["Developer", "Journey", "Programming"],
    content: [
      "Every developer has a starting point. For me, it started with curiosity — wanting to understand how websites and applications actually worked behind the screen. At first, programming felt confusing, but the idea of creating something from just a few lines of code kept me interested.",
      "I started with the fundamentals: HTML, CSS, and JavaScript. Building small projects helped me understand that development wasn't just about writing code; it was about solving problems, experimenting with ideas, and turning concepts into something people could actually use.",
      "As I became more comfortable, I started exploring technologies like React, Node.js, databases, and APIs. Each new technology came with its own challenges, but working on real projects taught me far more than simply following tutorials. Bugs, failed builds, and confusing errors became part of the learning process.",
      "Over time, I moved from building simple practice projects to working on larger applications and real-world client projects. That experience taught me the importance of clean code, good UI/UX, teamwork, communication, and building software that solves an actual problem.",
      "My developer journey is still ongoing. There is always another technology to learn, another problem to solve, and another project to build. What started as simple curiosity has grown into a genuine passion for creating useful digital experiences — and I’m excited to see where the journey goes next.",
    ],
  },
  {
    title: "Why Every Business Needs a Website",
    excerpt:
      "A website is more than an online presence — it helps businesses build trust, reach more customers, and turn visitors into real opportunities.",
    image: "/images/Torque_toyzz_tab.jpeg",
    date: "2026-05-29",
    readTime: "4 min read",
    url: "#",
    featured: false,
    tags: ["Business", "Website", "Digital Growth"],
    content: [
      "Today, your website is often the first place potential customers go to learn about your business. A professional website gives people a clear understanding of what you offer and helps establish credibility before they ever contact you.",
      "A social media page alone is not enough. A website gives your business a place you control to showcase your services, products, portfolio, customer reviews, contact details, and everything a potential customer needs to make a decision.",
      "A good website can also work for your business around the clock. Whether someone discovers your business through Google, social media, or a referral, your website can turn that interest into enquiries, bookings, sales, or new customers.",
      "In a competitive market, businesses without a website can easily lose potential customers to competitors who are easier to find and appear more professional online. A well-designed website is therefore not just an expense — it is an investment in your brand and long-term growth.",
    ],
  },

  {
    title: "How I structure front-end projects for speed",
    excerpt:
      "A practical system for organizing components, content, and design tokens so the product stays clean as it scales.",
    image: "/images/Development-2.jpg",
    date: "2026-03-12",
    readTime: "7 min read",
    url: "#",
    featured: false,
    tags: ["Architecture", "Frontend", "Workflow"],
    content: [
      "A front-end codebase scales best when the structure reflects the product story. Grouping data, reusable UI blocks, and page-level sections gives you a system that is easier to navigate and easier to evolve.",
      "That clarity also makes collaboration easier. When the structure is predictable, designers, developers, and stakeholders can reason about the product without needing to inspect every file.",
      "For me, the goal is not complexity; it is repeatability. A clean system reduces friction and gives room for better design decisions later.",
    ],
  },
];

export const contact = {
  heading: "Let's build something",
  subheading:
    "Open to freelance projects and full-stack opportunities. Drop a message and I'll get back to you soon.",
  email: personalInfo.email,
  phone: personalInfo.phone,
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];
