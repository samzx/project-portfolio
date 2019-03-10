import React from "react";

import Card from "./Card";
import ProjectDetails from "./ProjectDetails";

class Project extends React.Component {
  render() {
    const {
      item,
      index,
      scroll,
      total,
      innerHeight,
      numShows,
      pageHeight,
      STARTING_OFFSET,
      FINAL_OFFSET
    } = this.props;
    const showTime = index / total;
    const showEnd = index == total - 1 ? 0.99 : (index + 1) / total;
    const projectOffset = (FINAL_OFFSET * index) / total;
    const staticPos = innerHeight - STARTING_OFFSET - projectOffset;
    const pcOffset =
      (projectOffset + STARTING_OFFSET) /
      (document.body.clientHeight - window.innerHeight);
    return (
      <div>
        <Card
          scroll={scroll}
          showTime={showTime}
          staticPos={staticPos}
          index={index}
          total={total}
          src={item.src}
          projectOffset={projectOffset}
          innerHeight={innerHeight}
          STARTING_OFFSET={STARTING_OFFSET}
          showEnd={showEnd}
          pageHeight={pageHeight}
        />
        <ProjectDetails
          scroll={scroll}
          showTime={showTime}
          showEnd={showEnd}
          item={item}
          pcOffset={pcOffset}
        />
        {
          // <div
          //   className="scroll-indicator"
          //   style={{
          //     dislay: scroll > showTime && scroll <= showEnd ? "block" : "none",
          //     transform:
          //       scroll > showTime && scroll <= showEnd
          //         ? `scaleX(${(scroll - showTime) / (showEnd - showTime)})`
          //         : "scaleX(0)"
          //   }}
          // />
        }
      </div>
    );
  }
}

export default Project;
