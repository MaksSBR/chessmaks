
const cleanPlayerNewGame = (setStatePlayer,costFigure) => {
  setStatePlayer (
    {
      costFigure: costFigure,
      check: false,
      endGame: false,
    }
  )
};

export default cleanPlayerNewGame;
