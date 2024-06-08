import React from "react";
import resume from "../assets/Aaron Belmore Resume (1)-1-1.png";

const Resume = () => {
  return (
    <div>
      <button>
        <a href={resume} download>
          Download Resume
        </a>
      </button>
    </div>
  );
};

export default Resume;
