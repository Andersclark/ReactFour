import React, { Component } from 'react';
import './article.css';

class Rules extends Component {

  render() {
    return (
      <article>
        <h1>RULES</h1>
        <p><strong>Connect four is a simple traditional game where the final objective is to get four chips in a row.</strong></p>
        <p>The game consists of two players taking turns to place a chip in one of the columns. The chip then drops down until it encounters the bottom of the board or another chip.</p>
        <p>The objective is for one player to get four chips in an unbroken line, either horizontally, vertically or diagonally. Since the board contains seven columns with six slots in each column this results in a maxium of fourty-two chips being placed during a single game. Split between the two players, this means each player has a maximum of 21 turns to accomplish their goal.</p>
        <p>Further reading: <a href="https://en.wikipedia.org/wiki/Connect_Four">Wikipedia: Connect four</a></p>
      </article>
    )
  }
}

export default Rules;