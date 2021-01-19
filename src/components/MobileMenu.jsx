import React, { useContext, useEffect, useState } from "react";

// Context
import { Context } from "../context/globalContext";

// Hooks
import useScrollPosition from "../hooks/useScrollPosition";

// Utils
import checkScrolledSection from "../utils/checkScrolledSection";

// Icons
import {
  Send as Contact,
  Tool as Skills,
  User as About,
  Briefcase as Projects,
  Home,
} from "@styled-icons/feather";

const MobileMenu = ({ scroll }) => {
  const [currentSection, setCurrentSection] = useState("");
  const [state, dispatch] = useContext(Context);
  const scrollPosition = useScrollPosition();

  const toggleMenu = () => {
    dispatch({
      isMenuOpen: !state.isMenuOpen,
    });
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      let section = checkScrolledSection(scrollPosition);
      setCurrentSection(section);
    }
    return function cleanup() {
      isMounted = false;
    };
  }, [scrollPosition]);

  return (
    <header>
      <div className="logo">PS</div>

      <div
        className={state.isMenuOpen ? "open menu-toggler" : "menu-toggler"}
        onClick={toggleMenu}
      >
        <div className="bar half start"></div>
        <div className="bar"></div>
        <div className="bar half end"></div>
      </div>

      <nav className={state.isMenuOpen ? "mobile-nav open" : "mobile-nav"}>
        <div
          className={currentSection === "home" ? "active" : ""}
          onClick={scroll.home}
        >
          <Home className="mobile-nav-icon" />
          <span>home</span>
        </div>
        <div
          className={currentSection === "about" ? "active" : ""}
          onClick={scroll.about}
        >
          <About className="mobile-nav-icon" />
          <span>about</span>
        </div>
        <div
          className={currentSection === "skills" ? "active" : ""}
          onClick={scroll.skills}
        >
          <Skills className="mobile-nav-icon" />
          <span>skills</span>
        </div>
        <div
          className={currentSection === "projects" ? "active" : ""}
          onClick={scroll.projects}
        >
          <Projects className="mobile-nav-icon" />
          <span>projects</span>
        </div>
        <div
          className={currentSection === "contact" ? "active" : ""}
          onClick={scroll.contact}
        >
          <Contact className="mobile-nav-icon" />
          <span>contact</span>
        </div>
      </nav>
    </header>
  );
};

export default MobileMenu;
