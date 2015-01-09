var floydWarshall = require('../src/graphs/shortest-path/floyd-warshall').floydWarshall;

var distMatrix = [[NaN, 7,   9,   NaN, NaN, 16],
                  [7,   NaN, 10,  15,  NaN, NaN],
                  [9,   10,  NaN, 11,  NaN, 2],
                  [NaN, 15,  11,  NaN, 6,   NaN],
                  [NaN, NaN, NaN, 6,   NaN, 9],
                  [16,  NaN, 2,   NaN, 9,   NaN]];

/*
 [ [ 0, 7, 9, 20, 20, 11 ],
   [ 7, 0, 10, 15, 21, 12 ],
   [ 9, 10, 0, 11, 11, 2 ],
   [ 20, 15, 11, 0, 6, 13 ],
   [ 20, 21, 11, 6, 0, 9 ],
   [ 11, 12, 2, 13, 9, 0 ] ]
*/
var shortestDists = floydWarshall(distMatrix);

console.log(shortestDists);