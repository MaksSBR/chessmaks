import colorTheme from '../../visual-setting/color-theme';

import whoseMove from './whose-move';

const {
  whiteCell,
  blackCell,
  whiteFigure,
  blackFigure,
  colorPossibleMoves,
  colorPossibleTake,
  colorBorder,
  colorBorderActive,
  colorBorderCheck,
  colorLastMove
} = colorTheme;

//установка размеров label figure
const setfontSize = (figure) => {
  if (figure) return "7vh"
};

// установка цветов label figure
const setColorLabel = (colorFigure) => {
  if (colorFigure==='white') { return whiteFigure }
    else if (colorFigure==='black') { return blackFigure }
      else { return "grey" }
};

// установка цветов клеток
const setCollorCell = ( y,x,activeCell, moveLog  ) => {
  const { figure, posibleMove } = activeCell
  if (figure) {
      for (let cell of posibleMove) {
        if ((cell.y===y) && (cell.x===x)) {
          return ((cell.take) ? colorPossibleTake : colorPossibleMoves )
        };
      };
  };
  if (moveLog[moveLog.length-1] ) {
    const lastMove = moveLog[moveLog.length-1];
    const {
      fromMove: { x: fromX =null, y: fromY =null } ={},
      whereMove:{ x: whereX =null, y: whereY =null } ={}
    } = lastMove;
    if ((( y === fromY) && ( x === fromX)) || (( y === whereY) && ( x === whereX)) ){ return colorLastMove }
  }
  if ((y+x)%2) {return  whiteCell} else {return blackCell};
};

// установка границ клеток
const setBorderCell = ( y, x, activeCell, cell, moveLog,  stateWhitePlayer, stateBlackPlayer) =>{
  const statePlayer = (whoseMove(moveLog) === 'white') ? stateWhitePlayer.stateWhitePlayer :stateBlackPlayer.stateBlackPlayer

  if ( statePlayer.check && (cell.figure === 'king') && (cell.colorFigure === whoseMove(moveLog))) return ( `.4vh solid ${colorBorderCheck}`)

  if ((activeCell.y === y) && (activeCell.x === x )){
    return ( `.5vh solid ${colorBorderActive}`)
  } else{
    return ( `.3vh solid ${colorBorder}`)
  };
};

//  Стилизация клетки
function stylingCell ( y, x, activeCell, cell, moveLog, stateWhitePlayer, stateBlackPlayer)  {
  const { figure,colorFigure } = cell;
  return {
    backgroundColor: setCollorCell( y,x,activeCell, moveLog ),
    border: setBorderCell( y, x, activeCell, cell, moveLog,  stateWhitePlayer, stateBlackPlayer),
    color: setColorLabel( colorFigure ),
    fontSize: setfontSize( figure ),
  }
};

export default stylingCell;
