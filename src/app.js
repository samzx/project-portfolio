import React from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal';

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import Browser from './components/Browser';
import Header from './components/Header';

export const urls = [
  "https://mphwatch.solexstudios.com/0bfbef832c137478240043c7d430815a940e19ddb481928cf51b811fc02297cd",
  "http://www.solexstudios.com/project-drift",
  "https://bookitmaps.samxie.net/",
]

export const external = [
  "https://github.com/samzx",
  "https://www.linkedin.com/in/xiesam/",
]

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
    app: '',
    showModal: false,
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="app" >
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
          <Browser app={urls[this.state.app]} closeModal={this.closeModal} />
        </Modal>
        <button 
          onClick={() => {
            this.setState((prevState) => ({ 
              app: (prevState.app+1)%(urls.length),
              showModal: true
            }))
          }}
          style={{margin: "2rem auto", display: "inherit"}}
        >
          Click me!
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
