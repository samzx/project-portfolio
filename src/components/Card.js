import React from "react";

class Card extends React.Component {
  state = {
    hovering: false,
    buttonEnabled: false,
    zoom: false
  };

  handleClick = () => {
    // ZOOMS INTO IMAGE
    console.log("Zoom in image")
    this.setState((prevState) => ({ zoom: !prevState.zoom }))
  };

  render() {
    const { item, index, scroll, total, showLength } = this.props;
    const showTime = index / (total)
    const showEnd = (index + 1) / (total)
    const FINAL_OFFSET = 100
    const STARTING_OFFSET = FINAL_OFFSET / total
    const staticPos = window.innerHeight - STARTING_OFFSET - (FINAL_OFFSET*index/total)
    return (
        <div
          className={"card"}
          style={{
            top: scroll > showTime ? staticPos + showLength * index : staticPos, // TODO: Fix this
            zIndex: -index + 100,
            position: scroll > showTime ? "absolute" : "fixed",
            // transform: `scale(${1 - index * 0.01})`
            }}
          onClick={this.handleClick}
        >
          {
          // <div
          //   className={
          //     this.state.hovering || !item.src || scroll > (showTime + (showEnd - showTime) * 3 / 4)
          //       ? "card-overlay"
          //       : "card-overlay card-overlay__hide"
          //   }
          // >
          //   <div className="card-overlay-contents">
          //     <h1>{item.name}</h1>
          //     <p>{item.description}</p>
          //     {!!item.link && (
          //       <a
          //         className="card-overlay-button"
          //         href={
          //           this.state.buttonEnabled || !item.src ? item.link : null
          //         }
          //         target="_blank"
          //         onClick={this.handleClick}
          //       >
          //         Details
          //       </a>
          //     )}
          //   </div>
          // </div>
          }
          <div
            className="outer-card"
            style={{
              maxWidth: "72rem",
              width: "100%",
              textAlign: "center",
              position: "fixed",
              top: 0,
              display: scroll > showTime && scroll < showEnd ? null : "none"
            }}
          >
            <div style={{padding: "2rem"}}>
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
          {item.src ? (
            <img
              style={{
                transform: this.state.zoom ? "scale(1.5)" : "scale(1)",
                transition: "transform 0.3s"
              }}
              src={item.src}
              className="image"
            />
          ) : (
            <div className="placeholder-image" />
          )}
        </div>
    );
  }
}

export default Card;
