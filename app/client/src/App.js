import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const test = await fetch('http://localhost:3000/retailer/1');
    const result = await test.json();
    console.log(result);
  }
  render() {
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
}

export default App;
