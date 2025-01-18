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

    // Check 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) {
                return false;
            }
        }
    }


    return true;
}