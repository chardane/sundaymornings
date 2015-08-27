### A Simple One-Dimensional Board Game

You’re given a board game which is a row of squares, each labeled with an integer. This can be represented by a list, e.g. `[1, 3, 2, 0, 5, 2, 8, 4, 1]`.

Given a start position on the board, you “win” by landing on a zero, where you move by jumping from square to square either left or right the number of spaces specified on the square you’re currently on.

Your task is to implement the function:

    def can_win(board, pos)

returns `true` if you can win the board from that starting pos, `false` otherwise
