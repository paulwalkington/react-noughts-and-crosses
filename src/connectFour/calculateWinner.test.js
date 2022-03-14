import { calculateWinner } from "./calculateWinner";

describe("itdss", () => {
  it("thing", () => {
    const board = [
      [null, "red", null, null, null, null, null],
      [null, "red", null, null, null, null, null],
      [null, "red", null, null, null, null, null],
      [null, "red", null, "yellow", null, null, null],
      [null, "red", null, null, null, null, null],
      [null, "red", null, null, null, null, null],
    ];

    const result = calculateWinner(board);
    expect(result).toEqual(null);
  });
});
