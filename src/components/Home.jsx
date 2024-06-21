import React from "react";
import resume from "../assets/Aaron Belmore Resume (1)-1-1.png";
import image from "../assets/headshot.png";
import project1 from "../assets/Screenshot 2024-06-21 135923.png";

import "../css/home.css";
const Home = () => {
  return (
    <div>
      <div className="main-container">
        <div className="main-image">
          <img src={image} alt="Aaron Belmore" />
        </div>
        <div className="main-text">
          <p className="cta-subtext">
            Hello, I'm Aaron Belmore, a passionate full stack developer. I've
            always had a deep interest in web development but was initially
            afraid to take the leap. Recently, I completed the full stack web
            dev program at Bloomtech Institute of Technology, now I hope to turn
            my my passion into a career I love.
          </p>
          <div className="icons">
            <a
              className="icon"
              href="https://www.linkedin.com/in/abelmore33/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="icon"
              href="https://github.com/abelmore33"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <button>
              <a
                id="resume"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <h3>Projects</h3>
        <div className="projects">
          <div className="project"></div>
          <h4>Web Sprint Challenge: Build a Web API</h4>
          <p>
            In this project, I developed a CRUD API for managing projects and
            actions using Node.js and Express. Key tasks included:
          </p>
          <a
            href="https://github.com/abelmore33/web-sprint-challenge-build-a-web-api"
            target="_blank"
          >
            <img className="project-img" src={project1} alt="" />
          </a>
          <ul>
            <li>
              Setting up and configuring the Node.js environment with NPM
              scripts.
            </li>
            <li>Creating RESTful endpoints for projects and actions.</li>
            <li>
              mplementing middleware for logging, validation, and error handling
            </li>
            <li>
              Designing database schemas and using SQLite for data persistence.
            </li>
            <li>
              Writing automated tests to ensure API functionality and
              reliability.
            </li>
          </ul>
          <p>This project showcases my skills in </p>
        </div>
        <div className="project">
          <h4>Project 2</h4>
          <p>Description</p>
        </div>
        <div className="project">
          <h4>Project 3</h4>
          <p>Description</p>
        </div>
        <div className="project">
          <h4>Project 4</h4>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
