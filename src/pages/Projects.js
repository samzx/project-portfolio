import React from "react";
import { developments } from "../data/projects";

const Projects = () => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Releases</h1>

      <h1 style={{textAlign: "center"}}>Developments</h1>
      <div>
        {developments.map(image => {
          return (
            <div className="card" key={image.src}>
              <h2>{image.description}</h2>
              <img src={image.src} className="image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
