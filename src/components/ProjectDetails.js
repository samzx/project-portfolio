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
    } = this.props;
    const { name, description, links } = item;
    return (
      <div
        className="project-details"
      >
        <div style={{ padding: "2rem", maxWidth: "64rem", margin: "auto" }}>
          <h3 style={{margin: "0 auto"}}>
            {name}
            <b>
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
            </b>
          </h3>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
