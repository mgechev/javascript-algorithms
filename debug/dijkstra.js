var dijkstra = require('../src/graphs/shortest-path/dijkstra').dijkstra;

var distMatrix = [[Infinity, 7,        9,        Infinity, Infinity, 16],
                  [7,        Infinity, 10,       15,       Infinity, Infinity],
                  [9,        10,       Infinity, 11,       Infinity, 2],
                  [Infinity, 15,       11,       Infinity, 6,        Infinity],
                  [Infinity, Infinity, Infinity, 6,        Infinity, 9],
                  [16,       Infinity, 2,        Infinity, 9,        Infinity]];

var shortestDist = dijkstra(0, 2, distMatrix); // 9
console.log(shortestDist);