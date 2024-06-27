import React from "react";
import statue from "../assets/pierre-blache-VMNG8BYFQfs-unsplash.jpg";
import "../css/about.css";

const About = () => {
  return (
    <div className="about">
      <h2>My Story</h2>
      <div className="about-container">
        <div>
          <img className="statue" src={statue} alt="" />
        </div>
        <p>
          Hello! I'm Aaron Belmore, a web developer from New York. I graduated
          in 2017 with a degree in Science, Technology, and Society. After
          realizing my passion for web development, I joined a bootcamp to
          master HTML, JavaScript, React, Node, and CSS. I'm skilled at quickly
          adapting to new technologies and thrive in collaborative environments.
          My strong problem-solving abilities and commitment to writing clean,
          efficient code make me a great fit for any team. I bring a solid
          foundation in both front-end and back-end development, allowing me to
          contribute effectively at all stages of a project. Outside of coding,
          I enjoy playing sports, listening to music, and working on cars, which
          keeps me grounded and inspired. I'm eager to apply my skills and grow
          as a developer, creating innovative web solutions. Let's build
          something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
