import React from "react";

const SHOW_TIME = 0.99;

class Helper extends React.Component {
  handleClick = () => {
    const { scroll } = this.props;
    if (scroll < SHOW_TIME) {
      window.scrollTo({ top: document.body.clientHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
