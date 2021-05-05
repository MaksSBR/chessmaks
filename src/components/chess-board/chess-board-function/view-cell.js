import dataFigureChess from '../../data-chess-figure';

import * as chessImg from '../../data-chess-figure/chess-img';

import './view-cell.css'

// функция по показу содержимого клеток: либо фигур, либо координат клеток

function viewCell  ( cell,y,x )  {
  const { figure, colorFigure } = cell;

  if ( figure===null) {
  }else {
    const altName =dataFigureChess[figure];
    const label = `${colorFigure}${figure}`;
    const colorShadowFigure = (colorFigure === 'white') ? 'black' : 'white';

    return (
    <div className = 'chess-fig'>
      <img style ={{ filter: `drop-shadow(0px 0px 0.2vh ${colorShadowFigure})`}} src = { chessImg[label] } alt = {altName.shortName} />
    </div>)
  };
};

export default viewCell;
