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
import UserForm from "./UserForm";
import TextAreaForm from "./TextAreaForm";
import SelectForm from "./SelectForm";


import Goal from './components/Goal/Goal';
import Garage from './components/Garage/Garage';
import PackingList from './components/PackingList/PackingList';

function App() {
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
  ];

  return (
    <div className="App">
      {/* Greeting Cards */}
      <section>
        <h1>Greeting Cards</h1>
        <Greet
          name="Brian Okello"
          age={22}
          school="Makerere University"
          address="Kampala, Uganda"
        />
        <Greet
          name="Aine Angella"
          age={20}
          school="Uganda Christian University"
          address="Mukono, Uganda"
        />
        <Greet
          name="Abaho Ethan"
          age={25}
          school="Ndejje University"
          address="Luweero, Uganda"
        />
      </section>

      {/* Form   */}
      <section>
        <h1>Form Examples</h1>
        <UserForm />
        <TextAreaForm />
        <SelectForm />
      </section>

      {/*  Goals*/}
      <section>
        <h1>Goal Example</h1>
        <Goal isGoal={true} />
        <Goal isGoal={false} />
      </section>

      {/* Garage  */}
      <section>
        <Garage cars={cars} />
      </section>

      {/*  Packing List  */}
      <section>
        <PackingList />
      </section>
    </div>
  );
}

export default App;
