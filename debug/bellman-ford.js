require('../src/graphs/shortest-path/bellman-ford');

var glob = (typeof window === 'undefined') ? global : window;
var Edge = glob.Edge;
var bellmanFord = glob.bellmanFord;
var edges = [];
var vertexes = [0, 1, 2, 3, 4];
edges.push(new Edge(0, 1, -1));
edges.push(new Edge(0, 2, 4));
edges.push(new Edge(1, 2, 3));
edges.push(new Edge(1, 3, 2));
edges.push(new Edge(3, 1, 1));
edges.push(new Edge(4, 3, -3));
edges.push(new Edge(1, 4, 2));
edges.push(new Edge(3, 2, 5));

var paths = bellmanFord(vertexes, edges, 0);