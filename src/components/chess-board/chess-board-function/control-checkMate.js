import {controlMoves, whoseMove} from  './index'
// import {controlMoves, findKing, whoseMove} from  './index'

const controlCheckMate = (board, moveLog, stateWhitePlayer, stateBlackPlayer,gameIs,check) => {
  //устанавливаем цвет походившей фигуры
  const colorFigure = whoseMove(moveLog);

  // const statePlayer = (colorFigure === 'black') ? stateBlackPlayer.stateBlackPlayer : stateWhitePlayer.stateWhitePlayer;

  const setStatePlayer = (colorFigure === 'black') ? stateBlackPlayer.setStateBlackPlayer : stateWhitePlayer.setStateWhitePlayer;

  // устанавливаем положение короля ждущего игрока
  // const kingPosition = findKing(board,colorFigure);

  // проверка есть ли ходы
  let noMoves = controlMoves(colorFigure,board,moveLog,stateWhitePlayer, stateBlackPlayer,gameIs)

  if (noMoves) {
    if (check) {
      setStatePlayer((state) => {
        const newState = {...state};
        newState.endGame = 'Mat';
        return newState;
      })
      return 'Mat'
    } else {
      setStatePlayer((state) => {
        const newState = {...state};
        newState.endGame = 'Pat';
        return newState;
      })
      return 'Pat'
    }
  }
  return false
};

export default controlCheckMate;
