import "./App.css";
import Pallete from "./Pallete";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColours";
import { generatePallete } from "./colorHelpers";
import { Component } from "react";
import PalleteList from "./PalleteList";
import SingleColorPallete from "./SingleColorPallete";


class App extends Component {
  findPallete(id) {
    return seedColors.find(function (pallete) {
      return pallete.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PalleteList palletes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/pallete/:id"
          render={(routerProps) => (
            <Pallete
              pallete={generatePallete(
                this.findPallete(routerProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/pallete/:palleteId/:colorId"
          render={() => <SingleColorPallete/>}
        />
      </Switch>
    );
  }
}

export default App;
