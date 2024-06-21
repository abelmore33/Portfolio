import React from "react";
import resume from "../assets/Aaron Belmore Resume (1)-1-1.png";
import image from "../assets/headshot.png";
import project1 from "../assets/Screenshot 2024-06-21 135923.png";
import project2 from "../assets/Screenshot 2024-06-21 144312.png";
import project3 from "../assets/Screenshot 2024-06-21 150145.png";

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
          <div className="project">
            <h4>Web Sprint Challenge: Build a Web API</h4>
            <a
              href="https://github.com/abelmore33/web-sprint-challenge-build-a-web-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="project-img" src={project1} alt="" />
            </a>
            <p>
              In this project, I developed a CRUD API for managing projects and
              actions using Node.js and Express. Key tasks included:
            </p>

            <ul>
              <li>
                Setting up and configuring the Node.js environment with NPM
                scripts.
              </li>
              <li>Creating RESTful endpoints for projects and actions.</li>
              <li>
                Implementing middleware for logging, validation, and error
                handling.
              </li>
              <li>
                Designing database schemas and using SQLite for data
                persistence.
              </li>
              <li>
                Writing automated tests to ensure API functionality and
                reliability.
              </li>
            </ul>
            <p>This project showcases my skills in:</p>
            <ul className="skills">
              <li>
                <img
                  className="skills-img"
                  src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                  alt="nodejs"
                />
              </li>
              <li>
                <img
                  className="skills-img"
                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
                  alt="express"
                />
              </li>
              <li>
                <img
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/2560px-SQLite370.svg.png"
                  alt=""
                />
              </li>
            </ul>
          </div>

          <div className="project">
            <h4>React Router Movies</h4>{" "}
            <a
              href="https://github.com/abelmore33/React-Router-Movies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="project-img" src={project2} alt="" />
            </a>
            <p>
              In this project, I built a movie application using React Router to
              demonstrate client-side routing. Key tasks included:
            </p>
            <p>
              In this project, I built a movie application using React Router to
              demonstrate client-side routing. Key tasks included:
            </p>
            <ul>
              <li>Setting up routes with React Router for different views.</li>
              <li>
                Implementing navigation between a list of movies and detailed
                views of individual movies.
              </li>
              <li>
                Utilizing URL parameters to dynamically display movie details.
              </li>
              <li>
                Refactoring code to adhere to DRY (Don't Repeat Yourself)
                principles.
              </li>
              <li>
                Adding functionality to save favorite movies and navigate using
                links.
              </li>
            </ul>
            <p>This project showcases my skills in:</p>
            <ul className="skills">
              <li>
                <img
                  className="skills-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt="react"
                />
              </li>
              <li>
                <img
                  className="skills-img"
                  src="https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png"
                  alt="react-router"
                />
              </li>
              <li>
                <img
                  className="skills-img"
                  src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png"
                  alt="css"
                />
              </li>
            </ul>
          </div>
          <div className="project">
            <h4>Web Sprint Challenge: Authentication and Testing</h4>
            <a
              href="https://github.com/abelmore33/web-sprint-challenge-authentication-and-testing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project3} alt="" className="project-img" />
            </a>

            <p>
              In this project, I created an authentication system and
              implemented testing for a Node.js application. Key tasks included:
            </p>
            <ul>
              <li>
                Setting up and configuring the Node.js environment with NPM
                scripts.
              </li>
              <li>Creating RESTful endpoints for projects and actions.</li>
              <li>
                Implementing middleware for logging, validation, and error
                handling.
              </li>
              <li>
                Designing database schemas and using SQLite for data
                persistence.
              </li>
              <li>
                Writing automated tests to ensure API functionality and
                reliability.
              </li>
            </ul>
            <p>This project showcases my skills in:</p>
            <ul className="skills">
              <li>
                <img
                  className="skills-img"
                  src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                  alt="nodejs"
                />
              </li>
              <li>
                <img
                  src="https://e7.pngegg.com/pngimages/661/372/png-clipart-knex-js-full-logo-tech-companies.png"
                  alt="knex"
                  className="skills-img"
                />
              </li>
              <li>
                <img
                  className="skills-img"
                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
                  alt="express"
                />
              </li>
            </ul>
          </div>
          <div className="project">
            <h4>Project 4</h4>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
