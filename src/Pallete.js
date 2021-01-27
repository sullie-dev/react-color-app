import { withStyles } from "@material-ui/core";
import { PinDropRounded } from "@material-ui/icons";
import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import styles from "./styles/PalleteStyles";
import PalleteFooter from "./PalleteFooter";
import chroma from "chroma-js";


export default withStyles(styles)(
  class Pallete extends Component {
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
      const { classes } = this.props;
      const { colors, palleteName, emoji, id } = this.props.pallete;
      const { level, format } = this.state;
      const colorBoxes = colors[level].map((color) => (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
          palleteId={id}
          moreURL={`/pallete/${id}/${color.id}`}
          showingFullPallete
        />
      ));

      console.log(this.props);

      return (
        <div className={classes.Pallete}>
          {/* TODO(1): NavBar goes here */}
          <Navbar
            level={level}
            changeLevel={this.changeLevel}
            handleChange={this.changeFormat}
            showColorBar
          />
          <div className={classes.PalleteColors}>
            {/* TODO(2): Add in color boxes for pallete */}
            {colorBoxes}
          </div>
          {/* TODO(3): Add footer */}
          <PalleteFooter palleteName={palleteName} emoji={emoji} />
        </div>
      );
    }
  }
);
