import React from "react";
import gitHubImage from "../assets/platformImgs/ghImage.png"
import linkedInImage from "../assets/platformImgs/linkedIn.png"
import NathanResume from "../assets/Nathan-Resume.pdf";
import EmailImage from "../assets/platformImgs/email.png"
import Resume from "../assets/platformImgs/resume.png"


function footer() {
  return (
    <div className="headerLinks d-flex justify-content-around align-items-center py-4 footer">

        <a className="text-decoration-none" target="_blank" rel="noreferrer" href="mailto:nika827@msn.com"><img src={EmailImage} height="40" alt="Email"/></a>
        <a target="_blank" rel="noreferrer" href="https://www.github.com/NathanAlexander1"><img src={gitHubImage} height="40" alt="GitHub Link"/></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nathan-alexander-a8460713a"><img src={linkedInImage} height="40" alt="LinkedIn Link"/></a>
       
        <a className="text-decoration-none" href={NathanResume} download><img src={Resume} height="40" alt="Resume"/></a>
        
    </div>
  )
}

export default footer