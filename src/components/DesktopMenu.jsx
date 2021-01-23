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

const DesktopMenu = ({ scroll, currentSection }) => {
  return (
    <aside>
      <div className="logo">PS</div>
      <nav>
        <div
          onClick={scroll.home}
          className={currentSection === "home" ? "active" : ""}
        >
          <Home className="desktop-nav-icon" />
          <span>home</span>
        </div>
        <div
          onClick={scroll.about}
          className={currentSection === "about" ? "active" : ""}
        >
          <About className="desktop-nav-icon" />
          <span>about</span>
        </div>
        <div
          onClick={scroll.skills}
          className={currentSection === "skills" ? "active" : ""}
        >
          <Skills className="desktop-nav-icon" />
          <span>skills</span>
        </div>
        <div
          onClick={scroll.projects}
          className={currentSection === "projects" ? "active" : ""}
        >
          <Projects className="desktop-nav-icon" />
          <span>projects</span>
        </div>
        <div
          onClick={scroll.contact}
          className={currentSection === "contact" ? "active" : ""}
        >
          <Contact className="desktop-nav-icon" />
          <span>contact</span>
        </div>
      </nav>
      <div className="socials">
        <a target="_blank" rel="noreferrer" href="https://github.com/navasti">
          <GithubWithCircle className="desktop-social-icon github" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/szostak-pawel/"
        >
          <LinkedinWithCircle className="desktop-social-icon linkedin" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/szostak.paw/"
        >
          <FacebookWithCircle className="desktop-social-icon facebook" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/navasti/"
        >
          <InstagramWithCircle className="desktop-social-icon instagram" />
        </a>
      </div>
    </aside>
  );
};

export default DesktopMenu;
