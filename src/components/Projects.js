import React from "react";

import { developments } from "../data/projects";
import Card from "./Card";
import Project from "./Project";
import { projectDescriptionHeight, HEADER_HEIGHT } from "./Card";

const HERO_OFFSET = 1;

const FINAL_OFFSET = 100;
const STARTING_OFFSET = FINAL_OFFSET / developments.length + 20;

class Projects extends React.Component {
  state = {
    innerHeight: 1,
    innerWidth: 1,
    lastScroll: 0,
    scrolled: true
  };

  setInnerDimensions = () => {
    this.setState(() => ({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth
    }));
  };

  componentWillMount() {
    this.setInnerDimensions();
    // this.watchPauseInScrollBehaviour();
  }

  componentDidMount() {
    projectDescriptionHeight(window, this);
  }

  watchPauseInScrollBehaviour() {
    setInterval(() => {
      if (this.props.scroll == this.state.lastScroll) {
        if (!this.state.scrolled) {
          const innerHeight = this.state.innerHeight;
          const showTime = this.findClosestCard();
          const scrollCardStart =
            showTime * (document.body.clientHeight - innerHeight);

          const total = developments.length;
          const index = total * showTime;
          const projectOffset = (FINAL_OFFSET * index) / total;
          const scrollDisplayTop =
            innerHeight - STARTING_OFFSET - projectOffset;

          const displayTargetOffsetFromTop =
            HEADER_HEIGHT + this.PROJECT_DESCRIPTION_HEIGHT;

          const scrollYTarget =
            scrollCardStart + scrollDisplayTop - displayTargetOffsetFromTop + 2;

          window.scrollTo({ top: scrollYTarget, behavior: "smooth" });

          this.setState(() => ({ scrolled: true }));
        }
      } else {
        this.setState(() => ({ scrolled: false }));
      }
      this.setState(() => ({ lastScroll: this.props.scroll }));
    }, 300);
  }

  findClosestCard() {
    const scroll = this.props.scroll;
    const indexes = Array.from(Array(developments.length).keys());
    const increment = 1 / indexes.length;
    const levels = indexes.map(index => increment * index);
    levels.push(1);

    if (scroll == 0) return -1; // make it scroll all the way up regardless of buffer

    for (let i = 1; i < levels.length; i++) {
      if (scroll < levels[i] && scroll >= levels[i - 1]) {
        return levels[i - 1];
      }
    }

    return 2;
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
    const pageHeight =
      numShows * (innerHeight + this.calcImgHeight() - 100) + innerHeight;
    this.findClosestCard();
    // console.log(this.props.scroll)

    return (
      <div
        style={{
          height: `${pageHeight}px`
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
              innerHeight={this.state.innerHeight}
              numShows={numShows}
              pageHeight={pageHeight}
              STARTING_OFFSET={STARTING_OFFSET}
              FINAL_OFFSET={FINAL_OFFSET}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
