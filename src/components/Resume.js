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
      <div className="d-flex flex-column vw-100">
        <p className="align-self-center">Proficiencies</p>
        <div className="proficiencies ">
          <div className="logosContainer d-flex flex-wrap justify-content-around">
            <div className="individualLogos">
              <img src={HTML} alt="html logo" height="80" />
              <p>HTML</p>
            </div>
            <div className="individualLogos">
              <img src={CSS} alt="css logo" height="80" />
              <p>CSS</p>
            </div>
            <div className="individualLogos">
              <img src={JSLogo} alt="javascript logo" height="80" />
              <p>JavaScript</p>
            </div>
            <div className="individualLogos">
              <img src={reactLogo} alt="react logo" height="80" />
              <p>React.js</p>
            </div>
            <div className="individualLogos">
              <img src={node} alt="node logo" height="80" />
              <p>Node.js</p>
            </div>
          </div>
        </div>
      </div>
      <div className="resumeDiv pageNames d-flex flex-column align-items-center">
        <p>I am also proficient in ....................</p>
      </div>
    </div>
  );
}

export default Resume;
