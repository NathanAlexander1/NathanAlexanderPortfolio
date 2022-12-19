import React from "react";
import gitHubImage from "../assets/platformImgs/ghImage.png";
import linkedInImage from "../assets/platformImgs/linkedIn.png";
import stackOverflowImage from "../assets/platformImgs/stackoverflow.png";
import NathanResume from "../assets/Nathan-Resume.pdf";

function header() {
  return (
    <div className="header headerLinks d-flex justify-content-around">
      <div>
        <h1 className="text-center align-items-center">Nathan's Portfolio</h1>
      </div>
      <div className="d-flex col-2 justify-content-around align-items-center">
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

        {/* <a target="_blank" rel="noreferrer" href="mailto:nika827@msn.com">Email</a>
        <a href={NathanResume} download>Resume</a> */}
      </div>
    </div>
  );
}

export default header;
