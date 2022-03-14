export function calculateWinner(board, player) {
  const width = board[0].length;
  const height = board.length;

  // horizontalCheck
  for (let y = 0; y < height; y++) {
    // don't need to check last 3 counters on the row
    for (let x = 0; x < width - 3; x++) {
      if (
        board[y][x] === player &&
        board[y][x + 1] === player &&
        board[y][x + 2] === player &&
        board[y][x + 3] === player
      ) {
        return player;
      }
    }
  }

  // verticalCheck
  for (let y = 0; y < height - 3; y++) {
    // don't need to check last 3 counters on the row
    for (let x = 0; x < width; x++) {
      if (
        board[y][x] === player &&
        board[y + 1][x] === player &&
        board[y + 2][x] === player &&
        board[y + 3][x] === player
      ) {
        return player;
      }
    }
  }

  // DiagonalRightCheck
  //work from left to right
  for (let y = 0; y < height - 3; y++) {
    for (let x = 0; x < width - 3; x++) {
      if (
        board[y][x] === player &&
        board[y + 1][x + 1] === player &&
        board[y + 2][x + 2] === player &&
        board[y + 3][x + 3] === player
      ) {
        return player;
      }
    }
  }

  // DiagonalleftCheck
  //work from right to left
  for (let y = 0; y < height - 3; y++) {
    for (let x = width - 1; x > 2; x--) {
      if (
        board[y][x] === player &&
        board[y + 1][x - 1] === player &&
        board[y + 2][x - 2] === player &&
        board[y + 3][x - 3] === player
      ) {
        return player;
      }
    }
  }

  return null;
}
