def can_win(board, pos):
    if pos < 0 or pos > len(board) - 1:
        return False

    current_pos_value = board[pos]

    if is_winning_slot(board, pos - current_pos_value) or is_winning_slot(board, pos + current_pos_value):
        return True

    return False

def is_winning_slot(board, new_position):
    if new_position < 0 or new_position > len(board) - 1:
        return False # stepped too far!
    
    if board[new_position] == 0:
        return True

    return False

# Test!
board = [0, 0, 0, 0, 0, 0, 0]
print(can_win(board, 3))

board = [1, 3, 2, 0, 5, 2, 8, 4, 1]
print(can_win(board, 76)) # never trust the user!
