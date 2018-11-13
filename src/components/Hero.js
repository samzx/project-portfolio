import React from "react";

import Social from "./Social";

const Hero = () => (
  <div className="landing">
    <div className="hero">
      <h1>Hi there, I'm Sam 👋</h1>
      <h2>This site is a work in progress. Stay tuned 🤫</h2>
      <Social />
    </div>
    <div
      style={{
        cursor: "pointer",
        position: "absolute",
        bottom: "5rem",
        textAlign: "center",
        width: "100%"
      }}
    >
      <h1>
        <a
          onClick={() => {
            window.scrollTo(0,window.innerHeight)
          }}
        >👾</a>
      </h1>
    </div>
  </div>
);

export default Hero;
