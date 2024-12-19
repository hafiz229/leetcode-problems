/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let answer = [];
    let rows = matrix.length;
    let cols = matrix[0].length;
    let up = left = 0;
    let right = cols - 1;
    let down = rows - 1;

    while(answer.length < rows * cols) {
        // left to right traversal
        for(let col = left; col <= right; col++) {
            answer.push(matrix[up][col])
        }

        // right to down traversal
        for(let row = up + 1; row <= down; row++) {
            answer.push(matrix[row][right]);
        }

        if(up !== down) {
            // down to left traversal
            for(let col = right - 1; col >= left; col--) {
                answer.push(matrix[down][col]);
            }
        }

        if(left !== right) {
            // left to up traversal
            for(let row = down - 1; row > up; row--) {
                answer.push(matrix[row][left]);
            }
        }

        left++;
        right--;
        up++;
        down--;
    }

    return answer;
};