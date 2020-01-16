import React, { Component, useState } from 'react';
import Board from './Board';

// class Game extends Component {
//   state = {
//     history: [
//       {
//         squares: Array(9).fill(null)
//       }
//     ],
//     xIsNext: true,
//     stepNumber: 0
//   };

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     // this.setState({
//     //   history: history.concat([
//     //     {
//     //       squares: squares
//     //     }
//     //   ]),
//     //   xIsNext: !this.state.xIsNext
//     // });
//     this.setState({
//       history: [...history, { squares: squares }],
//       xIsNext: !this.state.xIsNext,
//       stepNumber: history.length
//     });
//   }

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: step % 2 === 0
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       const desc = move ? `Go to move # ${move}` : `Go to game start`;
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}> {desc} </button>
//         </li>
//       );
//     });

//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }

//     return (
//       <div className='game'>
//         <div className='game-board'>
//           <Board squares={current.squares} onClick={i => this.handleClick(i)} />
//         </div>
//         <div className='game-info'>
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return squares.filter(i => i === null).length ? null : 'draw';
// }

// export default Game;

const Game = () => {
  let [squares, setSquares] = useState(Array(9).fill(null));
  let [history, setHistory] = useState([{ squares }]);
  let [xIsNext, setXisNext] = useState(true);
  let [stepNumber, setStepNumber] = useState(0);

  const handleClick = i => {
    history = history.slice(0, stepNumber + 1);
    current = history[history.length - 1];
    squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...history, { squares: squares }]);
    setXisNext(!xIsNext);
    setStepNumber(history.length);
  };

  const jumpTo = step => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  let current = history[stepNumber];
  let winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move # ${move}` : `Go to game start`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}> {desc} </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={current.squares} onClick={i => handleClick(i)} />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return squares.filter(i => i === null).length ? null : 'draw';
}

export default Game;
