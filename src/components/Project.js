import React from "react";
import wastenot from "../assets/projects/wastenot.png"
import zooGame from "../assets/projects/zoo-animal-game.png";
import allEvents from "../assets/projects/allEvents.png";
import weatherApp from "../assets/projects/weather-app.png";
import noteTaker from "../assets/projects/notetaker.png";
import workScheduler from "../assets/projects/workday-scheduler.png";
import triviaProject from "../assets/projects/trivia-project.png";
import tipCalc from "../assets/projects/tipCalc.png";
import Card from "react-bootstrap/Card";

function project() {
  const projects = [
    {
      image: wastenot,
      projectName: "WasteNot",
      description: "This application allows users to organize and track their kitchen(s) and helps them donate excess food to local food banks.",
      deploymentLink: "https://wastenotkitchentracker.netlify.app/",
      gitHubLink: "https://github.com/rachlally/feast-front-end",
      techUsed: "Google Maps API, Edamam API, React, JWT, Tailwind, Express",
    },
    {
      image: allEvents,
      projectName: "E-vents",
      description: "This is an event scheduling application that allows users to create and edit events, mark them as public or private and invite friends to join.",
      deploymentLink: "https://event-planner-bnnr.herokuapp.com/",
      gitHubLink: "https://github.com/24rgraham/event-planner-project",
      techUsed: "FullCalendar.io, Cloudinary widget, Bootstrap",
    },
    {
      image: zooGame,
      projectName: "Zoo Animal Game",
      description: "This is a fun and educational full stack game designed to teach users about new and exciting animals through various forms of media.",
      deploymentLink: "https://felishayumacias.github.io/Zoo-Animal-Game/",
      gitHubLink: "https://github.com/FelishaYuMacias/Zoo-Animal-Game",
      techUsed: "Designed our own API for this project",
    },
    {
      image: weatherApp,
      projectName: "Weather Dashboard",
      description:
        "Search cities and get up-to-the-minute weather information plus 5-day forecast!",
      deploymentLink: "https://nathanalexander1.github.io/weather-dashboard/",
      gitHubLink: "https://github.com/NathanAlexander1/weather-dashboard",
      techUsed: "Weather API, Local Storage, JS, CSS, HTML",
    },
    {
      image: noteTaker,
      projectName: "Notetaker App",
      description:
        "Keep track of your to-do list with this dynamic notetaker application!",
      deploymentLink: "https://note-taker-nathanalexander1.herokuapp.com/notes",
      gitHubLink: "https://github.com/NathanAlexander1/Note-Taker",
      techUsed: "NPM, Express, UUID, mySQL",
    },
    {
      image: workScheduler,
      projectName: "Workday Scheduler",
      description:
        "Organize your day with this workday scheduler application! Past, present and future tasks are color coded based on time!",
      deploymentLink: "https://nathanalexander1.github.io/work-day-scheduler/",
      gitHubLink: "https://github.com/NathanAlexander1/work-day-scheduler",
      techUsed: "HTML, CSS, JS, Local Storage",
    },
    {
      image: triviaProject,
      projectName: "Bug Trivia",
      description:
        "Have a fun time and learn all about bugs with this fun trivia game!",
      deploymentLink: "https://nathanalexander1.github.io/trivia-project/",
      gitHubLink: "https://github.com/NathanAlexander1/trivia-project",
      techUsed: "HTML, CSS, JS, Local Storage",
    },
    {
      image: tipCalc,
      projectName: "Tip Calculator",
      description:
        "Quickly and easily calculate tip percentage and dollar amount!",
      deploymentLink: "https://nathanalexander1.github.io/tip-calculator/",
      gitHubLink: "https://github.com/NathanAlexander1/tip-calculator",
      techUsed: "HTML, CSS, JS",
    },
  ];

  return (
    <div className="ulForCards d-flex justify-content-center flex-wrap">
      {projects.map((p, i) => {
        return (
          <div key={"a" + i} className="pageNames col-lg-4 col-md-4 col-sm-4 col-xs-2 mx-5 my-3" >
            <div key={"b" + i} className="projList h-100 . list-unstyled">
              <Card style={{ height: "100%"}}>
                <div className="projImg" key={"c" + i}>
                  <Card.Link target="_blank" href={p.deploymentLink}>
                    <Card.Img style={{ height: "100%"}}
                      className="projImg border"
                      variant="top"
                      src={p.image}
                    />
                  </Card.Link>
                </div>
                <Card.Body>
                  <Card.Title>{p.projectName}</Card.Title>
                  <Card.Text>{p.description}</Card.Text>
                  <Card.Link target="_blank" href={p.deploymentLink}>
                    Deployment
                  </Card.Link>
                  <Card.Link target="_blank" href={p.gitHubLink}>
                    GitHub
                  </Card.Link>
                  <Card.Text>Technology used: {p.techUsed}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default project;
