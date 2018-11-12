import React from "react";

class Card extends React.Component {
  state = {
    hovering: false,
    buttonEnabled: false
  };
  render() {
    const { item } = this.props;
    return (
      <div
        className={"card"}
        style={!item.src ? { cursor: "default" } : null}
        onClick={() => {
          this.setState(prevState => ({ hovering: !prevState.hovering }));
          setTimeout(() => {
            this.setState(prevState => ({
              buttonEnabled: !prevState.buttonEnabled
            }));
          }, 300);
        }}
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
                  href={
                    this.state.buttonEnabled || !item.src ? item.link : null
                  }
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
