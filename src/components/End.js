import React from 'react'
import Social from "./Social"

const color = "#3469a2"

class End extends React.Component {

  state = {
    oneScreenScroll: 1
  }

  componentDidMount() {
    const oneScreenScroll = window.innerHeight / (document.documentElement.scrollHeight - window.innerHeight);
    this.setState(() => ({ oneScreenScroll }))
  }

  render() {
    const { scroll } = this.props;
    const { oneScreenScroll } = this.state;
    const showTime = 1 - oneScreenScroll / 2;
    return(
      <div className="end" style={{
        opacity: scroll > showTime ? (scroll - showTime)/(1 - showTime) : 0,
        zIndex: scroll > showTime ? 1 : -1,
        display: scroll > showTime ? "flex" : "none",
      }}>
        <div className="end-container">
          <h1 style={{color}}>Find me around 👨‍💻</h1>
          <Social color={color} />
          <a className="button" href="mailto:team@solexstudios.com">Contact</a>
        </div>
      </div>
    );
  }
}

export default End;