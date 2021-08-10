import react, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCounter] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
          <div>
              <div>counter: {count}</div>
              <button onClick= {() => {
                setCounter(count + 1);
              }}>Plus</button>
              <button onClick = {() => {
                setCounter(count - 1);
              }}>Minus</button>
          </div>
      </header>
    </div>
  );
}

export default App;
