import React from "react";

class Card extends React.Component {
  state = {
    hovering: false
  };
  render() {
    const { item } = this.props;
    return (
      <div
        onMouseEnter={() => {
          this.setState(() => ({ hovering: true }));
        }}
        onMouseLeave={() => {
          this.setState(() => ({ hovering: false }));
        }}
        className={"card"}
      >
        {
          <div
            className={
              this.state.hovering || !item.src
                ? "card-overlay"
                : "card-overlay card-overlay__hide"
            }
          >
            <div className="card-overlay-contents">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              {!!item.link && (
                <a
                  className="card-overlay-button"
                  href={item.link}
                  target="_blank"
                >
                  Details
                </a>
              )}
            </div>
          </div>
        }
        {item.src ? (
          <img src={item.src} className="image" />
        ) : (
          <div className="placeholder-image" />
        )}
      </div>
    );
  }
}

export default Card;
