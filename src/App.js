import './App.css';
import Pallete from './Pallete';
import seedColors from './seedColours'
import {generatePallete} from "./colorHelpers"


function App() {
  console.log(generatePallete(seedColors[4]))

  return (
    <div className="App">
      <Pallete {...seedColors[4]}/>
    </div>
  );
}

export default App;
