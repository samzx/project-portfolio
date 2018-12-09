import React from "react";

class ProjectDetails extends React.Component {
  calcOpacity = (scroll, showTime, pcOffset, showEnd) => {
    const showPeak = (showEnd + showTime) / 2 - pcOffset;
    if (scroll < showPeak) {
      return ((scroll - showTime + pcOffset * (scroll - showTime) / (showPeak - showTime)) / (showEnd - showTime)) * 2
    } else {
      if (scroll > showEnd) {
        return 0;
      } else {
        return (1 - (scroll - showTime + pcOffset * (scroll - showTime) / (showPeak - showTime)) / (showEnd - showTime)) * 2
      }
    }
  }
  selectIcon = (name) => {
    switch (name) {
      case "Source":
        return "project-link-source"
        break;
      case "Demo":
        return "project-link-demo"
        break;
      default:
        return "project-link-other"
        break;
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
    const { name, description, links } = item;
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
          <h2 className="project-title">
            {name}
          </h2>
          <p>{description}</p>
          <p>
            {
              links && links.map(link =>
                <a
                  className={`project-link ${this.selectIcon(link.name)}`}
                  href={link.url}
                  target="_blank"
                  key={link.url}>{link.name}
                </a>
              )
            }
          </p>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
