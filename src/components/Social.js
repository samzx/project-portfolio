import React from "react";

import { follow, profile } from "../data/social";

const Social = () => (
  <div style={{ textAlign: "center" }}>
    {[...profile, ...follow].map(link => (
      <div
        style={{ textAlign: "center", margin: "1rem", display: "inline-block" }}
        key={link.name}
      >
        <a href={link.src} target="_blank">
          <img width={50} src={link.image} />
        </a>
      </div>
    ))}
  </div>
);

export default Social;
