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
      transition: "0.05s",
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
  boxConetent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMsg: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      fontSize: "3rem",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.3)",
      width: "100%",
      textAlign: "center",
      padding: "1rem",
      textTransform: "uppercase",
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    },
  },
  showMessage:{
    opacity: "1",
    zIndex: "25",
    transform: "scale(1)",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
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
