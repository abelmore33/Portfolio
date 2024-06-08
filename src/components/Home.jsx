import React from "react";
import resume from "../assets/Aaron Belmore Resume (1)-1-1.png";

const Home = () => {
  return (
    <div>
      <div className="cta">
        <h2 className="cta-text">
          Hello, I'm Aaron Belmore | Full Stack Developer
        </h2>
        <p className="cta-subtext">
          Hi, I'm Aaron Belmore, a passionate full stack developer. I've always
          had a deep interest in web development but was initially afraid to
          take the leap. Recently, I completed a full stack coding bootcamp, now
          I hope to turn my my passion into a career I love.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/abelmore33/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/abelmore33"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="projects">
        <h2>Projects</h2>
      </div>
      <button>
        <a href={resume} download>
          Download Resume
        </a>
      </button>
    </div>
  );
};

export default Home;
