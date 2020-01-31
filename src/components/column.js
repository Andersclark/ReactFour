import React from 'react';
import Cell from './cell';

const column = (props) => {

  return (
    <div onClick={props.click} className={`c4-col ${props.winner === 'none' ? '' : 'c4-disabled'}`}>
      {props.cells.map((cell, index) => {
        return <Cell status={cell.owner} winner={props.winner} key={index} />
      })}
    </div >
  )
};
export default column;
