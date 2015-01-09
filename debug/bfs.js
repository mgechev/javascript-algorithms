var bfs = require('../src/graphs/searching/bfs').bfs;
var graph = [[1, 1, 0, 0, 1, 0],
             [1, 0, 1, 0, 1, 0],
             [0, 1, 0, 1, 0, 0],
             [0, 0, 1, 0, 1, 1],
             [1, 1, 0, 1, 0, 0],
             [0, 0, 0, 1, 0, 0]];
var shortestPath = bfs(graph, 1, 5);

console.log(shortestPath);