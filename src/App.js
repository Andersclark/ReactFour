import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import Connectfour from './Containers/ConnectFour/connectfour';
import Home from './Containers/Home/home';
import Highscores from './Containers/HighScores/highscores';
import Rules from './Containers/Rules/rules';
import './App.css';

class App extends Component {

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
                <Link className="navigationitem" to="/connectfour">Connect four</Link>
                <Link className="navigationitem" to="/rules">Rules</Link>
                <Link className="navigationitem" to="/highscores">Highscores</Link>
              </ul>
            </nav>
          </div>

          <div className="App-body">
            <Route path="/" exact component={Home} />
            <Route path="/connectfour" component={Connectfour} />
            <Route path="/highscores" component={Highscores} />
            <Route path="/rules" component={Rules} />

          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;


/*
TODO: Formulär för spelarnamn
TODO: Rules-page
TODO: Player-class
*/
