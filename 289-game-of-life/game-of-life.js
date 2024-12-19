/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const rows = board.length;
    const cols = board[0].length;
    const tempBoard = Array.from({ length: rows }, () => Array(cols).fill(0));;

    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) {
            tempBoard[i][j] = board[i][j];
        }
    }

    for(let row=0; row<rows; row++) {
        for(let col=0; col<cols; col++) {
            let liveNeighbors = 0;

            let top = Math.max(0, row-1);
            let bottom = Math.min(rows-1, row+1);
            let left = Math.max(0, col-1);
            let right = Math.min(cols-1, col+1);

            for(let i=top; i<=bottom; i++) {
                for(let j=left; j<=right; j++) {
                    if(!(i === row && j === col) && tempBoard[i][j] == 1) {
                        liveNeighbors++;
                    }
                }
            }

            if(liveNeighbors === 3) {
                board[row][col] = 1;
            } else if(liveNeighbors < 2 || liveNeighbors > 3) {
                board[row][col] = 0;
            }
        }
    }

};