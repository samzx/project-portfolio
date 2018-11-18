import React from "react";

class Helper extends React.Component {
  handleClick = () => {
    const { scroll } = this.props;
    if (scroll != 1) {
      window.scrollTo(0, document.documentElement.scrollHeight);
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
