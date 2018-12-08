import React from "react";
import ProjectDetails from "./ProjectDetails"

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
      this.props.calcImgHeight() -
      STARTING_OFFSET - 40;
    window.scrollTo(0, scrollPos);
  };

  render() {
    const { scroll, showTime, staticPos, showLength, index, src, showEnd, item, projectOffset } = this.props;

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
          <ProjectDetails
            scroll={scroll}
            showTime={showTime}
            showEnd={showEnd}
            projectOffset={projectOffset}
            calcImgHeight={this.props.calcImgHeight}
            innerHeight={innerHeight}
            item={item}
          />
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
