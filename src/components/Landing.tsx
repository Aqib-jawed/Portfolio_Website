import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { TbDownload } from "react-icons/tb";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              AQIB
              <br />
              <span>JAWED</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Passionate</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">SDE Intern</div>
              <div className="landing-h2-2">Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">SDE Intern</div>
            </h2>
          </div>
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="hero-resume-btn"
            data-cursor="disable"
          >
            <span className="hero-resume-text">Download Resume</span>
            <span className="hero-resume-icon">
              <TbDownload />
            </span>
          </a>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
