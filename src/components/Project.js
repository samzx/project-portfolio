import React from "react";

import Card from "./Card";
import ProjectDetails from "./ProjectDetails";

class Project extends React.Component {

  componentDidMount() {
    window.addEventListener("scroll", () => {
        const { index, total, setBackgroundUrl, scroll, item } = this.props;
        if (scroll > index / total && scroll < (index + 1) / total) {
          setBackgroundUrl(item.src);
        }
    })
  }

  render() {
    const { item, index, scroll, total, showLength, innerHeight, numShows} = this.props;
    const FINAL_OFFSET = 100;
    const STARTING_OFFSET = FINAL_OFFSET / total + 50;
    const showTime = index / total;
    const showEnd = (index + 1) / total;
    const projectOffset = (FINAL_OFFSET * index) / total;
    const staticPos = innerHeight - STARTING_OFFSET - projectOffset;
    const pcOffset = (projectOffset + STARTING_OFFSET) / (document.body.clientHeight - window.innerHeight)
    return (
      <div>
        <Card
          scroll={scroll}
          showTime={showTime}
          staticPos={staticPos}
          showLength={showLength}
          index={index}
          src={item.src}
          item={item}
          projectOffset={projectOffset}
          calcImgHeight={this.props.calcImgHeight}
          innerHeight={innerHeight}
          STARTING_OFFSET={STARTING_OFFSET}
          setBackgroundUrl={this.setBackgroundUrl}
        />
      </div>
    );
  }
}

export default Project;
