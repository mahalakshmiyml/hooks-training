import './App.scss';
import UseEffect from './Components/UseEffect/UseEffect';
import UseState from './Components/UseState/UseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello Hooks</h1>
        <UseState /> 
        <UseEffect />
      </header>
    </div>
  );
}

export default App;
