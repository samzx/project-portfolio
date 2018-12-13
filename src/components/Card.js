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

  calcTop = () => {
    const { showTime, scroll, showEnd } = this.props;
    if (scroll <= showTime) {
      return this.props.staticPos;
    } else if (scroll > showTime && scroll < showEnd) {
      return HEADER_HEIGHT + PROJECT_DESCRIPTION_HEIGHT;
    } else {
      // card shadow (10) & mobile url height (100)
      return -this.state.imgHeight - CARD_SHADOW - MOBILE_URL_HEIGHT;
    }
  };

  render() {
    const { scroll, showTime, showEnd, index, src } = this.props;
    return (
      <div className="card-container">
        <div
          className={"card"}
          style={{
            top: this.calcTop(),
            zIndex: -index + MAX_Z_INDEX,
            position: "fixed",
            transform:
              scroll > showTime && scroll < showEnd
                ? "scale(1)"
                : `scale(${1 - index * SCALE_DOWN_AMOUNT})`,
            transition:
              "box-shadow 0.3s, transform 0.3s, filter 0.3s, top ease-in-out 0.3s, transform 0.3s",
            filter:
              scroll > showTime || this.state.hovering ? null : "grayscale(1)"
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
