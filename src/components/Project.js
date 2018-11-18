import React from "react";

import Card from "./Card";
import ProjectDetails from "./ProjectDetails";

class Project extends React.Component {


  render() {
    const { item, index, scroll, total, showLength, innerHeight } = this.props;
    const showTime = index / (total)
    const showEnd = (index + 1) / (total)
    const FINAL_OFFSET = 100
    const STARTING_OFFSET = FINAL_OFFSET / total
    const projectOffset = FINAL_OFFSET * index / total
    const staticPos = innerHeight - STARTING_OFFSET - projectOffset
    return (
        <div>
          <Card
            scroll={scroll}
            showTime={showTime}
            staticPos={staticPos}
            showLength={showLength}
            index={index}
            src={item.src}
            projectOffset={projectOffset}
            calcImgHeight={this.props.calcImgHeight}
          />
          <ProjectDetails
            scroll={scroll}
            showTime={showTime}
            showEnd={showEnd}
            name={item.name}
            description={item.description}
            src={item.src}
            link={item.link}
          />
        </div>
    );
  }
}

export default Project;
