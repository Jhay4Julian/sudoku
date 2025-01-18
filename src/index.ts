// SODUKU LOGIC

type Board = number[][];

// Check if placing a number is valid
function isValid(board: Board, row: number, col: number, num: number): boolean {
    // Check row
    if (board[row].includes(num)) {
        return false;
    }

     // Check column
     for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) {
            return false
        };
    }


    return true;
}