import react, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ContextProvider }  from './Context';
import Component1 from './Component1';
import RandomComponent from './RandomComponent'

import UseEffectHooks from './useeffect/UseEffect';
import ReactRouter from './reactrouter/ReactRouter';

import UseRef from './useref/UseRef'

function App() {

  const [count, setCounter] = useState(0);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showForm, toggleForm] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('email', email);
    console.log('password', password);
  };

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
              <br /><br />
              <button onClick={() => {
                // toggleForm(false)
                toggleForm(!showForm)
              }}>Toggle Form</button>
              {
                showForm && (
                  <form onSubmit={onSubmit}>
                    <label>
                      <div>Email</div>
                      <input type="email" value={email} onChange={(event) => {
                        setEmail(event.target.value)
                      }}/>
                      <div>Password</div>
                      <input type="Password" value={password} onChange={(event) => {
                        setPassword(event.target.value)
                      }}/>
                    </label>
                    <button type="submit">Signup</button>
                  </form>
                )
              }
            {/* Component */}
              <ContextProvider value={{ text: "This text is passing via Context" }}>
                <Component1 />
              </ContextProvider>

              <RandomComponent />
              <UseEffectHooks />

              <ReactRouter />

              <br />
              <br />
              <br />
              <br />
              <UseRef />

              <br />
              <br />
      </header>
    </div>
  );
}

export default App;
