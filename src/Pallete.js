import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Pallete.css";

export default class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, palleteName, emoji } = this.props.pallete;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[format]} name={color.name} key={color.id} />
    ));

    console.log(this.props)

    return (
      <div className="Pallete">
        {/* TODO(1): NavBar goes here */}
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Pallete-colors">
          {/* TODO(2): Add in color boxes for pallete */}
          {colorBoxes}
        </div>
        {/* TODO(3): Add footer */}
        <footer className="Pallete-footer">
          {palleteName}
          
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
