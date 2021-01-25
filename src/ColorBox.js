import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./ColorBox.css";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core";

const styles = {
  ColorBox: {
    width: "20%",
    height: "25%",
    height: (props) => (props.showingFullPallete ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: "1",
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.6 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.6 ? "white" : "black",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: "0",
  },
};

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
              className={`copy-overlay ${copied && "show"}`}
            />
            <div className={`copy-msg ${copied && "show"}`}>
              <h1 className={classes.colorName}>Copied!</h1>
              <p className={classes.copyText}>{background}</p>
            </div>
            <div className="copy-container">
              <div className="box-content">
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
