// ============================================================
// Centralized portfolio content.
// Edit this file to update anything shown on the site —
// no component files need to change.
// ============================================================

export const personalInfo = {
  name: 'Raj Karan',
  initials: 'RK',
  title: 'Full-Stack Developer',
  tagline: 'Building fast, reliable web & mobile experiences.',
  roles: ['Full-Stack Developer', 'MERN Developer', 'React Native Developer', 'Freelance Developer'],
  summary:
    "Passionate full-stack developer with strong skills in JavaScript and modern web technologies. Experienced in building scalable web and mobile applications, UI/UX design, and real-world projects across the MERN stack and React Native. A self-driven learner with internship and freelance experience.",
  location: 'India',
  availability: 'Available for freelance work',
  email: 'rajkaranprem@outlook.com',
  phone: '+91 9962313298',
  profileImage: '/images/profile-placeholder.svg',
  resumeUrl: '/resume.pdf',
}

export const socialLinks = [
  { label: 'GitHub', username: 'rkverse', url: 'https://github.com/rkverse', icon: 'github' },
  { label: 'LinkedIn', username: 'rajkaran7', url: 'https://linkedin.com/in/rajkaran7', icon: 'linkedin' },
  { label: 'Email', username: 'rajkaranprem@outlook.com', url: 'mailto:rajkaranprem@outlook.com', icon: 'mail' },
]

export const about = {
  heading: 'About',
  paragraphs: [
    "I'm Raj Karan, a full-stack developer who enjoys turning ideas into scalable, production-ready products. My work spans the MERN stack and React Native, with a strong focus on clean UI/UX and real-world usability.",
    "I've delivered ERP-style systems, e-commerce platforms, and e-learning modules for clients and teams — combining technical execution with clear communication and dependable delivery.",
    "Currently pursuing an MSc in Applied Data Science, I'm expanding into data-driven engineering while continuing to freelance and ship full-stack products.",
  ],
  skills: [
    { name: 'JavaScript', category: 'Language' },
    { name: 'React JS', category: 'Frontend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Node JS', category: 'Backend' },
    { name: 'Django', category: 'Backend' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Git', category: 'Tooling' },
  ],
  education: [
    {
      degree: 'MSc Applied Data Science',
      institution: 'SRM RMP',
      period: '2025 — 2027',
      gpa: '8.2 / 10.0',
    },
    {
      degree: 'BCA',
      institution: 'Guru Nanak College',
      period: '2022 — 2025',
      gpa: '7.2 / 10.0',
    },
  ],
}

export const experience = [
  {
    role: 'Developer',
    company: 'Cookie Freelancing Agency',
    period: 'Jan 2025 — Jun 2026',
    type: 'Agency',
    description:
      'Joined Cookie Freelancing agency and successfully delivered multiple client projects in web and app development, combining technical execution with client coordination and team collaboration.',
    highlights: [
      'Delivered multiple client projects across web and app development',
      'Coordinated directly with clients while collaborating within a team',
    ],
  },
  {
    role: 'Freelance Developer',
    company: 'Self-employed',
    period: 'Jan 2025 — Present',
    type: 'Freelance',
    description:
      'Completed freelance projects involving web and app development for diverse clients, known for meeting deadlines, clear communication, and client-focused execution.',
    highlights: [
      'Consistently met project deadlines across diverse client work',
      'Maintained clear, client-focused communication throughout delivery',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Altruisty',
    period: 'Oct 2024 — Jan 2025',
    type: 'Internship',
    description:
      'Worked as a Full Stack Developer Intern at Altruisty, developing and improving key modules of an e-learning platform. Collaborated with the team to design, implement, and optimize full-stack features.',
    highlights: [
      'Built and improved key modules of a live e-learning platform',
      'Collaborated on designing, implementing, and optimizing full-stack features',
    ],
  },
]

export const projects = [
  {
    title: 'ERP Application for a Reputed CBSE Institute',
    description:
      'An ERP-style CRM system built for SAP use cases, supporting student, admin, and teacher portals. Streamlined academic and administrative workflows through role-based access and centralized data management.',
    image: '/images/project-erp-placeholder.svg',
    tags: ['React JS', 'Node JS', 'Role-based Access', 'ERP/CRM'],
    link: '#',
    featured: true,
  },
  {
    title: 'Developer Portfolio (Freelance Project)',
    description:
      "A visually appealing developer portfolio built as a freelance project to showcase creative work and brand identity — a responsive, user-friendly experience tailored to the client's design style.",
    image: '/images/project-portfolio-placeholder.svg',
    tags: ['React JS', 'Tailwind CSS', 'UI/UX Design'],
    link: '#',
    featured: false,
  },
  {
    title: 'E-commerce for an RC Toy Brand',
    description:
      'A real-world e-commerce website built for an RC toy company to expand their online presence with new ideas at an affordable price — a serverless, user-friendly shopping experience.',
    image: '/images/project-ecommerce-placeholder.svg',
    tags: ['React JS', 'E-commerce', 'Serverless', 'Firebase'],
    link: '#',
    featured: true,
  },
]

// No blog posts were provided in the source resume. Add entries here
// in the same shape as the example (commented out) to populate the
// Blogs section — it will render automatically once this array is non-empty.
export const blogs = [
  {
    title: 'Post title',
    excerpt: 'Short excerpt describing the post.',
    image: '/images/blog-placeholder.svg',
    date: '2026-01-01',
    readTime: '5 min read',
    url: '#',
  },
]

export const contact = {
  heading: "Let's build something",
  subheading:
    "Open to freelance projects and full-stack opportunities. Drop a message and I'll get back to you soon.",
  email: personalInfo.email,
  phone: personalInfo.phone,
}

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
]
