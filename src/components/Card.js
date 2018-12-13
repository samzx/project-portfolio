import React from "react";

class Card extends React.Component {
  state = {
    hovering: false
  }

  scrollPos = () => {
    const { showTime, projectOffset, STARTING_OFFSET, innerHeight } = this.props;
    const scrollPos =
      showTime * (document.body.clientHeight - innerHeight) -
      projectOffset +
      innerHeight -
      STARTING_OFFSET - 77 - 150;
      return scrollPos;
  }
  
  handleClick = () => {
    window.scrollTo(0, (this.props.showTime) * (document.body.clientHeight - innerHeight) + 1);
  };

  calcTop = () => {
    const { showTime, scroll, showEnd } = this.props;
    if(scroll <= showTime) {
      return this.props.staticPos
    } else if (scroll > showTime && scroll < showEnd) {
      return 77 + 150
    } else {
      return -window.innerHeight
    }
  }

  render() {
    const { scroll, showTime, showEnd, showLength, index, src } = this.props;
    return (
      <div className="card-container">
        <div
          className={"card"}
          style={{
            top: this.calcTop(),
            zIndex: -index + 100,
            position: "fixed",//scroll > showTime ? "absolute" : "fixed",
            transform: `scale(${1 - index * 0.01})`,
            transition: "box-shadow 0.3s, transform 0.3s, filter 0.3s, top ease-in-out 0.3s",
            filter: scroll > showTime || this.state.hovering ? null : "grayscale(1)",
          }}
          onClick={this.handleClick}
          onMouseOver={() => this.setState({ hovering: true })}
          onMouseOut={() => this.setState({ hovering: false })}
        >
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
