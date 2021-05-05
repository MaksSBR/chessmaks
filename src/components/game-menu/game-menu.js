import React from 'react';

import './game-menu.css'

const GameMenu = (props) => {
  const { newGame, endGame } = props;
  return (
    <div className="game-menu">
      <div>
        <button
          className= "btn btn-success"
          onClick= {newGame}>
            New  Game
        </button>
        <button
          className= "btn btn-success"
          onClick= {endGame}>
            End Game
        </button>
        </div>
    </div>
  )
};

export default GameMenu;
