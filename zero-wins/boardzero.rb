'''
You’re given a board game which is a row of squares, each labeled with an integer.
This can be represented by a list, e.g. [1, 3, 2, 0, 5, 2, 8, 4, 1]
Given a start position on the board, you “win” by landing on a zero,
where you move by jumping from square to square either left or right
the number of spaces specified on the square you’re currently on.
Your task is to implement the function:

def can_win(board, pos)

returns True if you can win the board from that starting pos, False otherwise

'''

def can_win(board, pos)
  board[pos + board[pos]] == 0 || board[pos - board[pos]] == 0
end

def test_board(board, expected)
  board.each_with_index { |p, i| puts "[#{i}]: #{p} - #{can_win(board, i) == !expected[i].zero?}"}
end

# Let's test some examples
puts "Initial Test Case"
board =     [1, 3, 2, 0, 5, 2, 8, 4, 1]
expected =  [0, 0, 0, 1, 0, 1, 0, 1, 0]
test_board(board, expected)

puts "All Zeroes"
board =     [0, 0, 0, 0, 0, 0, 0, 0, 0]
expected =  [1, 1, 1, 1, 1, 1, 1, 1, 1]
test_board(board, expected)

puts "All Ones"
board =     [1, 1, 1, 1, 1, 1, 1, 1, 1]
expected =  [0, 0, 0, 0, 0, 0, 0, 0, 0]
test_board(board, expected)

puts "Ordered"
board =     [0, 1, 2, 3, 4, 5, 6, 7, 8]
expected =  [1, 1, 1, 1, 1, 1, 1, 1, 1]
test_board(board, expected)

puts "Reverse Ordered"
board =     [8, 7, 6, 5, 4, 3, 2, 1, 0]
expected =  [1, 1, 1, 1, 1, 1, 1, 1, 1]
test_board(board, expected)
