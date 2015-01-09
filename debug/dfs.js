var dfs = require('../src/graphs/searching/dfs').dfs;
var graph = [[1, 1, 0, 0, 1, 0],
             [1, 0, 1, 0, 1, 0],
             [0, 1, 0, 1, 0, 0],
             [0, 0, 1, 0, 1, 1],
             [1, 1, 0, 1, 0, 0],
             [0, 0, 0, 1, 0, 0]];
var pathExists = dfs(graph, 1, 5); // true

console.log(pathExists);