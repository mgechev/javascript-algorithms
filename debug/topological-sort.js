var topsort = require('../src/graphs/others/topological-sort').topologicalSort;
var graph = {
    v1: ['v2', 'v5'],
    v2: [],
    v3: ['v1', 'v2', 'v4', 'v5'],
    v4: [],
    v5: []
};
// ['G3', 'G4', 'G1', 'G5', 'G2']
var vertices = topsort(graph);