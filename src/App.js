/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import './App.css';
import './Greet.css';
import Greet from './Greet';

function App() {
  return (
    <div className="App">
      <h1>Greeting Cards</h1>
      <Greet name="Azairwe Mercy" age={23} school="Green Hill High School" address="Kampala, Uganda" />
      <Greet name="Aine Angella" age={20} school="St. Mary's College" address="Gulu, Uganda" />
      <Greet name="Abaho Ethan" age={25} school="Ndejje University" address="Luweero, Uganda" />
    </div>
  );
}

export default App;

