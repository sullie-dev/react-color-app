import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PalleteList extends Component {
  render() {
    const { palletes } = this.props;
    return (
      <div>
        <h1>Hello tehre</h1>
        {palletes.map((pallete) => (
          <p>
            <Link to={`/pallete/${pallete.id}`}>{pallete.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}
