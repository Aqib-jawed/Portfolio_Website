import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    name: "Civic Connect",
    category: "Civic-Tech Platform",
    tools: "React, TypeScript, Supabase, PostgreSQL, Tailwind CSS",
    description:
      "Full-stack civic platform enabling real-time city issue reporting with RBAC, Row Level Security, optimized relational queries, and scalable database architecture.",
    image: "/images/project-civic.webp",
    link: "https://civic-connect-webapp.vercel.app/",
    github: "https://github.com/Aqib-jawed/Civic-Connect",
  },
  {
    num: "02",
    name: "Resume Radar",
    category: "AI Resume Platform",
    tools: "Next.js 14, TypeScript, Supabase, Prisma, Groq API, NextAuth",
    description:
      "AI-powered ATS intelligence platform scoring resumes against any job description with Groq's LLaMA 3.3-70B — Ghost Mode candidate profiling and AI-generated interview prep included.",
    image: "/images/project-resumeradar.webp",
    link: "https://resumeradar-evys.vercel.app/",
    github: "https://github.com/Aqib-jawed/resumeradar",
  },
  {
    num: "03",
    name: "Smart Payment Dashboard",
    category: "Finance Analytics",
    tools: "React.js, Node.js, Express.js, MongoDB, Chart.js, JWT",
    description:
      "MERN-stack fintech dashboard with JWT auth, optimized MongoDB queries, and modular REST APIs for secure transaction tracking and financial visualization.",
    image: "/images/project-payment.webp",
    link: "https://smartpaymentdashboard.vercel.app/",
    github: "https://github.com/Aqib-jawed/Smart-Payment-Dashboard",
  },
  {
    num: "04",
    name: "AI Education Platform",
    category: "LLM-Powered EdTech",
    tools: "Next.js, OpenAI API, Python, FastAPI, Supabase, Tailwind CSS",
    description:
      "AI-powered educational platform integrating OpenAI APIs with FastAPI microservices for intelligent doubt resolution — SSR, async handling, and rate limiting.",
    image: "/images/project-edunet.webp",
    link: "https://progrex-campus.vercel.app/",
    github: "https://github.com/Aqib-jawed/progrex-campus",
  },
  {
    num: "05",
    name: "Meta Forge",
    category: "Developer SEO Tool",
    tools: "Next.js 14, TypeScript, Tailwind CSS",
    description:
      "Zero-backend meta tag generator rendering real-time, pixel-accurate previews for Google, Twitter/X, and Facebook — live SEO character-limit tracking built in.",
    image: "/images/project-metaforge.webp",
    link: "https://metaforge-nine.vercel.app/",
    github: "https://github.com/Aqib-jawed/metaforge",
  },
  {
    num: "06",
    name: "DevPulse AI",
    category: "AI Code Intelligence",
    tools: "Next.js 14, FastAPI, Pinecone, tree-sitter, Redis, BullMQ",
    description:
      "RAG-powered code intelligence platform answering natural-language questions over any GitHub repo with AST-aware chunking and hybrid retrieval at sub-400ms latency.",
    image: "/images/project-devpulse.webp",
    link: "https://dev-pulse-ai-web.vercel.app/",
    github: "https://github.com/Aqib-jawed/DevPulse_AI",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tech Stack</h4>
                <p>{project.tools}</p>
                <p className="work-desc">{project.description}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
