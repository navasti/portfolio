import React, { useContext, useEffect, useState } from "react";

// Context
import { Context } from "../context/globalContext";

// Hooks
import useScrollPosition from "../hooks/useScrollPosition";

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

  const scrollToSection = section => {
    toggleMenu();
    if (section === "home") scroll.home();
    if (section === "about") scroll.about();
    if (section === "skills") scroll.skills();
    if (section === "projects") scroll.projects();
    if (section === "contact") scroll.contact();
  };

  const checkIfCurrentSection = scrollPosition => {
    const body = document.body.getBoundingClientRect().top;
    const about = document.querySelector(".about").getBoundingClientRect();
    const skills = document.querySelector(".skills").getBoundingClientRect();
    const projects = document
      .querySelector(".projects")
      .getBoundingClientRect();
    const contact = document.querySelector(".contact").getBoundingClientRect();

    if (about.top - body - about.height < scrollPosition) {
      setCurrentSection("about");
    } else {
      setCurrentSection("home");
    }
    if (skills.top - body - skills.height < scrollPosition) {
      setCurrentSection("skills");
    }
    if (projects.top - body - projects.height < scrollPosition) {
      setCurrentSection("projects");
    }
    if (contact.top - body - contact.height < scrollPosition) {
      setCurrentSection("contact");
    }
  };

  useEffect(() => {
    checkIfCurrentSection(scrollPosition);
  });

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
          onClick={() => scrollToSection("home")}
        >
          <Home className="mobile-nav-icon" />
          <span>home</span>
        </div>
        <div
          className={currentSection === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          <About className="mobile-nav-icon" />
          <span>about</span>
        </div>
        <div
          className={currentSection === "skills" ? "active" : ""}
          onClick={() => scrollToSection("skills")}
        >
          <Skills className="mobile-nav-icon" />
          <span>skills</span>
        </div>
        <div
          className={currentSection === "projects" ? "active" : ""}
          onClick={() => scrollToSection("projects")}
        >
          <Projects className="mobile-nav-icon" />
          <span>projects</span>
        </div>
        <div
          className={currentSection === "contact" ? "active" : ""}
          onClick={() => scrollToSection("contact")}
        >
          <Contact className="mobile-nav-icon" />
          <span>contact</span>
        </div>
      </nav>
    </header>
  );
};

export default MobileMenu;
