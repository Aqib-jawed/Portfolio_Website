import "./styles/BuildingInPublic.css";

const BuildingInPublic = () => {
  return (
    <div className="bip-section" id="building">
      <div className="bip-container section-container">
        <div className="bip-label">Building in Public</div>
        <p className="bip-text">
          I actively explore modern software engineering, AI applications, and
          scalable web systems while continuously improving my development
          workflow, architecture knowledge, and product-building skills.
        </p>
        <div className="bip-indicators">
          <div className="bip-dot bip-dot-active"></div>
          <span>Always shipping</span>
          <div className="bip-dot bip-dot-active"></div>
          <span>Always learning</span>
          <div className="bip-dot bip-dot-active"></div>
          <span>Always building</span>
        </div>
      </div>
    </div>
  );
};

export default BuildingInPublic;
