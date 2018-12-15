import React from "react";

const PLACEHOLDER_IMAGE_HEIGHT = 400;
const HEADER_HEIGHT = 77;
const PROJECT_DESCRIPTION_HEIGHT = 150;
const CARD_SHADOW = 10;
const MOBILE_URL_HEIGHT = 100;

const MAX_Z_INDEX = 100;
const SCALE_DOWN_AMOUNT = 0.01;

class Card extends React.Component {
  state = {
    hovering: false,
    imgHeight: PLACEHOLDER_IMAGE_HEIGHT
  };

  scrollPos = () => {
    const {
      showTime,
      projectOffset,
      STARTING_OFFSET,
      innerHeight
    } = this.props;
    const scrollPos =
      showTime * (document.body.clientHeight - innerHeight) -
      projectOffset +
      innerHeight -
      STARTING_OFFSET -
      HEADER_HEIGHT -
      PROJECT_DESCRIPTION_HEIGHT;
    return scrollPos;
  };

  handleClick = () => {
    const SHOW_BUFFER = 2;
    window.scrollTo(
      0,
      this.props.showTime * (document.body.clientHeight - innerHeight) +
        SHOW_BUFFER
    );
  };

  handleImageLoad = ({ target: img }) => {
    this.setState(() => ({ imgHeight: img.offsetHeight }));
  };

  calculateTransform = () => {
    const { showTime, scroll, showEnd, staticPos, index } = this.props;
    if (scroll <= showTime) {
      return `translateY(0) ` + `scale(${1 - index * SCALE_DOWN_AMOUNT})`;
    } else if (scroll > showTime && scroll < showEnd) {
      return `translateY(${HEADER_HEIGHT +
        PROJECT_DESCRIPTION_HEIGHT -
        staticPos}px) scale(1)`;
    } else {
      return (
        `translateY(${-this.state.imgHeight -
          CARD_SHADOW -
          MOBILE_URL_HEIGHT -
          staticPos}px) ` + `scale(${1 - index * SCALE_DOWN_AMOUNT})`
      );
    }
  };

  render() {
    const { scroll, showTime, showEnd, index, src, staticPos } = this.props;
    return (
      <div className="card-container">
        <div
          className={"card"}
          style={{
            top: staticPos,
            zIndex: -index + MAX_Z_INDEX,
            transform: this.calculateTransform()
            // filter:
            //   scroll > showTime || this.state.hovering ? "none" : "grayscale(1)"
          }}
          onClick={this.handleClick}
          onMouseOver={() => this.setState({ hovering: true })}
          onMouseOut={() => this.setState({ hovering: false })}
        >
          {src ? (
            <img src={src} className="image" onLoad={this.handleImageLoad} />
          ) : (
            <div className="placeholder-image" />
          )}
        </div>
      </div>
    );
  }
}

export default Card;
