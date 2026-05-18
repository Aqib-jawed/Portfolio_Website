import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Education from "./Education";
import Achievements from "./Achievements";
import WhyHireMe from "./WhyHireMe";
import EngineeringPhilosophy from "./EngineeringPhilosophy";
import TechnicalSkills from "./TechnicalSkills";
import CurrentlyExploring from "./CurrentlyExploring";
import Leadership from "./Leadership";
import BuildingInPublic from "./BuildingInPublic";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhyHireMe />
            <WhatIDo />
            <EngineeringPhilosophy />
            <Education />
            <TechnicalSkills />
            <Career />
            <Work />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Achievements />
            <Leadership />
            <CurrentlyExploring />
            <BuildingInPublic />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
