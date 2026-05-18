import "./styles/EngineeringPhilosophy.css";

const EngineeringPhilosophy = () => {
  return (
    <div className="ep-section" id="philosophy">
      <div className="ep-container section-container">
        <div className="ep-quote-mark">"</div>
        <h2 className="ep-text">
          Great software is built at the intersection of{" "}
          <span className="ep-highlight">performance</span>,{" "}
          <span className="ep-highlight">scalability</span>,{" "}
          <span className="ep-highlight">simplicity</span>, and{" "}
          <span className="ep-highlight">user experience</span>.
        </h2>
        <p className="ep-subtext">
          My goal is not just to write code, but to engineer systems that are
          maintainable, impactful, and production-ready.
        </p>
        <div className="ep-line"></div>
      </div>
    </div>
  );
};

export default EngineeringPhilosophy;
