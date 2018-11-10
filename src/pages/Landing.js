import React from "react";

import Hero from "../components/Hero"

import { follow, profile } from "../data/links"

const Landing = () => {
  return (
    <div className="app">
      <Hero />
      <div style={{textAlign: "center"}}>
        <h2>Projects</h2>
        <a href="/projects">Go to Projects 👉</a>
      </div>
      <h2 style={{textAlign: "center"}}>Profile</h2>
      {
        profile.map(link => <div style={{textAlign: "center", margin: "1rem"}} key={link.name}><a href={link.src} target="blank">{link.name}</a></div>)
      }
      <h2 style={{textAlign: "center"}}>Follow</h2>
      {
        follow.map(link => <div style={{textAlign: "center", margin: "1rem"}} key={link.name}><a href={link.src} target="blank">{link.name}</a></div>)
      }
    </div>
  );
}

export default Landing;