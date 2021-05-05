import React, { useState, useEffect } from 'react';

import ChessBoard from '../chess-board';
import GameLog from '../game-log';
import GameMenu from '../game-menu';

import  EndGame from '../modal-endgame'
import TransformPawn from '../chess-board/chess-board-function/tranfsormPawn/tranfsormPawn';
import {
  cleanPlayer,
  cleanPlayerNewGame,
  cleanActive,
  cleanBoard,
  cleanPawnTransform
} from '../function-clean';
import {
  newGameBoard,
  probaBoard
} from '../board-condition';

import './game.css';

const Game = () => {
  //статус игры начата/нет
  const [ gameIs, setGameIS ] = useState(false);

  //доска
  const [ board, setBoard ]  = useState( cleanBoard );

  //журнал ходов
  const [ moveLog, setMoveLog ] = useState ([]);

  //Активное ,выбранное поле
  const [ activeCell, setActiveCell] = useState (cleanActive);

  // Состояние игроков
  const [ stateWhitePlayer, setStateWhitePlayer ] = useState (cleanPlayer);
  const [ stateBlackPlayer, setStateBlackPlayer ] = useState (cleanPlayer);

  // управление компонента transformPawn
  const [ pawnTransform, setPawnTransform ] = useState (cleanPawnTransform);

  // //активная ячейка
  // useEffect(()=>{
  //   console.log(
  //     'activeCell=',activeCell,dangerBoard
  //     )
  // },[activeCell])

  //  обновление журнала в консоль
  // useEffect(()=>{
  //   console.log(
  //     'moveLog=',moveLog,
  //     )
  // },[moveLog])

    // useEffect(()=>{
    //   console.log(
    //     'stateWhitePlayer=',stateWhitePlayer,
    //     'stateBlackPlayer=',stateBlackPlayer
    //     )
    // },[stateWhitePlayer,stateBlackPlayer])


 const newGame = () => {
    const board = probaBoard;
    const arrCopy = [];
    for (let i=0; i < board.board.length; i++) {
      arrCopy[i] = [...board.board[i]]
    };
    setBoard(arrCopy);
    setMoveLog([]);
    setActiveCell(cleanActive);
    cleanPlayerNewGame(setStateWhitePlayer, board.player.costFigure);
    cleanPlayerNewGame(setStateBlackPlayer, board.player.costFigure)
    setPawnTransform(cleanPawnTransform);
    setGameIS(true);
  };

  const endGame = () => {
    setBoard(cleanBoard);
    setMoveLog([]);
    setActiveCell(cleanActive);
    setStateWhitePlayer(cleanPlayer);
    setStateBlackPlayer(cleanPlayer);
    setPawnTransform(cleanPawnTransform);
    setGameIS(false);
  };

  return (
    <div >
      <div className ="game">
        <TransformPawn
          pawnTransform = {pawnTransform}
          setPawnTransform = { setPawnTransform }/>
        <EndGame
          stateWhitePlayer = {stateWhitePlayer}
          stateBlackPlayer = {stateBlackPlayer}
           />
        <ChessBoard
          board = { board }
          setBoard = { setBoard }
          activeCell = { activeCell }
          setActiveCell = { setActiveCell }
          moveLog = {moveLog}
          setMoveLog = {setMoveLog}
          pawnTransform = {pawnTransform}
          setPawnTransform = {setPawnTransform}
          stateWhitePlayer = { {stateWhitePlayer, setStateWhitePlayer} }
          stateBlackPlayer = { {stateBlackPlayer, setStateBlackPlayer} }
          gameIs = {gameIs}
          />
        <GameLog moveLog = {moveLog} gameIs = {gameIs} />
      </div>
      <GameMenu newGame = { newGame } endGame = { endGame }/>
    </div>
  )
};

export default Game;
