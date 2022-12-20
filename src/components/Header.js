import React from "react";
import gitHubImage from "../assets/platformImgs/ghImage.png";
import linkedInImage from "../assets/platformImgs/linkedIn.png";
import EmailImage from "../assets/platformImgs/email.jpg"
import NathanResume from "../assets/Nathan-Resume.pdf";
import Resume from "../assets/platformImgs/resume.png"

function header() {
  return (
    <div className="header headerLinks d-flex justify-content-around py-4">
      <div>
        <h1 className="text-center align-items-center">Nathan's Portfolio</h1>
      </div>
      <div className="d-flex col-2 justify-content-around align-items-center">
      <a className="text-decoration-none" target="_blank" rel="noreferrer" href="mailto:nika827@msn.com"><img src={EmailImage} height="32vh" alt="Email Image"/></a>
        <a className="px-1"
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/NathanAlexander1"
        >
          <img className="mh-100" src={gitHubImage} width="32vw" alt="GitHub Link" />
        </a>
        <a className="px-1"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nathan-alexander-a8460713a"
        >
          <img className="mh-100" src={linkedInImage} height="32vw" alt="LinkedIn Link" />
        </a>

        <a className="text-decoration-none" href={NathanResume} download><img src={Resume} width="32vw" alt="Resume Image"/></a>
      </div>
    </div>
  );
}

export default header;
