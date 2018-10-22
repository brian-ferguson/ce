import React, { Component } from 'react';
import logo from './ce.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
		<div className="wrapper">
          <img src={logo} className="App-logo" alt="logo" />
		</div>
        </header>
      </div>
    );
  }
}

export default App;
