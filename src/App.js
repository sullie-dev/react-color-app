import "./App.css";
import Pallete from "./Pallete";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColours";
import { generatePallete } from "./colorHelpers";

function App() {
  return (
    <Switch>
      <Route exatch path="/" />
      <Route exact path="pallete/:id" />
    </Switch>

    // <div className="App">
    //   <Pallete pallete={generatePallete(seedColors[4])}/>
    // </div>
  );
}

export default App;
