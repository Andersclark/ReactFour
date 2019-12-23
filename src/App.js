import React, { Component } from 'react';
import Board from './components/board';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className="App-body">
          <Board></Board>
        </div>
      </div>
    );
  }
}
export default App;
