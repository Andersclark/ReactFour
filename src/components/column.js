import React from 'react';
import Cell from './cell';

const column = (props) => {

  return (
    <div onClick={props.click} className="c4-col">
      {props.cells.map((cell, index) => {
        return <Cell status={cell.owner} key={index} />
      })}


    </div >
  )

}


export default column;
