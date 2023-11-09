import { useState } from 'react';
import '../style/App.css'

/* The code is defining a functional component called `App`. Inside the component, it is using the
`useState` hook from React to define two state variables: `board` and `isXNext`. */
const App = () => {
  const [board, setBoard] = useState(Array(9));
  const [isXNext, setIsXNext] = useState(true);
  
  // Reset the board to an empty state
  const resetCount = () => {
    setBoard(Array(9)); 
    setIsXNext(true); // Set isXNext to true to start the game with 'X'
  };

  

/* The `calculateWinner` function is a helper function that determines if there is a winner in the
tic-tac-toe game. It takes in an array of `squares` as a parameter, which represents the current
state of the game board. */
  const calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

/* The code block you provided is a function called `calculateWinner` that takes in an array of
`squares` as a parameter. */
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];  
      }
    }
    return null;
  };


// Updates the game board with the current player (X / O) and tje toggeles the player's turn.
  const handleClick = (index) => {
    const squares = [...board];
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = isXNext ? 'X' : 'O' ;
    setBoard(squares);
    setIsXNext(!isXNext);
  };


  // Square Buttons
  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );


// Code block for rendering game board

  const winner = calculateWinner(board);
  const status = winner ? `Winner: Player ${winner}` : `Your turn Player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="tic-tac-toe">
      <div className="container game-board">
        <div className="title"><h1>Tic-tac-toe</h1></div>
        <div className={`status ${winner ? 'winner-message' : ''}`}>{status}</div>
        <div className="row square-box">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row square-box">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row square-box">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button onClick={resetCount} className="reset">reset</button>
      </div>
    </div>
  );
};

export default App;
