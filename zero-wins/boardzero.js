/*
You’re given a board game which is a row of squares, each labeled with an integer.
This can be represented by a list, e.g. [1, 3, 2, 0, 5, 2, 8, 4, 1]
Given a start position on the board, you “win” by landing on a zero,
where you move by jumping from square to square either left or right
the number of spaces specified on the square you’re currently on.
Your task is to implement the function:

def can_win(board, pos)

returns True if you can win the board from that starting pos, False otherwise
*/

var can_win = function(board, pos) {
  if ( board[pos + board[pos]] === 0 || board[pos - board[pos]] === 0 ){
    return true;
  } else {
    return false;
  }
};

var test_board = function(board, expected) {
  for (var pos=0; pos < board.length; pos++) {
    var result = can_win(board, pos);
    console.log(pos + ": " + board[pos] + " - " + matches_expectation(expected, pos, result));
  }
};

var matches_expectation = function(expect, pos, result) {
  //let's get crafty with the not operator
  return !!expect[pos] == result;
};

// tests
console.log("Initial Test Case");
var board =     [1, 3, 2, 0, 5, 2, 8, 4, 1];
var expected =  [0, 0, 0, 1, 0, 1, 0, 1, 0];
test_board(board, expected);

console.log("All Zeroes");
board =     [0, 0, 0, 0, 0, 0, 0, 0, 0];
expected =  [1, 1, 1, 1, 1, 1, 1, 1, 1];
test_board(board, expected);

console.log("All Ones");
board =     [1, 1, 1, 1, 1, 1, 1, 1, 1];
expected =  [0, 0, 0, 0, 0, 0, 0, 0, 0];
test_board(board, expected);

console.log("Ordered");
board =     [0, 1, 2, 3, 4, 5, 6, 7, 8];
expected =  [1, 1, 1, 1, 1, 1, 1, 1, 1];
test_board(board, expected);

console.log("Reverse Ordered");
board =     [8, 7, 6, 5, 4, 3, 2, 1, 0];
expected =  [1, 1, 1, 1, 1, 1, 1, 1, 1];
test_board(board, expected);
