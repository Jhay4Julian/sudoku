// SODUKU LOGIC

type Board = number[][];

// Check if placing a number is valid
function isValid(board: Board, row: number, col: number, num: number): boolean {
    // Check row
    if (board[row].includes(num)) {
        return false;
    }


    return true;
}