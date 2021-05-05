import posibleMoveFigure from './possible-move-figure'

import {cleanActive} from '../../function-clean';

import whoseMove from './whose-move';

// Ф-я превращения пешки
const transform = ( y, x, activeCell,  setPawnTransform) => {
  setPawnTransform({
     visible: true,
     colorFigure: activeCell.colorFigure,
     toTransForm: null,
     y,
     x,
     ofY: activeCell.y,
     ofX: activeCell.x,
  });
};

// Ф-я передвижения фигур
const movFigures = ( y, x, board, cell, activeCell, setBoard, posMove) => {
    const {pawnTake,special} = posMove;
    setBoard( (state) => {
      let newBoard =[];
      for (let i = 0; i < state.length; i++) {
        newBoard[i] = [...state[i]]
      };
      // ход пешки - взятие на опережение
      if (pawnTake) {
        const {yT,xT} = pawnTake;
        newBoard[yT][xT] = {
          figure:null,
          colorFigure:null,
        };
      };
      // рокировка
      if ((special === 'shortCastling') || (special === 'longCastling')) {
        const castlingRookX = (special === 'shortCastling') ? 7 : 0;
        const castlingRookY = (activeCell.colorFigure === 'white') ? 0 : 7;
        newBoard[castlingRookY][castlingRookX] = {
          figure:null,
          colorFigure:null,
        };
        newBoard[castlingRookY][(special === 'shortCastling')? 5:3] = {
          figure:'rook',
          colorFigure: activeCell.colorFigure,
        };
      };
      // передвижение фигур -установка новой доски
      newBoard[y][x] = {
        figure: activeCell.figure,
        colorFigure: activeCell.colorFigure
      };
      newBoard[activeCell.y][activeCell.x] = {
        figure:null,
        colorFigure:null,
      };
      return newBoard;
    } );
};

// Ф-я  записи в журнал ходов
const  recMove  = (y, x, {figure,colorFigure}, activeCell, setMoveLog, {take, pawnTake, special}) => {
  setMoveLog( (state) => {
    let newMoveLog = [...state];
    // ход пешки - взятие на опережение
    if(pawnTake){
      figure = 'pawn';
      if (activeCell.colorFigure ==='white') {colorFigure = 'black'} else {colorFigure = 'white'}
    };
    // запись рокировки
    const featureLog = (special === 'shortCastling') ? '0-0' :
      (special === 'longCastling') ? '0-0-0':
      null;
    // запись хода фигуры
    newMoveLog.push(
      {
        figureMove: activeCell.figure,
        colorFigure: activeCell.colorFigure,
        take,
        fromMove: {
          y:activeCell.y,
          x:activeCell.x
        },
        whereMove: {
          x,
          y,
          figure: figure,
          color: colorFigure,
        },
        feature: featureLog,
      }
    );
    return newMoveLog;
  } );
};

//ф-я Установка активной клетки или шага фигуры с записью в журнал

function active  ( y,x,board,cell, activeCell, setBoard, setActiveCell, moveLog,  setMoveLog, pawnTransform, setPawnTransform, stateWhitePlayer, stateBlackPlayer)  {
  const { figure,colorFigure } =cell;
  const { posibleMove } = activeCell;
  if ( activeCell.figure ) {
    for (let posMove of posibleMove) {
      if ( (posMove.y === y) && ( posMove.x === x )) {
        // превращение пешки
        if (
          ((activeCell.figure === 'pawn') && (activeCell.colorFigure ==='white') && ( y === 7)) ||
          ((activeCell.figure === 'pawn') && (activeCell.colorFigure ==='black') && ( y === 0))
        ){
          transform( y, x, activeCell, setPawnTransform);
          return setActiveCell(cleanActive);
        } ;
        //Запись хода
        recMove(y,x,cell,activeCell,setMoveLog,posMove);
        //Cовершение хода
        movFigures( y,x,board,cell ,activeCell, setBoard, posMove);

        return setActiveCell(cleanActive);
      };
    };
  };

  if (!figure)  return setActiveCell(cleanActive);

  if ( ((whoseMove(moveLog) === 'white') && (colorFigure==='white')) || ((whoseMove(moveLog) === 'black') && (colorFigure==='black')) ){
    return (
      setActiveCell({
        colorFigure,
        figure,
        y:y,
        x:x,
        posibleMove:posibleMoveFigure(y,x,board,cell,moveLog, stateWhitePlayer, stateBlackPlayer)
      })
    )
  } else return setActiveCell(cleanActive);
};

export default active;
