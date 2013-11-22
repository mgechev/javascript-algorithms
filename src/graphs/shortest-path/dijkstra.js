/***********************************************
        A sample distance matrix
 
var graph = [[NaN, 7,   9,   NaN, NaN, 16],
             [7,   NaN, 10,  15,  NaN, NaN],
             [9,   10,  NaN, 11,  NaN, 2],
             [NaN, 15,  11,  NaN, 6,   NaN],
             [NaN, NaN, NaN, 6,   NaN, 9],
             [16,  NaN, 2,   NaN, 9,   NaN]];
***********************************************/


/**
 * Dijstra's shortest path algorithm.
 * For the implementation is not used the most suitable data structure (Fibonacci heap)
 * but the binary heap gives also good results. The implementation bellow finds
 * the minimum distance between two given nodes using a distance matrix.
 */
var dijstra = function () {

    var Heap = require('../../data-structures/heap.js').Heap,
        current,
        visited,
        distance,
        unvisited;


    /**
     * Creates a new node instance
     *
     * @constructor
     * @private
     * @param {number} id The id of the node
     * @param {number} distance The distance from the beginning
     */
    function Node(id, distance) {
        this.node = id;
        this.distance = distance;
    }

    /**
     * Compares the distances between two nodes.
     *
     * @private
     * @param {object} a A node
     * @param {object} b A graph node
     * @returns {number} The
     */
    function compareNodesDistance(a, b) {
        return b.distance - a.distance;
    }

    /**
     * Initialize all variables used for the algorithm
     *
     * @private
     * @param {number} src A start node
     */
    function init(src) {
        var currentTemp;
        current = {};
        visited = [];
        distance = [];
        unvisited = new Heap(compareNodesDistance);
        for (var i = 0; i < graph.length; i += 1) {
            currentTemp = new Node();
            if (src === i) {
                currentTemp.distance = 0;
            } else {
                currentTemp.distance = Infinity;
            }
            currentTemp.node = i;
            visited[i] = false;
            distance[i] = currentTemp;
            unvisited.add(currentTemp);
        }
        current.node = src;
        current.distance = 0;
    }

    /**
     * Dijkstra's shortest path algorithm
     *
     * @public
     * @param {number} src Source node
     * @param {number} dest Destination node
     * @param {array} graph A distance matrix of the graph
     * @returns {number} The shortest distance between the nodes
     */
    return function (src, dest, graph) {
        var  tempDistance = 0;
        init(src);
        while (current.node != dest && current.distance != Infinity) {
            for (var i = 0; i < graph.length; i += 1) {
                if (current.node !== i && //if it's not the current node
                    !visited[i] && //and if we haven't visited this node
                    !isNaN(graph[i][current.node])) { //and this node is sibling of the current...

                    tempDistance = current.distance + graph[i][current.node]; 
                    if (tempDistance < distance[i].distance) {
                        distance[i].distance = tempDistance;
                    }
                }
            }
            visited[current.node] = true;
            current = unvisited.extract();
        }
        return distance[dest].distance;
    };
}();
