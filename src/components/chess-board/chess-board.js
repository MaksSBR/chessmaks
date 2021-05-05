import React,{useEffect} from 'react';

import MyContext from '../my-context';
import { controlCheckMate, controlCheck, stylingCell, viewCell, active } from './chess-board-function';


import './chess-board.css';

const ChessBoard = ({ board, setBoard, moveLog, setMoveLog, activeCell, setActiveCell, pawnTransform, setPawnTransform, stateWhitePlayer, stateBlackPlayer,gameIs }) => {
  // Превращение пешки и запись в журнал
  useEffect( ()=>{
    const { y, x, ofY, ofX, colorFigure, toTransForm } = pawnTransform;
    if (pawnTransform.toTransForm) {
      setBoard( (state) => {
        let newBoard = [...state];
        newBoard[y][x] = {
          figure: toTransForm,
          colorFigure: colorFigure,
        };
        newBoard[ofY][ofX] = {
          figure:null,
          colorFigure:null,
        };
        return newBoard;
      });
      setMoveLog(
        (state) => {
          let newMoveLog = [...state];
          newMoveLog.push(
            {
              figureMove: toTransForm,
              colorFigure: colorFigure,
              take:false,
              fromMove: {
                y:ofY,
                x:ofX,
              },
              whereMove: {
                x,
                y,
                figure: null,
                color: null,
              },
              feature: 'pawnTransform',
            }
          );
          return newMoveLog;
        }
      )
    };
  },[pawnTransform]);

  //проверка на  шах и пат
  useEffect(()=>{
    stateWhitePlayer.setStateWhitePlayer((state) => {
      const newState = {...state}
      newState.check = false;
      return newState
    });

    stateBlackPlayer.setStateBlackPlayer((state) => {
      const newState = {...state}
      newState.check = false;
      return newState
    });
    //Проверка "шага" королю выводит значение шаг
    const check = controlCheck(board, moveLog, stateWhitePlayer, stateBlackPlayer,)

    // Проверка на пат и  мат
    const endGame = controlCheckMate(board, moveLog, stateWhitePlayer, stateBlackPlayer,gameIs, check)

  },[board])

  // функция для сбора шахматной доски по клеткам
  const itemsCell = (row,y,board,activeCell) => {
    return (
      row.map ((cell,x) => {
        return (
          <div
            className = 'chessboard-cell-style'
            key={`${y}${x}`}
            style={ stylingCell( y,x,activeCell,cell,moveLog,stateWhitePlayer, stateBlackPlayer) }
            onClick = {() => active( y,x,board,cell, activeCell, setBoard, setActiveCell, moveLog,  setMoveLog, pawnTransform, setPawnTransform, stateWhitePlayer, stateBlackPlayer) }>
                {viewCell(cell,y,x)}
          </div>
        )})
    )
  };

  // функция для сбора шахматной доски по строкам
  const itemRow = (board,activeCell) => {
    return (
      board.map ((row,y) =>{
        let keyRow = 100+y;
        return (
          <div  key= {keyRow}
                className='chessboard-cell' >
            {  itemsCell(row,y,board,activeCell) }
          </div>
        )
      })
    )
  };

  return (
    <MyContext.Provider value={board}>
      <div className="chessboard">
        <div className="chessboard-row">
          { itemRow(board,activeCell) }
        </div>
      </div>
      </MyContext.Provider>
  )
};

export default ChessBoard;
