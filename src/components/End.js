import React from "react";
import Social from "./Social";
import Header from "./Header";

const SHOW_TIME = 0.99;

class End extends React.Component {
  render() {
    const { scroll } = this.props;
    return (
      <div
        className="end"
        style={{
          opacity: scroll > SHOW_TIME ? 1 : 0,
          // zIndex: scroll > SHOW_TIME ? 1 : -1,
          display: scroll > 0.5 ? null : "none",
          pointerEvents: scroll > SHOW_TIME ? null : "none"
        }}
      >
        <div className="end-container">
          <Header forceShow />
          <h1 className="end-statement">
            Made with{" "}
            <div className="heart heart-end">
              <i className="fas fa-heart">
                <span className="heart-alt">love</span>
              </i>
            </div>
          </h1>
          <Social />
          {
            <a className="end-button" href="mailto:samxie.net@gmail.com">
              Contact
            </a>
          }
        </div>
        <a
          className="project-link project-link-source--meta"
          href="https://github.com/samzx/samxie"
          target="_blank"
        >
          <i className="fas fa-file-code" />
        </a>
      </div>
    );
  }
}

export default End;
