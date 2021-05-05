const findKing = (board,colorFigure) => {
  for (let i = 0; i < 8; i++) {
   for (let j = 0; j < 8; j++) {
    if ((colorFigure === board[i][j].colorFigure) && (board[i][j].figure === 'king')) {
      return  { y:i, x:j, color:board[i][j].colorFigure  }
    }
   }
  }
};
export default findKing;
