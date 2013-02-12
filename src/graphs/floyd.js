/* * * * * * * * * * * * * * * * * * * * * * * *

        A sample distance matrix
 
var graph = [[NaN, 7,   9,   NaN, NaN, 16],
             [7,   NaN, 10,  15,  NaN, NaN],
             [9,   10,  NaN, 11,  NaN, 2],
             [NaN, 15,  11,  NaN, 6,   NaN],
             [NaN, NaN, NaN, 6,   NaN, 9],
             [16,  NaN, 2,   NaN, 9,   NaN]];

* * * * * * * * * * * * * * * * * * * * * * * */

/**
 * Finds the shortest distance between all vertices of the graph
 * using the Floyd-Warshall algorithm.
 *
 * Complexity O(n^3)
 */
var floydWarshall = (function () {

    /**
     * Matrix used for the algorithm.
     */
    var dist;

    /**
     * Initialize the distance matrix
     *
     * @private
     * @param {array} graph Distance matrix of the array
     * @return {array} Distance matrix used for the algorithm
     */
    function init(graph) {
        var dist = [];
        var size = graph.length;
        for (var i = 0; i < size; i += 1) {
            dist[i] = [];
            for (var j = 0; j < size; j += 1) {
                if (i === j) {
                    dist[i][j] = 0;
                } else if (isNaN(graph[i][j])) {
                    dist[i][j] = Infinity;
                } else {
                    dist[i][j] = graph[i][j];
                }
            }
        }
        return dist;
    }

    /**
     * Finds the shortest path between each two vertices
     * Complexity O(n^3)
     *
     * @public
     * @param {array} graph The graph which should be processed
     * @return {array} The array which contains the shortest distance between each two vertices
     */
    return function (graph) {
        dist = init(graph);
        var size = graph.length;
        for (var k = 0; k < size; k += 1) {
            for (var i = 0; i < size; i += 1) {
                for (var j = 0; j < size; j += 1) {
                    if (dist[i][j] > dist[i][k] + dist[k][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }
        return dist;
    }
}());
