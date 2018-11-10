import React from "react";

import Hero from "../components/Hero";

const Landing = () => {
  return (
    <div className="app">
      <Hero />
      <div style={{ textAlign: "center" }}>
        <h1>Projects</h1>
        <a href="/projects">Go to Projects 👉</a>
      </div>
    </div>
  );
};

export default Landing;
