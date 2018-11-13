import React from "react";
import { developments } from "../data/projects";
import Card from "../components/Card";

class Projects extends React.Component {
  state = {
    scrollBarPos: 0,
    scrollY: 0,
    documentHeight: 0
  };
  componentDidMount() {
    // window.addEventListener('scroll', () => {
    //   const innerHeight = window.innerHeight;
    //   const documentHeight = document.documentElement.scrollHeight;
    //   const scrollMax = documentHeight - window.innerHeight;
    //   const scrollY = window.scrollY;
    //   let scrollBarPos = 0;
    //   if (scrollMax != 0) {
    //     scrollBarPos = scrollY + innerHeight / 8;
    //   }
    //   this.setState(() => ({ scrollBarPos, scrollY, documentHeight }))
    // })
  }
  render() {
    const { scrollY, scrollBarPos, documentHeight } = this.state;
    return (
      <div className="projects">
        <div className="title">
          <h1>Let's see what I've made 🦁</h1>
          <h2>Apps, apps and more apps!</h2>
        </div>
        <div className="project-container">
          {developments.map(item => (
            <Card
              key={item.name}
              item={item}
              scrollY={scrollY}
              documentHeight={documentHeight}
              scrollBarPos={scrollBarPos}
            />
          ))}
        </div>
        <div style={{ margin: "30vh 0" }} />
      </div>
    );
  }
}

export default Projects;
