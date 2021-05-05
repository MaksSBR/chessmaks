import React from 'react';

import whoseMove from '../chess-board/chess-board-function/whose-move';

import './game-log.css';

const GameLog = ({moveLog, gameIs}) => {
  const move = () => {
    // добавить выбор типа  игры
    if (!gameIs) return (
      <div style = {{
        color:'green',
        textAlign:'center',
        fontSize:'3vh'
        }}>
          start a New Game
      </div>
    );
    if (whoseMove(moveLog) === 'white') {
      return (
        <div style = {{
          textAlign:'center',
          color:'grey',
          fontSize:'2.5vh',
          background: '#040914',
          border: ".5vh solid #135861",
          borderRadius: "1vh",
          }}>
            black player walks
        </div>
      )
    } else {
      return (
        <div style = {{
          textAlign:'center',
          fontSize:'2.5vh',
          background: '#52929b',
          border: ".5vh solid #135861",
          borderRadius: "1vh",
          }}>
            white player walks
        </div>
      )
    };
  };
  return (
    <div className="game-log">
      {move()}
      {/* {moveLog.map ()} */}
    </div>
  )
};

export default GameLog;
