import "./styles/CurrentlyExploring.css";
import {
  FaNetworkWired,
  FaBrain,
  FaCloud,
  FaServer,
  FaChartLine,
  FaCubes,
} from "react-icons/fa";

const explorations = [
  {
    icon: <FaNetworkWired />,
    title: "System Design & Distributed Systems",
    desc: "Scalable architectures, load balancing, caching strategies, and fault-tolerant distributed systems.",
  },
  {
    icon: <FaBrain />,
    title: "AI Agents & LLM Applications",
    desc: "Building intelligent agents, RAG pipelines, prompt engineering, and production LLM integrations.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Infrastructure & DevOps",
    desc: "AWS services, containerization, infrastructure as code, and automated deployment pipelines.",
  },
  {
    icon: <FaServer />,
    title: "Scalable Backend Architectures",
    desc: "High-throughput API design, database optimization, connection pooling, and async processing.",
  },
  {
    icon: <FaChartLine />,
    title: "Advanced DSA & Competitive Programming",
    desc: "Graph algorithms, dynamic programming, segment trees, and optimized problem-solving patterns.",
  },
  {
    icon: <FaCubes />,
    title: "Microservices & Event-Driven Systems",
    desc: "Service decomposition, message queues, event sourcing, and polyglot persistence patterns.",
  },
];

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CurrentlyExploring = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.ce-card') as HTMLElement[];
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
    <div className="ce-section section-container" id="exploring" ref={containerRef}>
      <div className="ce-container">
        <h2>
          Currently <span>Exploring</span>
        </h2>
        <div className="ce-grid">
          {explorations.map((item, i) => (
            <div className="ce-card" key={i}>
              <div className="ce-icon-wrap">
                <div className="ce-pulse"></div>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="ce-scan-line"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentlyExploring;
