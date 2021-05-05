import findKing from './find-king';
import whoseMove from './whose-move';

import dataFigureChess from '../../data-chess-figure';

const controlCheck = (board, moveLog, stateWhitePlayer, stateBlackPlayer) => {
  //устанавливаем цвет походившей фигуры
  const colorFigure = whoseMove(moveLog);
  const setStatePlayer = (colorFigure === 'black') ? stateBlackPlayer.setStateBlackPlayer : stateWhitePlayer.setStateWhitePlayer;

   // устанавливаем положение короля ждущего игрока
  const kingPosition = findKing(board,colorFigure);

  // проверяем под шагом ли король ждущего игрока
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((board[i][j].figure) && (board[i][j].colorFigure !== colorFigure )) {

        let arr = dataFigureChess[board[i][j].figure].posMove(i,j,board,board[i][j],moveLog,stateWhitePlayer, stateBlackPlayer);

        for (let i = 0; i < arr.length; i++) {
          if ((arr[i].y === kingPosition.y) && (arr[i].x === kingPosition.x)) {
            setStatePlayer((state) => {
              const newState = {...state};
              newState.check = true;
              return newState;
            });
            return true;
          };
        };
      };
    };
  };
  return false
};

export default controlCheck;
