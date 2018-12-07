import React from "react";

import { developments } from "../data/projects";
import Card from "./Card";
import Project from "./Project";

const heroOffset = 1;

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
    const width = this.state.innerWidth;
    if (width < 800) {
      return width / 1.8;
    } else {
      return 400;
    }
  };

  render() {
    const numShows = developments.length + heroOffset;
    const { innerHeight } = this.state;
    return (
      <div
        style={{
          height: `calc(${numShows * innerHeight}px + ${(numShows - heroOffset) *
            this.calcImgHeight()}px)`
          // height: `${numShows * this.state.innerHeight + (numShows - heroOffset) * this.calcImgHeight()}px`
        }}
      >
        <div>
          {developments.map((item, index) => (
            <Project
              key={item.name}
              item={item}
              index={index}
              scroll={this.props.scroll}
              setBackgroundUrl={this.props.setBackgroundUrl}
              total={developments.length}
              showLength={this.state.innerHeight + this.calcImgHeight()}
              calcImgHeight={this.calcImgHeight}
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
