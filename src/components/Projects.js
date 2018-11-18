import React from "react";

import { developments } from "../data/projects";
import Card from "./Card";
import Project from "./Project";

const heroOffset = 1

class Projects extends React.Component {

  calcImgHeight = () => {
    const width = window.innerWidth;
    if (width < 800) {
      return width / 1.8;
    } else {
      return 400;
    }
  }

  render() {
    const numShows = developments.length + heroOffset;
    return (
      <div
        style={{
          height: `calc(${numShows * 100}vh + ${(numShows - heroOffset) * this.calcImgHeight()}px)`
        }}
      >
        <div>
          {developments.map((item, index) => (
            <Project
              key={item.name}
              item={item}
              index={index}
              scroll={this.props.scroll}
              total={developments.length}
              showLength={window.innerHeight + this.calcImgHeight()}
              calcImgHeight={this.calcImgHeight}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;