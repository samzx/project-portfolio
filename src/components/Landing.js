import React from "react";

import Social from "./Social";
import Descriptions from "./Descriptions";

const color = "#521372";
const synonyms = ["making", "building", "creating", "designing", "dreaming of"];

class Landing extends React.Component {
  state = {
    oneScreenScroll: 1
  };

  setScreenScroll = () => {
    const oneScreenScroll =
      window.innerHeight /
      (document.body.offsetHeight - window.innerHeight);
    this.setState(() => ({ oneScreenScroll }));
  };

  componentDidMount() {
    this.setScreenScroll();
    window.addEventListener("resize", this.setScreenScroll);
  }

  render() {
    const { oneScreenScroll } = this.state;
    const { scroll } = this.props;
    return (
      <div className="landing">
        <div
          className="landing-content"
          style={{
            opacity:
              1 -
              (scroll > oneScreenScroll / 2
                ? 1
                : (scroll / oneScreenScroll) * 4),
            zIndex: scroll > oneScreenScroll / 2 ? -1 : 1,
            display: scroll > oneScreenScroll / 2 ? "none" : "unset"
          }}
        >
          <h1 className="hero">Hi there, I'm Sam</h1>
          <h1 className="majestic" style={{ fontWeight: "normal", color }}>
            I <span style={{fontSize: "0.67em"}}>❤️</span> {<Descriptions descriptions={synonyms} />} things.
          </h1>
          <Social color={color} />
          <h1 style={{ color }}>Select a card below 🦄</h1>
        </div>
      </div>
    );
  }
}

export default Landing;
