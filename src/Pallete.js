import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Pallete.css";

export default class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.pallete;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} key={color.name} />
    ));

    return (
      <div className="Pallete">
        {/* TODO(1): NavBar goes here */}
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Pallete-colors">
          {/* TODO(2): Add in color boxes for pallete */}
          {colorBoxes}
          {/* <ColorBox
            background={this.props.colors[0].color}
            name={this.props.colors[0].name}
          /> */}
        </div>
        {/* TODO(3): Add footer */}
      </div>
    );
  }
}
