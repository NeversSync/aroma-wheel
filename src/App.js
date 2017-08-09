import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Quantitea Aroma Wheel</h2>
        </div>
        <p className="App-intro">
          Bommmbbbb teaaaaaaa!
        </p>
        <Main/>
      </div>
    );
  }
}

export default App;
