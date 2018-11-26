import React from "react";
import Social from "./Social";

const color = "#4d036e";

class End extends React.Component {
  state = {
    oneScreenScroll: 1
  };

  setScreenScroll = () => {
    const oneScreenScroll =
      document.documentElement.clientHeight /
      (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    this.setState(() => ({ oneScreenScroll }));
  };

  componentDidMount() {
    this.setScreenScroll();
    window.addEventListener("resize", this.setScreenScroll);
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
          <h1 style={{ color }}>Find me around 👾</h1>
          <Social color={color} />
          <a className="end-button" href="mailto:team@solexstudios.com">
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default End;
