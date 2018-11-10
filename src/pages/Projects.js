import React from "react";
import { images } from "../data/images";

const Projects = () => {
  return (
    <div className="image-container">
      {images.map(image => {
        return (
          <div className="card" key={image.src}>
            <h1>{image.description}</h1>
            <img src={image.src} className="image" />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
