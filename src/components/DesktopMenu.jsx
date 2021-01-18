import React from "react";

// Icons
import { FacebookWithCircle } from "@styled-icons/entypo-social/FacebookWithCircle";
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle";
import { GithubWithCircle } from "@styled-icons/entypo-social/GithubWithCircle";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";
import {
  Send as Contact,
  Tool as Skills,
  User as About,
  Briefcase as Projects,
  Home,
} from "@styled-icons/feather";

const DesktopMenu = ({ scroll }) => {
  const scrollToSection = section => {
    if (section === "home") scroll.home();
    if (section === "about") scroll.about();
    if (section === "skills") scroll.skills();
    if (section === "projects") scroll.projects();
    if (section === "contact") scroll.contact();
  };
  return (
    <aside>
      <div className="logo">PS</div>
      <nav>
        <div onClick={() => scrollToSection("home")}>
          <Home className="desktop-nav-icon" onClick={scroll.home} />
          <span>home</span>
        </div>
        <div onClick={() => scrollToSection("about")}>
          <About onClick={scroll.about} className="desktop-nav-icon" />
          <span>about</span>
        </div>
        <div onClick={() => scrollToSection("skills")}>
          <Skills onClick={scroll.skills} className="desktop-nav-icon" />
          <span>skills</span>
        </div>
        <div onClick={() => scrollToSection("projects")}>
          <Projects onClick={scroll.projects} className="desktop-nav-icon" />
          <span>projects</span>
        </div>
        <div onClick={() => scrollToSection("contact")}>
          <Contact onClick={scroll.contact} className="desktop-nav-icon" />
          <span>contact</span>
        </div>
      </nav>
      <div className="socials">
        <a target="_blank" rel="noreferrer" href="https://github.com/navasti">
          <GithubWithCircle className="desktop-social-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/szostak-pawel/"
        >
          <LinkedinWithCircle className="desktop-social-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/szostak.paw/"
        >
          <FacebookWithCircle className="desktop-social-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/navasti/"
        >
          <InstagramWithCircle className="desktop-social-icon" />
        </a>
      </div>
    </aside>
  );
};

export default DesktopMenu;
