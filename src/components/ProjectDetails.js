import React from "react";

class ProjectDetails extends React.Component {
  calcOpacity = (scroll, showTime, pcOffset, showEnd) => {
    const showPeak = (showEnd + showTime) / 2 - pcOffset;
    if (scroll < showPeak) {
      if (showPeak - showTime  == 0 || showEnd - showTime == 0) return 0;
      return ((scroll - showTime + pcOffset * (scroll - showTime) / (showPeak - showTime)) / (showEnd - showTime)) * 2
    } else {
      if (scroll > showEnd) {
        return 0;
      } else {
        if (showPeak - showTime  == 0 || showEnd - showTime == 0) return 0;
        return (1 - (scroll - showTime + pcOffset * (scroll - showTime) / (showPeak - showTime)) / (showEnd - showTime)) * 2
      }
    }
  }
  render() {
    const {
      scroll,
      showTime,
      showEnd,
      item,
      innerHeight,
      calcImgHeight,
      projectOffset,
      pcOffset
    } = this.props;
    const { name, description, link } = item;
    return (
      <div
        className="project-details"
        style={{
          width: "100%",
          textAlign: "center",
          position: "fixed",
          height: (innerHeight - calcImgHeight()) / 2,
          top: 0,
          display: scroll > showTime && scroll < showEnd ? "flex" : "none",
          flexDirection: "column",
          opacity: this.calcOpacity(scroll, showTime, pcOffset, showEnd)
        }}
      >
        <div style={{ padding: "2rem", maxWidth: "64rem", margin: "auto" }}>
          {link ? (
            <h1>
              <a
                href={link}
                target="_blank"
                className="project-title project-title__link"
              >
                {name}
              </a>
            </h1>
          ) : (
            <h1 className="project-title">🛠 {name}</h1>
          )}
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
