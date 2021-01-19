const checkScrolledSection = scrollPosition => {
  const body = document.body.getBoundingClientRect().top;
  const about = document.querySelector(".about").getBoundingClientRect();
  const skills = document.querySelector(".skills").getBoundingClientRect();
  const contact = document.querySelector(".contact").getBoundingClientRect();
  const projects = document.querySelector(".projects").getBoundingClientRect();

  let currentSection = "home";

  if (about.top - about.height / 2 - body < scrollPosition) {
    currentSection = "about";
  } else {
    currentSection = "home";
  }
  if (skills.top - skills.height / 2 - body < scrollPosition) {
    currentSection = "skills";
  }
  if (projects.top - projects.height / 2 - body < scrollPosition) {
    currentSection = "projects";
  }
  if (contact.top - contact.height / 2 - body < scrollPosition) {
    currentSection = "contact";
  }

  return currentSection;
};

export default checkScrolledSection;
