import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import Connectfour from './Containers/ConnectFour/connectfour';
import Home from './Containers/Home/home';
import Highscores from './Containers/HighScores/highscores';
import Rules from './Containers/Rules/rules';
import './App.css';
import HighscoreList from "./components/highscorelist";

class App extends Component {


  state = {
    highscores: new HighscoreList(),
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <nav>
              <ul className="navigationlinks">
                <Link className="navigationitem" to="/">
                  Home
                </Link>
                <Link className="navigationitem" to="/connectfour">Play</Link>
                <Link className="navigationitem" to="/rules">Rules</Link>
                <Link className="navigationitem" to="/highscores">Highscores</Link>
              </ul>
            </nav>
          </div>

          <div className="App-body">
            <Route path="/" exact component={Home} />
            <Route path="/connectfour" render={ () => <Connectfour highscores={this.state.highscores}/>}/>
            <Route path="/highscores" render={ () => <Highscores highscoreList={this.state.highscores.getHighscores()}  />}/>
            <Route path="/rules" component={Rules} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;