import React from "react";
import { getScroll } from "../tools/Scroll";

class Helper extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => this.forceUpdate());
  }
  handleClick = () => {
    const scroll = getScroll();
    if (scroll < 0.99) {
      window.scrollTo(0, document.body.clientHeight);
    } else {
      window.scrollTo(0, 0);
    }
  };

  render() {
    return (
      <div className="helper">
        <div className="helper-bar" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Helper;
