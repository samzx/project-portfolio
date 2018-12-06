import React from "react";

import { follow, profile } from "../data/social";

const Social = props => (
  <div style={{ textAlign: "center" }}>
    {
      [...profile, ...follow].map(link => (
      <div
        style={{ textAlign: "center", margin: "1rem", display: "inline-block" }}
        key={link.name}
      >
        <a href={link.src} target="_blank">
          <div className="social-img"><i className={`${link.icon}`}></i></div>
        </a>
      </div>
    ))
    }
  </div>
);

export default Social;
