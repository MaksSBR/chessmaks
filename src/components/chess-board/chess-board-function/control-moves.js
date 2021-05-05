import dataFigureChess from '../../data-chess-figure';

const controlMoves = (colorFigure,board,moveLog,stateWhitePlayer, stateBlackPlayer,gameIs) => {
  if (!gameIs) { return false}
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((board[i][j].figure)&& (board[i][j].colorFigure === colorFigure ) ) {
        let arr = dataFigureChess[board[i][j].figure].isPosibleMove(i,j,board,board[i][j],moveLog,stateWhitePlayer, stateBlackPlayer);
        if (arr.length > 0) {
          return false
        };
      };
    };
  };
  return  true
};

export default controlMoves;
