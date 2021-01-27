import { withStyles } from "@material-ui/core";
import React, { Component } from "react";

const styles = {
  PalleteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  },
  Emoji:{
    fontSize: "1.5rem",
    margin: "0.1rem",
  },
};

export default withStyles(styles)(
  class PalleteFooter extends Component {
    render() {
      const { palleteName, emoji, classes } = this.props;
      return (
        <div>
          <footer className={classes.PalleteFooter}>
            {palleteName}

            <span className="emoji">{emoji}</span>
          </footer>
        </div>
      );
    }
  }
);
