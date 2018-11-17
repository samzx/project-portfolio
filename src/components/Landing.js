import React from "react";

import Social from "./Social";

const color = "#521372"

const Landing = (props) => (
  <div className="landing">
    <div className="landing-content">
      <h1 className="hero">Hi there, I'm Sam 👋</h1>
      {
        /* NOTICES */
        // <h1 style={{fontWeight: "normal", color}}>This site is a work in progress... Stay tuned 🤫</h1>
        <h1 style={{fontWeight: "normal", color}}>I like to make things 🎨</h1>
      }
      <Social color={color}/>
    </div>
  </div>
);

export default Landing;
