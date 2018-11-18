import React from "react";

class ProjectDetails extends React.Component {
  render() {
    const {
      scroll,
      showTime,
      showEnd,
      item,
      innerHeight,
      calcImgHeight,
      projectOffset
    } = this.props;
    const { name, description, link } = item;
    return (
      <div
        className="project-details"
        style={{
          width: "100%",
          textAlign: "center",
          position: "fixed",
          height: (innerHeight - calcImgHeight() - projectOffset) / 2,
          // bottom: innerHeight / 2 + calcImgHeight() / 2 + 30,
          top: 0,
          display: scroll > showTime && scroll < showEnd ? "flex" : "none",
          flexDirection: "column",
          opacity:
            scroll < (showEnd + showTime) / 2
              ? ((scroll - showTime) / (showEnd - showTime)) * 2
              : (1 - (scroll - showTime) / (showEnd - showTime)) * 2
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
                🔗 {name}
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
