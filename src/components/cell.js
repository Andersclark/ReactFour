import React from 'react';

const cell = (props) => {

  return (
    <div className={`c4-cell ${props.status} ${props.winner === 'none' ? '' : 'c4-disabled'}`}></div>
  )
}
export default cell;
