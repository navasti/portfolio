import React, { useEffect, useRef, useState } from "react";
import "./styles/main.scss";
import emailjs from "emailjs-com";

// Icons
import { ChevronDown } from "@styled-icons/bootstrap/ChevronDown";
import { FacebookWithCircle } from "@styled-icons/entypo-social/FacebookWithCircle";
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle";
import { GithubWithCircle } from "@styled-icons/entypo-social/GithubWithCircle";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";
import { Whatsapp } from "@styled-icons/fa-brands/Whatsapp";
import { LocationSearching } from "@styled-icons/material-outlined/LocationSearching";
import { Email } from "@styled-icons/material-outlined/Email";

// Components
import MobileMenu from "./components/MobileMenu";
import MobileProjects from "./components/MobileProjects";
import Constellation from "./components/Constellation";
import DesktopMenu from "./components/DesktopMenu";
import DesktopProjects from "./components/DesktopProjects";

// Hooks
import useWindowWidth from "./hooks/useWindowWidth";
import useScrollPosition from "./hooks/useScrollPosition";

const Layout = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [currentSection, setCurrentSection] = useState("home");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  let width = useWindowWidth();
  let scrollPosition = useScrollPosition();

  const setHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  const executeScroll = {
    home: () => home.current.scrollIntoView({ block: "center" }),
    about: () => about.current.scrollIntoView({ block: "center" }),
    skills: () => skills.current.scrollIntoView({ block: "center" }),
    projects: () => projects.current.scrollIntoView({ block: "center" }),
    contact: () => contact.current.scrollIntoView({ block: "center" }),
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSendingMessage(true);
    emailjs
      .sendForm(
        "service_fy78eca",
        "template_uhbeqoi",
        e.target,
        "user_Tha8CihyydD1rd2VK3pJx"
      )
      .then(
        result => {
          setSenderName("");
          setSenderEmail("");
          setMessage("");
          setSubject("");
          setTimeout(() => {
            setSendingMessage(false);
            setMessageSent(true);
          }, 1000);
        },
        error => {
          throw new Error(error);
        }
      );
  };

  const handleNameImput = e => setSenderName(e.target.value);
  const handleEmailImput = e => setSenderEmail(e.target.value);
  const handleMessageImput = e => setMessage(e.target.value);
  const handleSubmitImput = e => setSubject(e.target.value);

  useEffect(() => {
    const body = document.body.getBoundingClientRect().top;
    const homeRect = home.current.getBoundingClientRect();
    const aboutRect = about.current.getBoundingClientRect();
    const skillsRect = skills.current.getBoundingClientRect();
    const projectsRect = projects.current.getBoundingClientRect();
    const contactRect = contact.current.getBoundingClientRect();

    setHeight();

    if (aboutRect.top - aboutRect.height / 2 - body < scrollPosition) {
      setCurrentSection("about");
    } else {
      setCurrentSection("home");
    }
    if (skillsRect.top - skillsRect.height / 2 - body < scrollPosition) {
      setCurrentSection("skills");
    }
    if (projectsRect.top - projectsRect.height / 2 - body < scrollPosition) {
      setCurrentSection("projects");
    }
    if (contactRect.top - contactRect.height / 2 - body < scrollPosition) {
      setCurrentSection("contact");
    }
    if (homeRect.top === 0) {
      setCurrentSection("home");
    }

    window.addEventListener("resize", () => setHeight());
    return window.removeEventListener("resize", () => setHeight());
  }, [scrollPosition]);

  return (
    <>
      {width > 1023 && (
        <DesktopMenu scroll={executeScroll} currentSection={currentSection} />
      )}
      <div className="container">
        {width < 1023 && (
          <MobileMenu scroll={executeScroll} currentSection={currentSection} />
        )}
        {width < 1023 ? (
          <Constellation value={35} size={2} />
        ) : (
          <Constellation value={60} size={3} />
        )}

        <section className="home" ref={home}>
          <h1>Hello!</h1>
          <h1>My name is Paweł,</h1>
          <h1>I am a Front End Developer.</h1>
          <div className="arrow">
            <ChevronDown className="chevron" />
            <ChevronDown className="chevron" />
            <ChevronDown className="chevron" />
          </div>
        </section>

        <section className="about" ref={about}>
          <h2>
            <span className="first-letter">A</span> little bit about me
          </h2>
          <p>
            I am a young, ambitious person who has been constantly learning
            about the world of web development for over a year. Since then I
            have learned a lot and coding has become my passion. I have been
            consolidating my knowledge by implementing my own projects. During
            this time I discovered that this is something I would like to
            professionally in my life. My main goals are continuous personal
            development and improvement of coding and design skills by
            implementing fascinating projects.
          </p>
          <br />
          <p>
            Besides, I am a nice and calm guy. I love travelling and physical
            exercise, mainly cycling and hiking. I am an animal lover and I am a
            vegan. I always try to be positive and optimistic.
          </p>
        </section>

        <section className="skills" ref={skills}>
          <h2>
            <span className="first-letter">S</span>kills and technologies
          </h2>
          <p>
            My greatest pleasure is creating applications in React or its
            popular Gatsby framework. I usually style these applications using
            Sass and Styled Components according to the mobile first principle.
          </p>
          <p>
            The most common libraries I use for animation are gsap and
            framer-motion.
          </p>
          <p>The text editor I use is Visual Studio Code.</p>
          <p>
            If the application requires external data, I use public API or I
            create my own server in Node that provides data in JSON.
          </p>
          <p>I design my applications in Figma.</p>
          <p>
            I am constantly learning new technologies and I never limit myself
            to one solution.
          </p>
        </section>

        <section className="projects" ref={projects}>
          <h2>
            <span className="first-letter">S</span>ome of my projects
          </h2>
          {width < 767 ? <MobileProjects /> : <DesktopProjects />}
          <div className="more-projects">
            All my projects are available on my GitHub profile,
            <a
              target="_blank"
              without
              rel="noreferrer"
              href="https://github.com/navasti?tab=repositories"
            >
              here.
            </a>
          </div>
        </section>

        <section className="contact" ref={contact}>
          <h2>
            <span className="first-letter">G</span>et in touch
          </h2>
          <form className="contact-form" onSubmit={e => handleSubmit(e)}>
            <input type="hidden" name="contact_number" />
            <input
              onChange={e => handleNameImput(e)}
              value={senderName}
              type="text"
              placeholder="Full name"
              name="name"
              required
            />
            <input
              onChange={e => handleEmailImput(e)}
              value={senderEmail}
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              onChange={e => handleSubmitImput(e)}
              value={subject}
              type="text"
              placeholder="Subject"
              name="subject"
              required
            />
            <textarea
              onChange={e => handleMessageImput(e)}
              value={message}
              name="message"
              placeholder="Message"
              spellCheck="false"
              required
            />
            <button type="submit">
              {sendingMessage ? (
                <div class="spinner">
                  <div class="bounce1"></div>
                  <div class="bounce2"></div>
                  <div class="bounce3"></div>
                </div>
              ) : messageSent ? (
                "Sent"
              ) : (
                "Send"
              )}
            </button>
          </form>
        </section>

        <footer className="footer">
          {width < 1024 && (
            <div className="info">
              <div className="socials">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/navasti"
                >
                  <GithubWithCircle className="mobile-social-icon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/szostak-pawel/"
                >
                  <LinkedinWithCircle className="mobile-social-icon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/szostak.paw/"
                >
                  <FacebookWithCircle className="mobile-social-icon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/navasti/"
                >
                  <InstagramWithCircle className="mobile-social-icon" />
                </a>
              </div>
              <div className="copyright">&copy; 2020 Paweł Szostak</div>
            </div>
          )}

          <div className="contact-info">
            <div className="location">
              <LocationSearching className="contact-icon" />
              <span>Olsztyn, Poland</span>
            </div>
            <div className="phone">
              <Whatsapp className="contact-icon" />
              <span>+48 533 442 655</span>
            </div>
            <div className="email">
              <Email className="contact-icon" />
              <span>szostak_pawel@outlook.com</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
