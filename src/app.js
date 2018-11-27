import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import Projects from "./components/Projects";
import Landing from "./components/Landing";
import End from "./components/End";
import Helper from "./components/Helper";
import About from './components/About'

class App extends React.Component {
  state = {
    scroll: 0,
    scrollMax: 0
  };

  handleScroll = () => {
    // TODO: OPTIMISE
    const scrollMax =
      document.body.clientHeight - window.innerHeight;
    const scrollY = window.scrollY;
    const scroll = scrollY / scrollMax;
    this.setState(() => ({ scroll, scrollMax }));
  };

  componentDidMount() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { scroll, scrollMax } = this.state;
    return (
      <div className="app">
        <About />
        <Landing scroll={scroll} />
        <Projects scroll={scroll} scrollMax={scrollMax} />
        <End scroll={scroll} />
        <Helper scroll={scroll} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
