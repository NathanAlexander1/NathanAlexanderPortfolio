import React from "react";
import NathanResume from "../assets/Nathan-Resume.pdf";
import HTML from "../assets/proficiencies/html.png";
import CSS from "../assets/proficiencies/css.png";
import JSLogo from "../assets/proficiencies/jslogo.png";
import reactLogo from "../assets/proficiencies/reactlogo.png";
import node from "../assets/proficiencies/nodelogo.webp";

function Resume() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center text-center">
      <div className="align-self-center">
      <h1 ><a href={NathanResume} download>
          Download my resume
        </a></h1>
      </div>
    </div>
  );
}

export default Resume;
