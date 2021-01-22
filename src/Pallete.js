import React, { Component } from "react";
import ColorBox from "./ColorBox";
import './Pallete.css'

export default class Pallete extends Component {
  render() {
    // console.log(this.props.colors.map((c) => c.name));
    const colorBoxes = this.props.colors.map((c)=> (
        <ColorBox background={c.color} name={c.name} key={c.name} />
    ));

    return (
      <div className="Pallete">
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
