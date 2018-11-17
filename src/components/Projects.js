import React from "react";
import { developments } from "../data/projects";
import Card from "../components/Card";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects" style={{height: `${1*developments.length}00vh`}}>
        <div className="project-container">
        <h1 className="project-title" >Let's see what I've made 🦁</h1>
          {developments.map((item, index) => (
            <Card
              key={item.name}
              item={item}
              index={index}
              scroll={this.props.scroll}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
