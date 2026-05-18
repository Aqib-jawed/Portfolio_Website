import "./styles/Leadership.css";
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Leadership = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.leadership-card', {
      opacity: 0,
      scale: 0.95,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.leadership-card',
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <div className="leadership-section section-container" id="leadership" ref={containerRef}>
      <div className="leadership-container">
        <h2>
          Leadership <span>& Impact</span>
        </h2>
        <div className="leadership-card">
          <div className="leadership-card-glow"></div>
          <div className="leadership-header">
            <div className="leadership-badge">Team Lead</div>
            <h3>Entrepreneur Club</h3>
            <div className="leadership-meta">
              <span>
                <FaCalendarAlt /> Nov 2024 – Present
              </span>
              <span>
                <FaMapMarkerAlt /> GITAM University, Visakhapatnam
              </span>
            </div>
          </div>
          <p className="leadership-desc">
            Led 35+ campus & Outreach technical events across multiple portfolios
            engaging 3000+ students while managing cross-functional
            logistics, stakeholder communication, and technical coordination for
            high-stakes programs — directly transferable skills to Agile
            engineering team environments.
          </p>
          <div className="leadership-stats">
            <div className="leadership-stat">
              <FaUsers />
              <div>
                <span className="stat-value">3,000+</span>
                <span className="stat-label">Students Engaged</span>
              </div>
            </div>
            <div className="leadership-stat">
              <FaCalendarAlt />
              <div>
                <span className="stat-value">35+</span>
                <span className="stat-label">Events Led</span>
              </div>
            </div>
            <div className="leadership-stat">
              <FaMapMarkerAlt />
              <div>
                <span className="stat-value">29</span>
                <span className="stat-label">States Reached</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
