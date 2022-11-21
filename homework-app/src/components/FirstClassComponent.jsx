import { Component } from "react";

class FirstClassComponent extends Component {
  render() {
    return (
      <img
        className="renderedImage"
        src={this.props.imageSource}
        alt={this.props.imageAlt}
      ></img>
    );
  }
}

export default FirstClassComponent;
