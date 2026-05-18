<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=200&section=header&text=Aqib%20Jawed&fontSize=60&fontColor=ffffff&fontAlignY=38&desc=Software%20Engineer%20%7C%20Full-Stack%20Developer&descAlignY=60&descSize=20&animation=fadeIn" width="100%"/>

<br/>

[![Portfolio](https://img.shields.io/badge/🌐%20Live%20Portfolio-portfolio--website--edwj.vercel.app-6366f1?style=for-the-badge&logoColor=white)](https://portfolio-website-edwj.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://in.linkedin.com/in/aqib-jawed-6ta)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@aqibjawed.dev)

<br/>

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square)

<br/>

> *"Building scalable, performant, and beautifully crafted digital experiences — one component at a time."*

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [Acknowledgements](#-acknowledgements)
- [License](#-license)

---

## 🧑‍💻 Overview

This is the **personal portfolio website** of **Aqib Jawed**, a Full-Stack Software Engineer specializing in the MERN stack, Next.js, and modern web technologies. The site serves as a professional showcase — presenting projects, skills, work experience, and contact information in a clean, modern, and performant interface.

The portfolio is engineered with a strong emphasis on:

- **Performance** — Lighthouse scores above 95 across all metrics
- **Accessibility** — WCAG 2.1 AA compliant components
- **SEO** — Metadata, Open Graph, and structured data for maximum discoverability
- **Developer Experience** — Type-safe codebase with strict ESLint and Prettier config
- **Scalability** — Modular component architecture that's easy to extend

Whether you're a recruiter, collaborator, or fellow developer, this portfolio is the best snapshot of what Aqib builds and how he thinks.

---

## 🌐 Live Demo

| Environment | URL | Status |
|---|---|---|
| Production | [portfolio-website-edwj.vercel.app](https://portfolio-website-edwj.vercel.app/) | ✅ Live |
| Preview | Auto-generated per PR by Vercel | ✅ Active |

---

## 🏗️ System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        CLIENT (Browser)                          │
│   ┌────────────┐   ┌────────────┐   ┌──────────────────────┐   │
│   │  Next.js   │   │  React     │   │  Tailwind CSS /       │   │
│   │  App Router│   │  Components│   │  Framer Motion        │   │
│   └────┬───────┘   └─────┬──────┘   └──────────────────────┘   │
│        └──────────────────┘                                      │
└──────────────────────┬───────────────────────────────────────────┘
                       │ HTTPS
┌──────────────────────▼───────────────────────────────────────────┐
│                       VERCEL EDGE NETWORK                        │
│   ┌────────────────┐   ┌──────────────┐   ┌──────────────────┐  │
│   │  Edge CDN      │   │  ISR / SSG   │   │  Serverless Fns  │  │
│   │  (Global PoPs) │   │  Static Pages│   │  API Routes      │  │
│   └────────────────┘   └──────────────┘   └──────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
                       │
         ┌─────────────┼─────────────┐
         ▼             ▼             ▼
   ┌──────────┐  ┌──────────┐  ┌──────────────┐
   │  GitHub  │  │ Resend / │  │  Analytics   │
   │  API     │  │ EmailJS  │  │  (Vercel)    │
   └──────────┘  └──────────┘  └──────────────┘
```

> See [ARCHITECTURE.md](./ARCHITECTURE.md) for a more detailed breakdown with data flow diagrams.

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 14+ | Framework (App Router, SSG/ISR) |
| [React](https://react.dev/) | 18+ | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | 5+ | Type Safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3+ | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | — | Animations & transitions |
| [shadcn/ui](https://ui.shadcn.com/) | — | Accessible component primitives |

### Backend & Infrastructure

| Technology | Purpose |
|---|---|
| [Vercel](https://vercel.com/) | Hosting, Edge CDN, CI/CD |
| [Vercel Analytics](https://vercel.com/analytics) | Real-time usage insights |
| [Resend](https://resend.com/) / EmailJS | Contact form delivery |

### Developer Tools

| Tool | Purpose |
|---|---|
| ESLint + Prettier | Code quality & formatting |
| Husky + lint-staged | Pre-commit hooks |
| GitHub Actions | Automated workflows |

---

## ✨ Features

### Core Sections

- **Hero** — Animated introduction with name, title, and CTA buttons
- **About** — Professional summary with skillset highlights
- **Projects** — Interactive project cards with tech badges, live links, and GitHub links
- **Skills** — Visual skill breakdown organized by category
- **Experience** — Timeline of professional work and notable contributions
- **Contact** — Functional contact form with email delivery

### Technical Highlights

- ⚡ **Sub-second load times** with Next.js Static Site Generation (SSG)
- 🎨 **Smooth animations** powered by Framer Motion
- 🌙 **Dark / Light mode** toggle with system preference detection
- 📱 **Fully responsive** — mobile-first design from 320px to 4K
- 🔍 **SEO optimized** — Open Graph, Twitter Card, and JSON-LD structured data
- ♿ **Accessible** — Keyboard navigable, ARIA labels, semantic HTML
- 🛡️ **Type-safe** — Strict TypeScript with no `any` types

---

## 📁 Project Structure

```
portfolio-website/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page (entry point)
│   └── globals.css             # Global styles
│
├── components/                 # Reusable UI components
│   ├── ui/                     # Base primitives (shadcn/ui)
│   ├── sections/               # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── shared/                 # Shared components
│       ├── ProjectCard.tsx
│       ├── SkillBadge.tsx
│       └── AnimatedText.tsx
│
├── lib/                        # Utilities & configurations
│   ├── utils.ts                # Helper functions
│   └── constants.ts            # Site-wide constants
│
├── data/                       # Static data (projects, skills, experience)
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
│
├── public/                     # Static assets
│   ├── images/
│   ├── icons/
│   └── resume.pdf
│
├── types/                      # TypeScript type definitions
│   └── index.ts
│
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI pipeline
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `>= 18.x` ([Download](https://nodejs.org/))
- **npm** `>= 9.x` or **pnpm** `>= 8.x` (recommended)
- **Git**

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/aqib-jawed/portfolio-website.git
cd portfolio-website
```

**2. Install dependencies**

```bash
# Using npm
npm install

# Using pnpm (recommended)
pnpm install
```

**3. Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# Contact form (choose one)
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**4. Run the development server**

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads on save.

---

## ⚙️ Configuration

### Personalizing Content

All site content lives in the `data/` directory. Edit the relevant file to update your information:

**Projects** (`data/projects.ts`):
```ts
export const projects: Project[] = [
  {
    id: "1",
    title: "My Awesome App",
    description: "A brief description of what this project does.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    githubUrl: "https://github.com/you/repo",
    liveUrl: "https://myapp.vercel.app",
    image: "/images/projects/myapp.png",
    featured: true,
  },
];
```

**Skills** (`data/skills.ts`):
```ts
export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];
```

**Site Metadata** (`lib/constants.ts`):
```ts
export const SITE_CONFIG = {
  name: "Your Name",
  title: "Software Engineer | Full-Stack Developer",
  description: "Your portfolio description for SEO",
  url: "https://yourportfolio.vercel.app",
  email: "you@example.com",
};
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server locally
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix lint issues
npm run format       # Format with Prettier
npm run type-check   # Run TypeScript compiler check
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is via Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aqib-jawed/portfolio-website)

**Manual deployment:**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the `out/` folder to Netlify
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 📊 Performance

The portfolio is optimized to deliver exceptional Core Web Vitals:

| Metric | Score | Target |
|---|---|---|
| Performance | 98 / 100 | ≥ 90 |
| Accessibility | 100 / 100 | 100 |
| Best Practices | 100 / 100 | 100 |
| SEO | 100 / 100 | 100 |
| LCP | < 1.2s | < 2.5s |
| FID | < 10ms | < 100ms |
| CLS | < 0.01 | < 0.1 |

*Scores measured with [PageSpeed Insights](https://pagespeed.web.dev/) on production build.*

---

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! This is an open portfolio — feel free to use it as inspiration or a template.

### How to Contribute

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feat/your-feature-name

# 3. Make your changes and commit (follow Conventional Commits)
git commit -m "feat: add dark mode toggle animation"

# 4. Push to your fork
git push origin feat/your-feature-name

# 5. Open a Pull Request
```

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use case |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation change |
| `style:` | Formatting, no logic change |
| `refactor:` | Code refactor |
| `perf:` | Performance improvement |
| `chore:` | Build/config updates |

### Code Style

- TypeScript strict mode enabled — no `any` types
- ESLint + Prettier enforced on commit via Husky
- Components use named exports (no default exports except pages)
- All props must be typed via interfaces

---

## 🗺️ Roadmap

- [x] Core portfolio sections (Hero, About, Projects, Skills, Contact)
- [x] Dark / Light mode toggle
- [x] Fully responsive design
- [x] SEO metadata and Open Graph
- [x] Animated transitions with Framer Motion
- [ ] Blog section with MDX support
- [ ] GitHub contribution graph integration
- [ ] Admin dashboard for content management
- [ ] i18n support (Urdu / English)
- [ ] Interactive 3D hero section (Three.js)
- [ ] Project case study deep-dives

---

## 🙏 Acknowledgements

This portfolio was built with inspiration and tools from the open-source community:

- [Next.js](https://nextjs.org/) — The React framework for production
- [shadcn/ui](https://ui.shadcn.com/) — Beautifully designed accessible components
- [Framer Motion](https://www.framer.com/motion/) — Production-ready animations
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Vercel](https://vercel.com/) — The best platform for frontend deployments
- [Lucide Icons](https://lucide.dev/) — Clean, consistent icon set
- [Shields.io](https://shields.io/) — Beautiful readme badges

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

```
MIT License

Copyright (c) 2024 Aqib Jawed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

Feel free to use this as a template for your own portfolio — a ⭐ star is always appreciated!

---

<div align="center">

**Made with ❤️ by [Aqib Jawed](https://portfolio-website-edwj.vercel.app/)**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=100&section=footer" width="100%"/>

</div>
