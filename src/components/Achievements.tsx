import "./styles/Achievements.css";
import { FaTrophy, FaCode, FaUsers, FaRocket, FaLightbulb } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const achievements = [
  {
    icon: <FaTrophy />,
    iconClass: "achievement-icon-gold",
    title: "Best Team Lead Award",
    year: "2025 – 26",
    description:
      "Recognized at GITAM University for leading Smart India Hackathon activities with 350+ teams, 2,500+ attendees, and delivering measurable impact across 35+ technical events.",
  },
  {
    icon: <FaLightbulb />,
    iconClass: "achievement-icon-blue",
    title: "SmartIDEAthon 2025 Coordinator",
    year: "2025",
    description:
      "Coordinated GITAM's flagship national innovation competition in collaboration with Startup India, Invest India, and international partners — 5,000+ startup ideas, 100+ pitches, 50+ jury members, participants from 29 states.",
  },
  {
    icon: <FaUsers />,
    iconClass: "achievement-icon-green",
    title: "35+ Technical Events",
    year: "2025 – 26",
    description:
      "Managed and led 35+ campus technical events across 4 portfolios, engaging 2,000+ students with workshops, hackathons, and innovation challenges.",
  },
  {
    icon: <FaRocket />,
    iconClass: "achievement-icon-purple",
    title: "Production-Ready Applications",
    year: "Active",
    description:
      "Built and deployed multiple production-ready full-stack applications using React, Next.js, Node.js, FastAPI, and cloud-native tools — each solving real-world problems.",
  },
  {
    icon: <FaCode />,
    iconClass: "achievement-icon-purple",
    title: "Competitive Programming",
    year: "Active",
    description:
      "Active DSA practitioner on LeetCode — solving problems in Java and Python across arrays, trees, graphs, and dynamic programming.",
    link: "https://leetcode.com/u/GV2023006524/",
    linkText: "LeetCode Profile",
  },
];

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.achievement-card') as HTMLElement[];
    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        }
      });
    });
  }, { scope: containerRef });

  return (
    <div className="achievements-section section-container" id="achievements" ref={containerRef}>
      <div className="achievements-container">
        <h2>
          My <span>Achievements</span>
        </h2>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div 
              className="achievement-card" 
              key={index}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -12;
                const rotateY = ((x - centerX) / centerX) * 12;
                card.style.setProperty('--rx', `${rotateX}deg`);
                card.style.setProperty('--ry', `${rotateY}deg`);
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.setProperty('--rx', `0deg`);
                card.style.setProperty('--ry', `0deg`);
              }}
            >
              <div className="achievement-glow"></div>
              <div className={`achievement-icon ${item.iconClass}`}>
                {item.icon}
              </div>
              <div className="achievement-content">
                <h3>{item.title}</h3>
                <span className="achievement-year">{item.year}</span>
                <p>{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="achievement-link"
                    data-cursor="disable"
                  >
                    {item.linkText} <MdArrowOutward />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
