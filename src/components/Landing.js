import React from "react";

import Social from "./Social";
import Descriptions from "./Descriptions";

const color = "$primary-color";
const synonyms = ["making", "building", "creating", "designing", "dreaming of"];

class Landing extends React.Component {
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
            display: scroll > oneScreenScroll / 2 ? "none" : null
          }}
        >
          <h1 className="hero">Hi there, I'm Sam</h1>
          <h1 className="" style={{ fontWeight: "normal", color }}>
            I <span style={{fontFamily:"serif"}}>♥</span> {<Descriptions descriptions={synonyms} />} things.
          </h1>
          <Social color={color} />
          <h1 style={{ color }}>Select a project below <i className="fas fa-hand-point-down"></i></h1>
        </div>
      </div>
    );
  }
}

export default Landing;
