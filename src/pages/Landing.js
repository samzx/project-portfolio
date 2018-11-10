import React from "react";

import Hero from "../components/Hero"

import { follow, profile } from "../data/links"

const Landing = () => {
  return (
    <div className="app">
      <Hero />
      <div style={{textAlign: "center"}}>
        <h1>Projects</h1>
        <a href="/projects">Go to Projects 👉</a>
      </div>
      <h1 style={{textAlign: "center"}}>Profile</h1>
      {
        profile.map(link => <div style={{textAlign: "center", margin: "1rem"}} key={link.name}><a href={link.src} target="blank">{link.name}</a></div>)
      }
      <h1 style={{textAlign: "center"}}>Follow</h1>
      {
        follow.map(link => <div style={{textAlign: "center", margin: "1rem"}} key={link.name}><a href={link.src} target="blank">{link.name}</a></div>)
      }
    </div>
  );
}

export default Landing;