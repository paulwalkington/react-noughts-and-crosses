import { Board } from "./board";
import React from "react";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [null, "red", null, null, null, null, null],
        [null, "red", null, null, null, null, null],
        [null, "red", null, null, null, null, null],
        [null, "red", null, "yellow", null, null, null],
        [null, "red", null, null, null, null, null],
        [null, "red", null, null, null, null, null],
      ],
      yellowIsNext: true,
    };
  }

  handleClick(row, column) {
    const board = this.state.board.slice();

    for (let rowNumber = board.length - 1; rowNumber >= 0; rowNumber--) {
      const existingSquare = board[rowNumber][column];

      if (existingSquare === null) {
        board[rowNumber][column] = this.state.yellowIsNext ? "yellow" : "red";
        this.setState({
          board: board,
          yellowIsNext: !this.state.yellowIsNext,
        });
        return;
      }
    }
  }

  render() {
    const board = this.state.board.slice();
    // const winner = calculateWinner(board);

    // let status;
    // if (winner) {
    //   status = "Winner: " + winner;
    // } else {
    //   status = "Next player: " + (this.state.yellowIsNext ? "X" : "O");
    // }

    const status =
      "Next player: " + (this.state.yellowIsNext ? "yellow" : "red");

    return (
      <div className="game">
        <div className="game-board">
          <Board
            board={board}
            onClick={(row, column) => this.handleClick(row, column)}
          />
        </div>
        <div className="game-info">{<div>{status}</div>}</div>
      </div>
    );
  }
}

// function calculateWinner(board) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//       return board[a];
//     }
//   }
//   return null;
// }
