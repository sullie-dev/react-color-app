import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PalleteFooter from "./PalleteFooter";
import styles from './styles/PalleteStyles';
import chroma from "chroma-js";

class SingleColorPallete extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.pallete, this.props.colorId);
    this.state = {
      format: "hex",
    };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(pallete, colorToFilterBy) {
    let shades = [];
    let allColors = pallete.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { format } = this.state;
    const { palleteName, emoji, id } = this.props.pallete;
    const { classes } = this.props;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        background={color[format]}
        key={color.name}
        name={color.name}
        showingFullPallete={false}
      />
    ));
    return (
      <div className={classes.Pallete}>
        <Navbar handleChange={this.changeFormat} showColorBar={false} />
        <div className={classes.SingleColorPallete}>
          {colorBoxes}
          <div className={classes.BackButton}>
            <Link to={`/pallete/${id}/`}>
              GoBack
            </Link>
          </div>
        </div>
        <PalleteFooter palleteName={palleteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPallete);
