/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const matrixLength = matrix.length;

    for(let i=0; i<Math.floor((matrixLength+1)/2); i++) {
        for(let j=0; j<Math.floor(matrixLength/2); j++) {
            // temp = 7
            let temp = matrix[matrixLength-1-j][i];
            // 7 => 9
            matrix[matrixLength-1-j][i] = matrix[matrixLength-1-i][matrixLength-1-j];
            // 9 => 3
            matrix[matrixLength-1-i][matrixLength-1-j] = matrix[j][matrixLength-1-i];
            // 3 => 1;
            matrix[j][matrixLength-1-i] = matrix[i][j];
            // 1 => 7
            matrix[i][j] = temp;
        }
    }

};