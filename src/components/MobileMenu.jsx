import React, { useContext } from "react";

// Context
import { Context } from "../context/globalContext";

// Icons
import {
  Send as Contact,
  Tool as Skills,
  User as About,
  Briefcase as Projects,
  Home,
} from "@styled-icons/feather";

const MobileMenu = ({ scroll, currentSection }) => {
  const [state, dispatch] = useContext(Context);

  const toggleMenu = () => {
    dispatch({
      isMenuOpen: !state.isMenuOpen,
    });
  };

  const handleIconClick = callback => {
    callback();
    toggleMenu();
  };

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
          onClick={() => handleIconClick(scroll.home)}
        >
          <Home className="mobile-nav-icon" />
          <span>home</span>
        </div>
        <div
          className={currentSection === "about" ? "active" : ""}
          onClick={() => handleIconClick(scroll.about)}
        >
          <About className="mobile-nav-icon" />
          <span>about</span>
        </div>
        <div
          className={currentSection === "skills" ? "active" : ""}
          onClick={() => handleIconClick(scroll.skills)}
        >
          <Skills className="mobile-nav-icon" />
          <span>skills</span>
        </div>
        <div
          className={currentSection === "projects" ? "active" : ""}
          onClick={() => handleIconClick(scroll.projects)}
        >
          <Projects className="mobile-nav-icon" />
          <span>projects</span>
        </div>
        <div
          className={currentSection === "contact" ? "active" : ""}
          onClick={() => handleIconClick(scroll.contact)}
        >
          <Contact className="mobile-nav-icon" />
          <span>contact</span>
        </div>
      </nav>
    </header>
  );
};

export default MobileMenu;
