import { calculateWinner } from "./calculateWinner";

describe("calculateWinner", () => {
  it("return red when four counters on same diagonal left line", () => {
    const board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, "red", null, null, null],
      [null, null, "red", null, null, null, null],
      [null, "red", null, null, null, null, null],
      ["red", null, null, null, null, null, null],
    ];

    const result = calculateWinner(board, "red");
    expect(result).toEqual("red");
  });
  it("return red when four counters on same diagonal right line", () => {
    const board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, "red", null, null, null],
      [null, null, null, null, "red", null, null],
      [null, null, null, null, null, "red", null],
      [null, null, null, null, null, null, "red"],
    ];

    const result = calculateWinner(board, "red");
    expect(result).toEqual("red");
  });
  it("return red when four counters on same vertical line", () => {
    const board = [
      [null, null, null, null, null, null, null],
      [null, null, null, "red", null, null, null],
      [null, null, null, "red", null, null, null],
      [null, null, null, "red", null, null, null],
      [null, null, null, "red", null, null, null],
      [null, null, null, null, null, null, null],
    ];

    const result = calculateWinner(board, "red");
    expect(result).toEqual("red");
  });

  it("return red when four counters on same horizontal line", () => {
    const board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, "red", "red", "red", "red"],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];

    const result = calculateWinner(board, "red");
    expect(result).toEqual("red");
  });
  it("return null when no entries", () => {
    const board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];

    const result = calculateWinner(board);
    expect(result).toEqual(null);
  });
});
