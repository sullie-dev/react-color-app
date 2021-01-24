import React, { Component } from "react";

export default class PalleteFooter extends Component {
  render() {
      const{palleteName,emoji} = this.props
    return (
      <div>
        <footer className="Pallete-footer">
          {palleteName}

          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}