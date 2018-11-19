import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home/home';
import ListGame from './Components/ListGame/listGame';
import GameDetail from './Components/GameDetail/gameDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/list-game">ListGame</Link></li>
          <li><Link to="/game-detail">Game detail</Link></li>
        </ul>

        <Route path="/" component={Home}/>
        <Route path="/list-game" component={ListGame}/>
        <Route path="/game-detail" component={GameDetail}/>
      </div>
      </div>
    );
  }
}

export default App;
