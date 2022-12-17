import React from "react";
import gitHubImage from "../assets/platformImgs/ghImage.png"
import linkedInImage from "../assets/platformImgs/linkedIn.png"
import stackOverflowImage from "../assets/platformImgs/stackoverflow.png"


function footer() {
  return (
    <div className="footerLinks d-flex justify-content-around mt-4">
        <a target="_blank" rel="noreferrer" href="https://www.github.com/NathanAlexander1"><img src={gitHubImage} height="40" alt="GitHub Link"/></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nathan-alexander-a8460713a"><img src={linkedInImage} height="40" alt="LinkedIn Link"/></a>
        <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/20677676/nathan-alexander?tab=profile"><img src={stackOverflowImage} height="40" alt="LinkedIn Link"/></a>
        
    </div>
  )
}

export default footer