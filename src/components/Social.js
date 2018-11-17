import React from "react";

import { follow, profile } from "../data/social";
import { Github, Instagram, Medium, LinkedIn } from '../assets/SocialIcons'

const Icon = (name, width, color) => {
  switch (name) {
    case "Github":
      return <Github width={width} color={color}/>
    case "LinkedIn":
      return <LinkedIn width={width} color={color}/>
    case "Medium":
      return <Medium width={width} color={color}/>
    case "Instagram":
      return <Instagram width={width} color={color}/>
  }
}

const Social = (props) => (
  <div style={{ textAlign: "center" }}>
    {[...profile, ...follow].map(link => (
      <div
        style={{ textAlign: "center", margin: "1rem", display: "inline-block" }}
        key={link.name}
      >
        <a href={link.src} target="_blank">
            <div className="social-img">
              {Icon(link.name, 50, props.color)}
            </div>
        </a>
      </div>
    ))}
  </div>
);

export default Social;
