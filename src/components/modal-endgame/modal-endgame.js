import React from 'react';

import './endgame.css';

const EndGame = ({stateWhitePlayer,
  stateBlackPlayer}) => {

    const end = (stateWhitePlayer.endGame)? stateWhitePlayer.endGame :
      (stateBlackPlayer.endGame) ? stateBlackPlayer.endGame :
      false;
    const colorEND =(stateWhitePlayer.endGame)? 'Black' :
    (stateBlackPlayer.endGame) ? 'White' :
    false;

    if (!end) {
      return null
    }
    const label = (end === 'Mat') ? <p> {colorEND} Player WIN</p> :
      <p> DRAW </p>

    return (
      <div className = 'modal-end'>
        <div className = "endgame">
          {label}
        </div>
      </div>
    )

};

export default EndGame;
