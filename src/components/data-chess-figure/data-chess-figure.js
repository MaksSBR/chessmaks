
import {
  findKing,
  whoseMove
} from '../chess-board/chess-board-function';

//функционал фигур

// общая часть логики слона ладьи ферзя
const logBishRockQueenMove = ( y, x, board, colorFigure, arrDirection) => {
  const arrMove = [];
  for (let b=0; b<arrDirection.length; b++) {
    const directionY = arrDirection[b].yD
    const directionX = arrDirection[b].xD
    for (let i = 1; i < 8; i++) {
      const fy = directionY( y,i );
      const fx = directionX( x,i );
      if ((fy > 7) || (fy <0 ) || (fx > 7) || (fx < 0)) { break }
      const fieldBoard = board[ fy ][ fx ];
      if (!fieldBoard.figure) {
        arrMove.push( { y: fy, x: fx, take: false } );
      } else if ( colorFigure !== fieldBoard.colorFigure ) {
        arrMove.push( { y: fy, x: fx, take: true } );
        break;
      } else { break };
    };
  };
  return arrMove;
};
//ход пешки
function pawnMove (y,x,board,cell = {},moveLog =[]) {
  const { colorFigure } =cell
  const arrMove =[]

  let lastMove = {
    fromMove: {x:null,y:null},
    whereMove: {x:null,y:null},
  };
  if(moveLog[moveLog.length-1]) lastMove = moveLog[moveLog.length-1];
  const {
    fromMove: { y: fromY =null } ={},
    whereMove:{ x: whereX =null, y: whereY =null } ={}
  } = lastMove;

  if (colorFigure==='white') {
    if ( y<7 ) {
      if ( !board[y+1][x].figure ) {
        arrMove.push( { y:y+1, x, take:false } );
        if ( y===1  && !board[y+2][x].figure ) {
          arrMove.push( { y:y+2, x, take:false });
        };
      };
      if  ( x>0 && (board[y+1][x-1].figure) && !(colorFigure===board[y+1][x-1].colorFigure) )  {
        arrMove.push( { y:y+1, x:x-1, take:true });
      };

      if ((x > 0) && !(colorFigure === lastMove.colorFigure) && (lastMove.figureMove === 'pawn') && (fromY-whereY===2) && (whereX === x-1) && (whereY === y)) {
        arrMove.push( { y:y+1, x:x-1, take:true, pawnTake:{yT:whereY ,xT:whereX } });
      };

      if ( x<7 && (board[y+1][x+1].figure) && !(colorFigure===board[y+1][x+1].colorFigure)) {
        arrMove.push( { y:y+1, x:x+1, take:true });
      };

      if ((x<7) && !(colorFigure === lastMove.colorFigure) && (lastMove.figureMove === 'pawn') && (fromY-whereY===2) && (whereX === x+1) && (whereY === y)) {
        arrMove.push( { y:y+1, x:x+1, take:true,  pawnTake:{yT: whereY ,xT: whereX } });
      };
    };
  };
  if (colorFigure==='black') {
    if ( y>0 ) {
      if ( !board[y-1][x].figure ) {
        arrMove.push( { y:y-1, x, take:false } );
        if ( y===6  && !board[y-2][x].figure ) {
          arrMove.push( { y:y-2, x, take:false } );
        };
      };

      if ( x>0 && (board[y-1][x-1].figure) && !(colorFigure===board[y-1][x-1].colorFigure))  {
        arrMove.push( { y:y-1, x:x-1, take:true });
      };

      if ((x > 0) && !(colorFigure === lastMove.colorFigure) && (lastMove.figureMove === 'pawn') && (whereY-fromY===2) && (whereX === x-1) && (whereY === y))  {
        arrMove.push( { y:y-1, x:x-1, take:true, pawnTake:{yT:whereY ,xT:whereX } });
      };

      if ( x<7 && (board[y-1][x+1].figure) && !(colorFigure===board[y-1][x+1].colorFigure)) {
        arrMove.push( { y:y-1, x:x+1, take:true });
      };

      if ((x<7) && !(colorFigure === lastMove.colorFigure) && (lastMove.figureMove === 'pawn') && (whereY-fromY===2) && (whereX === x+1) && (whereY === y)) {
        arrMove.push( { y:y-1, x:x+1, take:true, pawnTake:{yT:whereY ,xT:whereX } });
      };
    };
  };
  return arrMove;
};
//ход слона
function bishopMove (y,x,board,cell) {
  const { colorFigure } =cell;

  const arrDirection = [
    { yD: (y,z) => y+z, xD: (x,z) => x+z, },
    { yD: (y,z) => y+z, xD: (x,z) => x-z, },
    { yD: (y,z) => y-z, xD: (x,z) => x+z, },
    { yD: (y,z) => y-z, xD: (x,z) => x-z, },
  ];

  return logBishRockQueenMove ( y, x, board, colorFigure, arrDirection);
};
//ход ладьи
function rookMove (y,x,board,cell) {
  const { colorFigure } =cell;

  const arrDirection = [
    { yD: (y,z) => y+z, xD: (x,z) => x, },
    { yD: (y,z) => y-z, xD: (x,z) => x, },
    { yD: (y,z) => y, xD: (x,z) => x+z, },
    { yD: (y,z) => y, xD: (x,z) => x-z, },
  ];

  return logBishRockQueenMove ( y, x, board, colorFigure, arrDirection);
};
//ход ферзя
function queenMove (y,x,board,cell) {
  const { colorFigure } =cell;

  const arrDirection = [
    { yD: (y,z) => y+z, xD: (x,z) => x, },
    { yD: (y,z) => y-z, xD: (x,z) => x, },
    { yD: (y,z) => y, xD: (x,z) => x+z, },
    { yD: (y,z) => y, xD: (x,z) => x-z, },
    { yD: (y,z) => y+z, xD: (x,z) => x+z, },
    { yD: (y,z) => y+z, xD: (x,z) => x-z, },
    { yD: (y,z) => y-z, xD: (x,z) => x+z, },
    { yD: (y,z) => y-z, xD: (x,z) => x-z, },
  ];

  return logBishRockQueenMove ( y, x, board, colorFigure, arrDirection);
};
//ход коня
function knightMove (y,x,board,cell) {
  const { colorFigure } =cell;
  const arrMove = [];

  const arrDirection = [
    { yD: (y) => y+2, xD: (x) => x-1, },
    { yD: (y) => y+2, xD: (x) => x+1, },
    { yD: (y) => y+1, xD: (x) => x-2, },
    { yD: (y) => y+1, xD: (x) => x+2, },
    { yD: (y) => y-2, xD: (x) => x-1, },
    { yD: (y) => y-2, xD: (x) => x+1, },
    { yD: (y) => y-1, xD: (x) => x-2, },
    { yD: (y) => y-1, xD: (x) => x+2, },
  ];

  for (let b=0; b<8 ;b++) {
    const field = arrDirection[b];
    const fy = field.yD (y);
    const fx = field.xD (x);
    if ( (fy < 8) && (fy >=0 ) && (fx < 8) && (fx >= 0)){
      const fieldBoard = board[ fy ][ fx ];
      if ( !fieldBoard.figure ) {
        arrMove.push( { y: fy, x: fx, take:false } );
      } else if ( colorFigure !== fieldBoard.colorFigure ) {
        arrMove.push( { y: fy, x: fx, take: true } );
      };
    };
  };
  return arrMove
};
//ход короля
function kingMove (y,x,board,cell,moveLog, stateWhitePlayer, stateBlackPlayer) {
  const { colorFigure } =cell;
  const arrMove = [];

  const arrDirection = [
    { yD:  (y) => y+1, xD: (x) => x, },
    { yD:  (y) => y-1, xD: (x) => x, },
    { yD:  (y) => y,   xD: (x) => x+1, },
    { yD:  (y) => y,   xD: (x) => x-1, },
    { yD:  (y) => y+1, xD: (x) => x+1, },
    { yD:  (y) => y+1, xD: (x) => x-1, },
    { yD:  (y) => y-1, xD: (x) => x+1, },
    { yD:  (y) => y-1, xD: (x) => x-1, },
  ];

  for (let b = 0; b < 8; b++) {
    const field = arrDirection[b];
    const fy = field.yD (y);
    const fx = field.xD (x);
    if ( (fy <= 7) && (fy >= 0 ) && (fx <= 7) && (fx >= 0)) {
      const fieldBoard = board[ fy ][ fx ];
      if (!fieldBoard.figure) {
        arrMove.push( { y: fy, x: fx, take: false } );
      } else if ( colorFigure !== fieldBoard.colorFigure ) {
        arrMove.push( { y: fy, x: fx, take: true } );
      };
    };
  };

  //рокировка если возможна
  let shortCastling = true;
  let longCastling = true;
  let moveKing = true;

  const statePlayer = (whoseMove(moveLog) === 'white') ? stateWhitePlayer.stateWhitePlayer.check
  :stateBlackPlayer.stateBlackPlayer.check;

  const yRook = (colorFigure === 'white') ? 0 : 7;

  moveLog.forEach((move)=>{
    if ((move.figureMove === 'king') && (colorFigure === move.colorFigure))  {
      moveKing = false;
    };
    if ((colorFigure === move.colorFigure) && (move.figureMove === 'rook')) {
      if ((move.fromMove.x === 7) && (move.fromMove.y === yRook)){
         shortCastling = false;
        } else if ((move.fromMove.x === 0) && (move.fromMove.y === yRook)) {
          longCastling = false;
        }
    };
  });

  if ((!statePlayer) && (shortCastling) && (moveKing) && !(board[yRook][5].figure) && !(board[yRook][6].figure)) {
    arrMove.push( { y: yRook, x: 6, take: false, special:'shortCastling' } );
  }
  if ((!statePlayer) && (longCastling) && (moveKing) && !(board[yRook][3].figure) && !(board[yRook][2].figure) && !(board[yRook][1].figure)) {
    arrMove.push( { y: yRook, x: 2, take: false, special:'longCastling' } );
  }
  return arrMove
};

//Проверка на возможность хода без угрозы королю
const checkingPossibleMove = (figureMove) => (...props) => {
  let arr = figureMove(...props);
  const  arrRes = arr.filter(
    (el) => {

      const [y,x,board,cell,moveLog,stateWhitePlayer, stateBlackPlayer] = props;
      const { colorFigure } =cell;
      //создаем шеллоу копи доски
      const coppyBoard = [];
      for (let i=0; i < board.length; i++) {
        coppyBoard[i] = [...board[i]]
      };
      //создаем доску с возм положением фигур после хода
      coppyBoard[el.y][el.x] = cell;
      coppyBoard[y][x] = { figure:null, colorFigure:null,  };
      // создаем переменную в которой храним обьект с данными короля игрока - после возм хода
      let kingPosition = findKing(coppyBoard,colorFigure);
      // перебираем доску с ходом на наличие угроз королю
      const vz = !coppyBoard.some((row, indRow) =>
        row.some((cell,indCell) => {
          //Добавляем в проверку поля при рокировке
          const castling = (el.special === 'shortCastling') ? {
              castlingY:(colorFigure === 'white')? 0 : 7 ,
              castlingX: 5 ,
            } :
            (el.special === 'longCastling') ? {
              castlingY:(colorFigure === 'white')? 0 : 7 ,
              castlingX: 3,
            } : {castlingY:null, castlingX:null};
          // перебираем фигуры противоположного игрока и смотрим будет ли взяитие короля
          if ((colorFigure !== cell.colorFigure) && ( cell.colorFigure )){
            const arrMove = dataFigureChess[cell.figure].posMove(indRow,indCell,coppyBoard,cell,moveLog,stateWhitePlayer, stateBlackPlayer);
            return arrMove.some((mov) => {
              if(((mov.y === kingPosition.y) && (mov.x === kingPosition.x) && (mov.take)) || ( (mov.y === castling.castlingY) && (mov.x === castling.castlingX))) return true
            })
          }
        })
      )
      return vz
    }
  )
  return arrRes;
}

const dataFigureChess = {
  pawn: {
    shortName:'P',
    cost: 1,
    isPosibleMove: checkingPossibleMove(pawnMove),
    posMove: pawnMove,
  },
  bishop: {
    shortName:'B',
    cost: 3.5,
    isPosibleMove: checkingPossibleMove(bishopMove),
    posMove: bishopMove,
  },
  knight: {
    shortName:'N',
    cost: 3,
    isPosibleMove: checkingPossibleMove(knightMove),
    posMove: knightMove,
  },
  rook: {
    shortName: 'R',
    cost: 5,
    isPosibleMove: checkingPossibleMove(rookMove),
    posMove: rookMove,
  },
  queen: {
    shortName: 'Q',
    cost: 9,
    isPosibleMove: checkingPossibleMove(queenMove),
    posMove: queenMove,
  },
  king: {
    shortName: 'K',
    cost: null,
    isPosibleMove: checkingPossibleMove(kingMove),
    posMove: kingMove,
  }
};

export default dataFigureChess;
