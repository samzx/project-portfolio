import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    zIndex: 1000,
    boxShadow: "0 0 5rem #ccc",
    position: "relative",
    top: "100px",
    maxWidth: "720px",
    margin: "auto",
    height: "400px",
    border: "none",
    left: 0,
    top: 40,
    right: 0,
    bottom: 0,
    height: "calc(100vh - 80px)",
    // Remove once iframe gone
    // overflow: "hidden",
    padding: "0"
  }
};

class Header extends React.Component {
  state = {
    ellipsis: this.props.forceShow,
    modalIsOpen: false
  };

  handleEllipsis = () => {
    this.setState(prevState => ({ ellipsis: !prevState.ellipsis }));
  };

  handleAbout = e => {
    e.preventDefault();
    this.setState(prevState => ({ modalIsOpen: true }));
  };

  closeModal = () => {
    this.setState(prevState => ({ modalIsOpen: false }));
  };

  render() {
    return (
      <div className="header">
        <div className="header__desktop">
          <a onClick={this.handleAbout} href="/blog/author/sam/">
            About
          </a>
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
          <a onClick={this.handleAbout} href="/blog/author/sam/">
            {" "}
            About
          </a>
          <a href="/blog">Blog</a>
        </div>
        {
          // Modal
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            shouldCloseOnOverlayClick
            contentLabel="About Modal"
            ariaHideApp={false}
            closeTimeoutMS={300}
          >
            {
              // Modal Contents
              <div className="modalContainer">
                <div className="closeModal" onClick={this.closeModal}>
                  <i className="fas fa-times" />
                </div>
                {
                  <iframe
                    src="https://www.samxie.net/blog/author/sam/"
                    style={{
                      width: "100%",
                      height: "calc(100% - 39px)",
                      border: 0,
                      position: "absolute"
                    }}
                  />
                }
              </div>
            }
          </Modal>
        }
      </div>
    );
  }
}

export default Header;
