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


// Remove numbers to create a puzzle
function removeNumbers(board: Board, numOfHoles: number): Board {
    const puzzle = board.map((row) => [...row]);
    let holes = numOfHoles;

    while (holes > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (puzzle[row][col] !== 0) {
            puzzle[row][col] = 0;
            holes--;
        }
    }

    return puzzle;
} 


// Count the number of solutions for a board
function countSolutions(board: Board): number {
    let solutions = 0;

    function helper(board: Board): void {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            helper(board);
                            board[row][col] = 0;
                        }
                    }
                    return;
                }
            }
        }
        solutions++;
    }

    helper(board);
    return solutions;
}


// Ensure the puzzle has a unique solution
function isUnique(board: Board): boolean {
    return countSolutions(board) === 1;
}

