import React from 'react';

import *as chessImg from '../../../data-chess-figure/chess-img';

import './tranfsormPawn.css';

const TransformPawn = ({pawnTransform, setPawnTransform }) => {
  const {visible,colorFigure} = pawnTransform;
  const buttons = [ 'bishop', 'knight', 'rook', 'queen'  ];
  const colorShadowFigure = (colorFigure === 'white') ? 'black' : 'white';

  if (!visible) {
    return null
  };

  return (
    <div
      className = 'modal-pawn'
      onClick = {
        () => setPawnTransform(
          (state) => {
            let newstate = {...state};
            newstate.visible = false;
            return newstate;
          }
        )
      }>

      <div className ="transform-pawn-panel" onClick = {e => e.stopPropagation}>
        { buttons.map ((fig,ind) => {
          const label = `${colorFigure}${fig}`;
          return (
            <div
            className ="transform-pawn"
            key = {'1000'+ind}
            onClick = { () => setPawnTransform( (state) => {
              let newPawnTransform = {...state};
              newPawnTransform.toTransForm = fig;
              newPawnTransform.visible = false;
              return newPawnTransform
            } ) } >
              <img style ={{ filter: `drop-shadow(0px 0px 0.2vh ${colorShadowFigure})`}} src = { chessImg[label] } alt = {fig.split('')[0].toUpperCase()} />
          </div>
          )
        })  }
      </div>
    </div>
  )
};

export default TransformPawn;
