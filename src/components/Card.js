import React from "react";

class Card extends React.Component {
  handleClick = () => {
    const { showTime, showLength, staticPos, projectOffset } = this.props
    const scrollPos = (showTime) * (document.documentElement.scrollHeight - window.innerHeight) - projectOffset + window.innerHeight / 2 + this.props.calcImgHeight() / 2
    window.scrollTo(0, scrollPos);
  }
  render() {
    const { scroll, showTime, staticPos, showLength, index, src } = this.props;

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
            transition: "box-shadow 0.3s, transform 0.3s",
            }}
            onClick={this.handleClick}
        >
            {src ? (
              <img src={src} className="image"/>
            ) : (
              <div className="placeholder-image" />
            )}
        </div>
      </div>
    );
  }
}

export default Card;
