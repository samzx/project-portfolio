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
    scroll: 0,
    backgroundUrl: null
  };

  handleScroll = () => {
    const scrollMax =
      document.body.clientHeight - window.innerHeight;
    const scrollY = window.scrollY;
    const scroll = scrollY / scrollMax;
    this.setState(() => ({ scroll }));
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  setBackgroundUrl = (backgroundUrl) => {
    this.setState(() => ({ backgroundUrl }))
  }

  render() {
    const { scroll } = this.state;
    return (
      <div className="app">
        <div className="background" style={{background: `url(${this.state.backgroundUrl})`}}/>
        <Landing scroll={scroll} />
        <Projects scroll={scroll} setBackgroundUrl={this.setBackgroundUrl} />
        <End scroll={scroll} />
        <Helper scroll={scroll} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
