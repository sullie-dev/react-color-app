import './App.css';
import Pallete from './Pallete';
import seedColors from './seedColours'
import {generatePallete} from "./colorHelpers"


function App() {
  return (
    <div className="App">
      <Pallete pallete={generatePallete(seedColors[4])}/>
    </div>
  );
}

export default App;
