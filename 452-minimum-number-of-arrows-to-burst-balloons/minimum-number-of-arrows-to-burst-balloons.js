/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let initialEnd = points[0][1];

    for(let i=0; i<points.length; i++) {
        if(initialEnd < points[i][0]) {
            arrows++;
            initialEnd = points[i][1];
        }
    }

    return arrows;
};