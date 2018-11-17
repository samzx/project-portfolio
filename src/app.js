import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import Projects from "./components/Projects";
import Landing from './components/Landing'

class App extends React.Component{
  state = {
    scroll: 0
  };
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const innerHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollMax = documentHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const scroll = scrollY / scrollMax;
      console.log(scroll);
      this.setState(() => ({scroll}))
    })
  }
  render() {
    return (
      <div className="app">
        {
          // <div className="back">🎲</div>
        }
        <Landing scroll={scroll} />
        <Projects scroll={scroll} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
