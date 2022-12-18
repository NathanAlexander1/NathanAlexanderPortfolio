import React from "react";
import gitHubImage from "../assets/platformImgs/ghImage.png";
import linkedInImage from "../assets/platformImgs/linkedIn.png";
import stackOverflowImage from "../assets/platformImgs/stackoverflow.png";
import NathanResume from "../assets/Nathan-Resume.pdf";

function header() {
  return (
    <div className="headerLinks d-flex justify-content-between mt-2">
      <div>
        <h1>Nathan Alexander's Portfolio</h1>
      </div>
      <div className="d-flex col-2 justify-content-around">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/NathanAlexander1"
        >
          <img src={gitHubImage} height="40" alt="GitHub Link" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nathan-alexander-a8460713a"
        >
          <img src={linkedInImage} height="40" alt="LinkedIn Link" />
        </a>

        {/* <a target="_blank" rel="noreferrer" href="mailto:nika827@msn.com">Email</a>
        <a href={NathanResume} download>Resume</a> */}
      </div>
    </div>
  );
}

export default header;
