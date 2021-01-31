import "./App.css";
import Pallete from "./Pallete";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColours";
import { generatePallete } from "./colorHelpers";
import { Component } from "react";
import PalleteList from "./PalleteList";
import SingleColorPallete from "./SingleColorPallete";
import NewPalleteForm from "./NewPalleteForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palletes: seedColors };
    this.savePallete = this.savePallete.bind(this);
    this.findPallete = this.findPallete.bind(this);
  }
  findPallete(id) {
    return this.state.palletes.find(function (pallete) {
      return pallete.id === id;
    });
  }

  savePallete(newPallete) {

    this.setState({palletes: [...this.state.palletes,newPallete]})
    console.log(newPallete);
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/pallete/new"
          render={(routeProps) => (
            <NewPalleteForm savePallete={this.savePallete} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PalleteList palletes={this.state.palletes} {...routeProps} />
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
          render={(routerProps) => (
            <SingleColorPallete
              colorId={routerProps.match.params.colorId}
              pallete={generatePallete(
                this.findPallete(routerProps.match.params.palleteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
