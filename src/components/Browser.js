import React from "react";

class Browser extends React.Component {
  render() {
    return (
      <div className="browser">
        <div className="browser--banner">
          <span className="browser--close" onClick={this.props.closeModal}>
            ☓
          </span>
        </div>
        <iframe className="browser--app" src={this.props.app} />
      </div>
    );
  }
}

export default Browser;
