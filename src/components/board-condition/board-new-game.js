// Типовое начальное состояния доски

const newGameBoard ={
  board:
    [
      [
        { figure:"rook",  colorFigure:"white", },
        { figure:"knight",colorFigure:"white", },
        { figure:"bishop", colorFigure:"white", },
        { figure:"queen", colorFigure:"white", },
        { figure:"king", colorFigure:"white", },
        { figure:"bishop", colorFigure:"white", },
        { figure:"knight", colorFigure:"white", },
        { figure:"rook", colorFigure:"white", }
      ],
      [
        { figure:"pawn", colorFigure:"white", },
        { figure:"pawn", colorFigure:"white", },
        { figure:"pawn", colorFigure:"white", },
        { figure:"pawn", colorFigure:"white", },
        { figure:"pawn", colorFigure:"white", },
        { figure:"pawn", colorFigure:"white", },
        { figure:"pawn", colorFigure:"white", },
        { figure:"pawn", colorFigure:"white", }
      ],
      [
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, }
      ],
      [
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
      ],
      [
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null,  },
        { figure:null, colorFigure:null, },
        { figure:null, colorFigure:null, },
      ],
      [
        { figure:null, colorFigure:null,  },
        { figure:null, colorFigure:null,  },
        { figure:null, colorFigure:null,  },
        { figure:null, colorFigure:null,  },
        { figure:null, colorFigure:null,  },
        { figure:null, colorFigure:null,  },
        { figure:null, colorFigure:null,  },
        { figure:null, colorFigure:null,  },
      ],
      [
        { figure:"pawn", colorFigure:"black", },
        { figure:"pawn", colorFigure:"black", },
        { figure:"pawn", colorFigure:"black", },
        { figure:"pawn", colorFigure:"black", },
        { figure:"pawn", colorFigure:"black", },
        { figure:"pawn", colorFigure:"black", },
        { figure:"pawn", colorFigure:"black", },
        { figure:"pawn", colorFigure:"black", },
      ],
      [
        { figure:"rook",  colorFigure:"black", },
        { figure:"knight",colorFigure:"black", },
        { figure:"bishop", colorFigure:"black", },
        { figure:"queen", colorFigure:"black", },
        { figure:"king", colorFigure:"black", },
        { figure:"bishop", colorFigure:"black", },
        { figure:"knight", colorFigure:"black", },
        { figure:"rook", colorFigure:"black", }
      ],
    ],
  player: {costFigure: '40',}
};
export default newGameBoard;
