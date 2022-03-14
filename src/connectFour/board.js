import React from "react";
import { Square } from "./square";

export class Board extends React.Component {
  render() {
    return (
      <div>
        {this.props.board.map((row, i) => {
          // console.log("row: " + row);
          // console.log("i: " + i);
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
        {/* {console.log("row start: ")} */}
        {this.props.row.map((column, i) => {
          // console.log("row: " + this.props.rowNumber);
          // console.log("column: " + i);
          return (
            <Square
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
