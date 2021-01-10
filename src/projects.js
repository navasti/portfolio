import blogImg from "./assets/blog.png";
import healthyImg from "./assets/healthy.png";
import tetrisImg from "./assets/tetris.png";

const projects = [
  {
    id: 1,
    image: blogImg,
    title: "Blog Website",
    stack: ["html", "sass", "react", "graphql", "gatsby", "bootstrap"],
    links: {
      live: "https://navasti.github.io/blog-website/",
      repo: "https://github.com/navasti/blog-website",
    },
    description:
      "A blog website that automatically generates and displays posts based on the data in the file. Managing the content on the website is very simple, because it is limited to adding, removing or modifying such a file.",
  },
  {
    id: 2,
    image: tetrisImg,
    title: "Tetris Game",
    stack: ["html", "css", "react", "javascript"],
    links: {
      live: "https://navasti.github.io/tetris-react/",
      repo: "https://github.com/navasti/tetris-react/",
    },
    description:
      "The project is based on the cult Tetris game providing all its functionalities. The game is intended only for desktops at the moment.",
  },
  {
    id: 3,
    image: healthyImg,
    title: "Healthy Website",
    stack: ["html", "sass", "gsap", "javascript"],
    links: {
      live: "https://navasti.github.io/healthy-website/",
      repo: "https://github.com/navasti/healthy-website",
    },
    description:
      "A website promoting a healthy lifestyle. The idea was to make the website look good, have simple animations and be responsive.",
  },
];

export default projects;
