import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger);

const careerData = [
  {
    role: "Software Engineering Intern",
    company: "Micro1",
    year: "May 2026 - Jul 2026",
    desc: [
      "Developed scalable full-stack applications using React.js, Next.js, TypeScript, and Node.js.",
      "Optimized frontend rendering performance through reusable component architecture and efficient state management.",
      "Integrated secure REST APIs following clean architecture and production-grade engineering standards.",
      "Collaborated in a high-performance remote engineering environment with modern development workflows.",
    ],
  },

  {
    role: "Software Developer Intern",
    company: "Velnova",
    year: "May 2025 - Jul 2025",
    desc: [
      "Built responsive and accessibility-focused frontend interfaces for modern web applications.",
      "Worked across Agile sprint cycles and contributed throughout the Software Development Life Cycle (SDLC).",
      "Integrated RESTful APIs and improved application reliability through testing and debugging practices.",
      "Streamlined deployment workflows using Git-based version control and CI/CD pipelines.",
    ],
  },

  {
    role: "Entrepreneur Club — Team Lead",
    company: "GITAM University",
    year: "2024 - Present",
    desc: [
      "Led and coordinated 35+ technical and entrepreneurial events engaging over 2,000 students.",
      "Managed cross-functional event planning, operations, and stakeholder communication.",
      "Coordinated SmartIDEAthon 2025 featuring 5,000+ startup ideas and participation from 29 states.",
      "Supported innovation initiatives, startup networking, and entrepreneurship ecosystem development.",
    ],
  },
];

const Career = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".career-card") as HTMLElement[];

    // Timeline animation
    gsap.to(".career-timeline", {
      maxHeight: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".career-container",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Card reveal animation
    cards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
  }, { scope: containerRef });

  return (
    <div className="career-section section-container" ref={containerRef}>
      <div className="career-container">
        <h2>
          My <span>Experience</span>
        </h2>

        <div className="career-info">
          <div className="career-timeline-wrapper">
            <div className="career-timeline">
              <div className="career-dot"></div>
            </div>
          </div>

          <div className="career-cards">
            {careerData.map((item, index) => (
              <div className="career-card" key={index}>
                <div className="career-card-glow"></div>

                <div className="career-card-content">
                  <div className="career-card-header">
                    <div className="career-role">
                      <h4>{item.role}</h4>
                      <h5>{item.company}</h5>
                    </div>

                    <h3>{item.year}</h3>
                  </div>

                  {/* Professional Point-wise Description */}
                  <ul className="career-description-list">
                    {item.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;