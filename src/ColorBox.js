import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from "./styles/ColorBoxStyles";
import { withStyles } from "@material-ui/core";

export default withStyles(styles)(
  class ColorBox extends Component {
    constructor(props) {
      super(props);
      this.state = { copied: false };
      this.chnageCopyState = this.chnageCopyState.bind(this);
    }

    chnageCopyState() {
      this.setState({ copied: true }, () => {
        setTimeout(() => this.setState({ copied: false }), 1500);
      });
    }
    render() {
      const {
        name,
        background,
        moreURL,
        showingFullPallete,
        classes,
      } = this.props;
      const { copied } = this.state;

      return (
        <CopyToClipboard text={background} onCopy={this.chnageCopyState}>
          <div style={{ background }} className={classes.ColorBox}>
            <div
              style={{ background }}
              className={`${classes.copyOverlay} ${
                copied && classes.showOverlay
              }`}
            />
            <div className={`${classes.copyMsg} ${copied && classes.showMessage}`}>
              <h1 className={classes.colorName}>Copied!</h1>
              <p className={classes.copyText}>{background}</p>
            </div>
            <div>
              <div className={classes.boxConetent}>
                <span className={classes.colorName}>{name}</span>
              </div>
              <button className={classes.copyButton}>Copy</button>
            </div>
            {showingFullPallete && (
              <Link to={moreURL} onClick={(e) => e.stopPropagation()}>
                <span className={classes.seeMore}>More</span>
              </Link>
            )}
          </div>
        </CopyToClipboard>
      );
    }
  }
);
