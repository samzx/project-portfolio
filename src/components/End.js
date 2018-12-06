import React from "react";
import Social from "./Social";
import Blog from "./Blog";

const color = "$primary-color";

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
          <Blog />
          <h1 style={{ color }}>Find me around 🐼</h1>
          <Social color={color} />
          {
            <a className="end-button" href="mailto:samxie.net@gmail.com">
              Contact
            </a>
          }
          <p>
          <b><a className="project-link project-link-source" href="https://github.com/samzx/samxie" target="_blank">This Project is Open Source</a></b>
          </p>
        </div>
      </div>
    );
  }
}

export default End;
