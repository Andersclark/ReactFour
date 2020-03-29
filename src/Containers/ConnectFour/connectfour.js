import React, { Component } from 'react';
import Column from '../../components/column.js';
import './connectfour.css'


class Connectfour extends Component {
  constructor(props) {
    super(props);
    this.highscores = props.highscores
  }
  state = {
    playerOneName: '',
    playerTwoName: '',
    gameStarted: false,
    currentPlayer: 'p1',
    otherPlayer: 'p2',
    currentTurn: 1,
    winner: 'none',
    looser: 'none',
    log: [],
    columns: [
      [{ owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }],
      [{ owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }],
      [{ owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }],
      [{ owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }],
      [{ owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }],
      [{ owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }],
      [{ owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }, { owner: 'none' }],
    ],
  };

  render() {

   if(!this.state.gameStarted) {
     return(
       <>
         <form>
           <label htmlFor="p1name">Player One: </label>
           <input value={this.state.playerOneName} onChange={(event) => this.setState({playerOneName: event.target.value})}  type="text" id="p1name" name="p1name"/><br/>
           <label htmlFor="p2name">Player Two: </label>
           <input value={this.state.playerTwoName} onChange={(event) => this.setState({playerTwoName: event.target.value})} type="text" id="p2name" name="p2name"/><br/>
           <input type="submit" value="Start" onClick={ ()=> this.setState({ gameStarted: true })}/>
         </form>
       </>
     )
   }
   else {
   return (
     <div>
       {this.state.winner === 'none' ? <h1
           className={"c4-boardheader " + (this.state.currentPlayer === 'p1' ? this.state.playerOneName : this.state.playerTwoName + "'s turn")}>{`Player ${this.state.currentPlayer.charAt(1)}'s turn(${this.state.currentTurn})`}</h1> :
         <h1 className={"c4-boardheader " + (this.state.winner + "turn")}>Player {this.state.winner.charAt(1)} won
           in {this.state.currentTurn} turns</h1>}
       <div className="c4-board">
         {this.state.columns.map((column, index) => {
           return (
             <Column
               cells={column}
               winner={this.state.winner}
               key={index}
               click={() => this.colClickHandler(index)}>
             </Column>)
         })
         }

       </div>
     </div>
   )
 }
  }
  nextTurn = () => {
    if (this.state.winner === 'none') {
      let nextPlayer = this.state.currentPlayer === 'p1' ? 'p2' : 'p1';
      let nextTurn = (this.state.currentTurn + 1)
      this.setState({ currentPlayer: nextPlayer, otherPlayer: this.state.currentPlayer, currentTurn: nextTurn });
    }
  }
  colClickHandler = (index) => {

    if (this.state.winner === 'none') {
      const columns = this.state.columns;
      let column = this.state.columns[index];
      for (let cell = column.length - 1; cell >= 0; cell--) {
        if (column[cell].owner === 'none') {
          column[cell].owner = this.state.currentPlayer;

          this.setState({ columns: columns });
          this.checkWinner(column, cell)
          if (this.state.winner === 'none') { this.nextTurn() }
          break;
        }
      }
    }
  }
  checkWinner = (col, cell) => {
    this.checkWinHorizontal(cell)
    this.checkWinVertical(col)
    this.checkWinDiagonalUpRight(col, cell)
    this.checkWinDiagonalUpLeft(col, cell)
  }
  checkWinVertical(col) {
    let counter = 0;
    for (let cell of col) {
      if (cell.owner === this.state.currentPlayer) {
        counter++
        if (counter === 4) {
          this.endgame();
          break;
        }
      } else { counter = 0 }
    }
  }
  checkWinHorizontal(cell) {
    let counter = 0;
    for (let column of this.state.columns) {
      if (column[cell].owner === this.state.currentPlayer) {
        counter++
        if (counter === 4) {
          this.endgame();
          break;
        }
      } else { counter = 0 }
    }
  }
  checkWinDiagonalUpRight(col, cell) {

    let row = cell > 0 ? cell - 1 : cell
    let column = this.state.columns.indexOf(col)
    column = column < this.state.columns.length ?
      this.state.columns.indexOf(col) + 1 :
      this.state.columns.indexOf(col);
    let counter = 1;
    while (column < this.state.columns.length && row >= 0) {

      if (this.state.columns[column][row].owner === this.state.currentPlayer) {
        counter++
        if (counter === 4) {
          this.endgame();
          break;
        }
        row--  // up
        column++  // right
      } else {
        this.checkWinDiagonalDownLeft(col, cell, counter);
        break;
      }
    }
  }
  checkWinDiagonalUpLeft(col, cell) {
    let row = cell > 0 ? cell - 1 : cell;
    let column = this.state.columns.indexOf(col)
    column = column > 0 ? column - 1 : column;
    let counter = 1;
    while (column >= 0 && row >= 0) {

      if (this.state.columns[column][row].owner === this.state.currentPlayer) {
        counter++
        if (counter === 4) {
          this.endgame();
          break;
        }
        row--  // up
        column--  // left
      } else {
        this.checkWinDiagonalDownRight(col, cell, counter);
        break;
      }
    }
  }
  checkWinDiagonalDownRight(col, cell, counter) {
    let row = cell < 5 ? cell + 1 : cell;
    let column = this.state.columns.indexOf(col)
    column = column < this.state.columns.length ? column + 1 : column;
    while (column < this.state.columns.length && row < 6) {

      if (this.state.columns[column][row].owner === this.state.currentPlayer) {
        counter++

        if (counter === 4) {
          this.endgame();
          break;
        }
        row++  // down
        column++  // right
      } else { break; }
    }
  }
  checkWinDiagonalDownLeft(col, cell, counter) {
    let row = cell < 5 ? cell + 1 : cell;
    let column = this.state.columns.indexOf(col)
    column = column > 0 ? column - 1 : column;
    while (column > 0 && row < 6) {
      if (this.state.columns[column][row].owner === this.state.currentPlayer) {
        counter++

        if (counter === 4) {
          this.endgame();
          break;
        }
        row++  // down
        column--  // right
      } else { break }
    }
  }
  endgame() {
    if(this.state.currentPlayer === 'p1'){
      this.setState({ winner: this.state.playerOneName, looser: this.state.playerTwoName })
      this.highscores.add(this.state.playerOneName, this.state.playerTwoName, this.state.currentTurn)
    } else {
      this.setState({ winner: this.state.playerTwoName, looser: this.state.playerOneName })
      this.highscores.add(this.state.playerTwoName, this.state.playerOneName, this.state.currentTurn)
    }
  }
}
export default Connectfour;
