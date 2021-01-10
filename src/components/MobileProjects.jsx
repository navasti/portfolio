import React from "react";

// Swiper
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

// Projects
import projects from "../projects.js";

SwiperCore.use([Pagination]);

const MobileProjects = () => (
  <Swiper slidesPerView={1} pagination>
    {projects.map(project => (
      <SwiperSlide key={project.id}>
        <div className="project">
          <h3>{project.title}</h3>
          <div className="links">
            <a target="_blank" rel="noreferrer" href={project.links.live}>
              live
            </a>
            <span>-</span>
            <a target="_blank" rel="noreferrer" href={project.links.repo}>
              repo
            </a>
          </div>
        </div>
        <div className="preview">
          <img src={project.image} alt={project.title} />
        </div>
        <p className="description">{project.description}</p>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default MobileProjects;
