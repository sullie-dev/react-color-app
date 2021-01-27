import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from './styles/PalleteFooterStyles'

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
