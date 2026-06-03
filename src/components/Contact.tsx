import { MdCopyright, MdEmail, MdPhone } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";
import "./styles/Contact.css";

const socials = [
  {
    id: "github",
    label: "GitHub",
    handle: "@Aqib-jawed",
    url: "https://github.com/Aqib-jawed",
    icon: <FaGithub />,
    color: "#e0e0e0",
    glow: "rgba(224,224,224,0.18)",
    bg: "rgba(224,224,224,0.06)",
    desc: "Open-source projects & repos",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Aqib Jawed",
    url: "https://linkedin.com/in/aqib-jawed-6ta",
    icon: <FaLinkedin />,
    color: "#0a66c2",
    glow: "rgba(10,102,194,0.25)",
    bg: "rgba(10,102,194,0.08)",
    desc: "Professional network & experience",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@aqib_jawed",
    url: "https://www.instagram.com/_.akki_07/",
    icon: <FaInstagram />,
    color: "#e1306c",
    glow: "rgba(225,48,108,0.25)",
    bg: "rgba(225,48,108,0.08)",
    desc: "Behind the scenes & daily life",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    handle: "GV2023006524",
    url: "https://leetcode.com/u/GV2023006524/",
    icon: <SiLeetcode />,
    color: "#ffa116",
    glow: "rgba(255,161,22,0.25)",
    bg: "rgba(255,161,22,0.08)",
    desc: "DSA practice & problem solving",
  },
];

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">

        {/* ── Big heading ── */}
        <div className="contact-heading">
          <span className="contact-eyebrow">Let's connect</span>
          <h2>
            Get In <span>Touch</span>
          </h2>
          <p className="contact-sub">
            Open to collaborations, internships, and interesting conversations.
            <br />
            Drop a message — I usually reply within 24 hours.
          </p>
        </div>

        {/* ── Direct contact row ── */}
        <div className="contact-direct-row">
          <a
            href="mailto:ajawed.work@gmail.com"
            className="contact-direct-card"
            data-cursor="disable"
            id="contact-email"
          >
            <span className="contact-direct-icon email-icon">
              <MdEmail />
            </span>
            <div>
              <p className="contact-direct-label">Email</p>
              <p className="contact-direct-value">ajawed.work@gmail.com</p>
            </div>
            <HiArrowUpRight className="contact-arrow" />
          </a>

          <a
            href="tel:+919110131657"
            className="contact-direct-card"
            data-cursor="disable"
            id="contact-phone"
          >
            <span className="contact-direct-icon phone-icon">
              <MdPhone />
            </span>
            <div>
              <p className="contact-direct-label">Phone</p>
              <p className="contact-direct-value">+91 91101 31657</p>
            </div>
            <HiArrowUpRight className="contact-arrow" />
          </a>
        </div>

        {/* ── Social grid ── */}
        <div className="contact-socials-heading">
          <span>Find me on</span>
        </div>
        <div className="contact-socials-grid">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card"
              data-cursor="disable"
              id={`contact-${s.id}`}
              style={
                {
                  "--social-color": s.color,
                  "--social-glow": s.glow,
                  "--social-bg": s.bg,
                } as React.CSSProperties
              }
            >
              {/* Glow blob */}
              <span className="social-glow-blob" />

              {/* Icon */}
              <span className="social-icon-wrap">
                {s.icon}
              </span>

              {/* Text */}
              <div className="social-text">
                <p className="social-platform">{s.label}</p>
                <p className="social-handle">{s.handle}</p>
                <p className="social-desc">{s.desc}</p>
              </div>

              {/* Arrow */}
              <HiArrowUpRight className="social-arrow" />
            </a>
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="contact-footer">
          <div className="contact-footer-line" />
          <div className="contact-footer-inner">
            <p className="contact-footer-credit">
              Designed & Developed by <span>Aqib Jawed</span>
            </p>
            <p className="contact-footer-copy">
              <MdCopyright /> 2025 · Built with React & TypeScript
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
