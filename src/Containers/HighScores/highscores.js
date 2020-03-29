import React from "react";


function Highscores({highscoreList})  {
    return (
      <>
        <h1>HIGHSCORES</h1>
        <ul>
          { highscoreList.map((score, index)=> {
            return(
            <li key={index}>
              {score.player} beat {score.opponent} in {score.turns} turns at {score.time.toString()}
            </li>)
          })}
        </ul>
    </>)
}


export default Highscores;