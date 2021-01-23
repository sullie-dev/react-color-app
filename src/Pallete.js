import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Pallete.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

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
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        {/* TODO(1): NavBar goes here */}
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
