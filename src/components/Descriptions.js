import React from "react";

const DESCRIPTION_ROTATE_INTERVAL_MS = 2000;

class Descriptions extends React.Component {
  state = {
    description: "",
    index: 0
  };

  handleDescription = () => {
    const { descriptions } = this.props;
    const index = this.state.index;
    const description = descriptions[index];
    this.setState(prevState => ({
      description,
      index: (prevState.index + 1) % descriptions.length
    }));
  };

  componentDidMount() {
    this.handleDescription();
    setInterval(this.handleDescription, DESCRIPTION_ROTATE_INTERVAL_MS);
  }

  render() {
    return <span className="accent">{this.state.description}</span>;
  }
}

export default Descriptions;
