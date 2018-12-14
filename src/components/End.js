import React from "react";
import Social from "./Social";
import Header from "./Header";

const SHOW_TIME = 0.99;

class End extends React.Component {
  state = {
    oneScreenScroll: 1
  };

  setScreenScroll = () => {
    const oneScreenScroll =
      window.innerHeight / (document.body.clientHeight - window.innerHeight);
    this.setState(() => ({ oneScreenScroll }));
  };

  componentDidMount() {
    this.setScreenScroll();
  }

  render() {
    const { scroll } = this.props;
    const { oneScreenScroll } = this.state;
    const showTime = 1 - oneScreenScroll / 2;
    return (
      <div
        className="end"
        style={{
          opacity: scroll >= SHOW_TIME ? 1 : 0,
          // zIndex: scroll > SHOW_TIME ? 1 : -1,
          pointerEvents: scroll >= SHOW_TIME ? null : "none"
        }}
      >
        <div className="end-container">
          <Header forceShow />
          <h1 className="end-statement">Stay curious.</h1>
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
          <i className="far fa-file-code" />
        </a>
      </div>
    );
  }
}

export default End;
