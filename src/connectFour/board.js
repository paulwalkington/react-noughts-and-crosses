import React from "react";
import { Counter } from "./counter";

export class Board extends React.Component {
  render() {
    return (
      <div>
        {this.props.board.map((row, i) => {

          return (
            <Row row={row} rowNumber={i} key={i} onClick={this.props.onClick} />
          );
        })}
      </div>
    );
  }
}

export class Row extends React.Component {
  render() {
    return (
      <div>
        {this.props.row.map((column, i) => {
          return (
            <Counter
              key={this.props.rowNumber + "-" + i}
              value={column}
              onClick={() => this.props.onClick(this.props.rowNumber, i)}
            />
          );
        })}
      </div>
    );
  }
}
