/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);

    const output = [];
    for(let i=0; i<intervals.length; i++) {
        if(output.length === 0 || output[output.length-1][1] < intervals[i][0]) {
            output.push(intervals[i]);
        } else {
            output[output.length-1][1] = Math.max(output[output.length-1][1], intervals[i][1])
        }
    }

    return output;
};