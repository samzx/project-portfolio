import React from "react";

class Card extends React.Component {
  state = {
    hovering: false
  }
  handleClick = () => {
    const { showTime, showLength, staticPos, projectOffset, STARTING_OFFSET } = this.props;
    const scrollPos =
      showTime * (document.body.clientHeight - window.innerHeight) -
      projectOffset +
      window.innerHeight / 2 +
      this.props.calcImgHeight() / 2 -
      STARTING_OFFSET;
    window.scrollTo(0, scrollPos);
  };

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
    const { scroll, showTime, staticPos, showLength, index, item } = this.props;
    const { name, description, links, src } = item;

    return (
      <div className="card-container">
        <div
          className={"card"}
          // TODO: split out into class names
          style={{
            top: scroll > showTime ? staticPos + showLength * index : staticPos,
            zIndex: -index + 100,
            position: scroll > showTime ? "absolute" : "fixed",
            transform: `scale(${1 - index * 0.01})`,
            transition: "box-shadow 0.3s, transform 0.3s, filter 0.3s",
            filter: scroll > showTime || this.state.hovering ? null : "grayscale(1)",
          }}
          onClick={this.handleClick}
          onMouseOver={() => this.setState({ hovering: true })}
          onMouseOut={() => this.setState({ hovering: false })}
        >
          <div className="card-overlay">
            <div className="card-overlay-contents" style={{background: `url(${src})`}}>
              <div style={{opacity: 0}}>
                Some Content Some Content Some Content Some Content Some Content Some Content Some Content Some Content
              </div>
            </div>
            <div className="card-overlay-contents-content">
              Some Content Some Content Some Content Some Content Some Content Some Content Some Content Some Content
            </div>
          </div>
          {src ? (
            <img src={src} className="image" />
          ) : (
            <div className="placeholder-image" />
          )}
        </div>
      </div>
    );
  }
}

export default Card;
