import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from './styles/PalleteListsStyles'
import NewPalleteForm from "./NewPalleteForm";


class PalleteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/pallete/${id}`);
  }
  render() {
    const { palletes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/pallete/new" > Create New Pallete</Link>
          </nav>
          <div className={classes.palletes}>
            {palletes.map((pallete) => (
              <MiniPalette
                {...pallete}
                handleClick={() => this.goToPalette(pallete.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PalleteList);
