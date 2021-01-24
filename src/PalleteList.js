import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default class PalleteList extends Component {
  render() {
    const { palletes } = this.props;
    return (
      <div>
          <MiniPalette/>
        <h1>Hello tehre</h1>
        {palletes.map((pallete) => (
          <p>
              <MiniPalette {...pallete} />
            {/* <Link to={`/pallete/${pallete.id}`}>{pallete.paletteName}</Link> */}
          </p>
        ))}
      </div>
    );
  }
}
