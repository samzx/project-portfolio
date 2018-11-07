import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import Browser from "./components/Browser";
import Header from "./components/Header";

import images from "./data/images.json"

export const external = [
  "https://github.com/samzx",
  "https://www.linkedin.com/in/xiesam/",
  "https://medium.com/@samxie"
];

const customStyles = {
  content: {
    border: "0px",
    maxWidth: "720px",
    margin: "0 auto",
    overflow: "inherit",
    top: "15%",
    left: "0",
    right: "0",
    bottom: "25%",
    padding: "0"
  }
};

class App extends React.Component {
  state = {
    app: "",
    showModal: false
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Modal
          ariaHideApp={false}
          id="the-react-modal"
          isOpen={this.state.showModal}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          onRequestClose={this.closeModal}
          closeTimeoutMS={200}
        >
          <Browser closeModal={this.closeModal} />
        </Modal>
        <div className="image-container">
          {
            images.map(image => {
              return (
                <div className="card" key={image.src}>
                  <h1>{image.description}</h1>
                  <img src={image.src} className="image" />
                </div>
              );
            })
          }
        </div>
        {
          external.map(link => <div style={{textAlign: "center", margin: "1rem"}} key={link}><a href={link} target="blank">{link}</a></div>)
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
