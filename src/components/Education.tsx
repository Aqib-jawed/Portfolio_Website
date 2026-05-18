import "./styles/Education.css";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaFilePdf,
  FaDownload,
  FaEye,
} from "react-icons/fa";

const coursework = [
  "Data Structures & Algorithms",
  "OOP",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Discrete Mathematics",
  "Software Engineering",
];

const Education = () => {
  const cgpa = 8.53;
  const cgpaPercent = (cgpa / 10) * 100;

  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          My <span>Education</span>
        </h2>

        <div className="education-content">
          {/* Main Education Card */}
          <div className="education-card">
            <div className="education-card-header">
              <div className="education-icon">
                <FaUniversity />
              </div>

              <div className="education-header-text">
                <h3>GITAM University</h3>
                <p className="education-location">
                  Visakhapatnam, Andhra Pradesh
                </p>
              </div>
            </div>

            <div className="education-card-body">
              <div className="education-details">
                <div className="education-detail-item">
                  <FaGraduationCap />
                  <span>
                    B.Tech in Computer Science and Engineering
                  </span>
                </div>

                <div className="education-detail-item">
                  <FaCalendarAlt />
                  <span>Aug 2023 – May 2027</span>
                </div>
              </div>

              {/* CGPA Gauge */}
              <div className="education-cgpa-section">
                <div className="cgpa-gauge">
                  <svg viewBox="0 0 120 120" className="cgpa-circle">
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      className="cgpa-bg"
                    />

                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      className="cgpa-fill"
                      style={{
                        strokeDasharray: `${2 * Math.PI * 52}`,
                        strokeDashoffset: `${
                          2 * Math.PI * 52 * (1 - cgpaPercent / 100)
                        }`,
                      }}
                    />
                  </svg>

                  <div className="cgpa-text">
                    <span className="cgpa-value">{cgpa}</span>
                    <span className="cgpa-label"> / 10</span>
                  </div>
                </div>

                <p className="cgpa-subtitle">CGPA</p>
              </div>
            </div>

            {/* Coursework */}
            <div className="education-coursework">
              <h4>Relevant Coursework</h4>

              <div className="coursework-tags">
                {coursework.map((course, i) => (
                  <span className="coursework-tag" key={i}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Grade Card PDF Card */}
          <div className="education-card grade-card-wrapper">
            <div className="education-card-header">
              <div className="education-icon grade-card-icon">
                <FaFilePdf />
              </div>

              <div className="education-header-text">
                <h3>B.Tech Grade Card</h3>
                <p className="education-location">
                  GITAM University — Official Transcript
                </p>
              </div>
            </div>

            {/* Preview Image */}
            <div className="grade-card-preview">
              <div className="grade-card-img-wrap">
                <img
                  src="/Grade_Card_preview.png"
                  alt="Grade Card Preview"
                  className="grade-card-img"
                />

                {/* Overlay Buttons */}
                <div className="grade-card-overlay">
                  <a
                    href="/Grade_Card.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grade-card-action"
                    data-cursor="disable"
                  >
                    <FaEye />
                    <span>View</span>
                  </a>

                  <a
                    href="/Grade_Card.pdf"
                    download="Aqib_Grade_Card.pdf"
                    className="grade-card-action"
                    data-cursor="disable"
                  >
                    <FaDownload />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="grade-card-footer">
              <span className="grade-badge">
                CGPA: {cgpa}/10
              </span>

              <span className="grade-badge grade-badge-year">
                2023–2027
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;