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


// Solve the Sudoku board using backtracking
function solve(board: Board): boolean {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solve(board)) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

