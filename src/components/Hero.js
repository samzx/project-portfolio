import React from "react";

import Social from "./Social";

const Hero = () => (
  <div className="header">
    <h1>Hi there, I'm Sam 👋</h1>
    <h2>This site is a work in progress. Stay tuned 🤫</h2>
    <Social />
    <a className="button" href="/projects">Projects →</a>
  </div>
);

export default Hero;
