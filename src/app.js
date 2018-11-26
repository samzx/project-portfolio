import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import Projects from "./components/Projects";
import Landing from "./components/Landing";
import End from "./components/End";
import Helper from "./components/Helper";

class App extends React.Component {
  state = {
    scroll: 0
  };

  handleScroll = () => {
    const scrollMax =
      document.body.offsetHeight - window.innerHeight;
    const scrollY = window.scrollY;
    const scroll = scrollY / scrollMax;
    this.setState(() => ({ scroll }));
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { scroll } = this.state;
    return (
      <div className="app">
        {
          // <div className="back">🎲</div>
        }
        <Landing scroll={scroll} />
        <Projects scroll={scroll} />
        <End scroll={scroll} />
        <Helper scroll={scroll} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
