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
    const interval = 100;
    const scrollDistance = 10;
    for(let i=0; i<iterations; i++) {
      setTimeout(() => {
        window.scrollTo(0, scrollDistance)
      }, i*2*interval);
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, i*2*interval + interval);
    }
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
          <Header />
          <h1 className="hero">Hi there, I'm <span className="accent">Sam</span></h1>
          <h1>
            I <span className="heart">♥</span> {<Descriptions descriptions={synonyms} />} things.
          </h1>
          <Social />
          <h2 className="landing-statement" onClick={this.handleCuriosity}><i className="fas fa-fingerprint"/> Be curious.</h2>
        </div>
      </div>
    );
  }
}

export default Landing;
