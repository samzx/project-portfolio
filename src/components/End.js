import React from "react";
import Social from "./Social";
import Header from "./Header";

class End extends React.Component {
  state = {
    oneScreenScroll: 1
  };

  setScreenScroll = () => {
    const oneScreenScroll =
      window.innerHeight /
      (document.body.clientHeight - window.innerHeight);
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
          opacity: scroll > showTime ? (scroll - showTime) / (1 - showTime) : 0,
          zIndex: scroll > showTime ? 1 : -1,
          display: scroll > showTime ? "flex" : "none"
        }}
      >
        <div className="end-container">
          <Header forceShow/>
          <h1>Stay curious.</h1>
          <Social/>
          {
            <a className="end-button" href="mailto:samxie.net@gmail.com">
              Contact
            </a>
          }
        </div>
        <a className="project-link project-link-source--meta" href="https://github.com/samzx/samxie" target="_blank">
          <i className="far fa-file-code"/>
        </a>
      </div>
    );
  }
}

export default End;
