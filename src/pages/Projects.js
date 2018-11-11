import React from "react";
import { developments } from "../data/projects";
import Card from "../components/Card"

const Projects = () => {
  return (
    <div>
      <a href="/" className="back">←</a>
      <div className="hero">
        <h1>Projects</h1>
        <h2>Apps, apps and more apps!</h2>
      </div>
      <div className="project-container">
      {
        developments.map(item => <Card item={item}/>)
      }
      </div>
    </div>
  );
};

export default Projects;
