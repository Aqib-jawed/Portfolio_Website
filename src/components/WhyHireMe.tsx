import "./styles/WhyHireMe.css";
import { useEffect, useRef } from "react";

const reasons = [
  {
    num: "01",
    title: "CS Fundamentals",
    desc: "Strong foundation in DSA, OOP, DBMS, OS, and system design — not just syntax, but deep engineering thinking.",
  },
  {
    num: "02",
    title: "Production-Ready Code",
    desc: "Experience building and deploying real full-stack applications with CI/CD, testing, and scalable architecture.",
  },
  {
    num: "03",
    title: "AI Integration",
    desc: "Hands-on with OpenAI APIs, LLM-powered microservices, and modern AI-integrated application development.",
  },
  {
    num: "04",
    title: "Scalable Architecture",
    desc: "Focus on clean code, modular design, REST APIs, microservices patterns, and cloud-native deployments.",
  },
  {
    num: "05",
    title: "Problem Solver",
    desc: "Active DSA practitioner, competitive programmer, and systems thinker who breaks down complex problems methodically.",
  },
  {
    num: "06",
    title: "Leadership & Impact",
    desc: "Led 35+ technical events, managed cross-functional teams, and coordinated national-level innovation programs.",
  },
];

const WhyHireMe = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".whm-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("whm-card-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="whm-section section-container" id="why-hire-me">
      <div className="whm-container">
        <h2>
          Why <span>Hire Me</span>
        </h2>
        <div className="whm-grid" ref={cardsRef}>
          {reasons.map((r, i) => (
            <div className="whm-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="whm-card-inner">
                <span className="whm-num">{r.num}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
              <div className="whm-card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
