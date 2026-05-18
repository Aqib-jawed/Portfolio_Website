import "./styles/TechnicalSkills.css";
import { 
  FaJava, FaPython, FaReact, FaNodeJs, FaAws, FaDocker, 
  FaGithub, FaCode, FaServer, FaDatabase, FaTools
} from "react-icons/fa";
import { 
  SiTypescript, SiJavascript, SiC, SiNextdotjs, SiTailwindcss, 
  SiFramer, SiExpress, SiFastapi, SiPostgresql, SiMongodb, 
  SiSupabase, SiVercel, SiPostman
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

const categories = [
  {
    name: "Languages",
    color: "#f97316",
    icon: <FaCode />,
    skills: [
      { name: "Java", icon: <FaJava color="#f89820" /> },
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "SQL", icon: <TbSql color="#4479A1" /> },
      { name: "C", icon: <SiC color="#A8B9CC" /> },
    ],
  },
  {
    name: "Frontend",
    color: "#a855f7",
    icon: <FaReact />,
    skills: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "Framer", icon: <SiFramer color="#0055FF" /> },
    ],
  },
  {
    name: "Backend",
    color: "#22d3ee",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express", icon: <SiExpress color="#ffffff" /> },
      { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
      { name: "REST APIs", icon: <FaServer color="#aaaaaa" /> },
    ],
  },
  {
    name: "Databases",
    color: "#4ade80",
    icon: <FaDatabase />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> },
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
    ],
  },
  {
    name: "Tools",
    color: "#fb7185",
    icon: <FaTools />,
    skills: [
      { name: "Git/GitHub", icon: <FaGithub color="#ffffff" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
    ],
  },
  {
    name: "Core",
    color: "#fbbf24",
    icon: <FaCode />,
    skills: [
      { name: "DSA", icon: <FaCode color="#fbbf24" /> },
      { name: "OOP", icon: <FaCode color="#fbbf24" /> },
      { name: "System Design", icon: <FaServer color="#fbbf24" /> },
      { name: "Microservices", icon: <FaDocker color="#fbbf24" /> },
    ],
  },
];

const TechnicalSkills = () => {
  return (
    <div className="ts-section section-container" id="skills">
      <div className="ts-container">
        <h2>
          Technical <span>Skills</span>
        </h2>
        <div className="cubes-grid">
          {categories.map((cat, i) => (
            <div className="cube-wrapper" key={i}>
              <div className="cube">
                {[0, 1, 2, 3, 4, 5].map((faceIndex) => {
                  const skill = cat.skills[faceIndex % cat.skills.length];
                  return (
                    <div className={`cube-face face-${faceIndex + 1}`} key={faceIndex}>
                      <div className="cube-face-content">
                        <div className="cube-icon" style={{ color: cat.color }}>
                          {skill.icon}
                        </div>
                        <div className="cube-name" style={{ color: cat.color }}>
                          {skill.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h3 className="cube-label" style={{ color: cat.color }}>{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
