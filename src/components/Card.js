import React from "react";

const PLACEHOLDER_IMAGE_HEIGHT = 400;
export const HEADER_HEIGHT = 77;
const MOBILE_WIDTH = 600;
const CARD_SHADOW = 10;
const MOBILE_URL_HEIGHT = 100;

const MAX_Z_INDEX = 100;
const MAX_SCALE_DOWN_AMOUNT = 0.2;

export const projectDescriptionHeight = (myWindow, myThis) => {
  if (myWindow.innerWidth < MOBILE_WIDTH) {
    myThis.PROJECT_DESCRIPTION_HEIGHT = 52;
  } else {
    myThis.PROJECT_DESCRIPTION_HEIGHT = 72;
  }
};

class Card extends React.Component {
  state = {
    hovering: false,
    imgHeight: PLACEHOLDER_IMAGE_HEIGHT,
    active: false
  };

  componentDidMount() {
    // Set card position
    projectDescriptionHeight(window, this);
  }

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
      this.PROJECT_DESCRIPTION_HEIGHT;
    return scrollPos;
  };

  handleClick = () => {
    const {
      showTime,
      projectOffset,
      STARTING_OFFSET,
      innerHeight
    } = this.props;
    const SHOW_BUFFER = 2;
    const scrollCardStart =
      this.props.showTime * (document.body.clientHeight - innerHeight) +
      SHOW_BUFFER;
    const scrollDisplayTop = innerHeight - STARTING_OFFSET - projectOffset;
    const displayTargetOffsetFromTop =
      HEADER_HEIGHT + this.PROJECT_DESCRIPTION_HEIGHT;
    const scrollYTarget =
      scrollCardStart + scrollDisplayTop - displayTargetOffsetFromTop;

    window.scrollTo({ top: scrollYTarget, behavior: "smooth" });
    this.setState(prevState => ({ active: !prevState.active }));
  };

  handleImageLoad = ({ target: img }) => {
    this.setState(() => ({ imgHeight: img.offsetHeight }));
  };

  calculateTransform = () => {
    const { showTime, scroll, showEnd, staticPos, index, total } = this.props;
    if (scroll <= showTime) {
      return (
        `translateY(0) ` +
        `scale(${1 - (index / total) * MAX_SCALE_DOWN_AMOUNT})`
      );
    } else if (scroll > showTime && scroll <= showEnd) {
      return `translateY(${HEADER_HEIGHT +
        this.PROJECT_DESCRIPTION_HEIGHT -
        staticPos}px) scale(1)`;
    } else {
      return (
        `translateY(${-this.state.imgHeight -
          CARD_SHADOW -
          MOBILE_URL_HEIGHT -
          staticPos}px) ` +
        `scale(${1 - (index / total) * MAX_SCALE_DOWN_AMOUNT})`
      );
    }
  };

  render() {
    const {
      scroll,
      showTime,
      showEnd,
      index,
      src,
      staticPos,
      innerHeight,
      total,
      projectOffset,
      pageHeight,
      description
    } = this.props;
    return (
      <div className="card-container">
        <div
          className={"card"}
          style={{
            top:
              scroll > showTime
                ? staticPos + showTime * (pageHeight - innerHeight)
                : staticPos,
            zIndex: -index + 100,
            position: scroll > showTime ? "absolute" : "fixed",
            transform:
              scroll > showTime
                ? "scale(1)"
                : `scale(${1 - (index / total) * MAX_SCALE_DOWN_AMOUNT})`
          }}
          onClick={this.handleClick}
          onMouseOver={() => this.setState({ hovering: true })}
          onMouseOut={() => this.setState({ hovering: false })}
        >
          {src ? (
            <img
              src={src}
              className="image"
              onLoad={this.handleImageLoad}
              style={{
                opacity: scroll > showTime ? (this.state.active ? 0.2 : 1) : 0
              }}
            />
          ) : (
            <div className="placeholder-image" />
          )}
          {
            <div
              className="card-description-container"
              style={{
                height: this.state.imgHeight
              }}
            >
              <div className="card-description">
                {description.map((line, index) => (
                  <p
                    key={`card-description-line-${index}`}
                    style={{ opacity: this.state.active ? 1 : 0 }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Card;
