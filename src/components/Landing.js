import React from "react";

import Social from "./Social";
import Descriptions from "./Descriptions";
import Header from "./Header";

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

  handleCuriosity = () => {
    const iterations = 2;
    const interval = 500;
    const scrollDistance = window.innerHeight - 50 - 77 - 150 - 20;
      setTimeout(() => {
        window.scrollTo(0, scrollDistance)
      }, 0);
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, interval);
  }

  render() {
    const { oneScreenScroll } = this.state;
    const { scroll } = this.props;
    return (
      <div
        style={{
          opacity: scroll <= 0 ? 1 : 0,
          pointerEvents: scroll <= 0 ? null : "none",
          transition: "opacity 0.3s",
        }}
      >
        <div>
          <Header/>
        </div>
        <div className="landing">
          <div
            className="landing-content"
          >
            <h1 className="hero">Hi there, I'm <span className="accent">Sam</span></h1>
            <h1>
              I <span className="heart">♥</span> {<Descriptions descriptions={synonyms} />} things.
            </h1>
            <Social/>
            <h2 className="landing-statement" onClick={this.handleCuriosity}><i className="fas fa-fingerprint"/> Be curious.</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
