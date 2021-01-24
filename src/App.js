import "./App.css";
import Pallete from "./Pallete";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColours";
import { generatePallete } from "./colorHelpers";
import { Component } from "react";

class App extends Component {
  findPallete(id) {
    return seedColors.find(function (pallete) {
      return pallete.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Hello there</h1>} />
        <Route
          exact
          path="/:id"
          render={(routerProps) => (
            <Pallete
              pallete={generatePallete(
                this.findPallete(routerProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>

      // <div className="App">
      //   <Pallete pallete={generatePallete(seedColors[4])}/>
      // </div>
    );
  }
}

export default App;
