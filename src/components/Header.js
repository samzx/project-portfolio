import React from "react";

class Header extends React.Component {
  state = {
    ellipsis: this.props.forceShow
  };

  handleEllipsis = () => {
    this.setState(prevState => ({ ellipsis: !prevState.ellipsis }));
  };

  render() {
    return (
      <div className="header">
        <div className="header__desktop">
          <a href="/blog">Blog</a>
        </div>
        <div className="header__ellipsis">
          {!this.props.forceShow && (
            <i className="fas fa-ellipsis-v" onClick={this.handleEllipsis} />
          )}
        </div>
        <div
          className="header__mobile"
          style={{ opacity: this.state.ellipsis ? 1 : 0 }}
        >
          <a href="/blog">Blog</a>
        </div>
      </div>
    );
  }
}

export default Header;
