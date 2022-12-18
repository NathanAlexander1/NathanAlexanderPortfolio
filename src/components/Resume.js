import React from "react";
import NathanResume from "../assets/Nathan-Resume.pdf";
import HTML from "../assets/proficiencies/html.png";
import CSS from "../assets/proficiencies/css.png";
import JSLogo from "../assets/proficiencies/jslogo.png";
import reactLogo from "../assets/proficiencies/reactlogo.png";
import node from "../assets/proficiencies/nodelogo.webp";

function Resume() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-between">
      <h1 >Download my resume below</h1>
      <div className="align-self-center">
        <a href={NathanResume} download>
          Download my resume
        </a>
      </div>
   
      <div className="resumeDiv pageNames d-flex flex-column align-items-center">
        <p>I am also proficient in ....................</p>
      </div>
    </div>
  );
}

export default Resume;
