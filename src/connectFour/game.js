import { Board } from "./board";
import React from "react";
import { calculateWinner } from "./calculateWinner";

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ],
      yellowIsNext: true,
      numberOfWinsForYellow: 0,
      numberOfWinsForRed: 0,
      winner: null,
    };
  }

  resetBoard() {
    console.log("reset board");
    this.setState({
      winner: null,
      board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ],
      yellowIsNext: true,
    });
  }

  handleClick(row, column) {
    if (this.state.winner) {
      return;
    }

    const board = this.state.board.slice();

    for (let rowNumber = board.length - 1; rowNumber >= 0; rowNumber--) {
      const existingSquare = board[rowNumber][column];

      if (existingSquare === null) {
        board[rowNumber][column] = this.state.yellowIsNext ? "yellow" : "red";
        this.setState({
          board: board,
          yellowIsNext: !this.state.yellowIsNext,
        });
        break;
      }
    }

    const isRedWinner = calculateWinner(board, "red");
    const isYellowWinner = calculateWinner(board, "yellow");

    if (isRedWinner) {
      this.setState({
        numberOfWinsForRed: this.state.numberOfWinsForRed + 1,
        winner: "red",
      });
    }
    if (isYellowWinner) {
      this.setState({
        numberOfWinsForYellow: this.state.numberOfWinsForYellow + 1,
        winner: "yellow",
      });
    }
  }

  render() {
    const board = this.state.board.slice();
    const winner = this.state.winner;
    let status;

    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.yellowIsNext ? "yellow" : "red");
    }

    const restartButton = (
      <button onClick={() => this.resetBoard()}>restart</button>
    );

    return (
      <div className="game">
        <div className="game-board">
          <Board
            board={board}
            onClick={(row, column) => this.handleClick(row, column)}
          />
        </div>
        <div className="game-info">
          <p>{"numberOfWinsForRed: " + this.state.numberOfWinsForRed}</p>
          <p>{"numberOfWinsForYellow: " + this.state.numberOfWinsForYellow}</p>
          <p>{status}</p>
          <p>{restartButton}</p>
        </div>
      </div>
    );
  }
}
