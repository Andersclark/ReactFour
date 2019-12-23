import React, { Component } from 'react';
import Column from './column.js'

class Board extends Component {

  state = {
    currentPlayer: 'p1',
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

  nextTurn = () => {
    let nextPlayer = (this.state.currentPlayer === 'p1') ? 'p2' : 'p1';
    this.setState({ currentPlayer: nextPlayer });
  }
  colClickHandler = (index) => {

    console.log('PLAYER: ', this.state.currentPlayer)
    console.log('COLUMN CLICKED: ', index)

    const columns = this.state.columns;
    let column = this.state.columns[index];
    for (let i = column.length - 1; i >= 0; i--) {
      if (column[i].owner === 'none') {
        column[i].owner = this.state.currentPlayer;
        this.setState({ columns: columns });
        this.nextTurn();
        break;
      }
    }
    this.nextTurn();
  }

  checkWinner = (col, cell) => {

  }



  render() {
    return (
      <div className="c4-board">
        {this.state.columns.map((column, index) => {
          return <Column
            cells={column}
            key={index}
            click={() => this.colClickHandler(index)}></Column>
        })
        }

      </div >
    )
  }
}

export default Board;
