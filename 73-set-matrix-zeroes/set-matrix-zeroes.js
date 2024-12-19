/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = new Set();
    const colums = new Set();

    for(let i=0; i<matrix.length; i++) {
        for(j=0; j<matrix[0].length; j++) {
            // storing the rows and columns that contains '0'
            if(matrix[i][j] == 0) {
                rows.add(i);
                colums.add(j);
            }
        }
    }

    for(let i=0; i<matrix.length; i++) {
        for(j=0; j<matrix[0].length; j++) {
            // updating columns and rows that contains '0'
            if(rows.has(i) || colums.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};