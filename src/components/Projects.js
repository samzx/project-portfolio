import React from "react";

import { developments } from "../data/projects";
import Card from "./Card";
import Project from "./Project";

const HERO_OFFSET = 1;

class Projects extends React.Component {
  state = {
    innerHeight: 1,
    innerWidth: 1
  };

  setInnerDimensions = () => {
    this.setState(() => ({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth
    }));
  };

  componentWillMount() {
    this.setInnerDimensions();
  }

  calcImgHeight = () => {
    const MOBILE_WIDTH = 800;
    const DESKTOP_IMAGE_HEIGHT = 400;
    const IMAGE_ASPECT_RATIO = 1.8;
    const width = this.state.innerWidth;
    if (width < MOBILE_WIDTH) {
      return width / IMAGE_ASPECT_RATIO;
    } else {
      return DESKTOP_IMAGE_HEIGHT;
    }
  };

  render() {
    const numShows = developments.length + HERO_OFFSET;
    const { innerHeight } = this.state;
    return (
      <div
        style={{
          height: `calc(${numShows * innerHeight}px + ${(numShows -
            HERO_OFFSET) *
            this.calcImgHeight()}px)`
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
              showLength={this.state.innerHeight + this.calcImgHeight()}
              innerHeight={this.state.innerHeight}
              numShows={numShows}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
