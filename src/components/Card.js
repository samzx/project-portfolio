import React from "react";

class Card extends React.Component {
  state = {
    hovering: false,
    buttonEnabled: false
  };

  constructor(props) {
    super(props);
    this._card = React.createRef();
  }

  componentDidMount() {
    // window.addEventListener('scroll', () => {
    //   const { y } = this._card.current.getBoundingClientRect();
    //   const cardPos = this.props.scrollY + y
    //   this.setState(() => ({ hovering: this.props.scrollBarPos > cardPos, buttonEnabled: true }))
    // })
  }

  handleClick = () => {
    this.setState(prevState => ({ hovering: !prevState.hovering }));
    setTimeout(() => {
      this.setState(prevState => ({
        buttonEnabled: !prevState.buttonEnabled
      }));
    }, 300);
  };

  render() {
    const { item } = this.props;
    return (
      <div
        className={"card"}
        style={!item.src ? { cursor: "default" } : null}
        onClick={this.handleClick}
        ref={this._card}
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
                  onClick={this.handleClick}
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
