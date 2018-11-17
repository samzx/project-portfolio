import React from "react";
import { developments } from "../data/projects";
import Card from "../components/Card";

const heroOffset = 1

class Projects extends React.Component {

  calcImgHeight = () => {
    const width = window.innerWidth;
    return 400;
    if (width < 800) {
      return width / 1.8;
    } else {
      return 400;
    }
  }

  render() {
    const numShows = developments.length + heroOffset;
    return (
      <div className="projects" style={{height: `calc(${numShows * 100}vh + ${(numShows - heroOffset) * this.calcImgHeight()}px)`}}>
        <div className="project-container">
          {developments.map((item, index) => (
            <Card
              key={item.name}
              item={item}
              index={index}
              scroll={this.props.scroll}
              total={developments.length}
              showLength={window.innerHeight + this.calcImgHeight()}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
