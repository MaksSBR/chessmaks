import dataFigureChess from '../../data-chess-figure';

//ф-я установки возможных ходов активной клетки
const posibleMoveFigure = (y,x,board,cell,moveLog, stateWhitePlayer, stateBlackPlayer) => {
  const { figure } =cell
  if(figure===null){
    return
  } else {
  return  dataFigureChess[figure].isPosibleMove(y,x,board,cell,moveLog, stateWhitePlayer, stateBlackPlayer)
  }
};

export default posibleMoveFigure;
