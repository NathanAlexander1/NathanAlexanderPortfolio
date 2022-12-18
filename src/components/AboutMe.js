import React from "react";
import nathanAtMeru from "../assets/nathan-at-meru.jpg";
import UW from "../assets/education/UW.png";
import UO from "../assets/education/UO.png";
import Tufts from "../assets/education/Tufts.png";
import HTML from "../assets/proficiencies/html.png";
import CSS from "../assets/proficiencies/css.png";
import JSLogo from "../assets/proficiencies/jslogo.png";
import reactLogo from "../assets/proficiencies/reactlogo.png";
import node from "../assets/proficiencies/nodelogo.webp";
import NathanResume from "../assets/Nathan-Resume.pdf";

function AboutMe() {
  return (
    <div className="text-center">
      <h1>About me</h1>
      <div className="d-flex justify-content-around">
        <div className="about-me-container d-flex flex-column col-5">
          <img
            className="about-me-img w-100 rounded-circle"
            src={nathanAtMeru}
            alt="Nathan at Meru"
          ></img>
          <h3>Bio</h3>
          <p>
            Hello! My name is Nathan Alexander and I am a full stack software
            engineer. I recently earned my{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bootcamp.uw.edu/coding/"
            >
              {" "}
              cerificate in full stack development
            </a>{" "}
            from the University of Washington's coding bootcamp and am eager to
            dive into the field of web development!
          </p>

          <p>
            Prior to shifting my career towards tech, I worked in the non-profit
            sector. Most recently, I worked for the Humane Society of the United
            States, helping to better our food system to improve human health,
            animal welfare and the wellbeing of the planet.
          </p>

          <p>
            I am still very interested in making the world a better and more
            sustainable place and am eager to continuing to develop my
            programming literacy with a company or organization that shares my
            values and passions
          </p>
        </div>
        <div className="d-flex flex-column justify-content-around col-5">
          <div className="d-flex flex-column">
            <h3>Skills</h3>
            <div className="proficiencies  mt-4">
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

          <div className="d-flex flex-column">
            <h3>Education</h3>
            <div className="d-flex align-items-center mt-4">
              <div>
                <img
                  className="universityLogos"
                  src={Tufts}
                  alt="Tufts University"
                />
                <p>MS Animals and Public Policy</p>
              </div>
              <div>
                <img
                  className="universityLogos"
                  src={UW}
                  alt="University of Washington"
                />
                <p>Full Stack Software Engineer Certificate</p>
              </div>
              <div>
                <img
                  className="universityLogos"
                  src={UO}
                  alt="University of Oregon"
                />
                <p>BA Environmental Studies</p>
              </div>
            </div>
          </div>

          <div className="align-self-center">
            <h3>
              <a href={NathanResume} download>
                Download my resume
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
