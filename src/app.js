import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import Projects from "./components/Projects";
import Landing from "./components/Landing";
import End from "./components/End";
import Helper from "./components/Helper";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {
          // <div className="back">🎲</div>
        }
        <Landing/>
        <Projects/>
        <End/>
        <Helper/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
