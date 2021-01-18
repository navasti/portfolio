import React from "react";

// Projects
import projects from "../projects.js";

const DesktopProjects = () => {
  return (
    <div className="desktop-projects">
      {projects.map(project => (
        <div key={project.id} className="project">
          <div className="preview">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="description">
            <h1>{project.title}</h1>
            <div className="links">
              ~ The repository is available{" "}
              <a target="_blank" rel="noreferrer" href={project.links.repo}>
                here
              </a>{" "}
              and the live version{" "}
              <a target="_blank" rel="noreferrer" href={project.links.live}>
                here.
              </a>
            </div>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopProjects;
