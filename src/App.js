import './App.css';
import Pallete from './Pallete';
import seedColors from './seedColours'

function App() {
  return (
    <div className="App">
      <Pallete pallete={seedColors[4]}/>
    </div>
  );
}

export default App;
