import { Board } from "./board";
import React from "react";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      numberOfWinsForX: 0,
      numberOfWinsForO: 0,
      gameFinshed: false,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const currentBoard = history[history.length - 1];
    const squares = currentBoard.squares.slice();

    if (this.state.gameFinshed || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });

    const winner = calculateWinner(squares);
    if (winner) {
      console.log(winner);
      if (winner === "X") {
        this.setState({
          numberOfWinsForX: this.state.numberOfWinsForX + 1,
          gameFinshed: true,
        });
      }
      if (winner === "O") {
        this.setState({
          numberOfWinsForO: this.state.numberOfWinsForO + 1,
          gameFinshed: true,
        });
      }
      return;
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      gameFinshed: false,
    });
  }

  render() {
    const history = this.state.history;
    const currentBoard = history[this.state.stepNumber];
    const winner = calculateWinner(currentBoard.squares);

    const moves = history.map((step, move) => {
      const desc = move !== 0 ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={currentBoard.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <p>{"numberOfWinsForX: " + this.state.numberOfWinsForX}</p>
          <p>{"numberOfWinsForO: " + this.state.numberOfWinsForO}</p>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
