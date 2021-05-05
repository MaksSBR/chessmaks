// import React,{useState} from 'react';


// const ColorTheme = () => {

//   // цветовые решения доски
//   const [ whiteCell, setWhiteCell ] = useState('#ffd296');
//   const [ blackCell, setBlackCell ] = useState('#3b2a15');

//   // цветовые решения фигур
//   const [ whiteFigure, setWhiteFigure ] = useState('#ffffff');
//   const [ blackFigure, setBlackFigure ] = useState('#000000');

//   // цветовые решения возможных ходов
//   const [ colorPossibleMoves, setcolorPossibleMoves ] = useState('#26590e');
//   //цветовое решение взятия фигур
//   const [ colorPossibleTake, setcolorPossibleTake ] = useState('#6e0e0e');

//   // цветовые решения рамок клеток
//   const [ colorBorder, setColorBorder ] = useState('black');
//   const [ colorBorderActive, setColorBorderActive ] = useState('#090963');
// }

// export default ColorTheme;


const colorTheme = {
  whiteCell: '#ffd296',
  blackCell: '#3b2a15',
  whiteFigure: '#ffffff',
  blackFigure: '#000000',
  colorPossibleMoves: '#26590e',
  colorPossibleTake:  '#6e0e0e',
  colorBorder: 'black',
  colorBorderActive: '#090963',
  colorBorderCheck: '#db0202',
  colorLastMove: '#baba07',
}

export default colorTheme;
