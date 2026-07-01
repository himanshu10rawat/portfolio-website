export const PROFILE = {
  name: "Himanshu Rawat",
  role: "Frontend Developer",
  tagline: "React.js & Next.js · Immediate Joiner",
  location: "Ghaziabad, UP, India",
  email: "himanshu.rawat8285@gmail.com",
  phone: "+91-9217656745",
  github: "https://github.com/himanshu10rawat/",
  linkedin: "https://www.linkedin.com/in/himanshu-rawat-2b3188182/",
  summary:
    "Frontend Developer with 5+ years of experience building scalable, high-performance web applications using React.js and Next.js. Skilled in reusable component architecture, state management, authentication flows, admin dashboards, and data-heavy interfaces — with a track record of improving performance by 25–35% across food-tech, influencer marketing, fintech/admin tooling, and large-scale consultation platforms.",
};

export const SKILLS = [
  {
    group: "frontend",
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "TypeScript",
      "Angular",
    ],
  },
  {
    group: "state-and-api",
    label: "State & API",
    items: ["Redux Toolkit", "Context API", "REST APIs", "Axios", "JWT Auth"],
  },
  {
    group: "styling-ui",
    label: "Styling & UI",
    items: [
      "Tailwind CSS",
      "Bootstrap",
      "SCSS",
      "Responsive Design",
      "Mobile-First UI",
      "SEO",
    ],
  },
  {
    group: "tooling",
    label: "Dev Tools",
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Lazy Loading",
      "Code Splitting",
      "Agile/Scrum",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "VegEase (EGreens Farm)",
    period: "Feb 2025 — Jun 2026",
    location: "Gurgaon, India",
    current: true,
    points: [
      "Developed scalable React.js applications for customer, rider, and admin platforms on a production food-tech environment.",
      "Improved application performance by ~25% through optimized rendering; reduced UI load time by ~30% using lazy loading and modular structure.",
      "Built Accounting Software and Inventory Management System (IMS) modules; delivered the VegEase Admin Panel with reusable component architecture.",
      "Integrated REST APIs and collaborated cross-functionally to ship production-ready features on schedule.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Savin Communication Pvt. Ltd.",
    period: "May 2024 — Jan 2025",
    location: "Noida, India",
    current: false,
    points: [
      "Built the CA Login Admin Panel with JWT-based auth and full data management (search, filter, pagination), improving workflow efficiency by ~30%.",
      "Developed the WTI Space influencer registration platform with role-based access and custom pricing, increasing engagement by ~30%.",
      "Improved development efficiency by ~35% through reusable component systems; boosted rendering performance by ~20% across applications.",
      "Delivered the EOTO platform from the ground up and a yoga-focused business website.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "AstroTalk",
    period: "Jan 2021 — Apr 2024",
    location: "Noida, India",
    current: false,
    points: [
      "Built and scaled the AstroTalk web application using Angular for a high-traffic platform serving millions of users.",
      "Improved application performance by ~30% and cut page load time by ~35% through SEO optimization and code splitting.",
      "Developed reusable, component-based modules improving page structure and discoverability.",
      "Translated UI/UX requirements into performant, accessible, responsive components alongside design and product teams.",
    ],
  },
];

export const INDUSTRY_PROJECTS = [
  {
    name: "VegEase App",
    tag: "Food-Tech · Consumer Platform",
    link: "Play Store",
    url: "https://play.google.com/store/apps/details?id=com.vegease&hl=en_IN&gl=US",
    desc: "React.js components powering product browsing, order management, and admin workflows for the live consumer app.",
    stack: ["React.js", "Next.js", "REST APIs", "Lazy Loading"],
  },
  {
    name: "WTI Space",
    tag: "Influencer Registration Platform",
    link: "wtispace.com",
    url: "https://wtispace.com",
    desc: "Role-based influencer and brand registration platform with custom pricing plans and plan-gated content access.",
    stack: ["React.js", "REST APIs", "RBAC", "Lazy Loading"],
  },
  {
    name: "AstroTalk",
    tag: "Online Consultation Platform",
    link: "astrotalk.com",
    url: "https://astrotalk.com",
    desc: "Scalable Angular frontend for millions of users, with SEO and performance improvements to page discoverability.",
    stack: ["Angular", "SEO", "Performance"],
  },
];

export const PERSONAL_PROJECTS = [
  {
    name: "Instagram Clone",
    tag: "Full-Stack MERN App",
    link: "instagram-mern-nu.vercel.app",
    url: "https://instagram-mern-nu.vercel.app",
    desc: "Social app with auth, posts, likes, comments, saved posts, profiles and protected routes. Redux Toolkit + JWT auth, deployed on Vercel.",
    stack: ["MERN", "Redux Toolkit", "JWT"],
  },
  {
    name: "Facebook Clone",
    tag: "Social Media Platform",
    link: "fakebook-7060c.web.app",
    url: "https://fakebook-7060c.web.app",
    desc: "React.js app replicating core Facebook UI — feeds, profiles, posts — using IndexedDB for client-side persistence with no backend.",
    stack: ["React.js", "IndexedDB", "Firebase Hosting"],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Maharaja Agrasen Himalayan Garhwal University",
    period: "2021 — 2023",
  },
  {
    degree: "Bachelor of Commerce (B.Com)",
    school: "University of Delhi",
    period: "2016 — 2020",
  },
];

export const NAV = [
  { id: "home", label: "hero.jsx" },
  { id: "about", label: "about.jsx" },
  { id: "skills", label: "skills.json" },
  { id: "experience", label: "experience.log" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact.js" },
];
