import React from "react";

import Social from "./Social";
import Descriptions from "./Descriptions";
import Header from "./Header";

const synonyms = ["making", "building", "creating", "designing", "dreaming of"];

class Landing extends React.Component {
  handleCuriosity = () => {
    const INTERVAL = 800;
    const scrollDistance = 1; //document.body.scrollHeight;
    setTimeout(() => {
      window.scrollTo(0, scrollDistance);
    }, 0);
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, INTERVAL);
  };

  render() {
    const { scroll } = this.props;
    return (
      <div
        style={{
          opacity: scroll <= 0 ? 1 : 0,
          pointerEvents: scroll <= 0 ? null : "none",
          transition: "opacity 0.3s",
          position: "relative",
          display: scroll < 0.5 ? null : "none"
        }}
      >
        <div>
          <Header />
        </div>
        <div className="landing">
          <div className="landing-content">
            <h1 className="hero">Hey, I'm Sam</h1>
            <h1>
              I{" "}
              <span className="heart">
                <i className="fas fa-heart">
                  <span className="heart-alt">love</span>
                </i>
              </span>{" "}
              {<Descriptions descriptions={synonyms} />} things.
            </h1>
            <Social />
            <h2 className="landing-statement" onClick={this.handleCuriosity}>
              <i className="fas fa-seedling" /> Things below.
            </h2>
            {
              // <p style={{position: "absolute", bottom: 10, width: "100%", color: "#aaa"}}>Take a look at my projects below.</p>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
